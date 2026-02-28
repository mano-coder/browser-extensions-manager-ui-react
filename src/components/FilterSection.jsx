export default function FilterSection() {
  return (
    <section id="filter-section">
      <p>Extensions List</p>
      <div className="button-set">
        <button type="button" className="selected">
          All
        </button>
        <button type="button">Active</button>
        <button type="button">Inactive</button>
      </div>
    </section>
  );
}
