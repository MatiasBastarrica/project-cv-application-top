import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function GralInfo({ previewData, updatePreviewData }) {
  const [submission, setSubmission] = useState({
    submitted: false,
    name: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    submission.name = document.querySelector("#name").value;
    submission.email = document.querySelector("#email").value;
    submission.phone = document.querySelector("#phone").value;
    setSubmission({ ...submission, submitted: true });
    updatePreviewData({
      ...previewData,
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
    });
  }

  function handleEdit(e) {
    setSubmission({ ...submission, submitted: false });
  }

  function childrenElements() {
    if (!submission.submitted) {
      return (
        <form action="#" className=" gral-info-form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={submission.name} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={submission.email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              defaultValue={submission.phone}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <div className="form-values-display">
          <p>Name: {submission.name}</p>
          <p>Email: {submission.email}</p>
          <p>Phone: {submission.phone}</p>
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      );
    }
  }

  return (
    <Accordion title={"General Information"}>{childrenElements()}</Accordion>
  );
}
