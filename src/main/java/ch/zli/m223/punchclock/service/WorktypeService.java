package ch.zli.m223.punchclock.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import ch.zli.m223.punchclock.domain.Worktype;

@ApplicationScoped
public class WorktypeService {
    @Inject
    private EntityManager entityManager;

    public WorktypeService() {
    }

    @SuppressWarnings("unchecked")
    public List<Worktype> findAll() {
        var query = entityManager.createQuery("FROM Worktype");
        return query.getResultList();
    }

}
