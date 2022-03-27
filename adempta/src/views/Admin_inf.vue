<template>
  <div id="slika_div">
    <a href="/odabir_rada"><img id="slika_odabir" src="@/assets/home.png" /></a>
    <div id="obrub" class="admin_inf">
      <div id="inf"><h1 id="naslov">INFORMACIJE</h1></div>
      <img id="slika" src="@/assets/admin.png" />
      <label id="administrator">ADMINISTRATOR</label><br /><br />
      <label id="email">EMAIL: </label>
      <div id="podaci" v-for="card in cards" :key="card.id">
        {{ card.email }}
      </div>
      <br /><br />

      <br /><br />

      <br /><br />
      <button type="button" @click="logout()" class="btn btn-primary">
        ODJAVA
      </button>
    </div>
  </div>
</template>

<script>
//dodaj funkciju za prikaz email->firebase
import { firebase } from "@/firebase";
import store from "@/store";
import { db } from "@/firebase";
export default {
  name: "app",
  data() {
    return {
      cards: [],
      store,
    };
  },
  mounted() {
    this.getLinije();
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
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
              email: data.email,
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
#email,
#administrator {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#administrator {
  position: relative;
  left: 30px;
  bottom: 27px;
}
#email {
  position: relative;
  left: 10px;
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
#slika {
  width: 70px;
  height: 70px;
}
#slika_odabir {
  height: 38px;
  width: 38px;
  margin-top: 100px;
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
}
</style>