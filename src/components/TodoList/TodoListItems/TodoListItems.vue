<template>
  <input
    @keydown.enter="addTask"
    class="todo-list__input"
    v-model="taskName"
    placeholder="Add a task..."
  />
  <transition-group
    name="fade"
    tag="div"
    class="todo-list__items"
    v-if="items.length"
  >
    <todo-list-item
      v-for="(item, idx) in items"
      :key="item.name"
      :item="item"
      :idx="idx"
    />
  </transition-group>
  <p class="todo-list__empty" v-if="!items.length">
    You don't have any tasks yet.
  </p>
</template>

<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component';
import TodoListItem from '@/components/TodoList/TodoListItems/TodoListItem/TodoListItem.vue';
import { ITodoListItem } from '@/components/TodoList/TodoListItems/todo-list-items.interface';
import { useStore } from 'vuex';

class Props {
  items: Array<ITodoListItem> = prop({ required: true });
}

@Options({
  components: { TodoListItem },
})
export default class TodoListItems extends Vue.with(Props) {
  store = useStore();
  taskName: string = '';

  addTask() {
    this.store.dispatch('tasks/addTask', {
      name: this.taskName,
      isFinished: false,
    });
    this.taskName = '';
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list-items.styles';
</style>
