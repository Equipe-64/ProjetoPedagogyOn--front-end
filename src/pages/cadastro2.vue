<template>
  <q-page padding>
    <div class="row justify-center">
      <h4 class="content-start q-mt-md">CADASTRO DE PAIS/RESPONSÁVEIS</h4>
    </div>
    <div class="q-gutter-md q-mb-md" style="max-width: 300px">
      <q-input standout v-model="novoCliente.nome" label="Nome" />

      <q-input standout v-model="novoCliente.cpf" label="CPF" />

      <q-input standout v-model="novoCliente.rg" label="RG" />

      <q-input standout v-model="novoCliente.orgao_exp" label="Orgão Expedidor" />
         <q-input color="orange" standout bottom-slots v-model="novoCliente.endereco" label="localização" counter clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Endereço
        </template>
      </q-input>

      <q-input standout v-model="novoCliente.cep" label="CEP" />

      <q-input standout v-model="novoCliente.cidade" label="Cidade" />

      <q-input standout v-model="novoCliente.estado" label="Estado" />

      <q-input standout v-model="novoCliente.data_nasc" type="date" hint="Data de Nascimento" />

      <q-input standout v-model="novoCliente.sexo" label="Sexo M-Masculino, F-Feminino" />

      <q-input standout v-model="novoCliente.senha" type="password" hint="senha" />

      <q-input standout v-model="novoCliente.email" type="email" hint="Email" />

      <q-input
        standout
        v-model="novoCliente.telefone"
        label="telefone"
        mask="(##) ##### - ####"
        fill-mask
        hint="Mask: (##) ##### - ####"
      />
      <div class="text-right col-12">
        <q-btn color="secondary" label="Salvar" @click="createOne" />
      </div>

<<<<<<< HEAD
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
=======
>>>>>>> 3262dadd99702c55fa1c70e0830b6a82013b0e5d
  </div>
        </q-toolbar>
  </q-page>
</template>

<script>
export default {
  name: 'cadastro2',
  data () {
    return {
      novoCliente: {
        nome: '',
        cpf: '',
        rg: '',
        orgao_exp: '',
        data_nasc: '',
        sexo: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: '',
        telefone: '',
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    createOne
    () {
      this.$axios.post('http://localhost:3000/clienteRoute', this.novoCliente).then(response => {
        console.log(response.data)
        this.$q.notify({
          message: 'Cadastrado com sucesso!',
          color: 'positive'
        })
        this.$router.push('/')
      })
    }
  }
}
</script>
