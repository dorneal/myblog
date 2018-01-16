package com.neal.myblog.entity;


/**
 * 文章包装类
 *
 * @author neal
 */
public class TArticleVO {
    private TArticleEX tArticleEX;
    private TCategory tCategory;
    private TView tView;
    private TLike tLike;

    public TArticleEX gettArticleEX() {
        return tArticleEX;
    }

    public void settArticleEX(TArticleEX tArticleEX) {
        this.tArticleEX = tArticleEX;
    }

    public TCategory gettCategory() {
        return tCategory;
    }

    public void settCategory(TCategory tCategory) {
        this.tCategory = tCategory;
    }

    public TView gettView() {
        return tView;
    }

    public void settView(TView tView) {
        this.tView = tView;
    }

    public TLike gettLike() {
        return tLike;
    }

    public void settLike(TLike tLike) {
        this.tLike = tLike;
    }
}
