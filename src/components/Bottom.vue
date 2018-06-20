<template>
  <div class="ui fluid footer">
    <footer>
      <div class="ui footer container">
        <div class="signature">
          <svg class="tvn icon"><use xlink:href="#icon-taverna"></use></svg>
          <div>Powered by the
            <a href="#" target="_blank" class="tvn link weight bold" >
              Cookbook Community
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="tvn link weight bold" >
              © Cookbook, Inc. All rights reserved.
            </a>
          </div>
        </div>
        <div class="ui labels">
          <a class="ui label">
            Terms &amp; Conditions
          </a>
          <a class="ui label">
            Data Rention Policy
          </a>
        </div>
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
.items {
  list-style-type: none;
}
.items li {
  padding: 8px;
}
.copyright {
  border-top: 1px solid #eee;
  padding-top: 25px;
  margin-bottom: 50px;
  font-size: 20px;
}
</style>
