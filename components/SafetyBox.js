import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  Keyboard,
  Slider,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import safetyChecked from './assets/checked.png';
import notChecked from './assets/not-checked.png';

//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class SafetyBox extends Component {
  constructor(props) {
    super();
    this.state = {
      checked: props.checked,
      list: props.list,
      check: props.safeCheck,
    }
    this.changeColor = this.changeColor.bind(this);
  };

  changeColor() {
    console.log('hi dan');
    this.state.checked ?
    this.setState({
      checked: false,
    }) :
    this.setState({
      checked: true,
    })
  };


  render() {
    let boxChecked = this.state.checked ? safetyChecked : notChecked;
    let boxStyle = this.state.checked ? styles.gold : styles.blue;
    return(
      <TouchableHighlight onPress={ () => this.changeColor() }>
        <View style={ boxStyle }>
          <Image source={ boxChecked } style={ styles.checkBox } />
          <Text style={ styles.white }>{ this.state.check }</Text>
        </View>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  blue: {
    alignItems: 'center',
    backgroundColor: '#122732',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    padding: 5,
    width: 220,
  },
  gold: {
    alignItems: 'center',
    backgroundColor: '#C4900F',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    padding: 5,
    width: 220,
  },
  checkBox: {
    height: 24,
    width: 24,
  }
});

export default SafetyBox;
