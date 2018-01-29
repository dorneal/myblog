package com.neal.myblog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * 启动器(记得使用注解扫描mapper)
 *
 * @author neal
 */
@EnableTransactionManagement
@SpringBootApplication
@MapperScan("com.neal.myblog.mapper")
public class MyblogApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // 注意这里要指向原先用main方法执行的Application启动类
        return builder.sources(MyblogApplication.class);
    }
}
