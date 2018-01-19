package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TVisit;
import com.neal.myblog.repository.VisitRepository;
import com.neal.myblog.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * 类别service 实现类
 *
 * @author Neal
 */
@Service("visitService")
public class VisitServiceImpl implements VisitService {

    @Autowired
    private VisitRepository visitRepository;

    @Override
    public Page<TVisit> findByPagination(Integer page, Integer size) {
        Pageable pageable = new PageRequest(page, size);
        return visitRepository.findAll(pageable);
    }
}
