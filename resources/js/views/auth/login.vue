<script>
export default {
  layout: 'clean',

  meta: {
    title: 'Log In'
  },

  middleware: 'guest',

  data: () => ({
    model: {
      email: '',
      password: '',
      remember: ''
    },
    tryingToLogIn: false
  }),

  methods: {
    async onSubmit() {
      this.tryingToLogIn = true

      await this.$store.dispatch('auth/csrfCookie')

      try {
        await this.$store.dispatch('auth/login', this.model)
        this.$router.push(
          this.$route.query.redirectFrom || { name: 'dashboard' }
        )
      } catch (e) {
        const {
          data: { errors }
        } = e
        this.tryingToLogIn = false
        this.$refs.formLogin.setErrors(errors)
      }
    }
  }
}
</script>

<template>
  <div class="page">
    <div class="page-single">
      <div class="container">
        <div class="row">
          <ValidationObserver
            ref="formLogin"
            v-slot="{ handleSubmit }"
            tag="div"
            class="col col-login mx-auto"
          >
            <form
              class="card"
              autocomplete="off"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <div class="card-body p-6">
                <div class="card-title">
                  Login to your account
                </div>

                <BaseInput
                  v-model="model.email"
                  rules="required|email"
                  name="Email Address"
                  :label="true"
                  vid="email"
                />

                <BaseInput
                  v-model="model.password"
                  rules="required"
                  type="password"
                  name="Password"
                  :label="true"
                />

                <div class="form-group">
                  <label class="custom-control custom-checkbox">
                    <input
                      v-model="model.remember"
                      type="checkbox"
                      class="custom-control-input"
                    >
                    <span class="custom-control-label">Remember me</span>
                  </label>
                </div>
                <div class="form-footer">
                  <button class="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
              </div>
            </form>
            <div class="text-center text-muted">
              Don't have account yet?
              <RouterLink :to="{ name: 'register' }">
                Register
              </RouterLink>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
