import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import instance from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
 
  useEffect(()=> {
    const fetchData = async() => {
      const request = await instance.get('/tinder/cards');
      setPeople(request.data);
    }

    fetchData();
  },[])

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete)
  }

  const outOfFrame = (name) =>{
    console.log(name + " :left the screen!")
  }
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
          >
            <div className="card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <h3>{person.name}</h3>
            </div>
        
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
