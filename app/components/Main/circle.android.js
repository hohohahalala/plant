'use strict';

import React, {
  Component,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import styles from './style.js'

class Circle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <TouchableOpacity>
        <View style={styles.circle}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

module.exports = Circle;

// vi:et:sw=2:ts=2
