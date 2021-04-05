function loadView(path) {
  return () =>
    import(
      /* webpackChunkName: "[request]" */
      // /* webpackPrefetch: true */
      // /* webpackPreload: true */
      `@views/${path}`
    ).then(m => m.default || m)
}

export default [
  { path: '/login', name: 'login', component: loadView('auth/login.vue') },

  {
    path: '/register',
    name: 'register',
    component: loadView('auth/register.vue')
  },

  { path: '/', name: 'dashboard', component: loadView('dashboard.vue') },

  { path: '*', component: loadView('errors/404.vue') }
]
