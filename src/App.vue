<template>
  <layout>
    <router-view />
  </layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Layout from '@/layouts/Layout/Layout.vue';

@Options({
  components: { Layout },
  created() {
    document.title = 'TodoList';
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~@/assets/styles/global.scss';
</style>
