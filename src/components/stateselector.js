import React, {useContext, useEffect} from "react";
import useStats from '../utils/usestats';
import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function StateSelector() {
  const {country:[isCountry, setIsCountry], state:[isState, setIsState]} = useContext(ApiContext);
  const {data: [isData, setIsData]} = useContext(DataContext);
//console.log(isCountry)  
  useEffect(() => {
    if(isState!=='Texas' || isCountry!=='US') setIsState(null);
    
    //console.log('useSel',)
  },[isCountry])
  const {stats,loading,error} =useStats(`https://covid19.mathdro.id/api/countries/${isCountry}/confirmed`);
  if(stats) setIsData(stats); 
  if(loading) return <p>Looking for data...</p>;
  if(error) return <p>Aw Man! No Data!</p>
   
  const duplicateStates = isData.map(obj => obj.provinceState);
  const states = [...new Set(duplicateStates)];
//testing
  const noNullStates = states.filter(s=>s);
console.log('STsel',states[0],isState,isCountry,isData); 
  
  return(
    
    <div className='selector'>
      <h3>
           <br />
        <span>{isData[1] ? 'COVID-19 Cases by State/Province:' : 'No State/Province Data'}</span>
      </h3>
      <select  onChange={e=>setIsState(e.target.value)}><option>Select State/Province</option>
        {noNullStates.map((key) =>(<option selected={key===isState} key={key} value={key}>{key}</option>))}
      </select>
      
  </div> 
  )
}