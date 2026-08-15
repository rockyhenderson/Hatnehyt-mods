function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

export default function ModCard({ mod }) {
  return (
    <article className="mod-card">
      <div className="mod-card__media">
        <img
          src={mod.icon}
          alt=""
          className="mod-card__icon"
          loading="lazy"
        />

        {mod.featured && <span className="featured">FEATURED</span>}
      </div>

      <div className="mod-card__body">
        <div className="mod-card__title-row">
          <div>
            <h3>{mod.name}</h3>
            <p className="version">v{mod.version}</p>
          </div>

          <div className="badges" aria-label="Compatibility">
            <Badge>MC {mod.minecraft}</Badge>
            <Badge>{mod.loader}</Badge>
          </div>
        </div>

        <p className="mod-card__description">{mod.description}</p>

        {mod.features?.length > 0 && (
          <ul className="feature-list">
            {mod.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <a
          className="download-button"
          href={mod.downloadUrl}
          target={mod.downloadUrl.startsWith("http") ? "_blank" : undefined}
          rel={mod.downloadUrl.startsWith("http") ? "noreferrer" : undefined}
          download={!mod.downloadUrl.startsWith("http") || undefined}
        >
          <span>Download</span>
          <span className="download-button__version">v{mod.version}</span>
          <span className="download-button__arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </article>
  );
}
