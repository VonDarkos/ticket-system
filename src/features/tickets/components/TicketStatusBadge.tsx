import type { TicketStatus } from "../types/ticket";

import "./TicketStatusBadge.css";

export type TicketStatusBadgeProps = {
    status:TicketStatus
}




export default function TicketStatusBadge({status}:TicketStatusBadgeProps) {

  const statusClasses = {open:"open", in_progress:"in-progress", closed:"closed" }

    const statusLabels = {open:"Open", in_progress:"In progress", closed:"Closed"}
  return (
    <span className={statusClasses[status]}>{statusLabels[status]}</span>
  )
}
