package com.neal.myblog.entity;


/**
 * 文章属性实体类
 *
 * @author neal
 */
public class TCategory {

    private long categoryId;
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
