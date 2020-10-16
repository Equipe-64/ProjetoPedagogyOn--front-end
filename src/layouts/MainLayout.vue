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
          <img src="https://i.imgur.com/RRmh8df.png" >
        </q-toolbar-title>
        <q-btn stretch flat icon="login" label="Login" />
        <q-btn-dropdown color="secondary" label="Cadastrar" dropdown-icon="change_history">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Profissonais</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Pais/Responsáveis</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

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
    caption: 'Página Principal',
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
    caption: 'Nossos Parceiros',
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
  },
  methods: {
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}

</script>
