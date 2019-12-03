import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Autocomplete'


function App() {
  return (
    <div className="App">
      <Autocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple'
        ]}
      />
    </div>
  );
}

export default App;
