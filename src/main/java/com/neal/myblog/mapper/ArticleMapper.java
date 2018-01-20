package com.neal.myblog.mapper;


import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;

import java.util.List;

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

    /**
     * 所有文章列表
     * @return List
     */
    List<TArticleVO> listArticleByManager();
}
