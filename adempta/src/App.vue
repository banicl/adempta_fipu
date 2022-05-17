<template>
  <div
    class="bg-container"
    v-bind:style="{
      background: 'url(' + require('@/assets/pozadina.png') + ')',
    }"
  >
    <nav id="nav" class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <ul>
            <li v-if="!store.currentUser" id="slova1">
              <a href="/login">LOGIN</a>
            </li>
            <li v-if="store.currentUser" id="slova1">
              <a href="/admin_inf">INFO</a>
            </li>
            <li v-if="!store.currentUser" id="slova1">
              <a href="/">GRAD</a>
            </li>

            <img center src="@/assets/logo_adempta.png" height="42" />
          </ul>
        </a>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import store from "@/store";
import { firebase } from "@/firebase";
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    store.currentUser = user.email;
  } else {
    console.log("No user");
    store.currentUser = null;
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
};
</script>


<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  background-color: #4ab9ab;
  border-radius: 100px;
  padding-left: 10px;
}

#slova1 {
  float: right;
}

li a {
  display: block;
  color: #449c91;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 100px;
  background-color: #f5f4d2;
  margin: 2px;
}

li a:hover {
  background-color: #d2cbb6;
}

html,
body {
  margin: 0;
  height: 100%;
  background-repeat: no-repeat;
}
.bg-container {
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

