package com.neal.myblog.mapper;


import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;

import java.util.List;

/**
 * 文章Mapper，用于博主
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
     * 分页查询，所有文章列表（默认一页量为10条记录）
     *
     * @param currentPage 当前页
     * @return PageBean
     */
    List<TArticleVO> listArticleByManagerToPage(int currentPage);

    /**
     * 文章更新
     *
     * @param tArticleEX TArticleEX
     */
    void updateArticle(TArticleEX tArticleEX);

    /**
     * 删除文章操作
     *
     * @param articleId 文章ID
     */
    void deleteArticle(long articleId);

    /**
     * 根据ID获取文章
     *
     * @param articleId 文章ID
     * @return TArticleVO
     */
    TArticleVO getArticleById(long articleId);
}
