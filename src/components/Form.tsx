// Form.tsx
import { useState } from 'react';

const Form = () => {
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("https://api.weatherapi.com/v1/current.json?key=064415a68df54a1b9c882942212305&q=London&aqi=no")
        .then(res => res.json())
        .then(data => console.log(data))
        }

  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
      {city}
      <button type="submit" onClick={getWeather}>Get Weather</button>
    </form>
  );
};
export default Form;
