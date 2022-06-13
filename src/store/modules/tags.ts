import { Store } from 'vuex'
import { setStore, getStore } from '/@/util/store'
import { diff } from '/@/util/util'
import { tagState, tag } from '../type'
import router from '/@/router/index'

const tagObj = {
  label: '', //标题名称
  value: '', //标题的路径
  params: '', //标题的路径参数
  query: '', //标题的参数
  meta: {}, //额外参数
  group: [], //分组
}

const firstPage = {
  label: '首页',
  value: '/home/index',
  params: {},
  query: {},
  meta: {
    i18n: 'dashboard',
  },
  group: [],
  close: false,
}

function setFirstPage(tagList: Array<tag>) {
  if (tagList && tagList.length == 1) {
    tagList[0].close = false
  } else {
    tagList.map((ele) => {
      if (ele.value == firstPage.value) {
        ele.close = false
      } else {
        ele.close = true
      }
      return ele
    })
  }
}

const tags = {
  state() {
    return {
      tagList: getStore('tagList', 'session') || [firstPage],
      tag: getStore('tag', 'session') || tagObj,
      tagFirst: firstPage,
    }
  },
  mutations: {
    ADD_TAG(state: tagState, action: tag) {
      state.tag = action
      setStore('tag', action, 'session')
      if (state.tagList.some((ele) => diff(ele, action))) return
      state.tagList.push(action)
      setFirstPage(state.tagList)
      setStore('tagList', state.tagList, 'session')
    },
    DEL_TAG(state: tagState, action: tag) {
      state.tagList = state.tagList.filter((ele) => {
        return !diff(ele, action)
      })
      setFirstPage(state.tagList)
      setStore('tagList', state.tagList, 'session')
    },
    REFRESH_TAG_CLOAE(state: tagState) {
      setFirstPage(state.tagList)
    },
    CLEAR_ALL_TAG(state: tagState) {
      state.tagList = state.tagList.filter((item: tag) => {
        return item.label === '首页'
      })
      router.push({
        name: '首页',
      })
      state.tag = firstPage
      setStore('tag', firstPage, 'session')
      setStore('tagList', state.tagList, 'session')
    },
  },
  actions: {},
}

export default tags
