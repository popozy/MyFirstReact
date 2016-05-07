/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

 // styles = StyleSheet.create({
 //    demo: {

 //    }
 //  });

 class MyFirstReact extends React.Component {
  constructor(props: any){
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      // bounceValue: new Animated.Value(0)
    };
  }

  render():ReactElement{
    return (<Animated.Image
      source={require('./test.jpg')}
      style = {{
        opacity: this.state.fadeInOpacity,
        transform:[
        {
          rotateZ: this.state.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '360deg']
          })
        },
        // {scale: this.state.bounceValue}
        ],
        width:300,
        height:300,
        // flex: 1,        //unsolved problem: make it center at the view  by flex
        // alignItems: 'center',
        // justifyContent: 'center'
        margin: 30
      }}/>
      );
    }

    componentDidMount(){
      // Animated.timing(this.state.fadeInOpacity, {
      //   toValue: 1,
      //   duration: 1000,
      //   // Easing: Easing.linear
      // }).start();
      // this.state.bounceValue.setValue(1.5),
      Animated.parallel(
        ['fadeInOpacity', 'rotation'].map(property =>{
          return Animated.timing(this.state[property],{
            toValue: 1,
            duration: 2000
        })

        //unsolved when wanna to use another Animated
        // Animated.spring(this.state.bounceValue,
        // {
        //   toValue: 0.8,
        //   friction: 1,
        // })
      })).start();

      // Animated.parallel([
      //   Animated.timing(this)
      // ]).start();
    }
}

  AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
