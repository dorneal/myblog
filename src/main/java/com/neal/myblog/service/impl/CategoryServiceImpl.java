package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TCategory;
import com.neal.myblog.repository.CategoryRepository;
import com.neal.myblog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 类别service 实现类
 *
 * @author Neal
 */
@Service("categoryService")
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<TCategory> listCategory() {
        return categoryRepository.listCategory();
    }
}
