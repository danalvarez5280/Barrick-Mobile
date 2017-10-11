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

import CheckBox from 'react-native-checkbox';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SafetyBox from './SafetyBox';

//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class Question4 extends Component {
  constructor(props) {
    super();
    console.log('props', props);
    this.state = {
      checkedControls: props.info.checkedControls,
      specificSafetyMeasures: props.info.specificSafetyMeasures,
      checkList: props.info.checkList,
    }
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  controlsChecked() {
    this.props.controlsChecked()
  };

  goBack() {
    this.props.goBack(3);
  };

  handleSubmit() {
    this.props.submitLogin(this.state);
  };

  noInfo() {
    Alert.alert('You need to input a CHECK ALL SAFETY MEASURES')
  };

  // safetyCheck() {
  //   let checks = this.state.checkList;
  //   const safetyChecks = checks.map((check, index) =>
  //     if(check === (<SafetyBox key={ index } safeCheck={ check } checked={ true } />)) {
  //       console.log('checks passed');
  //       controlsChecked()
  //     }
  //   );
  // 
  // }

  render() {
    console.log('props4', this.state.checkList);
    let checks = this.state.checkList;
    const safetyChecks = checks.map((check, index) =>
      <SafetyBox
        key={ index }
        safeCheck={ check }
        checked={ false } />
    );

    return(
      <KeyboardAwareScrollView
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={ styles.question }>
          <Text style={ styles.prompt }>Safety Measure Checklist</Text>
          <View style={ styles.list }>
          { safetyChecks }
          </View>
          <Text style={ styles.prompt }>Specific Concerns</Text>
          <TextInput
            style={ styles.input }
            multiline= { true }
            placeholder='Specific Concerns'
            onChangeText={ (specificSafetyMeasures) => this.setState({ specificSafetyMeasures })}
            value={ this.state.specificSafetyMeasures } />
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
    justifyContent: 'center',
    marginTop: 10,
    padding: 0,
    height: '100%',
    width: '100%',
  },
  input: {
    backgroundColor: '#CED5E0',
    color: '#122732',
    fontSize: 20,
    height: 100,
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  list: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
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

export default Question4;
