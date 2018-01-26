package com.neal.myblog.controller;

import com.neal.myblog.entity.TLike;
import com.neal.myblog.service.LikeService;
import com.neal.myblog.service.VisitService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Neal
 */
@Controller
@RequestMapping("/like")
public class LikeController {

    @Resource
    private VisitService visitService;
    @Resource
    private LikeService likeService;

    /**
     * 文章点赞
     *
     * @param articleId 文章ID
     * @param request   HttpServletRequest
     * @return json
     */
    @RequestMapping("/like")
    @ResponseBody
    public Map<String, Object> like(long articleId, HttpServletRequest request) {
        // 获取文章ID，跟访客ID 进行查询是否已经点赞
        Map<String, Object> map = new HashMap<>(1);
        String visitIp = (String) request.getSession().getAttribute("visitIp");
        if (visitIp != null) {
            long visitId = visitService.getByVisitIp(visitIp);
            // 未点赞
            int count = likeService.countByArticleId(articleId, visitId);
            if (count == 0) {
                TLike tLike = new TLike();
                tLike.setVisitId(visitId);
                tLike.setArticleId(articleId);
                // 添加点赞记录
                likeService.saveLike(tLike);
            }
            map.put("code", 1);
        } else {
            map.put("code", 0);
        }
        return map;
    }


    /**
     * 取消点赞
     *
     * @param articleId 文章ID
     * @param request   HttpServletRequest
     * @return json
     */
    @RequestMapping("/dislike")
    @ResponseBody
    public Map<String, Object> dislike(long articleId, HttpServletRequest request) {
        // 获取文章ID，跟访客ID，进行查询是否已经点赞
        Map<String, Object> map = new HashMap<>(1);
        String visitIp = (String) request.getSession().getAttribute("visitIp");
        if (visitIp != null) {
            long visitId = visitService.getByVisitIp(visitIp);
            // 已经点赞
            int count = likeService.countByArticleId(articleId, visitId);
            if (count != 0) {
                //查询点赞ID
                long likeId = likeService.findLikeId(articleId, visitId);
                //取消点赞，删除记录
                likeService.deleteLike(likeId);
            }
            map.put("code", 1);
        } else {
            map.put("code", 0);
        }
        return map;
    }
}
