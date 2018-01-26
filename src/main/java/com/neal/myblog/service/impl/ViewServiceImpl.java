package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TView;
import com.neal.myblog.repository.ViewRepository;
import com.neal.myblog.service.ViewService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * ViewService实现类
 *
 * @author Neal
 */
@Service("viewService")
public class ViewServiceImpl implements ViewService {
    @Resource
    private ViewRepository viewRepository;

    @Override
    public int countByViewId(long articleId, long visitId) {
        return viewRepository.countByViewId(articleId, visitId);
    }

    @Override
    public void saveView(TView view) {
        viewRepository.save(view);
    }
}
