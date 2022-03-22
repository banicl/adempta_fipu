<template>
  <div id="obrub" class="admin_inf">
    <div id="inf"><h1 id="naslov">INFORMACIJE</h1></div>
    <img id="slika" src="@/assets/admin.png" />
    <label id="administrator">ADMINISTRATOR</label><br /><br />
    <label id="email">EMAIL:</label><br /><br />

    <br /><br />

    <br /><br />
    <button type="button" class="btn btn-primary">ODJAVA</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
//dodaj funkciju za prikaz email->firebase
export default {
  name: "Home",
  components: {
    HelloWorld,
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
</style>