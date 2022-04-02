<template>
  <div @click="changeFilter" :class="['filter-item', { active: isActive }]">
    {{ filter }}
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from 'vue-class-component';
import { IState } from '@/store/tasks/tasks';
import { useStore } from 'vuex';

class Props {
  filter: IState['filter'] = prop({ required: true });
}

@Options({})
export default class FilterItem extends Vue.with(Props) {
  store = useStore();

  changeFilter() {
    this.store.commit('tasks/changeFilter', this.filter);
  }

  get isActive() {
    return this.store.state.tasks.filter === this.filter;
  }
}
</script>

<style scoped lang="scss">
@import 'filter-item.styles';
</style>
