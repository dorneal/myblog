package com.neal.myblog.entity;


import javax.persistence.*;

/**
 * 用户实体类
 *
 * @author neal
 */
@Entity
@Table(name = "t_user")
public class TUser {
    @Id
    @GeneratedValue
    private long userId;
    @Column(nullable = false, name = "user_name")
    private String userName;
    @Column(nullable = false, name = "user_pass")
    private String userPass;


    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

}
