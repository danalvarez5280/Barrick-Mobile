import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Question3 from '../components/Question3';
import { Button, Image, Slider, Text, TextInput, TouchableHighlight } from 'react-native';

import renderer from 'react-test-renderer';

const q3Submit = jest.fn();
const setConcerns = jest.fn();
const logOut = jest.fn();
const goBack = jest.fn();
const mockState = {
  potentialInjuries: 1,
  specificConcerns: 'I could stub my toe',
  whatConcern: 'Minor Injuries'
};

const setup = () => {
  return shallow(<Question3
    submitLogin={ q3Submit }
    setConcerns={ setConcerns }
    goBack={ goBack }
    info={ mockState }
    logOut={ logOut } />)
};


it('renders correctly', () => {

  const tree = renderer.create(
    <Question3
    submitLogin={ q3Submit }
    goBack={ goBack }
    setConcerns={ setConcerns }
    info={ mockState }
    logOut={ logOut } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render 4 texts on the page', () => {
  let question3 = setup();

  expect(question3.find(Text).length).toEqual(4);
});

it('should render 1 image based on concern', () => {
  let question3 = setup();

  expect(question3.find(Image).length).toEqual(1);
});

it('should render 1 slider on the page', () => {
  let question3 = setup();

  expect(question3.find(Slider).length).toEqual(1);
});

it('should render 1 text input on the page', () => {
  let question3 = setup();

  expect(question3.find(TextInput).length).toEqual(1);
});

it('should render 3 buttons on the page', () => {
  let question3 = setup();

  expect(question3.find(Button).length).toEqual(3);
});

it('should be able to submit information', () => {
  let question3 = setup();

  question3.find(Button).first().simulate('press');
  expect(q3Submit).toHaveBeenCalled();
  expect(setConcerns).toHaveBeenCalled();
});

it('should be able to go back to a previous page', () => {
  let question3 = setup();

  question3.find(Button).at(1).simulate('press');
  expect(goBack).toHaveBeenCalled();
});

it('should be able to log out', () => {
  let question3 = setup();

  question3.find(Button).last().simulate('press');
  expect(logOut).toHaveBeenCalled();
});
