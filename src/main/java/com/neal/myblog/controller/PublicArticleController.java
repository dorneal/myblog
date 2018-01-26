package com.neal.myblog.controller;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.entity.TView;
import com.neal.myblog.service.ArticleByVisitorService;
import com.neal.myblog.service.LikeService;
import com.neal.myblog.service.ViewService;
import com.neal.myblog.service.VisitService;
import com.neal.myblog.util.DataBaseSearcherUtil;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
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
    @Resource
    private ViewService viewService;

    /**
     * 首页，侧边栏显示，因为主要内容使用ajax查询，
     * 所以只需要查询侧边栏的数据存入ModelMap就行了
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

    /**
     * 查询跳转到该文章页面
     *
     * @param articleId 文章ID
     * @param modelMap  ModelMap
     * @return 视图
     */
    @RequestMapping("/readArticle")
    public String readArticle(Integer articleId, ModelMap modelMap, HttpServletRequest request) {
        //查询出访客ID，根据当访客点击这批文章时，根据文章ID，跟访客ID，查询是否已经浏览过
        String ip = (String) request.getSession().getAttribute("visitIp");
        if (ip != null) {
            long visitId = visitService.getByVisitIp(ip);
            int count = viewService.countByViewId(articleId, visitId);
            if (count == 0) {
                TView tView = new TView();
                tView.setArticleId(articleId);
                tView.setVisitId(visitId);
                viewService.saveView(tView);
            }
        }
        // 查询出，上下页数据，还有主要该文章数据
        TArticleVO articleVO = articleByVisitorService.getArticleById(articleId);
        TArticleEX tArticleEX = articleByVisitorService.getArticlePreAndNext(articleId - 1);
        TArticleEX tArticleEX2 = articleByVisitorService.getArticlePreAndNext(articleId + 1);
        modelMap.addAttribute("articleVo", articleVO);
        modelMap.addAttribute("tArticleEX", tArticleEX);
        modelMap.addAttribute("tArticleEX2", tArticleEX2);
        asideContent(modelMap);
        return "page/read";
    }

    /**
     * 客户端关键字搜索
     *
     * @param keywords 关键字
     * @param modelMap ModelMap
     * @return 视图
     * @throws IOException    IOException
     * @throws ParseException ParseException
     */
    @RequestMapping(value = "/searchArticleToRead", method = RequestMethod.POST)
    public String searchArticleToRead(String keywords, ModelMap modelMap) throws IOException, ParseException {
        List<String> list = DataBaseSearcherUtil.searchData("article_content", keywords, 10);
        // 如果在文章内容没搜索到，则转到搜索标题，标题没搜索到，就搜索文章属性
        if (list.size() == 0) {
            list = DataBaseSearcherUtil.searchData("article_title", keywords, 10);
            if (list.size() == 0) {
                list = DataBaseSearcherUtil.searchData("category_name", keywords, 10);
            }
        }
        List<TArticleVO> articleVOS = new ArrayList<>();
        if (list.size() > 0) {
            for (String articleId : list) {
                //将查询的ID索引，进行数据库查询，返回文章list
                articleVOS.add(articleByVisitorService.getArticleById(Long.parseLong(articleId)));
            }
        }
        modelMap.addAttribute("articleVOS", articleVOS);
        // 调用数据库的侧边栏查询
        asideContent(modelMap);
        return "page/index";
    }

    /**
     * 根据年份，获取文章
     *
     * @param year 年份
     * @return 视图
     */
    @RequestMapping("/articleByYear")
    public String articleByYear(String year, ModelMap modelMap) {
        List<TArticleVO> list = articleByVisitorService.getArticleByTime(year);
        modelMap.addAttribute("articleVOS", list);
        asideContent(modelMap);
        return "page/yearList";
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
    }
}
