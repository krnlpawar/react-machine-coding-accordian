import react, { useState } from "react";

const AccordianItem = ({ item, activeAccordian, toggleAccordian, showOne }) => {
  const [itemActive, setItemActive] = useState(false);

  const handleAccordianState = () => {
    setItemActive((prev) => !prev);
  };

  const accordianActive = showOne ? item.id == activeAccordian : itemActive;

  return (
    <div className="accordion-item" key={item.id}>
      <button
        className="accordion-button"
        onClick={() =>
          showOne ? toggleAccordian(item.id) : handleAccordianState()
        }
      >
        <span className="accordion-title">{item.title}</span>
        <span className="accordion-icon">{accordianActive ? "-" : "+"}</span>
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

export default AccordianItem;
