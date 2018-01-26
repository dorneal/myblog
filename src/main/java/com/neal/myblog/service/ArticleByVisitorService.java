package com.neal.myblog.service;

import com.neal.myblog.entity.TArticleEX;
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
     * @param currentPage 当前页
     * @return List
     */
    List<TArticleVO> listArticleByVisit(int currentPage);

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

    /**
     * 查询显示文章
     *
     * @param articleId 文章ID
     * @return 包装类
     */
    TArticleVO getArticleById(long articleId);

    /**
     * 用于查询上下页文章ID,以及文章标题
     *
     * @param articleId 文章ID
     * @return TArticleEX
     */
    TArticleEX getArticlePreAndNext(long articleId);


    /**
     * 根据属性ID，获取该分类下的所有文章
     *
     * @param categoryId 属性ID
     * @return TArticleVO
     */
    List<TArticleVO> getArticleByCategory(long categoryId);

    /**
     * 得到某个时间年份的所有文章
     *
     * @param time 年份
     * @return List
     */
    List<TArticleVO> getArticleByTime(String time);
}
