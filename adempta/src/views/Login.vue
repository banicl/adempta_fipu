<template>
  <div id="obrub" class="about">
    <div id="naslov"><h1 id="naslov_login">LOGIN</h1></div>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label id="email" for="exampleInputEmail1">EMAIL:</label
            ><br /><br />
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="emailunos"
              aria-describedby="emailHelp"
              placeholder="Unesite email"
            /><br /><br />
            <small id="emailHelp" class="form-text text-muted"> </small>
          </div>
          <div class="form-group">
            <label id="lozinka" for="exampleInputPassword1">LOZINKA:</label
            ><br /><br />
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="lozinkaunos"
              placeholder="Unesite lozinku"
            /><br /><br /><br />
          </div>
          <button
            id="prijava"
            type="button"
            @click="login()"
            class="btn btn-primary"
          >
            LOGIN
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);

          this.$router.replace({ name: "Odabir_rada" });
        })
        .catch(function (e) {
          alert("Neispravna lozinka / email.");
          console.error("Greška", e);
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
  margin-top: 100px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov_login {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#naslov {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#email {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
  padding: auto;
}
#lozinka {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
  padding: 11px;
}
#emailunos {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
#lozinkaunos {
  border-radius: 100px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
  text-align: center;
}
#prijava {
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
#prijava:hover {
  background-color: #d2cbb6;
  cursor: pointer;
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
    margin-top: 50px;
  }
}
</style>