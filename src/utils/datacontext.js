import React, {useState, createContext} from 'react';

export const DataContext = createContext([]);

export const ApiStats = ({children}) => {

  const [isData, setIsData] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const [dayBeforeData, setDayBeforeData] = useState([]);
  const [twoDaysBeforeData, setTwoDaysBeforeData] = useState([]);
  const [threeDaysBeforeData, setThreeDaysBeforeData] = useState([]);

  const dataStore = {
    data: [isData, setIsData],
    daily: [todayData, setTodayData], dayBeforeData:[dayBeforeData, setDayBeforeData],twoBefore: [twoDaysBeforeData, setTwoDaysBeforeData], threeBefore: [threeDaysBeforeData, setThreeDaysBeforeData]
  }

  return <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
}