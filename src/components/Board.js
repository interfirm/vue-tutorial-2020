import Vue from 'vue'

Vue.component('Board', {
  template: `
    <div class="game-board">
      <div class="board-row" v-for='i in 3'>
        <Square v-for='j in 3' :key="index(i, j)" :value="squares[index(i, j)]" :isHighlight="isHighlight(index(i, j))" :handleClick="() => handleClick(index(i, j))"/>
      </div>
    </div>
  `,
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
