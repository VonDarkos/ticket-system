import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import useTickets from "../hooks/useTickets";

type TicketsContextValue = ReturnType<typeof useTickets>;

const TicketsContext = createContext<TicketsContextValue | null>(null);

type TicketsProviderProps = {
  children: ReactNode;
};

export function TicketsProvider({ children }: TicketsProviderProps) {
  const ticketsData = useTickets();

  return (
    <TicketsContext.Provider value={ticketsData}>
      {children}
    </TicketsContext.Provider>
  );
}

export function useTicketsContext() {
  const context = useContext(TicketsContext);

  if (!context) {
    throw new Error("useTicketsContext must be used inside TicketsProvider");
  }

  return context;
}