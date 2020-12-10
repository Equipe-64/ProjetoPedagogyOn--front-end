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
                <p>2 hrs</p>
                <p class="text-data q-mt-md">10 de Dezembro de 2020 | 15:00 hrs</p>
                <q-separator />
                <p class="text-h4 q-mt-xl">Valor: R$ 50,00</p>
              </q-card-section>
            </q-card>
        </div>
        <div class="q-gutter-md q-mt-sm">
        <q-input outlined v-model="text" label="Número do cartão" />
        <q-input outlined v-model="text" label="Nome impresso no cartão" />
        <q-input outlined v-model="text" label="Validade" />
        <q-input outlined v-model="text" label="CVV" />
        </div>
        <div class="q-pa-md">
    <q-btn-dropdown label="Selecione o número de parcelas">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>1 vez</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>2 vezes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>3 vezes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>4 vezes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>5 vezes</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>Finalizar Pagamento</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PagePagamento',
  data () {
    return {
      text: ''
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
.q-input {
  background-color: #F0F8FF
  max-width 400px
}
.q-btn-dropdown {
  background-color: #ff6126;
}
.q-btn {
  color: #F5F5F5
}
</style>
