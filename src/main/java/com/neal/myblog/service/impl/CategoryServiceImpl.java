package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TCategory;
import com.neal.myblog.repository.CategoryRepository;
import com.neal.myblog.service.CategoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 类别service 实现类
 *
 * @author Neal
 * @see com.neal.myblog.service.CategoryService
 */
@Service("categoryService")
public class CategoryServiceImpl implements CategoryService {

    @Resource
    private CategoryRepository categoryRepository;

    @Override
    public List<TCategory> listCategory() {
        return categoryRepository.listCategory();
    }
}
