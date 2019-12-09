import React from 'react';
import './Weather.css';
import { properties } from './properties.js';

function Weather(props) {

  let detailsClassNames = 'details ';
  if (props.visible === 0) {
    detailsClassNames = detailsClassNames + 'not-visible';
  }

  let iconUrl;
  if (props.icon !== '') {
    iconUrl = properties.api_image_url.replace("[icon]", props.icon);
  } else {
    iconUrl = '';
  }

  return (
    <div className="weather-info">
      <div className={ detailsClassNames }>
        <div className="temperature">{ props.temp }°</div>
        <div className="summary">
          <img className="icon" src={ iconUrl } alt="Weather icon" />
          { props.city }
        </div>
        <div className="humidity">humidity: { props.humidity }%</div>
        <div className="pressure">pressure: { props.pressure }hPa</div>
        <div className="tempMin">Min: { props.tempMin }°</div>
        <div className="tempMax">Max: { props.tempMax }°</div>
      </div>
    </div>
  );
}

export default Weather;
