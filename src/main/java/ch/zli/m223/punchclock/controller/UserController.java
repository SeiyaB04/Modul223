package ch.zli.m223.punchclock.controller;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.Id;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.service.UserService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

@Path("/users")
@Tag(name = "Users", description = "Handling of users")
public class UserController {

    @Inject
    UserService userService;

    /**
     * Holt alle User aus der DB
     * @return alle user
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> list() {
        return userService.findAll();
    }


    /**
     * Erstellt ein User
     * @param user
     * @return Gibt hinzugefügten User zurück
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public User add(User user) {
        return userService.createUser(user);
    }

    /**
     * Löscht ein User
     * @param id Id des Users welcher gelöscht werden soll
     */
    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/{id}")
    public void delete(@PathParam long id) {
        userService.deleteUser(id);


    }

    /**
     * Bearbeitet User
     * @param user Gibt den User mit der bearbeitet wird
     */
    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    public void update(User user) {
        userService.updateUser(user);
    }




}
