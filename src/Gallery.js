import React from "react";
import { Component, useState } from "react";
import { sculptureList } from "./Data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let item = sculptureList[index];

    function handleNextClick(){
        if (hasNext){
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
    }
    
  return (
    <div>
      <section onClick={handleNextClick}>
        <button>Next</button>
      </section>

      <h2>
        <i>{item.name}</i>
        {' '} by {item.artist}
      </h2>

      <h3>
        {index + 1} of {sculptureList.length}
      </h3>

      <section>
        <button onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{item.description}</p>}
      </section>

      <section>
        <img src={item.url}></img>
      </section>
    </div>
  );
}
