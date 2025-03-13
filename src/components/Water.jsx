// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';

const Weather = () => {
const [weather, setWeather] = useState(null);
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

useEffect(() => {
fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
.then((res) => res.json())
.then((data) => setWeather(data))
.catch((err) => console.error(err));
}, [API_KEY]);

if (!weather) return <p>Cargando clima...</p>;

return (
<div>
<h3>Clima en {weather.location.name}</h3>
<p>
{weather.current.temp_c}°C, {weather.current.condition.text}
</p>
</div>
);
};

export default Weather;