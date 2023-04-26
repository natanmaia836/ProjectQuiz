<template>
  <q-layout>
    <div class="row">
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/hp-quiz" class="textos">
          <q-img
            class="imagens"
            src="~assets/HP/harrypotter-carousel-1.png"
          ></q-img>
          <q-card class="q-pa-xs text-center mudanca"
            >Qual o seu nivel de potterhead?</q-card
          >
        </a>
      </div>
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/sda-quiz" class="textos">
          <q-img class="imagens" src="~assets/SDA/sda-1.jpg"></q-img>
          <q-card class="q-pa-xs text-center mudanca"
            >O quanto você conhce Senhor dos Aneis?</q-card
          >
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/got-quiz" class="textos">
          <q-img class="imagens" src="~assets/GOT/got-1.webp"></q-img>
          <q-card class="q-pa-xs text-center mudanca"
            >Qual é sua casa de Game of Thrones?</q-card
          >
        </a>
      </div>
      <div class="col-md col-xs-12 q-pa-md">
        <a href="/vikns-quiz" class="textos">
          <q-img class="imagens" src="~assets/VIKNS/vikns-1.webp"></q-img>
          <q-card class="q-pa-xs text-center mudanca"
            >Qual Vinking você seria?</q-card
          >
        </a>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SelecionePage",

  setup() {
    return {};
  },
});
</script>

<style>
.imagens {
  max-height: 13rem;
  border-top-right-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
}
.textos {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
.mudanca {
  transition: 0.5s;
}
.mudanca:hover {
  background: gray;
  color: white;
  font-size: 1.2rem;
  transition: 0.5s;
}
</style>
