<template>
  <div class="container">
    <app-nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './nav';

export default {
  components: {
    appNav: Nav,
  },
}
</script>