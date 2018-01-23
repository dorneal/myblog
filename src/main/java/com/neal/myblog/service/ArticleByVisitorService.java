package com.neal.myblog.service;

import com.neal.myblog.entity.TArticleVO;

import java.util.List;

/**
 * 用于访客service接口
 *
 * @author Neal
 */
public interface ArticleByVisitorService {
    /**
     * 分页查询所有，用于加载
     *
     * @return List
     */
    List<TArticleVO> listArticleByVisit();

    /**
     * 原创文章数
     *
     * @return int
     */
    int countArticleByOriginal();

    /**
     * 用于显示所有文章数
     *
     * @return int
     */
    int countArticleAll();

    /**
     * 用于主页显示文章浏览排行
     *
     * @return List
     */
    List<TArticleVO> rankArticle();

    /**
     * 查询分类数文章
     *
     * @return List
     */
    List<TArticleVO> categoryNumByArticle();
}
