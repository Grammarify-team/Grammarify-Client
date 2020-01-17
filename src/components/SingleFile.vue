<template>
  <form @submit.prevent="submitFile">
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
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      file: [],
      parsedText: "",
      advice: ""
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("http://api-grammarify.nafies.tech/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(result => {
          this.checkGrammar(result.data);
        })
        .catch(err => console.log(err));
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    checkGrammar(data) {
      const url = data.link;
      axios({
        method: "post",
        url: "http://api-grammarify.nafies.tech/ocr/parse",
        data: {
          url
        }
      })
        .then(result => {
          this.parsedText = result.data.parsedText;
          this.advice = result.data.result.matches[0].message;
          this.$emit("submit-pdf", this.parsedText, this.advice);
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