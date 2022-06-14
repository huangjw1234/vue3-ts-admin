import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import getters from './getters'
import tags from './modules/tags'
import user from './modules/user'
import { getStore, setStore } from '/@/util/store'

interface RootState {
  isCollapse: boolean
  menu: any[]
  menuAll: any[]
  commit?: any
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
      menu: [],
      menuAll: getStore('menuAll', 'sesssion') || [],
    }
  },
  mutations: {
    SET_COLLAPSE(state, data) {
      state.isCollapse = data
    },
    SESSION_MENU(state, data) {
      state.menu = data
    },
    STORE_MENU(store, data) {
      let { menuAll, res } = data
      store.commit('SESSION_MENU', res)
      setStore('menuAll', JSON.stringify(menuAll), 'session')
      setStore('menuAll', JSON.stringify(menuAll))
      setStore('menu', JSON.stringify(res), 'session')
      setStore('menu', JSON.stringify(res))
    },
  },
  actions: {
    GET_ROUTER({ state }, data) {
      return new Promise((resolve, reject) => {
        resolve([])
      })
    },
  },
  getters,
})

export default store

export function useStore() {
  return baseUseStore(key)
}
