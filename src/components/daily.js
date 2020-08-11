import React, {useContext} from 'react';

import useStats from '../utils/usestats';
import {ApiContext} from '../utils/apicontext';
import {DataContext} from '../utils/datacontext';

export default function Daily({todayStat}) {
  const {state: [isState, setIsState]} = useContext(ApiContext);
  const {daily: [todayData, setTodayData]} = useContext(DataContext);
  //const {dayBeforeData: [dayBeforeData, setDayBeforeData]} = useContext(DataContext);
  const today = new Date();
  const dayBefore = new Date();
  dayBefore.setDate(dayBefore.getDate() -1);
  
  const [month,day,year] = [dayBefore.getMonth()+1,dayBefore.getDate(),dayBefore.getFullYear()];
  let yesterday = `${month}-${day}-${year}`;
  if(yesterday.length<=9) {yesterday='0' + yesterday}
  
  const {stats,loading,error} =useStats(`https://covid19.mathdro.id/api/daily/${yesterday}`);
  if(stats) setTodayData(stats); 
  if(loading) return <p>Looking for data...</p>;
  if(error) return <p>Aw Man! No Data!</p>;
  //Daily stats values are String
  const prevDay = todayData.filter(e=>e.provinceState===isState).reduce((a,b)=>{return a+ parseInt(b.confirmed)},0);
console.log(todayStat,prevDay,yesterday)
  return (
    <div>
      <p>Daily Change(Today): + {(todayStat - prevDay).toLocaleString()}</p>
      
    </div>
   )
}