<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台管理</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/manager.css">
</head>
<body>
<!-- 侧边栏 -->
<#include "managerAside.ftl">

<!-- 主体 -->
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                文章管理
            </h3>
        </div>
        <div class="panel-body">

            <table class="table table-condensed">
                <caption>
                    <form action="/manager/findByArticleSearch" method="post">
                        <label>
                            <input type="search" name="articletitle" maxlength="50">
                        </label>
                        <button type="submit">搜索</button>
                    </form>
                </caption>
                <thead>
                <tr>
                    <th>文章ID</th>
                    <th>文章标题</th>
                    <th>创作时间</th>
                    <th>是否原创</th>
                    <th>类别</th>
                    <th>浏览</th>
                    <th>点赞</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="tbodyVisit">
                </tbody>
            </table>
            <ul class="pagination">
                <li><a onclick="getPrePage()">«</a></li>
                <li class="active"><a name="currentPage">第<span id="pageNum"></span>页</a></li>
                <li><a onclick="getNextPage()">»</a></li>
            </ul>
            <script src="/js/jquery.min.js"></script>
            <script src="/js/timestampConversion.js"></script>
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
    </div>
</div>
</body>
</html>