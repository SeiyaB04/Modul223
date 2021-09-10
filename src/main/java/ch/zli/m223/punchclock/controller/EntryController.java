package ch.zli.m223.punchclock.controller;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.Id;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.service.EntryService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

@Path("/entries")
@Tag(name = "Entries", description = "Handling of entries")
public class EntryController {

    @Inject
    EntryService entryService;

    /**
     * Holt alle entries aus der DB
     * @return alle entries
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Entry> list() {
        return entryService.findAll();
    }


    /**
     * Erstellt ein entry
     * @param entry
     * @return Gibt hinzugefügte entry zurück
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Entry add(Entry entry) {
        return entryService.createEntry(entry);
    }

    /**
     * Löscht ein entry
     * @param id Id der entry welche gelöscht werden soll
     */
    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/{id}")
    public void delete(@PathParam long id) {
        entryService.deleteEntry(id);


    }

    /**
     * Bearbeitet entry
     * @param entry Gibt den entry mit der bearbeitet wird
     */
    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    public void update(Entry entry) {
        entryService.updateEntry(entry);
    }




}
