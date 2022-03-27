
<template>
  <div id="obrub" class="admin_inf">
    <div id="inf"><h1 id="naslov">ODABERI</h1></div>
    <br />
    <a id="a_link" href="/dodaj">
      <button id="dodaj" type="button" class="btn btn-primary">
        DODAJ NOVU LINIJU
      </button></a
    >
    <br /><br />

    <a id="a_link" href="/uredi">
      <button id="uredi" type="button" class="btn btn-primary">
        UREDI POSTOJEĆU LINIJU
      </button></a
    >

    <br /><br />
    <a id="a_link" href="/obrisi">
      <button id="obrisi" type="button" class="btn btn-primary">
        OBRIŠI LINIJU
      </button></a
    >
    <br /><br />
    <a id="a_link" href="/prikaz">
      <button id="prikaz" type="button" class="btn btn-primary">
        PRIKAZ SVIH LINIJA
      </button></a
    >
  </div>
</template>


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

#a_link:link,
#a_link:visited,
#a_link:hover,
#a_link:active {
  text-decoration: none;
  color: white;
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