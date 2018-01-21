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

    /**
     * 文章更新
     *
     * @param tArticleEX TArticleEX
     */
    void updateArticle(TArticleEX tArticleEX);

    /**
     * 删除文章操作
     *
     * @param id 文章ID
     */
    void deleteArticle(long id);

    /**
     * 根据ID获取文章
     *
     * @param id 文章ID
     * @return TArticleVO
     */
    TArticleVO getArticleById(long id);
}
