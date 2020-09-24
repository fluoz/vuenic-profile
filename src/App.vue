<template>
  <div>
    <my-nav></my-nav>
    <my-feature></my-feature>
    <my-footer></my-footer>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import feature from "./components/feature.vue";
import footer from "./components/footer.vue";
export default {
  components: {
    "my-nav": navbar,
    "my-feature": feature,
    "my-footer": footer,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: "lato", sans-serif;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
</style>
