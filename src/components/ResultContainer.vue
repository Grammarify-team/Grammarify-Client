<template>
  <div class="outerbox">
    <div class="innerbox">
      <div v-if="hasUploaded">
        <h1>Your Result</h1>
        <hr />
        <h4>Parsed Text:</h4>
        <p>{{ parsedText }}</p>
        <hr />
        <h4>Examination Comment:</h4>
        <p>{{ advice }}</p>
<<<<<<< HEAD
        <h6>At Character: {{ Number(offSet) + 1 }}</h6>
=======
        <h6>At Character: {{ Number(offSet) + 1 }} </h6>
        <hr>
        <h6>Possible Replacements:</h6>
        <p>{{ solutions.join(",") }}</p> 
>>>>>>> development
      </div>
      <img v-if="!hasUploaded" src="../images/hiclipart.com.png" width="100" height="100" />
    </div>
  </div>
</template>

<script>
import SingleFile from "./SingleFile";
export default {
  props: ["parsedText", "advice", "hasUploaded", "offSet", "solutions"]
};
</script>

<style scoped>
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
  display: flex;
  justify-content: center;
}

img {
  /* justify-self: center; */
  align-self: center;
}
<<<<<<< HEAD
=======

/* #solutions {
  overflow: y-auto;
} */
>>>>>>> development
</style>