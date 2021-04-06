import axios from 'axios'

export const state = {
  assignees: []
}

export const getters = {
  assignees: state => state.assignees
}

export const mutations = {
  setAssignees(state, payload) {
    state.assignees = payload
  }
}

export const actions = {
  index({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/assignees')
        .then(({ data }) => {
          const { data: assignees } = data
          commit('setAssignees', assignees)
          resolve(data)
        })
        .catch(({ response }) => reject(response))
    })
  }
}
