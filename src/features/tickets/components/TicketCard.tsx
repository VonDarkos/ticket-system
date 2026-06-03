
import type { Ticket, TicketStatus } from "../types/ticket";
import { Link, useNavigate } from "react-router-dom";
import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriorityBadge from "./TicketPriorityBadge";
import { useTicketsContext } from "../context/TicketContext";
import "./TicketCard.css";
//si occupa del singolo elemento

type TicketCardProps = {
    ticket:Ticket;
}



export default function TicketCard({ticket}:TicketCardProps) { 

    const { deleteTicket, updateTicketStatus } = useTicketsContext();
     const deleteRequest = ()=>{
           const confirmation = window.confirm("Are you sure to delete?")

           if(!confirmation)return

           deleteTicket(ticket.id)
     }



     const createDateUpdate = new Date(ticket.updatedAt)
     const formattedCreateDateTimeUpdate = createDateUpdate.toLocaleString("it-IT")

     const navigate = useNavigate(

     )
  return (
  <article className="ticket-row" onClick={()=>navigate(`/tickets/${ticket.id}`)}>
    <span className="ticket-row__id">#{ticket.id}</span>

    <div className="ticket-row__content">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
    </div>

    <div className="ticket-row__status">
      <TicketStatusBadge status={ticket.status} />
    </div>

    <div className="ticket-row__priority">
      <TicketPriorityBadge priority={ticket.priority} />
    </div>

    <span className="ticket-row__date">{formattedCreateDateTimeUpdate}</span>

    <div className="ticket-row__actions">
      <select
        value={ticket.status}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) =>
          updateTicketStatus(ticket.id, e.target.value as TicketStatus)
        }
      >
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>

      <Link className="ticket-row__icon-button" to={`/tickets/${ticket.id}`}>
        👁
      </Link>

      <button
      className="ticket-row__icon-button ticket-row__icon-button--danger"
      onClick={(e) => {
        e.stopPropagation();
      deleteRequest();
      }}
      >
  🗑
</button>
    </div>
  </article>
);
}
