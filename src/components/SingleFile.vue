<template>
  <form @submit.prevent="submitFile">
    <div id="droporbrowse">
      <loading :active.sync="isLoading" 
          :can-cancel="true" 
          :is-full-page="fullPage"></loading>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      file: [],
      parsedText: '',
      advice: '',
      offSet: '',
      isLoading: false,
      fullPage: true,
      solutions: []
    };
  },
  components: {
    Loading
  },
  methods: {
    submitFile() {
      this.isLoading = true;
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
          this.offSet = result.data.result.matches[0].offset;
          this.isLoading = false;
          this.solutions = [];
          (result.data.result.matches[0].replacements).forEach(replacement => {
            this.solutions.push(replacement.value)
          })
          this.solutions = this.solutions.slice(this.solutions.length-5)
          this.$emit('submit-pdf', this.parsedText, this.advice, this.offSet, this.solutions)
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