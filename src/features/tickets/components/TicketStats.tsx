import { useMemo } from "react";
import type { Ticket } from "../types/ticket";
import "./TicketStats.css";


export type TicketStatsProps={

    tickets:Ticket[]
}






export default function TicketStats({tickets}:TicketStatsProps) {


    const stats = useMemo(()=>{

        return{
            open:  tickets.filter((ticket)=>ticket.status==="open").length,
            inProgressTicket: tickets.filter((ticket)=>ticket.status==="in_progress").length,
            closedTicket: tickets.filter((ticket)=>ticket.status==="closed").length,
            lowPriority: tickets.filter((ticket)=>ticket.priority==="low").length,
            mediumPriority: tickets.filter((ticket)=>ticket.priority==="medium").length,
            highPriority: tickets.filter((ticket)=>ticket.priority==="high").length

        }   
    },[tickets])
    
  return (

     <section className="ticket-stats">
    <h2>Statistiche Tickets</h2>

    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label stat-open">Open</span>
        <strong className="stat-value">{stats.open}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label stat-in-progress">In Progress</span>
        <strong className="stat-value">{stats.inProgressTicket}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label stat-closed">Closed</span>
        <strong className="stat-value">{stats.closedTicket}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label stat-low-priority">Low Priority</span>
        <strong className="stat-value">{stats.lowPriority}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label stat-medium-priority">Medium Priority</span>
        <strong className="stat-value">{stats.mediumPriority}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label stat-high-priority">High Priority</span>
        <strong className="stat-value">{stats.highPriority}</strong>
      </div>
    </div>
  </section>
  
  )
}
