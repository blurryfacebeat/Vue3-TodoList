<template>
  <div class="home">
    <h1>Todo List</h1>
    <router-link to="/list">Go to tasks</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import 'home.styles';
</style>
