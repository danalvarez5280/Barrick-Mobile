import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Question4 from '../components/Question4';
import { Button, Image, Slider, Text, TextInput, TouchableHighlight } from 'react-native';

import SafetyBox from '../components/SafetyBox';

import renderer from 'react-test-renderer';

const q4Submit = jest.fn();
const controlsChecked = jest.fn();
const logOut = jest.fn();
const goBack = jest.fn();
const mockState = {
  checkedControls: true,
  specificSafetyMeasures: 'I could stub my toe',
  checkList: ['wear rubber gloves', 'lockout/tagout', 'check locks']
};

const setup = () => {
  return shallow(<Question4
    submitLogin={ q4Submit }
    controlsChecked={ controlsChecked }
    goBack={ goBack }
    info={ mockState }
    logOut={ logOut } />)
};



it('renders correctly', () => {

  const tree = renderer.create(
    <Question4
    submitLogin={ q4Submit }
    goBack={ goBack }
    controlsChecked={ controlsChecked }
    info={ mockState }
    logOut={ logOut } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
