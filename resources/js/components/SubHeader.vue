<script>
export default {
  name: 'SubHeader'
}
</script>

<template>
  <div
    id="headerMenuCollapse"
    class="header collapse d-lg-flex p-0"
  >
    <div class="container">
      <div class="col-lg order-lg-first">
        <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="nav-link"
              active-class="active"
            >
              <i class="fe fe-home" />
              Dashboard
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
