import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

function Barchart() {
  let alchol = [];
  let malic = [];
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("./Wine-Data.json").then((res) => {
      setCoins(res.data);

      console.log(res.data, alchol, malic);
    });
  }, []);

  coins.map((coin) => {
    alchol.push(coin.Alcohol);
    malic.push(coin.Malic_Acid);
  });

  const option = {
    xAxis: {
      type: "category",
      data: alchol,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: malic,
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} width={500} />;
}

export default Barchart;
