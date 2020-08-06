<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
        <MainPunchLine/>
        <Features/>
    </content>
    <FOOTER>
      <SEOFooter/>
      <CompanyFooter/>
    </FOOTER>
  </main>
</template>

<script>
import Navbar from '@/components/LandingPage/Navbar'
import MainPunchLine from '@/components/LandingPage/Punchline'
import Features from '@/components/LandingPage/Features'
import SEOFooter from '@/components/SEOExamListFooter'
import CompanyFooter from '@/components/CompanyFooter'
export default {
  components: { Navbar, MainPunchLine, Features, SEOFooter, CompanyFooter,},
  data () {
    return {
    }
  }
}
</script>