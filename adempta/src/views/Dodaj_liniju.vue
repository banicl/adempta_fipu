<template>
  <div id="obrub" class="about">
    <div id="naslov"><h1 id="naslov_login">LOGIN</h1></div>
    <form @submit.prevent="postNewLinija" class="form-inline mb-5">
      <div class="form-group">
        <label for="polaziste">Polazište: </label>
        <input
          v-model="newpolaziste"
          type="text"
          class="form-control ml-2"
          placeholder="Unesite polazište"
          id="polaziste"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="odrediste">Odredište: </label>
        <input
          v-model="newodrediste"
          type="text"
          class="form-control ml-2"
          placeholder="Unesite odredište"
          id="odrediste"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="vrijemepolaska">Vrijeme polaska: </label>
        <input
          v-model="newvrijeme"
          type="text"
          class="form-control ml-2"
          placeholder="Unesite vrijeme polaska"
          id="vrijemepolaska"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary ml-2">Dodaj liniju</button>
    </form>
  </div>
</template>
<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "dodaj_liniju",
  data: function () {
    return {
      newpolaziste: "",
      newodrediste: "",
      newvrijeme: "",
    };
  },
  methods: {
    postNewLinija() {
      console.log("ok");

      const polaziste = this.newpolaziste;
      const odrediste = this.newodrediste;
      const vrijemepolaska = this.newvrijeme;

      db.collection("posts")
        .add({
          pol: polaziste,
          odr: odrediste,
          vr: vrijemepolaska,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newpolaziste = "";
          this.newodrediste = "";
          this.newvrijeme = "";
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>


<style>
#obrub {
  width: auto;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov_login {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#naslov {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#email {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#lozinka {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#emailunos {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
}
#lozinkaunos {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
}
button {
  width: 100px;
  height: 40px;
  margin: auto;
  display: block;
  display: grid;
  border-radius: 100px;
  border: none;
  text-align: auto;
  font-family: sans-serif;
  font-weight: bold;
  background: #449c91;
  color: white;
  box-shadow: 5px 5px #e0e4e4;
  padding-top: 13px;
}
button:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
</style>