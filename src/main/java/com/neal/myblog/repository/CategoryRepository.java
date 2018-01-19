package com.neal.myblog.repository;


import com.neal.myblog.entity.TCategory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * 类别Repository
 *
 * @author Neal
 */
public interface CategoryRepository extends CrudRepository<TCategory, Long> {
    /**
     * 所有的类别
     *
     * @return List
     */
    @Query("SELECT c.categoryId,c.categoryName FROM TCategory c")
    List<TCategory> listCategory();
}
