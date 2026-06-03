import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <span className="not-found-card__code">404</span>

        <h1>Pagina non trovata</h1>

        <p>
          La pagina che stai cercando non esiste oppure è stata spostata.
        </p>

        <Link className="not-found-card__button" to="/tickets">
          Torna ai tickets
        </Link>
      </div>
    </section>
  );
}