package com.neal.myblog.controller;

import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.service.ArticleByVisitorService;
import com.neal.myblog.service.LikeService;
import com.neal.myblog.service.VisitService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

/**
 * 文章分类Controller
 *
 * @author Neal
 */
@Controller
@RequestMapping("/category")
public class CategoryController {
    @Resource
    private ArticleByVisitorService articleByVisitorService;
    @Resource
    private VisitService visitService;
    @Resource
    private LikeService likeService;

    @RequestMapping("/getCategoryArticle")
    public String getCategoryArticle(long categoryId, ModelMap modelMap) {
        List<TArticleVO> list = articleByVisitorService.getArticleByCategory(categoryId);
        modelMap.addAttribute("articleVOS", list);
        //来访数
        int visitCount = visitService.countVisit();
        //点赞数
        int likeCount = likeService.countLike();
        //文章总数
        int articleCount = articleByVisitorService.countArticleAll();
        //原创文章数
        int originalArticleCount = articleByVisitorService.countArticleByOriginal();
        //文章前十排行
        List<TArticleVO> rankArticle = articleByVisitorService.rankArticle();
        //分类文章数
        List<TArticleVO> categoryNumByArticle = articleByVisitorService.categoryNumByArticle();
        modelMap.addAttribute("visitCount", visitCount);
        modelMap.addAttribute("likeCount", likeCount);
        modelMap.addAttribute("articleCount", articleCount);
        modelMap.addAttribute("originalArticleCount", originalArticleCount);
        modelMap.addAttribute("rankArticle", rankArticle);
        modelMap.addAttribute("categoryNumByArticle", categoryNumByArticle);
        return "page/categoryList";
    }
}
