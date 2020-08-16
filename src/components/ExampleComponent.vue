<template>
<div>
  <h2>{{ title }}</h2>
</div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    numbers: Array
  },
  data() {
    return {
		title: 'This is an Example component'
    }
  }
};
</script>
