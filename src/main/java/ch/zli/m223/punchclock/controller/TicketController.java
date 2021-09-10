package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.domain.Ticket;
import ch.zli.m223.punchclock.service.EntryService;
import ch.zli.m223.punchclock.service.TicketService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/tickets")
@Tag(name = "Tickets", description = "Handling of tickets")
public class TicketController {

    @Inject
    TicketService ticketService;

    /**
     * Holt alle Tickets aus der DB
     * @return alle tickets
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Ticket> list() {
        return ticketService.findAll();
    }

    /**
     * Erstellt ein Ticket
     * @param ticket
     * @return Gibt hinzugefügtes Ticket zurück
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Ticket createTicket(Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    /**
     * Löscht ein Ticket
     * @param id Id des Tickets welche gelöscht werden soll
     */
    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/{id}")
    public void deleteTicket(@PathParam long id) {
        ticketService.deleteTicket(id);


    }

    /**
     * Bearbeitet Ticket
     * @param ticket Gibt den Ticket mit der bearbeitet wird
     */
    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    public void updateTicket(Ticket ticket) {
        ticketService.updateTicket(ticket);
    }

}
