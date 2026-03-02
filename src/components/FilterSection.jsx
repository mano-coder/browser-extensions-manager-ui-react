export default function FilterSection({ setFilter, filter }) {
  return (
    <section id="filter-section">
      <p>Extensions List</p>
      <div className="button-set">
        <button
          type="button"
          className={filter === "all" ? "selected" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filter === "active" ? "selected" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={filter === "inactive" ? "selected" : ""}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </section>
  );
}
