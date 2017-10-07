import React, { Component } from 'react';
import logo from './assets/caution.png';
import truck from './assets/truck.png';
import truckGold from './assets/truck-gold.png';
import wrench from './assets/wrench.png';
import wrenchdGold  from './assets/wrench-gold.png';
import light from './assets/light.png';
import lightGold from './assets/light-gold.png';


//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E

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

class Question1 extends Component {
  constructor() {
    super();
    this.state = {
      taskType: '',
      specificTask: ''
    }
  }

  handleSubmit() {
    this.props.submitLogin(this.state)
    this.setState({
      taskType: '',
      specificTask: ''
    })
  };

  noInfo() {
    Alert.alert('You need to input an TASK TYPE  and SPECIFIC TASK')
  };

  render() {
    const submitButton =
      this.state.specificTask.length ?
        <Button style={ styles.yesSubmit } onPress={ this.handleSubmit } title='Submit'/> :
        <Button style={ styles.noSubmit } onPress={ this.noInfo } title='Submit'/>;
    return(
      <View style={ styles.question } >
        <Text>Select the Type of Task</Text>
        <View style={ styles.taskType }>
            <Image source={ truck } style={styles.taskIcon}/>
            <Image source={ light } style={styles.taskIcon}/>
            <Image source={ wrench } style={styles.taskIcon}/>
        </View>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  question: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 70,
  },
  taskType: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  taskIcon: {
    height: 80,
    margin: 15,
    width: 80,
  },

});

export default Question1;
