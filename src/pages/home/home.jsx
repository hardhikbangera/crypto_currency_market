import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { CoinContext } from "../../components/Context/context";
import { Link, useParams } from "react-router-dom";
export function Home({}) {
  const { coinId } = useParams();
  const { api, coin } = useContext(CoinContext);
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const handlebtn=(e)=>{
    setInput(e.target.value)
  }
  const submitbtn=(e)=>{
    e.preventDefault();
    const got=api.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase());
    })
    setData(got)
  }
  useEffect(() => {
    setData(api);
  }, [api]);
  return (
    <div>
      <div className="grid justify-center items-center text-white h-100 w-[30vw] m-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Largest Crypto Marketplace</h2>
        </div>
        <div className="text-center">
          <p>
            Welcome to largest Crypto currency Marketplace where you will find
            lot of data to excell trading skill.
          </p>
        </div>
        <div className="flex justify-center items-center h-14">
          <form className="border rounded-2xl bg-white " onSubmit={submitbtn}>
            <input
              type="text"
              placeholder="seach crypto..."
              className="rounded-l-2xl  p-2 text-black focus:outline-none "
              onChange={handlebtn}
              value={input}
              list="coinlist"
            />
            <datalist id="coinlist">
              {api.map((item, index) => {
                return <option key={index} value={item.name} />;
              })}
            </datalist>
            <button className="border p-2 m-1 rounded-xl bg-purple-600 text-white cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="grid text-white w-[40vw] m-auto  p-3">
        <div className="flex justify-between text-white w-full m-auto border p-3">
          <p>#</p>
          <p>Coins</p>

          <p>price</p>
          <p>24Hr change</p>
          <p>Marketcap</p>
        </div>
        {data.slice(0, 10).map((item, index) => {
          return (
            <Link
              to={`/coin/${item.id}`}
              key={index}
              className="flex justify-between text-white w-full m-auto border p-3 "
            >
              <p>{item.market_cap_rank}</p>
              <div className="text-center">
                <img src={item.image} alt="error" className="w-7" />
                <p>{item.id + "-" + item.symbol}</p>
              </div>

              <p className="text-center">
                {item.current_price.toLocaleString()}
                {coin.symbol}
              </p>
              <p
                className={
                  item.price_change_24h > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {Math.floor(item.price_change_24h * 100) / 100}%
              </p>
              <p className="text-center">
                {coin.symbol}
                {item.market_cap.toLocaleString()}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
