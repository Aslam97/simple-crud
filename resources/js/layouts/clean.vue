<template>
  <transition
    name="page"
    mode="out-in"
  >
    <slot>
      <RouterView />
    </slot>
  </transition>
</template>
