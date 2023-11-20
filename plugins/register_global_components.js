import Vue from 'vue';
import FigureImg from '../components/figure_img.vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';
import MermaidDiagram from '../components/mermaid_diagram.vue';
import VimeoPlayer from '../components/vimeo_player.vue';

Object.entries({
  FigureImg,
  StoryViewer,
  Note,
  Todo,
  MermaidDiagram,
  VimeoPlayer,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
