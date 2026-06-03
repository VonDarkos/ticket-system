import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  const location = useLocation();
  const isTicketsPage = location.pathname === "/tickets";

  return (
    <div className="app-layout">
      <header className="app-header">
        <NavLink className="app-logo" to="/tickets">
 <img
  className="app-logo__image"
  src="/logo-tycket-system.png"
  alt="Ticket System"
/>
</NavLink>

        {!isTicketsPage && (
          <NavLink className="app-header__button" to="/tickets">
            ← Torna ai ticket
          </NavLink>
        )}
      </header>

      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}