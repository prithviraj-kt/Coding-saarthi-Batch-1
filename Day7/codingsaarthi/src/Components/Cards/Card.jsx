import React from "react";

function Card({ name }) {
  //   const handleClick = () => {
  //     alert("Hello");
  //   };
  return (
    <div>
      <div class="card w-50 m-4">
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <button onClick={handleClick} class="btn btn-primary">
            Display Title name
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
