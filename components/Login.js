import React, { Component } from 'react';
import {
  Alert,
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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      employee: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noInfo = this.noInfo.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.scrollToInput = this.scrollToInput.bind(this);
  };

  handleSubmit() {
    this.props.submitLogin(this.state.employee)
    this.setState({
      employee: '',
      password: ''
    })
  };

  noInfo() {
    Alert.alert('You need to input an EMPLOYEE ID and PASSWORD')
  };

  clearInfo() {
    this.setState({
      employee: '',
      password: '',
    })
  };

  scrollToInput (reactNode: any) {
  this.refs.scroll.scrollToFocusedInput(reactNode)
}

  render() {

    const mockButton = <Button onPress={ this.handleSubmit } title='Submit'/>;

    const submitButton =
      this.state.employee.length ?
        <Button onPress={ this.handleSubmit } title='Submit'/> :
        <Button onPress={ this.noInfo } title='Submit'/>;
    return(
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        <View style={ styles.question }>
          <Text style={ styles.prompt }>EMPLOYEE ID</Text>
          <TextInput
            style={ styles.input }
            multiline= { true }
            placeholder='Employe ID'
            onChangeText={ (employee) => this.setState({ employee })}
            value={ this.state.employee } />

            <Text style={ styles.prompt }>PASSWORD</Text>
            <TextInput
              style={ styles.input }
              multiline={ true }
              placeholder='Password'
              onChangeText={ (password) => this.setState({ password })}
              secureTextEntry={true}
              value={ this.state.password } />
            <View style={ styles.buttons }>
              {mockButton}
              <Button onPress={ this.clearInfo } title='Clear'/>
            </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
};

const styles = StyleSheet.create({
  question: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 70,
  },
  prompt: {
    backgroundColor: '#C4900F',
    color: '#122732',
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    width: 250,
  },
  input: {
    backgroundColor: '#BBBBDD',
    color: '#122732',
    fontSize: 20,
    height: 50,
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
});
export default Login;
