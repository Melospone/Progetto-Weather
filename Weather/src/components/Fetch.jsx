import React, { useState } from "react";
import BarraRicerca from "./SearchBar";
import RisultatiMeteo from "./ResultWeather";
import { Container } from "react-bootstrap";

function FetchWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&units=metric`
         );
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error("Errore nel recupero dei dati meteorologici:", error);
    }
  };

  return (
    <>
      <Container  className=" p-5 radius my-5 rounded-5 w-25 ">
        <BarraRicerca
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>

      <Container className="d-flex justify-content-center">
        <RisultatiMeteo city={city} weatherData={weatherData} />
      </Container>
    </>
  );
}

export default FetchWeather;
