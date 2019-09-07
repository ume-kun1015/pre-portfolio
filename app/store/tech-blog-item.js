import firebase from '../misc/firebase'

const db = firebase.firestore()

export const state = () => {
  return {
    techBlogItem: {},
  }
}

export const getters = {
  techBlogItem(state) {
    return state.techBlogItem
  },
}

export const mutations = {
  setTechBlogItem(state, { techBlogItem }) {
    state.techBlogItem = techBlogItem
  },
}

export const actions = {
  fetch({ commit }, { id }) {
    return db
      .collection('tech-blog-items')
      .doc(id)
      .get()
      .then(doc => {
        commit('setTechBlogItem', { techBlogItem: { id, ...doc.data() } })
      })
  },
}
