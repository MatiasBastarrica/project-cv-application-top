import { useState } from "react";

export function Accordion({ children, title }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  function handleAccordion(e) {
    const btn = e.currentTarget;
    const accordionContent = document.querySelector(".accordion-content");
    accordionContent.classList.toggle("hide");
    if (!openAccordion) {
      btn.classList.remove("accordion-closed");
      btn.classList.add("accordion-opened");
    } else {
      btn.classList.add("accordion-closed");
      btn.classList.remove("accordion-opened");
    }
    setOpenAccordion(!openAccordion);
  }
  return (
    <div className="accordion-container">
      <div className="accordion-title">
        <h2>{title}</h2>
        <button
          type="button"
          className="accordion-closed"
          onClick={handleAccordion}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Expand form field</title>
            <path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" />
          </svg>
        </button>
      </div>
      <div className="accordion-content hide">{children}</div>
    </div>
  );
}
