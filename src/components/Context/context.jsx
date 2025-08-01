import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [api, setApi] = useState([]);
  const [coin, setCoin] = useState({
    name: 'usd',
    symbol: '$',
  });
  const fetchdata = async() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-53khjFjR3bT7hcVrnBWij61f",
      },
    };

    await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${coin.name}`,
      options
    )
   
      .then((res) => res.json())
      .then((res) => setApi(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchdata();
  }, [coin]);
  const Contextvalue = {
    api,coin,
    setCoin,
  };
  return (
    <CoinContext.Provider value={Contextvalue}>
        {children}
    </CoinContext.Provider>
  );
};
export default CoinContextProvider;
