<template>
    <section class="bg-white fixed full-width on-top">
        <SideNavCard :class="sidemenu? 'sidenav-show':'sidenav-hidden'"/>
        <nav class="navbar container flex space-between">
          <div class="full-height menu__icon" :class="sidemenu? 'blurall':''" @click="sidemenu = !sidemenu">
            <img :src="sidemenu? require('@/assets/svgs/close.svg') : require('@/assets/svgs/menu.svg')" class="icon vertical-center">
          </div>
          <div class="e4y__left flex ml-2 baseline sm-mr-auto">
            <img src="@/assets/svgs/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/svgs/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <span class="gray-2 display-lg-and-up" id="exam-name">
                {{exam_name}}
            </span>
          </div>
          <div class="flex align-center">
            <span class="gray-2 mr-1 display-lg-and-up">Time Left:</span>
            <img src="@/assets/svgs/timer.svg" class="icon" alt="">
            <span class="gray-2 mr-5" id="time-left">{{("0" + Math.floor(timerCount / 3600)).slice(-2)}}:{{("0" + Math.floor(timerCount / 60)).slice(-2)}}:{{("0" + Math.floor(timerCount % 60)).slice(-2)}}</span>
            <button class="display-lg-and-up navbar-button button success">
                <span class="font-bold font-18">Submit</span>
            </button>
          </div>
        </nav>
        <div class="divider-horizontal"></div> 
    </section>
</template>

<script>
import UpdateResponse from '@/mixins/updateResponse'
import SideNavCard from './ExamSideNav'

export default {
    mixins: [UpdateResponse],
    components: { SideNavCard, },
    data () {
        return{
            sidemenu: false,
            timerCount: Math.floor((this.$store.state.examPage.sessionData.expire_date - new Date().getTime())/1000)
        }
    },
    beforeMount(){
        this.updateResponse();
    },
    computed: {
        exam_name() {
            return this.$store.state.examPage.exam_details.name + " " + this.$store.state.examPage.exam_details.year
        },
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount = Math.floor((this.$store.state.examPage.sessionData.expire_date - new Date().getTime())/1000)
                    }, 1000);
                }
            },
            immediate: true // This ensures the watcher is triggered upon creation
        }
    }
}
</script>