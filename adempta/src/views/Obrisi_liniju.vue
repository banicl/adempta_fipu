
<template>
  <div>
    <div id="slika_div7">
      <a href="/odabir_rada"
        ><img id="slika_odabir7" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub7" class="admin_inf7">
      <div id="inf7">
        <h1 id="naslov7">BRISANJE LINIJA</h1>
      </div>
      <div id="brisanjediv7">
        <label id="brisanje7">Klikni na liniju koju želite obrisati.</label>
      </div>
      <br />
      <div v-for="card in cards" :key="card.id">
        <button
          id="obrisi1"
          @click="obrisiLiniju(card.id)"
          v-on:click="isHidden = true"
        >
          {{ card.naziv }}
        </button>
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
              naziv: data.naziv,
              id: doc.id,
            });
          });
        });
    },
    obrisiLiniju(id) {
      db.collection("posts")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Uspješno brisanje!");
          this.cards = this.cards.filter((card) => card.id !== id);
          alert("Uspješno ste obrisali liniju.");
        })
        .catch((error) => {
          console.error("Greška prilikom brisanja: ", error);
          alert("Greska prilikom brisanja linije.");
        });
    },
  },
};
</script>


<style>
#obrub7 {
  width: 500px;
  height: 500px;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
  overflow: auto;
}
#naslov7 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#inf7 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#slika_odabir7 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}

#slika_div7 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}

#obrisi1 {
  font-family: sans-serif;
  text-transform: uppercase;
  width: 300px;
  margin: auto;
  height: 40px;
  background-color: #f5f4d2;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  color: #4ab9ab;
  margin-bottom: 10px;
  padding-bottom: 30px;
  padding-top: 20px;
  display: block;
  display: grid;
}
#obrisi1:hover {
  font-family: sans-serif;
  text-transform: uppercase;
  width: 300px;
  margin: auto;
  height: 40px;
  background-color: #a61c1c;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  color: #f5f4d2;
  margin-bottom: 10px;
  padding-bottom: 30px;
  padding-top: 20px;
  display: block;
  display: grid;
}
#brisanje7 {
  font-family: sans-serif;
  color: #f5f4d2;
  padding-left: 127px;
}
#brisanjediv7 {
  padding-bottom: 30px;
}

@media screen and (max-width: 600px) {
  #obrub7 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 0;
  }

  #slika_odabir7 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }

  #slika_div7 {
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