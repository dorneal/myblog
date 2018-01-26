package com.neal.myblog.service;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.domain.Page;


/**
 * 来访Service
 *
 * @author Neal
 */
public interface VisitService {

    /**
     * 分页查询
     *
     * @param page 当前页
     * @param size 页面大小
     * @return Page
     */
    Page<TVisit> findByPagination(Integer page, Integer size);

    /**
     * 查询来访数
     *
     * @return int
     */
    int countVisit();

    /**
     * 插入来访者数据
     *
     * @param tVisit TVisit
     */
    void saveVisitor(TVisit tVisit);

    /**
     * 根据IP地址，判断是否已经存在，返回count
     *
     * @param visitIp IP地址
     * @return int
     */
    int countByVisitIp(String visitIp);

    /**
     * 根据IP，查询访客ID
     *
     * @param visitIp 访客IP地址
     * @return 访客ID
     */
    long getByVisitIp(String visitIp);
}
