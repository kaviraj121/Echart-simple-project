import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

function Scatterchart() {
  let newData = [];
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("./Wine-Data.json").then((res) => {
      setCoins(res.data);

      console.log(res.data);
    });
  }, []);

  coins.map((coin) => {
    return newData.push([coin.Color_intensity, coin.Hue]);
  });

  const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 5,
        data: newData,
        type: "scatter",
      },
    ],
  };

  return <ReactEcharts option={option} />;
}

export default Scatterchart;
