import { useState } from "react";

export function EdExp() {
  const [openAccordion, setOpenAccordion] = useState(false);

  function handleAccordion(e) {
    const formElement = document.querySelector(".ed-exp-form");
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
        <h2>Educational experience</h2>
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
      <form action="#" className="hide ed-exp-form">
        <div>
          <label htmlFor="school-name">School name</label>
          <input type="text" id="school-name" />
        </div>
        <div>
          <label htmlFor="title-of-study">Title of study</label>
          <input type="text" name="title-of-study" id="title-of-study" />
        </div>
        <div className="date-inputs-container">
          <div>
            <label htmlFor="ed-start-date">Start date</label>
            <input type="date" name="ed-start-date" id="ed-start-date" />
          </div>
          <div>
            <label htmlFor="ed-end-date">End date</label>
            <input type="date" name="ed-end-date" id="ed-end-date" />
          </div>
        </div>
      </form>
    </div>
  );
}
