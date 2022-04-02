<template>
  <h2>{{ filteredTasksLength }} tasks</h2>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';

@Options({})
export default class TodoListCounter extends Vue {
  store = useStore();

  get filteredTasksLength() {
    return this.store.getters['tasks/filteredTasks'].length;
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list-counter';
</style>
