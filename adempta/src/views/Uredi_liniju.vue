<template>
  <div>
    <div id="slika_div">
      <a href="/odabir_rada"
        ><img id="slika_odabir" src="@/assets/home.png"
      /></a>
    </div>
    <div id="obrub" class="admin_inf">
      <div id="inf"><h1 id="naslov">UREDI LINIJU</h1></div>
      <br />
    </div>
  </div>
</template>


<style>
#obrub {
  width: 500px;
  height: auto;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 5px;
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