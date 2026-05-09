import { useState } from "react";
import { Accordion } from "./Accordion.jsx";

export function GralInfo() {
  const [submission, setSubmission] = useState({
    submitted: false,
    name: "",
    email: "",
    phone: "",
  });

  // function toggleForm() {
  //   const formElement = document.querySelector(".gral-info-form");
  //   formElement.classList.toggle("hide");
  // }

  function handleSubmit(e) {
    e.preventDefault();
    submission.name = document.querySelector("#name").value;
    submission.email = document.querySelector("#email").value;
    submission.phone = document.querySelector("#phone").value;
    // toggleForm();
    setSubmission({ ...submission, submitted: true });
    console.log(submission);
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
        <>
          <p>Name: {submission.name}</p>
          <p>Email: {submission.email}</p>
          <p>Phone: {submission.phone}</p>
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </>
      );
    }
  }

  return (
    <Accordion title={"General Information"}>{childrenElements()}</Accordion>
  );

  // if (!submitted) {
  //   return (
  //     <div className="cv-form-field">
  //       <div className="field-title">
  //         <h2>General information </h2>
  //         <button
  //           type="button"
  //           className="accordion-closed"
  //           onClick={handleAccordion}
  //         >
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  //             <title>Expand form field</title>
  //             <path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" />
  //           </svg>
  //         </button>
  //       </div>
  //       <form action="#" className="hide gral-info-form">
  //         <div>
  //           <label htmlFor="name">Name</label>
  //           <input type="text" id="name" />
  //         </div>
  //         <div>
  //           <label htmlFor="email">Email</label>
  //           <input type="email" name="email" id="email" />
  //         </div>
  //         <div>
  //           <label htmlFor="phone">Phone</label>
  //           <input type="number" name="phone" id="phone" />
  //         </div>
  //         <button type="submit" onClick={handleSubmit}>
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }
}
