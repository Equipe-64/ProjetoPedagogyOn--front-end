<template>
  <q-page padding>
   <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vh">
        finalizar o serviço ?
      </div>

      <div class="text-h2" style="opacity:.4">
        deseja mesmo excluir sua conta ?
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        to="/"
        label="sim"
        no-caps
      />
      <q-btn id="btnn"
        class="q-mt-xl"
        color="white"
        text-color="blue"
        to="/"
        label="não"
        no-caps
      />
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
#btnn{
margin-left: 2%;
}
</style>
