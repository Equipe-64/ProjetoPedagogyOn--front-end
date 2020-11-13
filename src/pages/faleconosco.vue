<template>
  <q-page padding>
    <div class="row justify-end">
      <div class="col-10 q-mr-xl q-pb-xl">
        <img class="float-left on-right" src="https://imgur.com/TmwlneQ.png"
        style="max-width: 700px; height: 150px;"
        />
      </div>
    </div>
    <p class="text-h5 text-weight-bold text-center  q-pt-lg q-pr-xl">NOS SIGA NAS REDES E FIQUE POR DENTRO!</p>
    <img class="float-left on-right" src="https://imgur.com/XEf1jBK.png"
        style="max-width: 150px; height: 40px;"
        />
        <img class="float-left on-right" src="https://imgur.com/Ssa9GyU.png"
        style="max-width: 150px; height: 40px;"
        />
        <img class="float-left on-right" src="https://imgur.com/olY1DP9.png"
        style="max-width: 150px; height: 40px;"
        />
    <p class="text-h5 text-weight-bold text-center">Assine nossa newsletter, e receba as novidades no email!</p>
    <q-input standout v-model="email" type="email" hint="Email" />

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
