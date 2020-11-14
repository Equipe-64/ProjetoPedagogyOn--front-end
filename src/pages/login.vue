<template>
      <q-page class="bg-light-white window-height window-width row justify-center items-center">
    <div class="column q-mr-sm">
      <div class="row justify-center">
         <img src="https://i.imgur.com/RRmh8df.png" >
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="senha" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <h6 class="q-mb-xs">Novo aqui?</h6>
              <q-btn-dropdown color="secondary" class="q-mt-xs" label="cadastre-se">
      <q-list>
        <q-item to="/cadastro1" clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Profissionais</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/cadastro2" clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Pais/Responsaveis</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        </q-card>
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
.q-card {
  width: 360px;
}
</style>
