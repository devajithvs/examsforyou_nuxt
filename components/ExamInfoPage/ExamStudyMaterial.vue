<template>
    <div id="previous-papers" class="examinfo__content container">
      <ExamNotification :examNotifications="exam_notifications" :examName="exam_name"/>
      <div class="exam-index card bg-white">
        <h2 class="font-20 gray-1 mb-2">Index</h2>
        <div class="divider-horizontal mb-1"></div>
          <span class="display-block font-16 max-width-90 gray-1">Video Lectures</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1 ml-2">Physics</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1 ml-2">Chemistry</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1 ml-2">Mathematics</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1">Notes</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1">Video Solutions</span>
          <span class="display-block font-16 max-width-90 gray-1 mt-1">Text Solutions</span>
      </div>
      <div class="exam-material card bg-white">
        <h1 class="mb-2">Video Lectures</h1>
        <div class="divider-horizontal mb-1"></div>
        <span class="display-block font-16 max-width-90 gray-1"><span class="primary">#</span> Physics</span>
        <div class="grid-3">
          <div class="min-width-10 card bg-white shadow"
          v-for="index in 10" :key="index">
            <img src="https://i.ytimg.com/vi/QgnY-JolIPM/hqdefault.jpg" style="width:8em; height:auto;"/>
            <div class="font-18 hover-blue"> Conic Sections- Mathematics : 16 formulas in 10 Seconds</div>
            <div class="gray-2 font-10">By Ravikumar |Xpertz| Xpertz Trivandrum</div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import ExamNotification from './ExamNotification'
export default {
  components: { ExamNotification, },
  props: {
    examDetails: {
      type: Object,
    },  
  },
  data() {
    return {
      exam_notifications: this.examDetails["notifications"],
      exam_name: this.examDetails["overview"][1]["description"],
    }
  }
}
</script>
