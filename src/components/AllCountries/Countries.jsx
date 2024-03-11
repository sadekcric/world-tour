import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {

  const [countries, setCountries]=useState([]);
  const [visitedCountry, setVisitedCountry]=useState([]);
  const [flags, setFlag]=useState([])


  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
      .then(response=>response.json())
      .then(data=>setCountries(data))

  },[]);



  const handleClickVisitedCountry=(country)=>{
    
      const newVisitedCountry = [...visitedCountry, country];
      setVisitedCountry(newVisitedCountry);


      handleClickVisitedFlag(country.flags.png)
  }



  const handleClickVisitedFlag = (visitedFlag) =>{

    const newVisitedFlag = [...flags, visitedFlag]
    setFlag(newVisitedFlag)
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
          {
            flags.map((flag,index)=><li key={index}><img src={flag} alt="" /></li>)
          }
        </ul>


      </div>

      
      <div className="layout">
      {
        countries.map((country,index)=><Country country={country} index={index} key={index} handleClickVisitedCountry={handleClickVisitedCountry} />)
      }
      </div>
    </div>
  );
};

export default Countries;

