'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} = React;

var MyFirstReact = React.createClass({
  getInitialState() {
    return {

    }
  },

  componentDidMount() {

  },

  render: function() {
    return (
      // width:800, height: 500
      <View style={styles.container
      }>
        <View style={{flexWrap:'nowrap', flexDirection: 'row'}}>
          <View style={styles.wrapper}>
            <Image source={require('./img/9.jpg')} style={styles.rect}/>
          </View>

          <View style={styles.wrapper}>
            <Image source={require('./img/9.jpg')} style={[styles.rect, {
              transform: [
                {translateX: -120},
                {translateY: 0}
              ]
            }]}/>
          </View>
        </View>
        <View style={{flexWrap: 'nowrap', flexDirection: 'row'}}>
          <View style={styles.wrapper}>
            <Image source={require('./img/9.jpg')} style={[styles.rect, {
              transform: [
                {translateX: 0},
                {translateY: -75},
              ]
            }]}/>
          </View>
          <View style={styles.wrapper}>
            <Image source={require('./img/9.jpg')} style={[styles.rect,{
              transform: [
                {translateX: -120},
                {translateY: -75},
              ]
            }]}/>
          </View>
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
