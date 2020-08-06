export default {  
  methods: {
    // TODO- improve function
    updateResponse: function() {
      if(this.$store.state.examPage.userAttemptsData[this.$store.state.examPage.sessionData.current_section][this.$store.state.examPage.sessionData.question_no[this.$store.state.examPage.sessionData.current_section]].marked_for_review && this.$store.state.examPage.userAttemptsData[this.$store.state.examPage.sessionData.current_section][this.$store.state.examPage.sessionData.question_no[this.$store.state.examPage.sessionData.current_section]].answer===null){
        this.$store.commit('examPage/setClass','marked-for-review');
      }
      else if(this.$store.state.examPage.userAttemptsData[this.$store.state.examPage.sessionData.current_section][this.$store.state.examPage.sessionData.question_no[this.$store.state.examPage.sessionData.current_section]].marked_for_review){
        this.$store.commit('examPage/setClass','answered-and-marked-for-review');
      }
      else if(this.$store.state.examPage.userAttemptsData[this.$store.state.examPage.sessionData.current_section][this.$store.state.examPage.sessionData.question_no[this.$store.state.examPage.sessionData.current_section]].answer===null){
        this.$store.commit('examPage/setClass','not-answered');
      }
      else {
        this.$store.commit('examPage/setClass','answered');
      }
      this.$store.commit('examPage/changeStats');
      localStorage.setItem("sessionData", JSON.stringify(this.$store.state.examPage.sessionData));
      localStorage.setItem("userAttemptsData", JSON.stringify(this.$store.state.examPage.userAttemptsData));
    },
  },
}