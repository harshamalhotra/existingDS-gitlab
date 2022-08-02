import Vue from 'vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';
import ColorPalette from '../components/color_palette/color_palette.vue';

Object.entries({
  StoryViewer,
  Note,
  Todo,
  ColorPalette,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
