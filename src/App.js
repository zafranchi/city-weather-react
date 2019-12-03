import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Autocomplete'


function App() {
  return (
    <div className="App">
      <Autocomplete
        options={[
          'Toronto',
          'Montréal',
          'Vancouver',
          'Ottawa',
          'Calgary',
          'Edmonton',
          'Hamilton',
          'Winnipeg',
          'Québec',
          'Oshawa',
          'Kitchener',
          'Halifax',
          'London',
          'Windsor',
          'Victoria',
          'Saskatoon',
          'Barrie',
          'Regina'
        ]}
      />
    </div>
  );
}

export default App;
