<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          color="secondary"
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
        <q-btn stretch flat to="/login" icon="login" color="secondary" label="Login" />
        <q-btn-dropdown color="secondary" label="Cadastrar" icon="person">
      <q-list>
        <q-item to="/cadastro1" clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Profissonais</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/cadastro2" clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Pais/Responsáveis</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn stretch flat to="/busca" icon="search" color="secondary" label="search" />

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
    link: '/sobrenos'
  },
  {
    title: 'INSTITUICÕES',
    caption: 'Nossos Parceiros',
    icon: 'home_work',
    link: '/instituicoes'
  },
  {
    title: 'PROFISSIONAIS',
    caption: 'Profissionais Cadastrados',
    icon: 'person_search',
    link: '/profissionais'
  },
  {
    title: 'FALE CONOSCO',
    caption: 'Nossas redes e contados',
    icon: 'phone',
    link: '/faleconosco'
  },
  {
    title: 'PAGAMENTO',
    caption: 'Página de pagamento',
    icon: 'payment',
    link: '/pagamento'
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
