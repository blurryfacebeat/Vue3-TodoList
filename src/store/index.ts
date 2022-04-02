import { createStore } from 'vuex';
import { tasks } from '@/store/tasks/tasks';
import { settings } from '@/store/settings/settings';

export default createStore({
  modules: { tasks, settings },
});
