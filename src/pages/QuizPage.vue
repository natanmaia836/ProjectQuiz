<template>
  <q-page class="q-pa-md">
    <div>
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
    <div class="row q-mb-sm">
      <span class="text-h8">Pergunta {{ slide }}/10</span>
    </div>
    <div class="row justify-center text-center">
      <span class="text-h7 text-weight-bold">{{ subtitle }}</span>
    </div>
    <div class="row q-mt-sm q-col-gutter-y-sm column">
      <div class="col-md">
        <q-input readonly :bg-color="cor1" :label="texto1" outlined>
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
        <q-input readonly :bg-color="cor2" :label="texto2" outlined>
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
        <q-input readonly :bg-color="cor3" :label="texto3" outlined>
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
        <q-input readonly :bg-color="cor4" :label="texto4" outlined>
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
        <q-input readonly :bg-color="cor5" :label="texto5" outlined>
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
    <q-dialog v-model="qDialogEmail" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Quase lá!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Ei!, você conseguiu responder todas as questões, deseja ver seu
          resultado?, digite seu e-mail e receba também por lá.
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense outlined label="E-mail" v-model="email"></q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            :disable="!email"
            flat
            label="OK"
            color="primary"
            @click="sendEmail()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="qDialogResultado">
      <q-carousel
        ref="carouselResultado"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slideDialogResultado"
        control-color="primary"
        padding
        height="200px"
        class="bg-white shadow-1 rounded-borders q-pa-sm"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <span
            v-if="acertos > 1 || acertos == 0"
            class="text-h7 text-weight-bold"
            >Você acertou {{ acertos }} perguntas
            <q-icon name="star" size="md" color="yellow" class="q-mb-xs"
          /></span>
          <span v-if="acertos == 1" class="text-h7 text-weight-bold"
            >Você acertou {{ acertos }} pergunta
            <q-icon name="star" size="md" color="yellow"
          /></span>
          <div class="q-mt-md text-center">
            <span
              v-if="acertos > 1 || acertos == 0"
              class="text-h7 text-weight-bold"
              >Parabéns!, você é um: {{ seuTipo }}
            </span>
          </div>
          <div class="q-mt-md text-center">
            Veja quem foi você e como terminou sua jornada...
          </div>
          <div class="q-mt-md">
            <q-btn
              color="primary"
              v-model="slide"
              @click="$refs.carouselResultado.next()"
              icon="arrow_forward"
              round
              size="sm"
            ></q-btn>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          />
          <q-icon
            name="hiking"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa'"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Grande Feiticeiro'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'"></div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Trouxa'">
            A vida toda você sonhou com a magia, seu maior desejo desde pequeno
            sempre foi poder alcança-lá, senti-lá, controla-lá.
          </div>
          <div class="q-mt-md">
            <q-btn
              color="primary"
              v-model="slide"
              @click="$refs.carouselResultado.next()"
              icon="arrow_forward"
              round
              size="sm"
            ></q-btn>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa'"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Grande Feiticeiro'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'"></div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Trouxa'">
            Apesar de ver Hogwarts em seus sonhos, não demorou muito para
            perceber que isso não era para você, infelizmente você era mais um
            humano comum.
          </div>
          <div class="q-mt-md">
            <q-btn
              color="primary"
              v-model="slide"
              @click="$refs.carouselResultado.next()"
              icon="arrow_forward"
              round
              size="sm"
            ></q-btn>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="live_tv"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          />
          <q-icon
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa'"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Grande Feiticeiro'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'"></div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          ></div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Trouxa'">
            Desconfortante no início mas você aprendeu a dar um jeito,
            conquistou seu lugar no mundo do seu jeito, com um bom emprego, um
            lar e uma linda família.
          </div>
          <div class="q-mt-md">
            <q-btn
              color="primary"
              v-model="slide"
              @click="$refs.carouselResultado.next()"
              icon="arrow_forward"
              round
              size="sm"
            ></q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
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
import { ref, defineComponent, onMounted } from "vue";
import { Notify } from "quasar";

export default defineComponent({
  name: "QuizPage",

  setup() {
    const slide = ref(1);
    const slideDialogResultado = ref(1);
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
    const email = ref("");
    const seuTipo = ref("Trouxa");
    const input1 = ref(false);
    const input2 = ref(false);
    const input3 = ref(false);
    const input4 = ref(false);
    const input5 = ref(false);
    const selecionado = ref(false);
    const qDialogResultado = ref(true);
    const qDialogEmail = ref(false);
    const acertos = ref(0);

    onMounted(() => {
      //console.log(acertos.value);
    });

    const MsgSucesso = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "E-mail enviado!",
      });
    };

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
        qDialogEmail.value = true;
      }
    };
    const sendEmail = () => {
      MsgSucesso();
      if (acertos.value <= 3) {
        seuTipo.value = "Trouxa";
      } else if (acertos.value == 4 || acertos.value <= 7) {
        seuTipo.value = "Bruxo Aprendiz";
      } else if (acertos.value == 8 || acertos.value == 9) {
        seuTipo.value = "Bruxo";
      } else {
        seuTipo.value = "Grande Feiticeiro";
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
          if (input1.value) {
            acertos.value = acertos.value + 1;
          }
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
          if (input2.value) {
            acertos.value++;
          }
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
          if (input3.value) {
            acertos.value++;
          }
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
          if (input4.value) {
            acertos.value++;
          }
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
          if (input5.value) {
            acertos.value++;
          }
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
      acertos,
      slideDialogResultado,
      qDialogEmail,
      qDialogResultado,
      email,
      seuTipo,
      checkboxSelect,
      nextOne,
      limparAll,
      situacoesSelect,
      sendEmail,
      MsgSucesso,
    };
  },
});
</script>
