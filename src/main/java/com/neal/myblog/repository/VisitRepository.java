package com.neal.myblog.repository;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 来访repository
 *
 * @author Neal
 */
public interface VisitRepository extends JpaRepository<TVisit, Long> {
}
