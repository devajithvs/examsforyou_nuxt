<template>
    <section class="on-top">
      <div class="bg-primary clear-navbar">
          <div class="container">
              <PWD v-bind:CurrentDir="['Home', 'Engineering']"/>
              <h1 class="white font-20 text-center flex-vertical space-around height-6em">List of Engineering Exams in India</h1>
          </div>
      </div>
      <div class="divider-horizontal"></div>
      <div id="news" class="examinfo__content container extra-margin-top-1">
        <ExamNotification class=""/>
        <div class="flex exam-info space-between">
          <div class="exam-index card bg-white sort">
            <div class="flex space-between align-center">
              <span class="font-16 gray-1">Sort and Filter</span>
              <a href=""><span class="font-15 primary">Clear All</span></a>
            </div>
            <div class="divider-horizontal mt-1 mb-3"></div>
            <div class="container">
              <span class="display-block font-15 max-width-90 gray-1">SORT BY</span>
              <div class="radio-container font-15 max-width-90 gray-1 mt-1 ml-1">
                <input type="radio" id="date-option" name="sort-order">
                <label for="date-option">Dates</label>
              </div>
              <div class="radio-container font-15 max-width-90 gray-1 mt-1 ml-1">
                <input type="radio" id="popular-option" name="sort-order">
                <label for="popular-option">Popularity</label>
              </div>
              <span class="display-block font-15 max-width-90 gray-1 mt-3">EXAM LEVEL</span>
              <div class="checkbox-container font-15 max-width-90 gray-1 mt-1 ml-1">
                <input type="checkbox" id="ug-option">
                <label for="f-option">UG</label>
              </div>
              <div class="checkbox-container font-15 max-width-90 gray-1 mt-1 ml-1">
                <input type="checkbox" id="pg-option">
                <label for="f-option">PG</label>
              </div>
            </div>
            </div>
            <div class="left-info examinations-cards">
              <div class="font-12 gray-2 card">Showing 6 Results</div>
              <div class="card bg-white flex space-between flex-wrap align-center"
              v-for="index in 10" :key="index">
                <div class="news-card flex align-center space-between exams-content">
                  <img class="news-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxTOKIYbShno-oNiAKbr3j8xHirh4rD_8GYaR6a1zRP1FahdodncZu9kmTlaBXywDH2V68uM-&s">   
                  <div class="ml-2">
                    <div class="gray-1 font-17 font-bold">Joint Entrance Examination Main (JEE Main)</div>
                    <p class="font-15 ml-0 mt-1">
                      <span class="gray-2">Application Process:</span> 18 Jul, 2020 - 23 Jul, 2020<br>
                      <span class="gray-2">Exam Date:</span> 18 Jul, 2020 - 23 Jul, 2020<br>
                      <span class="gray-2">Declaration of Result:</span> 18 Jul, 2020 - 23 Jul, 2020
                    </p>
                  </div>
                </div>
                <button class="button center-button bg-complementary">
                  <span class="font-bold font-15">Visit Website</span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
import ExamNotification from '@/components/ExamInfoPage/ExamNotification'
import PWD from '@/components/PWD'
export default {
  components: { ExamNotification, PWD},
}
</script>