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
     * 分页查询，所有文章列表（默认一页量为10条记录）
     *
     * @param currentPage 当前页
     * @return List
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
