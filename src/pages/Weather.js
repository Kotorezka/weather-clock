import React from 'react';
import CitySelector from '../components/CitySelector';
import '../App.css';
import {Container, Button, Spinner} from 'react-bootstrap';
import UseFetch from '../hooks/UseFetch';
import { Link } from "react-router-dom";
import WeatherCard from '../components/WeatherCard';

function Weather  () {
    
        const {data, error, isLoading, setUrl} = UseFetch(); 
        const getContent = () => {
            if(error) return <h2>Error when fetching: {error}</h2>
            if(!data && isLoading) 
            return <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
            if(!data) return null;
            return <WeatherCard data={data} />
        };
        const handleChange = (city) => {
            setUrl(`${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        }   
        return (
            <Container className="container">
                <CitySelector onSearch={(city) => handleChange(city)} />
                {getContent()}
                <Link to="/">
                    <Button variant='dark' style={{width: '18rem', marginTop: '10px'}}>Back</Button>
                </Link>
            </Container>
        );
    
}

export default Weather