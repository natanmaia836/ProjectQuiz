<template>
  <q-page class="q-pa-md">
    <div>
      <q-carousel animated ref="carousel" v-model="slide" infinite>
        <q-carousel-slide
          :name="1"
          img-src="~/assets/harrypotter-carousel-1.png"
        />
        <q-carousel-slide
          :name="2"
          img-src="~/assets/harrypotter-carousel-2.jpg"
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
      <div class="col absolute-bottom-right">
        <q-btn
          v-if="input1 || input2 || input3 || input4 || input5"
          style="z-index: 100"
          color="primary"
          v-model="slide"
          @click="$refs.carousel.next(), nextOne()"
          icon="arrow_forward_ios"
          round
          size="lg"
        ></q-btn>
      </div>
    </div>
    <q-dialog v-model="qDialogEmail" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Quiz Concluído!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Você conseguiu responder todas as questões, deseja ver seu resultado?,
          digite seu e-mail e receba também por lá.
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
            <span class="text-h7 text-weight-bold"
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
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="flare"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="dark_mode"
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
          >
            A magia era inevitável para você, seu pai um grande feiticeiro e sua
            mãe uma bruxa extraordinária, nunca tiveram tempo para você devido a
            importância de seus cargos e afazeres, mas o guiaram para o que você
            seria.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'">
            Você sempre foi apto a utilizar a magia sob seu favor, ela era como
            o próprio sangue que percorria suas veias, visto por ti como uma
            dádiva, sempre a seu comando e a mercê de seu destino.
          </div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          >
            Ainda quando criança, no quarto de seus pais você achou encondida em
            meio a algumas mudas de roupas uma varinha, segurando-a você pode
            sentir por um breve momento um lapso de energia percorrer seu corpo.
          </div>
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
            name="bolt"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="auto_fix_high"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="history_edu"
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
          >
            Em alguns dias seu talento e sua dedicação já eram anormais,
            ultrapassavam os limites que barravam até os sábios, essa sua força
            de vontade e tamanho poder retratavam sua busca incessante para
            alcançar seus pais.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'">
            Muitos te admiravam e alguns até de ti tinham medo, para você era
            irrelevante, sua prioridade sempre foi algo além da compreensão,
            você buscava seu próprio limite, enfrentar seu destino com tudo que
            estivesse a seu alcance.
          </div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          >
            Sua afinidade pela magia era notável, mas algo lhe faltava, algo
            além da dedicação e do exforço, eis então que uma coruja pousa em
            sua janela deixa uma carta e voa noite a dentro, um convite?, para
            Hogwarts!.
          </div>
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
            name="fireplace"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Grande Feiticeiro'"
          />
          <q-icon
            name="local_fire_department"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo'"
          />
          <q-icon
            name="location_city"
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
          >
            Por fim você se tornou um grande feiticeiro, seu poder e sabedoria
            são imensuráveis, a magia dentro de você energiza sua alma, você
            rege a lei natural do mundo com justiça, honra e respeito.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo'">
            Em uma armadilha, cercado por diversos bruxos das trevas, era
            possível ver a magia rechaçar ambos os lados e rasgar a realidade,
            você foi fatalmente atingido e antes de cair, certificou-se de que
            nenhum deles ainda estaria de pé.
          </div>
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Aprendiz de Bruxo'"
          >
            Em Hogwarts tudo era único e diferente, você se dedicou aos
            ensinamentos, fez diversos feitos e conseguiu invocar seu prórpio
            patrono enchendo de orgulho seus pais e professores, um futuro
            promissor adiante.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Trouxa'">
            Desconfortante no início mas você aprendeu a dar um jeito,
            conquistou seu lugar no mundo do seu jeito, com um bom emprego, um
            lar e uma linda família.
          </div>
          <div class="q-mt-md">
            <q-btn
              color="primary"
              v-model="slide"
              @click="qDialogResultado = false"
              label="Fechar"
              size="sm"
            ></q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { Notify } from "quasar";

export default defineComponent({
  name: "QuizPage",

  setup() {
    const slide = ref(1);
    const slideDialogResultado = ref(1);
    const subtitle = ref("Quais são os três protagonistas de Hary Potter?");
    const texto1 = ref("Harry Potter, Hermione Granger e Toby Maguire");
    const texto2 = ref("Harry Potter, Rony Weasley e Dolores Umbridge");
    const texto3 = ref("Rony Weasley, Hermione Gramsey e Joaquim Fenix");
    const texto4 = ref("Hermione Gramsey, Rony Weasley e Draco Malfoy");
    const texto5 = ref("Rony Weasley, Harry Potter e Hermione Gramsey");
    const cor1 = ref("");
    const cor2 = ref("");
    const cor3 = ref("");
    const cor4 = ref("");
    const cor5 = ref("");
    const email = ref("");
    const seuTipo = ref("");
    const input1 = ref(false);
    const input2 = ref(false);
    const input3 = ref(false);
    const input4 = ref(false);
    const input5 = ref(false);
    const selecionado = ref(false);
    const qDialogResultado = ref(false);
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
        subtitle.value =
          "Qual o feitiço usado para abrir portas e janelas trancadas?";
        texto1.value = "Expecto Patronum";
        texto2.value = "Expelliarmus";
        texto3.value = "Alohomora";
        texto4.value = "Crucio";
        texto5.value = "Colloportus";
      } else if (slide.value == 3) {
        subtitle.value =
          "Qual o feitiço que Draco usa para lançar uma cobra de sua varinha?";
        texto1.value = "Sectumsempra";
        texto2.value = "Expelliarmus";
        texto3.value = "Serpensortia";
        texto4.value = "Protego Horribilis";
        texto5.value = "Piertotum Locomator";
      } else if (slide.value == 4) {
        subtitle.value = "O que são dementadores?";
        texto1.value = "Criaturas das trevas que consomem a alegria";
        texto2.value = "Aranhas da Aracne";
        texto3.value = "Criaturas metade cavalo e metade homem";
        texto4.value = "Criaturas bondosas da floresta";
        texto5.value = "Criaturas das trevas metade homem, metade lobo";
      } else if (slide.value == 5) {
        subtitle.value = "Quais são as casas presentes em Hogwarts?";
        texto1.value = "Lufa-Lufa, Serpentina, Grifinória, Servinal";
        texto2.value = "Grifinória, Corvinal, Lannister, Lufa-Lufa";
        texto3.value = "Serpentina, Grifinória, Sonserina, Corvinal";
        texto4.value = "Corvinal, Sonserina, Grifinória, Lufa-Lufa";
        texto5.value = "Grifinória, Sonserina, Lufa-Lufa, Servinal";
      } else if (slide.value == 6) {
        subtitle.value = "De quem Harry Potter ganha a vassoura Nimbus 2000?";
        texto1.value = "Alvo Dumbledore";
        texto2.value = "Lord Voldemort";
        texto3.value = "Minerva McGonagall";
        texto4.value = "Servero Snape";
        texto5.value = "Remo Lupin";
      } else if (slide.value == 7) {
        subtitle.value = "Qual o nome da coruja do Harry Potter?";
        texto1.value = "Edward";
        texto2.value = "Pigwidgeon";
        texto3.value = "Gizmo";
        texto4.value = "Almora";
        texto5.value = "Edwiges";
      } else if (slide.value == 8) {
        subtitle.value =
          "Qual o nome do feitiço de defesa que convoca um animal de energia positiva.";
        texto1.value = "Expecto Patronum";
        texto2.value = "Avada Kedavra";
        texto3.value = "Expectro Patronoum";
        texto4.value = "Expelliarmus";
        texto5.value = "Sectumsempra";
      } else if (slide.value == 9) {
        subtitle.value =
          "Qual é o feitiço conhecido como 'a pior das três Maldições Imperdoáveis'";
        texto1.value = "Sectumsempra";
        texto2.value = "Sectosumpra";
        texto3.value = "Valar Morghulis";
        texto4.value = "Avada Kedrava";
        texto5.value = "Avada Kedavra";
      } else if (slide.value == 10) {
        subtitle.value = "Quem é o vilão de Harry Potter?";
        texto1.value = "Draco Malfoy";
        texto2.value = "Lord Valdemort";
        texto3.value = "Severo Snape";
        texto4.value = "Lord Voldemort";
        texto5.value = "Lord Valdomiro";
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
      qDialogResultado.value = true;
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
          if (input5.value) {
            acertos.value = acertos.value + 1;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
          cor5.value = "green";
        }
      } else if (slide.value == 2) {
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
          if (input1.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
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
      } else if (slide.value == 6) {
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
      } else if (slide.value == 7) {
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
      } else if (slide.value == 8) {
        if (
          input1.value ||
          input2.value ||
          input3.value ||
          input4.value ||
          input5.value
        ) {
          if (input1.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
          cor5.value = "red";
        }
      } else if (slide.value == 9) {
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
      } else if (slide.value == 10) {
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
          qDialogEmail.value = true;
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
