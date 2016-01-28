'use strict';

import React, {
  View,
  Text,
  Component
} from 'react-native'

var Main = React.createClass({
  getInitialState() {
    return {
      loaded: true
    }
  },
  render() {
    var content = (
      <View>
        <Text>G-Puzzle</Text>
      </View>
    )
    if(!this.state.loaded) {
      content = (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
    return content
  }
});

module.exports = Main

// vi:et:sw=2:ts=2
