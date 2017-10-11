import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, AppRegistry, Image } from 'react-native';
import Login from './components/Login';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Summary from './components/Summary';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from './components/assets/logo.png';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkList: [],
      checkedControls: false,
      employeeId: '',
      loggedIn: false,
      potentialInjuries: 1,
      riskLevel: 1,
      specificConcerns: '',
      specificRisk: '',
      specificSafetyMeasures: '',
      specificTask: '',
      taskType: '',
    }
    this.submitLogin = this.submitLogin.bind(this);
    this.setControls = this.setControls.bind(this);
    this.goBack = this.goBack.bind(this);
    this.q1Submit = this.q1Submit.bind(this);
    this.q2Submit = this.q2Submit.bind(this);
    this.q3Submit = this.q3Submit.bind(this);
    this.q4Submit = this.q4Submit.bind(this);
  };

  goBack(num) {
    this.setState({
      question: num
    })
  };

  submitLogin(employee) {
    this.setState({
      employeeId: employee,
      loggedIn: true,
      question: 1,
    })
  };

  setControls(array) {
    this.setState({
      checkList: array
    })
  };

  q1Submit(input) {
    this.setState({
      taskType: input.taskType,
      specificTask: input.specificTask,
      question: 2,
    })
  };

  q2Submit(input) {
    this.setState({
      riskLevel: input.riskLevel,
      specificRisk: input.specificRisk,
      question: 3,
    })
  };

  q3Submit(input) {
    this.setState({
      potentialInjuries: input.potentialInjuries,
      specificConcerns: input.specificConcerns,
      question: 4,
    })
  };

  q4Submit(input) {
    this.setState({
      checkedControls: true,
      specificSafetyMeasures: input.specificSafetyMeasures,
      question: 5,
    })
  };


  render() {
    return (
      <KeyboardAwareScrollView
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={ styles.container }>
        <StatusBar barStyle='light-content'/>
          <View style={styles.header}>
            <Image source={logo} style={ styles.logo }/>
            <View>
            {
              this.state.loggedIn &&
              <View>
                <Text style={ styles.gold }>{ this.state.employeeId }</Text>
                <Text style={ styles.gold }>Salt Lake City, UT</Text>
              </View>
            }
            </View>
          </View>
          {
            !this.state.loggedIn &&
            <Login
              submitLogin={ this.submitLogin } />
          }
          {
            this.state.question === 1 &&
            <Question1
              submitLogin={ this.q1Submit }
              setControls={ this.setControls }
              info={ this.state } />
          }
          {
            this.state.question === 2 &&
            <Question2
              submitLogin={ this.q2Submit }
              goBack={ this.goBack }
              info = { this.state }/>
          }
          {
            this.state.question === 3 &&
            <Question3
              submitLogin={this.q3Submit}
              goBack={ this.goBack }
              info = { this.state }/>
          }
          {
            this.state.question === 4 &&
            <Question4
              submitLogin={ this.q4Submit }
              goBack={ this.goBack }
              info = { this.state }/>
          }
          {
            this.state.question === 5 &&
            <Summary
              submitLogin={ this.q4Submit }
              goBack={ this.goBack }
              info = { this.state }
              checkList={ this.state.checkList }/>
          }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    marginTop: -15 ,
    padding: 0,
    width: '100%',
  },
  gold: {
    color: '#C4900F',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 5,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#122732',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
  },
  icon: {
    height: 50,
    width: 200,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    width: 100,
  },
  logo: {
    height: 50,
    width: 100,
  },
  red: {
    color: 'red',
  },
});
