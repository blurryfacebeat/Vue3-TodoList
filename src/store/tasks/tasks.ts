import TasksStorage from '@/utils/storage/TasksStorage';
import { ITodoListItem } from '@/components/TodoList/TodoListItems/todo-list-items.interface';
import { ActionContext } from 'vuex';

export interface IState {
  tasksList: Array<ITodoListItem>;
  filter: 'All' | 'Active' | 'Finished';
}

export const tasks = {
  namespaced: true,
  state: () =>
    ({
      tasksList: !!TasksStorage.get()
        ? JSON.parse(TasksStorage.get() as string)
        : [],
      filter: 'All',
    } as IState),
  mutations: {
    addTask({ tasksList }: IState, task: ITodoListItem) {
      tasksList.push(task);
    },
    deleteTask({ tasksList }: IState, idx: number) {
      tasksList.splice(idx, 1);
    },
    finishTask({ tasksList }: IState, idx: number) {
      tasksList[idx].isFinished = !tasksList[idx].isFinished;
    },
    clearCompleted(state: IState) {
      state.tasksList = state.tasksList.filter((task) => !task.isFinished);
    },
    changeFilter(state: IState, status: IState['filter']) {
      state.filter = status;
    },
  },
  actions: {
    addTask({ commit, state }: ActionContext<any, any>, task: ITodoListItem) {
      commit('addTask', task);
      TasksStorage.set(JSON.stringify(state.tasksList));
    },
    deleteTask({ commit, state }: ActionContext<any, any>, idx: number) {
      commit('deleteTask', idx);
      TasksStorage.set(JSON.stringify(state.tasksList));
    },
    finishTask({ commit, state }: ActionContext<any, any>, idx: number) {
      commit('finishTask', idx);
      TasksStorage.set(JSON.stringify(state.tasksList));
    },
    clearCompleted({ commit, state }: ActionContext<any, any>) {
      commit('clearCompleted');
      commit('changeFilter', 'All');
      TasksStorage.set(JSON.stringify(state.tasksList));
    },
  },
  getters: {
    filteredTasks: ({ tasksList, filter }: IState) => {
      switch (filter) {
        case 'All':
          return tasksList;
        case 'Active':
          return tasksList.filter((task) => !task.isFinished);
        case 'Finished':
          return tasksList.filter((task) => task.isFinished);
      }
    },
  },
};
