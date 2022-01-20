import { createStore } from 'vuex'

export default createStore({
  state: {
    err_msg: ''
  },
  mutations: {
    update_err_msg: (state, err_msg) => {
      state.err_msg = err_msg;
    }
  },
  actions: {
  },
  modules: {
  }
})
