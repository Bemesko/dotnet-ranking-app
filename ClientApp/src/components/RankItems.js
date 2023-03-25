import React, { useState, useEffect } from "react";
import MovieImages from "./MoveImages";
import RankingGrid from "./RankingGrid";

export const RankItems = () => {
  const [items, setItems] = useState([]);
  // Type 1 = Movies, 2 = Albums
  const dataType = 1;

  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    allowDrop();
    const targetElement = event.target;

    if (targetElement.nodeName === "IMG") {
      return false;
    }

    if (targetElement.childNodes.length === 0) {
      var data = parseInt(event.dataTransfer.getData());
    }
  }

  useEffect(() => {
    // Makes an HTTP GET to the backend
    fetch(`item/${dataType}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <main>
      <RankingGrid items={items} imageArray={MovieImages} />
      <div className="items-not-ranked">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="unranked-cell">
              <img
                id={`item-${item.id}`}
                src={MovieImages.find((o) => o.id === item.imageId)?.image}
              />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
};
