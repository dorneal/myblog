<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>管理</title>
    <link rel="shortcut icon" href="../../../static/images/icon/icon.ico">
    <link rel="stylesheet" href="../../../static/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../static/css/manager.css">
</head>
<body>
<!-- 侧边栏 -->
<div id="aside">
    <ul>
        <span>NealBlog</span>
        <li><a href="" title="">文章管理</a></li>
        <li><a href="" title="">文章发布</a></li>
        <li><a href="" title="">管理</a></li>
    </ul>
</div>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                管理
            </h3>
        </div>
        <div class="panel-body">
            <table class="table table-condensed">
                <caption>总文章管理</caption>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>文章名称</th>
                    <th>日期</th>
                    <th>点击数</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>0</td>
                    <td>我改变的事物</td>
                    <td>2017年9月7日</td>
                    <td>103</td>
                    <td><a href="/manager/findByArticleId?articleid=0">更新</a> <a
                            href="/manager/deleteArticle?articleid=0">删除</a></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>北平的秋</td>
                    <td>2017年9月5日</td>
                    <td>108</td>
                    <td><a href="/manager/findByArticleId?articleid=6">更新</a> <a
                            href="/manager/deleteArticle?articleid=6">删除</a></td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>关于鲁迅</td>
                    <td>2017年9月4日</td>
                    <td>128</td>
                    <td><a href="/manager/findByArticleId?articleid=7">更新</a> <a
                            href="/manager/deleteArticle?articleid=7">删除</a></td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>花脸雀</td>
                    <td>2017年9月3日</td>
                    <td>110</td>
                    <td><a href="/manager/findByArticleId?articleid=8">更新</a> <a
                            href="/manager/deleteArticle?articleid=8">删除</a></td>
                </tr>

                <tr>
                    <td>9</td>
                    <td>一个到处流浪的城市</td>
                    <td>2017年9月2日</td>
                    <td>120</td>
                    <td><a href="/manager/findByArticleId?articleid=9">更新</a> <a
                            href="/manager/deleteArticle?articleid=9">删除</a></td>
                </tr>

                <tr>
                    <td>1444</td>
                    <td>归并排序——原地归并排序</td>
                    <td>2017年9月29日</td>
                    <td>63</td>
                    <td><a href="/manager/findByArticleId?articleid=1444">更新</a> <a
                            href="/manager/deleteArticle?articleid=1444">删除</a></td>
                </tr>

                <tr>
                    <td>1442</td>
                    <td>符号表——基于二叉查找树的符号表</td>
                    <td>2017年9月28日</td>
                    <td>59</td>
                    <td><a href="/manager/findByArticleId?articleid=1442">更新</a> <a
                            href="/manager/deleteArticle?articleid=1442">删除</a></td>
                </tr>

                <tr>
                    <td>1443</td>
                    <td>背包、队列和栈——下压堆栈</td>
                    <td>2017年9月28日</td>
                    <td>49</td>
                    <td><a href="/manager/findByArticleId?articleid=1443">更新</a> <a
                            href="/manager/deleteArticle?articleid=1443">删除</a></td>
                </tr>

                <tr>
                    <td>1440</td>
                    <td>环境配置——Idea安装配置</td>
                    <td>2017年9月27日</td>
                    <td>86</td>
                    <td><a href="/manager/findByArticleId?articleid=1440">更新</a> <a
                            href="/manager/deleteArticle?articleid=1440">删除</a></td>
                </tr>

                <tr>
                    <td>1439</td>
                    <td>环境配置——Sublime Text3配置</td>
                    <td>2017年9月26日</td>
                    <td>140</td>
                    <td><a href="/manager/findByArticleId?articleid=1439">更新</a> <a
                            href="/manager/deleteArticle?articleid=1439">删除</a></td>
                </tr>

                </tbody>
            </table>
            <table class="table table-condensed">
                <caption>作者管理</caption>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>发布文章数量</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>1</td>
                    <td>neal</td>
                    <td>17</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>每日美文</td>
                    <td>0</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>我是励志师</td>
                    <td>1413</td>
                </tr>

                </tbody>
            </table>
            <table class="table table-condensed">
                <caption>类别管理</caption>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>1</td>
                    <td>个人文章</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>笔记</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>数据概述</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>网络美文</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>每日一文</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>