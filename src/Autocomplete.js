import React, { Component } from 'react';
import './Autocomplete.css';
import Weather from './Weather';
import PropTypes from 'prop-types';

export class Autocomplete extends Component {

  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };

  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    weather: {
      icon: '',
      temp: '',
      pressure: '',
      humidity: '',
      tempMin: '',
      tempMax: '',
      city: ''
    }
  };

  onChange = (e) => {

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
      weather: {
        temp: '',
        tempMin: '',
        tempMax: '',
        humidity: '',
        pressure: '',
        icon: '',
        city: ''
      }
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      weather: {
        temp: '',
        tempMin: '',
        tempMax: '',
        humidity: '',
        pressure: '',
        icon: '',
        city: ''
      }
    });
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) { //enter key
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
        weather: {
          temp: '',
          tempMin: '',
          tempMax: '',
          humidity: '',
          pressure: '',
          icon: '',
          city: ''
        }
      });
    } else if (e.keyCode === 38) { // up arrow
      if (activeOption === 0) {
        return;
      }
      this.setState({
        activeOption: activeOption - 1,
        weather: {
          temp: '',
          tempMin: '',
          tempMax: '',
          humidity: '',
          pressure: '',
          icon: '',
          city: ''
        }
      });
    } else if (e.keyCode === 40) { // down arrow
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({
        activeOption: activeOption + 1,
        weather: {
          temp: '',
          tempMin: '',
          tempMax: '',
          humidity: '',
          pressure: '',
          icon: '',
          city: ''
        }
      });
    }
  };

  getWeatherInfo = (e) => {
    const {
      weather,
      userInput
    } = this.state;

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userInput + ',ca&APPID=1eb0b87458ee60378c9b2bba190c0dc4')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          weather: {
            temp: Math.round((data.main.temp - 273.15)),
            tempMin: Math.round((data.main.temp_min - 273.15)),
            tempMax: Math.round((data.main.temp_max - 273.15)),
            humidity: (data.main.humidity),
            pressure: (data.main.pressure),
            icon: (data.weather[0].icon),
            city: userInput
          }
        })
      })
      .catch(console.log);
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      getWeatherInfo,

      state: {
        activeOption,
        filteredOptions,
        showOptions,
        userInput,
        weather
      }
    } = this;

    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <div className="search-container">
          <div className="search">
            <div className="hint">
              <p>
                Please choose the city and click
              </p>
              <p>
                on the search button to see its weather:
              </p>
            </div>
            <input
              type="text"
              className="search-box"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
            />
            <input
              type="submit"
              value=""
              className="search-btn"
              onClick={getWeatherInfo}
             />
          </div>
          {optionList}
        </div>

        <div className="weather-container">
          <Weather
            icon={ weather.icon }
            temp={ weather.temp }
            pressure={ weather.pressure }
            humidity={ weather.humidity }
            tempMin={ weather.tempMin}
            tempMax={ weather.tempMax }
            city={ userInput }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Autocomplete;
