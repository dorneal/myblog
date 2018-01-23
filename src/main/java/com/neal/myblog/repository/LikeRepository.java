package com.neal.myblog.repository;

import com.neal.myblog.entity.TLike;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

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
}
