<template>
  <q-page padding>
   <div class="q-pa-md">
      <h4 class="text-weight-bold">Cadastro do Dependente</h4>
    <div class="q-gutter-md" style="max-width: 300px">

      <q-input standout v-model="text" label="Nome" />

      <q-input standout v-model="text" label="CPF" />

      <q-input standout v-model="text" label="RG" />

      <q-input standout v-model="text" label="Orgão Expedidor" />

      <q-input standout v-model="date" type="date" hint="Data de Nascimento" />

      <q-select standout v-model="model" :options="options" label="sexo" />

      <q-input standout v-model="text" type="textarea" label = "Observações" />
    </div>
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