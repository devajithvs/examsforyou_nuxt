<template>
    <div id="news" class="examinfo__content container">
      <ExamNotification :examNotifications="exam_notifications" :examName="exam_name"/>
      <div class="exam-info left-info">
        <div class="card news-card bg-white flex space-between"
        v-for="index in 10" :key="index">
          <div>
            <div class="gray-1 font-18 font-bold">JEE Main 2020, NEET 2020 new dates out: How to prepare for...</div>
            <div class="gray-2 font-10">
              India Today - 9 hours ago
            </div>
            <p class="font-15">JEE Main 2020, NEET 2020 new dates out: How to prepare for exam amid Covid-19 lockdown. Here are some tips and strategies to score good</p>
          </div>
          <img class="news-image ml-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxTOKIYbShno-oNiAKbr3j8xHirh4rD_8GYaR6a1zRP1FahdodncZu9kmTlaBXywDH2V68uM-&s">   
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