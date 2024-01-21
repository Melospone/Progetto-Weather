import { BiWind } from "react-icons/bi"; 
import { TiWeatherCloudy } from "react-icons/ti"; 
import { WiHumidity } from "react-icons/wi"; 
import { WiThermometerExterior } from "react-icons/wi"; 
import { WiThermometer } from "react-icons/wi"; 
import React from 'react';
import Card from 'react-bootstrap/Card';

const RisultatiMeteo = ({ city, weatherData }) => (
  <>
    {city && weatherData && (
      <Card className="search text-center w-25 d-flex">
        <Card.Header className='bodyCard display-5 rounded-5'>{city.toUpperCase()}</Card.Header>
        <Card.Body>
          <Card.Title className='display-5'>{weatherData.main.temp}°C</Card.Title>
          <Card.Text className='h6'><WiThermometer />Temp max: {weatherData.main.temp_max}°C</Card.Text>
          <Card.Text className='h6'><WiThermometerExterior />Temp min: {weatherData.main.temp_min}°C</Card.Text>
          <Card.Text className='h6'><WiHumidity />Humidity: {weatherData.main.humidity}%</Card.Text>
          <Card.Text className='h6'><TiWeatherCloudy />Weather: {weatherData.weather[0].description}</Card.Text>
          <Card.Text className='h6'><BiWind />Wind: {weatherData.wind.speed}KM/h</Card.Text>
        </Card.Body>
      </Card>
    )}
  </>
);

export default RisultatiMeteo;