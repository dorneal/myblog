package com.neal.myblog.entity;


import javax.persistence.*;

/**
 * 文章属性实体类
 *
 * @author neal
 */
@Entity
@Table(name = "t_category")
public class TCategory {

    @Id
    @GeneratedValue
    private long categoryId;
    @Column(nullable = false, name = "category_name")
    private String categoryName;


    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }


    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

}
