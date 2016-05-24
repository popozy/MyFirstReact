'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Animated,
    TouchableOpacity,
    Easing,
    View,
    StyleSheet,
    Text,
    Image,
} = React;
var url = [
    require('./1.jpg'),require('./2.jpg'),require('./3.jpg'),require('./4.jpg')
];
var getUrl = function(i){
    return url[i];
}
var MyFirstReact = React.createClass({
    _panResponder: {},
    getInitialState() {
            return {
                first: new Animated.Value(0),
                second: new Animated.Value(0),
                rotate_1: new Animated.Value(10),
                rotate_2: new Animated.Value(-7),
                rotate_3: new Animated.Value(-15),
                rotate_4: new Animated.Value(30),
                url_1: 0,
                url_2: 1,
                url_3: 2,
                url_4: 3,
                url_5: 2,
                combine: 0,
                url: url,
                h: new Animated.Value(105),
                w: new Animated.Value(150),
                x: new Animated.Value(0),
                y: new Animated.Value(0),
                initX: new Animated.Value(0),
                position: "",
                x1: new Animated.Value(150),
                x2: new Animated.Value(0),
                xx1: new Animated.Value(0),
                yy: new Animated.Value(-210),
                state: 0,
            };
    },
    _combine(){
        Animated.timing(this.state.h, {
            toValue: 210,
        }).start();
        Animated.timing(this.state.w, {
            toValue: 300,
        }).start();
        Animated.timing(this.state.x, {
            toValue: -150,
        }).start();
        Animated.timing(this.state.y, {
            toValue: -105,
        }).start();
        Animated.timing(this.state.yy, {
            toValue: -315,
        }).start();

        Animated.timing(this.state.rotate_1, {
            toValue: -5,
        }).start();
        Animated.spring(this.state.rotate_1, {
            toValue: 0,
            friction: 4,
        }).start();
        Animated.timing(this.state.rotate_2, {
            toValue: 5,
        }).start();
        Animated.spring(this.state.rotate_2, {
            toValue: 0,
            friction: 4,
        }).start();

        Animated.timing(this.state.rotate_3, {
            toValue: 5,
        }).start();
        Animated.spring(this.state.rotate_3, {
            toValue: 0,
            friction: 4,
        }).start();
        Animated.timing(this.state.rotate_4, {
            toValue: -5,
        }).start();
        Animated.spring(this.state.rotate_4, {
            toValue: 0,
            friction: 4,
        }).start();

        Animated.timing(this.state.first, {
            // toValue: 55,
            toValue: 10,
        }).start();
        Animated.spring(this.state.first, {
            toValue: 10,
            friction: 4,
        }).start();

        Animated.timing(this.state.second, {
            // toValue: -55,
            toValue: -10,
        }).start();
        Animated.spring(this.state.second, {
            toValue: -10,
            friction: 4,
        }).start();
    },

    _uncombine(){
        this.state.x1.setValue(200);
        this.state.xx1.setValue(0);
        this.state.x2.setValue(200);
        Animated.timing(this.state.h, {
            toValue: 105,
        }).start();
        Animated.timing(this.state.w, {
            toValue: 150,
        }).start();
        Animated.timing(this.state.x, {
            toValue: 0,
        }).start();
        Animated.timing(this.state.y, {
            toValue: 0,
        }).start();
        Animated.timing(this.state.yy, {
            toValue: -210,
        }).start();
        Animated.timing(this.state.rotate_1, {
            toValue: 15,
        }).start();
        Animated.spring(this.state.rotate_1, {
            toValue: 10,
            friction: 4,
        }).start();

        Animated.timing(this.state.rotate_2, {
            toValue: -12,
        }).start();
        Animated.spring(this.state.rotate_2, {
            toValue: -7,
            friction: 4,
        }).start();

        Animated.timing(this.state.rotate_3, {
            toValue: -20,
        }).start();
        Animated.spring(this.state.rotate_3, {
            toValue: -15,
            friction: 4,
        }).start();

        Animated.timing(this.state.rotate_4, {
            toValue: 35,
        }).start();
        Animated.spring(this.state.rotate_4, {
            toValue: 30,
            friction: 4,
        }).start();

        Animated.timing(this.state.first, {
            toValue: -5,
        }).start();
        Animated.timing(this.state.second, {
            toValue: 5,
        }).start();

        Animated.spring(this.state.first, {
            toValue: 0,
            friction: 3,
        }).start();
        Animated.spring(this.state.second, {
            toValue: 0,
            friction: 3,
        }).start();
        this.setState({url_1: 0, url_2: 1, url_3: 2, url_4: 3, combine: 0});
        // this.state.combine = 0;
    },
    _onPress_1() {
        if(this.state.combine == 0){
            this._combine();
            this.setState({url_2: 0, url_3: 0, url_4: 0, combine: 1});
        }
        else{
            this._uncombine();
        }
    },
    _onPress_2() {
        if(this.state.combine == 0){
            this._combine();
            this.setState({url_1: 1, url_3: 1, url_4: 1, combine: 1});
        }
        else{
            this._uncombine();
        }
    },
    _onPress_3() {
        if(this.state.combine == 0){
            this._combine();
            this.setState({url_2: 2, url_1: 2, url_4: 2, combine: 1});
        }
        else{
            this._uncombine();
        }
    },
    _onPress_4() {
        if(this.state.combine == 0){
            this._combine();
            this.setState({url_2: 3, url_3: 3, url_1: 3, combine: 1});
        }
        else{
            this._uncombine();
        }
    },
    _left(){
        var url5 = this.state.url_5;
        var random = parseInt(Math.random() * 10 % 4);
        while(random == url5)
            random = parseInt(Math.random() * 10 % 4);
        this.state.x1.setValue(150);
        this.state.xx1.setValue(0);
        this.state.x.setValue(-150);
        this.state.x2.setValue(0);
        this.setState({url_1: url5, url_2: url5, url_3: url5, url_4: url5, url_5: random, });
        Animated.timing(this.state.x1, {
                toValue: 0,
            }).start();
        Animated.timing(this.state.xx1, {
            toValue: -150,
        }).start();
        Animated.timing(this.state.x2, {
            toValue: -150,
        }).start();
        Animated.timing(this.state.x, {
            toValue: -300,
        }).start();
    },
    _right(){
        var url1 = this.state.url_1;
        var random = parseInt(Math.random() * 10 % 4);
        while(random == url1)
            random = parseInt(Math.random() * 10 % 4);
        this.state.x1.setValue(0);
        this.state.xx1.setValue(-150);
        this.state.x.setValue(-300);
        this.state.x2.setValue(-150);
        this.setState({url_5: url1, url_1: random, url_2: random, url_3: random, url_4: random});
        Animated.timing(this.state.x1, {
            toValue: 150,
        }).start();
        Animated.timing(this.state.xx1, {
            toValue: 0,
        }).start();
        Animated.timing(this.state.x2, {
            toValue: 0,
        }).start();
        Animated.timing(this.state.x, {
            toValue: -150,
        }).start();
    },
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.view,
                    {
                      transform: [
                        {translateX: this.state.first},
                        {translateY: this.state.first},
                        {rotate: this.state.rotate_1.interpolate({
                            inputRange: [0,360],
                            outputRange: ['0deg', '360deg']
                        })},
                      ],
                    }]}>
                    <TouchableOpacity activeOpacity={1} style={styles.touch} onPress={this._onPress_1}>
                        <Animated.Image
                            source={this.state.url[this.state.url_1]}
                            style={{
                                // position: this.state.position._value,
                                height: this.state.h,
                                width: this.state.w,
                                resizeMode: 'contain',
                                transform:[{translateX: this.state.xx1}, ],
                        }}/>
                        <Animated.Image
                            source={this.state.url[this.state.url_5]}
                            style={{
                                height: 210,
                                width: 300,
                                resizeMode: 'contain',
                                transform:[{translateX: this.state.x1}, {translateY: -210}, ],
                        }}/>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.view,
                    {transform: [
                        {translateX: this.state.second},
                        {translateY: this.state.first},
                        {rotate: this.state.rotate_2.interpolate({
                            inputRange: [0,360],
                            outputRange: ['0deg', '360deg']
                        })},
                    ]}]}>
                    <TouchableOpacity activeOpacity={1} style={styles.touch} onPress={this._onPress_2} >
                        <Animated.Image
                            source={this.state.url[this.state.url_5]}
                            style={{
                                height:210,
                                width: 300,
                                resizeMode: 'contain',
                                transform:[{translateX: this.state.x2}, {translateY: 0}, ],
                        }}/>
                        <Animated.Image
                            style={{
                                position: 'absolute',
                                height: this.state.h,
                                width: this.state.w,
                                resizeMode: 'contain',
                                transform: [{translateX: this.state.x}, {translateY: -210}],
                            }}
                            source={this.state.url[this.state.url_2]}/>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.view,
                    {transform: [
                        {translateX: this.state.first},
                        {translateY: this.state.second},
                        {rotate: this.state.rotate_3.interpolate({
                            inputRange: [0,360],
                            outputRange: ['0deg', '360deg']
                        })},
                    ]}]}>
                    <TouchableOpacity activeOpacity={1} style={styles.touch} onPress={this._onPress_3}>
                        <Animated.Image
                            style={{
                                height: this.state.h,
                                width: this.state.w,
                                resizeMode: 'contain',
                                transform: [{translateX: this.state.xx1}, {translateY: this.state.y},]}
                            。
                            source={this.state.url[this.state.url_3]}/>
                        <Animated.Image
                            source={this.state.url[this.state.url_5]}
                            style={{
                                height: 210,
                                width: 300,
                                resizeMode: 'contain',
                                transform:[{translateX: this.state.x1}, {translateY: -315}, ],
                        }}/>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.view,
                    {transform: [
                        {translateX: this.state.second},
                        {translateY: this.state.second},
                        {rotate: this.state.rotate_4.interpolate({
                            inputRange: [0,360],
                            outputRange: ['0deg', '360deg']
                        })},
                    ]}]}>
                    <TouchableOpacity activeOpacity={1} style={styles.touch} onPress={this._onPress_4}>
                        <Animated.Image
                            source={this.state.url[this.state.url_5]}
                            style={{
                                height: 210,
                                width: 300,
                                resizeMode: 'contain',
                                transform:[{translateX: this.state.x2}, {translateY: -105}, ],
                        }}/>
                        <Animated.Image
                            style={{
                                height: this.state.h,
                                width: this.state.w,
                                resizeMode: 'contain',
                                transform: [{translateX: this.state.x},{translateY: this.state.yy}]}
                            }
                            source={this.state.url[this.state.url_4]}/>
                    </TouchableOpacity>
                </Animated.View>
                <View style={[styles.left_button, {opacity: this.state.combine}]}>
                    <TouchableOpacity onPress={this._left}>
                        <Text style={[{fontSize: 30}, ]}>←</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.right_button, {opacity: this.state.combine}]}>
                    <TouchableOpacity onPress={this._right}>
                        <Text style={[{fontSize: 30}, ]}>→</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: 'rgb(250,189,58)',
        paddingLeft: 15,
        // width: 600,
    },
    view: {
        height: 105,
        width: 150,
        //height:140
        //width: 200
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,

        // width: 150,
        // height: 105,
    },
    touch: {
        height: 105,
        width: 150,
        overflow: 'hidden',

        // height:105,
        // width: 150,
    },
    // image: {
    //     height: 280,
    //     width: 400,
    //     resizeMode: 'cover',
    // },
    left_button: {
      opacity: 0,
      alignItems: 'center',
      backgroundColor: 'white',
      width: 50,
      height: 50,
      left: 20,
      borderRadius: 10,
    },
    right_button: {
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      width: 50,
      height: 50,
      right: 20,
      borderRadius: 10,
    },
});
AppRegistry.registerComponent('MyFirstReact', () => MyFirstReact);
