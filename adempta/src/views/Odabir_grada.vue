<template>
  <div>
    <div id="laptop">
      <div>
        <router-link to="/pogreska"
          ><img id="os" src="@/assets/osijek.png"
        /></router-link>
        <a href="/pogreska"><img id="zg" src="@/assets/zagreb.png" /></a>
        <a href="/home"><img id="pu" src="@/assets/pula.png" /></a>
      </div>
      <div>
        <a href="/pogreska"><img id="ri" src="@/assets/rijeka.png" /></a>
        <a href="/pogreska"><img id="vz" src="@/assets/varazdin.png" /></a>
        <a href="/pogreska"><img id="st" src="@/assets/split.png" /></a>
      </div>
    </div>
    <div class="mob">
      <div>
        <a href="/pogreska"><img id="os" src="@/assets/osijek.png" /></a>
        <a href="/pogreska"><img id="zg" src="@/assets/zagreb.png" /></a>
      </div>
      <div>
        <a href="/home"><img id="pu" src="@/assets/pula.png" /></a>
        <a href="/pogreska"><img id="ri" src="@/assets/rijeka.png" /></a>
      </div>
      <div>
        <a href="/pogreska"><img id="vz" src="@/assets/varazdin.png" /></a>
        <a href="/pogreska"><img id="st" src="@/assets/split.png" /></a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}
img {
  opacity: 0.8;
  transition: 0.5s ease;
}
img:hover {
  opacity: 1;
}
.mob {
  display: none;
}
#os {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
#zg {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
#pu {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
#ri {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
#vz {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
#st {
  width: 12%;
  padding: 10%;
  padding-top: 50px;
}
@media screen and (max-width: 600px) {
  #os {
    width: 40%;
    padding: 5%;
  }
  #zg {
    width: 40%;
    padding: 5%;
  }
  #pu {
    width: 40%;
    padding: 5%;
  }
  #ri {
    width: 40%;
    padding: 5%;
  }
  #vz {
    width: 40%;
    padding: 5%;
  }
  #st {
    width: 40%;
    padding: 5%;
  }
  .laptop {
    display: none;
  }
  .mob {
    display: block;
  }
}
</style>