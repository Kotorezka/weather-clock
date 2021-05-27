import React, {useState} from 'react';
import {FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <h1 >Search city</h1>
        <FormControl style={{width: '18rem', marginTop: '10px'}}
          placeholder="Enter city"
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />
        {/* don't forget to edit our function  */}
        <Button style={{width: '18rem', marginTop: '10px'}} variant='outline-dark' onClick={() => onSearch(city)}>Check Weather</Button>
      </>
    );
  };

export default CitySelector;