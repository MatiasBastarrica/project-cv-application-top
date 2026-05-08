export function GralInfo() {
  return (
    <div className="cv-form-field">
      <h2>General information</h2>
      <form action="#">
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
