package com.neal.myblog.service;

import com.neal.myblog.entity.TVisit;
import org.springframework.data.domain.Page;

import java.util.List;

/**
 * 来访Service
 *
 * @author Neal
 */
public interface VisitService {
    /**
     * 所有的类别
     *
     * @return List
     */
    List<TVisit> visitList();

    /**
     * 分页查询
     *
     * @param page 当前页
     * @param size 页面大小
     * @return Page
     */
    Page<TVisit> findByPagination(Integer page, Integer size);
}
