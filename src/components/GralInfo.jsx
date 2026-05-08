import { useState } from "react";

export function GralInfo() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submittedInfo = {
    name: "",
    email: "",
    phone: "",
  };

  function toggleForm() {
    const formElement = document.querySelector(".gral-info-form");
    formElement.classList.toggle("hide");
  }

  function handleAccordion(e) {
    const btn = e.currentTarget;
    toggleForm();
    if (!openAccordion) {
      btn.classList.remove("accordion-closed");
      btn.classList.add("accordion-opened");
    } else {
      btn.classList.add("accordion-closed");
      btn.classList.remove("accordion-opened");
    }
    setOpenAccordion(!openAccordion);
  }

  function handleSubmit(e) {
    e.preventDefault();
    submittedInfo.name = document.querySelector("#name").value;
    submittedInfo.email = document.querySelector("#email").value;
    submittedInfo.phone = document.querySelector("#phone").value;
    toggleForm();
  }

  if (!submitted) {
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
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
