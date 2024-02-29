export default function TodoFilterForm() {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="filter">Name</label>
        <input type="text" id="filter" />
      </div>
      <label>
        <input type="checkbox" /> Hide Completed
      </label>
    </div>
  );
}
