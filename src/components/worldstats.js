import React from "react";
import {box,statBox,confirmed,deaths,recovered} from '../style.css';
import useStats from '../utils/usestats';

export default function WorldStats() {
  const url="https://covid19.mathdro.id/api/"
  const {stats,loading,error} = useStats(url);
  //console.log('log',stats,loading,error);
  if(loading) return <p>Looking for stats...</p>
  if(error) return <p>Aw Man!No Stats!</p>;
  
  return (
      <div className={box}>
        <div className={statBox}>
          <h3>Confirmed:</h3>
          <span className={confirmed}>
            {stats.confirmed.value.toLocaleString()}
          </span>
        </div>
        <div className={statBox}>
          <h3>Deaths:</h3>
          <span className={deaths}>{stats.deaths.value.toLocaleString()}</span>
        </div>
        <div className={statBox}>
          <h3>Recovered:</h3>
          <span className={recovered}>{stats.recovered.value.toLocaleString()}</span>
        </div>
     </div>
  )
}
