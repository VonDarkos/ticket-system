
import type { Ticket, createTicketData ,TicketStatus } from "../types/ticket";
import { initialTickets } from "../data/initialTickets";


import useLocalStorage from "../../../shared/hooks/useLocalStorage";

export default function useTickets() {
    
    const[tickets,setTickets]=useLocalStorage<Ticket[]>("tickets", initialTickets)

    const getTicketById = (ticketId: string) => {
  
       return tickets.find((ticket)=>ticket.id===ticketId)
};


    const createTicket = (data:createTicketData)=>{
        const now = new Date().toISOString()
            const newTicket:Ticket= {id: Date.now().toString(), title:data.title , description:data.description , priority: data.priority, status: "open", createdAt:now , updatedAt:now, link:data.link , image:data.image}

            setTickets(prev=>[...prev,newTicket])
    }

    const updateTicketStatus = (ticketId:string , newStatus:TicketStatus)=>{
        setTickets((prev=>prev.map((ticket)=>ticket.id===ticketId ? {...ticket,status:newStatus,updatedAt:new Date().toISOString()}:ticket)))
    }

    const deleteTicket = (ticketId:string)=>{
        setTickets(prev=>prev.filter((ticket)=>ticket.id!==ticketId))
    }
    


  
    return {
        tickets,
        getTicketById,
        createTicket,
        updateTicketStatus,
        deleteTicket,
};
}


