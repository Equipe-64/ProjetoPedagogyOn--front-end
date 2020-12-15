<template>
  <q-page padding>
    <div class="q-pa-md">
     <div class="row justify-center">
      <h4 class="content-start q-mt-md">CADASTRO DE PROFISSIONAIS</h4>
    </div>
    <div class="q-gutter-md q-mb-md" style="max-width: 300px">
     <q-input standout v-model="text" type="textarea" label = "especialização profissional" />

      <q-input standout v-model="text" label="Nome" />

      <q-input standout v-model="text" label="CPF" />

      <q-input standout v-model="text" label="RG" />

      <q-input standout v-model="text" label="Orgão Expedidor" />

         <q-input color="orange" standout bottom-slots v-model="text" label="localização" counter clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="person" />
        </template>

        <template v-slot:hint>
          Endereço
        </template>
      </q-input>

      <q-input standout v-model="text" label="CEP" />

      <q-input standout v-model="text" label="Cidade" />

      <q-input standout v-model="text" label="Estado" />

      <q-input standout v-model="date" type="date" hint="Data de Nascimento" />

      <q-select standout v-model="model" :options="options" label="sexo" />

      <q-input standout v-model="password" type="password" hint="senha" />

      <q-input standout v-model="password" :type="isPwd ? 'password' : 'text'" hint="repetir a senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input standout v-model="email" type="email" hint="Email" />

      <q-input
        standout
        v-model="phone"
        label="Phone"
        mask="(##) ##### - ####"
        fill-mask
        hint="Mask: (##) ##### - ####"
      />

      <q-input standout v-model="text" type="textarea" label = "especificações" />
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
      model: null,
      options: [
        'M', 'F', 'O'
      ]
    }
  },
  data2 () {
    return {
      text: ''
    }
  }
}
</script>

<style>

</style>
