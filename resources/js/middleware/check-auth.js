import store from '@store'

export default async (to, from, next) => {
  if (!store.getters['auth/check'] && store.getters['auth/loggedIn']) {
    try {
      await store.dispatch('auth/fetchUser')
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  next()
}
