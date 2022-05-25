import "../styles/index.scss";  
import CardVote from "../components/cardVote";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Vote = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState();

  const sendForm = (event) => {
    axios.post("http://localhost:8000/votes/send",{

    })
};

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
      <form onSubmit={sendForm}>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default Vote;
