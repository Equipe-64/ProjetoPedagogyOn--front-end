<template>
  <q-page class="flex column">
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from =='Você' ? true : false"
      />
    </div>
    <q-footer elevated class="footer-chat">
        <q-toolbar>
          <q-form @submit="sendMessage" class="full-width">
          <q-input bg-color="white" outlined rounded v-model="newMessage" label="Mensagem" dense>
            <template v-slot:after>
              <q-btn round dense flat @click="sendMessage" color="white" icon="send" />
             </template>
          </q-input>
          </q-form>

        </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Bom dia, tudo bom?',
          from: 'Você'
        },
        {
          text: 'Bom dia, muito bem! E você?',
          from: 'Ele(a)'
        },
        {
          text: 'Muito bem!',
          from: 'Você'
        }
      ]
    }
  },
  methods: {
    sendMessage () {
      this.messages.push({
        text: this.newMessage,
        from: 'Você'
      })
    }
  }
}
</script>

<style lang="stylus">
.footer-chat {
  background-color $secondary
}
</style>
