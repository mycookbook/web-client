<template>
  <div class="ui fluid footer">
    <br><br><br>
    <footer>
      <div>
        <ul class="items">
          <h3>Cookbook</h3>
          <li>
            <a href="/#">
              About
            </a>
          </li>
          <li>
            <a href="/#">
              Help
            </a>
          </li>
          <li>
            <a href="/#">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="/#">
              Data Retention Policy
            </a>
          </li>
          <li>
            <a href="/#">
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </div>
      <div class="note copyright">
        <small>
          <span>
            <img src="../assets/logo2.png" style="width:1.2%; height:auto;"/>
          </span>
          <span style="color:#999999;">
            © Cookbook, Inc.
          </span>
        </small>
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
  padding: 20px 0px;
}
.items {
  list-style-type: none;
}
.items li {
  padding: 8px;
}``
.copyright {
  border-top: 1px solid #eee;
  padding-top: 25px;
  margin-bottom: 50px;
  font-size: 20px;
}
</style>
