<script>
export default {
  layout: 'clean',

  meta: {
    title: 'Register'
  },

  middleware: 'guest',

  data: () => ({
    model: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    tryToSubmit: false
  }),

  methods: {
    async onSubmit() {
      this.tryToSubmit = true

      await this.$store.dispatch('auth/csrfCookie')

      try {
        await this.$store.dispatch('auth/register', this.model)
        this.$router.push(
          this.$route.query.redirectFrom || { name: 'dashboard' }
        )
      } catch (e) {
        const {
          data: { errors }
        } = e
        this.tryToSubmit = false
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
                  Create new account
                </div>

                <BaseInput
                  v-model="model.name"
                  rules="required"
                  name="Name"
                  :label="true"
                  vid="name"
                />

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

                <div class="form-footer">
                  <button class="btn btn-primary btn-block">
                    Create new account
                  </button>
                </div>
              </div>
            </form>
            <div class="text-center text-muted">
              Already have account?
              <RouterLink :to="{ name: 'login' }">
                Log In
              </RouterLink>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
