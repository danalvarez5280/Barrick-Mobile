import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Question2 from '../components/Question2';
import SafetyBox from '../components/SafetyBox';
import { Button, Image, Slider, Text, TextInput, TouchableHighlight } from 'react-native';

import renderer from 'react-test-renderer';

const q2Submit = jest.fn();
const howRisky = jest.fn();
const risksChecked = jest.fn();
const logOut = jest.fn();
const goBack = jest.fn();
const mockRiskList = ['grab hard hat', 'be safe'];
const mockState = {
  riskLevel: 1,
  specificRisk: 'working near gas line',
  risksList: ['grab hard hat', 'be safe']
};

const setup = () => {
  return shallow(<Question2
    submitLogin={ q2Submit }
    goBack={ goBack }
    risksChecked={ risksChecked }
    risksList={ mockRiskList }
    info={ mockState }
    logOut={ logOut } />)
};

it('renders correctly', () => {

  const tree = renderer.create(
    <Question2
    submitLogin={ q2Submit }
    goBack={ goBack }
    risksChecked={ risksChecked }
    risksList={ mockRiskList }
    info={ mockState }
    logOut={ logOut } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have one icon rendered', () => {
  let question2 = setup();

  expect(question2.find(Image).length).toEqual(1);
});

it('should have 4 texts displayed', () => {
  let question2 = setup();

  expect(question2.find(Text).length).toEqual(4);
});

it('should have a text input area', () => {
  let question2 = setup();

  expect(question2.find(TextInput).length).toEqual(1);
});

it('should have 2 safety check boxes', () => {
  let question2 = setup();

  expect(question2.find(SafetyBox).length).toEqual(2);
});

it('should be able to log out', () => {
  let question2 = setup();

  expect(question2.find(Button).length).toEqual(3);
  question2.find(Button).last().simulate('press');
  expect(logOut).toHaveBeenCalled();
});

it('should be able to submit the information', () => {
  let question2 = setup();

  expect(question2.find(Button).length).toEqual(3);
  question2.find(Button).first().simulate('press');
  expect(q2Submit).toHaveBeenCalled();
  expect(risksChecked).toHaveBeenCalled();
});

it('should be able to submit the information', () => {
  let question2 = setup();

  expect(question2.find(Button).length).toEqual(3);
  question2.find(Button).at(1).simulate('press');
  expect(goBack).toHaveBeenCalled();
});

it.skip('should have a slider bar to set the risk', () => {
  let question2 = setup();

  expect(question2.find(Slider).length).toEqual(1);
  question2.find(Slider).simulate('ValueChange');
  expect(howRisky).toHaveBeenCalled();
});

it.skip('should set an icon to the page based on the risk level', () => {
  let question2 = setup();

  question2.instance().howRisky();
});
