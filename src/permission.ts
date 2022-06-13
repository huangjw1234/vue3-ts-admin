import { validatenull } from '/@/util/validate'
import { getToken } from './util/auth'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router/index'
import store from './store/index'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, form, next) => {
  NProgress.start()
  if (to.path !== '/login') {
    if (store.getters.token.length === 0) {
      next({
        path: 'login',
      })
    } else {
      const value = to.query.src || to.fullPath
      const label = to.query.name || to.name
      const meta = to.meta || {}
      if (!validatenull(value) && !validatenull(label)) {
        store.commit('ADD_TAG', {
          label,
          value,
          params: to.params,
          query: to.query,
          group: [],
          meta,
        })
        store.commit('REFRESH_TAG_CLOAE')
      }
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, form, next) => {
  NProgress.done()
})
