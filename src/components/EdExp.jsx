export function EdExp() {
  return (
    <div className="cv-form-field">
      <h2>Educational experience</h2>
      <form action="#">
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
