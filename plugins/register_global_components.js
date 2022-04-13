import Vue from 'vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';

Object.entries({
  StoryViewer,
  Note,
  Todo,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
