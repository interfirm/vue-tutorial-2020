import Vue from 'vue'

Vue.component('Board', {
  template: require('../views/Board.pug'),
  props: {
    squares: {
      type: Array,
      required: true
    },
    isHighlight: {
      type: Function,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    index (i, j) {
      return 3 * (i - 1) + (j - 1)
    }
  }
})
