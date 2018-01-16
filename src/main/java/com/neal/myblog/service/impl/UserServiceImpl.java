package com.neal.myblog.service.impl;

import com.neal.myblog.mapper.UserMapper;
import com.neal.myblog.service.UserService;
import org.springframework.stereotype.Service;


import javax.annotation.Resource;

/**
 * 用户service实现类
 *
 * @author Neal
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;


}
