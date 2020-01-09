import Vue from 'vue'

Vue.component('Square', {
  template: `
    <button class="square" :class="{ highlight: isHighlight }" @click="handleClick"> {{ value }} </button>
  `,
  props: {
    value: String,
    isHighlight: Boolean,
    handleClick: Function
  }
})
