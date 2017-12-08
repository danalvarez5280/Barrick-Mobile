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
import ReviewCheck from './ReviewCheck';

import risk1 from './assets/shield.png';
import risk2 from './assets/caution.png';
import risk3 from './assets/siren.png';
import risk4 from './assets/death.png';
import risk5 from './assets/biohazard.png';

import concern1 from './assets/injury1.png';
import concern2 from './assets/injury2.png';
import concern3 from './assets/injury3.png';
import concern4 from './assets/injury4.png';
import concern5 from './assets/injury5.png';
import concern6 from './assets/injury6.png';


import wrench from './assets/wrench.png';
import truck from './assets/truck.png';
import light from './assets/light.png';


//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class Summary extends Component {
  constructor(props) {
    super();
    this.state = {
      info: props.info,
    }
    this.goBack = this.goBack.bind(this);
    this.testFn = this.testFn.bind(this);
    this.selectTaskType = this.selectTaskType.bind(this);
    this.selectRiskLevel = this.selectRiskLevel.bind(this);
    this.filledOutTask = this.filledOutTask.bind(this);
  };

  testFn() {
    this.props.submitLogin()
  };

  selectTaskType() {
    if(this.props.info.taskType === 'Electrical') {
      return light
    }
    else if( this.props.info.taskType === 'Transportation') {
      return truck
    }
    else if( this.props.info.taskType === 'Maintenance') {
      return wrench
    }
  };

  selectRiskLevel() {
    console.log('whatup', this.props.info.riskLevel);
    if(this.props.info.riskLevel === 1) {
      return risk1
    }
    else if( this.props.info.riskLevel === 2) {
      return risk2
    }
    else if( this.props.info.riskLevel === 3) {
      return risk3
    }
    else if( this.props.info.riskLevel === 4) {
      return risk4
    }
    else if( this.props.info.riskLevel === 5) {
      return risk5
    }
  };

  selectConcern() {
    if(this.props.info.whatConcernLevel === 'Minor Injuries') {
      return concern1
    }
    else if( this.props.info.whatConcernLevel === 'Recordable Injuries') {
      return concern2
    }
    else if( this.props.info.whatConcernLevel === 'Reverisble Injuries') {
      return concern3
    }
    else if( this.props.info.whatConcernLevel === 'Irreverisble Injuries') {
      return concern4
    }
    else if( this.props.info.whatConcernLevel === 'Single Fatality') {
      return concern5
    }
    else if( this.props.info.whatConcernLevel === 'Multiple Fatalities') {
      return concern5
    }
  };

  filledOutTask() {
    this.props.info.specificTask.length ? true : false
  }

  filledOutRisk() {
    this.props.info.specificRisk.length ? true : false
  }

  filledOutConcern() {
    this.props.info.specificConcern.length ? true : false
  }

  goBack() {
    this.props.goBack(4);
  };

  render() {
    console.log('dan', this.state.info);
    let taskIcon = this.selectTaskType();
    let taskChecked = this.filledOutTask();
    let riskIcon = this.selectRiskLevel();
    let riskChecked = this.filledOutRisk();
    let concernIcon = this.selectConcern();
    let concernChecked = this.filledOutRisk();

    let taskCheck =
      <ReviewCheck
        info={this.state.info}
        icon={ taskIcon }
        checked={ this.filledOutTask }
        safeCheck={ this.props.info.specificTask } />

      let riskCheck =
        <ReviewCheck
          info={this.state.info}
          icon={ riskIcon }
          checked={ this.filledOutRisk }
          safeCheck={ this.props.info.specificRisk } />

      let concernCheck =
      <ReviewCheck
        info={this.state.info}
        icon={ concernIcon }
        checked={ this.filledOutConcern }
        safeCheck={ this.props.info.specificConcerns } />
    return(
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={styles.question}>
          <View>
            { taskCheck }
          </View>
          <View>
            {riskCheck }
          </View>
          <View>
            { concernCheck }
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>{ this.props.info.specificSafetyMeasures }</Text>
          </View>

          <Button onPress={ this.testFn } title='SUBMIT'/>
          <Button onPress={ this.goBack } title='BACK'/>
        </View>
      </KeyboardAwareScrollView>
    )
  }
};
const styles = StyleSheet.create({
  blue: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    marginLeft: 0,
    marginTop: 10,
    padding: 5,
  },
  checkBox: {
    height: 24,
    width: 24,
  },
  display: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingBottom: 20,
    height: 550,
    width: '100%',
  },
  question: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 0,
    width: '100%',
  },
  white: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default Summary;
