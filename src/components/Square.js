import Vue from 'vue'

Vue.component('Square', {
  template: require('../views/Square.pug'),
  props: {
    value: String,
    isHighlight: Boolean,
    handleClick: Function
  }
})
