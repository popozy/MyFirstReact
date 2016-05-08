/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var MyFirstReact = React.createClass({
  _onPressIn() {
    this.start = Date.now()
    console.log("press in")
  },
  _onPressOut() {
    console.log("press out")
  },
  _onPress() {
    console.log("press")
  },
  _onLonePress() {
    console.log("long press " + (Date.now() - this.start))
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style = {styles.touchable}
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          onPress = {this._onPress}
          onLongPress = {this._onLonePress}
        >
        <View style = {styles.button}></View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  touchable: {
    borderRadius: 100
  }
});

AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
