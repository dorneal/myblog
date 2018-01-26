package com.neal.myblog.service;


import com.neal.myblog.entity.TLike;

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

    /**
     * 新增点赞
     *
     * @param tLike TLike
     */
    void saveLike(TLike tLike);

    /**
     * 删除点赞
     *
     * @param viewId long
     */
    void deleteLike(long viewId);

    /**
     * 查询该访客，是否已经点过赞
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return int
     */
    int countByArticleId(long articleId, long visitId);

    /**
     * 根据文章ID，跟访客ID 得到这条记录的点赞ID
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return long
     */
    long findLikeId(long articleId, long visitId);
}
