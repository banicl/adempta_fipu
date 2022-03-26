<template>
  <div>
    <a href="/odabir_rada"><img id="slika_odabir" src="@/assets/home.png" /></a>
    <div id="obrub" class="about">
      <div id="naslov"><h1 id="naslov_login">DODAJ LINIJU</h1></div>
      <form @submit.prevent="postNewLinija" class="form-inline mb-5">
        <div class="form-group">
          <label id="pol_dol_vri" for="polaziste">POLAZIŠTE: </label>
          <br /><br />
          <input
            v-model="newpolaziste"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite polazište"
            id="polaziste1"
          />
        </div>
        <br />
        <div class="form-group">
          <label id="pol_dol_vri" for="odrediste">ODREDIŠTE: </label
          ><br /><br />
          <input
            v-model="newodrediste"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite odredište"
            id="odrediste1"
          />
        </div>
        <br />
        <div class="form-group">
          <label id="pol_dol_vri" for="vrijemepolaska">VRIJEME POLASKA: </label
          ><br /><br />
          <input
            v-model="newvrijeme"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite vrijeme polaska"
            id="vrijemepolaska"
          /><br />
        </div>
        <br />
        <button type="submit" class="btn btn-primary ml-2">DODAJ LINIJU</button>
      </form>
    </div>
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
  margin-top: 5px;
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
#pol_dol_vri {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}

#polaziste1 {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
#odrediste1 {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
#vrijemepolaska {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
button {
  width: 100px;
  height: auto;
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
  padding-top: 6px;
  padding-bottom: 6px;
}
button:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#slika_odabir {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
</style>