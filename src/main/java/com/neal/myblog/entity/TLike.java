package com.neal.myblog.entity;


import javax.persistence.*;

/**
 * 点赞实体类
 *
 * @author neal
 */
@Entity
@Table(name = "t_like")
public class TLike {
    @Id
    @GeneratedValue
    private long likeId;
    @Column(nullable = false, name = "article_id")
    private long articleId;
    @Column(nullable = false, name = "visit_id")
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
