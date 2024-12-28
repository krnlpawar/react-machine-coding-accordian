import React, { useState } from "react";
const Accordian = ({ items, showOne=true}) => {
  const [activeAccordian, setActiveAccordian] = useState(1);
  const [showOneOnly, setShowOneOnly] = useState(showOne);

  const toggleAccordian = (id) => {
    setActiveAccordian((activeAccordian) => (activeAccordian === id ? 0 : id));
  };

  if (items?.length == 0) {
    return (<div className="accordion">Nothing to see here....</div>)
  }

  return (
    <>
      <div className="accordion">
        {items.map((item) => {
          return (
            <SingleAccordian
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

const SingleAccordian = ({ item, activeAccordian, toggleAccordian, showOne }) => {
  const [itemActive, setItemActive] = useState(false);

  const handleAccordianState = () => {
	setItemActive((prev) => !prev)
  }

  const accordianActive = showOne ? item.id == activeAccordian : itemActive
  
  return (
    <div className="accordion-item" key={item.id}>
      <button
        className="accordion-button"
        onClick={() => showOne ? toggleAccordian(item.id) : handleAccordianState()}
      >
        <span className="accordion-title">{item.title}</span>
        <span className="accordion-icon">
          { accordianActive ? "-" : "+"}
        </span>
      </button>
      <div
        className={`accordion-content ${
          accordianActive ? "accordion-active" : ""
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </div>
    </div>
  );
};

export default Accordian;
