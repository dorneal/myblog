package com.neal.myblog.entity;


/**
 * 来访实体类
 *
 * @author neal
 */
public class TVisit {

    private long visitId;
    private String visitIp;


    public long getVisitId() {
        return visitId;
    }

    public void setVisitId(long visitId) {
        this.visitId = visitId;
    }


    public String getVisitIp() {
        return visitIp;
    }

    public void setVisitIp(String visitIp) {
        this.visitIp = visitIp;
    }

}
