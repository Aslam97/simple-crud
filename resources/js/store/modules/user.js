import axios from 'axios'

export const state = {
  tasks: []
}

export const getters = {
  tasks: state => state.tasks
}

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload
  }
}

export const actions = {
  tasks({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/user/tasks')
        .then(({ data }) => {
          const { data: tasks } = data
          commit('setTasks', tasks)
          resolve(data)
        })
        .catch(({ response }) => reject(response))
    })
  }
}
