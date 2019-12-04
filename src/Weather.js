import React, { Component } from 'react';
import './Weather.css';

export class Weather extends Component {


  render() {

    const {
      icon,
      temp,
      pressure,
      humidity,
      tempMin,
      tempMax,
      city
    } = this.props;

    let cityName;
    if (city != '') {
      cityName = city;
    } else {
      cityName = '';
    }

    let visibility;
    if (temp == '0' || temp != '') {
      visibility = '';
    } else {
      visibility = 'not-visible';
    }

    let iconUrl;
    if (icon != '') {
      iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";;
    } else {
      iconUrl = '';
    }

    let detailsClassNames = 'details ' + visibility;

    return (
      <React.Fragment>
        <div className="weather-info">
          <div className={ detailsClassNames }>
            <div className="temperature">{ temp }°</div>
            <div className="summary">
              <img className="wicon" src={ iconUrl } alt="Weather icon" />
              { cityName }
            </div>
            <div className="humidity">humidity: { humidity }%</div>
            <div className="pressure">pressure: { pressure }hPa</div>
            <div className="tempMin">Min: { tempMin }°</div>
            <div className="tempMax">Max: { tempMax }°</div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Weather;
