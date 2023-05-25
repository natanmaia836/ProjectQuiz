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
            img-src="~assets/GOT/got-carousel-1.webp"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/GOT/got-carousel-2.webp"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/GOT/got-carousel-3.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/GOT/got-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/GOT/got-carousel-5.webp"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/GOT/got-carousel-6.webp"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/GOT/got-carousel-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/GOT/got-carousel-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/GOT/got-carousel-9.jpg"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/GOT/got-carousel-10.webp"
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
            img-src="~assets/GOT/got-carousel-mobile-1.webp"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/GOT/got-carousel-2.webp"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/GOT/got-carousel-3.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/GOT/got-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/GOT/got-carousel-5.webp"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/GOT/got-carousel-6.webp"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/GOT/got-carousel-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/GOT/got-carousel-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/GOT/got-carousel-mobile-9.webp"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/GOT/got-carousel-10.webp"
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
        <div v-if="slide == 5">
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
            v-if="seuTipo == 'Herdeiro do Trono' && screenWidth > 530"
          />
          <q-icon
            name="flare"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Nobre' && screenWidth > 530"
          />
          <q-icon
            name="dark_mode"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="hiking"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Mendigo' && screenWidth > 530"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Herdeiro do Trono'"
          >
            Você era somente um orfão perdido na cidade, com fome e frio,
            andando entre os becos, você encontra outra criança na mesma
            situação, ela tira um pedaço de pão do bolso e divide com você.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Nobre'">
            Você sempre foi muito astuto e de boa lábia, filho de um grande
            general, a nobreza o guiava pouco a pouco ao topo, você dava valor
            ao dinheiro e ao poder.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            Ainda quando criança, orfão, pobre e sem rumo, um ferreio de um
            vilarejo local te adota, ele lhe fornece água, comida e roupas,
            promete a você um lar sempre que precisar e em troca pede sua ajuda
            com os afazeres.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Mendigo'">
            Você nunca teve muito, mas sabia apreciar o pouco que tinha, sem
            dinheiro e lar, você vagava entre os becos buscando abrigo e
            esmolas, seus dias se resumiam em trabalhos braçais que normalmente
            pagavam sua bebida.
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
            v-if="seuTipo == 'Herdeiro do Trono' && screenWidth > 530"
          />
          <q-icon
            name="auto_fix_high"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Nobre' && screenWidth > 530"
          />
          <q-icon
            name="history_edu"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Mendigo' && screenWidth > 530"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Herdeiro do Trono'"
          >
            Passam-se anos, vocês agora são irmãos e se exforçam juntos para
            ganhar a vida, um pouco mais velhos, vocês buscam pelo passado,
            sobre familiares desaparecidos, descobrem juntos que o sangue real
            corre em suas veias.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Nobre'">
            Aos poucos você ganhava voz no palácio, seus feitos atraíam maus
            olhares, o ar pesado, os sussuros e risadas, sua visão reconhecia os
            lobos entre os cordeiros, um por um você os fez engolir do próprio
            veneno literalmente.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            Você cresce e já forja armas e armaduras como ninguém, certo dia,
            enquanto você testava o fio de uma espada recém forjada, um nobre
            que passava de cavalo o vê e ordena que se alie á seu exército, você
            é levado a força.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Mendigo'">
            Certa vez, com fome, você rouba maçãs frescas de uma vendedora
            local, os guardas veêm você, o espancam e prendem-no em uma cela no
            castelo, ainda machucado, você sorri lembrando do gosto das maçãs.
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
            v-if="seuTipo == 'Herdeiro do Trono' && screenWidth > 530"
          />
          <q-icon
            name="local_fire_department"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Nobre' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Guerreiro' && screenWidth > 530"
          />
          <q-icon
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Mendigo' && screenWidth > 530"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Herdeiro do Trono'"
          >
            Estando agora no castelo, os nobres contam que você será o próximo
            herdeiro, meses após a morte do rei, você está em sua coroação, seu
            irmão o abraça, em seu ouvido ele diz "me desculpe", suas pernas
            fraquejam e você desvanece.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Nobre'">
            Após manipular o destino de todos á seu favor, ganhando ouro e poder
            por isto, a morte nunca o esqueceu, numa noite chuvosa, enquanto
            você dormia, um assassino invade seus aposentos e faz daquela noite
            sua última.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Guerreiro'">
            Anos passam e você está agora em um campo de batalha, flechas caem
            como chuva, muitas perdas, os nobres recuam te deixando para trás,
            você é atingido e antes de cair para o fim, enterra uma carta para
            seu pai, deixando seu adeus.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Mendigo'">
            Sem comida ou água e muito ferido, você adoece, sua cela repleta de
            sujeira piora seus machucados, por fim seu corpo sucumbe as lesões e
            a doença, em seu último suspiro você tem uma alucinação de um céu
            repleto de estrelas.
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
    const subtitle = ref("Quantos Dragões tinha Daenerys na série?");
    const texto1 = ref("Três");
    const texto2 = ref("Dois");
    const texto3 = ref("Um");
    const texto4 = ref("Quatro");
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
        subtitle.value = "A qual casa John Snow pertence na série?";
        texto1.value = "Stark";
        texto2.value = "Lannister";
        texto3.value = "Baratheon";
        texto4.value = "Targaryen";
      } else if (slide.value == 3) {
        subtitle.value =
          "Quando se ouve 'Valar Morghulis' o que deve ser respondido?";
        texto1.value = "Saúde!";
        texto2.value = "Valar Dohaeris";
        texto3.value = "Dracarys!";
        texto4.value = "Muña Zaldrizoti";
      } else if (slide.value == 4) {
        subtitle.value = "O que significa 'Dracarys' em Valiriano?";
        texto1.value = "Ataque!";
        texto2.value = "Cuspa fogo!";
        texto3.value = "Ignição!";
        texto4.value = "Fogo de dragão!";
      } else if (slide.value == 5) {
        subtitle.value =
          "Na série, James Lannister empurra Bran do castelo deixando-o paralítico?";
      } else if (slide.value == 6) {
        subtitle.value = "Qual a causa da morte de Joffrey?";
        texto1.value = "Decapitado";
        texto2.value = "Envenenamento";
        texto3.value = "Afogamento";
        texto4.value = "Queimado";
      } else if (slide.value == 7) {
        subtitle.value = "Que animal representa a casa dos Baratheon na série?";
        texto1.value = "Alce";
        texto2.value = "Lobo";
        texto3.value = "Leão";
        texto4.value = "Polvo";
      } else if (slide.value == 8) {
        subtitle.value = "Quantos filhos Cersei Lannister tinha?";
        texto1.value = "Nenhum";
        texto2.value = "Três";
        texto3.value = "Dois";
        texto4.value = "Um";
      } else if (slide.value == 9) {
        subtitle.value = "Na série quem mata o Rei da noite?";
        texto1.value = "John Snow";
        texto2.value = "Theon Greyjoy";
        texto3.value = "Arya Stark";
        texto4.value = "Brienne de Tarth";
      } else if (slide.value == 10) {
        subtitle.value = " No final da série quem herda o trono de ferro?";
        texto1.value = "John Snow";
        texto2.value = "Tyrion Lannister";
        texto3.value = "Bran Stark";
        texto4.value = "Daenerys Targaryen";
      }
    };
    const sendEmail = () => {
      MsgSucesso();
      if (acertos.value <= 3) {
        seuTipo.value = "Mendigo";
      } else if (acertos.value <= 7) {
        seuTipo.value = "Guerreiro";
      } else if (acertos.value == 8 || acertos.value == 9) {
        seuTipo.value = "Nobre";
      } else {
        seuTipo.value = "Herdeiro do Trono";
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
          if (input1.value) {
            acertos.value = acertos.value + 1;
          }
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "red";
        }
      } else if (slide.value == 2) {
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
      } else if (slide.value == 3) {
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
      } else if (slide.value == 4) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input4.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "green";
        }
      } else if (slide.value == 5) {
        {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 6) {
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
      } else if (slide.value == 7) {
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
      } else if (slide.value == 8) {
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
          if (input3.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "green";
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
