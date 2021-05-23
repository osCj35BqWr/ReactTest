import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from "./components/Results";
import { useState } from 'react';

function App() {
  const [city, setCity] = useState<string>("");
  type ResultsStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
    }
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
    });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=064415a68df54a1b9c882942212305&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
    }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
