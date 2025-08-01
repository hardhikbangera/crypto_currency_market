import { Charts } from '../../components/chart/chart';
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../components/Context/context";

export function Coin({}) {
  const { coinId } = useParams();
  const [api, setApi] = useState()
  const [historicaldata, setHistoricaldata] = useState()
  const {coin}=useContext(CoinContext)
  const fetchdata=()=>{
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-53khjFjR3bT7hcVrnBWij61f",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setApi(res))
      .catch((err) => console.error(err));
  }
  const fetchhistoricaldata=async()=>{
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-53khjFjR3bT7hcVrnBWij61f",
      },
    };

    await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${coin.name}&days=10&Interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricaldata(res))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchdata();
    fetchhistoricaldata();
  }, [coin]);
  if(api && historicaldata){

    return (
      <div className="text-white justify-center text-center w-[60vw] m-auto">
        <div>
          <img src={api.image.large} alt="error" className='flex m-auto'/>
        </div>
        <p className='text-2xl font-serif'>
          {api.name} ({api.symbol.toUpperCase()})
        </p>
        <Charts historicaldata={historicaldata} />
        <div className='w-[30vw] flex-col m-auto mt-10'>

        <div>
          <ul className='flex justify-evenly p-2'>
            <li>Market Rank</li>
            <li>{api.market_cap_rank}</li>
          </ul>
        </div>
        <hr />
        <div>
          <ul className='flex justify-evenly p-2'>
            <li>Current price</li>
            <li>{coin.symbol}{api.market_data.current_price[coin.name].toLocaleString()}</li>
          </ul>
        </div>
        <hr />

        </div>
        
      </div>
    );
} else{
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
      <p className="ml-3 text-white">Loading...</p>
    </div>
  );
}

}
  