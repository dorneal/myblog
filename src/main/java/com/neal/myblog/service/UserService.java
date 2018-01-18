package com.neal.myblog.service;

import com.neal.myblog.entity.TUser;

/**
 * 用户service
 *
 * @author Neal
 */
public interface UserService {
    /**
     * 查询登录
     *
     * @param tUser TUser
     * @return TUser
     */
    TUser login(TUser tUser);
}
