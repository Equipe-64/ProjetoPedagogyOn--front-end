<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="flex justify-between">
          <q-avatar>
          <img src="img/Logo.png">
        </q-avatar>
          <q-btn-toggle
        flat stretch
        toggle-color="yellow"
        :options="[
          {label: 'Login', value: 'login'},
          {label: 'Cadastrar', value: 'cadastrar'}
        ]"
      />
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          MENU
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'HOME',
    caption: 'Página principal',
    icon: 'home',
    link: '/'
  },
  {
    title: 'NOSSO SISTEMA',
    caption: 'Como tudo funciona',
    icon: 'dvr',
    link: '/'
  },
  {
    title: 'INSTITUICÕES',
    caption: 'Nossos parceiros',
    icon: 'home_work',
    link: '/'
  },
  {
    title: 'PROFISSIONAIS',
    caption: 'Busque por um profissional',
    icon: 'person_search',
    link: '/'
  },
  {
    title: 'FALE CONOSCO',
    caption: 'Nossas redes e contados',
    icon: 'phone',
    link: '/'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
