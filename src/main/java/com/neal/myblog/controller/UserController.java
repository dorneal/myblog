package com.neal.myblog.controller;

import com.neal.myblog.entity.TUser;
import com.neal.myblog.service.UserService;
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
     * @return 视图
     */
    @RequestMapping("/loginPage")
    public String loginPage() {
        return "page/login";
    }

    /**
     * 处理登录
     *
     * @param user    TUser
     * @param request HttpServletRequest
     * @return json
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> login(TUser user, HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>(2);
        TUser tUser = userService.login(user);
        if (tUser != null) {
            // 往session中放入用户
            request.getSession().setAttribute("user", tUser);
            // 设置session过期时间
            request.getSession().setMaxInactiveInterval(30 * 60);
            map.put("code", 1);
            map.put("url", "/back/manager");
        } else {
            map.put("msg", "密码错误！！！");
        }
        return map;
    }
}
