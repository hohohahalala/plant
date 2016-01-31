'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import styles from './style.js'
import Circle from './circle.ios.js'

class Main extends Component {

  testData = [
    {title: '熱死病', content: '啊啊啊啊熱死'},
    {title: '全球暖化', content: '好熱好熱好熱'},
    {title: '洋流', content: '流流流流'}
  ];

  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      issue: '',
    }
  }

  render() {
    return(
      <View style={styles.mainView}>
        <Text style={styles.titleText}>G-Puzzle</Text>
        {
          this.testData.map((issue) => { return(
            <Circle
              title={issue.title}
              nav={this.props.nav}
              key={issue.title}
            /> )}
          )
        }
      </View>
    )
  }
}

module.exports = Main;

// vi:et:sw=2:ts=2
