<script lang="ts">
  export let color = "is-red";
</script>

<h1 class="container {color}">
  Hello, world!
</h1>

<style lang="scss">
  .container {
    margin: 0;
    padding: 1em;
    &.is-red {
      color: red;
    }
  }
</style>
