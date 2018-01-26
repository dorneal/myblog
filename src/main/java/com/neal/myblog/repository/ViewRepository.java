package com.neal.myblog.repository;

import com.neal.myblog.entity.TView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * 浏览Repository
 *
 * @author Neal
 */
public interface ViewRepository extends JpaRepository<TView, Long> {
    /**
     * 查询该访客，是否已经浏览过该文章
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return int
     */
    @Query("select count(v.viewId) from TView v where v.articleId=:articleId and v.visitId=:visitId")
    int countByViewId(@Param("articleId") long articleId, @Param("visitId") long visitId);
}
