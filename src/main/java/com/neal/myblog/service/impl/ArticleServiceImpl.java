package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.mapper.ArticleMapper;
import com.neal.myblog.service.ArticleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author Neal
 */
@Service("articleService")
public class ArticleServiceImpl implements ArticleService {
    @Resource
    private ArticleMapper articleMapper;

    @Override
    public void saveArticle(TArticleEX tArticleEX) {
        articleMapper.saveArticle(tArticleEX);
    }
}
