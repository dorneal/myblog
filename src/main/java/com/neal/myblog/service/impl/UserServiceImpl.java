package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TUser;
import com.neal.myblog.repository.UserRepository;
import com.neal.myblog.service.UserService;

import static com.neal.myblog.util.Base64.encode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户service实现类
 *
 * @author Neal
 * @see com.neal.myblog.service.UserService
 */
@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepository userRepository;

    @Override
    public TUser login(TUser tUser) {
        /* 两次加密 */
        String pass1 = tUser.getUserPass();
        pass1 = encode(encode(pass1));
        return userRepository.login(tUser.getUserName(), pass1);
    }
}
