import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './Autocomplete';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {

  const search = mount(<Autocomplete />);

  const inputSearch = search.find(".search-box");

  inputSearch.simulate('change', { target: { value: 'tor' } });

  const selectedOption = search.find(".option-active");

  expect(selectedOption.text()).toBe("Toronto");

});
