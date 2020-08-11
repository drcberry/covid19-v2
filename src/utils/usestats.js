import { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";

export default function useStats(url) {
  const [stats,setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(()=> {
    async function fetchData() {
      console.log('fetching API');
      const data = await fetch(url);
			
			data
				.json()
			  .then(res => setStats(res))
			  .then(() => setLoading(false))
				.catch(err => setError(err));
      };
    fetchData();
  },[url]);
  //
  return {
    stats,
    loading,
    error,
  }
}