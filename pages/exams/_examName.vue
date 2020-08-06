<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
        <ExamInfoContainer v-bind:examDetails="examDetails"/>
    </content>
    <FOOTER>
      <CompanyFooter/>
    </FOOTER>
  </main>
</template>

<script>
import all_exam_details from '@/assets/json_files/exam_details.json';
import Navbar from '@/components/LandingPage/Navbar'
import ExamInfoContainer from '@/components/ExamInfoPage/ExamInfoMain'
import CompanyFooter from '@/components/CompanyFooter'
import allExamDetails from '@/assets/json_files/exam_details.json';

export default {
  validate({ params }) {
    return allExamDetails[params.examName]!=null;
  },
  components: { Navbar, ExamInfoContainer, CompanyFooter,},
  data () {
    return {
      examDetails: allExamDetails[this.$route.params.examName],
    }
  }
}
</script>