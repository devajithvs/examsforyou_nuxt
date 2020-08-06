import Vue from 'vue'

export const state = () => ({
    exam_sections: [],
    exam_details: {},
    exam_name: '',
    sessionData: {},
    userAttemptsData: [],
    sessionStats:  {answered:0, not_answered:0, not_visited:'', marked_for_review:0, answered_and_marked_for_review:0},
})
export const mutations = {
    initializeQuiz(state, exam_questions_data) {
        state.exam_sections = exam_questions_data.question_paper.sections,
        state.exam_details = exam_questions_data.question_paper.exam_details,
        state.exam_name = exam_questions_data.question_paper.exam_details.name + " " + exam_questions_data.question_paper.exam_details.year
    },
    initializeQuizVariables(state) {
        localStorage.removeItem("userAttemptsData");
        localStorage.removeItem("sessionData");
        state.sessionData = JSON.parse(localStorage.getItem("sessionData"));
        state.userAttemptsData = JSON.parse(localStorage.getItem("userAttemptsData"));
        if(state.userAttemptsData===null || state.sessionData ===null) {
            state.userAttemptsData = [];
            state.sessionData = {question_no: [0,0,0], current_section: 0, expire_date: null}
            state.userAttemptsData = new Array(state.exam_sections.length);
            for(let j=0; j < state.exam_sections.length; j++){ 
                state.userAttemptsData[j] = new Array(state.exam_sections[j].questions.length);
                for (let i = 0; i < state.exam_sections[j].questions.length; i++) {
                    state.userAttemptsData[j][i] = {id:i, selected: false ,marked_for_review: false, answer: null, class:"not-visited"};
                }         
            }
        }
        this.commit('examPage/selectCurrentQuestion');
        localStorage.setItem("userAttemptsData", JSON.stringify(state.userAttemptsData));
    },
    updateTime(state) {
        // state.sessionData.expire_date = null
        let duration = state.exam_details.duration;
        let currentTime = new Date();
        if(state.sessionData.expire_date===null)  {
            currentTime.setSeconds(currentTime.getSeconds() + duration);
            state.sessionData.expire_date = currentTime.getTime();
            localStorage.setItem("sessionData", JSON.stringify(state.sessionData));
        }
    },
    changeStats(state) {
        // TODO- improve function
        let j,i;
        state.sessionStats.answered = 0;
        state.sessionStats.not_answered = 0;
        state.sessionStats.not_visited = 0;
        state.sessionStats.marked_for_review = 0;
        state.sessionStats.answered_and_marked_for_review = 0;

        for(j=0; j < state.exam_sections.length; j++) {
            for (i = 0; i < state.exam_sections[j].questions.length; i++) {
                if(state.userAttemptsData[j][i].class === "answered")
                    state.sessionStats.answered++;
                else if(state.userAttemptsData[j][i].class === "not-answered")
                    state.sessionStats.not_answered++;
                else if(state.userAttemptsData[j][i].class === "not-visited")
                    state.sessionStats.not_visited++;
                else if(state.userAttemptsData[j][i].class === "marked-for-review")
                    state.sessionStats.marked_for_review++;
                else if(state.userAttemptsData[j][i].class === "answered-and-marked-for-review")
                    state.sessionStats.answered_and_marked_for_review++;
                
            }
        }            
    },
    setExpireDate (state,value){
        state.sessionData.expire_date = value;
    },
    setUserAttemptsData (state,value){
        state.userAttemptsData = value;
    },
    setSessionData (state,value){
        state.sessionData = value;
    },
    incrementSection (state){
        state.sessionData.current_section++;
    },
    decrementSection (state){
        state.sessionData.current_section--;
    },
    changeSection (state, index){
        state.sessionData.current_section = index;
    },
    incrementQuestion (state){    
        Vue.set(state.sessionData.question_no,state.sessionData.current_section,state.sessionData.question_no[state.sessionData.current_section]+1);
    },
    decrementQuestion (state){
        Vue.set(state.sessionData.question_no,state.sessionData.current_section,state.sessionData.question_no[state.sessionData.current_section]-1);
    },
    deselectCurrentQuestion(state){
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].selected = false;
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    },
    selectCurrentQuestion(state){            
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].selected = true;
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    },
    changeQuestion(state,val){
        this.commit('examPage/deselectCurrentQuestion')
        Vue.set(state.sessionData.question_no, state.sessionData.current_section, val);
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].selected = true;
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    },
    reviewSwap(state){
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].marked_for_review = !state.userAttemptsData[state.sessionData.current_section][state.sessionData.question_no[state.sessionData.current_section]].marked_for_review;
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    },
    clearSelection(state){
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].answer = null;
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    },
    setClass(state, className){
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].class = className
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);         
    },
    setOption(state, optionId){
        const newRow = state.userAttemptsData[state.sessionData.current_section].slice(0);
        newRow[state.sessionData.question_no[state.sessionData.current_section]].answer = optionId
        Vue.set(state.userAttemptsData, state.sessionData.current_section, newRow);
    }

}