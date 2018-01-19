package com.neal.myblog.service;

import com.neal.myblog.entity.TArticleEX;

/**
 * 文章Service接口
 *
 * @author Neal
 */
public interface ArticleService {
    /**
     * 文章插入/发布
     *
     * @param tArticleEX TArticleEX
     */
    void saveArticle(TArticleEX tArticleEX);
}
