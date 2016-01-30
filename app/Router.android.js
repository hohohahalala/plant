'use strict';

import React, {
  Component,
  AppRegistry,
  View,
  BackAndroid,
  Navigator,
  Text,
} from 'react-native'

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if(_navigator.getCurrentRoutes().length === 1) {
    return false
  }
  _navigator.pop();
  return true;
});

class plant extends Component {
  renderScene(route, navigator) {
    console.info('Current Router: ', navigator.getCurrentRoutes())
    _navigator = navigator

    switch(route.id) {
      case "Main":
        return (
          <View>
            <Text> Main </Text>
          </View>
        );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute = {{id: 'Main'}}
        configureScene = {() => Navigator.SceneConfigs.FloatFromRight}
        renderScene = {this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('plant', () => plant);

// vi:et:sw=2:ts=2
