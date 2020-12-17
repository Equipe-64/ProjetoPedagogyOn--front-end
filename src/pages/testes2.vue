<template>
  <q-page class="">
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">SIMPLICIDADE E OBJETIVIDADE</div>
          <div class="text-caption text-grey">
            Ser inclusivo consiste em fazer com que um máximo de pessoas possivel tenha acesso a areas e conteúdos em pró de todos, nosso sistema foi pensado para ser simples e direto sendo assim bastante intuitivo tanto para os que tem conhecimento tecnológico como para os que também precisam do serviço mas não entendem tanto das atuais tecnologias.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://i.imgur.com/R6X6ZW4.png"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="person" />
        <q-btn flat color="secondary">
          midia social
        </q-btn>
        <q-btn flat color="secondary">
          contatos
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card2" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">COMUNICAÇÃO RAPIDA E EFICAZ</div>
          <div class="text-caption text-grey">
            Se nosso sistema consiste em ligar partes interessadas em um mesmo objetivo, então temos que trabalhar bem a forma em que podemos oferecer um sistema de comunicação, por isso de forma pensada temos nosso chat interno e um sistema de busca completo para que ambas as partes possam se localizar e contactar sem dificuldade
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://i.imgur.com/K3uUt2M.png"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="person" />
        <q-btn flat color="secondary">
          midia social
        </q-btn>
        <q-btn flat color="secondary">
          contatos
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <template>
  <div class="q-pa-md">
    <q-card class="my-card3">
      <q-parallax
        src="https://www.portaliede.com.br/wp-content/uploads/2019/08/desigualdades_genero500x300.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h6">SEGURANÇA PARA TODOS</div>
        <div class="text-subtitle2">Sabemos que a tecnologia vem para o nosso beneficio e que acima de tudo devemos preservar as pessoas que usufruem dela, por isso pensamos em um sistema completo de segurança para garantir a integridade de todos os nossos usuários, os protegendo de possiveis calotes financeiros ou qualquer tipo de ataque virtual</div>
      </q-card-section>
    </q-card>
  </div>
  <div class="contact_us" id="id_contact_us">
<div style="background-color: #000000ad !important;">
<div class="row" id="id_news">
  <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
    <h5 class="text-center text-white">Entre em contato
      <br>
      <span
        class="text-center text-grey text-h6">Deixe seu feedback ou entre em contato</span>
    </h5>
  </div>
</div>
<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
      <q-input bg-color="white" outlined label="seu nome *">
<template v-slot:append>
  <q-icon name="person" :style="'color:' + theme_color" />
</template>
      </q-input>
<q-input bg-color="white" outlined label="seu email *">
<template v-slot:append>
  <q-icon name="email" :style="'color:' + theme_color" />
</template>
      </q-input>
<q-input bg-color="white" outlined label="seu telefone *">
<template v-slot:append>
  <q-icon name="phone" :style="'color:' + theme_color" />
</template>
      </q-input>
</div>
<div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
<q-input class="" type="textarea" bg-color="white" outlined label="algum comentario *">
<template v-slot:append>
  <q-icon name="event" :style="'color:' + theme_color" />
</template>
      </q-input>
</div>
</div>
<div class="row flex flex-center text-center q-pb-xl q-mt-md">
<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
<q-btn size="lg" color="secondary" label="enviar"/>
</div>
</div>
</div>
</div>
        <q-toolbar class="flex flex-center text-white" style="background-color: #00AEAE;" :style="'border-top: 2px solid '+ theme_color">
           <div class="q-pa-sm q-gutter-sm">
    <q-btn round type="a" href="https://github.com/mayank091193/vue-quasar-company-profile-website"
                     :style="'background:'+ theme_color +'; color: white !important;'" icon="pending" />
            <q-btn round type="a" href="mailto:mayank091193@gmail.com"
                     :style="'background:'+ theme_color +'; color: white !important;'" icon="email" />
  </div>
        </q-toolbar>
</template>
</template>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style>
.my-card
  {
  width: 1800px;
  margin-right: 30%;
  }
  .my-card2
  {
  width: 1800px;
  margin-left: 30%;
  }
   .my-card3
  {
  width: 1800px;
  height: 280px;
  }
  .contact_us{

      background: url(https://image.winudf.com/v2/image/Y29tLndLaWRzU2Nob29sXzUxMzE2MTZfc2NyZWVuXzBfaml2N2QzamI/screen-0.jpg?fakeurl=1&type=.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    }
</style>
