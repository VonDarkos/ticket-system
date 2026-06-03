import type { TicketPriority } from "../types/ticket";
import "./TicketPriorityBadge.css";


export type TicketPriorityBadgeProps = {
  priority: TicketPriority;
};



export default function TicketPriorityBadge({ priority }: TicketPriorityBadgeProps) {

    const priorityClasses = {low:"low", medium: "medium" , high:"high" }
    const priorityLabels = {low:"Low", medium:"Medium", high:"High"}
  return (
    <span className={priorityClasses[priority]}>{priorityLabels[priority]}</span>
  )
}
