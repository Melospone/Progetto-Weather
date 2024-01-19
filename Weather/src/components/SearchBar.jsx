import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

const BarraRicerca = ({ city, setCity, handleSearch }) => {
  const img =
    "https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar rounded-3 justify-content-center bg-light"
      >
        <img src={img} width="70" height="70" className="my-3" alt="Weather Icon" />

        <Form className="d-flex mx-3" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={city}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            aria-label="Search"
            className="custom-input"
          />
          <Button type="submit" variant="outline-info mx-3 rounded-5">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default BarraRicerca;