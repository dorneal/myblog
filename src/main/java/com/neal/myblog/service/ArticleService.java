package com.neal.myblog.service;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;

import java.util.List;

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

    /**
     * 所有文章列表
     * @return List
     */
    List<TArticleVO> listArticleByManager();
}
