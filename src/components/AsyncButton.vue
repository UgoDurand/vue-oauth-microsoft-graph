<template>
  <BaseButton
      :color="color"
      :margin="margin"
      :disabled="isPending || disabled"
      @click="onClick"
  >
    <font-awesome-icon
        v-if="isPending"
        :icon="['fas','circle-notch']"
        pulse
    />
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { FontAwesomeIcon } from '../lib/fontAwesome'

export default {
  name: 'AsyncButton',
  components: {
    BaseButton,
    FontAwesomeIcon
  },
  props: {
    /**
     * Function obligatoire qui renvoie une Promise.
     * Exemple : () => new Promise(resolve => setTimeout(resolve,2000))
     */
    action: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary',
      validator: v => ['primary','warn','danger'].includes(v)
    },
    margin: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isPending: false
    }
  },
  methods: {
    onClick() {
      if (this.isPending || this.disabled) {
        return
      }
      this.isPending = true
      // Appelle la fonction action() fournie par le parent
      // et remet isPending à false quand c’est fini.
      Promise.resolve(this.action())
          .finally(() => {
            this.isPending = false
          })
    }
  }
}
</script>

<style scoped>
/* Pas besoin de styles ici : BaseButton gère tout */
</style>
