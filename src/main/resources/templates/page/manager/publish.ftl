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
                <form class="bs-example bs-example-form" role="form" action="/article/publishArticle" method="post"
                      enctype="multipart/form-data">
                    <div class="input-group">
                        <span class="input-group-addon">文章标题</span>
                        <input type="text" class="form-control" placeholder="Title" name="articleTitle" maxlength="50">
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">发布时间</span>
                        <input id="publishTime" type="text" class="form-control" placeholder="Time" name="articleTime"
                               maxlength="50">
                        <script>
                            document.getElementById('publishTime').value = format(new Date().getTime());

                            function add0(m) {
                                return m < 10 ? '0' + m : m
                            }

                            function format(shijianchuo) {
                                //shijianchuo是整数，否则要parseInt转换
                                var time = new Date(shijianchuo);
                                var y = time.getFullYear();
                                var m = time.getMonth() + 1;
                                var d = time.getDate();
                                var h = time.getHours();
                                var mm = time.getMinutes();
                                var s = time.getSeconds();
                                return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
                            }
                        </script>
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">是否原创</span>
                        <select class="form-control" name="articleTag">
                            <option value="原创">原创</option>
                            <option value="转载">转载</option>
                        </select>
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">文章类别</span>
                        <select class="form-control" name="categoryId">
                            <#list categoryList as list>
                                <option value="${list.categoryId}">${list.categoryName}</option>
                            </#list>
                        </select>
                    </div>
                    <br>
                    <input type="hidden" name="articleContent" id="articleContent">
                    <div id="editor"></div>
                    <script type="text/javascript" src="/js/wangEditor.min.js"></script>
                    <script type="text/javascript">
                        var E = window.wangEditor;
                        var editor = new E('#editor');
                        // 限制一次最多上传 5 张图片
                        editor.customConfig.uploadImgMaxLength = 5;
                        // 指定图片服务器
                        editor.customConfig.uploadImgServer = '/article/uploadPhoto';
                        editor.customConfig.uploadFileName = 'file';
                        // 将 timeout 时间改为 3s
                        editor.customConfig.uploadImgTimeout = 3000;
                        editor.customConfig.uploadImgHooks = {
                            customInsert: function (insertImg, result, editor) {
                                var url = result.url;
                                insertImg(url)
                            }
                        };
                        editor.create();
                    </script>
                    <br>
                    <button id="btn1" class="btn btn-primary" style="float: right;" type="submit">发布</button>
                    <script type="text/javascript">
                        document.getElementById('btn1').addEventListener('click', function () {
                            var html = editor.txt.html();
                            var filterHtml = filterXSS(html);  // 此处进行 xss 攻击过滤
                            document.getElementById("articleContent").value = filterHtml;
                            alert(filterHtml);
                        });
                    </script>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>