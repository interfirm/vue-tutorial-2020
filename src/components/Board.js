import Vue from 'vue'

Vue.component('Board', {
  template: require('../views/Board.pug'),
  props: {
    squares: Array,
    isHighlight: Function,
    handleClick: Function
  },
  methods: {
    index: function (i, j) {
      return 3 * (i - 1) + (j - 1)
    }
  }
})
