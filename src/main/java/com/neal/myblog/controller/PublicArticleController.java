package com.neal.myblog.controller;

        import org.springframework.stereotype.Controller;
        import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 公共显示文章，用于访客
 *
 * @author Neal
 */
@Controller
@RequestMapping("/publicArticle")
public class PublicArticleController {

    /**
     * 首页
     *
     * @return 视图
     */
    @RequestMapping("/index")
    public String index() {
        return "page/index";
    }
}
