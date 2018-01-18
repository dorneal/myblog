package com.neal.myblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 后台管理
 *
 * @author Neal
 */
@RequestMapping("/manager")
@Controller
public class ManagerController {
    /**
     * 返回管理页
     *
     * @return String
     */
    @RequestMapping("/managerPage")
    public String managerPage() {
        return "page/manager/manager";
    }


    @RequestMapping("/managerArticle")
    public String managerArticle(){
        return null;
    }
}
