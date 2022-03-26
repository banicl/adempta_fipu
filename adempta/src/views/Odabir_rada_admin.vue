
<template>
  <div id="obrub" class="admin_inf">
    <div id="inf"><h1 id="naslov">ODABERI</h1></div>
    <br />
    <a href="/dodaj">
      ><button id="dodaj" type="button" class="btn btn-primary">
        DODAJ NOVU LINIJU
      </button></a
    >
    <br /><br />

    <router-link class="routerLink" :to="{ path: '@/views/Uredi_liniju.vue' }"
      ><button id="uredi" type="button" class="btn btn-primary">
        UREDI POSTOJEĆU LINIJU
      </button></router-link
    >

    <br /><br />
    <button id="obrisi" type="button" class="btn btn-primary">
      OBRIŠI LINIJU
    </button>
    <br /><br />
    <router-link class="routerLink" :to="{ path: '@/views/Prikaz_linija.vue' }">
      <button id="prikaz" type="button" class="btn btn-primary">
        PRIKAZ SVIH LINIJA
      </button></router-link
    >
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
#dodaj {
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
#uredi {
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
  padding-top: 10px;
}
#obrisi {
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
#prikaz {
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

#dodaj:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#uredi:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#obrisi:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#prikaz:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
#slika {
  width: 70px;
  height: 70px;
}
.routerLink {
  text-decoration: none;
}
</style>