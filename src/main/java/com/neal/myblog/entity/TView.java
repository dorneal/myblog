package com.neal.myblog.entity;


import javax.persistence.*;

/**
 * 浏览实体类
 *
 * @author neal
 */
@Entity
@Table(name = "t_view")
public class TView {
    @Id
    @GeneratedValue
    private long viewId;
    @Column(nullable = false, name = "article_id")
    private long articleId;
    @Column(nullable = false, name = "visit_id")
    private long visitId;


    public long getViewId() {
        return viewId;
    }

    public void setViewId(long viewId) {
        this.viewId = viewId;
    }


    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }


    public long getVisitId() {
        return visitId;
    }

    public void setVisitId(long visitId) {
        this.visitId = visitId;
    }

}
