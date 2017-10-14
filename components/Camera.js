import React, { Component } from 'react';

import {
  AppRegistry,
  Button,
  Image,
  Keyboard,
  ScrollView,
  Slider,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { Camera } from 'react-native-camera';


class PhotoTaker extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { Aspect, CaptureTarget, Orientation } = Camera.constants;
    return(
    <View>
      <Camera ref={ (cam) => this.camera = cam() }
        style={ styles.camera }
        captureTarget={ CaptureTarget.disk }
        orientation={ Orientation.auto }
        onFocusChange={ (e) => {} }
        onZoomChange={ (e) => {} }>
      </Camera>
    </View>
    )
  }
};
const styles = StyleSheet.create({
  camera: {
    height:20,
  }

});

export default PhotoTaker;
