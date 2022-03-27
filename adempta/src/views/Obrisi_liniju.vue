
<template>
  <div id="slika_">
    <a href="/odabir_rada"><img id="slika_odabir" src="@/assets/home.png" /></a>
    <div id="obrub" class="admin_inf">
      <div id="inf"><h1 id="naslov">BRISANJE LINIJA</h1></div>
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
#slika_ {
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