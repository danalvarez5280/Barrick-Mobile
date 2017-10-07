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

class Question2 extends Component {
  constructor() {
    super();
    this.state = {
      riskLevel: 1,
      specificRisk: ''
    }
  }

  handleSubmit() {
    this.props.submitLogin(this.state)
    this.setState({
      riskLevel: 1,
      specificRisk: ''
    })
  };

  noInfo() {
    Alert.alert('You need to input a SPECIFIC TASK')
  };

  render() {
    const submitButton =
      this.state.specificRisk.length ?
        <Button onPress={ this.handleSubmit } title='Submit'/> :
        <Button onPress={ this.noInfo } title='Submit'/>;
    return(
      <View style={styles.question}>
        <Text>Question 2</Text>
        <Slider
        value={this.state.riskLevel}
        onValueChange={(riskLevel) => this.setState({riskLevel})}/>
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
});

export default Question2;
