import possibleMoves from '../constants/possibleMoves';
import { observable, computed, action, toJS } from "mobx";
import shuffle from 'array-shuffle';

export default class Board {
@observable board = shuffle(['1','2','3','8','7','4','6','5','']);

@computed get hasWon() {
  return this.board.slice(0, this.board.length -1).every((tile, index) => {
    if (tile !== index + 1) {
      return false;
    } else {
      return true;
    }
  });
}

@action handleMove(content) {
    const index = this.board.indexOf(content);
    const movesAvailable = possibleMoves[index];
    for (let i = 0; i < movesAvailable.length; i++) {
      if (this.board[movesAvailable[i]] === '') {
        this.board[index] = '';
        this.board[movesAvailable[i]] = content;
      }
    }
  }

  @computed get getJSON() {
    return {
      board: toJS(this.board),
    }
  }

}
