<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台管理</title>
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
                    <td>
                        <a href="/manager/findByArticleId?articleid=0">更新</a>
                        <a href="/manager/deleteArticle?articleid=0">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>北平的秋</td>
                    <td>2017年9月5日</td>
                    <td>108</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=6">更新</a>
                        <a href="/manager/deleteArticle?articleid=6">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>关于鲁迅</td>
                    <td>2017年9月4日</td>
                    <td>128</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=7">更新</a>
                        <a href="/manager/deleteArticle?articleid=7">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>花脸雀</td>
                    <td>2017年9月3日</td>
                    <td>110</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=8">更新</a>
                        <a href="/manager/deleteArticle?articleid=8">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>9</td>
                    <td>一个到处流浪的城市</td>
                    <td>2017年9月2日</td>
                    <td>120</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=9">更新</a>
                        <a href="/manager/deleteArticle?articleid=9">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>1430</td>
                    <td>隐藏的美</td>
                    <td>2017年9月20日</td>
                    <td>60</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=1430">更新</a>
                        <a href="/manager/deleteArticle?articleid=1430">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>10</td>
                    <td>相爱的日子</td>
                    <td>2017年9月1日</td>
                    <td>124</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=10">更新</a>
                        <a href="/manager/deleteArticle?articleid=10">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>43</td>
                    <td>哭电视的母亲</td>
                    <td>2017年8月9日</td>
                    <td>154</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=43">更新</a>
                        <a href="/manager/deleteArticle?articleid=43">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>44</td>
                    <td>墙下短记</td>
                    <td>2017年8月8日</td>
                    <td>130</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=44">更新</a>
                        <a href="/manager/deleteArticle?articleid=44">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>45</td>
                    <td>大风</td>
                    <td>2017年8月7日</td>
                    <td>154</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=45">更新</a>
                        <a href="/manager/deleteArticle?articleid=45">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>46</td>
                    <td>爱情的徒刑</td>
                    <td>2017年8月6日</td>
                    <td>117</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=46">更新</a>
                        <a href="/manager/deleteArticle?articleid=46">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>47</td>
                    <td>阿什拉姆学校</td>
                    <td>2017年8月5日</td>
                    <td>101</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=47">更新</a>
                        <a href="/manager/deleteArticle?articleid=47">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>48</td>
                    <td>狼行成双</td>
                    <td>2017年8月4日</td>
                    <td>125</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=48">更新</a>
                        <a href="/manager/deleteArticle?articleid=48">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>49</td>
                    <td>不能被增加的人</td>
                    <td>2017年8月3日</td>
                    <td>151</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=49">更新</a>
                        <a href="/manager/deleteArticle?articleid=49">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>11</td>
                    <td>深夜调查</td>
                    <td>2017年8月31日</td>
                    <td>98</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=11">更新</a>
                        <a href="/manager/deleteArticle?articleid=11">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>12</td>
                    <td>泥沙俱下地生活</td>
                    <td>2017年8月30日</td>
                    <td>137</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=12">更新</a>
                        <a href="/manager/deleteArticle?articleid=12">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>50</td>
                    <td>蛇与人头骨</td>
                    <td>2017年8月2日</td>
                    <td>135</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=50">更新</a>
                        <a href="/manager/deleteArticle?articleid=50">删除</a>
                    </td>
                </tr>

                <tr>
                    <td>23</td>
                    <td>隐者之城</td>
                    <td>2017年8月29日</td>
                    <td>118</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=23">更新</a>
                        <a href="/manager/deleteArticle?articleid=23">删除</a>
                    </td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>我们为什么要过节</td>
                    <td>2017年8月28日</td>
                    <td>139</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=24">更新</a>
                        <a href="/manager/deleteArticle?articleid=24">删除</a>
                    </td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>回忆我的老师雷蒙德.卡佛</td>
                    <td>2017年8月27日</td>
                    <td>85</td>
                    <td>
                        <a href="/manager/findByArticleId?articleid=25">更新</a>
                        <a href="/manager/deleteArticle?articleid=25">删除</a>
                    </td>
                </tr>
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