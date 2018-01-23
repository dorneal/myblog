package com.neal.myblog.controller;

import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.service.ArticleByVisitorService;
import com.neal.myblog.service.LikeService;
import com.neal.myblog.service.VisitService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 公共显示文章，用于访客
 *
 * @author Neal
 */
@Controller
@RequestMapping("/public")
public class PublicArticleController {

    @Resource
    private ArticleByVisitorService articleByVisitorService;
    @Resource
    private VisitService visitService;
    @Resource
    private LikeService likeService;

    /**
     * 首页，侧边栏显示
     *
     * @return 视图
     */
    @RequestMapping("/index")
    public String index(ModelMap modelMap) {
        asideContent(modelMap);
        return "page/index";
    }

    /**
     * 主页文章显示
     *
     * @param currentPage 当前页
     * @return 文章包装数据
     */
    @RequestMapping(value = "/getArticleToVisitor", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> getArticleToVisitor(Integer currentPage) {
        Map<String, Object> map = new HashMap<>(2);
        List<TArticleVO> list = articleByVisitorService.listArticleByVisit(currentPage);
        if (list.size() != 0) {
            map.put("code", 1);
            map.put("data", list);
        } else {
            map.put("code", 0);
        }
        return map;
    }

    @RequestMapping("/readArticle")
    public String readArticle(Integer articleId, ModelMap modelMap) {
        TArticleVO articleVO = articleByVisitorService.getArticleById(articleId);
        modelMap.addAttribute("articleVo", articleVO);
        asideContent(modelMap);
        return "page/read";
    }

    /**
     * 右边栏，复用代码块
     *
     * @param modelMap ModelMap
     */
    private void asideContent(ModelMap modelMap) {
        //来访数
        int visitCount = visitService.countVisit();
        //点赞数
        int likeCount = likeService.countLike();
        //文章总数
        int articleCount = articleByVisitorService.countArticleAll();
        //原创文章数
        int originalArticleCount = articleByVisitorService.countArticleByOriginal();
        //文章前五排行
        List<TArticleVO> rankArticle = articleByVisitorService.rankArticle();
        //分类文章数
        List<TArticleVO> categoryNumByArticle = articleByVisitorService.categoryNumByArticle();
        modelMap.addAttribute("visitCount", visitCount);
        modelMap.addAttribute("likeCount", likeCount);
        modelMap.addAttribute("articleCount", articleCount);
        modelMap.addAttribute("originalArticleCount", originalArticleCount);
        modelMap.addAttribute("rankArticle", rankArticle);
        modelMap.addAttribute("categoryNumByArticle", categoryNumByArticle);
    }
}
