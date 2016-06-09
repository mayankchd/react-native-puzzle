import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Tile from './Tile';

import { observer } from 'mobx-react/native';

import BoardStore from '../Store/BoardStore';
import BoardComponent from './BoardComponent';

const board = new BoardStore();
console.log(board.handleMove);

@observer
class Game8 extends Component {

  render() {
    return (
      <View>
        <BoardComponent board= {board} />
      </View>
          );
  }
}

export default Game8;
