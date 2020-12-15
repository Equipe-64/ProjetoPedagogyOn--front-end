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

  </div>
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
