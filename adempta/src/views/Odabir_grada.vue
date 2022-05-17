<template>
  <div>
    <div class="laptop">
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
.mob {
  display: none;
}
#os {
  width: 250px;
  padding-left: 150px;
  padding-top: 50px;
}
#zg {
  width: 250px;
  padding-left: 250px;
  padding-top: 50px;
}
#pu {
  width: 250px;
  padding-left: 250px;
  padding-top: 50px;
}
#ri {
  width: 250px;
  padding-left: 150px;
  padding-top: 50px;
}
#vz {
  width: 250px;
  padding-left: 250px;
  padding-top: 50px;
}
#st {
  width: 250px;
  padding-left: 250px;
  padding-top: 50px;
}
@media screen and (max-width: 600px) {
  #os {
    width: 120px;
    padding-left: 30px;
  }
  #zg {
    width: 120px;
    padding-left: 20px;
  }
  #pu {
    width: 120px;
    padding-left: 30px;
  }
  #ri {
    width: 120px;
    padding-left: 20px;
  }
  #vz {
    width: 120px;
    padding-left: 30px;
  }
  #st {
    width: 120px;
    padding-left: 20px;
  }
  .laptop {
    display: none;
  }
  .mob {
    display: block;
  }
}
</style>