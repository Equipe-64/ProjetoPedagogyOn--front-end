<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 q-mr-xl q-pb-xl">
        <img class="float-left on-right" src="https://imgur.com/TmwlneQ.png"
        style="max-width: 1000px; height: 250px;"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
    <p class="text-h5 text-weight-bold text-center  q-pt-lg q-pr-xl">NOS SIGA NAS REDES E FIQUE POR DENTRO!</p>
  </div>
  </div>
  <div class='row justify-center'>
    <div class="col-2">
    <img class="float-left on-right" src="https://imgur.com/XEf1jBK.png"
        style="max-width: 150px; height: 40px;"
        />
      </div>
      <div class="col-2">
        <img class="float-left on-right" src="https://imgur.com/Ssa9GyU.png"
        style="max-width: 150px; height: 40px;"
        />
      </div>
      <div class="col-2">
        <img class="float-left on-right" src="https://imgur.com/olY1DP9.png"
        style="max-width: 150px; height: 40px;"
        />
      </div>
      </div>
      <div class='row'>
        <div class="col-12">
    <p class="text-h5 text-weight-bold text-center">Assine nossa newsletter, e receba as novidades no email!</p>
     </div>
</div>
    <q-input standout v-model="email" type="email" hint="Email" />

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
