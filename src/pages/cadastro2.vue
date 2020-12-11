<template>
  <q-page padding>
    <div class="row justify-center">
      <h4 class="content-start q-mt-md">CADASTRO DE PAIS/RESPONSÁVEIS</h4>
    </div>
    <div class="q-gutter-md q-mb-md" style="max-width: 300px">
      <q-input standout v-model="text" label="Nome" />

      <q-input standout v-model="text" label="CPF" />

      <q-input standout v-model="text" label="RG" />

      <q-input standout v-model="text" label="Orgão Expedidor" />
         <q-input color="orange" standout bottom-slots v-model="text" label="localização" counter clearable>
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
        label="telefone"
        mask="(##) ##### - ####"
        fill-mask
        hint="Mask: (##) ##### - ####"
      />

      <q-input standout v-model="text" type="textarea" label = "especificações" />
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      options: [
        'Homem', 'Mulher', 'Outros'
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
