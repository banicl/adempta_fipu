<template>
  <div>
    <div id="slika_div">
      <a href="/odabir_rada"
        ><img id="slika_odabir" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub" class="admin_inf">
      <div id="inf"><h1 id="naslov">INFORMACIJE</h1></div>
      <img id="slika" src="@/assets/admin.png" />
      <label id="administrator">ADMINISTRATOR</label><br /><br />
      <label id="email">EMAIL: {{ username }}</label>

      <br /><br />

      <br /><br />

      <br /><br />
      <button
        id="odjava"
        type="button"
        @click="logout()"
        class="btn btn-primary"
      >
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
      username: "",
    };
  },
  mounted() {
    this.saveEmail();
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
    saveEmail() {
      firebase.auth().onAuthStateChanged((user) => {
        console.log("😉");
        console.log(user.email);
        this.username = user.email;
        console.log(this.username);
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
#odjava {
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
#odjava:hover {
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
    margin-top: 0;
  }

  #slika_odabir {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
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