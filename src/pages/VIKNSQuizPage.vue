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
            img-src="~assets/VIKNS/vikings-carousel-1.webp"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/VIKNS/vikings-carousel-2.webp"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/VIKNS/vikings-carousel-3.webp"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/VIKNS/vikings-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/VIKNS/vikings-carousel-5.jpg"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/VIKNS/vikings-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/VIKNS/vikings-carousel-7.webp"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/VIKNS/vikings-carousel-8.webp"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/VIKNS/vikings-carousel-9.webp"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/VIKNS/vikings-carousel-10.jpg"
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
            img-src="~assets/VIKNS/vikings-carousel-1.webp"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/VIKNS/vikings-carousel-2.webp"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/VIKNS/vikings-carousel-3.webp"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/VIKNS/vikings-carousel-mobile-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/VIKNS/vikings-carousel-5.jpg"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/VIKNS/vikings-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/VIKNS/vikings-carousel-7.webp"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/VIKNS/vikings-carousel-8.webp"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/VIKNS/vikings-carousel-9.webp"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/VIKNS/vikings-carousel-mobile-10.jpg"
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
        <div v-if="slide == 1 || slide == 5 || slide == 7 || slide == 9">
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
            v-if="seuTipo == 'Jarl' && screenWidth > 530"
          />
          <q-icon
            name="flare"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Viking' && screenWidth > 530"
          />
          <q-icon
            name="dark_mode"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Senhor de terras' && screenWidth > 530"
          />
          <q-icon
            name="hiking"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div class="q-mt-md text-center" v-if="seuTipo == 'Jarl'">
            Quando criança você sabia que não seria um viking qualquer, você
            espiava os mais velhos treinarem, analisava suas ações, fazia isso
            tão bem que conseguia advinhar o vencedor de um combate apenas
            olhando.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Viking'">
            O estalar de chamas durante a noite te acorda, um ataque, seu
            vilarejo está árdendo em brasas, você ouve gritos, correria. Se
            armando com um machado você sai de sua casa e avista do lado de fora
            diversos saqueadores.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Senhor de terras'">
            Os campos sempre foram o seu lar, diariamente seu destino é traçado
            entre as lavrouras herdadas de seus pais, você dá a terra valor e
            carinho, e ela o retribui com frutos.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            A vida para você sempre foi algo simples, você nunca se importou em
            querer ter muito e muito menos em ter pouco, na maioria das vezes a
            comida era escassa.
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
            v-if="seuTipo == 'Jarl' && screenWidth > 530"
          />
          <q-icon
            name="auto_fix_high"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Viking' && screenWidth > 530"
          />
          <q-icon
            name="history_edu"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Senhor de terras' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div
            class="q-mt-md text-center"
            v-if="seuTipo == 'Jarl' && screenWidth > 530"
          >
            Quando jovem, você lutou em diversas batalhas, vendo vikings se
            estraçalharem noite adentro, sua sabedoria enxergava além das
            espadas e machados, você guiava seus aliados á vitória usando sua
            mente e estratégia
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Viking'">
            Cercado, com um machado em mãos, você avança frente aos saqueadores,
            os camponêses que fugiam veêm seu ataque como uma oportunidade e se
            juntam a você, juntos vocês fazem uma contra investida avassaladora.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Senhor de terras'">
            A muito a ser feito ainda, sabendo disso, diariamente você contrata
            mais camponêses a seu comando, são mais bocas para alimentar mas
            seus olhos enxergam muito mais que isso, você vê oportunidade e um
            futuro próspero.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            O trabalho era árduo e o pouco que você ganhava com o exforço era
            gasto em farras e bebedeiras, estar entre amigos acalentava seu
            coração inerte.
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
            v-if="seuTipo == 'Jarl' && screenWidth > 530"
          />
          <q-icon
            name="local_fire_department"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Viking' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Senhor de terras' && screenWidth > 530"
          />
          <q-icon
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Camponês' && screenWidth > 530"
          />
          <div class="q-mt-md text-center" v-if="seuTipo == 'Jarl'">
            Por fim todo seu exforço foi recompensado, após tantas batalhas,
            você se tornou o braço direito do rei, um poderosissímo Jarl,
            regendo com honra, justiça e sabedoria toda Escadinávia.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Viking'">
            O ataque repelido por vocês, os saqueadores fogem, embora ferido
            após o combate, você e seus aliados partem mar á dentro em busca de
            vingança, esse seria só um de seus passos para se tornar o maior
            viking da história.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Senhor de terras'">
            Seu vilarejo atraiu más olhares, saqueadores, invadem suas terras e
            te roubam o pouco que tinha, já não tendo como sustentar os
            trabalhadores você abandona sua vila e vive o resto de sua vida em
            uma cidade próxima como comerciante.
          </div>
          <div class="q-mt-md text-center" v-if="seuTipo == 'Camponês'">
            Por fim, o vilarejo que você residia é atacado, um massacre,
            inúmeras perdas, casas completamente queimadas, enquanto você fugia,
            uma flecha vara o horizonte e lhe acerta o peito, você cai, e não
            torna a levantar outra vez.
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
    const slide = ref(10);
    const slideDialogResultado = ref(1);
    const subtitle = ref("Os vikings acreditavam em vida após a morte?");
    const texto1 = ref("");
    const texto2 = ref("");
    const texto3 = ref("");
    const texto4 = ref("");
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
        subtitle.value = "Odin é representado na série de que forma?";
        texto1.value = "Um gato";
        texto2.value = "Um corvo";
        texto3.value = "Um Urso";
        texto4.value = "Um alce";
      } else if (slide.value == 3) {
        subtitle.value =
          "Na série Lagertha era conhecida como a mais famosa ...";
        texto1.value = "Padeira";
        texto2.value = "Guerreira";
        texto3.value = "Escudeira";
        texto4.value = "Lanceira";
      } else if (slide.value == 4) {
        subtitle.value = "Quantos filhos Ragnar teve durante a série?";
        texto1.value = "5";
        texto2.value = "3";
        texto3.value = "4";
        texto4.value = "1";
      } else if (slide.value == 5) {
        subtitle.value =
          "O paraíso para os vikings era conhecido como Álfheim?";
      } else if (slide.value == 6) {
        subtitle.value =
          "Na mitologia nórdica qual o nome do lobo presente no Ragnarok?";
        texto1.value = "yggdrasil";
        texto2.value = "Hela";
        texto3.value = "Ymir";
        texto4.value = "Fenrir";
      } else if (slide.value == 7) {
        subtitle.value =
          "Na série Lagertha é assassinada por Ivar o desossado?";
      } else if (slide.value == 8) {
        subtitle.value = "O que é o Ragnarok para os vikings?";
        texto1.value = "Vida após a morte";
        texto2.value = "Uma celebração";
        texto3.value = "O fim do mundo";
        texto4.value = "Um bom MMORPG";
      } else if (slide.value == 9) {
        subtitle.value =
          "Ivar o Desossado era conhecido por ser um bom estrategista?";
      } else if (slide.value == 10) {
        subtitle.value =
          "Na série durante comemorações, como brindavam os vikings?";
        texto1.value = "Skäl!";
        texto2.value = "Irra!";
        texto3.value = "Sáude!";
        texto4.value = "Valhalla!";
      }
    };
    const sendEmail = () => {
      MsgSucesso();
      if (acertos.value <= 3) {
        seuTipo.value = "Camponês";
      } else if (acertos.value <= 7) {
        seuTipo.value = "Senhor de terras";
      } else if (acertos.value == 8 || acertos.value == 9) {
        seuTipo.value = "Viking";
      } else {
        seuTipo.value = "Jarl";
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
        if (input5.value || input6.value) {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 2) {
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
      } else if (slide.value == 3) {
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
      } else if (slide.value == 4) {
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
      } else if (slide.value == 5) {
        if (input5.value || input6.value) {
          if (input5.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "green";
          cor6.value = "red";
        }
      } else if (slide.value == 6) {
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
      } else if (slide.value == 7) {
        if (input5.value || input6.value) {
          if (input5.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "green";
          cor6.value = "red";
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
        if (input5.value || input6.value) {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
        }
      } else if (slide.value == 10) {
        if (input1.value || input2.value || input3.value || input4.value) {
          if (input1.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor1.value = "green";
          cor2.value = "red";
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
