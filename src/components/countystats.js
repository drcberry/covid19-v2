import React, {useContext} from "react";
import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function CountyStats() {
  const {state: [isState, setIsState]} = useContext(ApiContext);
  const {data: [isData, setIsData]} = useContext(DataContext);
//console.log(isState);
  const countyByState = isData.filter(e=>e.provinceState===isState);
  
  const allCounties = countyByState.map(prov=> [prov.combinedKey,prov.confirmed,prov.deaths]);
  const topTen = allCounties.filter(county => allCounties.indexOf(county)<10);
  const topTenObj = topTen.map(key => [key[0],[key[1],key[2]]]);
  const tops = Object.entries(topTenObj);
  const topTenStats = tops.map(a=>{let city=a[1][0];let confirmed=a[1][1][0];let deaths=a[1][1][1];return {city,confirmed,deaths}});
   
  const isCounty = isData.every(e=>e.admin2===null);
  
//console.log('County',countyByState, topTen,isCounty);
  
  return(
     <div>
    
      <h3><br />
        { (!isCounty) ?<span>Top Ten Cases by County: </span> : 'No County Data'}
      </h3>
      <br />
      { (!isCounty) &&<div className='box'>
        {
          topTenStats.map(stat=>(<div className='stat-box'><h3>{stat.city.toLocaleString()}</h3><br /><span className='confirmed'>Confirmed: {stat.confirmed.toLocaleString()}</span><br /><span className='deaths'>Deaths: {stat.deaths.toLocaleString()}</span></div>))
          } 
         </div>} 
    </div>
  )
}