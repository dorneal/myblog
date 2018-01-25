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

    /**
     * 所查询的数据，用于更新或者发布文章时，添加搜索索引，
     * 因为可能在发布文章的时候
     * 并不知道该文章的ID，只能通过标题跟时间进行数据库查询得到
     *
     * @param tArticleEX 文章扩展对象
     * @return TArticleVO
     */
    TArticleVO getArticleBySearch(TArticleEX tArticleEX);

    /**
     * 根据索引得到ID，根据ID进行查询
     *
     * @param articleId 文章ID
     * @return TArticleVO
     */
    TArticleVO getArticleByManager(long articleId);

    /**
     * 查询所有数据，用于建立搜索索引
     *
     * @return List
     */
    List<TArticleVO> getAllArticleByIndex();
}
