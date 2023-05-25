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
            img-src="~assets/HP/harrypotter-carousel-1.png"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/HP/harrypotter-carousel-2.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/HP/harrypotter-carousel-3.png"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/HP/harrypotter-carousel-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/HP/harrypotter-carousel-5.png"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/HP/harrypotter-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/HP/harrypotter-carousel-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/HP/harrypotter-carousel-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/HP/harrypotter-carousel-9.jpg"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/HP/harrypotter-carousel-10.jpg"
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
            img-src="~assets/HP/harrypotter-carousel-mobile-1.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="~assets/HP/harrypotter-carousel-2.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="~assets/HP/harrypotter-carousel-mobile-3.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="~assets/HP/harrypotter-carousel-mobile-4.jpg"
          />
          <q-carousel-slide
            :name="5"
            img-src="~assets/HP/harrypotter-carousel-5.png"
          />
          <q-carousel-slide
            :name="6"
            img-src="~assets/HP/harrypotter-carousel-6.jpg"
          />
          <q-carousel-slide
            :name="7"
            img-src="~assets/HP/harrypotter-carousel-mobile-7.jpg"
          />
          <q-carousel-slide
            :name="8"
            img-src="~assets/HP/harrypotter-carousel-mobile-8.jpg"
          />
          <q-carousel-slide
            :name="9"
            img-src="~assets/HP/harrypotter-carousel-mobile-9.jpg"
          />
          <q-carousel-slide
            :name="10"
            img-src="~assets/HP/harrypotter-carousel-10.jpg"
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
        <div v-if="slide == 3 || slide == 4 || slide == 10">
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
            v-if="seuTipo == 'Grande Feiticeiro' && screenWidth > 530"
          />
          <q-icon
            name="flare"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo' && screenWidth > 530"
          />
          <q-icon
            name="dark_mode"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo Aprendiz' && screenWidth > 530"
          />
          <q-icon
            name="hiking"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa' && screenWidth > 530"
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
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo Aprendiz'">
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
            v-if="seuTipo == 'Grande Feiticeiro' && screenWidth > 530"
          />
          <q-icon
            name="auto_fix_high"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo' && screenWidth > 530"
          />
          <q-icon
            name="history_edu"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo Aprendiz' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa' && screenWidth > 530"
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
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo Aprendiz'">
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
            v-if="seuTipo == 'Grande Feiticeiro' && screenWidth > 530"
          />
          <q-icon
            name="local_fire_department"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo' && screenWidth > 530"
          />
          <q-icon
            name="location_city"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Bruxo Aprendiz' && screenWidth > 530"
          />
          <q-icon
            name="family_restroom"
            color="grey-8"
            size="56px"
            v-if="seuTipo == 'Trouxa' && screenWidth > 530"
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
          <div class="q-mt-md text-center" v-if="seuTipo == 'Bruxo Aprendiz'">
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
    const subtitle = ref("Quais são os três protagonistas de Harry Potter?");
    const texto1 = ref("Harry, Hermione e Toby");
    const texto2 = ref("Harry, Rony e Dolores");
    const texto3 = ref("Rony, Hermione e Draco");
    const texto4 = ref(" Harry, Hermione e Rony ");
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
        subtitle.value = "Qual o feitiço usado para abrir portas trancadas?";
        texto1.value = "Expecto Patronum";
        texto2.value = "Expelliarmus";
        texto3.value = "Alohomora";
        texto4.value = "Crucio";
      } else if (slide.value == 3) {
        subtitle.value =
          "A casa de Hogwarts que Harry Potter é selecionado é Lufa-Lufa?";
      } else if (slide.value == 4) {
        subtitle.value = "O patrono de Hermione Granger é um gato?";
      } else if (slide.value == 5) {
        subtitle.value = "Qual a casa de Harry em Hogwarts?";
        texto1.value = "Sonserina";
        texto2.value = "Lufa-Lufa";
        texto3.value = "Corvinal";
        texto4.value = "Grifinória";
      } else if (slide.value == 6) {
        subtitle.value = "A Nimbus 2000 é uma";
        texto1.value = "Varinha";
        texto2.value = "Cajado";
        texto3.value = "Vassoura";
        texto4.value = "Horcrux";
      } else if (slide.value == 7) {
        subtitle.value = "Qual o nome da coruja do Harry Potter?";
        texto1.value = "Edward";
        texto2.value = "Edwiges";
        texto3.value = "Gizmo";
        texto4.value = "Pidgeot";
      } else if (slide.value == 8) {
        subtitle.value =
          "Qual o feitiço que conjura um animal de energia positiva.";
        texto1.value = "Expecto Patronum";
        texto2.value = "Avada Kedavra";
        texto3.value = "Expectro Patronoum";
        texto4.value = "Expelliarmus";
      } else if (slide.value == 9) {
        subtitle.value = "Qual o feitiço proíbido usado por Voldemort?";
        texto1.value = "Sectumsempra";
        texto2.value = "Valar Morghulis";
        texto3.value = "Avada Kedrava";
        texto4.value = "Avada Kedavra";
      } else if (slide.value == 10) {
        subtitle.value =
          "A Pedra Filosofal é o primeiro livro da série Harry Potter?";
      }
    };
    const sendEmail = () => {
      MsgSucesso();
      if (acertos.value <= 3) {
        seuTipo.value = "Trouxa";
      } else if (acertos.value <= 7) {
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
          if (input4.value) {
            acertos.value = acertos.value + 1;
          }
          selecionado.value = true;
          cor1.value = "red";
          cor2.value = "red";
          cor3.value = "red";
          cor4.value = "green";
        }
      } else if (slide.value == 2) {
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
      } else if (slide.value == 3) {
        if (input5.value || input6.value) {
          if (input5.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "green";
          cor6.value = "red";
        }
      } else if (slide.value == 4) {
        {
          if (input5.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "green";
          cor6.value = "red";
        }
      } else if (slide.value == 5) {
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
      } else if (slide.value == 6) {
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
      } else if (slide.value == 7) {
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
      } else if (slide.value == 8) {
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
      } else if (slide.value == 9) {
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
      } else if (slide.value == 10) {
        {
          if (input6.value) {
            acertos.value++;
          }
          selecionado.value = true;
          cor5.value = "red";
          cor6.value = "green";
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
