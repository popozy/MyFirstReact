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
      fadeInOpacity: new Animated.Value(0)
    };
  }

  render():ReactElement{
    return (<Animated.Image
      source={require('./test.jpg')}
      style = {{
        opacity: this.state.fadeInOpacity,
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
      Animated.timing(this.state.fadeInOpacity, {
        toValue: 1,
        duration: 1000,
        // Easing: Easing.linear
      }).start();
    }
  }

  AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
