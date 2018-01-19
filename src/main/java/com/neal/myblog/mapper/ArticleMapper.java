package com.neal.myblog.mapper;


import com.neal.myblog.entity.TArticleEX;

/**
 * 文章Mapper
 *
 * @author Neal
 */
public interface ArticleMapper {
    /**
     * 文章插入/发布
     *
     * @param tArticleEX TArticleEX
     */
    void saveArticle(TArticleEX tArticleEX);
}
