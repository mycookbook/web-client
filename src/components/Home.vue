<template>
  <div class="ui container">
    <TopNav></TopNav>
    <div class="ui two column centered grid">
      <div class="column">
        <h1>
          <span>Use Cookbook</span>
        </h1>
      </div>
      <div class="four column centered row">
        <div class="column">
            <h2>
              <span class="valueProposition">
                Have access to millions of recipes from everywhere around the world absolutely FREE
              </span>
            </h2>
        </div>
        <div class="column"></div>
      </div>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Try `Taiwanese Cuisine` ">
          <button class="ui primary button">
            Search
          </button>
        </div>
        <div class="results"></div>
      </div>
      <br><br><br><br><br><br>
      <div class="ui row grid">
        <h3 class="categoryTitle">Ketogenic Lifestyle</h3> <br><br>
      </div>
      <div class="ui row grid">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="http://lorempixel.com/800/600/food/?37745">
            </div>
            <div class="content">
              <div class="header">Matt Giampietro</div>
              <div class="meta">
                <a>Friends</a>
              </div>
              <div class="description">
                Matthew is an interior designer living in New York.
              </div>
            </div>
            <div class="extra content">
              <span class="right floated">
                Joined in 2013
              </span>
              <span>
                <i class="user icon"></i>
                75 Friends
              </span>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="http://lorempixel.com/800/600/food/?37745">
            </div>
            <div class="content">
              <div class="header">Molly</div>
              <div class="meta">
                <span class="date">Coworker</span>
              </div>
              <div class="description">
                Molly is a personal assistant living in Paris.
              </div>
            </div>
            <div class="extra content">
              <span class="right floated">
                Joined in 2011
              </span>
              <span>
                <i class="user icon"></i>
                35 Friends
              </span>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="http://lorempixel.com/800/600/food/?37745">
            </div>
            <div class="content">
              <div class="header">Elyse</div>
              <div class="meta">
                <a>Coworker</a>
              </div>
              <div class="description">
                Elyse is a copywriter working in New York.
              </div>
            </div>
            <div class="extra content">
              <span class="right floated">
                Joined in 2014
              </span>
              <span>
                <i class="user icon"></i>
                151 Friends
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</template>


<script>
import TopNav from './TopNav.vue'
export default {
  data () {
    return {}
  },
  components: {
    'TopNav': TopNav
  }
}
</script>

<style>
.column h1 {
  font-weight: 700 !important;
  font-size: 37px;
  text-rendering: optimizelegibility;
  letter-spacing: -0.8px !important;
  color: #0F73A2;
}
.prompt {
  height: 80px;
  width: 850px;
  border-radius: 0!important;
  box-shadow: 2px 2px 1px #cccccc!important;
}

.categoryTitle {
  margin-left: -42%;
  padding-top: 35px;
}
</style>
