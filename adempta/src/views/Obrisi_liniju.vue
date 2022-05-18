
<template>
  <div>
    <div id="slika_div">
      <a href="/odabir_rada"
        ><img id="slika_odabir" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub" class="admin_inf">
      <div id="inf">
        <h1 id="naslov">BRISANJE LINIJA</h1>
      </div>
      <div id="brisanjediv">
        <label id="brisanje">Klikni na liniju koju želite obrisati.</label>
      </div>
      <br />
      <div v-for="card in cards" :key="card.id">
        <button
          id="obrisi"
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
#obrub {
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
  padding-left: 10px;
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
#a_link:link,
#a_link:visited,
#a_link:hover,
#a_link:active {
  text-decoration: none;
  color: white;
}

#obrisi {
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
#obrisi:hover {
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
#brisanje {
  font-family: sans-serif;
  color: #f5f4d2;
  padding-left: 127px;
}
#brisanjediv {
  padding-bottom: 30px;
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
    width: auto;
    height: 40px;
    background-color: #f5f4d2;
    border-radius: auto;
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

  #kantica {
    width: 100px;
    height: 50%;
  }
}
</style>