<template>
  <fundo-animado> </fundo-animado>
  <q-layout class="sobre">
    <div class="row justify-center">
      <img src="~assets/logotipo.png" style="max-width: 16rem" />
    </div>

    <div class="row">
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/hp-quiz" class="textos">
          <q-img
            class="imagens"
            src="~assets/HP/harrypotter-carousel-1.png"
          ></q-img>
          <q-card class="q-pa-xs text-center"
            >Quem você seria em Harry Potter?</q-card
          >
        </a>
      </div>
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/sda-quiz" class="textos">
          <q-img class="imagens" src="~assets/SDA/sda-1.jpg"></q-img>
          <q-card class="q-pa-xs text-center"
            >O quanto você conhece sobre Senhor dos Anéis?</q-card
          >
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/got-quiz" class="textos">
          <q-img class="imagens" src="~assets/GOT/got-1.webp"></q-img>
          <q-card class="q-pa-xs text-center"
            >Quanto você sabe sobre Game of Thrones?</q-card
          >
        </a>
      </div>
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/vikns-quiz" class="textos">
          <q-img class="imagens" src="~assets/VIKNS/vikns-1.webp"></q-img>
          <q-card class="q-pa-xs text-center">Que Viking você seria?</q-card>
        </a>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref, defineComponent } from "vue";
import FundoAnimado from "src/components/FundoAnimado.vue";

export default defineComponent({
  name: "SelecionePage",
  components: {
    FundoAnimado,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.sobre {
  position: absolute;
  top: 0%;
}

@media (max-width: 768px) {
  .sobre {
    top: 0%;
  }
}
.imagens {
  max-height: 13rem;
  border-top-right-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
}
.textos {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  transition: 0.5s;
}
.textos:hover {
  color: #ff5757;
  font-weight: 600;
  font-size: 1.2rem;
  transition: 0.5s;
}
.body {
  background-image: linear-gradient(to top, #38b6ff, #dcdcdc);
}
</style>
