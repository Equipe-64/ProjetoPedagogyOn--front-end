<template>
  <q-page padding>
    <div class="column q-pa-lg">
      <div class="row flex-center">
        <q-card square class="shadow-24" style="width:1300px;height:1310px;">
          <q-card-section class="bg-teal-7">
            <h4 id="titulo" class="text-h5 text-white">CADASTRAR PROFISSIONAIS</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="teal-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="novoProfissional.especializacao" label="Especializaçâo Profissional">
                <template v-slot:prepend>
                  <q-icon name="assignment" />
                </template>
              </q-input>
              <q-input square clearable v-model="novoProfissional.nome" label="Nome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="novoProfissional.cpf" label="CPF">
                <template v-slot:prepend>
                  <q-icon name="picture_in_picture" />
                </template>
              </q-input>
              <q-input square clearable v-model="novoProfissional.rg" label="RG">
                <template v-slot:prepend>
                  <q-icon name="fingerprint" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.orgao_exp" label="Orgão Expedidor">
                <template v-slot:prepend>
                  <q-icon name="fact_check" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.endereco" label="Localização">
                <template v-slot:prepend>
                  <q-icon name="place" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.cep" label="CEP">
                <template v-slot:prepend>
                  <q-icon name="home" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.cidade" label="Cidade">
                <template v-slot:prepend>
                  <q-icon name="location_city" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.estado" label="Estado">
                <template v-slot:prepend>
                  <q-icon name="flag" />
                </template>
              </q-input>
                 <q-input square clearable v-model="novoProfissional.data_nasc" type="date">
                <template v-slot:prepend>
                  <q-icon name="calendar_today" />
                </template>
              </q-input>
              <q-select id="sexo" square clearable v-model="novoProfissional.sexo" :options="options" label="Sexo" />
              <q-input square clearable v-model="novoProfissional.senha" type="password" label="Senha">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input square clearable v-model="novoProfissional.email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
               <q-input
        square clearable
        v-model="novoProfissional.telefone"
        label="Telefone"
        mask="(##) ##### - ####"
        fill-mask
        hint="Mask: (##) ##### - ####"
      />
         <q-input square clearable v-model="novoProfissional.observacoes" type="textarea" label="Especificações">
                <template v-slot:prepend>
                  <q-icon name="description" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="teal-4" class="full-width text-white" label="cadastrar" @click="createOne" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Volte para a pagina de Login </p>
          </q-card-section>
        </q-card>
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

  </q-page>
</template>
<script>
export default {
  name: 'cadProfissional',
  data () {
    return {
      novoProfissional: {
        especializacao: '',
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
        senha: '',
        observacoes: ''
      },
      options: ['M', 'F']
    }
  },
  methods: {
    createOne
    () {
      this.$axios.post('http://localhost:3000/profissionalRoute', this.novoProfissional).then(response => {
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

<style>
#titulo{
  object-position: center;
  margin-left: 38%;
}
.contact_us{

      background: url(https://image.winudf.com/v2/image/Y29tLndLaWRzU2Nob29sXzUxMzE2MTZfc2NyZWVuXzBfaml2N2QzamI/screen-0.jpg?fakeurl=1&type=.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    }

</style>
