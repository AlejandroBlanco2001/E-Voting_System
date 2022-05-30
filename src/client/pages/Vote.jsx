import "../styles/index.scss";  
import CardVote from "../components/cardVote";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Gov from "../assets/col.svg";
import { Button } from "react-bootstrap";

const Vote = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState();

  const isLogged = () => {
    axios.get("http://localhost:8000/auth/checkUser");
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/info/candidates")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        console.log("DATABASE ERROR");
      });
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="voteSection">
      <div id="BarranquillaGov">
        <object data={Gov} alt="LogoGov"></object>
      </div>
      <div class="candidateList">
        <h2>Selecciona tu candidato</h2>
        {data.map((item, index) => {
          let { name, party, description, image } = item;
          return (
            <CardVote
              key={item}
              name={name}
              party={party}
              description={description}
              img={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vote;
