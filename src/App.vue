<template>
  <div class="container">
    <ResultContainer></ResultContainer>
    <SingleFile></SingleFile>
  </div>
</template>

<script>
import SingleFile from "./components/SingleFile";
import ResultContainer from "./components/ResultContainer";
export default {
  data() {
    return {
      inputText: "",
      advice: ""
    };
  },
  components: {
    SingleFile,
    ResultContainer
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(140, 213, 235, 1) 0%,
    rgba(47, 124, 140, 1) 50%,
    rgba(8, 30, 59, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* .container {
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.outerbox {
  width: 400px;
  height: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2%;
}

.innerbox {
  width: 380px;
  height: 380px;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 2%;
  border: 2px dashed rgba(128, 128, 128, 0.384);
} */
</style>