import React, { useEffect,useState } from "react";
import Chart from "react-google-charts";
export function Charts({ historicaldata }) {
     const [data, setdata] = useState([["data","prices"]])
     useEffect(() => {
        let datacopy = [["data", "prices"]];
        if(historicaldata.prices){
            historicaldata.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setdata(datacopy)
        }
     }, [historicaldata]);
  return <div>
    <Chart
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle/>
  </div>;
}
  