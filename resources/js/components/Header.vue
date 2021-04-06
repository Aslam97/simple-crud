<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapGetters('auth', ['user'])
  },

  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<template>
  <div
    v-if="user"
    class="header py-4"
  >
    <div class="container">
      <div class="d-flex">
        <RouterLink
          class="header-brand"
          :to="{ name: 'dashboard' }"
        >
          <img
            src="~@assets/img/logo.svg"
            class="header-brand-img"
            alt="logo"
          >
        </RouterLink>
        <div class="d-flex order-lg-2 ml-auto">
          <div class="dropdown">
            <a
              href="#"
              class="nav-link pr-0 leading-none"
              data-toggle="dropdown"
            >
              <img
                :src="user.avatar"
                alt="avatar"
                class="avatar"
              >
              <span class="ml-2 d-none d-lg-block">
                <span class="text-default">{{ user.name }}</span>
                <small class="text-muted d-block mt-1">
                  {{ user.role.name }}
                </small>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="logout"
              >
                <i class="dropdown-icon fe fe-log-out" /> Log out
              </a>
            </div>
          </div>
        </div>
        <a
          href="#"
          class="header-toggler d-lg-none ml-3 ml-lg-0"
          data-toggle="collapse"
          data-target="#headerMenuCollapse"
        >
          <span class="header-toggler-icon" />
        </a>
      </div>
    </div>
  </div>
</template>
