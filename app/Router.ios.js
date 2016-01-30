'use strict';

import React, {
  AppRegistry,
  View,
  Navigator,
  Text,
  ListView,
  Component,
} from 'react-native';

class plant extends Component {
  getInitialState() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Main':
        return (
          <View>
            <Text> {this.state.dataSource} </Text>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              />
          </View>
        );
    }
  }
  _renderRow(rowData){
    return <Text>{rowData}</Text>;
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
