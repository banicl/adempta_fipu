<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="inputemail" placeholder="Email" />
    <input
      type="lozinka"
      name="lozinka"
      v-model="inputlozinka"
      placeholder="Lozinka"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      inputemail: "",
      inputlozinka: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.inputemail);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.inputemail, this.inputlozinka)
        .then(function (result) {
          console.log("Uspjesna prijava", result);
        })
        .catch(function (e) {
          //u slucaju greske catch prima jednu funkciu u koju stvlja eror objekt
          console.error("greska", e);
        });
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>