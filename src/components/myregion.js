import React, {useContext} from "react";

import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function MyRegion() {
  const {state:[isState, setIsState]} = useContext(ApiContext);
  const {data: [isData, setIsData]} = useContext(DataContext);
  
  const counties = ['Anderson','Angelina','Brazos','Cherokee','Houston','Leon','Madison','Nacogdoches','Trinity','Walker'];
  const myCounties = isData.filter(e => e.provinceState === 'Texas').filter(rgn => counties.includes(rgn.admin2));
  const hasData = myCounties.map(c=>c.admin2);
  const noData = counties.filter(e=>!hasData.includes(e));
  
  const isTexas = (isState === 'Texas');
//console.log(myCounties,noData); 
  return (
    <div>
      <h3><br />
        { (isTexas) && <span>Houston County Region: </span>}
      </h3>
      <br />
      { (isTexas) &&<div className='box'>
        {
          myCounties.map((stat, index)=>(<div key={index} className='stat-box'><h3>{stat.admin2}</h3><br /> <span className='confirmed'>Confirmed: {stat.confirmed.toLocaleString()}</span><br /><span className='deaths'>Deaths: {stat.deaths.toLocaleString()}</span></div>))
          } 
      {noData.map((e, index)=><div key={index} className='stat-box'><h3>{e}</h3><br /><span className='deaths'>No Reported Cases</span></div>)}
        </div>}
    </div>
    
  )
}