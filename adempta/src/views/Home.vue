<template>
  <div id="obrub_grad" class="home">
    <div id="odabir_grada"><h1 id="naslov_grad">PULA-PROMET</h1></div>
    <label id="polaziste">ODREDITE POLAZIŠTE:</label><br /><br />

    <input
      type="name1"
      v-model="username"
      class="form-control"
      id="input_polaziste"
      aria-describedby="polazisteHelp"
      placeholder="Unesite polazište"
    /><br /><br />
    <label id="odrediste" for="exampleInputEmail1">ODREDITE ODREDIŠTE:</label
    ><br /><br />
    <input
      type="name2"
      v-model="username"
      class="form-control"
      id="input_odrediste"
      aria-describedby="odredisteHelp"
      placeholder="Unesite odredište"
    /><br /><br />
    <button type="button" @click="login()" class="btn btn-primary">
      TRAŽI
    </button>
  </div>
</template>

<script>
//dodat kasnije v-model koji odgovara za odredeno odrediste i polaziste,input isto
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
#obrub_grad {
  width: auto;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov_grad {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#odabir_grada {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
#odrediste,
#polaziste {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #f5f4d2;
}
#input_polaziste,
#input_odrediste {
  border-radius: 100px;
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
</style>
