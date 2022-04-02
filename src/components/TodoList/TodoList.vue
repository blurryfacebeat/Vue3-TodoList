<template>
  <div class="todo-list">
    <todo-list-header />
    <todo-list-counter />
    <todo-list-items :items="tasksList" />
    <transition name="fade">
      <todo-list-footer v-if="tasksListLength" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoListHeader from '@/components/TodoList/TodoListHeader/TodoListHeader.vue';
import TodoListCounter from '@/components/TodoList/TodoListCounter/TodoListCounter.vue';
import TodoListFooter from '@/components/TodoList/TodoListFooter/TodoListFooter.vue';
import TodoListItems from '@/components/TodoList/TodoListItems/TodoListItems.vue';
import { useStore } from 'vuex';

@Options({
  components: {
    TodoListItems,
    TodoListFooter,
    TodoListCounter,
    TodoListHeader,
  },
})
export default class TodoList extends Vue {
  store = useStore();

  get tasksList() {
    return this.store.getters['tasks/filteredTasks'];
  }

  get tasksListLength() {
    return this.store.state.tasks.tasksList.length;
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list.styles';
</style>
