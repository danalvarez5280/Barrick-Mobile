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

import concern1 from './assets/injury1.png';
import concern2 from './assets/injury2.png';
import concern3 from './assets/injury3.png';
import concern4 from './assets/injury4.png';
import concern5 from './assets/injury5.png';
import concern6 from './assets/injury6.png';


//colors
// gold #C4900F
// blue #122732
//off white #CED5E0
// off blue #324A5E
class Question3 extends Component {
  constructor(props) {
    super();
    this.state = {
      potentialInjuries: props.info.potentialInjuries,
      specificConcerns: props.info.specificConcerns
    }
    this.howConcerned = this.howConcerned.bind(this);
    this.whatConcernLevel = this.whatConcernLevel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  };

  goBack() {
    this.props.goBack(2);
  };

  handleSubmit() {
    console.log('specificConcerns', this.state);
    this.props.submitLogin(this.state)
  };

  noInfo() {
    Alert.alert('You need to input a SPECIFIC TASK')
  };

  howConcerned() {
    if(this.state.potentialInjuries === 1) {
      return concern1
    }
    else if(this.state.potentialInjuries === 2) {
      return concern2
    }
    else if(this.state.potentialInjuries === 3) {
      return concern3
    }
    else if(this.state.potentialInjuries === 4) {
      return concern4
    }
    else if(this.state.potentialInjuries === 5) {
      return concern5
    }
    else {
      return concern6
    }
  };

  whatConcernLevel() {
    if(this.state.potentialInjuries === 1) {
      return 'Minor Injuries'
    }
    else if(this.state.potentialInjuries === 2) {
      return 'Recordable Injuries'
    }
    else if(this.state.potentialInjuries === 3) {
      return 'Reverisble Injuries'
    }
    else if(this.state.potentialInjuries === 4) {
      return 'Irreverisble Injuries'
    }
    else if(this.state.potentialInjuries === 5) {
      return 'Single Fatality'
    }
    else {
      return 'Many Fatalities'
    }
  };

  render() {
    let concern = this.howConcerned();
    let concernLevel = this.whatConcernLevel();

    return(
      <KeyboardAwareScrollView
        scrollEnabled={ true }
        contentContainerStyle={ styles.display }>
        <View style={styles.question}>
          <Text style={ styles.prompt }>CONCERNS</Text>
          <Image source={ concern } style={styles.concernIcon}/>
          <Slider
            maximumValue={ 6 }
            maximumTrackTintColor= 'green'
            minimumValue={ 1 }
            minimumTrackTintColor= 'red'
            onSlidingComplete ={ () => this.howConcerned() }
            onValueChange={ (potentialInjuries) => this.setState({ potentialInjuries }) }
            step={ 1 }
            style={ styles.slider}
            value={ this.state.potentialInjuries }  />
            <Text>{ concernLevel }</Text>
          <Text>{ this.state.potentialInjuries }</Text>
          <Text style={ styles.prompt }>Specific Concerns</Text>
          <TextInput
            style={ styles.input }
            multiline= { true }
            placeholder='Specific Concerns'
            onChangeText={ (specificConcerns) => this.setState({ specificConcerns }) }
            value={ this.state.specificConcerns } />
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
  concernIcon: {
    height: 80,
    margin: 15,
    width: 80,
  },
  slider: {
    width: 200
  }
});

export default Question3;
