import React from "react";

import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function Weekly({todayStat}) {
  const {state} = React.useContext(ApiContext);
  const {data} = React.useContext(DataContext);
  const prevWeek = new Date();
  prevWeek.setDate(prevWeek.getDate() -7);
  //console.log(today)
  const [month,day,year] = [today.getMonth()+1,today.getDate(),today.getFullYear()];
  const yesterday = `${month}-${day}-${year}`;
  
  const {stats,loading,error} =useStats(`https://covid19.mathdro.id/api/daily/${yesterday}`);
  if(stats) setTodayData(stats); 
  if(loading) return <p>Looking for data...</p>;
  if(error) return <p>Aw Man! No Data!</p>;
  //Daily stats values are String
  const dailyChange = todayData.filter(e=>e.provinceState===isState).reduce((a,b)=>{return a+ parseInt(b.confirmed)},0);

  return (
    <div>
      {dailyChange !== 0 ? <p>Daily Change: + {(todayStat - dailyChange).toLocaleString()}</p> : ''}
      
    </div>
   )
}