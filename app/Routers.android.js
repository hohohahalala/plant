'use strict';

import React, {
  AppRegistry,
  View,
  BackAndroid,
  Navigator,
  Text
} from 'react-native'

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if(_navigator.getCurrentRoutes().length === 1) {
    return false
  }
  _navigator.pop();
  return true;
});

var Routers = React.createClass({
  renderScene(route, navigator) {
    console.info('Current Router: ', navigator.getCurrentRoutes())
    _navigator = navigator

    switch(route.id) {
      case "Main":
        return (
          <Text>it is main</Text>
        )
    }
  },
  render() {
    return (
      <Navigator
        initialRoute = {{id: 'Main'}}
        configureScene = {() => Navigator.SceneConfigs.FadeAndroid}
        renderScene = {this.renderScene}
      />
    )
  }
});

module.exports = Routers;
