
<template>
  <div v-if="card">
    <div id="slika_div5">
      <a href="/prikaz"> <img id="slika_nazad5" src="@/assets/nazad.png" /></a>
      <a href="/odabir_rada">
        <img id="slika_odabir5" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub5">
      <div id="inf5">
        <div id="naslov5">
          <h1>{{ card.naziv }}</h1>
        </div>
      </div>
      <div id="inf_broj5">
        <div id="naslov5">
          <h1>{{ card.broj_busa }}</h1>
        </div>
      </div>
      <ul>
        <div v-for="vrijeme in card.vrijeme" :key="vrijeme.id">
          <div id="podaci5">{{ vrijeme }}</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "LinijaDetalji",
  data: function () {
    return {
      card: null,
      arr: [],
      cardID: this.$route.params.idlinije,
      store,
    };
  },
  mounted() {
    this.getLinije();
  },
  methods: {
    debug() {
      console.log(this.card);
    },
    getLinije() {
      const docRef = db.collection("posts").doc(this.cardID);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("ima dokumenta😁");
          const data = doc.data();
          this.card = {
            id: doc.id,
            vrijeme: data.vrijeme,
            naziv: data.naziv,
            broj_busa: data.broj_busa,
          };
        } else {
          console.log("nema dokumenta 😥");
        }
      });

      console.log("firebase dohvat...");
    },
  },
};
</script>


<style>
#obrub5 {
  width: 700px;
  height: 500px;
  background-color: #4ab9ab;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
  overflow: auto;
}
#naslov5 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
  text-transform: uppercase;
}
#inf5 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#inf_broj5 {
  width: 80px;
  height: auto;
  background-color: #f8f7e7;
  border-radius: 100px;
  margin: auto;
}
#slika_odabir5 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
#slika_nazad5 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-right: 10px;
}
#podaci5 {
  font-family: sans-serif;
  text-transform: uppercase;
  height: auto;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
  align-items: center;
  justify-content: center;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin-bottom: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #4ab9ab;
}
#slika_div5 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}
@media screen and (max-width: 600px) {
  #obrub5 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 0;
  }

  #slika_odabir5 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }
  #podaci5 {
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
    margin-bottom: 10px;
  }
  #slika_div5 {
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