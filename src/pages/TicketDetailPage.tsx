import { Link, useParams } from "react-router-dom";
import { useTicketsContext } from "../features/tickets/context/TicketContext";
import TicketPriorityBadge from "../features/tickets/components/TicketPriorityBadge";
import TicketStatusBadge from "../features/tickets/components/TicketStatusBadge";
import "./TicketDetailPage.css";

export default function TicketDetailPage() {


    const{getTicketById} =useTicketsContext()

    const{ticketId} = useParams()
    if(!ticketId){
        return <h1>Ticket non trovato</h1>
    }


    const ticket = getTicketById(ticketId)
    
    if(!ticket){
        return<h1>Ticket non trovato</h1>
    }

    const createdDate = new Date(ticket.createdAt);
    const updatedDate = new Date(ticket.updatedAt);

    const formattedCreatedDateTime = createdDate.toLocaleString("it-IT");
    const formattedUpdatedDateTime = updatedDate.toLocaleString("it-IT");



  return (
  <section className="ticket-detail-page">
    <div className="ticket-detail-card">
      <div className="ticket-detail-card__priority-ribbon">
        <TicketPriorityBadge priority={ticket.priority} />
      </div>

      <header className="ticket-detail-card__header">
        <div>
          <span className="ticket-detail-card__id">#{ticket.id}</span>

          <div className="ticket-detail-card__dates">
            <p>Creato il {formattedCreatedDateTime}</p>
            <p>Aggiornato il {formattedUpdatedDateTime}</p>
            <TicketStatusBadge status={ticket.status} />
          </div>

          <h1>{ticket.title}</h1>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.link && (
        <div className="ticket-detail-card__section">
          <h2>Link allegato</h2>

          <a
            className="ticket-detail-card__link"
            href={ticket.link}
            target="_blank"
            rel="noreferrer"
          >
            Apri link allegato
          </a>
        </div>
      )}

      {ticket.image && (
        <div className="ticket-detail-card__section">
          <h2>Immagine allegata</h2>

          <div className="ticket-detail-card__image-box">
            <img src={ticket.image} alt={ticket.title} />

            <a
              className="ticket-detail-card__download"
              href={ticket.image}
              download={`ticket-${ticket.id}-image.png`}
            >
              Scarica immagine
            </a>
          </div>
        </div>
      )}

      <Link className="ticket-detail-card__back" to="/tickets">
        ← Torna alla lista
      </Link>
    </div>
  </section>
);
}
