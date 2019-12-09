import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import { mount } from 'enzyme';

it('renders without crashing', () => {

  const weather = mount(<Weather
    icon="04n"
    temp="6"
    pressure="1014"
    humidity="93"
    tempMin="3"
    tempMax="9"
    visible="1"
    city="Toronto"
  />);

  const weatherSummary = weather.find(".summary");
  expect(weatherSummary.text()).toBe("Toronto");

  const weatherDetails = weather.find(".details");
  expect(weatherDetails.hasClass("not-visible")).toBe(false);

});
