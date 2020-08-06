<template>
  <div class="examinfo__content container">
    <div class="exam-notification card bg-white">
      <h2 class="font-16 text-center primary mb-1">Checklist</h2>
      <div class="divider-horizontal mt-0 mb-1"></div>
      <ProgressBar class="mb-2" v-bind:progress="50"/>
      <span class="display-block font-16 gray-1 text-center">SORT BY</span>
      <div class="width-40 center">
        <div class="radio-container font-15 gray-1 mt-1 flex space-between">
          <label for="date-option">Deadline</label>
          <input type="radio" id="date-option" name="sort-order">
        </div>
        <div class="radio-container font-15 gray-1 mt-1 flex space-between">
          <label for="popular-option">Priority</label>
          <input type="radio" id="popular-option" name="sort-order">
        </div>
      </div>
        
      <div class="display-block font-16 gray-1 text-center mt-3">3 Tasks Remaining</div>
      <div class="card-small bg-white">
        <div class="font-18">Physics</div>
        <div class="gray-2 font-10">Study Thermodynamics</div>
        <div class="flex space-between mt-3">
          <span class="font-10 primary">By 8th August</span>
          <span class="font-10 gray-2">Mark as done</span>
        </div>
      </div>
      <div class="card-small bg-white">
        <div class="font-18">Physics</div>
        <div class="gray-2 font-10">Study Thermodynamics</div>
        <div class="flex space-between mt-3">
          <span class="font-10 primary">By 8th August</span>
          <span class="font-10 gray-2">Mark as done</span>
        </div>
      </div>
      <div class="card-small bg-white">
        <div class="font-18">Physics</div>
        <div class="gray-2 font-10">Study Thermodynamics</div>
        <div class="flex space-between mt-3">
          <span class="font-10 primary">By 8th August</span>
          <span class="font-10 gray-2">Mark as done</span>
        </div>
      </div>
    </div>
    <div class="exam-info card bg-white">
      <div class="quick-links mb-5 container">
        <h4 class="font-20 mb-0">Metrics</h4>
        <p class="font-16 mt-0 gray-1">Overall Performance based on practice tests and previous papers</p>
        <div class="space-around flex flex-wrap mt-3 mb-2">
          <div class="min-width-10 card bg-white shadow">
            <img src="@/assets/svgs/accuracy.svg" class="center mb-0" alt="">
            <h5 class="font-18 text-center mb-0 mt-2 font-normal">Accuracy</h5>
            <p class="font-19 font-bold mt-1 mb-2 text-center gray-2">80%</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Better than <span class="primary">95%</span> Students</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Social Average: <span class="complementary">50%</span></p>
          </div>
          <div class="min-width-10 card bg-white shadow">
            <img src="@/assets/svgs/stamina.svg" class="center mb-0" alt="">
            <h5 class="font-18 text-center mb-0 mt-2 font-normal">Stamina</h5>
            <p class="font-19 font-bold mt-1 mb-2 text-center gray-2">3 min 5 second</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Better than <span class="primary">55%</span> Students</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Social Average: <span class="complementary">3 min 43 sec</span></p>
          </div>
          <div class="min-width-10 card bg-white shadow">
            <img src="@/assets/svgs/speed.svg" class="center mb-0" alt="">
            <h5 class="font-18 text-center mb-0 mt-2 font-normal">Speed</h5>
            <p class="font-19 font-bold mt-1 mb-2 text-center gray-2">1 min 9 sec</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Better than <span class="primary">65%</span> Students</p>
            <p class="font-12 mt-0 mb-0 text-center gray-2">Social Average: <span class="complementary">5 min 43 sec</span></p>
          </div>
        </div>
      </div>
      <div class="quick-links mb-5 container">
        <h4 class="font-20 mb-0 mt-0">Suggestions</h4>
        <p class="font-16 mt-0 mb-5 gray-1">Personalised suggestions based on the exams you wrote</p>
        <div class="mt-3 mb-2">
          <div class="grid-3">
            <div class="min-width-10 card bg-white shadow"
            v-for="index in 5" :key="index">
              <img src="https://i.ytimg.com/vi/QgnY-JolIPM/hqdefault.jpg" class="center" style="width:8em; height:auto;"/>
              <div class="font-18 hover-blue"> Conic Sections- Mathematics : 16 formulas in 10 Seconds</div>
              <div class="gray-2 font-10">By Ravikumar |Xpertz| Xpertz Trivandrum</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quick-links mb-5 container">
        <h4 class="font-20 mb-0 mt-0">Common Mistakes</h4>
        <p class="font-16 mt-0 mb-5 gray-1">The most common mistakes you make and steps to remedy them</p>
        <div class="mt-3 mb-2">
          <div class="grid-3">
            <div class="min-width-10 card bg-white shadow"
            v-for="index in 5" :key="index">
              <img src="@/assets/svgs/stamina.svg" class="center mb-0" alt="">
              <h5 class="font-18 text-center mb-0 mt-2 font-normal">Sign Check</h5>
              <p class="font-19 font-bold mt-1 mb-2 text-center gray-2">15%</p>
              <p class="font-12 mt-0 mb-0 text-center gray-2">Review your signs before even attempting the question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  components: { ProgressBar, },
}
</script>
