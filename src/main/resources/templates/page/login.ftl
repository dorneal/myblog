<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
    <meta name="description" content="此代码内容为超萌的猫头鹰登录界面"/>
    <title>登录</title>
    <link rel="shortcut icon" href="/images/icon/icon.ico">
    <link rel="stylesheet" href="/css/jq22.css">
</head>
<body>
<!-- begin -->
<div id="login">
    <div class="wrapper">
        <div class="login">
            <form action="#" method="post" class="container offset1 loginform">
                <div id="owl-login">
                    <div class="hand"></div>
                    <div class="hand hand-r"></div>
                    <div class="arms">
                        <div class="arm"></div>
                        <div class="arm arm-r"></div>
                    </div>
                </div>
                <div class="pad">
                    <input type="hidden" name="_csrf" value="9IAtUxV2CatyxHiK2LxzOsT6wtBE6h8BpzOmk=">
                    <div class="control-group">
                        <div class="controls">
                            <label for="username" class="control-label fa fa-envelope"></label>
                            <input id="username" type="text" name="userName" placeholder="Username" tabindex="1"
                                   autofocus="autofocus" class="form-control input-medium">
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls">
                            <label for="password" class="control-label fa fa-asterisk"></label>
                            <input id="password" type="password" name="userPass" placeholder="Password" tabindex="2"
                                   class="form-control input-medium">
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <button id="toLogin" type="button" tabindex="4" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
    <script src="/js/jquery.min.js"></script>
    <script>
        $(function () {
            $('#login').find('#password').focus(function () {
                $('#owl-login').addClass('password');
            }).blur(function () {
                $('#owl-login').removeClass('password');
            });
        });
        $('button#toLogin').click(function () {
            var userName = $.trim($("input[name=userName]").val());
            var userPass = $.trim($("input[name=userPass]").val());
            if (userName.length !== 0 && userPass.length !== 0) {
                $.post("/user/login", {
                    userName: userName,
                    userPass: userPass
                }, function (data) {
                    if (data.code === 1) {
                        location.href = data.url;
                    } else {
                        alert(data.msg);
                    }
                }, "json");
            } else {
                alert("账号密码不能为空！！！")
            }
        });
    </script>
</div>
<!-- end -->
</body>
</html>