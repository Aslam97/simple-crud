import axios from 'axios'

export const state = {
  user: null,
  loggedIn: localStorage.getItem('loggedIn') || ''
}

export const getters = {
  user: state => state.user,
  loggedIn: state => (state.loggedIn === 'true' ? true : false),
  check: state => state.user !== null
}

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload
    localStorage.setItem('loggedIn', payload)
  },

  setUser(state, payload) {
    state.user = payload
  },

  removeUser(state) {
    state.loggedIn = null
    localStorage.removeItem('loggedIn')
  },

  setLogout(state) {
    state.user = null
    state.loggedIn = null

    localStorage.removeItem('loggedIn')
  }
}

export const actions = {
  async csrfCookie() {
    const { data } = await axios.get('/api/csrf-cookie')

    return data
  },

  async fetchUser({ commit }) {
    try {
      const {
        data: { data }
      } = await axios.get('/api/user')

      commit('setUser', data)
    } catch (e) {
      commit('removeUser')
    }
  },

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          commit('setLoggedIn', 'true')
          commit('setUser', data)
          resolve(data)
        })
        .catch(({ response }) => reject(response))
    })
  },

  async logout({ commit }) {
    try {
      await axios.post('/logout')
    } catch (e) {}

    commit('setLogout')
  }
}
