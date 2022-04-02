import ThemeStorage from '@/utils/storage/ThemeStorage';
import { ActionContext } from 'vuex';

export interface ISettings {
  theme: 'dark' | 'light';
}

export const settings = {
  namespaced: true,
  state: () =>
    ({
      theme: !!ThemeStorage.get() ? ThemeStorage.get() : 'dark',
    } as ISettings),
  mutations: {
    changeTheme(state: ISettings, theme: ISettings['theme']) {
      state.theme = theme;
    },
  },
  actions: {
    changeTheme(
      { commit, state }: ActionContext<any, any>,
      theme: ISettings['theme']
    ) {
      commit('changeTheme', theme);
      ThemeStorage.set(theme);
    },
  },
};
