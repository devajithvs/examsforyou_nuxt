<template>
    <div class="exam-question-container extra-margin-top-1">
      <div class="tabs gray-2">
          <a class="tab-element cursor-pointer font-bold font-15 hover-darker" 
          v-for="item in exam_sections"
          v-bind:key="item.section_code"
          @click="current_section = item.section_code"
          :class="current_section==item.section_code ? 'selected' : ''"
          >
            {{item.name}}
          </a>
      </div>
      <div class="card bg-white">
        <div class="container mt-1 mb-2 flex space-between font-18">
          <span class="text-left mr-1">Question {{question_no[current_section] + 1}} - Single choice question</span>
          <span class="subtitle-1 flex align-center">
            <img v-if="userAttemptsData[current_section][question_no[current_section]].marked_for_review" src="@/assets/svgs/bookmark.svg" class="icon icon-small" alt="Mark for review" v-on:click="reviewSwap">
            <img v-else src="@/assets/svgs/bookmark_outline.svg" class="icon icon-small" alt="Mark for review" v-on:click="reviewSwap">
            <span class="display-md-and-up ml-1">Mark for review</span>
          </span>
        </div>
        <div class="divider-horizontal"></div> 
        <div class="container question font-18" style="height: 150px">
          <p></p>
          <span>{{question_no[current_section] + 1}})&nbsp;
            <span v-html="exam_sections[current_section].questions[question_no[current_section]].question"/>
            <span v-for="(image, index) in exam_sections[current_section].questions[question_no[current_section]].question_images" v-bind:key="index"
            v-html="image"/>
          </span>
        </div>
        <div class="divider-horizontal"></div> 

        <div class="container question mt-1 mb-1" style="height: 150px">
          <div class="radio-container font-15 max-width-90 gray-1 mt-1 ml-1" style="overflow: hidden;"
          v-for="(option, index) in exam_sections[current_section].questions[question_no[current_section]].options" v-bind:key="option.id"
          >
            <input type="radio" v-model="answer" :value="index" id="index" name="sort-order">
            <label for="date-option">{{String.fromCharCode(index+65)}}) <span v-html="option.option"/> <span v-for="(image, index) in option.option_images" v-bind:key="index" v-html="image"/></label>
          </div>
        </div>
        <div class="divider-horizontal"></div>
        <div class="container mb-1 flex space-between flex-wrap justify-center">
          <div class="font-15 flex flex-wrap">
            <button v-on:click="prevQuestion()" class="button button-less-ht bg-gray-2 mr-3 mt-2">
              <span class="font-bold">Previous</span>
            </button>
            <button v-on:click="clearSelection()" class="button button-less-ht bg-gray-2 mt-2">
              <span class="font-bold">Clear</span>
              <span class="font-bold display-md-and-up ml-1">Selection</span>
            </button>
          </div>
          <button v-on:click="nextQuestion()" class="button button-less-ht success mt-2">
            <span class="font-bold">Next</span>
          </button>
        </div>
      </div>
    </div>
</template> 

<script>
import {mapState} from 'vuex'
import UpdateResponse from '@/mixins/updateResponse'

export default {
  mixins: [UpdateResponse],
  data(){
    return{
    }
  },
  computed: {
      answer: {
        get () {
          return this.$store.state.examPage.userAttemptsData[this.$store.state.examPage.sessionData.current_section][this.$store.state.examPage.sessionData.question_no[this.$store.state.examPage.sessionData.current_section]].answer
        },
        set (value) {
          this.$store.commit('examPage/setOption', value)
          this.updateResponse();
        }
      },
      current_section: {
        get () {
          return this.$store.state.examPage.sessionData.current_section
        },
        set (value) {
          this.$store.commit('examPage/changeSection', value)
          this.$store.commit('examPage/selectCurrentQuestion');
          this.updateResponse();
        }
      },
      ...mapState({
        exam_sections: state => state.examPage.exam_sections,
        question_no: state => state.examPage.sessionData.question_no,
        userAttemptsData: state => state.examPage.userAttemptsData,
      })
    },
    methods: {

      nextQuestion: function () {
        this.$store.commit('examPage/deselectCurrentQuestion');
        if(this.question_no[this.current_section] >= this.userAttemptsData[this.current_section].length - 1) {
          if(this.current_section >= this.exam_sections.length - 1){
            alert('That was the last question!');
            return;
          }
          else {
            this.$store.commit('examPage/incrementSection');
            this.$store.commit('examPage/selectCurrentQuestion');
            this.updateResponse();
          }
        }
        else {
          this.$store.commit('examPage/incrementQuestion');
        }
        this.$store.commit('examPage/selectCurrentQuestion');
        this.updateResponse();
      },

      prevQuestion: function () {
        this.$store.commit('examPage/deselectCurrentQuestion');
        if(this.question_no[this.current_section] == 0){
          if(this.current_section <= 0){
            alert('There is no question zero, index starts with one here ;p');
            return;
          }
          else{
            this.$store.commit('examPage/decrementSection');
            this.$store.commit('examPage/selectCurrentQuestion');
            this.updateResponse();
          }         
        }
        else{
          this.$store.commit('examPage/decrementQuestion');
        }
        this.$store.commit('examPage/selectCurrentQuestion');
        this.updateResponse();
      },

      reviewSwap: function () {
        this.$store.commit('examPage/reviewSwap')
        this.updateResponse();
      },

      clearSelection: function(){
        this.$store.commit('examPage/clearSelection')
        this.updateResponse();
      }
    },
}
</script>