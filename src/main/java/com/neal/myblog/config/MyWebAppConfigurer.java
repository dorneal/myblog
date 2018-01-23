package com.neal.myblog.config;

import com.neal.myblog.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 自定义适配器：
 * 1.配置登录拦截器
 *
 * @author Neal
 */
@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // addPathPatterns 添加拦截规则
        // excludePathPatterns 需要排除的
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/article/**").addPathPatterns("/user/**").addPathPatterns("/manager/**")
                .excludePathPatterns("/user/loginPage", "/user/login");
        super.addInterceptors(registry);
    }
}
