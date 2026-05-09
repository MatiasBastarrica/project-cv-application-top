import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function EdExp() {
  const [submission, setSubmission] = useState({
    submitted: false,
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    submission.schoolName = document.querySelector("#school-name").value;
    submission.titleOfStudy = document.querySelector("#title-of-study").value;
    submission.startDate = document.querySelector("#ed-start-date").value;
    submission.endDate = document.querySelector("#ed-end-date").value;
    setSubmission({ ...submission, submitted: true });
  }

  function handleEdit(e) {
    setSubmission({ ...submission, submitted: false });
  }

  function childrenElements() {
    if (!submission.submitted) {
      return (
        <form action="#" className=" ed-exp-form">
          <div>
            <label htmlFor="school-name">School name</label>
            <input
              type="text"
              id="school-name"
              defaultValue={submission.schoolName}
            />
          </div>
          <div>
            <label htmlFor="title-of-study">Title of study</label>
            <input
              type="text"
              name="title-of-study"
              id="title-of-study"
              defaultValue={submission.titleOfStudy}
            />
          </div>
          <div className="date-inputs-container">
            <div>
              <label htmlFor="ed-start-date">Start date</label>
              <input
                type="date"
                name="ed-start-date"
                id="ed-start-date"
                defaultValue={submission.startDate}
              />
            </div>
            <div>
              <label htmlFor="ed-end-date">End date</label>
              <input
                type="date"
                name="ed-end-date"
                id="ed-end-date"
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
          <p>School name: {submission.schoolName}</p>
          <p>Title of study: {submission.titleOfStudy}</p>
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
    <Accordion title={"Educational experience"}>{childrenElements()}</Accordion>
  );
}
