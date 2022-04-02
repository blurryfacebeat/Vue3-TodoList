<template>
  <div class="todo-list__item">
    <label @click.prevent="finishTask">
      <span class="wrapper">
        <input class="checkbox" type="checkbox" :checked="item.isFinished" />
        <span class="decorate-wrapper">
          <span class="fake-checkbox">
            <okay-icon class="okay-icon" />
          </span>
          <span class="name">{{ item.name }}</span>
        </span>
      </span>
    </label>
    <div class="menu-container">
      <div
        @click="actionsMenuHandler"
        v-click-outside="closeActionsMenu"
        class="menu-icon"
      />
      <transition name="fade">
        <div v-if="isActionsMenuActive" class="actions-menu">
          <div @click="deleteTask" class="action-item">
            <delete-icon />
            <p>Delete</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import { ITodoListItem } from '@/components/TodoList/TodoListItems/todo-list-items.interface';
import OkayIcon from '@/assets/icons/okay.svg';
import DeleteIcon from '@/assets/icons/delete.svg';
import vClickOutside from 'click-outside-vue3';
import { useStore } from 'vuex';

class Props {
  item: ITodoListItem = prop({ required: true, type: Object });
  idx: number = prop({ required: true });
}

@Options({
  components: {
    OkayIcon,
    DeleteIcon,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
})
export default class TodoListItem extends Vue.with(Props) {
  store = useStore();
  isActionsMenuActive: boolean = false;

  actionsMenuHandler() {
    this.isActionsMenuActive ? this.closeActionsMenu() : this.openActionsMenu();
  }

  openActionsMenu() {
    this.isActionsMenuActive = true;
  }

  closeActionsMenu() {
    this.isActionsMenuActive = false;
  }

  deleteTask() {
    this.store.dispatch('tasks/deleteTask', this.idx);
  }

  finishTask() {
    this.store.dispatch('tasks/finishTask', this.idx);
  }
}
</script>

<style scoped lang="scss">
@import 'todo-list-item.styles';
</style>
