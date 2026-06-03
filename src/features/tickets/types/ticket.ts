export type TicketStatus = "open" | "in_progress" | "closed";

export type TicketPriority = "low" | "medium" | "high";

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  updatedAt: string;
  link?:string
  image?:string
};

export type createTicketData = Pick <Ticket , "title" | "description" | "priority" | "link" | "image">