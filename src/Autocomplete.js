import React, { useState, useEffect } from 'react';
import './Autocomplete.css';
import Weather from './Weather';
import AutocompleteItems from './AutocompleteItems';
import cityNamesData from './ca_cities.json';
import { properties } from './properties.js';


function Autocomplete() {

  const [options, setOptions] = useState([]);
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [weatherVisibility, setWeatherVisibility] = useState(0);
  const [weather, setWeather] = useState(
    {
      icon: '',
      temp: '',
      pressure: '',
      humidity: '',
      tempMin: '',
      tempMax: ''
    }
  );

  /**
    Reading city names from a local json file
  **/
  useEffect(() => {
    let loadedData = JSON.parse(JSON.stringify(cityNamesData));
    let cityNames = [];
    loadedData.map((item, key) =>
      cityNames.push(item.city)
    );
    setOptions(cityNames);

  } , []);

  /**
    When the user enters value, the filtered options should be updated
  **/
  const handleChange = (event) => {

    let userInputValue = event.target.value;
    let filteredOptionValues = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInputValue.toLowerCase()) > -1
    );

    setActiveOption(0);
    setFilteredOptions(filteredOptionValues);
    setShowOptions(true);
    setUserInput(event.target.value);
    setWeatherVisibility(0);
  };

  /**
    When the user clicks on an option, the filtered options should not be displayed
  **/
  const handleClick = (event) => {
    setActiveOption(0);
    setFilteredOptions([]);
    setShowOptions(false);
    setUserInput(event.target.innerText);
    setWeatherVisibility(0);
  };

  /**
    When the user travers the list by the keyboard, the selected option should be changed
  **/
  const handleKeyDown = (event) => {

    if (event.keyCode === 13) { //enter key
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOption]);

    } else if (event.keyCode === 38) { // up arrow
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);

    } else if (event.keyCode === 40) { // down arrow
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      setActiveOption(activeOption + 1);
    }

    setWeatherVisibility(0);

  };

  /**
    Getting weather information by calling Open Weather API
  **/
  const getWeatherInfo = (event) => {

    let kelvinSource = 273.15;
    let url = properties.api_call_url.replace("[userInput]", userInput);

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        if(data.main !== undefined) {
          setWeatherVisibility(1);
          setWeather({
            temp: Math.round((data.main.temp - kelvinSource)),
            tempMin: Math.round((data.main.temp_min - kelvinSource)),
            tempMax: Math.round((data.main.temp_max - kelvinSource)),
            humidity: (data.main.humidity),
            pressure: (data.main.pressure),
            icon: (data.weather[0].icon)
          });
        }
      })
      .catch(console.log);
  };

  return (
    <div>
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
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={userInput}
          />
          <input
            type="submit"
            value=""
            className="search-btn"
            onClick={getWeatherInfo}
           />
        </div>
        <AutocompleteItems
          showOptions={showOptions}
          filteredOptions={filteredOptions}
          activeOption={activeOption}
          userInput={userInput}
          handleClick={handleClick}
        />
      </div>

      <div className="weather-container">
        <Weather
          icon={weather.icon}
          temp={weather.temp}
          pressure={weather.pressure}
          humidity={weather.humidity}
          tempMin={weather.tempMin}
          tempMax={weather.tempMax}
          visible={weatherVisibility}
          city={userInput}
        />
      </div>
    </div>
  );

}

export default Autocomplete;
