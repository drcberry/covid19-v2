import React, {useState, useContext} from "react";
import './index.css';

import WorldStats from './components/worldstats';
import CountrySelector from './components/countryselector';
import CountryStats from './components/countrystats';
import StateSelector from './components/stateselector';
import StateStats from './components/statestats';
import MyRegion from './components/myregion';
import CountyStats from './components/countystats';
import Footer from './components/footer';
import {ApiContext} from './utils/apicontext';

export default function App() {
  const {country: [isCountry, setIsCountry]} = useContext(ApiContext);
  const {state: [isState, setIsState]} = useContext(ApiContext);
  const {region: [isRegion, setIsRegion]} = useContext(ApiContext);

  
  
  return(
    <div id='covid'>
      
      <h1 > COVID-19 Cases Worldwide</h1>
      
        <WorldStats  />
        <CountrySelector />
        <CountryStats />
          
        <StateSelector />
          
        <StateStats />
        <MyRegion />
        <CountyStats />
        <Footer />
        
      
    </div>
    )       
}