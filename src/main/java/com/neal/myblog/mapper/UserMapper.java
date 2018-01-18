package com.neal.myblog.mapper;


import com.neal.myblog.entity.TUser;

/**
 * 用户mapper
 *
 * @author Neal
 */
public interface UserMapper {
    /**
     * 查询登录
     *
     * @param tUser TUser
     * @return TUser
     */
    TUser login(TUser tUser);
}
