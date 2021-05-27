import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({data}) => {
  // create a date object with Date class constructor

  //dt={data.dt} temp_min={data.main.temp_min} temp_max={data.main.temp_max} main={data.weather.main} icon={data.weather.icon}
  const date = new Date(data.dt * 1000);
  return (
    <Card bg='dark' text='light' style={{width: '18rem', marginTop: '10px'}}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`${process.env.REACT_APP_ICON_URL}${data.weather[0].icon}@4x.png`}
      />
      <Card.Body>
        <Card.Title>{data.weather[0].main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {data.main.temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {data.main.temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;