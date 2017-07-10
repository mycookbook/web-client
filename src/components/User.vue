<template>
  <div>
    {{ $route.params.username }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        username: ''
      }
    }
  }
  </script>
