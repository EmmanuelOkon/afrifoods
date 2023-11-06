import React, { useState } from "react";
import Item from "../utils/Item.js";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Test = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };

  const myArrow = ({ type, onClick }) => {
    const pointer =
      type === "PREV" ? (
        <div className="arrow-prev"></div>
      ) : (
        <div className="arrow-next"></div>
      );
    return (
      <div className="arrow-wrapper" onClick={onClick}>
        {pointer}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
          renderArrow={myArrow}
          enableSwipe={true}
          swipeable={true}
          itemsToScroll={1}
          isRTL={false}
          enableMouseSwipe={true}
          transitionMs={1000}
          easing="ease"
          tiltEasing="ease"
          transitionMsTilt={100}
          tiltAngle={10}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          tiltMaxZoomOut={100}
          tiltTransformPerspective={1000}
          tiltTransformOrigin="50% 50%"
          onPrevEnd={({ index }) => {
            if (index === 0) {
              // Wrap around to the last item
              setItems([items[items.length - 1], ...items.slice(0, -1)]);
            }
          }}
          onNextEnd={({ index }) => {
            if (index === items.length - 1) {
              setItems([...items.slice(1), items[0]]);
            }
          }}
        >
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Test;
