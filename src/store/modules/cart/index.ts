import state from './state'
import getters from './getters'
import mutations from './mutations'

export const cart = {
  namespaced: true,
  state,
  getters,
  mutations
}