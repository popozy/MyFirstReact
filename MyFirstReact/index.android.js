'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableHighlight,
} = React;

var MyFirstReact = React.createClass({
  getInitialState() {
    return {
        pic1L: new Animated.value(0),
        pic1T: new Animated.value(0),
        pic2L: new Animated.value(-120),
        pic2T: new Animated.value(0),
        pic3T: new Animated.value(-75),
        pic3L: new Animated.value(0),
        pic4T: new Animated.value(-75),
        pic4L: new Animated.value(-120),
    }
  },

  _onPressHandler() {
    this.setState({
    transform: [
      {translateX:-20},
      {translateY:-20},
      {rotateZ: '20deg'}
    ]
    })
    console.log('press 1')
  },

  _onPressHandler2() {

  },

  _onPressHandler3() {

  },

  _onPressHandler4() {

  },

  render: function() {
    return (
      // width:800, height: 500
      <View style={styles.container
      }>
        <View style={{flexWrap:'nowrap', flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this._onPressHandler} style={styles.wrapper}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect,
              transform: [
                {translateX: pic1L},
                {translateY: pic1T}
              ]
            ]}/>
          </TouchableHighlight>
          <TouchableHighlight onPress = {this._onPressHandler2} style={styles.wrapper}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect, {
                transform: [
                  {translateX: pic2L},
                  {translateY: pic2T}
                ]
              }]}/>
          </TouchableHighlight>
        </View>
        <View style={{flexWrap: 'nowrap', flexDirection: 'row'}}>
          <TouchableHighlight onPress = {this._onPressHandler3} style={styles.wrapper}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect, {
                transform: [
                  {translateX: pic3L},
                  {translateY: pic3T},
                ]
              }]}/>
          </TouchableHighlight>
          <TouchableHighlight onPress = {this._onPressHandler4} style={styles.wrapper}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect,{
                transform: [
                  {translateX: pic4L},
                  {translateY: pic4T},
                ]
              }]}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'nowrap',
    flexDirection: 'column'
    // resizeMode: 'contain',
  },
  wrapper: {
    width:120,
    height:75,
    overflow:'hidden',
    //image会把父容器wrapper的padding和border在hidden方向上覆盖掉，如何处理边界问题?
    // borderWidth:5,
    // borderColor: '#000',
    // backgroundColor: 'red'
  },
  rect: {
    width: 240,
    height: 150,
  }
});

AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
