<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="title" content="NealBlog,nealblog"/>
    <meta name="author" content="neal"/>
    <meta name="subject" content="个人博客,博客"/>
    <meta name="description" content="个人博客，笔记，文章"/>
    <meta name="keywords" content="个人博客,JAVA笔记分享,JAVA博客"/>
    <meta name="generator" content="sublime,idea"/>
    <meta name="language" content="java"/>
    <meta name="designer" content="neal,nealblog"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${articleVo.tArticleEX.articleTitle}</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/iconmoon.css">
    <link rel="stylesheet" href="/css/myStyle.css">
    <link rel="stylesheet" href="/css/docs.css">
    <link rel="stylesheet" href="/css/readPage.css">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
</head>
<body>
<!-- 主体 -->
<div id="main">
    <!-- 内容部分 -->
    <div id="content">
        <div class="article-title-info">
            <h3>${articleVo.tArticleEX.articleTitle}</h3>
            <div class="date-author-info">
                <span style="color: #FF0000;">${articleVo.tArticleEX.articleTag}</span>
                <span>${articleVo.tArticleEX.articleTime}</span>
                <span class="span-right"><span class="icon-eye"></span> <span>${articleVo.other.viewNum}</span></span>&nbsp;&nbsp;
                <span class="span-right"><span class="icon-heart"></span> <span>${articleVo.other.likeNum}</span></span>
            </div>
        </div>
        <input type="hidden" value="${articleVo.tArticleEX.articleId}">
        <div class="article-content-info">
        ${articleVo.tArticleEX.articleContent}
        </div>
        <div class="useful">
            <button type="button"><span class="icon-smile"></span></button>
        </div>
        <div class="pageContext">
            <#if (tArticleEX.articleId)??>
                <a href="/public/readArticle?articleId=${tArticleEX.articleId}"
                   title="${tArticleEX.articleTitle}"><span>${tArticleEX.articleTitle}</span></a>
            <#else>
                <a title="没有了"><span>哥，真的没有了</span></a>
            </#if>
            <#if (tArticleEX2.articleId)??>
                <a href="/public/readArticle?articleId=${tArticleEX2.articleId}"
                   title="${tArticleEX2.articleTitle}"><span>${tArticleEX2.articleTitle}</span></a>
            <#else>
                <a title="没有了"><span>哥，真的没有了</span></a>
            </#if>
        </div>
        <div id="conmment">
            <h3>留下你的脚印</h3>
            <div class="comment-info">
                <form action="read_submit" method="get" accept-charset="utf-8">
                    <textarea name="conmment" placeholder="来说两句吧.." rows="4" cols="70" style="resize: none;"></textarea>
                    <br/>
                    <button type="submit" class="btn btn-default btn-success">就这样</button>
                </form>
            </div>
            <div class="comment-content">
                <h4>查看评论</h4>
                <div class="comment-content-detail">
                    <p><span>1楼</span> 2018.01.03 15:48:32</p>
                    <p>说的很不错哦，大赞！</p>
                    <a href="" title="">回复</a>
                </div>
            </div>
        </div>
    </div>

    <!-- end -->

    <!-- aside -->
    <div id="aside">
        <div class="aside-info">
            <div class="aventar">
                <img src="/images/my.JPG" alt="我的头像">
                <h3>黑天白夜</h3>
                <p>你懂的越多，懂你的就越少！</p>
            </div>
            <div class="rank-count">
                <ul>
                    <li><span class="icon-fire"></span> 来访数：<span>${visitCount!}</span></li>
                    <li><span class="icon-books"></span> 总文章：<span>${articleCount!}</span></li>
                    <li><span class="icon-quill"></span> 原创数：<span>${originalArticleCount!}</span></li>
                    <li><span class="icon-heart"></span> 点赞数：<span>${likeCount!}</span></li>
                </ul>
            </div>
        </div>
        <div class="aside-rank">
            <h3>阅读排行</h3>
            <ul>
                <#list rankArticle as listRank>
                    <li><span class="li-span"><span
                            class="icon-price-tags"></span> <span>${listRank.other.viewNum}</span></span> <a
                            href="/public/readArticle?articleId=${listRank.tArticleEX.articleId}"
                            title="${listRank.tArticleEX.articleTitle}">${listRank.tArticleEX.articleTitle}</a></li>
                </#list>
            </ul>
        </div>
        <div class="aside-category">
            <h3>文章分类</h3>
            <ul>
                <#list categoryNumByArticle as categoryList>
                    <li><a href="" title="">${categoryList.tCategory.categoryName}</a> <span
                            class="icon-bookmarks"></span> <span>${categoryList.other.articleNum}</span></li>
                </#list>
            </ul>
        </div>
        <div class="aside-suggest">
            <h3>阅读推荐</h3>
            <ul>
                <li><a href="" title="">Ubuntu简单美化</a></li>
                <li><a href="" title="">Idea的轻使用</a></li>
                <li><a href="" title="">Sublime text3配置</a></li>
                <li><a href="" title=""></a></li>
                <li><a href="" title=""></a></li>
            </ul>
        </div>
    </div>
    <!-- end aside -->

    <!-- 滑动侧边栏 -->
    <div id="contact">
        <ul>
            <li><a href="https://github.com/dorneal" target="_blank"><span class="icon-github"></span></a></li>
            <li><a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=5NXX1NfT0NPd09LRpJWVyoeLiQ"
                   target="_blank"><span class="icon-mail4"></span></a></li>
        </ul>
    </div>
</div>

<!-- footer -->
<div id="footer">
    <p>Design By Neal Copyright&copy;2018 | 备案号：<a href="http://www.miitbeian.gov.cn/"
                                                   target="_blank">湘ICP备17017819号</a> | <a
            href="https://baike.baidu.com/item/%E9%81%BF%E9%A3%8E%E6%B8%AF%E5%8E%9F%E5%88%99" target="_blank">避风港原则</a>
    </p>
</div>
<!-- end footer -->
</body>
</html>