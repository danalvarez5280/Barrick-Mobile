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

class Login extends Component {
  constructor(){
    super();
    this.state = {
      employee: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noInfo = this.noInfo.bind(this);
    this.clearInfo = this.clearInfo.bind(this);
    this.collapseKeyboard = this.collapseKeyboard.bind(this);
  };

  handleSubmit() {
    this.props.submitLogin(this.state.employee)
    this.setState({
      employee: '',
      password: ''
    })
  };

  noInfo() {
    console.log('no user input');
    Alert.alert('You need to input an EMPLOYEE ID and PASSWORD')
  };

  clearInfo() {
    this.setState({
      employee: '',
      password: '',
    })
  };

  collapseKeyboard(event) {
    console.log(event);
  }

  render() {
    const submitButton =
      this.state.employee.length ?
        <Button styles={ styles.yesSubmit } onPress={ this.handleSubmit } title='Submit'/> :
        <Button styles={ styles.noSubmit } onPress={ this.noInfo } title='Submit'/>;
    return(
      <View style={ styles.question }>
        <Text style={ styles.prompt }>EMPLOYEE ID</Text>
        <TextInput
          style={ styles.input }
          onSubmitEditing={ Keyboard.dismiss() }
          multiline= { true }
          placeholder='Employe ID'
          onChangeText={ (employee) => this.setState({ employee })}
          value={ this.state.employee } />

          <Text style={ styles.prompt }>PASSWORD</Text>
          <TextInput
            style={ styles.input }
            onSubmit={ Keyboard.dismiss }
            multiline={ true }
            placeholder='Password'
            onChangeText={ (password) => this.setState({ password })}
            secureTextEntry={true}
            value={ this.state.password } />
          <View style={ styles.buttons }>
            {submitButton}
            <Button onPress={ this.clearInfo } title='Clear'/>
          </View>
      </View>
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
