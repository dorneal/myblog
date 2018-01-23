package com.neal.myblog.service;


/**
 * 点赞service
 *
 * @author Neal
 */
public interface LikeService {
    /**
     * 统计网站所有文章点赞数
     *
     * @return int
     */
    int countLike();
}
