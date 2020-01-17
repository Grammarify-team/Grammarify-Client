<template>
  <div class="outerbox">
    <div class="innerbox"></div>
  </div>
</template>

<script>
import SingleFile from "./SingleFile";
export default {};
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
}
</style>