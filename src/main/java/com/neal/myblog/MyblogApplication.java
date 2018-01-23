package com.neal.myblog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
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
        return builder.sources(MyblogApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(MyblogApplication.class, args);
    }
}
