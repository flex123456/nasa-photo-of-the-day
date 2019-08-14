import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';
const CardContent = () => {
    const [nasaData, setNasaData]= useState([]);
    console.log(nasaData)
    useEffect(() => {
          axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9blwVFUnMed89wkaL9X8zjE5hJe5mtDnczkcQwg9')
            .then(res => setNasaData(res.data))

      }, []);
    
    return <Card data={nasaData} />
}

export default CardContent;