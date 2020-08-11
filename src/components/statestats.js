import React, {useContext} from "react";

import Daily from './daily';

import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function StateStats() {
  const {country:[isCountry, setIsCountry], state:[isState, setIsState]} = useContext(ApiContext);
  const {data: [isData, setIsData]} = useContext(DataContext);
   
//Working with data array
//console.log('ST',states, isState, isCountry,)
  
  const stateStats = isData.filter(key=>(key.provinceState===isState));
//console.log('SSt',isState,stateStats);
  
    let confirmed = stateStats.reduce((a,b)=>{return a+b.confirmed},0).toLocaleString();
    let deaths = stateStats.reduce((a,b)=>{return a+b.deaths},0).toLocaleString();
    let recovered = stateStats.reduce((a,b)=>{return a+b.recovered},0).toLocaleString();
    
   
  return(
    <div>
    <Daily todayStat={parseInt(confirmed.replace(/\,/g,''))}/>
      
    <div className='box'>
      
        <div className='stat-box'>
          {isState && <h3>Confirmed:</h3>}
          <span className='confirmed'>
            { isState && confirmed}
          </span>
        </div>
        <div className='stat-box'>
          {isState &&<h3>Deaths:</h3>}
          <span className='deaths'>{isState && deaths}</span>
        </div>
        <div className='stat-box'>
          {isState &&<h3>Recovered:</h3>}
          <span className='recovered'>{isState && recovered}</span>
        </div>
     </div>
   </div>
  )
}