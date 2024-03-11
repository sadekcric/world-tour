import { useState } from 'react';
import './Country.css'

const Country = ({country,index, handleClickVisitedCountry}) => {

  // console.log(country);
  
  const {name, flags, population, area
  }=country


  const [visited, setVisited]=useState(false)

  const handleClick=()=>{
    setVisited(!visited);
    
  }

 


  return (
    <div className='card'>
      <h2>({index+1}) {name.common}</h2>
      <img src={flags.png} alt="" />
      <h4>Population: {population}</h4>
      <h4>Area: {area} (sq. km)</h4>

      

      <button onClick={handleClick}>{visited?'Visited':'Visit'}</button>

      <br /><br />

      <button onClick={()=>handleClickVisitedCountry(country)}>Mark Visited</button>

      
    </div>
  );
};

export default Country;