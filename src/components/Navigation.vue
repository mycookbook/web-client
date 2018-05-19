<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Navigation.vue
@Last modified by:   florenceokosun
@Last modified time: 28-02-2018
-->

<template>
  <!-- fixed menu -->
  <div class="ui top fixed menu grid">

    <div class="eight wide mobile
                  four wide tablet
                  six wide computer
                  left floated column
                  tvn no padding">
      <!-- brand -->
      <div class="tvn fade clipped brand">
        <img class="logo" src="/static/logo.png">
        <h1 class="name
                     ui large header
                     ">Cookbook inc.</h1>
      </div> <!-- end brand -->
    </div>

    <div class="eight wide mobile
                  twelve wide tablet
                  ten wide computer
                  right floated column
                  tvn no padding">
      <!-- selectors -->
      <div class="selectors">

        <!-- date selector -->
        <div class="fitted item selector
                      ui simple dropdown">
          <!-- tab -->
          <div class="tab
                        tvn themed
                        positioning">
            <div class="icon section">
              <div class="tvn positioning
                            calendar icon header">
                <svg class="tvn icon"><use xlink:href="#icon-calendar"></use></svg>
                  <span class="ui medium header number
                               tvn center bottom positioned">26</span>
              </div>
              <div class="ui mobile only sub header">Aug</div>
            </div>

            <div class="mobile hidden info section
                           tvn fade clipped">
              <h3 class="ui medium header">Friday</h3>
              <div class="ui sub header
                            tvn regular weight">August 26, 2016</div>
            </div>

            <div class="dropdown toggle
                          tablet or lower hidden
                          tvn right middle positioned
                          ">
              <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
            </div>
          </div> <!-- end tab -->

          <!-- dropdown menu -->
          <div class="ui dropdown menu">
            <div class="content">
              <!-- DayPicker (as will be rendered by the component) -->
              <div class="DayPicker DayPicker--en" role="application" tabindex="0">
                <div class="DayPicker-NavBar">
                    <span class="DayPicker-NavButton DayPicker-NavButton--prev" role="button">
                      <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
                    </span>
                    <span class="DayPicker-NavButton DayPicker-NavButton--next" role="button">
                      <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
                    </span>
                </div>
                <div class="DayPicker-Month">
                  <div class="DayPicker-Caption" role="heading">
                    August 2016
                  </div>
                  <div class="DayPicker-Weekdays" role="rowgroup">
                    <div class="DayPicker-WeekdaysRow" role="columnheader">
                      <div class="DayPicker-Weekday">
                        <abbr title="Sunday">Su</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Monday">Mo</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Tuesday">Tu</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Wednesday">We</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Thursday">Th</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Friday">Fr</abbr>
                      </div>
                      <div class="DayPicker-Weekday">
                        <abbr title="Saturday">Sa</abbr>
                      </div>
                    </div>
                  </div>
                  <div class="DayPicker-Body" role="grid">
                    <div class="DayPicker-Week" role="gridcell">
                      <div aria-disabled="true" aria-label="Sun Jul 31 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--outside" role="gridcell" tabindex="-1">31</div>
                      <div aria-disabled="false" aria-label="Mon Aug 01 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="0">1</div>
                      <div aria-disabled="false" aria-label="Tue Aug 02 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">2</div>
                      <div aria-disabled="false" aria-label="Wed Aug 03 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">3</div>
                      <div aria-disabled="false" aria-label="Thu Aug 04 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">4</div>
                      <div aria-disabled="false" aria-label="Fri Aug 05 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">5</div>
                      <div aria-disabled="false" aria-label="Sat Aug 06 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">6</div>
                    </div>
                    <div class="DayPicker-Week" role="gridcell">
                      <div aria-disabled="false" aria-label="Sun Aug 07 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">7</div>
                      <div aria-disabled="false" aria-label="Mon Aug 08 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">8</div>
                      <div aria-disabled="false" aria-label="Tue Aug 09 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--today" role="gridcell" tabindex="-1">9</div>
                      <div aria-disabled="false" aria-label="Wed Aug 10 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">10</div>
                      <div aria-disabled="false" aria-label="Thu Aug 11 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">11</div>
                      <div aria-disabled="false" aria-label="Fri Aug 12 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">12</div>
                      <div aria-disabled="false" aria-label="Sat Aug 13 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">13</div>
                    </div>
                    <div class="DayPicker-Week" role="gridcell">
                      <div aria-disabled="false" aria-label="Sun Aug 14 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">14</div>
                      <div aria-disabled="false" aria-label="Mon Aug 15 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">15</div>
                      <div aria-disabled="false" aria-label="Tue Aug 16 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">16</div>
                      <div aria-disabled="false" aria-label="Wed Aug 17 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">17</div>
                      <div aria-disabled="false" aria-label="Thu Aug 18 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">18</div>
                      <div aria-disabled="false" aria-label="Fri Aug 19 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">19</div>
                      <div aria-disabled="false" aria-label="Sat Aug 20 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">20</div>
                    </div>
                    <div class="DayPicker-Week" role="gridcell">
                      <div aria-disabled="false" aria-label="Sun Aug 21 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">21</div>
                      <div aria-disabled="false" aria-label="Mon Aug 22 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">22</div>
                      <div aria-disabled="false" aria-label="Tue Aug 23 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">23</div>
                      <div aria-disabled="false" aria-label="Wed Aug 24 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">24</div>
                      <div aria-disabled="false" aria-label="Thu Aug 25 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">25</div>
                      <div aria-disabled="false" aria-label="Fri Aug 26 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--selected" role="gridcell" tabindex="-1">26</div>
                      <div aria-disabled="false" aria-label="Sat Aug 27 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">27</div>
                    </div>
                    <div class="DayPicker-Week" role="gridcell">
                      <div aria-disabled="false" aria-label="Sun Aug 28 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">28</div>
                      <div aria-disabled="false" aria-label="Mon Aug 29 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">29</div>
                      <div aria-disabled="false" aria-label="Tue Aug 30 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">30</div>
                      <div aria-disabled="false" aria-label="Wed Aug 31 2016" aria-selected="false" class="DayPicker-Day" role="gridcell" tabindex="-1">31</div>
                      <div aria-disabled="true" aria-label="Thu Sep 1 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--outside" role="gridcell" tabindex="-1">1</div>
                      <div aria-disabled="true" aria-label="Fri Sep 2 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--outside" role="gridcell" tabindex="-1">2</div>
                      <div aria-disabled="true" aria-label="Sat Sep 3 2016" aria-selected="false" class="DayPicker-Day DayPicker-Day--outside" role="gridcell" tabindex="-1">3</div>
                    </div>
                  </div>
                </div>
              </div> <!-- end DayPicker -->
            </div>
            <div class="footer">
              <button class="ui basic button">Show Today</button>
            </div>
          </div> <!-- end dropdown menu -->
        </div><!-- end date selector -->

        <!-- timetable selector -->
        <div class="fitted item selector
                      ui simple dropdown">
          <!-- tab -->
          <div class="tab
                        tvn themed
                        positioning">
            <div class="icon section">
              <div class="icon header">
                <svg class="tvn icon"><use xlink:href="#icon-timetable"></use></svg>
              </div>
              <div class="ui mobile only sub header">LOS-A</div>
            </div>

            <div class="mobile hidden info section
                          tvn fade clipped">
              <h3 class="ui medium header">Lagos General</h3>
              <div class="ui sub header
                            tvn regular weight">Timetable</div>
            </div>

            <div class="dropdown toggle
                          tablet or lower hidden
                          tvn right middle positioned
                          ">
              <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
            </div>
          </div> <!-- end tab -->

          <!-- dropdown menu -->
          <div class="ui dropdown menu">
            <div class="content list">
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Lagos General</h3>
                <div class="description">Lagos General Staff. LOS-A.</div>
              </div>
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Lagos LT</h3>
                <div class="description">Akpos & Sons Lagos Leadership Team. LOS-B</div>
              </div>
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Nairobi Dojo</h3>
                <div class="description">Akpos & Sons Kenya Dojo Menu. NRB-1</div>
              </div>
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Nairobi LT</h3>
                <div class="description">Akpos & Sons Kenya Dojo Menu. NRB-2</div>
              </div>
            </div>
          </div> <!-- end dropdown menu -->
        </div><!-- end timetbale selector -->

        <!-- vendor selector -->
        <div class="fitted item selector
                      ui simple dropdown">
          <!-- tab -->
          <div class="tab
                        tvn themed
                        positioning
                        ">
            <div class="icon section">
              <div class="icon header">
                <svg class="tvn icon"><use xlink:href="#icon-vendor"></use></svg>
              </div>
              <div class="ui mobile only sub header">MPC</div>
            </div>

            <div class="mobile hidden info section
                          tvn fade clipped">
              <h3 class="ui medium header">Mama Peace Catering Services</h3>
              <div class="ui sub header
                            tvn regular weight">Vendor</div>
            </div>

            <div class="dropdown toggle
                          tablet or lower hidden
                          tvn right middle positioned
                          ">
              <svg class="tvn icon"><use xlink:href="#icon-expand"></use></svg>
            </div>
          </div> <!-- end tab -->

          <!-- dropdown menu -->
          <div class="ui dropdown menu">
            <div class="content list">
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Mama Peace Catering Services</h3>
                <div class="description">Cafeteria Management</div>
              </div>
              <div class="tvn fade clipped item">
                <h3 class="ui medium header">Wade Confectioneries</h3>
                <div class="description">Pastries Vendor</div>
              </div>
            </div>
          </div> <!-- end dropdown menu -->
        </div><!-- end vendor selector -->

      </div> <!-- selectors -->
    </div>

  </div> <!-- end fixed top menu -->
</template>

<script>
import store from '@/store'

export default {
  created () {
    if (store.state.isLogged) {
      this.isLoggedIn = true
      this.displayName = this.getDisplayName()
    }
  },
  data () {
    return {
      isLoggedIn: false,
      displayName: '',
      submenu: store.state.isLogged
    }
  },
  methods: {
    updateStatus: function () {
      this.isLoggedIn = true
    },
    getDisplayName: function () {
      let displayname = localStorage.getItem('displayName')
      return displayname[0].toUpperCase() + displayname.slice(1)
    }
  },
  mounted: function () {
    $('.navbar-mobile.ui.dropdown').dropdown()
    $('.navbar.overlay').visibility({type: 'fixed', offset: 0 // give some space from top of screen
    })
  }
}
</script>

<style>
.nav-banner {
  margin-bottom: 14%;
}
</style>
