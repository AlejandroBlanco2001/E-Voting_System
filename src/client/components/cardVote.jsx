import axios from 'axios'

const sendVote = () =>{
  return this.name
} 

const VoteCard = ({name, description, party, img}) => {

    return (
      <div>
        <div class="candidatesCard" onClick={sendVote}>
          <div class="imageContainer">
            <img src={img} alt="candidate"></img>
          </div>
          <div class="candidateText">
            <h3>{name}</h3>
            <span>{party}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default VoteCard