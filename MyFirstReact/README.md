#MyFirstReact
Personal daily practice on React native.



##Gesture
###Touch
    TouchableHighlight
    TouchableNativeFeedback
    TouchableOpacity
    TouchableWithoutFeedback
    绑定方法：
        0. introduce relative "component" such as View or TouchableHighlight
        1. 创建手势的对应class(设置触发引起的操作，render(return (introduce styles of frame && frame && OnpressIn = {this._onPressIn}...)))
        2. styles definition for step1
        3. AppRegistry
###Gesture responder system
    1.一个React Native应用中只能存在一个responder
        协商：
        应用中存在两个responder，当使用一个手指激活一个responder之后，又去激活另一个responder会怎么样？因为React Native应用中只存在一个Responder，此时就会出现responder互斥的情况。具体来说过程如下：
        1.1 一个responder已经被激活
        1.2 第一个responder还没有被release，用户去尝试去激活第另一个responder
            后面将要被激活的responder去和前面还没有被释放的responder“协商”：结果两种情况：
            a. 第一个responder主动release => 后面的responder的onResponderReject方法被调用，后面的responder没有被激活
            b. 第一个responder依旧占据唯一的responder的位置 => 第二个的responder被激活，onResponderGrant方法被调用, 第一个responder的onResponderTerminate方法被调用，第一个responder的状态被释放
        1.3 上面的步骤中，比较重要的部分是第三步“协商”，这个步骤由onResponderTerminationRequest这个方法的返回值决定，如果一个responder的这个方法的返回值是true，那么说明采用a方法，反之b方法。
    2. React Native事件响应的基本步骤如下：
        2.1 用户通过触摸或者滑动来“激活”某个responder，这个步骤由View.props.onStartShouldSetResponder以及View.props.onMoveShouldSetResponder这两个方法负负责处理，如果返回值为true，则表示这个View能够响应触摸或者滑动手势被激活
        2.2 如果组件被激活，View.pros.onResponderGrant方法被调用，一般来说，这个时候需要去改变组建的底色或者透明度，来表示组件已经被激活
        2.3 用户开始滑动手指，此时View.props.onResponderMove方法被调用
        2.4 当用户的手指离开屏幕之后，View.props.onResponderRelease方法被调用，此时组件恢复被触摸之前的样式，例如底色和透明度恢复之前的样式，完成一次手势操作
        2.[summary]一次正常的手势操作的流程: 响应touch或者move手势 -> grant（被激活） -> move -> release(结束事件)
    3. bubble-事件代理[ref:http://gold.xitu.io/entry/55fa202960b28497519db23f]
        3.1 View.props.onStartSetResponderCapture
        3.2 View.props.onStartSetResponderCapture
###PanResponder
