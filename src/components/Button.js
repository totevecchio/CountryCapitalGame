function Button({ card, handleChoise, flipped, matched }) {
    const handleClick = () => {
      handleChoise(card);
    };
  
    return (
      <div style={matched ? { display: "none" } : {}}>
        <button
          onClick={handleClick}
          style={
            flipped ? { backgroundColor: "blue" } : { backgroundColor: "white" }
          }
        >
          {card.name}
        </button>
      </div>
    );
  }

  export default Button