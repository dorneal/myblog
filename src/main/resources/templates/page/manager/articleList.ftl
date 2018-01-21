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
<#include "./aside.ftl">

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
                    <th>是否原创</th>
                    <th>文章标题</th>
                    <th>类别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <#list articleList! as list>
                <tr>
                    <td>${list.tArticleEX.articleId}</td>
                    <td>${list.tArticleEX.articleTag}</td>
                    <td>${list.tArticleEX.articleTitle}</td>
                    <td>${list.tCategory.categoryName}</td>
                    <td>
                        <a href="/article/toUpdateArticlePage?articleId=${list.tArticleEX.articleId}">更新</a>
                        <a href="javascript:if(confirm('确实要删除吗?'))location='/article/deleteArticle?articleId=${list.tArticleEX.articleId}'">删除</a>
                    </td>
                </tr>
                </#list>

                </tbody>
            </table>
            <ul class="pagination">
                <li class="disabled"><a>«</a></li>
                <li class="active"><a name="currentPage">第1页</a></li>
                <li>
                    <a href="/manager/managerByArticle?currentPage=2">»</a>
                </li>
                <li>
                    <a href="/manager/managerByArticle?currentPage=71">尾页</a>
                </li>
                <li>
                    &nbsp;
                    <label>
                        <select class="form-control" name="currentPage" style="width: 70px;display: inline"
                                onchange="location.href=this.value;">
                            <option value="/manager/managerByArticle?currentPage=1">1</option>
                            <option value="/manager/managerByArticle?currentPage=2">2</option>
                        </select>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>