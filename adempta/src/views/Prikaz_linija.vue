
<template>
  <div>
    <a href="/odabir_rada"><img id="slika_odabir" src="@/assets/home.png" /></a>
    <div id="obrub" class="admin_inf">
      <div id="inf"><h1 id="naslov">PRIKAZ LINIJA</h1></div>
      <br />
      <div id="podaci" v-for="card in cards" :key="card.id">
        {{ card.polaziste }} {{ card.odrediste }} {{ card.vrrijeme_polaska }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "prikazi_linije",
  data: function () {
    return {
      cards: [],
      store,
    };
  },
  mounted() {
    this.getLinije();
  },
  methods: {
    getLinije() {
      console.log("firebase dohvat...");
      db.collection("posts")
        .get()
        .then((query) => {
          this.cards = [];
          query.forEach((doc) => {
            const data = doc.data();

            this.cards.push({
              id: doc.id,
              polaziste: data.pol,
              odrediste: data.odr,
              vrrijeme_polaska: data.vr,
            });
          });
        });
    },
  },
};
</script>


<style>
#obrub {
  width: 500px;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#inf {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#slika_odabir {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 390px;
}
#podaci {
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 300px;
  height: 40px;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  padding-top: 20px;
  font-weight: bold;
  color: #4ab9ab;
}
@media screen and (max-width: 600px) {
  #obrub {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 5px;
  }

  #slika_odabir {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 10px;
  }
  #podaci {
    text-align: center;
    text-decoration: none;
    font-family: sans-serif;
    text-transform: uppercase;
    width: 200px;
    height: 40px;
    background-color: #f5f4d2;
    border-radius: 100px;
    margin: auto;
    padding-top: 20px;
    font-weight: bold;
    color: #4ab9ab;
  }
}
</style>