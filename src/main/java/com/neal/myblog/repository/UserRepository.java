package com.neal.myblog.repository;

import com.neal.myblog.entity.TUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 * 简单SQL，使用JPA操作
 *
 * @author Neal
 */
public interface UserRepository extends CrudRepository<TUser, String> {
    /**
     * 登录
     *
     * @param userName 用户名
     * @param userPass 密码
     * @return TUser
     */
    @Query(value = "SELECT user FROM TUser user where user.userName=:userName and user.userPass=:userPass")
    TUser login(@Param("userName") String userName, @Param("userPass") String userPass);
}
