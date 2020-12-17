<template>
<div class="q-pa-md q-gutter-md">
    <q-card class="my-card">
      <img src="../assets/profile.png">

      <q-card-section>
        <div class="text-h6">{{ nome }}</div>
        <div class="text-subtitle2">{{especializacao}}</div>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
  props: {
    nome: String,
    especializacao: String
  }
}
</script>

<style lang="stylus">
.my-card
  width: 100%
  max-width: 250px
  background-color: $secondary
</style>
