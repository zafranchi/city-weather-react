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
      city,
      visible
    } = this.props;

    let detailsClassNames = 'details ';
    if (visible == 0) {
      detailsClassNames = detailsClassNames + 'not-visible';
    }

    let iconUrl;
    if (icon != '') {
      iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";;
    } else {
      iconUrl = '';
    }
    
    return (
      <React.Fragment>
        <div className="weather-info">
          <div className={ detailsClassNames }>
            <div className="temperature">{ temp }°</div>
            <div className="summary">
              <img className="wicon" src={ iconUrl } alt="Weather icon" />
              { city }
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
