<template>
  <div class="footer blue">
    <span>
      <a class="ui red label">
        Report a bug <i class="bug icon"></i>
      </a>
    </span>
    <span class="bottom aligned">
      <span v-for="link in links">
        <a v-bind:href="content"> {{ link }} | </a>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: '',
      links: ['About', 'User Stories', 'Find Cookbooks', 'Terms & Conditions', 'Data Retention Policy', 'API docs']
    }
  }
}
</script>
<style>
.footer {
  position: absolute;
  /* bottom: 0;  remove this */
  /*margin-top: -50px; /* add this */*/
  left: 0;
  width: 100%;
  padding: 15px 0;
}
</style>
