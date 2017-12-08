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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SafetyBox from './SafetyBox';

import risk1 from './assets/shield.png';
import risk2 from './assets/caution.png';
import risk3 from './assets/siren.png';
import risk4 from './assets/death.png';
import risk5 from './assets/biohazard.png';


//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class Question2 extends Component {
  constructor(props) {
    super();
    this.state = {
      checkedRisks: props.info.checkedRisks,
      riskLevel: props.info.riskLevel,
      specificRisk: props.info.specificRisk,
      risksList: props.info.risksList,
      checkedRisks: false,
    }
    this.howRisky = this.howRisky.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  };

  goBack() {
    this.props.goBack(1);
  };

  risksChecked() {
    this.props.risksChecked()
  };

  handleSubmit() {
    this.risksChecked()
    this.props.submitLogin(this.state);
  };

  noInfo() {
    Alert.alert('You need to input a SPECIFIC RISK')
  };

  howRisky() {
    if(this.state.riskLevel === 1) {
      return risk1
    }
    else if(this.state.riskLevel === 2) {
      return risk2
    }
    else if(this.state.riskLevel === 3) {
      return risk3
    }
    else if(this.state.riskLevel === 4) {
      return risk4
    }
    else {
      return risk5
    }
  };

  render() {
    const risk = this.howRisky();

    let checks = this.state.risksList;
    const safetyChecks = checks.map((risk, index) =>
      <SafetyBox
        key={ index }
        safeCheck={ risk }
        checked={ this.state.checkedRisks } />)

    return(
      <KeyboardAwareScrollView
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={styles.question}>
          <Text style={ styles.prompt }>Select the Risk Level</Text>
          <Image source={ risk } style={styles.riskIcon}/>
          <Slider
            maximumValue={ 5 }
            maximumTrackTintColor= 'green'
            minimumValue={ 1 }
            minimumTrackTintColor= 'red'
            onSlidingComplete ={ () => this.howRisky() }
            onValueChange={ (riskLevel) => this.setState({ riskLevel }) }
            step={ 1 }
            style={ styles.slider }
            value={ this.state.riskLevel }  />
          <Text>{ this.state.riskLevel }</Text>
          <Text style={ styles.prompt }>Specific Risks</Text>
            <TextInput
            style={ styles.input }
            multiline= { true }
            placeholder='Specific Risk'
            onChangeText={ (specificRisk) => this.setState({ specificRisk })}
            value={ this.state.specificRisk } />
          <Text style={ styles.prompt }>Other Risks</Text>
            { safetyChecks }
          <Button onPress={ this.handleSubmit } title='SUBMIT'/>
          <Button onPress={ this.goBack } title='BACK'/>
        </View>
      </KeyboardAwareScrollView>
    )
  }
};
const styles = StyleSheet.create({
  display: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
    padding: 0,
    height: 670,
    width: '100%',
  },
  input: {
    backgroundColor: '#CED5E0',
    color: '#122732',
    fontSize: 20,
    height: 50,
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  question: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 0,
  },
  prompt: {
    backgroundColor: '#C4900F',
    color: '#122732',
    fontWeight: 'bold',
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
    width: 250,
  },
  riskIcon: {
    height: 80,
    margin: 15,
    width: 80,
  },
  slider: {
    width: 200
  }
});

export default Question2;
