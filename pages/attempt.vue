<template>
  <client-only v-if="loaded">
    <main>
      <header>
        <Navbar/>
      </header>
      <content>
        <div class="exam_grid width-80 container mt-5">
          <QuestionContainer/>
          <Status/>
        </div>
      </content>
    </main>
  </client-only>
</template>

<script>
import Navbar from '@/components/ExamPage/ExamNavbar'
import Status from '@/components/ExamPage/ExamStatus'
import QuestionContainer from '@/components/ExamPage/QuestionContainer'
export default {
  data () {
    return {
      examData: null
    }
  },
  loading: {
    continuous: true,
  },
  computed: {
    loaded() {
      return this.$store.state.examPage.exam_details.name;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      if (this.loaded) {
        this.$nuxt.$loading.finish()
      }
    });
  },
  async fetch() {
      const examData = await fetch(
          'https://api.jsonbin.io/b/5f29c1b3dddf413f95bccede'
      ).then(res => res.json())
      this.examData = examData;
      this.$store.commit('examPage/initializeQuiz', examData);
      this.$store.commit('examPage/initializeQuizVariables');
      this.$store.commit('examPage/updateTime');
  },
  fetchOnServer: false,
  components: { Navbar, Status, QuestionContainer },
}
</script>