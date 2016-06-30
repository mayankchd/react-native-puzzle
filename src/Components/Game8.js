import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { observer } from 'mobx-react/native';

import Tile from './Tile';
import BoardStore from '../stores/BoardStore';
import BoardComponent from './BoardComponent';

const board = new BoardStore();

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
