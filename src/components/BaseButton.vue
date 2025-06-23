<template>
  <button
      :disabled="disabled"
      :style="buttonStyle"
      class="base-button"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled:    { type: Boolean, default: false },
    margin:      { type: String,  default: ''    },
    primaryColor:{ type: String,  default: '#42b983' }
  },
  computed: {
    buttonStyle() {
      return {
        margin: this.margin,
        backgroundColor: this.primaryColor,
      }
    }
  }
}
</script>

<style scoped>
.base-button {
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  outline: none;
}
.base-button:hover,
.base-button:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
</style>
