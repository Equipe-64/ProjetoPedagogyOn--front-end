<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <q-item v-for="usuario in usuarios" :key="usuario.id" to="/chat" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="secondary" text-color="white">
            {{ usuario.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ usuario.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="usuario.online ? 'light-green-5' : 'grey-4' ">
             {{usuario.online ? 'Online' : 'Offline'}}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      usuarios: [{
        id: 1,
        name: 'Professor Rodrigo',
        online: true
      }, {
        id: 2,
        name: 'Psicóloga Maria',
        online: false
      }, {
        id: 3,
        name: 'Fisioteraputa Elisabete',
        online: true
      }]

    }
  }
}
</script>
