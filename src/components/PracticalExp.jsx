import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function PracticalExp() {
  const [submission, setSubmission] = useState({
    submitted: false,
    companyName: "",
    positionTitle: "",
    mainResponsabilities: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    submission.companyName = document.querySelector("#company-name").value;
    submission.positionTitle = document.querySelector("#position-title").value;
    submission.mainResponsabilities = document.querySelector(
      "#main-responsabilities",
    ).value;
    submission.startDate = document.querySelector("#work-start-date").value;
    submission.endDate = document.querySelector("#work-end-date").value;
    setSubmission({ ...submission, submitted: true });
  }

  function handleEdit(e) {
    setSubmission({ ...submission, submitted: false });
  }

  function childrenElements() {
    if (!submission.submitted) {
      return (
        <form action="#" className=" practical-exp-form">
          <div>
            <label htmlFor="company-name">Company name</label>
            <input
              type="text"
              id="company-name"
              defaultValue={submission.companyName}
            />
          </div>
          <div>
            <label htmlFor="position-title">Position title</label>
            <input
              type="text"
              name="position-title"
              id="position-title"
              defaultValue={submission.positionTitle}
            />
          </div>
          <div>
            <label htmlFor="main-responsabilities">Main responsabilities</label>
            <input
              type="text"
              name="main-responsabilities"
              id="main-responsabilities"
              defaultValue={submission.mainResponsabilities}
            />
          </div>
          <div className="date-inputs-container">
            <div>
              <label htmlFor="work-start-date">Start date</label>
              <input
                type="date"
                name="work-start-date"
                id="work-start-date"
                defaultValue={submission.startDate}
              />
            </div>
            <div>
              <label htmlFor="work-end-date">End date</label>
              <input
                type="date"
                name="work-end-date"
                id="work-end-date"
                defaultValue={submission.endDate}
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <div className="form-values-display">
          <p>Company name: {submission.companyName}</p>
          <p>Position title: {submission.positionTitle}</p>
          <p>Main responsabilities: {submission.mainResponsabilities}</p>
          <p>Start date: {submission.startDate}</p>
          <p>End date: {submission.endDate}</p>
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      );
    }
  }

  return (
    <Accordion title={"Practical experience"}>{childrenElements()}</Accordion>
  );
}
