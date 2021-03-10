import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      imgUrl:
        "https://static01.nyt.com/images/2019/11/01/multimedia/01xp-elonmusk/merlin_162496989_edfc836d-1bcf-45b1-8c42-68eaaac5d1de-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      name: "Jeff Bezos",
      imgUrl:
        "https://techcrunch.com/wp-content/uploads/2019/10/jeff-bezos-iac-2019-1.jpeg?w=730&crop=1",
    },
  ]);

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
            <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
              <h3>{person.name}</h3>
            </div>
        
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
