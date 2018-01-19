package com.neal.myblog.controller;

import com.neal.myblog.entity.TArticleEX;
import com.neal.myblog.entity.TCategory;
import com.neal.myblog.service.ArticleService;
import com.neal.myblog.service.CategoryService;
import com.neal.myblog.util.UploadUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.util.*;

/**
 * 文章Controller
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
     * 查询数据，返回文章管理页面
     *
     * @return 视图
     */
    @RequestMapping("/managerArticle")
    public String managerArticle() {
        return "page/manager/articleList";
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
        return "redirect:/article/managerArticle";
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
