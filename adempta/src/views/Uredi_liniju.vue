<template>
  <div>
    <div id="slika_div11">
      <a href="/odabir_rada"
        ><img id="slika_odabir11" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub11" class="admin_inf11">
      <div id="inf11"><h1 id="naslov11">UREDI LINIJU</h1></div>
      <br />
      <label id="vrijeme11" for="bus"
        >Odaberite liniju koju želite urediti:</label
      >
      <select id="drop11" name="bus" v-if="cards" v-model="newlinija">
        <option v-for="card in cards" :key="card.id" :value="card.id">
          {{ card.naziv }}
        </option>
      </select>
      <br /><br />
      <br />

      <label id="vrijeme11" for="vrijemepolaska">VRIJEME POLASKA: </label
      ><br /><br />
      <label id="vrijeme11" for="vrijemepolaska"
        >Unesite broj novih vremena koje želite unijeti:
      </label>
      <input
        v-model="brojvrijeme"
        type="number"
        class="form-control ml-2"
        placeholder="Unesite broj vremena"
        id="brojvrijeme11"
      />
      <br /><br />

      <div v-for="index in Number(brojvrijeme)" :key="index">
        <input
          v-model="newvrijeme[index]"
          type="text"
          class="form-control ml-2"
          placeholder="Unesite vrijeme polaska"
          id="vrijemepolaska11"
        />
        <br />
      </div>
      <br /><br />
      <button
        id="podnesi11"
        type="submit"
        @click="UpdateLinija(), postNewLinija()"
        class="btn btn-primary ml-2"
      >
        SPREMI
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db, firebase } from "@/firebase";

export default {
  name: "dodaj_liniju",
  data: function () {
    return {
      brojvrijeme: "",
      val: "",
      newvrijeme: [],
      cards: [],
      val: "",
      store,
      newlinija: "",
      newpolaziste: "",
      newodrediste: "",
      brbusa: "",
      onChange(e) {
        console.log(e.target.value);
      },
    };
  },
  mounted() {
    this.getLinije();
  },
  methods: {
    debug() {
      console.log(this.cards);
    },
    postNewLinija() {
      console.log("ok");

      const broj_busa = this.brbusa;
      const naziv = this.newlinija;
      const polaziste = this.newpolaziste;
      const odrediste = this.newodrediste;
      const vrijemepolaska = this.newvrijeme;

      let docRef;

      db.collection("posts")
        .add({
          broj_busa: broj_busa,
          naziv: naziv,
          pol: polaziste,
          odr: odrediste,
        })
        .then((doc) => {
          docRef = doc;
        })
        .catch((e) => {
          console.log(e);
        });

      if (docRef) {
        this.newvrijeme.forEach((vrijemePolaska) => {
          db.collection("posts")
            .doc(docRef)
            .update({
              vrijeme: vrijemePolaska,
            })
            .then((doc) => {
              console.log("Spremljeno", doc);
            })
            .catch((e) => {
              console.error(e);
            });
        });
      }
    },
    UpdateLinija() {
      this.newvrijeme.forEach((vrijemePolaska) => {
        db.collection("posts")
          .doc(this.newlinija)
          .update({
            vrijeme: firebase.firestore.FieldValue.arrayUnion(vrijemePolaska),
          })
          .then((doc) => {
            console.log("Spremljeno", doc);
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
    getLinije() {
      console.log("firebase dohvat...");
      db.collection("posts")
        .get()
        .then((query) => {
          let newvrijeme = [];
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
#obrub11 {
  width: 500px;
  height: 420px;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
  overflow: auto;
}
#naslov11 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}

#vrijeme11 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #fff;
}

#inf11 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#slika_odabir11 {
  height: 38px;
  width: 38px;
  margin-top: 20px;
  padding-left: 10px;
}
#slika_div11 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}
#vrijemepolaska11,
#brojvrijeme11,
#drop11 {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;

  display: block;
  display: grid;
  text-align: center;
}

#podnesi11 {
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
#podnesi11:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  #obrub11 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 0;
  }

  #slika_odabir11 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }
  #slika_div11 {
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
