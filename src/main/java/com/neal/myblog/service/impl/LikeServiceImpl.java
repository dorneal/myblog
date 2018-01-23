package com.neal.myblog.service.impl;

import com.neal.myblog.repository.LikeRepository;
import com.neal.myblog.service.LikeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 点赞service实现类
 *
 * @author Neal
 */
@Service("likeService")
public class LikeServiceImpl implements LikeService {
    @Resource
    private LikeRepository likeRepository;

    @Override
    public int countLike() {
        return likeRepository.countLike();
    }
}
