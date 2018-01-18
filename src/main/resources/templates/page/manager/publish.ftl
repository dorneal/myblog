<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>文章发布</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/manager.css">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script src="/js/xss.js"></script>
</head>
<body>
<#include "./aside.ftl">

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                文章发布
            </h3>
        </div>
        <div class="panel-body">
            <div>
                <form class="bs-example bs-example-form" role="form" action="#" method="post">
                    <div class="input-group">
                        <span class="input-group-addon">文章标题</span>
                        <input type="text" class="form-control" placeholder="Title" name="articletitle" maxlength="50">
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">文章作者</span>
                        <select class="form-control" name="authorid">
                            <option value="1">neal</option>
                            <option value="2">每日美文</option>
                            <option value="3">我是励志师</option>
                        </select>
                    </div>
                    <input type="hidden" class="form-control" placeholder="time" name="articletime" maxlength="50">
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">文章类别</span>
                        <select class="form-control" name="categoryid">
                            <option value="1">个人文章</option>
                            <option value="2">笔记</option>
                            <option value="5">数据概述</option>
                            <option value="3">网络美文</option>
                            <option value="4">每日一文</option>
                        </select>
                    </div>
                    <br>
                    <div id="editor"></div>
                    <!-- 注意， 只需要引用 JS，无需引用任何 CSS ！！！-->
                    <script type="text/javascript" src="/js/wangEditor.min.js"></script>
                    <script type="text/javascript">
                        var E = window.wangEditor;
                        var editor = new E('#editor');
                        // // 限制一次最多上传 5 张图片
                        editor.customConfig.uploadImgMaxLength = 5;
                        editor.customConfig.uploadImgServer = '/upload';
                        editor.create();
                    </script>
                    <br>
                    <button id="btn1" class="btn btn-primary" style="float: right;" type="submit">发布</button>
                    <script type="text/javascript">
                        document.getElementById('btn1').addEventListener('click', function () {
                            var html = editor.txt.html();
                            var filterHtml = filterXSS(html);  // 此处进行 xss 攻击过滤
                            alert(filterHtml);
                        }, false);
                    </script>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>