'use strict';

import React, {
  ToolbarAndroid,
  StyleSheet
} from 'react-native'
import {Icon} from 'react-native-icons'

var NavToolbar = React.createClass({
  render() {
    return (
      <ToolbarAndroid
        title = {this.props.title}
        style = {styles.toolbar}
        titleColor = '#000000'>
        <Icon
          name='ion|beer'
          size={150}
          color='#887700'
          style={styles.beer}
        />
      </ToolbarAndroid>
    )
  }
});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#EDEDEF',
    height: 56,
  }
});

module.exports = NavToolbar;

// vi:et:sw=2:ts=2
