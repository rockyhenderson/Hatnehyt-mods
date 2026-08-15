import ModCard from "./components/ModCard";
import { mods } from "./data/mods";

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero__grid" aria-hidden="true" />

        <nav className="nav container">
          <a className="brand" href="#top" aria-label="HATNEYHT Mods home">
            <span className="brand__mark">H</span>
            <span>HATNEYHT MODS</span>
          </a>

          <a className="nav__link" href="#mods">
            Mods
          </a>
        </nav>

        <div className="hero__content container" id="top">
          <p className="eyebrow">MINECRAFT MODS</p>
          <h1>
            Small ideas.
            <br />
            <span>Big worlds.</span>
          </h1>

          <p className="hero__copy">
            A collection of Minecraft mods, experiments and challenge projects.
            Download the latest versions below.
          </p>

          <a className="hero__button" href="#mods">
            Browse mods
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <main>
        <section className="mods-section container" id="mods">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COLLECTION</p>
              <h2>Mods</h2>
            </div>

            <p className="mod-count">
              {mods.length} {mods.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <div className="mod-grid">
            {mods.map((mod) => (
              <ModCard key={mod.id} mod={mod} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="brand brand--small">
            <span className="brand__mark">H</span>
            <span>HATNEYHT MODS</span>
          </span>

          <p>Made for Minecraft Java Edition.</p>
        </div>
      </footer>
    </div>
  );
}
