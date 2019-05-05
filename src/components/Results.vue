<template>
  <!-- content -->
  <div class="pushable content">
    <div class="pusher">
      <div class="">
        <div class="ui meals container">
          <div class="meal section">
              <div class="content active">
                <a href="/" v-if="cookbooks">
                  <button class="ui ui right floated basic button">
                    View All
                  </button>
                </a>
                <div class="ui grid">
                  <div v-if="cookbooks"
                  class="sixteen wide mobile column
                          sixteen wide tablet column
                          eight wide computer column
                          eight wide large screen column"
                          v-for="cookbook in cookbooks"
                          :id="cookbook.id"
                    >
                    <div class="serving card">
                      <div class="image wrapper">
                        <div class="image"
                          :style="{ 'background-image': 'url(' + cookbook.bookCoverImg + ')' }">
                        </div>
                      </div>
                      <div class="content">
                        <div class="ui labels">
                          <label
                          class="item"
                          :style="{ 'background-color': getBgColor(cookbook.category.color)}">
                            {{ cookbook.category.name }}
                          </label>
                        </div>
                        <div class="ui sub header">
                           {{ cookbook.recipes.length }} Recipe(s)
                           <span :style="{ 'float': 'right' }">
                             proudly <i :class="generateFlagClass(cookbook.flag)" title="Ugandan"></i>
                           </span>
                        </div>
                        <div class="ui medium header">
                           {{ cookbook.name }}
                        </div>
                        <div class="tvn vertical fade clipped description">
                          {{ cookbook.description }}
                        </div>
                        <!-- <div class="footer options">
                          <div class="ui huge star rating" data-rating="1"></div>
                          <div class="ui right floated basic button">Add Review</div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tvn horizontal stroke"></div>
            <div style="text-align:center!important;" v-if="!cookbooks">
              <!-- <i class="bell slash outline icon"></i> -->
              <p class="ui item button">Reload page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "Latest",
  data () {
    return {
      // cookbooks: store.state.cookbooks
    }
  },
  props: {
    cookbooks: Array
  },
  methods: {
    generateFlagClass: function (code) {
      let class_ = code + " flag";
      return class_;
    },
    getBgColor: function(code) {
      return "#" + code;
    }
  }
}
</script>

<style>
</style>
