'use strict';

import React, {
  AppRegistry,
  Navigator,
  Text,
  View,
  Component,
} from 'react-native';
import Main from './components/Main/Main.ios.js'

class plant extends Component {

  constructor(props) {
    super(props)
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'Main':
        return (
          <Main nav={navigator}></Main>
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
