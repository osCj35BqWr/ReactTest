import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from "./components/Results";
import { useState } from 'react';

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
      e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=064415a68df54a1b9c882942212305&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
      }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
