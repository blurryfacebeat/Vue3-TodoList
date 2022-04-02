<template>
  <div class="todo-list__footer">
    <button @click="clearCompleted" class="footer-button">
      Clear completed
    </button>
    <todo-list-filters :filters="filters" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { IState } from '@/store/tasks/tasks';
import TodoListFilters from '@/components/TodoList/TodoListFooter/TodoListFilters/TodoListFilters.vue';

@Options({
  components: { TodoListFilters },
})
export default class TodoListFooter extends Vue {
  store = useStore();
  filters: Array<IState['filter']> = ['All', 'Active', 'Finished'];

  clearCompleted() {
    this.store.dispatch('tasks/clearCompleted');
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list-footer';
</style>
