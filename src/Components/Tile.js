import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';

import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',

  },

  tile: {
    fontSize: 45,
  },
});

@observer
class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor='#e3e3e3'>
        <Animated.View style={styles.container}>
          <Text style={styles.tile}>
            {this.props.tile}
          </Text>
        </Animated.View>
          </TouchableHighlight>
    );
  }
}

Tile.propTypes = {
  tile: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Tile;
