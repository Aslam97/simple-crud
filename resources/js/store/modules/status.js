import axios from 'axios'

export const state = {
  statuses: []
}

export const getters = {
  statuses: state => state.statuses
}

export const mutations = {
  setStatuses(state, payload) {
    state.statuses = payload
  }
}

export const actions = {
  index({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/statuses')
        .then(({ data }) => {
          const { data: statuses } = data
          commit('setStatuses', statuses)
          resolve(data)
        })
        .catch(({ response }) => reject(response))
    })
  }
}
