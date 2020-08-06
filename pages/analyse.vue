<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
        <ExamInfoContainer/>
    </content>
    <FOOTER>
      <CompanyFooter/>
    </FOOTER>
  </main>
</template>

<script>
import Navbar from '@/components/LandingPage/Navbar'
import ExamInfoContainer from '@/components/ExamAnalysePage/ExamAnalyseMain'
import CompanyFooter from '@/components/CompanyFooter'
export default {
  components: { Navbar, ExamInfoContainer, CompanyFooter,},
  data () {
    return {
    }
  }
}
</script>