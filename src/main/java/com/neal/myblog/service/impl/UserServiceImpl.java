package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TUser;
import com.neal.myblog.mapper.UserMapper;
import com.neal.myblog.service.UserService;

import static com.neal.myblog.util.Base64.encode;

import org.springframework.stereotype.Service;


import javax.annotation.Resource;
import java.util.List;

/**
 * 用户service实现类
 *
 * @author Neal
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;


    @Override
    public TUser login(TUser tUser) {
        /* 解密 */
        String pass1 = tUser.getUserPass();
        pass1 = encode(encode(pass1));
        tUser.setUserPass(pass1);
        return userMapper.login(tUser);
    }
}
