
<template>
  <div>
    <div id="slika_div10">
      <a href="/odabir_rada"
        ><img id="slika_odabir10" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub10">
      <div id="inf10"><h1 id="naslov10">PRIKAZ LINIJA</h1></div>
      <br />
      <div v-for="card in cards" :key="card.id">
        <div id="podaci10">
          <router-link
            id="ruter10"
            :to="{ name: 'LinijaDetalji', params: { idlinije: card.id } }"
            >{{ card.naziv }}</router-link
          >
        </div>
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
    debug() {
      console.log(this.cards);
    },
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
              naziv: data.naziv,
            });
          });
        });
    },
  },
};
</script>


<style>
#obrub10 {
  width: 500px;
  height: 567px;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
  overflow: auto;
}
#naslov10 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#inf10 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#slika_odabir10 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
#podaci10 {
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 350px;
  height: 40px;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  padding-top: 20px;
  font-weight: bold;
  color: #4ab9ab;
  margin-bottom: 10px;
}
#slika_div10 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}
#ruter10 {
  text-decoration: none;
  color: #4ab9ab;
}

@media screen and (max-width: 600px) {
  #obrub10 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 0;
  }

  #slika_odabir10 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }
  #podaci10 {
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
  #slika_div10 {
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