<template>
  <q-page padding>
   <div class="q-pa-md">
      <h4 class="text-weight-bold">Cadastro do Dependente</h4>
    <div class="q-gutter-md" style="max-width: 300px">

      <q-input standout v-model="novoDependente.nome" label="Nome" />

      <q-input standout v-model="novoDependente.cpf" label="CPF" />

      <q-input standout v-model="novoDependente.rg" label="RG" />

      <q-input standout v-model="novoDependente.orgao_exp" label="Orgão Expedidor" />

      <q-input standout v-model="novoDependente.data_nasc" type="date" hint="Data de Nascimento" />

      <q-input standout v-model="novoDependente.sexo" label="sexo" />

      <q-input standout v-model="novoDependente.observacoes" type="textarea" label = "Observações" />

      <q-input standout v-model="novoDependente.cod_cliente" label = "Código do pai/responsável" />

      <div class="text-right col-12">
        <q-btn color="secondary" label="Salvar" @click="createOne" />
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'cadDependente',
  data () {
    return {
      novoDependente: {
        nome: '',
        cpf: '',
        rg: '',
        orgao_exp: '',
        data_nasc: '',
        sexo: '',
        observacoes: '',
        cod_cliente: ''
      }
    }
  },
  methods: {
    createOne
    () {
      this.$axios.post('http://localhost:3000/dependenteRoute', this.novoDependente).then(response => {
        console.log(response.data)
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