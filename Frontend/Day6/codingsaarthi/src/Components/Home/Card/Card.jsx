import React from "react";

function Card(props) {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <div class="card col-6 m-4">
        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={handleClick(props.title)} class="btn btn-primary">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;