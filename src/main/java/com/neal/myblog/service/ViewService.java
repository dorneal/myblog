package com.neal.myblog.service;


import com.neal.myblog.entity.TView;

/**
 * ViewService
 *
 * @author Neal
 */
public interface ViewService {

    /**
     * 查询该访客，是否已经浏览过该文章
     *
     * @param articleId 文章ID
     * @param visitId   访客ID
     * @return int
     */
    int countByViewId(long articleId, long visitId);

    /**
     * 将访客ID，存入浏览表
     *
     * @param view TView
     */
    void saveView(TView view);
}
