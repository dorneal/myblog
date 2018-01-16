package com.neal.myblog.entity;


/**
 * 点赞实体类
 *
 * @author neal
 */
public class TLike {

    private long likeId;
    private long articleId;
    private long visitId;


    public long getLikeId() {
        return likeId;
    }

    public void setLikeId(long likeId) {
        this.likeId = likeId;
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
