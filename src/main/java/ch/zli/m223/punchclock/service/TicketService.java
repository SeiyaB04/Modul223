package ch.zli.m223.punchclock.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import ch.zli.m223.punchclock.domain.Ticket;

@ApplicationScoped
public class TicketService {
    @Inject
    private EntityManager entityManager;

    public TicketService() {
    }

    @Transactional
    public Ticket createTicket(Ticket ticket) {
        entityManager.persist(ticket);
        return ticket;
    }

    @SuppressWarnings("unchecked")
    public List<Ticket> findAll() {
        var query = entityManager.createQuery("FROM Ticket");
        return query.getResultList();
    }

    @Transactional
    public void deleteTicket(long id) {
        Ticket ticket = entityManager.find(Ticket.class, id);
        entityManager.remove(ticket);

    }

    @Transactional
    public void updateTicket(Ticket ticket) {
        entityManager.merge(ticket);
    }
}
