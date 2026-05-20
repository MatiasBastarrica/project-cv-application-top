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
    const inputs = [
      document.querySelector("#name"),
      document.querySelector("#email"),
      document.querySelector("#phone"),
    ];

    if (!document.querySelector(".gral-info-form").checkValidity()) {
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (input.validity.valueMissing) {
          input.setCustomValidity("Please fill out this field");
        } else if (input.validity.typeMismatch) {
          console.log("mismatch");
          input.setCustomValidity("Please adhere to the format");
        } else {
          input.setCustomValidity("");
        }
        input.reportValidity();
        if (!input.checkValidity()) {
          break;
        }
      }
    } else {
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
            <input
              required
              type="text"
              id="name"
              defaultValue={submission.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              defaultValue={submission.email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              required
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
