<template>
  <q-page padding class="row justify-center items-center">
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">{{novoProfissional.nome }}</div>
        <div class="text-subtitle2">{{ novoProfissional.especializacao }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ novoProfissional.especializacao }}
      </q-card-section>
    </q-card>
<q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{novoProfissional.nome }}
      </q-card-section>
    </q-card>
</div>
  </q-page>
</template>

<script>
export default {
  name: 'profissional',
  data () {
    return {
      Profissionals: []
    }
  },
  methods: {
    viewProfissionals () {
      this.$axios.get('http://localhost:3000/profissionalRoute').then(response => {
        this.Profissionals = response.data
      })
    }
  },
  beforeMount () {
    this.viewProfissionals()
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
