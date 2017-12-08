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

import risk1 from './assets/shield.png';
import risk2 from './assets/caution.png';
import risk3 from './assets/siren.png';
import risk4 from './assets/death.png';
import risk5 from './assets/biohazard.png';

import concern1 from './assets/injury1.png';
import concern2 from './assets/injury2.png';
import concern3 from './assets/injury3.png';
import concern4 from './assets/injury4.png';
import concern5 from './assets/injury5.png';
import concern6 from './assets/injury6.png';

import wrenchGold  from './assets/wrench-gold.png';
import truckGold from './assets/truck-gold.png';
import lightGold from './assets/light-gold.png';
//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class ReviewCheck extends Component {
  constructor(props) {
    super();
    console.log('info', props.info);
    this.state = {
      info: props.info,
      checked: props.checked,
      icon: props.icon,
      safeCheck: props.safeCheck
    }
    this.changeColor = this.changeColor.bind(this);
  };

  changeColor() {
    this.state.checked ?
    this.setState({
      checked: false,
    }) :
    this.setState({
      checked: true,
    })
  };


  render() {
    return(
      <TouchableHighlight onPress={ () => this.changeColor() }>
        <View style={ styles.blue }>
          <Image source={ this.state.icon } style={ styles.checkBox } />
          <Text style={ styles.white }>{ this.state.safeCheck }</Text>
        </View>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  white: {
    color: '#122732',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  blue: {
    alignItems: 'center',
    backgroundColor: '#CED5E0',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    marginTop: 10,
    padding: 5,
    width: 250,
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
    height: 40,
    width: 40,
  }
});

export default ReviewCheck;
