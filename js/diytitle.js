// 站点动态title
var titleTime, OriginTitle = document.title
document.addEventListener("visibilitychange", (function () {
    document.hidden ? (document.title = "不要走，再看看嘛 🙈", clearTimeout(titleTime)) : (document.title = "欢迎回来 🐱‍🏍 " + OriginTitle, titleTime = setTimeout((function () { document.title = OriginTitle }), 2e3))
}))