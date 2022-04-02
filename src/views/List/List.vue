<template>
  <div class="list">
    <todo-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/TodoList/TodoList.vue';

@Options({
  components: { TodoList },
})
export default class List extends Vue {}
</script>

<style scoped lang="scss">
@import 'list.styles';
</style>
