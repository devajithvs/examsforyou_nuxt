<template>
    <section class="bg-white fixed full-width on-top">
        <div >
          <SideNavCard :class="sidemenu? 'sidenav-show':'sidenav-hidden'" v-bind:currentItem="''"/>
        </div>
        <div @mouseleave="expand = false">
          <ExamListCard v-show="expand"/>
        </div>
        <nav class="navbar container flex space-between">
          <div class="full-height menu__icon" :class="sidemenu? 'blurall':''" @click="sidemenu = !sidemenu">
            <img :src="sidemenu? require('@/assets/svgs/close.svg') : require('@/assets/svgs/menu.svg')" class="icon vertical-center">
          </div>
          <div class="e4y__left flex ml-2">
            <img src="@/assets/svgs/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/svgs/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <div id="megamenu">
                <button
                @click="expand = !expand"
                @mouseover="expand = true"
                class="display-lg-and-up navbar-button button success ml-2"
                :class="expand ? 'ghost-on-hover' : ''"
                >
                    <div class="flex center align-center">
                      <span class="font-bold explore-text font-18">Explore</span>
                      <span class="icon down__icon"></span>
                    </div>
                </button>
            </div>
            <form class="search-container ml-2">
                <div class="search-form">
                    <input class="search-bar" placeholder="What do you want to learn?" autocomplete="on" type="text">
                </div>
                <button id="search-button" type="submit"></button>
            </form>
          </div>
         
          <button class="display-lg-and-up navbar-button button success">
            <span class="font-bold font-18">Login</span>
          </button>

          <img src="@/assets/svgs/search_black.svg" class="search__icon" alt="">
        </nav>
        <div class="divider-horizontal"></div>
    </section>
</template>

<script>
import ExamListCard from './ExploreExams'
import SideNavCard from './SideNav'

export default {
  name: 'App',
  components: { ExamListCard, SideNavCard,},
  data: () => ({
    expand: false,
    sidemenu: false,
  }),
  methods: {        
  },
  computed: {  
  }
}
</script>