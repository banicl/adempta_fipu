<template>
  <div>
    <div id="obrub9">
      <div id="inf9"><h1 id="naslov9">UPS! :(</h1></div>

      <br />
      <h3>
        Ispričavamo se, usluge Adempte<br />
        još nisu dostupne u ovom gradu.
      </h3>
      <br />
      <a id="povratak" href="/">
        <button type="button" class="btn btn-primary" id="gumb9">
          POVRATAK
        </button></a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Pogreska",
};
</script>

<style >
#obrub9 {
  width: 500px;
  height: 300px;
  background-color: #4ab9ab;
  margin: auto;
  margin-top: 150px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px #e0e4e4;
}
#naslov9 {
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #4ab9ab;
}
#inf9 {
  width: auto;
  height: auto;
  background-color: #f5f4d2;
  border-radius: 100px;
  margin: auto;
  box-shadow: 5px 5px #e0e4e4;
}
h4 {
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
}

#gumb9 {
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
#gumb9:hover {
  background-color: #d2cbb6;
  cursor: pointer;
}
a {
  text-decoration: none;
}
h3 {
  text-align: center;
  font-family: sans-serif;
}
</style>