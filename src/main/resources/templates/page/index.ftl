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
    <iframe src="/css/rain.html"></iframe>
</div>
<!-- end header -->

<!-- Bootstrap3 -->
<!-- main -->
<div id="main">
    <!-- content -->
    <div id="content">
        <div class="content-top">
            <div class="content-top-left">
                <a href="" title="">只看原创</a>&nbsp;&nbsp;
                查看<label>
                <select name="years">
                    <option value="1">2018</option>
                    <option value="2">2017</option>
                    <option value="3">2016</option>
                </select>
            </label>文章
            </div>
            <div class="content-top-right">
                <input type="search" name="" value="" placeholder="搜索一下">
            </div>
        </div>

        <div id="all-article">
            <div class="article">
                <div class="article-content-introduction">
                    <div class="article-title-link">
                        <h3><a href="" title="">回首2017</a></h3>
                    </div>
                    <div class="article-content">
                        <p>生活的方向，不能曲折，梦想的指引，不能迷茫，岁月的流逝，不能阻挡，未来的天空，不缺希望，2017的经历，总结新生的力量，迎接2018的光芒，愿成功伴你飞扬。</p>
                    </div>
                    <div class="date-author-info">
                        <p>
                            <span class="icon-clock"></span> <span style="margin-right: 10px">2018.01.02 16:05:42</span>
                            <span class="icon-eye"></span> <span style="margin-right: 10px">256</span>
                            <span class="icon-bubble2"></span> <span style="margin-right: 10px">3</span>
                        </p>
                    </div>
                </div>
            </div>
            <script src="/js/jquery.min.js"></script>
            <script>
                //初始化
                $(document).ready(getPage(0));
                var $a = $("li.active").find("a[name=currentPage]").find("span#pageNum");

                // 请求
                function getPage(currentPage) {
                    var $tbodyVisit = $("#tbodyVisit");
                    $.post("/article/managerArticleByPage", {currentPage: currentPage}, function (data) {
                        if (data.code === 1) {
                            $tbodyVisit.empty();
                            var s = "";
                            for (var i in data.data) {
                                s += "<tr><td>" + data.data[i].tArticleEX.articleId + "</td><td>" + data.data[i].tArticleEX.articleTitle + "</td><td>" + format(data.data[i].tArticleEX.articleTime) + "</td><td>" + data.data[i].tArticleEX.articleTag + "</td><td>" + data.data[i].tCategory.categoryName + "</td><td>" + data.data[i].other.viewNum + "</td><td>" + data.data[i].other.likeNum + "</td><td>" +
                                        "<a href=/article/toUpdateArticlePage?articleId=" + data.data[i].tArticleEX.articleId + ">更新</a> <a href=javascript:if(confirm('确实要删除吗?'))location='/article/deleteArticle?articleId=" + data.data[i].tArticleEX.articleId + ">删除</a>" + "</td></tr>";
                            }
                            $tbodyVisit.html(s);
                            $a.text(currentPage);
                        } else if (data.code === 0) {
                            $('ul.pagination li:last').addClass('disabled');
                        } else {
                            alert("未知错误！！！");
                        }
                    }, "json")
                }

                function add0(m) {
                    return m < 10 ? '0' + m : m
                }

                function format(timestrip) {
                    //timestrip是整数，否则要parseInt转换
                    var time = new Date(timestrip);
                    var y = time.getFullYear();
                    var m = time.getMonth() + 1;
                    var d = time.getDate();
                    var h = time.getHours();
                    var mm = time.getMinutes();
                    var s = time.getSeconds();
                    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
                }

                // 上一页
                function getPrePage() {
                    if (parseInt($a.text()) > 0) {
                        getPage((parseInt($a.text()) - 1));
                    } else {
                        $('ul.pagination li:first').addClass('disabled');
                    }
                }

                // 下一页
                function getNextPage() {
                    getPage((parseInt($a.text()) + 1));
                }
            </script>
        </div>

        <script type="text/javascript">
            //获取列表中的原有内容
            var content = document.getElementById("all-article").innerHTML;

            //每被调用一次，就将网页原有内容添加一份，这个大家可以写自己要加载的内容或指令
            function addLi() {
                document.getElementById("all-article").innerHTML += content;
            }

            /*
             * 监听滚动条，本来不想用jQuery但是发现js里面监听滚动条的事件不好添加，这边就引用了Jquery的$(obj).scroll();这个方法了
             */
            $(window).scroll(function () {
                //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
                var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
                //clientHeight是网页在浏览器中的可视高度，
                var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
                //scrollTop是浏览器滚动条的top位置，
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
                if (scrollTop + clientHeight === htmlHeight) {
                    addLi();
                }
            })
        </script>
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
                    <li><span class="icon-books"></span> 原创数：<span>${originalArticleCount!}</span></li>
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
                            href="${listRank.tArticleEX.articleId}"
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