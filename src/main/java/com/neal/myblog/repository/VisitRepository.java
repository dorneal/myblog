package com.neal.myblog.repository;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * 来访repository
 *
 * @author Neal
 */
public interface VisitRepository extends JpaRepository<TVisit, Long> {
    /**
     * 查询来访数
     *
     * @return int
     */
    @Query("select count(v.visitId) from TVisit v")
    int countVisit();
}
