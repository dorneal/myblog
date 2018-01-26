package com.neal.myblog.service.impl;

import com.neal.myblog.entity.TLike;
import com.neal.myblog.repository.LikeRepository;
import com.neal.myblog.service.LikeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveLike(TLike tLike) {
        likeRepository.save(tLike);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteLike(long viewId) {
        likeRepository.delete(viewId);
    }

    @Override
    public int countByArticleId(long articleId, long visitId) {
        return likeRepository.countByArticleId(articleId, visitId);
    }

    @Override
    public long findLikeId(long articleId, long visitId) {
        return likeRepository.findLikeId(articleId, visitId);
    }
}
