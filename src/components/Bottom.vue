<template>
  <div>
    <footer>
      <div class="ui secondary menu flex-container footer-contents">
        <a class="item" href="/">Home</a>
        <router-link :to="{
          name: 'TermsAndConditions'
          }">
          <a
            class="item rl-fix"
            title="Find out how to use this website">
            Terms &amp; Conditions
          </a>
        </router-link>
        <router-link :to="{
          name: 'DataRetentionPolicy'
          }">
          <a
            class="item rl-fix"
            title="Find out how to use this website">
            Data Retention Policy
          </a>
        </router-link>
        <router-link :to="{
          name: 'Disclaimer'
          }">
          <a
            class="item rl-fix"
            title="Find out how to use this website">
            Disclaimer
          </a>
        </router-link>

        <!-- disclaimer:
        contents are submitted by users of this platform. cookbook does not provide the contents and therefore is <noscript>
          liable to misleading content or .... cookbook owns the content provided and will take the accolades and share it with
          best and consistent contributors by way of appreciating them my lawyer help me complete it
        </noscript> -->
        <a class="item">
          <i class="facebook f icon"></i>
        </a>
        <a class="item">
          <i class="twitter t icon"></i>
        </a>
        <a class="item">
          <i class="instagram icon"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
footer {
  border-top: 1px solid #eee;
  padding: 20px 0px 0px;
}
.footer-contents {
  /* border-top: 1px solid #ccc!important; */
  margin:2%!i-topmportant;
  margin-bottom: 5%!important;
}
</style>
