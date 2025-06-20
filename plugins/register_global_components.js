import Vue from 'vue';
import FigmaEmbed from '../components/figma_embed.vue';
import Grid from '../components/grid.vue';
import IllustrationDirectory from '../components/illustration_directory.vue';
import Do from '../components/do.vue';
import Dont from '../components/dont.vue';
import FigureImg from '../components/figure_img.vue';
import LookbookViewer from '../components/lookbook_viewer.vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';
import VimeoPlayer from '../components/vimeo_player.vue';

Object.entries({
  FigmaEmbed,
  Grid,
  IllustrationDirectory,
  Do,
  Dont,
  FigureImg,
  LookbookViewer,
  StoryViewer,
  Note,
  Todo,
  VimeoPlayer,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
