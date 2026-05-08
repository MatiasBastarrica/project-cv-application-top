export function PracticalExp() {
  return (
    <div className="cv-form-field">
      <h2>Practical experience</h2>
      <form action="#">
        <div>
          <label htmlFor="name">Company name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Position title</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Main responsabilities</label>
          <input type="number" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="work-start-date">Start date</label>
          <input type="date" name="work-start-date" id="work-start-date" />
          <label htmlFor="work-end-date">End date</label>
          <input type="date" name="work-end-date" id="work-end-date" />
        </div>
      </form>
    </div>
  );
}
