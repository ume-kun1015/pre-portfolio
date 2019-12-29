import { firestore } from '../misc/firebase'

export const state = () => {
  return {
    techBlogItems: [],
  }
}

export const getters = {
  techBlogItems(state) {
    return state.techBlogItems
  },
}

export const mutations = {
  setTechBlogItems(state, { techBlogItems }) {
    state.techBlogItems = techBlogItems
  },
}

export const actions = {
  fetch({ commit }) {
    return firestore
      .collection('tech-blog-items')
      .get()
      .then(snapshot => {
        commit('setTechBlogItems', { techBlogItems: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) })
      })
  },
}
