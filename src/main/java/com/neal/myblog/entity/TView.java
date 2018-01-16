package com.neal.myblog.entity;


/**
 * 浏览实体类
 *
 * @author neal
 */
public class TView {

    private long viewId;
    private long articleId;
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
