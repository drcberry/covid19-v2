import React from "react";
import {select,selector} from '../style.css';
import useStats from '../utils/usestats';
import {ApiContext} from '../utils/apicontext';

export default function CountrySelector() {
  const {country:[isCountry, setIsCountry]} = React.useContext(ApiContext);
  
  const {stats:countries,loading,error} = useStats("https://covid19.mathdro.id/api/countries/");
  if(loading) return <p>Looking for data...</p>;
  if(error) return <p>Aw Man! No Data!</p>;
  
  const keys = (countries.countries).map(e=>e.name);
    
  return(
    <div className={selector}>
      <h3>
        COVID-19 Cases for Country: <br /><span>{isCountry}</span>
      </h3>
      <select  onChange={e=>setIsCountry(e.target.value)}>
        {keys.map((key) =>(<option selected={key===isCountry} key={key} value={key}>{key}</option>))}
      </select>
    </div> 
  )
}