package com.neal.myblog.entity;


/**
 * 文章包装类
 *
 * @author neal
 */
public class TArticleVO {
    private TArticleEX tArticleEX;
    private TCategory tCategory;
    private Other other;

    public Other getOther() {
        return other;
    }

    public void setOther(Other other) {
        this.other = other;
    }

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
}
