package com.neal.myblog.controller;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TArticleVO;
import com.neal.myblog.entity.TCategory;
import com.neal.myblog.service.ArticleService;
import com.neal.myblog.service.CategoryService;
import com.neal.myblog.util.DataBaseIndexUtil;
import com.neal.myblog.util.DataBaseSearcherUtil;
import com.neal.myblog.util.UploadUtil;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.*;

/**
 * 文章Controller，用于后台博主
 *
 * @author Neal
 */
@Controller
@RequestMapping("/article")
public class ArticleController {

    @Resource
    private CategoryService categoryService;
    @Resource
    private ArticleService articleService;

    /**
     * 文章后台管理页面
     *
     * @return 视图
     */
    @RequestMapping("/managerArticlePage")
    public String managerArticlePage() {
        return "page/manager/articleList";
    }

    /**
     * 查询数据，返回文章管理页面
     *
     * @return json
     */
    @RequestMapping(value = "/managerArticleByPage", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> managerArticleByPage(Integer currentPage) {
        List<TArticleVO> list = articleService.listArticleByManagerToPage(currentPage);
        Map<String, Object> map = new HashMap<>(2);
        if (list.size() == 0) {
            map.put("code", 0);
        } else {
            map.put("code", 1);
            map.put("data", list);
        }
        return map;
    }

    /**
     * 跳转到更新编辑页面
     *
     * @param articleId 文章ID
     * @param modelMap  ModelMap
     * @return 视图
     */
    @RequestMapping("/toUpdateArticlePage")
    public String toUpdateArticlePage(long articleId, ModelMap modelMap) {
        TArticleVO articleVO = articleService.getArticleById(articleId);
        List<TCategory> categoryList = categoryService.listCategory();
        modelMap.addAttribute("articleVO", articleVO);
        modelMap.addAttribute("categoryList", categoryList);
        return "page/manager/editArticle";
    }

    /**
     * 更新文章
     *
     * @param tArticleEX TArticleEX
     * @return 视图
     */
    @RequestMapping("/updateArticle")
    public String updateArticle(TArticleEX tArticleEX) {
        articleService.updateArticle(tArticleEX);
        // 更新文章时，更新该文章的搜索索引
        TArticleVO tArticleVO = articleService.getArticleBySearch(tArticleEX);
        try {
            DataBaseIndexUtil.updateIndex(tArticleVO);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "redirect:/article/managerArticlePage";
    }

    /**
     * 删除文章
     *
     * @param articleId 文章ID
     * @return 视图
     */
    @RequestMapping("/deleteArticle")
    public String deleteArticle(long articleId) {
        try {
            // 删除文章的同时，删除该搜索索引
            DataBaseIndexUtil.deleteIndex((int) articleId);
        } catch (IOException e) {
            e.printStackTrace();
        }
        articleService.deleteArticle(articleId);
        return "redirect:/article/managerArticlePage";
    }


    /**
     * 跳转到发布文章页面
     *
     * @param modelMap ModelMap
     * @return 视图
     */
    @RequestMapping("/publishArticlePage")
    public String publishArticlePage(ModelMap modelMap) {
        List<TCategory> list = categoryService.listCategory();
        modelMap.addAttribute("categoryList", list);
        return "page/manager/publish";
    }

    /**
     * 发布文章，成功后跳转到文章管理页面
     *
     * @param tArticleEX TArticleEX
     * @return 视图
     */
    @RequestMapping(value = "/publishArticle", method = RequestMethod.POST)
    public String publishArticle(TArticleEX tArticleEX) {
        articleService.saveArticle(tArticleEX);
        // 发布文章的同时，增加该文章的搜索索引
        TArticleVO tArticleVO = articleService.getArticleBySearch(tArticleEX);
        try {
            DataBaseIndexUtil.addIndex(tArticleVO);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "redirect:/article/managerArticlePage";
    }

    /**
     * 文章后台搜索
     *
     * @param keywords 关键字
     * @return 视图
     */
    @RequestMapping(value = "/getArticleBySearch", method = RequestMethod.POST)
    public String getArticleBySearch(String keywords, ModelMap modelMap) throws IOException, ParseException {
        List<String> list = DataBaseSearcherUtil.searchData("article_content", keywords, 10);
        // 如果在文章内容没搜索到，则转到搜索标题，标题没搜索到，就搜索文章属性
        if (list.size() == 0) {
            list = DataBaseSearcherUtil.searchData("article_title", keywords, 10);
            if (list.size() == 0) {
                list = DataBaseSearcherUtil.searchData("category_", keywords, 10);
            }
        }
        // 不为0时候，才进行数据库查询
        List<TArticleVO> articleVOS = new ArrayList<>();
        if (list.size() > 0) {
            for (String articleId : list) {
                articleVOS.add(articleService.getArticleByManager(Long.parseLong(articleId)));
            }
        }
        modelMap.addAttribute("articleVOS", articleVOS);
        return "page/manager/articleList";
    }

    /**
     * 用于博主在后台，随时建立全部搜索索引
     *
     * @return 视图
     * @throws Exception Exception
     */
    @RequestMapping("/createSearchIndex")
    public String createSearchIndex() throws Exception {
        // 查询所有文章
        List<TArticleVO> list = articleService.getAllArticleByIndex();
        // 遍历 进行索引建立
        for (TArticleVO tArticleVO : list) {
            DataBaseIndexUtil.addIndex(tArticleVO);
        }
        return "redirect:/article/managerArticlePage";
    }

    /**
     * 图片上传，返回一个URL字符串
     *
     * @return json
     */
    @RequestMapping(value = "/uploadPhoto", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, String> uploadPhoto(@RequestParam("file") MultipartFile file) {
        String contentType = file.getContentType();
        String fileName = file.getOriginalFilename();
        System.out.println("fileName-->" + fileName);
        System.out.println("getContentType-->" + contentType);
        //暂时使用具体路径，具体部署，使用图片服务器，部署到Tomcat
        String filePath = "F:\\Workspace\\myblog\\myblog\\src\\main\\resources\\static\\upload";
        System.out.println(filePath);
        String s = "";
        try {
            s = UploadUtil.uploadImage(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            e.printStackTrace();
        }
        Map<String, String> map = new HashMap<>(1);
        map.put("url", s);
        //返回json
        return map;
    }
}
