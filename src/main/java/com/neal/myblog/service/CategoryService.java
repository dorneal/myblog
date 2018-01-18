package com.neal.myblog.service;

import com.neal.myblog.entity.TCategory;

import java.util.List;

/**
 * 类别service
 *
 * @author Neal
 */
public interface CategoryService {
    /**
     * 所有的类别
     *
     * @return List
     */
    List<TCategory> listCategory();
}
