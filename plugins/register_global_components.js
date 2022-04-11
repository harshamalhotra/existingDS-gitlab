import Vue from 'vue';
import ExampleDisplay from '../components/example_display.vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';

Object.entries({
  ExampleDisplay,
  StoryViewer,
  Note,
  Todo,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
