import React, { Component } from 'react';
import './Autocomplete.css';
import Weather from './Weather';
import cityNamesData from './ca_cities.json';


export class Autocomplete extends Component {

  state = {
    options: [],
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    weatherVisibility: 0,
    weather: {
      icon: '',
      temp: '',
      pressure: '',
      humidity: '',
      tempMin: '',
      tempMax: ''
    }
  };

  /**
    Reading city names from a local json file
  **/
  componentDidMount() {
    var loadedData = JSON.parse(JSON.stringify(cityNamesData));
    var cityNames = [];
    loadedData.map((item, key) =>
      cityNames.push(item.city)
    );
    this.setState({
      options : cityNames
    });
  }

  /**
    When the user enters value, the filtered options should be updated
  **/
  onChange = (e) => {

    const { options } = this.state;
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
      weatherVisibility: 0
    });
  };

  /**
    When the user clicks on an option, the filtered options should not be displayed
  **/
  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      weatherVisibility: 0
    });
  };

  /**
    When the user travers the list by the keyboard, the selected option should be changed
  **/
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) { //enter key
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });

    } else if (e.keyCode === 38) { // up arrow
      if (activeOption === 0) {
        return;
      }
      this.setState({
        activeOption: activeOption - 1
      });

    } else if (e.keyCode === 40) { // down arrow
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({
        activeOption: activeOption + 1
      });
    }

    this.setState({
      weatherVisibility: 0
    });
  };

  /**
    Getting weather information by calling Open Weather API
  **/
  getWeatherInfo = (e) => {
    const {
      weather,
      userInput
    } = this.state;

    var kelvinSource = 273.15;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + ',ca&APPID=1eb0b87458ee60378c9b2bba190c0dc4')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          weatherVisibility: 1,
          weather: {
            temp: Math.round((data.main.temp - kelvinSource)),
            tempMin: Math.round((data.main.temp_min - kelvinSource)),
            tempMax: Math.round((data.main.temp_max - kelvinSource)),
            humidity: (data.main.humidity),
            pressure: (data.main.pressure),
            icon: (data.weather[0].icon)
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
        weatherVisibility,
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
                Choose the city and click
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
            visible={ weatherVisibility }
            city={ userInput }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Autocomplete;
