import React, { Component, PropTypes } from 'react';
import Tile from './Tile';
import {
  View,
  StyleSheet,
} from 'react-native';

import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 120,
  },
});

@observer
class BoardComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.board.getJSON.board.map((tile, i) => {
            return (<Tile
              tile={tile}
              key={i}
              onPress={() => { this.props.board.handleMove(tile); }}
            />);
          })
        }
      </View>
            );
  }
}

BoardComponent.PropTypes = {
  board: PropTypes.object.isRequired,
};

export default BoardComponent;
