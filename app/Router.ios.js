'use strict';

import React, {
  AppRegistry,
  View,
  Navigator,
  Text,
  Component,
} from 'react-native';

class plant extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Main':
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
