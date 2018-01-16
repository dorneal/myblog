package com.neal.myblog.entity;


/**
 * 文章实体类
 *
 * @author neal
 */
public class TArticle {

    private long articleId;
    private String articleTitle;
    private java.sql.Timestamp articleTime;
    private String articleContent;
    private String articleTag;
    private long categoryId;


    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }


    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }


    public java.sql.Timestamp getArticleTime() {
        return articleTime;
    }

    public void setArticleTime(java.sql.Timestamp articleTime) {
        this.articleTime = articleTime;
    }


    public String getAritcleContent() {
        return articleContent;
    }

    public void setAritcleContent(String aritcleContent) {
        this.articleContent = aritcleContent;
    }


    public String getArticleTag() {
        return articleTag;
    }

    public void setArticleTag(String articleTag) {
        this.articleTag = articleTag;
    }


    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

}
