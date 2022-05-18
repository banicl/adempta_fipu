<template>
  <div>
    <div id="slika_div2">
      <a href="/odabir_rada"
        ><img id="slika_odabir22" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub2" class="about">
      <div id="naslov2"><h1 id="naslov2_login2">DODAJ LINIJU</h1></div>
      <form @submit.prevent="postNewLinija" class="form-inline mb-5">
        <div class="form-group">
          <label id="pol_dol_vri2" for="polaziste">POLAZIŠTE: </label>
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
          <label id="pol_dol_vri2" for="odrediste">ODREDIŠTE: </label
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
          <label id="pol_dol_vri2" for="vrijemepolaska2"
            >VRIJEME POLASKA: </label
          ><br /><br />
          <input
            v-model="newvrijeme"
            type="text"
            class="form-control ml-2"
            placeholder="Unesite vrijeme polaska"
            id="vrijemepolaska2"
          /><br />
        </div>
        <br />
        <button id="podnesi2" type="submit" class="btn btn-primary ml-2">
          DODAJ LINIJU
        </button>
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
      const vrijemepolaska2 = this.newvrijeme;

      db.collection("posts")
        .add({
          pol: polaziste,
          odr: odrediste,
          vr: vrijemepolaska2,
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
#obrub2 {
  width: 500px;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov_login2 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#naslov2 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#pol_dol_vri2 {
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
#vrijemepolaska2 {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
#podnesi2 {
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
#podnesi2:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#slika_odabir2 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
#slika_div2 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}
@media screen and (max-width: 600px) {
  #obrub2 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 5px;
  }

  #slika_odabir2 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }
  #slika_div2 {
    width: auto;
    height: 50px;
    background-color: clear;
    padding: 20px;
    border-radius: 15px;
    margin: 0;
    margin-top: 5px;
  }
}
</style>