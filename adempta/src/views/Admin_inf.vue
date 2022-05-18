<template>
  <div>
    <div id="slika_div1">
      <a href="/odabir_rada"
        ><img id="slika_odabir1" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub1" class="admin_inf">
      <div id="inf1"><h1 id="naslov1">INFORMACIJE</h1></div>
      <img id="slika1" src="@/assets/admin.png" />
      <label id="administrator1">ADMINISTRATOR</label><br /><br />
      <label id="email1">EMAIL: {{ username }}</label>

      <br /><br />

      <br /><br />

      <br /><br />
      <button
        id="odjava1"
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
#obrub1 {
  width: 500px;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;

  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov1 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#inf1 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#email1,
#administrator1 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#administrator1 {
  position: relative;
  left: 30px;
  bottom: 27px;
}
#email1 {
  position: relative;
  left: 10px;
}
#odjava1 {
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
#odjava1:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#slika1 {
  width: 70px;
  height: 70px;
}
#slika_odabir1 {
  height: 38px;
  width: 38px;
  margin-top: 100px;
  padding-left: 10px;
}
#slika_div1 {
  width: 500px;
  height: auto;
  background-color: clear;
  margin: auto;
  margin-top: 5px;
  padding: 20px;
  border-radius: 15px;
}
@media screen and (max-width: 600px) {
  #obrub1 {
    width: auto;
    height: auto;
    background-color: #4ab9ab;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px #e0e4e4;
    margin: 10px;
    margin-top: 0;
  }

  #slika_odabir1 {
    height: 38px;
    width: 38px;
    margin-top: 15px;
    padding-left: 1px;
  }
  #slika_div1 {
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