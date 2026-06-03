import TicketsPage from "../pages/TicketsPage";
import NewTicketPage from "../pages/NewTicketPage";
import NotFoundPage from "../pages/NotFoundPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import TicketDetailPage from "../pages/TicketDetailPage";
import { TicketsProvider } from "../features/tickets/context/TicketContext";

export default function App() {
  return (
    <TicketsProvider>   
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Navigate to="/tickets" />} />  
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/tickets/new" element={<NewTicketPage />} />
        <Route path="/tickets/:ticketId" element={<TicketDetailPage/>}/>        
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </TicketsProvider>
  );
}