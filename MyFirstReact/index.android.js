/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

 var ReactNative = require('react-native');
 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  PanResponder
} from 'react-native';



 class MyFirstReact extends React.Component {
  constructor(props: any){
    super(props);
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      bounceValue: new Animated.Value(1.5),

      //`try to callback another function to implement Animation after fisrt render finishing`
      //`但是在该位置定义函数的时候this.state.bounceValue is undefined`
      // AfterRender: new function(){
      //   // this.state.bounceValue.setValue(1.5),
      //   Animated.spring(this.state.bounceValue,{
      //     toValue: 0.8,
      //     friction: 1,
      //   }).start();
      // }
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
        {scale: this.state.bounceValue}
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

      //`first demo for opacity increasing with time`
      // Animated.timing(this.state.fadeInOpacity, {
      //   toValue: 1,
      //   duration: 1000,
      //   // Easing: Easing.linear     //unsolved:error when running???
      // }).start();
      // this.state.bounceValue.setValue(1.5),

      Animated.sequence(
      [
        //`parallel animation`
        Animated.parallel(
          // ['fadeInOpacity', 'rotation'].map(property =>{
          //   return Animated.timing(this.state[property],{
          //     toValue: 1,
          //     duration: 2000
          //   })

        [ Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,
            duration: 2000
          }),
           Animated.timing(this.state.rotation, {
            toValue: 1,
            duration: 2000
           }),
        ]
          //`unsolved when wanna to use another Animated`
          // Animated.spring(this.state.bounceValue,
          // {
          //   toValue: 0.8,
          //   friction: 1,
          // })
        ),

        // this.state.bounceValue.setValue(1.5),
        Animated.spring(this.state.bounceValue,{
          toValue: 0.8,
          friction: 1,
        })
      ]).start();
    }

      //`try to callback another function to implement Animation after fisrt render finishing`
      //`但是在AfterRender位置出现unexpected token`
      // AfterRender: new function(){
      //   // this.state.bounceValue.setValue(1.5),
      //   Animated.spring(this.state.bounceValue,{
      //     toValue: 0.8,
      //     friction: 1,
      //   }).start(;
      // }
}

  AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
