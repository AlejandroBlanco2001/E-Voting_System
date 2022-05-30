import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from 'axios'
import React, {useState, useEffect } from 'react';
import Gov from "../assets/col.svg";


const Result = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const [data,setData] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios
        .get("http://localhost:8000/votes/stats")
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            setLoading(false);
        })
    }, [loading])
    
    if(loading){
        return <h3>Loading...</h3>
    }

    return (
      <div>
        <div id="BarranquillaGov">
          <object data={Gov} alt="LogoGov"></object>
        </div>
        <div class="results">
          <h3>Estado actual de las votaciones</h3>
          <Doughnut data={data} />
        </div>
      </div>
    );
};

export default Result;
