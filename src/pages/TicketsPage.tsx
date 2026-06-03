
import {Link, useSearchParams } from "react-router-dom"
import TicketStats from "../features/tickets/components/TicketStats"
import TicketsList from "../features/tickets/components/TicketsList"
import { useTicketsContext } from "../features/tickets/context/TicketContext"
import "./TicketPage.css";
import type React from "react"



export default function TicketsPage() {

    const {tickets} = useTicketsContext()
    
    const [filterUrl,setFilterUrl]=useSearchParams()
    const search = filterUrl.get("search")??""
    const status = filterUrl.get("status")??"all"
    const priority = filterUrl.get("priority")??"all"
    const readSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{setFilterUrl({search : e.target.value , status,priority})}
    const readStatus = (e:React.ChangeEvent<HTMLSelectElement>)=>{setFilterUrl({search,priority, status : e.target.value})}
    const readPriority = (e:React.ChangeEvent<HTMLSelectElement>)=>{setFilterUrl({search,status, priority:e.target.value})}
    const resetFilter = ()=>{setFilterUrl({})}

    const filteredTickets = tickets.filter((ticket)=>{
      const filteredTextTickets = ticket.title.toLowerCase().includes(search.toLowerCase())|| ticket.description.toLowerCase().includes(search.toLowerCase())
      const filterStatusTickets = status==="all" ? true : ticket.status===status
      const filterPriorityTickets = priority==="all" ? true : ticket.priority === priority
      return filteredTextTickets && filterStatusTickets && filterPriorityTickets
    })


    
  return (
  <section className="tickets-page">
    <header className="tickets-page__header">
  <div className="tickets-page__title-group">
    <div className="tickets-page__icon">🎧</div>

    <div>
      <h1>Tickets</h1>
      <p>Gestisci e monitora le richieste di supporto.</p>
    </div>
  </div>
</header>

    <div className="tickets-page__cta">
  <div className="tickets-page__cta-icon">📄</div>

  <div className="tickets-page__cta-content">
    <h2>Hai bisogno di aprire una richiesta?</h2>
    <p>Crea un nuovo ticket e monitora lo stato della lavorazione.</p>
  </div>

  <Link className="tickets-page__secondary-button" to="/tickets/new">
    ＋ Crea ticket
  </Link>
</div>

    

    <TicketStats tickets={tickets} />

    <div className="tickets-filters">
      <input
        type="text"
        placeholder="Cerca Ticket..."
        value={search}
        onChange={readSearch}
      />

      <select value={status} onChange={readStatus}>
        <option value="all">Tutti</option>
        <option value="open">Aperto</option>
        <option value="in_progress">In Lavorazione</option>
        <option value="closed">Chiuso</option>
      </select>

      <select value={priority} onChange={readPriority}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={resetFilter}>Resetta Filtri</button>
    </div>


    <TicketsList tickets={filteredTickets} />
  </section>
);
}
