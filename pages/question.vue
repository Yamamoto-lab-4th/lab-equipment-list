<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-text-field
        type="number"
        label="問題数"
        @input="setQuestionNum"
      ></v-text-field>
      <v-btn @click="generateQuestions"> 問題作成 </v-btn>
      <template v-for="(question, index) in questionList">
        <div :key="index">
          <p>
            {{ question.firstAddend }}
            +
            {{ question.secondAddend }}
            =
            {{ question.sum }}
          </p>
        </div>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('addition', ['questionList']),
  },
  methods: {
    ...mapActions('addition', ['generateQuestions', 'setQuestionNum']),
  },
}
</script>
