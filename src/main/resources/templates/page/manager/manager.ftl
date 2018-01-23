<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>管理</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/manager.css">
</head>
<body>
<#include "./aside.ftl">

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                管理
            </h3>
        </div>
        <div class="panel-body">
            <table class="table table-condensed">
                <caption>来访管理</caption>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>IP</th>
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
            <script>
                //初始化
                $(document).ready(getPage(0, 10));

                var $a = $("li.active").find("a[name=currentPage]").find("span#pageNum");

                // 请求
                function getPage(page, size) {
                    var $tbodyVisit = $("#tbodyVisit");
                    $.post("/manager/managerVisit", {page: page, size: size}, function (data) {
                        if (data.code === 1) {
                            $tbodyVisit.empty();
                            var s = "";
                            for (var i in data.data) {
                                s += "<tr><td>" + data.data[i].visitId + "</td><td>" + data.data[i].visitIp + "</td></tr>";
                            }
                            $tbodyVisit.html(s);
                            $a.text(page);
                        } else if (data.code === 0) {
                            $('ul.pagination li:last').addClass('disabled');
                        } else {
                            alert("未知错误！！！")
                        }
                    }, "json")
                }

                // 上一页
                function getPrePage() {
                    if (parseInt($a.text()) > 0) {
                        getPage((parseInt($a.text()) - 1), 10);
                    } else {
                        $('ul.pagination li:first').addClass('disabled');
                    }
                }

                // 下一页
                function getNextPage() {
                    getPage((parseInt($a.text()) + 1), 10);
                }
            </script>
            <table class="table table-condensed">
                <caption>类别管理</caption>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                </tr>
                </thead>
                <tbody>
                <#list categoryList! as list>
                <tr>
                    <td>${list.categoryId}</td>
                    <td>${list.categoryName}</td>
                </tr>
                </#list>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>