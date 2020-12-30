import { SET_QUESTION_NUM, SET_QUESTION_LIST } from './mutationType.js'
export const state = () => ({
  questionNum: 0, // 問題数
  questionList: [], // 問題データセット
})

export const actions = {
  generateQuestions({ commit, state }) {
    const questionList = []
    for (let i = 0; i < state.questionNum; i++) {
      const firstAddend = Math.floor(Math.random() * 100)
      const secondAddend = Math.floor(Math.random() * 100)
      const sum = firstAddend + secondAddend
      questionList.push({
        firstAddend,
        secondAddend,
        sum,
      })
    }

    commit(SET_QUESTION_LIST, questionList)
  },
  setQuestionNum({ commit }, questionNum) {
    commit(SET_QUESTION_NUM, questionNum)
  },
}

export const mutations = {
  [SET_QUESTION_NUM](state, questionNum) {
    state.questionNum = questionNum
  },
  [SET_QUESTION_LIST](state, questionList) {
    state.questionList = questionList
  },
}

export const getters = {
  questionList(state) {
    return state.questionList
  },
}
