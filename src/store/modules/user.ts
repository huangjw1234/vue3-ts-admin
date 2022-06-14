import { getToken } from '/@/util/auth'
import { module, user as userState } from '../type'

const user: module<userState> = {
  state() {
    return {
      token: getToken() || 'xxxxx',
      userInfo: {
        userId: '000',
      },
    }
  },
  mutations: {
    SET_USERINFO(state: userState, data: any) {
      state.userInfo = data
    },
  },
  actions: {},
}

export default user
