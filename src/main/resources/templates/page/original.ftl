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
    <title>NealBlog</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/iconmoon.css">
    <link rel="stylesheet" href="/css/myStyle.css">
    <link rel="stylesheet" href="/css/docs.css">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
</head>
<body>
<!-- header -->
<div id="header">
    <iframe src="/rain.html"></iframe>
</div>
<!-- end header -->

<!-- Bootstrap3 -->
<!-- main -->
<div id="main">
    <ol class="breadcrumb">
        <span class="icon-location2"></span>
        <li class="active">黑天白夜</li>
        <li><a href="/public/index">Home</a></li>
    </ol>
    <!-- content -->
    <div id="content">
        <div class="content-top">
            <div class="content-top-left">
                <a href="/public/getOriginal" title="">只看原创</a>&nbsp;&nbsp;
                查看<label>
                <select name="year">
                    <option>请选择年份</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select>
                <script>
                    $(function () {
                        $("select[name=year]").on('change', function () {
                            var selectId = $('select[name=year] option:selected');
                            if (selectId.val() == 2018) {
                                window.location.href = "/public/articleByYear?year=" + selectId.val();
                            } else if (selectId.val() == 2017) {
                                window.location.href = "/public/articleByYear?year=" + selectId.val();
                            } else if (selectId.val() == 2016) {
                                window.location.href = "/public/articleByYear?year=" + selectId.val();
                            }
                        })
                    });
                </script>
            </label>文章
            </div>
            <div class="content-top-right">
                <form name="searchForm" action="/public/searchArticleToRead" method="post">
                    <input type="text" name="keywords" maxlength="20" placeholder="搜索一下">
                    <input type="button"  onclick="checkKeywords()" value="搜索">
                    <script>
                        $(function () {
                            $("input[name=keywords]").click(function () {
                                $("input[name=keywords]").animate({"width": "220px"});
                            }).blur(function () {
                                $("input[name=keywords]").animate({"width": "170px"});
                            });
                        })
                    </script>
                </form>
                <script>
                    function checkKeywords() {
                        // 如果关键词输入为空，则不提交
                        if ($.trim($("input[name=keywords]").val()).length === 0) {
                            alert("关键词不能为空！！！");
                            return false;
                        } else {
                            $("form[name=searchForm]").submit();
                        }
                    }
                </script>
            </div>
        </div>
        <div id="all-article">
            <#if articleVOS??>
                <#list articleVOS as list>
                    <div class=article>
                        <div class=article-content-introduction>
                            <div class=article-title-link>
                                <h3>
                                    <a href="/public/readArticle?articleId=${list.tArticleEX.articleId}">${list.tArticleEX.articleTitle}</a>
                                </h3>
                            </div>
                            <div class="article-content">
                                <p>${list.tArticleEX.articleContent}</p>
                            </div>
                            <div class="date-author-info">
                                <p>
                                    <span class="icon-quill"></span> <span
                                        style="margin-right: 10px">${list.tArticleEX.articleTag}</span>
                                    <span class="icon-clock"></span> <span
                                        style="margin-right: 10px">${list.tArticleEX.articleTime}</span>
                                    <span class="icon-eye"></span> <span
                                        style="margin-right: 10px">${list.other.viewNum}</span>
                                    <span class="icon-heart"></span> <span
                                        style="margin-right: 10px">${list.other.likeNum}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </#list>
            </#if>
        </div>
    </div>
    <!-- end content -->

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
<!-- end main -->

<!-- 回到顶部 -->
<div id="elevator_item" style="display: none;">
    <a id="elevator" onclick="return false;" title="回到顶部"></a>
</div>

<script>
    $(function () {
        $(window).scroll(function () {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= 10) {
                $("#elevator_item").show();
            } else {
                $("#elevator_item").hide();
            }
        });
        $("#elevator").click(function () {
            $("html,body").animate({scrollTop: 0}, 300);
        });
    });
</script>

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