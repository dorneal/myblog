package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TVisit;
import com.neal.myblog.repository.VisitRepository;
import com.neal.myblog.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 类别service 实现类
 *
 * @author Neal
 * @see com.neal.myblog.service.VisitService
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

    @Override
    public int countVisit() {
        return visitRepository.countVisit();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveVisitor(TVisit tVisit) {
        visitRepository.save(tVisit);
    }

    @Override
    public int countByVisitIp(String visitIp) {
        return visitRepository.countByVisitIp(visitIp);
    }

    @Override
    public long getByVisitIp(String visitIp) {
        return visitRepository.getByVisitIp(visitIp);
    }
}
