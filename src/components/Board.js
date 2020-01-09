import Vue from 'vue'

Vue.component('Board', {
  template: `
    <div class="game-board">
      <div class="board-row" v-for='i in 3'>
        <Square v-for='j in 3' :key="3*(i-1)+(j-1)" :value="squares[3*(i-1)+(j-1)]" :isHighlight="isHighlight(3*(i-1)+(j-1))" :handleClick="() => handleClick(3*(i-1)+(j-1))"/>
      </div>
    </div>
  `,
  props: {
    squares: Array,
    isHighlight: Function,
    handleClick: Function
  }
})
