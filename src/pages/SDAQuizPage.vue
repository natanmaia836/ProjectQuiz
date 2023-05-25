<template>
  <q-layout class="q-pa-md bg-grey-3">
    <div class="row justify-center">
      <div
        v-if="screenWidth > 530"
        style="box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5)"
        class="col-md-9 col-xs-12"
      >
        <q-carousel animated ref="carousel" v-model="slide" infinite>
          <q-carousel-slide
            :name="1"
            img-src="~assets/SDA/sda-carousel-1.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/SDA/sda-carousel-2.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/SDA/sda-carousel-3.png"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/SDA/sda-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/SDA/sda-carousel-5.jpg"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/SDA/sda-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/SDA/sda-carousel-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/SDA/sda-carousel-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/SDA/sda-carousel-9.jpg"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/SDA/sda-carousel-10.jpg"
          />
        </q-carousel>
      </div>
      <div
        v-if="screenWidth < 530"
        style="box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5)"
        class="col-md-9 col-xs-12"
      >
        <q-carousel animated ref="carousel" v-model="slide" infinite>
          <q-carousel-slide
            :name="1"
            img-src="~assets/SDA/sda-carousel-1.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/SDA/sda-carousel-mobile-2.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/SDA/sda-carousel-3.png"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/SDA/sda-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/SDA/sda-carousel-5.jpg"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/SDA/sda-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/SDA/sda-carousel-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/SDA/sda-carousel-mobile-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/SDA/sda-carousel-9.jpg"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/SDA/sda-carousel-mobile-10.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <div class="row q-mt-sm">
      <span class="text-h8">Pergunta {{ slide }}/10⭐</span>
    </div>
    <q-card class="q-pa-md">
      <div class="row justify-center text-center">
        <span class="text-h7 text-weight-bold">{{ subtitle }}</span>
      </div>
      <!-- VERDADEIRO E FALSO -->
      <div class="row q-mt-sm column">
        <div v-if="slide == 2 || slide == 3 || slide == 4">
          <div class="col-md">
            <q-input readonly :bg-color="cor6" :label="texto6" outlined>
              <template v-slot:prepend>
                <q-checkbox
                  v-model="input6"
                  @click="checkboxSelect()"
                  :disable="selecionado"
                />
              </template>
            </q-input>
          </div>
          <div class="col-md q-mt-sm">
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
        <!-- 4 BOTÕES -->
        <div class="q-col-gutter-y-sm" v-else>
          <div class="col-md-2">
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
        </div>

        <!-- NEXT / HOME -->
        <div class="col-md absolute-bottom-right">
          <q-btn
            v-if="selecionado && slide < 10"
            style="z-index: 100"
            color="primary"
            v-model="slide"
            @click="$refs.carousel.next(), nextOne()"
            icon="arrow_forward_ios"
            round
            size="lg"
          ></q-btn>
          <q-btn
            v-if="selecionado && slide == 10"
            style="z-index: 100"
            color="primary"
            v-model="slide"
            href="/"
            icon="home"
            round
            size="lg"
          ></q-btn>
        </div>
      </div>
    </q-card>
    <q-dialog v-model="qDialogEmail" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Quiz Concluído!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Olá!, você concluiu todas as questões, para ver seu resultado digite
          seu e-mail e receba também por lá.
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
            v-if="seuTipo == 'Escolhido' && screenWidth > 530"
          />
          <q-icon
            name="flare"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="dark_mode"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aventureiro' && screenWidth > 530"
          />
          <q-icon
            name="hiking"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div class="q-mt-md text-center" v-if="seuTipo == 'Escolhido'">
            Não há glória sem risco e você sempre soube muito bem disso, após
            herdar o anel de um velho amigo e receber a visita de Gandalf o
            Cinzento, você descobre que o anel deve ser destruído para o bem de
            tudo e todos.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            você veste sua armadura e sente o peso da idade te alcançar, temendo
            o futuro, voce vê á sua frente um enorme exercito, repleto de orcs,
            trolls e ogros, é o exercíto de Sauron.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Aventureiro'">
            O som do vento nas árvores durante as idas e vindas á cidade,
            atiçavam seu coração, você sonhava diáriamente com o mundo á fora,
            com tesouros e perigos que expreitavam.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            Você sempre teve baixas expectativas, acreditava na simplicidade da
            vida e raramente saia de seu vilarejo para visitar outras terras.
            Manhãs calmas e relaxar na varanda eram tudo para ti.
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
            v-if="seuTipo == 'Escolhido' && screenWidth > 530"
          />
          <q-icon
            name="auto_fix_high"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="history_edu"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aventureiro' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div class="q-mt-md text-center" v-if="seuTipo == 'Escolhido'">
            A aventura é árdua, diversos desafios e perigos, ao chegar em
            Valfenda, alguns companheiros se juntam á sua jornada, sua missão é
            destruir o anel no vulcão de Mordor antes que Sauron o use para
            acabar com o mundo.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            Estando nos portões de Mordor, seu batalhão é guiado por Gandalf o
            Mago Branco, sua missão é deter as forças malignas de Sauron dando
            passagem ao escolhido, o portador do anel.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Aventureiro'">
            Você costumava treinar para o imprevísivel, ainda jovem, era ágil e
            imprudente, esgueirava-se entre cavernas. Explorar calabouços era
            sua diversão, sempre havia algo novo para descobrir.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            Mesmo se acostumando com a rotina diária era inevitável sentir um
            certo desconforto da vida que você levava, entretanto, você sempre
            tratou os poucos que o conheciam muito bem e com respeito.
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
            v-if="seuTipo == 'Escolhido' && screenWidth > 530"
          />
          <q-icon
            name="local_fire_department"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Aventureiro' && screenWidth > 530"
          />
          <q-icon
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div class="q-mt-md text-center" v-if="seuTipo == 'Escolhido'">
            A jornada é repleta de desafios, ao chegar em Mordor há uma enorme
            batalha á frente, esgueirando-se entre os corpos você passa
            desapercebido e chegando ao vulcão, você se desfaz do anel,
            concluíndo sua missão.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            Você ergue sua espada, cornetas tocam e os exércitos avançam, a luta
            é árdua, uma flecha o atinge, fatalmente ferido, você decide avançar
            sob os orcs á sua frente, seu corpo então desvanece, e você cai sob
            o chão frio.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Aventureiro'">
            Em uma de suas aventuras noturnas, na floresta, sua tocha se apaga,
            sem ver, você acaba tropeçando e cai desacordado em uma armadilha de
            Orcs, eles o cercam, depois de alguns ataques, seu corpo inerte
            desvanece.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            Por fim, nem tudo era paz e sussego, durante a calada da noite
            goblins invadiram sorrateiramente seu vilarejo, saquearam e atearam
            fogo em tudo, infelizmente sua casa ardeu em brasas e você sucumbiu
            as chamas.
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
  </q-layout>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { Notify } from "quasar";

export default defineComponent({
  name: "HPQuizPage",

  setup() {
    const slide = ref(1);
    const slideDialogResultado = ref(1);
    const subtitle = ref("Qual era raça de Frodo no filme?");
    const texto1 = ref("Orc");
    const texto2 = ref("Anão");
    const texto3 = ref("Hobbit");
    const texto4 = ref("Elfo");
    const texto5 = ref("Falso");
    const texto6 = ref("Verdadeiro");
    const cor1 = ref("");
    const cor2 = ref("");
    const cor3 = ref("");
    const cor4 = ref("");
    const cor5 = ref("");
    const cor6 = ref("");
    const email = ref("");
    const seuTipo = ref("");
    const input1 = ref(false);
    const input2 = ref(false);
    const input3 = ref(false);
    const input4 = ref(false);
    const input5 = ref(false);
    const input6 = ref(false);
    const selecionado = ref(false);
    const qDialogResultado = ref(false);
    const qDialogEmail = ref(false);
    const acertos = ref(0);
    const screenWidth = ref(window.screen.width); // armazena a largura da tela atual
    const screenHeight = ref(window.screen.height); // armazena a altura da tela atual
    onMounted(() => {
      // console.log(screenWidth);
      // console.log(screenHeight);
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
          "O anél de Sauron é o mais forte dentre os anéis existentes.";
      } else if (slide.value == 3) {
        subtitle.value = "Galadriel faz parte dos 3 reis elfos.";
      } else if (slide.value == 4) {
        subtitle.value =
          "A espada que Bilbo deu a Frodo, ilumina-se quando está próxima de Orcs?";
      } else if (slide.value == 5) {
        subtitle.value = "Quais são os outros Hobbits que acompanham Frodo?";
        texto1.value = "Sam, Plinpin, Finn ";
        texto2.value = "Pippin, Merry e Sam";
        texto3.value = "Sam, Flóki e Plinpin";
        texto4.value = "Frodo, Sam e Pippin";
      } else if (slide.value == 6) {
        subtitle.value = "Qual o nome do anão de Senhor dos Anéis?";
        texto1.value = "Gimli";
        texto2.value = "Jimmy";
        texto3.value = "Gimme";
        texto4.value = "Ghille";
      } else if (slide.value == 7) {
        subtitle.value =
          "Que instrumento Boromir usa para alertar os amigos do perigo?";
        texto1.value = "Flauta";
        texto2.value = "Alaúde";
        texto3.value = "Corneta";
        texto4.value = "Vuvuzela";
      } else if (slide.value == 8) {
        subtitle.value = "Qual é principal arma de Legolas no filme?";
        texto1.value = "Adaga";
        texto2.value = "Espada";
        texto3.value = "Arco";
        texto4.value = "Machado";
      } else if (slide.value == 9) {
        subtitle.value = "Qual frase que Gandalf grita para Balrog no filme?";
        texto1.value = "Te vejo por ai!";
        texto2.value = "Não adianta correr!";
        texto3.value = "Você não vai passar!";
        texto4.value = "Sou Gandalf o cinzento!";
      } else if (slide.value == 10) {
        subtitle.value = "Quantos filmes há na franquia Senhor dos Anéis?";
        texto1.value = "4";
        texto2.value = "3";
        texto3.value = "2";
        texto4.value = "1";
      }
    };
    const sendEmail = () => {
      MsgSucesso();
      if (acertos.value <= 3) {
        seuTipo.value = "Camponês";
      } else if (acertos.value <= 7) {
        seuTipo.value = "Aventureiro";
      } else if (acertos.value == 8 || acertos.value == 9) {
        seuTipo.value = "Guerreiro";
      } else {
        seuTipo.value = "Escolhido";
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
      cor1.value = "";
      cor2.value = "";
      cor3.value = "";
      cor4.value = "";
      cor5.value = "";
      cor6.value = "";

      input1.value = false;
      input2.value = false;
      input3.value = false;
      input4.value = false;
      input5.value = false;
      input6.value = false;
    };
    const situacoesSelect = () => {
      if (slide.value == 1) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input3.value) {
            acertos.value = acertos.value + 1;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
          cor4.value = "red";
        }
      } else if (slide.value == 2) {
        if (input5.value || input6.value) {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 3) {
        if (input5.value || input6.value) {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 4) {
        if (input5.value || input6.value) {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 5) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input2.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "green";
          cor3.value = "red";
          cor4.value = "red";
        }
      } else if (slide.value == 6) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input1.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
        }
      } else if (slide.value == 7) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input3.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
          cor4.value = "red";
        }
      } else if (slide.value == 8) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input3.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
          cor4.value = "red";
        }
      } else if (slide.value == 9) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input3.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
          cor4.value = "red";
        }
      } else if (slide.value == 10) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input2.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "green";
          cor3.value = "red";
          cor4.value = "red";
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
      cor6,
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      texto1,
      texto2,
      texto3,
      texto4,
      texto5,
      texto6,
      selecionado,
      acertos,
      slideDialogResultado,
      qDialogEmail,
      qDialogResultado,
      email,
      seuTipo,
      screenWidth,
      screenHeight,
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
