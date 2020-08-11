import React, {useState, createContext} from 'react';

export const ApiContext = createContext([]);

export const ApiData = ({children}) => {

  const [isCountry, setIsCountry] = useState('US');
  const [isState, setIsState] = useState('Texas');
  const [isRegion, setIsRegion] = useState();

  
  const apiStore = {
    country: [isCountry, setIsCountry], state: [isState, setIsState],
    region: [isRegion, setIsRegion]  
  }

  

  return <ApiContext.Provider value={apiStore}>{children}</ApiContext.Provider>
}