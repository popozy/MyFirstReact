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
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      x1: new Animated.Value(0),
      y1: new Animated.Value(0),
      x2: new Animated.Value(0),
      y2: new Animated.Value(0),
      x3: new Animated.Value(0),
      y3: new Animated.Value(0),
      rotation: new Animated.Value(0),
      rotation1: new Animated.Value(0),
      rotation2: new Animated.Value(0),
      rotation3: new Animated.Value(0),

      //state for combine or spread
      spread: true,
      //4 direction offset Value
      t: -15,
      r: 15,
      b: 15,
      l: -15,
    }
  },

  _onPressHandler() {
    if(this.state.spread){
        this.spread();
        this.state.spread = false;
    }
    else{
        this.combine();
        this.state.spread = true;
    }
  },

  _onPressHandler2() {
    if(this.state.spread){
      this.spread();
      this.state.spread = false;
    }
    else{
      this.combine();
      this.state.spread = true;
    }
  },

  _onPressHandler3() {
    if(this.state.spread){
      this.spread();
      this.state.spread = false;
    }
    else{
      this.combine();
      this.state.spread = true;
    }
  },

  _onPressHandler4() {
    if(this.state.spread){
      this.spread();
      this.state.spread = false;
    }
    else {
      this.combine();
      this.state.spread = true;
    }
  },

  combine() {
    Animated.parallel([
      Animated.parallel([
        Animated.timing(this.state.x, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.y, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.rotation, {
          toValue: 0,
          duration: 500
        })
      ]).start(),

      Animated.parallel([
        Animated.timing(this.state.x1, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.y1, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.rotation1, {
          toValue: 0,
          duration: 500
        })
      ]).start(),
      Animated.parallel([
        Animated.timing(this.state.x2, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.y2, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.rotation2, {
          toValue: 0,
          duration: 500
        })
      ]).start(),
      Animated.parallel([
        Animated.timing(this.state.x3, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.y3, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.rotation3, {
          toValue: 0,
          duration: 500
        })
      ]).start(),
    ])
  },

  spread() {
    //movement && rotation
    Animated.parallel([
      Animated.parallel([
        Animated.timing(this.state.x, {
          toValue: this.state.l,
          duration: 500
        }),
        Animated.timing(this.state.y, {
          toValue: this.state.t,
          duration: 500
        }),
        Animated.timing(this.state.rotation, {
          toValue: -8,
          duration: 900
        })
      ]).start(),

      Animated.parallel([
        Animated.timing(this.state.x1, {
          toValue: this.state.r,
          duration: 500
        }),
        Animated.timing(this.state.y1, {
          toValue: this.state.t,
          duration: 500
        }),
        Animated.timing(this.state.rotation1, {
          toValue: 4,
          duration: 900
        })
      ]).start(),
      Animated.parallel([
        Animated.timing(this.state.x2, {
          toValue: this.state.l,
          duration: 500
        }),
        Animated.timing(this.state.y2, {
          toValue: this.state.b,
          duration: 500
        }),
        Animated.timing(this.state.rotation2, {
          toValue: 1,
          duration: 900
        })
      ]).start(),
      Animated.parallel([
        Animated.timing(this.state.x3, {
          toValue: this.state.r,
          duration: 500
        }),
        Animated.timing(this.state.y3, {
          toValue: this.state.b,
          duration: 500
        }),
        Animated.timing(this.state.rotation3, {
          toValue: -3,
          duration: 900
        })
      ]).start(),
    ])
  },
  render: function() {
    return (
      // width:800, height: 500
      <View style={styles.container}>

        <Animated.View style={[styles.wrapper,
          {transform: [
            {translateX: this.state.x},
            {translateY: this.state.y},
            {
              rotateZ: this.state.rotation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            }
          ]}
        ]}
        onPress = {this._onPressHandler}
        >
          <TouchableHighlight onPress = {this._onPressHandler}>
            <Animated.Image source={require('./img/9.jpg')} style={styles.rect}/>
          </TouchableHighlight>
        </Animated.View>

        <Animated.View style={[styles.wrapper,
          {transform: [
            {translateX: this.state.x1},
            {translateY: this.state.y1},
            {
              rotateZ: this.state.rotation2.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            }
          ]}
        ]}
        onPress = {this._onPressHandler2}
        >
          <TouchableHighlight onPress = {this._onPressHandler2}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect, {
                transform: [
                  {translateX: -120},
                  {translateY: 0}
                ]
              }]}/>
          </TouchableHighlight>
        </Animated.View>

        <Animated.View style={[styles.wrapper,
          {transform: [
            {translateX: this.state.x2},
            {translateY: this.state.y2},
            {
              rotateZ: this.state.rotation1.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            }
          ]}
        ]}
        onPress = {this._onPressHandler3}>
          <TouchableHighlight onPress = {this._onPressHandler2}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect, {
                transform: [
                  {translateX: 0},
                  {translateY: -75},
                ]
              }]}/>
          </TouchableHighlight>
        </Animated.View>

        <Animated.View  style={[styles.wrapper,
          {transform: [
            {translateX: this.state.x3},
            {translateY: this.state.y3},
            {
              rotateZ: this.state.rotation3.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            }
          ]}
        ]}
        onPress = {this._onPressHandler4}>
          <TouchableHighlight onPress = {this._onPressHandler4}>
            <Animated.Image source={require('./img/9.jpg')} style={[styles.rect,{
                transform: [
                  {translateX: -120},
                  {translateY: -75},
                ]
              }]}/>
          </TouchableHighlight>
        </Animated.View>

      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    // width:240,
    // height:150,
    width:380,
    height: 250,
    overflow: 'hidden',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 100,
    backgroundColor: '#ddd'
  },
  wrapper: {
    width:120,
    height:75,
  },
  rect: {
    width: 240,
    height: 150,
  }
});

AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
