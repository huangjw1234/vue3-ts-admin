import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import getters from './getters'
import tags from './modules/tags'
import user from './modules/user'

interface RootState {
  isCollapse: boolean
}

export const key: InjectionKey<Store<RootState>> = Symbol()

const store = createStore<RootState>({
  modules: {
    tags,
    user,
  },
  state() {
    return {
      isCollapse: false,
    }
  },
  mutations: {
    SET_COLLAPSE(state, data) {
      state.isCollapse = data
    },
  },
  actions: {},
  getters,
})

export default store

export function useStore() {
  return baseUseStore(key)
}
