export const state = () => {
  return {
    items: [],
  }
}

export const getters = {
  items(state) {
    return state.items
  },
}

export const mutations = {
  setItems(state, { items }) {
    state.items = items
  },
}

export const actions = {
  fetch({ commit }) {
    return this.$axios.get('/qiita/items').then(response => {
      commit('setItems', { items: response.data })
    })
  },
}
