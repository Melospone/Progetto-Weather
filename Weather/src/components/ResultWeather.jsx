import React from 'react';
import Card from 'react-bootstrap/Card';

const RisultatiMeteo = ({ city, weatherData }) => (
  <>
    {city && weatherData && (
      <Card className="search text-center w-25 d-flex">
        <Card.Header className='bodyCard display-5 rounded-5'>{city.toUpperCase()}</Card.Header>
        <Card.Body>
          <Card.Title className='display-4'>{weatherData.main.temp}°C</Card.Title>
          <Card.Text className='small-text'>Temp max: {weatherData.main.temp_max}°C</Card.Text>
          <Card.Text className='small-text'>Temp min: {weatherData.main.temp_min}°C</Card.Text>
          <Card.Text className='small-text'>Humidity: {weatherData.main.humidity}%</Card.Text>
          <Card.Text className='small-text'>Weather: {weatherData.weather[0].description}</Card.Text>
          <Card.Text className='small-text'>Wind: {weatherData.wind.speed}KM/h</Card.Text>
        </Card.Body>
      </Card>
    )}
  </>
);

export default RisultatiMeteo;