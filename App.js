import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, AppRegistry, Image } from 'react-native';
import Login from './components/Login';
import Question1 from './components/Question1';
import Question2 from './components/Question2';

// import Question2 from './components/Question2';
import logo from './components/assets/logo.png';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.submitLogin = this.submitLogin.bind(this);
    this.q1Submit = this.q1Submit.bind(this);
  };

  submitLogin(employee) {
    this.setState({
      employeeId: employee,
      loggedIn: true,
      question: 1,
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
      question2: false,
      qustion3: true,
    })
  };

  render() {
    return (
      <View style={ styles.container }>
      <StatusBar barStyle='light-content'/>
        <View style={styles.header}>
          <Image source={logo} style={ styles.logo }/>
          <View>
          {
            this.state.loggedIn &&
            <Text style={ styles.gold }>{ this.state.employeeId }</Text>
          }
          <Text style={ styles.gold }>Site Id</Text>
          </View>
        </View>
        {
          !this.state.loggedIn &&
          <Login submitLogin={this.submitLogin} />
        }
        {
          this.state.question === 1 &&
          <Question1 submitLogin={this.q1Submit} />
        }
        {
          this.state.question === 2 &&
          <Question2 submitLogin={this.q2Submit} />
        }
        {
          this.state.question === 3 &&
          <Text>Question 3 goes here</Text>
        }
      </View>
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
  logo: {
    height: 50,
    width: 100,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    width: 100,
  },
  icon: {
    height: 50,
    width: 200,
  },
  red: {
    color: 'red',
  },
  gold: {
    color: '#C4900F',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 5,
  },
});
