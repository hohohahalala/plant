'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PixelRatio,
}
from 'react-native'

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

var styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: 40,
  },
  circle: {
    backgroundColor: '#bbbbbb',
    height: 50,
    width: 50,
    borderRadius: 25
  }
});

module.exports = Main;

// vi:et:sw=2:ts=2
