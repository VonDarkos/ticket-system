import type { Ticket } from "../types/ticket";
import TicketCard from "./TicketCard";
import "./TicketsList.css";

type TicketListProps = {
  tickets: Ticket[];
};

export default function TicketsList({ tickets }: TicketListProps) {
  if (tickets.length === 0) {
    return <p className="tickets-list__empty">Nessun Ticket Trovato</p>;
  }

  return (
    <section className="tickets-table">
      <h2>Ticket recenti</h2>

      <div className="tickets-table__header">
        <span>Ticket</span>
        <span>Oggetto</span>
        <span>Stato</span>
        <span>Priorità</span>
        <span>Aggiornato</span>
        <span>Azioni</span>
      </div>

      <div className="tickets-table__body">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </section>
  );
}