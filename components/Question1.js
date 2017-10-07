import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  Keyboard,
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
  }

  render() {
    const submitButton =
      this.state.employee.length ?
        <Button styles={styles.yesSubmit} onPress={ this.handleSubmit } title='Submit'/> :
        <Button styles={styles.noSubmit} onPress={ this.noInfo } title='Submit'/>;
    return(
      <View styles={styles.question}>
        <Text>Question 1</Text>
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

export default Question1;
