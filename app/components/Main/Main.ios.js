'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PixelRatio,
} from 'react-native'
import styles from './style.js'

class Main extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    console.log(PixelRatio.get());
  }
  render() {
    return(
      <View style={styles.mainView}>
        <Text style={styles.titleText}>G-Puzzle</Text>
        <View style={styles.circle}></View>
      </View>
    );
  }
}

module.exports = Main;

// vi:et:sw=2:ts=2
