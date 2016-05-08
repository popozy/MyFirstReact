/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// `demo for Gesture: touch`
// 'use strict';

// var React = require('react-native');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight
// } = React;

// var MyFirstReact = React.createClass({
//   _onPressIn() {
//     this.start = Date.now()
//     console.log("press in")
//   },
//   _onPressOut() {
//     console.log("press out")
//   },
//   _onPress() {
//     console.log("press")
//   },
//   _onLonePress() {
//     console.log("long press " + (Date.now() - this.start))
//   },
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//           style = {styles.touchable}
//           onPressIn={this._onPressIn}
//           onPressOut={this._onPressOut}
//           onPress = {this._onPress}
//           onLongPress = {this._onLonePress}
//         >
//         <View style = {styles.button}></View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   button: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: 'red'
//   },
//   touchable: {
//     borderRadius: 100
//   }
// });

// AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);


// `demo for responser system `
// 'use strict';

// var React = require('react-native');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } = React;

// var MyFirstReact = React.createClass({
//   getInitialState() {
//     return {
//       bg: 'grey'
//     }
//   },

//   componentWillMount() {
//     this._gestureHandlers = {
//       onStartShouldSetResponder: () => true,
//       onMoveShouldSetResponder: () => true,
//       onResponderGrant: () => {
//         this.setState({
//           bg: 'red'
//         })
//       },
//       onResponderMove: () => {
//         console.log(123)
//       },
//       onResponderRelease: () => {
//         this.setState({
//           bg: 'white'
//         })
//       }
//     }
//   },

//   render: function() {
//     return (
//       <View style = {styles.container}>
//         <View
//           {...this._gestureHandlers}
//           style = {[styles.rect, {"backgroundColor": this.state.bg}]}
//         ></View>
//       </View>
//     );
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },

//   rect: {
//     width: 200,
//     height: 200,
//     borderWidth: 1,
//     borderColor: '#000',
//   }
// });

// AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);


//`demo for panresponder: drop and drag`
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder
} = React;

var MyFirstReact = React.createClass({
  getInitialState() {
    return {
      bg: '#fff',
      top: 0,
      left: 0
    }
  },

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this._top = this.state.top
        this._left = this.state.left
        this.setState({
          bg: 'red'
        })
      },
      onPanResponderMove: (evt, gs) => {
        console.log(gs.dx + ' ' + gs.dy)
        this.setState({
          top: this._top + gs.dy,
          left: this._left + gs.dx
        })
      },
      onPanResponderRelease: (evt, gs) => {
        this.setState({
          bg: '#fff',
          top: this._top + gs.dy,
          left: this._left + gs.dx
        })
      }
    })
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <View
          {...this._panResponder.panHandlers}
          style={[styles.rect,{
            "backgroundColor": this.state.bg,
            "top": this.state.top,
            "left": this.state.left,
          }]} />
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

  rect: {
    width: 200,
    height: 200,
    borderWidth: 1,
    backgroundColor: '#000',
    position: 'absolute',
  }
});

AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
