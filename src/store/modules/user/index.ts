import state from './state'
import getters from './getters'
import mutations from './mutations'

export const user = {
  namespaced: true,
  state,
  getters,
  mutations
}