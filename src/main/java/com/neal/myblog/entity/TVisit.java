package com.neal.myblog.entity;


import javax.persistence.*;

/**
 * 来访实体类
 *
 * @author neal
 */
@Entity
@Table(name = "t_visit")
public class TVisit {

    @Id
    @GeneratedValue
    private long visitId;
    @Column(nullable = false, name = "visit_ip")
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
