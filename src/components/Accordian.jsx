import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
const Accordian = ({ items, showOne = true }) => {
  const [activeAccordian, setActiveAccordian] = useState(1);
  const [showOneOnly, setShowOneOnly] = useState(showOne);

  const toggleAccordian = (id) => {
    setActiveAccordian((activeAccordian) => (activeAccordian === id ? 0 : id));
  };

  if (items?.length == 0) {
    return <div className="accordion">Nothing to see here....</div>;
  }

  return (
    <>
      <div className="accordion">
        {items.map((item) => {
          return (
            <AccordianItem
              item={item}
              activeAccordian={activeAccordian}
              toggleAccordian={toggleAccordian}
              showOne={showOneOnly}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
