import Vue from 'vue';
import DesignToken from '../components/design_token.vue';
import DesignTokensTable from '../components/design_tokens_table.vue';
import DesignTokensColorPalette from '../components/design_tokens_color_palette.vue';
import Do from '../components/do.vue';
import Dont from '../components/dont.vue';
import ExtendedNotice from '../components/extended_notice.vue';
import FigmaEmbed from '../components/figma_embed.vue';
import FigureImg from '../components/figure_img.vue';
import Grid from '../components/grid.vue';
import IconographyDirectory from '../components/iconography_directory.vue';
import IllustrationDirectory from '../components/illustration_directory.vue';
import LookbookViewer from '../components/lookbook_viewer.vue';
import Note from '../components/note.vue';
import StoryViewer from '../components/story_viewer.vue';
import Todo from '../components/todo.vue';
import VimeoPlayer from '../components/vimeo_player.vue';

Object.entries({
  DesignToken,
  DesignTokensTable,
  DesignTokensColorPalette,
  Do,
  Dont,
  ExtendedNotice,
  FigmaEmbed,
  FigureImg,
  Grid,
  IconographyDirectory,
  IllustrationDirectory,
  LookbookViewer,
  Note,
  StoryViewer,
  Todo,
  VimeoPlayer,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
