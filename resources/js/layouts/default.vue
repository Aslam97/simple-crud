<script>
import Header from '@components/Header.vue'
import SubHeader from '@components/SubHeader.vue'

export default {
  components: { Header, SubHeader }
}
</script>

<template>
  <div class="page">
    <div class="page-main">
      <Header />
      <SubHeader />
      <div class="my-3 my-md-5">
        <transition
          name="page"
          mode="out-in"
        >
          <slot>
            <RouterView />
          </slot>
        </transition>
      </div>
    </div>
  </div>
</template>
