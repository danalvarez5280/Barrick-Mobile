import React, { Component } from 'react';
import logo from './assets/caution.png';
import truck from './assets/truck.png';
import truckGold from './assets/truck-gold.png';
import wrench from './assets/wrench.png';
import wrenchGold  from './assets/wrench-gold.png';
import light from './assets/light.png';
import lightGold from './assets/light-gold.png';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E

import {
  Alert,
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noInfo = this.noInfo.bind(this);
    this.selectTaskType = this.selectTaskType.bind(this);
  }

  handleSubmit() {
    console.log('hi everybody');
    this.props.submitLogin(this.state)
  };

  noInfo() {
    Alert.alert('You need to input an TASK TYPE  and SPECIFIC TASK')
  };

  selectTaskType(type) {
    this.setState({
      taskType: type,
    })
    console.log(this.state.taskType);
  };

  render() {
    const transportation = this.state.taskType === 'Transportation' ? truckGold : truck;
    const electrical = this.state.taskType === 'Electrical' ? lightGold : light;
    const maintenence = this.state.taskType === 'Maintenence' ? wrenchGold : wrench;
    const submitButton =
      this.state.specificTask.length ?
        <Button style={ styles.yesSubmit } onPress={ this.handleSubmit } title='Submit'/> :
        <Button style={ styles.noSubmit } onPress={ this.noInfo } title='Submit'/>;
    return(
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={ styles.question } >
          <Text style={ styles.prompt }>Select the Type of Task</Text>
          <View style={ styles.taskType }>
            <View>
              <TouchableHighlight onPress={ () => this.selectTaskType('Transportation') }>
                <Image source={ transportation } style={styles.taskIcon}/>
              </TouchableHighlight>
              <Text style={styles.type}>Transportation</Text>
            </View>
            <View>
              <TouchableHighlight onPress={ () => this.selectTaskType('Electrical') }>
                <Image source={ electrical } style={styles.taskIcon}/>
              </TouchableHighlight>
              <Text style={styles.type}>Electrical</Text>
            </View>
            <View>
              <TouchableHighlight onPress={ () => this.selectTaskType('Maintenence') }>
                <Image source={ maintenence } style={styles.taskIcon}/>
              </TouchableHighlight>
              <Text style={styles.type}>Maintenence</Text>
            </View>

          </View>
          <Text style={ styles.prompt }>Specific Task</Text>
          <TextInput
            style={ styles.input }
            multiline= { true }
            placeholder='Specific Task'
            onChangeText={ (employee) => this.setState({ employee })}
            value={ this.state.employee } />
          <Button onPress={ this.handleSubmit } title='Submit'/>
        </View>
      </KeyboardAwareScrollView>
    )
  }
};
const styles = StyleSheet.create({
  display: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    height: '100%',
    width: '100%',
  },
  input: {
    backgroundColor: '#CED5E0',
    color: '#122732',
    fontSize: 20,
    height: 150,
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  prompt: {
    backgroundColor: '#C4900F',
    color: '#122732',
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    width: 250,
  },
  question: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  taskIcon: {
    height: 80,
    margin: 15,
    width: 80,
  },
  taskType: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  type: {
    color: '#122732',
    display: 'flex',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  }

});

export default Question1;
