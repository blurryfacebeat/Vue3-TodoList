<template>
  <div class="todo-list__filters">
    <filter-item v-for="filter in filters" :key="filter" :filter="filter" />
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component';
import { IState } from '@/store/tasks/tasks';
import FilterItem from '@/components/TodoList/TodoListFooter/TodoListFilters/FilterItem/FilterItem.vue';

class Props {
  filters: Array<IState['filter']> = prop({ required: true });
}

@Options({
  components: { FilterItem },
})
export default class TodoListFilters extends Vue.with(Props) {}
</script>

<style scoped lang="scss">
@import 'todo-list-filters.styles';
</style>
