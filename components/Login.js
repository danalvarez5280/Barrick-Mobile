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
      employee: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noInfo = this.noInfo.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.scrollToInput = this.scrollToInput.bind(this);
    this.passwordHide = this.passwordHide.bind(this);
  };

  handleSubmit() {
    this.props.submitLogin(this.state.employee)
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
  };

  passwordHide() {
    if(this.state.password.length > 0){
      let pass = [...this.state.password];
      let hide = pass.map(letter => '*').join('')
      return hide
    }
  };



  render() {
    let passy = this.passwordHide()
    const mockButton = <Button onPress={ this.handleSubmit } title='MOCK'/>;

    const submitButton =
      this.state.employee.length ?
        <Button onPress={ this.handleSubmit } title='SUBMIT'/> :
        <Button onPress={ this.noInfo } title='Enter ID'/>;
    return(
      <KeyboardAwareScrollView
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
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
              secureTextEntry={ true }
              value={ passy } />
            <View style={ styles.buttons }>
              { submitButton }
              <Button onPress={ this.clearInfo } title='CLEAR'/>
            </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
};

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    marginTop: 15,
    overflow: 'scroll',
    width: '100%',
  },
  input: {
    backgroundColor: '#CED5E0',
    color: '#122732',
    fontSize: 20,
    height: 40,
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

});
export default Login;
