import { useState } from "react";

export function GralInfo() {
  const [openAccordion, setOpenAccordion] = useState(false);

  function handleAccordion(e) {
    const formElement = document.querySelector(".gral-info-form");
    const btn = e.currentTarget;
    formElement.classList.toggle("hide");
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
    <div className="cv-form-field">
      <div className="field-title">
        <h2>General information </h2>
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
      <form action="#" className="hide gral-info-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" />
        </div>
      </form>
    </div>
  );
}
