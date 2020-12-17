<template>
  <q-page padding>
    <div class="row q-gutter-lg">
      <div class="col-md-2">
        <q-card class="my-card">
        <q-img
          src="https://image.freepik.com/fotos-gratis/linda-secretaria-no-trabalho-em-seu-escritorio_53419-8205.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ Profissional[0].nome }}
          </div>
        </q-img>
        <q-card-section>
          {{ Profissional[0].especializacao }}
        </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2">
        <q-card class="my-card">
        <q-img
          src="https://image.freepik.com/fotos-gratis/linda-secretaria-no-trabalho-em-seu-escritorio_53419-8205.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ Profissional[1].nome }}
          </div>
        </q-img>
        <q-card-section>
          {{ Profissional[1].especializacao }}
        </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2">
        <q-card class="my-card">
        <q-img
          src="https://image.freepik.com/fotos-gratis/linda-secretaria-no-trabalho-em-seu-escritorio_53419-8205.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ Profissional[2].nome }}
          </div>
        </q-img>
        <q-card-section>
          {{ Profissional[2].especializacao }}
        </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2">
        <q-card class="my-card">
        <q-img
          src="https://image.freepik.com/fotos-gratis/linda-secretaria-no-trabalho-em-seu-escritorio_53419-8205.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ Profissional[3].nome }}
          </div>
        </q-img>
        <q-card-section>
          {{ Profissional[3].especializacao }}
        </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2">
        <q-card class="my-card">
        <q-img
          src="https://image.freepik.com/fotos-gratis/linda-secretaria-no-trabalho-em-seu-escritorio_53419-8205.jpg"
          basic
        >
          <div class="absolute-bottom text-h6">
            {{ Profissional[4].nome }}
          </div>
        </q-img>
        <q-card-section>
          {{ Profissional[4].especializacao }}
        </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'profissional',
  data () {
    return {
      Profissional: []
    }
  },
  methods: {
    viewProfissional () {
      this.$axios.get('http://localhost:3000/profissionalRoute').then(response => {
        this.Profissional = response.data
      })
    }
  },
  beforeMount () {
    this.viewProfissional()
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
