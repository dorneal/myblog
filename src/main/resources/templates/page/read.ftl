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
    <script src="/js/jquery.min.js"></script>
</head>
<body>
<!-- 主体 -->
<div id="main">
    <ol class="breadcrumb">
        <span class="icon-location2"></span>
        <li class="active">黑天白夜</li>
        <li><a href="/public/index">Home</a></li>
        <li class="active">${articleVo.tArticleEX.articleTitle}</li>
    </ol>
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
            <button type="button" onclick="changeFace()"><span class="icon-smile"></span></button>
            <script>
                $(document).ready(
                        function () {
                            var $span = $("button[type=button]").find("span");
                            var id = $("input[type=hidden]").val();
                            $.post("/like/showLike", {"articleId": id}, function (data) {
                                if (data.code === 1) {
                                    $span.removeClass("icon-smile").addClass("icon-smile2");
                                } else {
                                    $span.removeClass("icon-smile2").addClass("icon-smile");
                                }
                            }, "json");
                        });

                function changeFace() {
                    var $span = $("button[type=button]").find("span");
                    var id = $("input[type=hidden]").val();
                    if ($span.hasClass("icon-smile")) {
                        $.post("/like/like", {"articleId": id}, function (data) {
                            if (data.code === 1) {
                                $span.removeClass("icon-smile").addClass("icon-smile2");
                            }
                        }, "json");
                    } else {
                        $.post("/like/dislike", {"articleId": id}, function (data) {
                            if (data.code === 1) {
                                $span.removeClass("icon-smile2").addClass("icon-smile");
                            }
                        }, "json");
                    }
                }
            </script>
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
            <!--PC和WAP自适应版-->
            <div id="SOHUCS" sid="${articleVo.tArticleEX.articleId}"></div>
            <script type="text/javascript">
                (function () {
                    var appid = 'cyteoUJ8P';
                    var conf = '23c0e8026b1cba45ef9f51cfdd5bc48b';
                    var width = window.innerWidth || document.documentElement.clientWidth;
                    if (width < 960) {
                        window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
                    } else {
                        var loadJs = function (d, a) {
                            var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
                            var b = document.createElement("script");
                            b.setAttribute("type", "text/javascript");
                            b.setAttribute("charset", "UTF-8");
                            b.setAttribute("src", d);
                            if (typeof a === "function") {
                                if (window.attachEvent) {
                                    b.onreadystatechange = function () {
                                        var e = b.readyState;
                                        if (e === "loaded" || e === "complete") {
                                            b.onreadystatechange = null;
                                            a()
                                        }
                                    }
                                } else {
                                    b.onload = a
                                }
                            }
                            c.appendChild(b)
                        };
                        loadJs("https://changyan.sohu.com/upload/changyan.js", function () {
                            window.changyan.api.config({appid: appid, conf: conf})
                        });
                    }
                })();
            </script>
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
                    <li><a href="/category/getCategoryArticle?categoryId=${categoryList.tCategory.categoryId}"
                           title="${categoryList.tCategory.categoryName}">${categoryList.tCategory.categoryName}</a>
                        <span
                                class="icon-bookmarks"></span> <span>${categoryList.other.articleNum}</span></li>
                </#list>
            </ul>
        </div>
        <div class="aside-suggest">
            <h3>阅读推荐</h3>
            <ul>
                <#list listSuggestArticle as list>
                    <li><a href="/public/readArticle?articleId=${list.tArticleEX.articleId}"
                           title="${list.tArticleEX.articleTitle}">${list.tArticleEX.articleTitle}</a></li>
                </#list>
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
                                                   target="_blank">湘ICP备17017819号</a> <br> <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43030302000105"><p><img src="/images/icon/备案图标.png"/> 湘公网安备 43030302000105号</p></a>  <a
        href="https://baike.baidu.com/item/%E9%81%BF%E9%A3%8E%E6%B8%AF%E5%8E%9F%E5%88%99" target="_blank">避风港原则</a>
</div>
<!-- end footer -->
</body>
</html>