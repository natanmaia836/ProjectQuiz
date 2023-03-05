<template>
  <q-page>
    <div class="q-pa-md">
      <q-carousel animated ref="carousel" v-model="slide" infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="5"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="6"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="7"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="8"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="9"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="10"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
    <div class="row justify-center text-center">
      <span class="text-h7 text-weight-bold">{{ subtitle }}</span>
    </div>
    <div class="row q-mt-sm q-col-gutter-y-sm column">
      <div class="col-md">
        <q-input
          readonly
          :bg-color="cor1"
          :label="texto1"
          outlined
          v-model="text"
        >
          <template v-slot:prepend>
            <q-checkbox
              v-model="input1"
              @click="checkboxSelect()"
              :disable="selecionado"
            />
          </template>
        </q-input>
      </div>
      <div class="col-md">
        <q-input
          readonly
          :bg-color="cor2"
          :label="texto2"
          outlined
          v-model="text"
        >
          <template v-slot:prepend>
            <q-checkbox
              v-model="input2"
              @click="checkboxSelect()"
              :disable="selecionado"
            />
          </template>
        </q-input>
      </div>
      <div class="col-md">
        <q-input
          readonly
          :bg-color="cor3"
          :label="texto3"
          outlined
          v-model="text"
        >
          <template v-slot:prepend>
            <q-checkbox
              v-model="input3"
              @click="checkboxSelect()"
              :disable="selecionado"
            />
          </template>
        </q-input>
      </div>
      <div class="col-md">
        <q-input
          readonly
          :bg-color="cor4"
          :label="texto4"
          outlined
          v-model="text"
        >
          <template v-slot:prepend>
            <q-checkbox
              v-model="input4"
              @click="checkboxSelect()"
              :disable="selecionado"
            />
          </template>
        </q-input>
      </div>
      <div class="col-md">
        <q-input
          readonly
          :bg-color="cor5"
          :label="texto5"
          outlined
          v-model="text"
        >
          <template v-slot:prepend>
            <q-checkbox
              v-model="input5"
              @click="checkboxSelect()"
              :disable="selecionado"
            />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
  <q-btn
    v-if="input1 || input2 || input3 || input4 || input5"
    color="primary"
    v-model="slide"
    @click="$refs.carousel.next(), nextOne()"
    icon="arrow_forward_ios"
    round
  ></q-btn>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "QuizPage",

  setup() {
    const slide = ref(1);
    const subtitle = ref("Quem o Harry macetaria no off?");
    const texto1 = ref("Hermione");
    const texto2 = ref("Valdemort");
    const texto3 = ref("MC Pipokinha");
    const texto4 = ref("Severo Snaipe");
    const texto5 = ref("Harry é eunuco");
    const cor1 = ref("");
    const cor2 = ref("");
    const cor3 = ref("");
    const cor4 = ref("");
    const cor5 = ref("");
    const input1 = ref(false);
    const input2 = ref(false);
    const input3 = ref(false);
    const input4 = ref(false);
    const input5 = ref(false);
    const selecionado = ref(false);

    const checkboxSelect = () => {
      situacoesSelect();
    };
    const nextOne = () => {
      limparAll();
      if (slide.value == 2) {
        subtitle.value = "Avada Kedavra ou Avada keraba?";
        texto1.value = "Avante com a raba!";
        texto2.value = "Avada Kedavra";
        texto3.value = "A Vera com a raba!";
        texto4.value = "Eita bruxinha rabuda";
        texto5.value = "Avada keraba!";
      } else if (slide.value == 3) {
        subtitle.value =
          "Qual magia Harry usou para transformar seu cajado em cobra?";
        texto1.value = "Sectumsempra";
        texto2.value = "Libid gel";
        texto3.value = "Serpensortia";
        texto4.value = "Protego Horribilis";
        texto5.value = "Piertotum Locomator";
      } else if (slide.value == 4) {
        subtitle.value = "Avada Kedavra ou Avada keraba?";
        texto1.value = "Avante com a raba!";
        texto2.value = "Avada Kedavra";
        texto3.value = "A Vera com a raba!";
        texto4.value = "Eita bruxinha rabuda";
        texto5.value = "Avada keraba!";
      } else if (slide.value == 5) {
        subtitle.value = "Avada Kedavra ou Avada keraba?";
        texto1.value = "Avante com a raba!";
        texto2.value = "Avada Kedavra";
        texto3.value = "A Vera com a raba!";
        texto4.value = "Eita bruxinha rabuda";
        texto5.value = "Avada keraba!";
      }
    };
    const limparAll = () => {
      selecionado.value = false;
      subtitle.value = "";
      texto1.value = "";
      texto2.value = "";
      texto3.value = "";
      texto4.value = "";
      texto5.value = "";
      cor1.value = "";
      cor2.value = "";
      cor3.value = "";
      cor4.value = "";
      cor5.value = "";
      input1.value = false;
      input2.value = false;
      input3.value = false;
      input4.value = false;
      input5.value = false;
    };
    const situacoesSelect = () => {
      if (slide.value == 1) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
          cor5.value = "red";
        }
      } else if (slide.value == 2) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "green";
          cor3.value = "red";
          cor4.value = "red";
          cor5.value = "red";
        }
      } else if (slide.value == 3) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
          cor4.value = "red";
          cor5.value = "red";
        }
      } else if (slide.value == 4) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "green";
          cor5.value = "red";
        }
      } else if (slide.value == 5) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
          cor5.value = "green";
        }
      }
    };

    return {
      subtitle,
      slide,
      cor1,
      cor2,
      cor3,
      cor4,
      cor5,
      input1,
      input2,
      input3,
      input4,
      input5,
      texto1,
      texto2,
      texto3,
      texto4,
      texto5,
      selecionado,
      checkboxSelect,
      nextOne,
      limparAll,
      situacoesSelect,
    };
  },
});
</script>
