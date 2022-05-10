import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";

function CountryCapitalGame({data}) {
  const dataObject = [];
  const dataArr = [];
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  for (let x = 0; x < Object.keys(data).length; x++) {
    dataObject[x] = {
      contrie: Object.keys(data)[x],
      capital: Object.values(data)[x],
    };
  }

  for (let x = 0; x < Object.keys(data).length; x++) {
    dataArr.push(
      { name: Object.keys(data)[x], matched: false },
      { name: Object.values(data)[x], matched: false }
    );
  }

  const shuffle = () => {
    const shuffledCards = dataArr
      .sort(() => Math.random() - 0.5)
      .map((cards) => cards);
    setCards(shuffledCards);
  };

  const handleChoise = (card) => {
    choiceOne ? setChoiceTwo(card.name) : setChoiceOne(card.name);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      const checkCountrie = dataObject.find(
        (e) => e.contrie === choiceOne || e.capital === choiceOne
      );
      if (
        (checkCountrie.contrie === choiceOne &&
          checkCountrie.capital === choiceTwo) ||
        (checkCountrie.capital === choiceOne &&
          checkCountrie.contrie === choiceTwo)
      ) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.name === choiceOne || card.name === choiceTwo) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        alert("Right answer!!");
        reset();
      } else {
        alert("Wrong answer!!");
        reset();
      }
    }
  }, [choiceOne, choiceTwo]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <div className="App">
      <button onClick={shuffle}>Start Game</button>
      <div className="cards">
        {cards.map((card, index) => (
          <Button
            key={index}
            card={card}
            handleChoise={handleChoise}
            flipped={card.name === choiceOne || card.name === choiceTwo}
            matched={card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default CountryCapitalGame;