<template>
  <section class="on-top">
    <div class="bg-primary clear-navbar">
      <div class="container">
          <PWD v-bind:CurrentDir="['Home', 'Analyse']"/>
          <div class="flex align-center justify-center mt-3 mb-5">
            <img src="@/assets/svgs/analyse.svg" class="mr-1" alt="">
            <div class="">
              <p class="white font-20 font-bold mb-0">Analyse</p>
              <p class="white font-15 mt-0">Analyse helps you keep track of your progress with personalized analytics</p>
            </div>
          </div>
      </div>
    </div>
    <div class="divider-horizontal"></div>
    <div>
      <ExamAnalyseContent/>
    </div>
  </section>
</template>

<script>
import PWD from '@/components/PWD'
import ExamAnalyseContent from './ExamAnalyseContent'
export default {
  components: { PWD, ExamAnalyseContent },
  data() {
    return {
      current_tab : 0,
      info_sections : ["Exam Details", "Articles", "Attempt Previous Papers", "Study Material", "Exam List", "ExamAnalyse"],
    }
  }
}
</script>