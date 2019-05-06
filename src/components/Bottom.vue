<template>
  <div>
    <footer>
      <div class="ui secondary menu flex-container footer-contents">
        <a class="item" href="/">Home</a>
        <a class="item">Terms &amp; Conditions</a>
        <a class="item">Data Retention Policy</a>
        <a class="item" style="color:red!important;">Disclaimer</a>
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
