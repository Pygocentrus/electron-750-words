<template>
  <div class="container">
    <p>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // empty
}
</script>