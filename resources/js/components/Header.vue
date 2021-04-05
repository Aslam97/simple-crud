<script>
export default {
  name: 'Header'
}
</script>

<template>
  <div class="header py-4">
    <div class="container">
      <div class="d-flex">
        <RouterLink
          class="header-brand"
          :to="{ name: 'home' }"
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
              <span
                class="avatar"
                style="background-image: url(./demo/faces/female/25.jpg)"
              />
              <span class="ml-2 d-none d-lg-block">
                <span class="text-default">Jane Pearson</span>
                <small class="text-muted d-block mt-1">
                  Administrator
                </small>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a
                class="dropdown-item"
                href="#"
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
