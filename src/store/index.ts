import {createStore} from 'vuex'
import {pagination} from './modules/pagination'
import {user} from './modules/user'

export default createStore({
  modules: {
    pagination,
    user
  }
})