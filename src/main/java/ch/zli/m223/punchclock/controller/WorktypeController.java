package ch.zli.m223.punchclock.controller;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.Id;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import ch.zli.m223.punchclock.domain.Worktype;
import ch.zli.m223.punchclock.service.WorktypeService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

@Path("/worktypes")
@Tag(name = "Worktypes", description = "Handling of worktypes")
public class WorktypeController {

    @Inject
    WorktypeService worktypeService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Worktype> list() {
        return worktypeService.findAll();
    }

}
