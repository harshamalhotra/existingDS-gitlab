import Vue from 'vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';
import FoundationsColorPalette from '../components/foundations_color_palette.vue';

Object.entries({
  StoryViewer,
  Note,
  Todo,
  FoundationsColorPalette,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
