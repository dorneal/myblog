package com.neal.myblog.controller;

import com.neal.myblog.entity.TCategory;
import com.neal.myblog.entity.TVisit;
import com.neal.myblog.service.CategoryService;
import com.neal.myblog.service.VisitService;
import freemarker.template.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 后台管理
 *
 * @author Neal
 */
@RequestMapping("/manager")
@Controller
public class ManagerController {
    @Resource
    private CategoryService categoryService;
    @Resource
    private VisitService visitService;

    @Autowired
    Configuration configuration;

    /**
     * 返回管理页
     *
     * @param modelMap ModelMap
     * @return String
     */
    @RequestMapping("/managerArticle")
    public String managerArticle(ModelMap modelMap) {
        List<TCategory> categoryList = categoryService.listCategory();
        List<TVisit> visitList = visitService.visitList();
        modelMap.addAttribute("categoryList", categoryList);
        modelMap.addAttribute("visitList", visitList);
        return "page/manager/manager";
    }

    /**
     * 分页显示来访
     *
     * @param page 当前页
     * @param size 页面大小
     * @return Map
     */
    @RequestMapping("/managerVisit")
    @ResponseBody
    public List<TVisit> managerVisit(Integer page, Integer size) {
        Page<TVisit> page1 = visitService.findByPagination(page, size);
        return page1.getContent();
    }
}
