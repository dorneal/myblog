package com.neal.myblog.config;

import com.neal.myblog.interceptor.LoginInterceptor;
import com.neal.myblog.interceptor.VisitInterceptor;
import org.springframework.context.annotation.Bean;
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


    /**
     * 只有这种方法，拦截器才能注入service成功
     *
     * @return VisitInterceptor
     */
    @Bean
    public VisitInterceptor myInterceptor() {
        return new VisitInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // addPathPatterns 添加拦截规则
        // excludePathPatterns 需要排除的
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/article/**").addPathPatterns("/user/**").addPathPatterns("/back/**")
                .excludePathPatterns("/user/loginPage", "/user/login");
        registry.addInterceptor(myInterceptor()).addPathPatterns("/**");
        super.addInterceptors(registry);
    }
}
