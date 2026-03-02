export default function ExtensionSection({ extensionList }) {
  const extensionMap = extensionList.map(
    ({ logo, name, description, isActive }) => {
      return (
        <div className="card" data-name="${name}" key={name}>
          <div className="card-header">
            <div className="logo-wrapper">
              <img src={logo} alt={`${name} Logo`} />
            </div>
            <div className="content">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="card-footer">
            <button className="remove-btn">Remove</button>
            <div className="toggle-switch">
              <label className="slider-container">
                <input
                  type="checkbox"
                  className={`sr-only `}
                  checked={isActive}
                  onChange={() => {}}
                  aria-label={`Toggle status for ${name}`}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      );
    },
  );
  return <section id="extensions-section">{extensionMap}</section>;
}
