<template>
  <div class="examinfo__content container">
    <ExamNotification :examNotifications="exam_notifications" :examName="exam_name"/>
    <div class="exam-info card bg-white">
      <div class="mb-5">
        <h4 class="font-16 text-center">Quick-links</h4>
        <div class="flex flex-wrap space-around mt-5">
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/svgs/application.svg" alt="">
            <h5 class="font-16 text-center mt-2">Overview</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/svgs/dates.svg" alt="">
            <h5 class="font-16 text-center mt-2">Dates</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/svgs/syllabus.svg" alt="">
            <h5 class="font-16 text-center mt-2">Syllabus</h5>
          </div>
        </div>
      </div>
      <div class="container mb-5" v-if="exam_data['briefDescription']">
        <h3 class="font-18">What is {{exam_name}}?</h3>
        <p class="mt-1 pt-1 font-16">{{exam_data['briefDescription']}}</p>
      </div>
      <div class="container mb-5" v-if="exam_data['overview']">
        <h3 class="font-18">{{exam_name}} Overview</h3>
        <table class="full-width font-16 gray-2">
            <tbody>
                <tr v-for="(item, index) in exam_data['overview']" :key="index">
                  <td>{{item['title']}}</td>
                  <td>{{item['description']}}</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="container mb-5" v-if="exam_data['registration']">
        <h3 class="font-18" >{{exam_name}} Registration</h3>
        <table class="full-width font-16 gray-2">
          <tbody>
              <tr>
                <td>Register at</td>
                <td>
                  <a class="primary" :href="exam_data['registration']['website']">
                    {{exam_data['registration']['website']}}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Registration mode</td>
                <td>{{exam_data['registration']['mode']}}</td>
              </tr>
              <tr v-if="exam_data['registration']['fee']['general_obc']">
                <td>Application Fee (General/OBC)</td>
                <td>{{exam_data['registration']['fee']['general_obc']}}</td>
              </tr>
              <tr v-if="exam_data['registration']['fee']['general_obc']">
                <td>Application Fee (SC/ST/PH)</td>
                <td>{{exam_data['registration']['fee']['sc_st_ph']}}</td>
              </tr>
              <tr v-if="exam_data['registration']['fee']['general_obc']">
                <td>Application Fee (Females)</td>
                <td>{{exam_data['registration']['fee']['females']}}</td>
              </tr>
              <tr v-if="exam_data['registration']['fee']['paymentModes']">
                <td>Payment Modes</td>
                <td>
                  <li v-for="(mode, index) in exam_data['registration']['fee']['paymentModes']" :key="index">
                    {{mode}}
                  </li>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div class="container mb-5" v-if="exam_data['dates']">
        <h3 class="font-18">{{exam_name}} Dates</h3>
        <div class="dates"
        v-for="(exam_dates, index) in exam_data['dates']" :key="index"
        >
          <h3 v-if="exam_dates['sub_exam']" class="font-16 font-bold mb-2 mt-5 gray-2">{{exam_dates["sub_exam"]}}</h3>
          <table class="full-width font-16 gray-2">
            <tbody>
                <tr class="font-bold">
                  <td>Date</td>
                  <td>Events</td>
                </tr>
                <tr v-for="(item, index) in exam_dates['events']" :key="index">
                  <td>{{item["date"]}}</td>
                  <td>{{item["action"]}}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container mb-5" v-if="exam_data['exampattern']">
        <h3 class="font-18">{{exam_name}} Exam Pattern</h3>
        <p class="mt-1 pt-1 font-16">{{exam_data['exampattern']}}</p>
      </div>
      <div class="container mb-5" v-if="exam_data['conducting_body']">
        <h3 class="font-18">{{exam_name}} Conducting Body</h3>
        <p class="mt-1 pt-1 font-16">{{exam_data['conducting_body']}}</p>
      </div>
      <div class="container mb-5" v-if="exam_data['contact_details']">
        <h3 class="font-18">{{exam_name}} Contact Details</h3>
        <p class="mt-1 pt-1 font-16">{{exam_data['contact_details']}}</p>
      </div>
      <div class="container mb-5" v-if="exam_data['notifications']">
        <h3 class="font-18">{{exam_name}} Latest Updates</h3>
        <table class="full-width font-16 gray-2">
            <tbody>
                <tr v-for="(item, index) in exam_data['notifications']" :key="index">
                  <td>{{item['date']}}</td>
                  <td>{{item['description']}}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style >
table { 
  border-collapse: collapse; 
}

td, th { 
	padding: 10px;
	border: 1px solid #ccc; 
	text-align: left; 
}

td:first-child {
  width: 30%;
}
</style>

<script>
import ExamNotification from './ExamNotification'
export default {
  props: {
    examDetails: {
      type: Object,
    },  
  },
  components: { ExamNotification, },
  data() {
    return {
      exam_data: this.examDetails,
      exam_name: this.examDetails["overview"][1]["description"],
      exam_notifications: this.examDetails["notifications"],
    }
  }
}
</script>
