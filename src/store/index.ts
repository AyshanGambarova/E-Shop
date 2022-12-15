import {createStore} from 'vuex'
import {pagination} from './modules/pagination'

export default createStore({
  modules: {
    pagination,
  }
})