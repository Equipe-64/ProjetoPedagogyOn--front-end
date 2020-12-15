<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="toolbar-chat">
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  computed: {
    title () {
      console.log(this.$route)
      const currentPath = this.$route.fullPath
      if (currentPath === '/usuarios') return 'PedagogyOnChat'
      else if (currentPath === '/chat'); return 'Chat'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
.toolbar-chat {
  background $secondary
}
</style>
