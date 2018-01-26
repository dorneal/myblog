package com.neal.myblog.interceptor;

import com.neal.myblog.entity.TVisit;
import com.neal.myblog.service.VisitService;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.InetAddress;

/**
 * 来访监听，如果是第一次来访，则存入数据库（如果注入为空，则需要加component注解）
 *
 * @author Neal
 */
@Component
public class VisitInterceptor implements HandlerInterceptor {
    @Resource
    private VisitService visitService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) {
        //获取IP，判断是否已经来过，否则添加
        String ip = getIp(request);
        if (ip != null) {
            int count = visitService.countByVisitIp(ip);
            // 第一次访问，保存
            if (count == 0) {
                TVisit tVisit = new TVisit();
                tVisit.setVisitIp(ip);
                visitService.saveVisitor(tVisit);
            }
            // 存入session，便于查询浏览记录
            request.getSession().setAttribute("visitIp", ip);
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) {
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {
    }


    /**
     * 获取IP地址
     *
     * @param request HttpServletRequest
     * @return String
     */
    private String getIp(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        String unknown = "unknown";
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
            String localIp = "127.0.0.1";
            if (localIp.equals(ip)) {
                //根据网卡取本机配置的IP
                InetAddress inetAddress = null;
                try {
                    inetAddress = InetAddress.getLocalHost();
                } catch (Exception e) {
                    e.printStackTrace();
                }
                ip = inetAddress != null ? inetAddress.getHostAddress() : null;
            }
        }
        // 多个代理的情况，第一个IP为客户端真实IP,多个IP按照','分割
        int ipLength = 15;
        if (ip != null && ip.length() > ipLength) {
            String comma = ",";
            if (ip.indexOf(comma) > 0) {
                ip = ip.substring(0, ip.indexOf(","));
            }
        }
        return ip;
    }
}
