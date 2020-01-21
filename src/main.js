import Vue from 'vue'
require('./index.css')

Vue.component('Square', require('./components/Square.js').default)
Vue.component('Board', require('./components/Board.js').default)
Vue.component('Game', require('./components/Game.js').default)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
/* eslint-enable no-new */
