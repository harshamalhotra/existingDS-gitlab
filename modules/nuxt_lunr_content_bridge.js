/* eslint-disable import/no-default-export */
import { startCase } from 'lodash';
import MarkdownParser from '@nuxt/content/parsers/markdown/index';

/**
 * Cleans a string for a search index, extracting all words that are
 * at least two characters long
 *
 * @param string
 * @returns {string}
 */
export function cleanText(string) {
  return [...string.matchAll(/[a-z]{2,}/gi)].join(' ');
}

/**
 * This ties two nuxt modules together:
 * - `@nuxtjs/lunr-module` which we use for our static search
 * - `@nuxt/content` which we use to load the markdown content files
 *
 * `@nuxt/content` has an internal database and every time a document
 * is inserted into that database, we insert a new document into our
 * `@nuxtjs/lunr-module` search index
 *
 */
export default function NuxtLunrContentBridge() {
  const parser = new MarkdownParser({});

  // Listen to new documents being added to the database
  this.nuxt.hook('content:file:beforeInsert', (document) => {
    if (document.extension === '.md') {
      // Add document to the search index
      this.nuxt.callHook('lunr:document', {
        document: {
          id: document.slug,
          title: document.name,
          /*
          document.body is a parsed AST of the markdown document
          The MarkdownParser has a method to extract the text only nodes,
          which we can reuse here
          */
          body: cleanText(parser.flattenNodeText(document.body)),
        },
        meta: {
          title: `${startCase(document.dir)} > ${document.name}`,
          route: document.path,
        },
      });
    }
  });
}
