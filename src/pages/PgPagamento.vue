<template>
  <q-page class="fixed-center">
     <q-card class="my-card q-mt-xl">
      <q-card-section class="bg-white text-white">
        <div class="row justify-center vertical-top">
         <img id="logo" src="https://i.imgur.com/RRmh8df.png" >
        </div>
          <div class="q-pa-md row items-start q-gutter-md float-right">
            <q-card class="my-card-preco">
              <q-card-section>
                <p class="text-h5">Consulta</p>
                <p>1 hrs</p>
                <p class="text-data q-mt-md">10 de Dezembro de 2020 | 15:00 hrs</p>
                <q-separator />
                <p class="text-h4 q-mt-xl">Valor: R$ 100,00</p>
              </q-card-section>
            </q-card>
        </div>
        <div class="q-gutter-md q-mt-sm">
        <q-input outlined v-model="text" label="Número do cartão" />
        <q-input outlined v-model="text" label="Nome impresso no cartão" />
        <q-input outlined v-model="text" label="Validade" />
        <q-input outlined v-model="text" label="CVV" />
        </div>
        <div class="q-mt-md">
          <q-select outlined v-model="model" :options="options" label="Selecione o número de Parcelas" />
        </div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>Pagar com o cartão</q-btn>
        <p class="p2 q-mt-md">Ou</p>
        <q-btn class="btn2" flat>Pagar com Boleto</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PagePagamento',
  data () {
    return {
      text: '',
      model: null,
      options: [
        '1 vez', '2 vezes', '3 vezes', '4 vezes', '5 vezes'
      ]
    }
  },
  methods: {
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}
</script>

<style lang="stylus">
.my-card{
  background-color: #008080;
  width: 800px;
}
.my-card-preco {
  background-color: #D3D3D3
  width: 300px;
  height: 270px;
}
p{
    font-family: Roboto;
    font-size: 16px;
    color: #000000
}
.text-data{
  font-size: 12px;
}
.q-input,
.q-select {
  background-color: #F0F8FF
  max-width 400px
}
.q-btn {
  color: #F5F5F5
}
.p2 {
  color: #F5F5F5
}
</style>
