<template>
  <div class="container">
<<<<<<< HEAD
    <ResultContainer
      :parsedText="parsedText"
      :advice="advice"
      :hasUploaded="hasUploaded"
      :offSet="offSet"
    ></ResultContainer>
=======
    <ResultContainer :parsedText="parsedText" :advice="advice" :hasUploaded="hasUploaded" :offSet="offSet" :solutions="solutions">
    </ResultContainer>
>>>>>>> development
    <SingleFile v-on:submit-pdf="submitPdf"></SingleFile>
    <div id="fb-root" style="margin-top:10px;"></div>
    <!-- Your share button code -->
    <div
      class="fb-share-button"
      data-href="http://grammarify.nafies.tech"
      data-layout="button_count"
      data-size="large"
    ></div>
  </div>
</template>

<script>
import SingleFile from "./components/SingleFile";
import ResultContainer from "./components/ResultContainer";
export default {
  data() {
    return {
      parsedText: "",
      advice: "",
      hasUploaded: false,
<<<<<<< HEAD
      offSet: ""
=======
      offSet: '',
      solutions: []
>>>>>>> development
    };
  },
  components: {
    SingleFile,
    ResultContainer
  },
  methods: {
<<<<<<< HEAD
    submitPdf(text, advice, offSet) {
      console.log(text);
      console.log(advice);
=======
    submitPdf(text, advice, offSet, solutionsArr) {
      console.log(text)
      console.log(advice)
>>>>>>> development
      this.parsedText = text;
      this.advice = advice;
      this.offSet = offSet;
      this.hasUploaded = true;
<<<<<<< HEAD
    }
=======
      this.solutions = solutionsArr;
    },
>>>>>>> development
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