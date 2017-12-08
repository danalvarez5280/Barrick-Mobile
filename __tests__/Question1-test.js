import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Question1 from '../components/Question1';
import { Button, Image, Text, TextInput, TouchableHighlight } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const q1Submit = jest.fn();
const setControls = jest.fn(args => console.log("i got called! " + args));
const setRisks = jest.fn(args => console.log("i got called, sucka! " + args));
const logOut = jest.fn();
// const selectTaskType = jest.fn();
const mockState = {
  specificTask: "Electrical"
};

const setup = () => {
  return shallow(<Question1
    submitLogin={ q1Submit }
    setControls={ setControls }
    setRisks={ setRisks }
    info={ mockState }
    logOut={ logOut } />)
};

const resetMocks = () => {
  setControls.mockClear()
  setRisks.mockClear()
}

beforeEach(() => {
  resetMocks()
})

it('renders correctly', () => {

  const tree = renderer.create(
    <Question1
    submitLogin={ q1Submit }
    setControls={ setControls }
    setRisks={ setRisks }
    info={ mockState }
    logOut={ logOut }/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 5 texts displayed', () => {
  let question1 = setup();

  expect(question1.find(Text).length).toEqual(5);
});

it('should have a text input area', () => {
  let question1 = setup();

  expect(question1.find(TextInput).length).toEqual(1);
});

it('should have an 3 images, one for each task type, each one should be a touchable TouchableHighlight', () => {
  let question1 = setup();

  expect(question1.find(Image).length).toEqual(3);
  expect(question1.find(TouchableHighlight).length).toEqual(3);
});

it('should be able to set the task type', () => {
  let question1 = setup();

  const selectTaskTypeSpy = jest.spyOn(question1.instance(), 'selectTaskType').mockImplementation(() => {});
  expect(question1.find(TouchableHighlight).length).toEqual(3);
  question1.find(TouchableHighlight).first().simulate('press');
  expect(selectTaskTypeSpy).toHaveBeenCalledWith('Transportation');
  question1.find(TouchableHighlight).last().simulate('press');
  expect(selectTaskTypeSpy).toHaveBeenCalledWith('Maintenance');
  question1.find(TouchableHighlight).at(1).simulate('press');
  expect(selectTaskTypeSpy).toHaveBeenCalledWith('Electrical');
});


it('can log out the user', () => {
  let question1 = setup();

  expect(question1.find(Button).length).toEqual(2);
  question1.find(Button).last().simulate('press');
  expect(logOut).toHaveBeenCalled();
});

it('should be able to submit the answers to question 1', () => {
  let question1 = setup();

  expect(question1.find(Button).length).toEqual(2);
  question1.find(Button).first().simulate('press');
  expect(q1Submit).toHaveBeenCalled();
});

it('should set the electric risks when they are fetched', async () => {
  fetch.mockResponse(JSON.stringify([{body: 'thing1'}, {body: 'thing2'}]))
  let question1 = setup();

  await question1.instance().getElectricRisks()
  expect(setRisks).toHaveBeenCalledWith(['thing1', 'thing2']);
  expect(setRisks).toHaveBeenCalled();
});

it('sets electric controls when they are fetched', async () => {
  fetch.mockResponse(JSON.stringify([{body: 'thing1'}, {body: 'thing2'}]))
  let question1 = setup();

  await question1.instance().getElectricControls()
  expect(setControls).toHaveBeenCalledWith(['thing1', 'thing2'])
  expect(setControls).toHaveBeenCalled();
});
