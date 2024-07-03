import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG"
        alt="" width={333}
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
