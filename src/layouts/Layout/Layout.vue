<template>
  <div :class="['layout', { light: isLightTheme }]">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';

@Options({})
export default class Layout extends Vue {
  store = useStore();

  get isLightTheme() {
    return this.store.state.settings.theme === 'light';
  }
}
</script>

<style scoped lang="scss">
@import 'layout.styles';
</style>
