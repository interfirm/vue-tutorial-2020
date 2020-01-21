import Vue from 'vue'

Vue.component('Square', {
  template: require('../views/Square.pug'),
  props: {
    value: String,
    isHighlight: {
      type: Boolean,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  }
})
