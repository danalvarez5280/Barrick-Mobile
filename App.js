import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, AppRegistry, Image } from 'react-native';
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
      checkedRisks: false,
      employeeId: '',
      loggedIn: false,
      potentialInjuries: 1,
      questions: {},
      riskLevel: 1,
      risksList: [],
      specificConcerns: '',
      specificRisk: '',
      specificSafetyMeasures: '',
      specificTask: '',
      taskType: '',
      whatConcernLevel:'Minor Injuries',
    }
    this.controlsChecked = this.controlsChecked.bind(this);
    this.risksChecked = this.risksChecked.bind(this);
    this.goBack = this.goBack.bind(this);
    this.setControls = this.setControls.bind(this);
    this.setRisks = this.setRisks.bind(this);
    this.setConcerns = this.setConcerns.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.q1Submit = this.q1Submit.bind(this);
    this.q2Submit = this.q2Submit.bind(this);
    this.q3Submit = this.q3Submit.bind(this);
    this.q4Submit = this.q4Submit.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  };

  controlsChecked(){
    this.setState({
      checkedControls: true,
    })
  };

  risksChecked(){
    this.setState({
      checkedRisks: true,
    })
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

  setRisks(array) {
    this.setState({
      risksList: array
    })
  };

  setConcerns(str) {
    this.setState({
      whatConcernLevel: str
    })
  };

  q1Submit(input) {
    this.setState({
      taskType: input.taskType,
      specificTask: input.specificTask,
      taskTypeId: input.taskTypeId,
      question: 2,
      questions: Object.assign(
        {},
        this.state.questions,
        {
          'WorkerId': this.state.employeeId,
          'Supervisor': 5,
          'Task_Type': input.taskType,
          'Exact_Task': input.specificTask,
          'Task_Type_Id': input.taskTypeId
        }
      )
    })
  };

  q2Submit(input) {
    this.setState({
      checkedRisks: true,
      riskLevel: input.riskLevel,
      specificRisk: input.specificRisk,
      question: 3,
      questions: Object.assign(
        {},
        this.state.questions,
        {'Risk_Level': input.riskLevel, 'Specific_Risk': input.specificRisk}
      )
    })
  };

  q3Submit(input) {
    this.setState({
      potentialInjuries: input.potentialInjuries,
      whatConcernLevel: input.whatConcernLevel,
      specificConcerns: input.specificConcerns,
      question: 4,
      questions: Object.assign(
        {},
        this.state.questions,
        {'Potential_Injuries': input.whatConcernLevel, 'Specific_Concerns': input.specificConcerns}
      )
    })
  };

  q4Submit(input) {
    this.setState({
      checkedControls: true,
      specificSafetyMeasures: input.specificSafetyMeasures,
      question: 5,
      questions: Object.assign(
        {},
        this.state.questions,
        {'Controls_Checked': true, 'Specific_Safety_Measures': input.specificSafetyMeasures}
      )
    })
  };

  logOut() {
    this.setState({
      checkList: [],
      checkedControls: false,
      checkedRisks: false,
      employeeId: '',
      loggedIn: false,
      potentialInjuries: 1,
      question: null,
      questions: {},
      riskLevel: 1,
      risksList: [],
      specificConcerns: '',
      specificRisk: '',
      specificSafetyMeasures: '',
      specificTask: '',
      taskType: '',
      whatConcernLevel:'Minor Injuries',
    })
  }

  sendToDatabase() {
    console.log('sending info', this.state.questions);
    this.setState({
      checkList: [],
      checkedControls: false,
      checkedRisks: false,
      potentialInjuries: 1,
      question: 1,
      questions: {},
      riskLevel: 1,
      risksList: [],
      specificConcerns: '',
      specificRisk: '',
      specificSafetyMeasures: '',
      specificTask: '',
      taskType: '',
      whatConcernLevel:'Minor Injuries',
    })
    // fetch('https://mitig8.herokuapp.com/api/v1/workers/flras', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.questions)
    // })
    // .then(data => data.json())
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
              setRisks={ this.setRisks }
              info={ this.state } />
          }
          {
            this.state.question === 2 &&
            <Question2
              submitLogin={ this.q2Submit }
              goBack={ this.goBack }
              risksChecked={ this.risksChecked }
              info = { this.state }
              risksList={this.state.risksList}/>
          }
          {
            this.state.question === 3 &&
            <Question3
              submitLogin={ this.q3Submit }
              setConcerns={ this.setConcerns }
              goBack={ this.goBack }
              info = { this.state }/>
          }
          {
            this.state.question === 4 &&
            <Question4
              submitLogin={ this.q4Submit }
              controlsChecked={ this.controlsChecked }
              goBack={ this.goBack }
              info = { this.state }/>
          }
          {
            this.state.question === 5 &&
            <Summary
              submitLogin={ this.sendToDatabase }
              goBack={ this.goBack }
              info = { this.state }/>
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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    justifyContent: 'center',
    marginTop: -10,
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
    justifyContent: 'space-around',
    marginTop: 10,
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
