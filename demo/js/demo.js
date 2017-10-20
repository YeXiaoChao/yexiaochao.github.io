window.onload = function () {
    //
    var windowHeight =  window.innerHeight;
    document.getElementById("content").style.minHeight =( windowHeight-99 )+"px";
    //
    var headerHtml = "<div id='header_nav'><div class='fleft'><a class='top_home' title='首页' href='http://yexiaochao.github.io/'>HOME</a><a class='top_blog' title='博客' href='http://www.cnblogs.com/yc-755909659/'>BLOG</a></div><div class='fright'><a class='top_about' title='关于作者' href='http://yexiaochao.github.io/about.html'>ABOUT</a></div></div>";
    var footerHtml = "<div class='fleft'>Copyright &copy; 2015 - 2017 &nbsp;<a href='https://github.com/YeXiaoChao'>叶超Luka</a></div>";
    document.getElementById('header').innerHTML = headerHtml;
    document.getElementById('footer').innerHTML = footerHtml;
    //
    var helloCn = "大家好，我是叶超！\n欢迎来到我的个人网站！";
    var helloEn = "Hello everyone! \nI'm Luka! \nWelcome to my personal website!";
    console.log(helloCn);
    console.log(helloEn);
}