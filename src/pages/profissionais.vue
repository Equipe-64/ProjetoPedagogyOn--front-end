<template>
  <q-page padding>
    <h3>Estes são os profissionais disponíveis.</h3>
    <div v-for="(people,index) in profissionais" :key="index">
      <CardProfissionais :nome="people.nome" :especializacao="people.especializacao"/>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import CardProfissionais from 'components/CardProfissionais'
export default {
  name: 'profissional',
  data () {
    return {
      profissionais: []
    }
  },
  created: function () {
    axios.get('http://localhost:3000/profissionalRoute').then(res => {
      this.profissionais = res.data
      console.log('Pegou a lista de profissionais')
    })
  },
  components: {
    CardProfissionais
  }
}
</script>
