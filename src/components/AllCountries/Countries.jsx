import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {

  const [countries, setCountries]=useState([]);
  const [visitedCountry, setVisitedCountry]=useState([]);


  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
      .then(response=>response.json())
      .then(data=>setCountries(data))

  },[]);



  const handleClickVisitedCountry=(country)=>{
    
      const newVisitedCountry = [...visitedCountry, country];
      setVisitedCountry(newVisitedCountry);
  }

  

  return (
    <div>
      <h3> Countries: {countries.length}</h3>


      <div>
        <h4>Visited Country</h4>
        <p>Total Visit: {visitedCountry.length}</p>


        <ul>
          {
            visitedCountry.map((country,index)=><li key={index}>{country.name.common}</li>)
          }
        </ul>


      </div>

      
      <div className="layout">
      {
        countries.map((country,index)=><Country country={country} index={index} key={index} handleClickVisitedCountry={handleClickVisitedCountry}/>)
      }
      </div>
    </div>
  );
};

export default Countries;