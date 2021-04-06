import axios from 'axios'

export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  store(_, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/tasks', payload)
        .then(({ data }) => resolve(data))
        .catch(({ response }) => reject(response))
    })
  }
}
