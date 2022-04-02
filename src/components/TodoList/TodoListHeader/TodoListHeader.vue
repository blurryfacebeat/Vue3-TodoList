<template>
  <div class="todo-list__header">
    <div class="header__wrapper" @click="changeTheme">
      <sun-icon v-if="currentTheme === 'light'" />
      <moon-icon v-if="currentTheme === 'dark'" class="moon-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SunIcon from '@/assets/icons/sun.svg';
import MoonIcon from '@/assets/icons/moon.svg';
import { useStore } from 'vuex';

@Options({
  components: {
    SunIcon,
    MoonIcon,
  },
})
export default class TodoListHeader extends Vue {
  store = useStore();

  get currentTheme() {
    return this.store.state.settings.theme;
  }

  changeTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    return this.store.dispatch('settings/changeTheme', newTheme);
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list-header';
</style>
