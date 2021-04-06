import axios from 'axios'

export const state = {
  task: ''
}

export const getters = {
  task: state => state.task
}

export const mutations = {
  setTask(state, payload) {
    state.task = payload
  }
}

export const actions = {
  store(_, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/tasks', payload)
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response))
    })
  },

  edit({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/tasks/${id}`)
        .then(({ data }) => {
          const { data: task } = data
          commit('setTask', task)
          resolve(data)
        })
        .catch(({ response }) => reject(response))
    })
  },

  update(_, data) {
    const { id, payload } = data
    return new Promise((resolve, reject) => {
      axios
        .put(`/api/tasks/${id}`, payload)
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response))
    })
  },

  destroy(_, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/tasks/${id}`)
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response))
    })
  }
}
