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

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Ticket> list() {
        return ticketService.findAll();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Ticket createTicket(Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/{id}")
    public void deleteTicket(@PathParam long id) {
        ticketService.deleteTicket(id);


    }

    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    public void updateTicket(Ticket ticket) {
        ticketService.updateTicket(ticket);
    }

}
