<template>
    <div class="exam-notification card bg-white">
      <h2 class="font-16 text-center primary mb-5">{{examName}} Updates and Notifications</h2>
      <div class="divider-horizontal mt-1 mb-3"></div>
      <div class="notifications mb-2 mt-2"
      v-for="(notification,index) in examNotifications" :key="index"
      >
        <span class="font-15 max-width-90 hover-blue">{{notification['description']}}</span>
        <span class="icon right__icon-black"></span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    examNotifications: {
      type: Array,
    }, 
    examName: {
      type: String,
      default: ""
    } 
  },
  data() {
    return {
      exam_notifications: this.examNotifications,
    }
  }
}
</script>

