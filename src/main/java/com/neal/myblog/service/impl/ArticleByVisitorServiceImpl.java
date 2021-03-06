package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.mapper.ArticleByVisitorMapper;
import com.neal.myblog.service.ArticleByVisitorService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 访客service接口实现类
 *
 * @author Neal
 * @see com.neal.myblog.service.ArticleByVisitorService
 */
@Service("articleByVisitorService")
public class ArticleByVisitorServiceImpl implements ArticleByVisitorService {
    @Resource
    private ArticleByVisitorMapper articleByVisitorMapper;


    @Override
    public List<TArticleVO> listArticleByVisit(int currentPage) {
        return articleByVisitorMapper.listArticleByVisit(currentPage * 6);
    }

    @Override
    public int countArticleByOriginal() {
        return articleByVisitorMapper.countArticleByOriginal();
    }

    @Override
    public int countArticleAll() {
        return articleByVisitorMapper.countArticleAll();
    }

    @Override
    public List<TArticleVO> rankArticle() {
        return articleByVisitorMapper.rankArticle();
    }

    @Override
    public List<TArticleVO> listOriginal() {
        return articleByVisitorMapper.listOriginal();
    }

    @Override
    public List<TArticleVO> listSuggestArticle() {
        return articleByVisitorMapper.listSuggestArticle();
    }

    @Override
    public List<TArticleVO> categoryNumByArticle() {
        return articleByVisitorMapper.categoryNumByArticle();
    }

    @Override
    public TArticleVO getArticleById(long articleId) {
        return articleByVisitorMapper.getArticleById(articleId);
    }

    @Override
    public TArticleEX getArticlePreAndNext(long articleId) {
        return articleByVisitorMapper.getArticlePreAndNext(articleId);
    }

    @Override
    public List<TArticleVO> getArticleByCategory(long categoryId) {
        return articleByVisitorMapper.getArticleByCategory(categoryId);
    }

    @Override
    public List<TArticleVO> getArticleByTime(String time) {
        return articleByVisitorMapper.getArticleByTime(time);
    }
}
