<template>
  <div class="container">
    <ResultContainer :parsedText="parsedText" :advice="advice" :hasUploaded="hasUploaded" :offSet="offSet">
    </ResultContainer>
    <SingleFile v-on:submit-pdf="submitPdf"></SingleFile>
  </div>
</template>

<script>
import SingleFile from "./components/SingleFile";
import ResultContainer from "./components/ResultContainer";
export default {
  data() {
    return {
      parsedText: '',
      advice: '',
      hasUploaded: false,
      offSet: ''
    };
  },
  components: {
    SingleFile,
    ResultContainer
  },
  methods: {
    submitPdf(text, advice, offSet) {
      console.log(text)
      console.log(advice)
      this.parsedText = text;
      this.advice = advice;
      this.offSet = offSet;
      this.hasUploaded = true;
    },
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>