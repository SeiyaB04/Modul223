package ch.zli.m223.punchclock.controller;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.Id;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.domain.Worktype;
import ch.zli.m223.punchclock.service.WorktypeService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

@Path("/worktypes")
@Tag(name = "Worktypes", description = "Handling of worktypes")
public class WorktypeController {

    @Inject
    WorktypeService worktypeService;

    /**
     * Holt alle Worktypes aus der DB
     * @return alle worktypes
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Worktype> list() {
        return worktypeService.findAll();
    }

    /**
     * Erstellt ein Worktype
     * @param worktype
     * @return Gibt hinzugefügten Worktype zurück
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Worktype add(Worktype worktype) {
        return worktypeService.createWorktype(worktype);
    }

}
