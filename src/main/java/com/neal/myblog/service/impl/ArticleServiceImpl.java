package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.mapper.ArticleMapper;
import com.neal.myblog.service.ArticleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * 文章Service接口实现类
 *
 * @author Neal
 * @see com.neal.myblog.service.ArticleService
 */
@Service("articleService")
public class ArticleServiceImpl implements ArticleService {
    @Resource
    private ArticleMapper articleMapper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveArticle(TArticleEX tArticleEX) {
        articleMapper.saveArticle(tArticleEX);
    }

    @Override
    public List<TArticleVO> listArticleByManagerToPage(int currentPage) {
        // 分页*页面大小=第二页（默认语句页面大小为10条记录）
        return articleMapper.listArticleByManagerToPage(currentPage * 10);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateArticle(TArticleEX tArticleEX) {
        articleMapper.updateArticle(tArticleEX);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteArticle(long id) {
        articleMapper.deleteArticle(id);
    }

    @Override
    public TArticleVO getArticleById(long id) {
        return articleMapper.getArticleById(id);
    }

    @Override
    public TArticleVO getArticleBySearch(TArticleEX tArticleEX) {
        return articleMapper.getArticleBySearch(tArticleEX);
    }

    @Override
    public TArticleVO getArticleByManager(long articleId) {
        return articleMapper.getArticleByManager(articleId);
    }

    @Override
    public List<TArticleVO> getAllArticleByIndex() {
        return articleMapper.getAllArticleByIndex();
    }
}
