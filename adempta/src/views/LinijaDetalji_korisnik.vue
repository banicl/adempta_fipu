
<template>
  <div v-if="card">
    <div id="slika_div">
      <a href="/home"> <img id="slika_nazad" src="@/assets/nazad.png" /></a>
    </div>
    <div id="obrub" class="admin_inf">
      <div id="inf">
        <div id="naslov">
          <h1>{{ card.naziv }}</h1>
        </div>
      </div>
      <div id="inf_broj">
        <div id="naslov">
          <h1>{{ card.broj_busa }}</h1>
        </div>
      </div>
      <ul>
        <div v-for="vrijeme in card.vrijeme" :key="vrijeme.id">
          <div id="podaci">{{ vrijeme }}</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "LinijaDetalji_Korisnik",
  data: function () {
    return {
      card: null,
      arr: [],
      cardID: this.$route.params.idlinije_korisnik,
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
#obrub {
  width: 700px;
  height: 500px;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
  overflow: auto;
}
#naslov {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
  text-transform: uppercase;
}
#inf {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#inf_broj {
  width: 80px;
  height: auto;
  background-color: #f8f7e7;
  border-radius: 100px;
  margin: auto;
}
#slika_odabir {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
#slika_nazad {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-right: 10px;
}
#podaci {
  text-decoration: none;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 150px;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin-bottom: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #4ab9ab;
  /* text-decoration: none;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 150px;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  padding-top: 20px;
  font-weight: bold;
  color: #4ab9ab; */
}
#slika_div {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
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
    margin-top: 0;
  }

  #slika_odabir {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
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
    margin-bottom: 10px;
  }
  #slika_div {
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