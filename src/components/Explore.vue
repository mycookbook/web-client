<template>
  <!-- content -->
  <div class="pushable content">

    <!-- sidebar -->
    <div class="ui very wide vertical right sidebar">
      <div class="image" style="background-image: url('/static/img/ofada_lg.jpg')"></div>
      <div class="scroll wrapper">
        <div class="buffer"></div>
        <div class="content">
          <div class="headers">
            <div class="ui sub header">Side bar</div>
            <div class="ui large header">Ofada Rice garnished with Fish Stew and Vegetable Salad</div>
            <div class="meta">Served by <span class="tvn weight bold">Mama Peace Catering Services</span></div>
            <div class="ui huge star rating" data-rating="4"></div>
          </div>
          <div class="ui accordion">
            <div class="tvn collapsible title active">
              <div class="tvn horizontal stroke"></div>
              <div class="ui sub header">Description</div>
              <div class="tvn horizontal stroke"></div>
              <div class="toggle"><svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg></div>
            </div>
            <div class="content active">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<br>
                Consectetur  ---     24 mCal<br>
                Hhsmodfdr   ---     6.8 mCal<br>
            </div>
            <div class="tvn collapsible title active">
              <div class="tvn horizontal stroke"></div>
              <div class="ui sub header">Add a Review</div>
              <div class="tvn horizontal stroke"></div>
              <div class="toggle"><svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg></div>
            </div>
            <div class="content active">
              <div id="review-form">
                <p>How do you rate this meal? *</p>
                <div class="ui massive star interactive rating" data-rating="0"></div>
                <div class="ui form">
                  <div class="comment field">
                    <label>Comments</label>
                    <textarea rows="3" placeholder="Optional. e.g very delicious. :)"></textarea>
                  </div>
                  <button class="ui basic button" type="submit">Submit Review</button>
                </div>
              </div>
            </div>
            <div class="tvn collapsible title active">
              <div class="tvn horizontal stroke"></div>
              <div class="ui sub header">All Reviews (23)</div>
              <div class="tvn horizontal stroke"></div>
              <div class="toggle"><svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg></div>
            </div>
            <div class="content active">
              <div id="reviews-list" class="ui items">
                <div class="item">
                  <div class="content">
                    <a class="header">Susan Onibalusi</a>
                    <div class="right floated meta">Feb 23, 2016. 9:15 am</div>
                    <div class="ui star rating" data-rating="3"></div>
                    <div class="description">
                      <p>The stew made sense but I felt the chicken was not cooked properly. It was so hard! E be like rubber :(</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <a class="header">Tony Nwachukwu</a>
                    <div class="right floated meta">Feb 21, 2016. 8:13 pm</div>
                    <div class="ui star rating" data-rating="1"></div>
                    <div class="description">
                      <p>I actually enjoyed the taste of that sweet sauce that was served with the ofada, only for me to purge seriously when I got home.</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <a class="header">Torhee Chirou</a>
                    <div class="right floated meta">Feb 21, 2016. 2:15 pm</div>
                    <div class="ui star rating" data-rating="4"></div>
                    <div class="description">
                      <p>Best ofada rice I have tasted in a while. Big thumbs up to Mama Peace and co. Keep it up!</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <a class="header">Anonymous</a>
                    <div class="right floated meta">Feb 21, 2016. 1:26 pm</div>
                    <div class="ui star rating" data-rating="1"></div>
                    <div class="description">
                      <p>This is food poisoning and something must be done about it!</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <a class="header">Hauwa Ibrahim</a>
                    <div class="right floated meta">Feb 21, 2016. 9:15 am</div>
                    <div class="ui star rating" data-rating="4"></div>
                    <div class="description"></div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <a class="header">Mabel Rosenberg</a>
                    <div class="right floated meta">Feb 21, 2016. 9:15 am</div>
                    <div class="ui star rating" data-rating="3"></div>
                    <div class="description">
                      <p>The meat was too hard. Not well cooked. The rice and ofada stew was top just out of this world though.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="close button">
        <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
      </button>
    </div>

    <!-- loop through items here -->
    <div class="pusher">
      <div class="main">
        <div class="ui meals container">
          <div class="meal section">
            <div class="tvn vertical stroke"></div>
            <div class="tvn sonar on">
              <div class="wave"></div>
            </div>
            <div class="ui title header">Explore</div>
            <div class="ui courses accordion">
              <div class="tvn collapsible title active">
                <div class="tvn horizontal stroke"></div>
                <div class="ui sub header">less/more</div>
                <div class="tvn horizontal stroke"></div>
                <div class="toggle">
                  <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
                </div>
              </div>
              <div class="content active">
                <div class="ui grid">
                  <div v-if="cookbooks" class="sixteen wide mobile column
                                sixteen wide tablet column
                                eight wide computer column
                                eight wide large screen column" v-for="cookbook in cookbooks">
                    <div class="serving card">
                      <div class="image wrapper">
                        <div class="image"
                          v-bind:style="{ 'background-image': 'url(' + cookbook.bookCoverImg + ')' }">
                        </div>
                      </div>
                      <div class="content">
                        <div class="ui sub header">
                           {{ cookbook.recipes.length }}k+ Recipes
                        </div>
                        <div class="ui medium header">
                           {{ cookbook.name }}
                        </div>
                        <div class="tvn vertical fade clipped description">
                          {{ cookbook.description }}
                        </div>
                        <div class="footer options">
                          <div class="ui huge star rating" data-rating="5"></div>
                          <div class="ui right floated basic button">Add Review</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tvn horizontal stroke"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    let url = process.env.BASE_URL + '/cookbooks'
    this.$http.get(url)
    .then((response) => {
      this.cookbooks = response.body.data;
      console.log('vm cookbooks', this.cookbooks)
    }, (response) => {
      console.log('error', response)
    })
  },
  data () {
    return {
      cookbooks: {}
    }
  }
}
</script>

<style>

</style>
