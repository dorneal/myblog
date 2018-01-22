package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.mapper.ArticleMapper;
import com.neal.myblog.service.ArticleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

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
    public void saveArticle(TArticleEX tArticleEX) {
        articleMapper.saveArticle(tArticleEX);
    }

    @Override
    public List<TArticleVO> listArticleByManager() {
        return articleMapper.listArticleByManager();
    }

    @Override
    public void updateArticle(TArticleEX tArticleEX) {
        articleMapper.updateArticle(tArticleEX);
    }

    @Override
    public void deleteArticle(long id) {
        articleMapper.deleteArticle(id);
    }

    @Override
    public TArticleVO getArticleById(long id) {
        return articleMapper.getArticleById(id);
    }
}
