import { Subjetcts } from "./subjects";

export interface TicketUpdatedEvent {
   subject: Subjetcts.TicketUpdated,
   data: {
      id: string,
      title: string,
      price: number,
      userId: string
   }
}