<template>
  <q-page padding>
<div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
          arrows
          animated
          swipeable
          navigation
          infinite
          autoplay
          control-color="secondary"
          transition-prev="slide-right"
          transition-next="slide-left"
        height="639px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
      <q-carousel-slide name="alunos" class="q-pa-none" img-src="https://jeffersondealmeida.com.br/wp-content/uploads/2020/05/material-escolar-volta-as-aulas-crianca-na-escola-crianca-estudando-criancas-estudando-sala-de-aula-criancas-na-escola-1452088957910_1920x1279.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div>
              <div class="text-h2">A DEMOCRATIZAÇÃO DO ENSINO </div>
              <div class="text-h5">Todos precisam de oportunidades, e nossa missão é democratizar as de aprendizado</div>
<div class="q-pa-md flex flex-center">
<q-btn size="md" color="secondary" label="Saiba mais" />
</div>
            </div>
</div>
          </q-carousel-slide>
         <q-carousel-slide name="professores" class="q-pa-none" img-src="https://pmsaposse.sp.gov.br/wp-content/uploads/2018/06/como-deixar-feliz-minha-professora-da-escola-750x452.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div>
              <div class="text-h2">CONECTAR PROFISIONAIS E CLIENTES</div>
              <div class="text-h4">Uma nova oportunidade para os profissionais da area de pessoas com deficiencia</div>
<div class="q-pa-md flex flex-center">
<q-btn size="md" color="secondary" label="Saiba mais" />
</div>
            </div>
</div>
          </q-carousel-slide>
                <q-carousel-slide name="computador" class="q-pa-none" img-src="https://correio-cdn2.cworks.cloud/fileadmin/_processed_/5/6/csm_shutterstock_258726044_ba05a194fe.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div>
              <div class="text-h2">NOVA PORTA PARA O MERCADO </div>
              <div class="text-h4">Sendo a porta de oportunidade profissionais</div>
<div class="q-pa-md flex flex-center">
<q-btn size="md" color="secondary" label="Saiba mais" />
</div>
            </div>
</div>
          </q-carousel-slide>
      </q-carousel>
  </div>
  <div class="row">
          <div class="col-lg-6 flex-center">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">

       <q-card-section>
         <q-icon size="110px" name="person" color="secondary"/>
            <div class="text-h6">responsaveis</div>

             </q-card-section>

              <q-card-section class="q-pt-none">
                Pessoas com deficiencia sempre tem um responsavel, sejam pais, avós, familiares em geral, ou qualquer pessoa que cuida os ajuda com suas necessidades.
              </q-card-section>
            </q-card>
        </div>
         <div class="flex-center">
          <div class="col-lg-12 flex-center">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">

       <q-card-section>
         <q-icon size="110px" name="groups" color="secondary"/>
            <div class="text-h6">profissionais</div>

             </q-card-section>

              <q-card-section class="q-pt-none">
                A area que se propõe a tratar de pessoas com alguma deficiencia é dividia em varias areas, seja da pedagogia, ou da psicologia, e estes são os nossos profissionais, e os que vão prestar os serviços.
              </q-card-section>
            </q-card>
        </div>
    </div>
    </div>
     <div id="barra2" class="quote">
          <div class="q-pt-xl full-width full-height flex flex-center" style="background-color: #00AEAE !important;">
            <h3 class="text-white text-center"> Nosso trabalho é conseguir que todos possam ter acesso a ensino e tratamento de qualidade.<br>Se você acha que tem algo a acrescentar, estamos com os nossos ouvidos prontos para escutar o que tem a dizer<br>
              <br>
              <br>
              <q-btn type="a" href="https://github.com/sponsors/mayank091193" size="lg"
                     :style="'background:'+ theme_color +'; color: white'" label="de suporte"/>
            </h3>
          </div>
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

</div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}

</script>

<style>
    .contact_us{

      background: url(https://image.winudf.com/v2/image/Y29tLndLaWRzU2Nob29sXzUxMzE2MTZfc2NyZWVuXzBfaml2N2QzamI/screen-0.jpg?fakeurl=1&type=.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    }
#barra2{
margin-bottom: 2%;
}
</style>
