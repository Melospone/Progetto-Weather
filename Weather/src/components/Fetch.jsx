import React, { useState } from "react";
import BarraRicerca from "./SearchBar";
import RisultatiMeteo from "./ResultWeather";
import { Container} from "react-bootstrap";

function FetchWeather() {
  /* tutti gli stati per gestire stato SearchBar, meteo, e mete0 giorni successivi */
  const [city, setCity] = useState(""); /* stato iniziale con stringa vuota perche all'inizio dek render pagina non vogliamo vedere nessun dato caricato */
  const [weatherData, setWeatherData] = useState(null);
  const [day, setDay] = useState(null);



  /* costante che richiama funzione per gestire la chiamata api, nella prima prendiamo i dati  */

  /* prima fetch */
  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
      );
      const data = await response.json();

      setWeatherData(data);

    } catch (error) {
      console.error("Errore nel recupero dei dati ", error);
    }
  };


  /* seconda fetch */
  const fetchForecast = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`);
      const data = await response.json();
      setDay(data);

      console.log(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };


  /* funzione che richiama le 2 funzioni async per le Fetch */
  const handleSearch = () => {
    if (city.length > 3) {

      fetchSearch();
      fetchForecast();
    }
  };


  return (

    /* stiamo passando i dati prelevati dalla api per poi mandarli come prorps in ResultWeather e popolare la card in piu gestione searchBar con dati che devono arrivarci dall'untente e che restituisce dati API  */
    <>
      <Container className="p-5 radius my-5 rounded-5 w-25">
        <BarraRicerca
          city={city}
          handleSearch={handleSearch}
          setCity={setCity} />
      </Container>

      <Container className="d-flex justify-content-center">
        <RisultatiMeteo
          city={city}
          weatherData={weatherData}
          day={day} />

      </Container>
    </>
  );
}

export default FetchWeather;