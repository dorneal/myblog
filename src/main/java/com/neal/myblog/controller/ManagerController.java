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
import org.springframework.web.bind.annotation.RequestMethod;
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
     * @return 视图
     */
    @RequestMapping("/manager")
    public String manager(ModelMap modelMap) {
        List<TCategory> categoryList = categoryService.listCategory();
        modelMap.addAttribute("categoryList", categoryList);
        return "page/manager/manager";
    }

    /**
     * ajax请求分页显示来访
     *
     * @param page 当前页
     * @param size 页面大小
     * @return json
     */
    @RequestMapping(value = "/managerVisit", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> managerVisit(Integer page, Integer size) {
        Map<String, Object> map = new HashMap<>(3);
        Page<TVisit> page1 = visitService.findByPagination(page, size);
        List<TVisit> list = page1.getContent();
        if (list.size() == 0) {
            map.put("code", 0);
            map.put("msg", "没有了!!!");
        } else {
            map.put("code", 1);
            map.put("data", list);
        }
        return map;
    }
}
