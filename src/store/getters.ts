import { useStore } from 'vuex'
import { tagState } from './type'

const store = useStore()

const getters = {
  tag: (state: any) => state.tags.tag,
  tagList: (state: any) => state.tags.tagList,
  token: (state: any) => state.user.token,
  isCollapse: (state: any) => state.isCollapse,
}

export default getters
