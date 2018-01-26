package com.neal.myblog.repository;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * 来访repository
 *
 * @author Neal
 */
public interface VisitRepository extends JpaRepository<TVisit, String> {
    /**
     * 查询来访数
     *
     * @return int
     */
    @Query("select count(v.visitId) from TVisit v")
    int countVisit();

    /**
     * 根据IP地址，判断是否已经存在，返回count
     *
     * @param visitIp IP地址
     * @return int
     */
    @Query("SELECT count(v.visitId) from TVisit v where v.visitIp=:visitIp")
    int countByVisitIp(@Param("visitIp") String visitIp);

    /**
     * 根据IP，查询访客ID
     *
     * @param visitIp 访客IP地址
     * @return 访客ID
     */
    @Query("select v.visitId from TVisit v where v.visitIp=:visitIp")
    long getByVisitIp(@Param("visitIp") String visitIp);
}
