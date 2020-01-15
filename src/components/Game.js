import Vue from 'vue'

Vue.component('Game', {
  template: `
    <div class="game">
      <Board :squares="current.squares" :isHighlight="isHighlight" :handleClick="handleClick"/>
      <div class="game-info">
        <div>{{ status }}</div>
        <div>
          <button @click="sortHistory"> 表示切り替え </button>
        </div>
        <ol :reversed="isHistoryDescending? 'reversed':false">
          <li v-for="move in moves" :key="move.step">
            <button @click="jumpTo(move.step)"><span v-html="move.move"></span></button>
          </li>
        </ol>
      </div>
    </div>
  `,
  data: function () {
    return {
      history: [
        {
          squares: Array(9).fill(null),
          col: null,
          row: null
        }
      ],
      isHistoryDescending: false,
      stepNumber: 0,
      xIsNext: true
    }
  },
  computed: {
    current: function () {
      return this.history[this.stepNumber]
    },
    status: function () {
      const winInfo = this.winInfo
      let status
      if (winInfo) {
        status = `Winner: ${winInfo}`
      } else if (this.stepNumber === 9) {
        status = 'Draw'
      } else {
        status = `Next player: ${this.xIsNext ? 'X' : 'O'}`
      }
      return status
    },
    moves: function () {
      let moves = this.history.map((procedure, step) => {
        const col = procedure.col
        const row = procedure.row
        let move = step ? `Go to #${step} (${col},${row})` : 'Go to game start'
        if (this.stepNumber === step) {
          move = `<b>${move}</b>`
        }
        return {
          move,
          step
        }
      })
      return this.isHistoryDescending ? moves.reverse() : moves
    },
    winLine: function () {
      const squares = this.current.squares
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      let winLine = []
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          winLine = winLine.concat(lines[i])
        }
      }
      return winLine
    },
    winInfo: function () {
      if (this.winLine.length) {
        return this.current.squares[this.winLine[0]]
      }
      return null
    }
  },
  methods: {
    compareFunc: function (a, b) {
      return a - b
    },
    handleClick: function (i) {
      const newHistory = this.history.slice(0, this.stepNumber + 1)
      const current = newHistory[newHistory.length - 1]
      const squares = current.squares.slice()
      const col = Math.floor(i / 3)
      const row = i % 3

      if (this.winInfo || squares[i]) {
        return
      }
      squares[i] = this.xIsNext ? 'X' : 'O'
      this.history = newHistory.concat([
        {
          squares,
          col,
          row
        }
      ])
      this.stepNumber = newHistory.length
      this.xIsNext = !this.xIsNext
    },
    sortHistory: function () {
      this.isHistoryDescending = !this.isHistoryDescending
    },
    jumpTo: function (step) {
      this.stepNumber = step
      this.xIsNext = step % 2 === 0
    },
    isHighlight: function (i) {
      return this.winLine.indexOf(i) >= 0
    }
  }
})
