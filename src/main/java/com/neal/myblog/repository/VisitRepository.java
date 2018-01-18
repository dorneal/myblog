package com.neal.myblog.repository;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * 来访repository
 *
 * @author Neal
 */
public interface VisitRepository extends JpaRepository<TVisit, Long> {

    /**
     * 查询所有来访
     *
     * @return List
     */
    @Query("SELECT v FROM TVisit v")
    List<TVisit> visitList();
}
