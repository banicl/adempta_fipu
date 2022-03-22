
<template>
  <div id="obrub" class="admin_inf">
    <div id="inf"><h1 id="naslov">firebase ime linije</h1></div>
    <button id="radni" type="button" class="btn btn-primary">RADNI DANI</button>
    <br /><br />

    <button id="subota" type="button" class="btn btn-primary">SUBOTA</button>

    <br /><br />
    <button id="nedjelja" type="button" class="btn btn-primary">
      NEDJELJA
    </button>
  </div>
</template>
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

#radni {
  width: 150px;
  height: 45px;
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
  padding-top: 15px;
}
#subota {
  width: 150px;
  height: 45px;
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
  padding-top: 15px;
}
#nedjelja {
  width: 150px;
  height: 45px;
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
  padding-top: 15px;
}

#subota:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#radni:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#nedjelja:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}

.routerLink {
  text-decoration: none;
}
</style>