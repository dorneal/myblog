package com.neal.myblog.controller;

import com.neal.myblog.entity.TUser;
import com.neal.myblog.service.UserService;
import freemarker.template.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * 用户controller
 *
 * @author Neal
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    /**
     * 返回登录页面
     *
     * @return String
     */
    @RequestMapping("/loginPage")
    public String loginPage() {
        return "page/login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> login(TUser user, HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>(3);
        TUser tUser = userService.login(user);
        if (tUser != null) {
            request.getSession().setAttribute("user", tUser);
            map.put("code", 1);
            map.put("url", "/manager/managerArticle");
        } else {
            map.put("msg", "密码错误！！！");
        }
        return map;
    }
}
