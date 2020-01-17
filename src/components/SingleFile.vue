<template>
  <!-- <form @submit.prevent="submitFile">
    <input type="file" id="file" ref="file" @change="handleFileUpload()" />
    <button type="submit">Submit</button>
  </form>-->
  <form @submit.prevent="submitFile">
    <!-- <div>
      <input type="file" id="file" ref="file" @change="handleFileUpload()" />
    </div>-->
    <div id="droporbrowse">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <div>
      <b-button type="submit">Submit</b-button>
      <!-- <button type="submit">Submit</button> -->
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      file: []
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(this.file);
      axios
        // .post("http://localhost:3000/upload", formData, {
        .post("http://api-grammarify.nafies.tech/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(result => {
          // console.log(result.data);
          // console.log("sukses");
          this.checkGrammar(result.data);
        })
        .catch(err => console.log(err));
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    checkGrammar(data) {
      const url = data.link;
      console.log(url);
      axios
        .post("http://api-grammarify.nafies.tech/ocr/parse", {
          // headers: {
          //   "Content-Type": "multipart/form-data"
          // }
          data: {
            url
          }
        })
        .then(result => {
          console.log(result.data);
          console.log("sukses");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
button {
  height: 35px;
  width: 300px;
}
#droporbrowse {
  margin: 10px 0 10px 0;
  width: 300px;
}
</style>