import React from "react";
//import '../style.css';

import useStats from '../utils/usestats';
//import CountrySelector from './countryselector';
import {ApiContext} from '../utils/apicontext';


export default function CountryStats() {
  const {country:[isCountry, setIsCountry]} = React.useContext(ApiContext);
  const url = `https://covid19.mathdro.id/api/countries/${isCountry}`;
 
  const {stats,loading,error} = useStats(url);
    if(loading) return <p>Looking for stats...</p>
    if(error) return <p>Aw Man!No Stats!</p>;
   //console.log('log',stats,loading,error);
  return(
   
    <div className='box'>
      
        <div className='stat-box'>
          <h3>Confirmed:</h3>
          <span className='confirmed'>
            {stats.confirmed.value.toLocaleString()}
          </span>
        </div>
        <div className='stat-box'>
          <h3>Deaths:</h3>
          <span className='deaths'>{stats.deaths.value.toLocaleString()}</span>
        </div>
        <div className='stat-box'>
          <h3>Recovered:</h3>
          <span className='recovered'>{stats.recovered.value.toLocaleString()}</span>
        </div>
     </div>
    )
}