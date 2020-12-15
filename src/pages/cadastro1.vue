<template>
  <q-page padding>
    <div class="q-pa-md">
     <div class="row justify-center">
      <h4 class="content-start q-mt-md">CADASTRO DE PROFISSIONAIS</h4>
    </div>
    <div class="q-gutter-md q-mb-md" style="max-width: 300px">
     <q-input standout v-model="novoProfissional.especializacao" type="textarea" label = "Especialização Profissional" />

      <q-input standout v-model="novoProfissional.nome" label="Nome" />

      <q-input standout v-model="novoProfissional.cpf" label="CPF" />

      <q-input standout v-model="novoProfissional.rg" label="RG" />

      <q-input standout v-model="novoProfissional.orgao_exp" label="Orgão Expedidor" />

         <q-input color="orange" standout bottom-slots v-model="novoProfissional.endereco" label="localização" counter clearable>
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

      <q-input standout v-model="novoProfissional.cep" label="CEP" />

      <q-input standout v-model="novoProfissional.cidade" label="Cidade" />

      <q-input standout v-model="novoProfissional.estado" label="Estado" />

      <q-input standout v-model="novoProfissional.data_nasc" type="date" hint="Data de Nascimento" />

      <q-input standout v-model="novoProfissional.sexo" label="Sexo M-Masculino, F-Feminino" />

      <q-input standout v-model="novoProfissional.senha" type="password" hint="senha" />

      <q-input standout v-model="novoProfissional.email" type="email" hint="Email" />

      <q-input
        standout
        v-model="novoProfissional.telefone"
        label="Phone"
        mask="(##) ##### - ####"
        fill-mask
        hint="Mask: (##) ##### - ####"
      />

      <q-input standout v-model="novoProfissional.observacoes" type="textarea" label = "Observações" />
      <div class="text-right col-12">
        <q-btn color="secondary" label="Salvar" @click="createOne" />
      </div>
    </div>

  </div>
  </q-page>
</template>
<script>
export default {
  name: 'cadastro1',
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
      }
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

</style>
