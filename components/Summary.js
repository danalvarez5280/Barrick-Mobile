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

import risk1 from './assets/secure.png';
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

import wrenchGold  from './assets/wrench-gold.png';
import truckGold from './assets/truck-gold.png';
import lightGold from './assets/light-gold.png';


//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class Summary extends Component {
  constructor(props) {
    super();
    console.log('props', props);
    this.state = {
      info: props.info,
    }
    this.goBack = this.goBack.bind(this);
    this.testFn = this.testFn.bind(this);
  };

  testFn() {
    console.log('hi dan');
  };

  goBack() {
    this.props.goBack(4);
  };

  render() {
    let check = 'Bender Is Great';
    let safetyChecks =
      <SafetyBox
        safeCheck={ check }
        checked={ false } />
    return(
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={styles.question}>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Task Type:</Text>
            <Image source={ lightGold } style={ styles.checkBox }/>
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Specific Task:</Text>
            <Text style={ styles.white }>{ this.props.info.specificTask }</Text>
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Risk Level:</Text>
            <Image source={ risk1 } style={ styles.checkBox }/>
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Specific Risk:</Text>
            <Text style={ styles.white }>{ this.props.info.specificRisk }</Text>
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Concerns:</Text>
            <Image source={ concern1 } style={ styles.checkBox }/>
            <Text style={ styles.white }>{ this.props.info.whatConcernLevel }</Text>
          </View>
          <View style={ styles.blue }>
            <Text style={ styles.white }>Specific Concerns:</Text>
            <Text style={ styles.white }>{ this.props.info.specificConcerns }</Text>
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
    justifyContent: 'center',
    height: 40,
    marginTop: 10,
    padding: 5,
    width: 220,
  },
  checkBox: {
    height: 24,
    width: 24,
  },
  display: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 20,
    height: '100%',
    width: '100%',
  },
  question: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 0,
  },
  white: {
    color: '#122732',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default Summary;
