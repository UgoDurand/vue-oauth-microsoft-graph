<template>
  <button
      :disabled="disabled"
      :class="buttonClasses"
      :style="{ margin }"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    margin: {
      type: String,
      default: ''
    },
    // Exercice 8 : prop color
    color: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'warn', 'danger'].includes(v)
    }
  },
  computed: {
    buttonClasses() {
      // applique toujours base-button + btn-[color]
      return ['base-button', `btn-${this.color}`]
    }
  }
}
</script>

<style scoped>
/* styles communs */
.base-button {
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
  outline: none;
}
/* états hover/focus génériques */
.base-button:hover,
.base-button:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}


.btn-primary {
  background-color: #42b983;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #4ccc93;
}

.btn-warn {
  background-color: #ff7522;
}
.btn-warn:hover,
.btn-warn:focus {
  background-color: #ff7d43;
}

.btn-danger {
  background-color: #e53935;
}
.btn-danger:hover,
.btn-danger:focus {
  background-color: #ef5350;
}

/* état disabled */
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
