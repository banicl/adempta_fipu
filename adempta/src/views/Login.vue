<template>
  <div id="obrub" class="about">
    <div id="naslov"><h1>LOGIN</h1></div>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label id="email" for="exampleInputEmail1">Email:</label
            ><br /><br />
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="emailunos"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            /><br /><br />
            <small id="emailHelp" class="form-text text-muted"> </small>
          </div>
          <div class="form-group">
            <label id="lozinka" for="exampleInputPassword1">Password:</label
            ><br /><br />
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="lozinkaunos"
              placeholder="Password"
            /><br /><br /><br />
          </div>
          <button type="button" @click="login()" class="btn btn-primary">
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
        })
        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>
<style>
#obrub {
  width: auto;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
h1 {
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
  border-radius: 8px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#email {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#lozinka {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#emailunos {
  border-radius: 3px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
}
#lozinkaunos {
  border-radius: 3px;
  border: none;
  width: 200px;
  height: 30px;
  margin: auto;
  display: block;
  display: grid;
}
button {
  width: 100px;
  height: 40px;
  margin: auto;
  display: block;
  display: grid;
  border-radius: 3px;
  border: none;
  text-align: auto;
  font-family: sans-serif;
  font-weight: bold;
  background: #449c91;
  color: white;
  box-shadow: 5px 5px #e0e4e4;
}
</style>