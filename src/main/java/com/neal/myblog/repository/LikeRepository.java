package com.neal.myblog.repository;

import com.neal.myblog.entity.TLike;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 * 点赞Repository
 *
 * @author Neal
 */
public interface LikeRepository extends CrudRepository<TLike, Long> {
    /**
     * 统计网站所有文章点赞数
     *
     * @return int
     */
    @Query("select count(l.likeId) from TLike l")
    int countLike();

    /**
     * 查询该访客，是否已经点过赞
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return int
     */
    @Query("select count(l.likeId) from TLike l where l.articleId=:articleId and l.visitId=:visitId")
    int countByArticleId(@Param("articleId") long articleId, @Param("visitId") long visitId);

    /**
     * 根据文章ID，跟访客ID 得到这条记录的点赞ID
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return long
     */
    @Query("select l.likeId from TLike l where l.articleId=:articleId and l.visitId=:visitId")
    long findLikeId(@Param("articleId") long articleId, @Param("visitId") long visitId);
}
