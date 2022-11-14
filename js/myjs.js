// -------------------------------------------------------------------
// 反扒裤裤处理
((function () {
    var callbacks = [], timeLimit = 50, open = false
    setInterval(loop, 1)
    return {
        addListener: function (fn) { callbacks.push(fn) },
        cancelListener: function (fn) { callbacks = callbacks.filter(function (v) { return v !== fn }) }
    }
    function loop() {
        var startTime = new Date()
        debugger
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null)
                })
            }
            open = true
            window.stop()
            alert('哒咩哒咩!大佬别扒人家裤裤惹QAQ！')
            document.body.innerHTML = ""
        } else {
            open = false
        }
    }
})()).addListener(function () { window.location.reload() })

// 处理用户F12打开浏览器控制台
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && (e.keyCode == 123)) { // F12
        e.keyCode = 0
        e.returnValue = false
        btf.snackbarShow('哒咩哒咩！居然想扒人家裤子(拽紧)')
        return (false)
    }
}

// 禁掉ctrl+s
window.addEventListener("keydown", function (e) {
  if ((navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
        // console.log('ctrl+s')
        e.preventDefault();
        return false
    }
})

// 阻止鼠标右键默认行为
document.oncontextmenu = function (e) {
    return false
}
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// 给左上角添加自定义边框跑马灯
let navEle = document.getElementById('nav')
// 最好使用css移除元素性能损耗小一点
// let blog_name = document.getElementById('blog_name')
// navEle.removeChild(blog_name)
let navOuter = document.createElement('div')
navEle.prepend(navOuter)
navOuter.id = 'outer'
navOuter.innerHTML = `<div class="nav_bg"></div>
        <div id="navChild" onclick="window.location.reload()">启示录</div>`

// ----------------------------------------------------------


// -----------------------------------------------------------
// 哒咩哒咩！居然想扒人家底裤(拽紧)
console.log(`哒咩哒咩！居然想扒人家底裤(拽紧)`)

// console.log(`%cHello，欢迎你来到我的博客。
// 如果你喜欢上了本站某个样式的话，尽管借鉴即可。
// 让我们一起学习进步，如果有什么不解可以给我留言。
// 但是请不要恶意攻击本站哦~在此先行谢过了，请你吃糖🍭🍭🍭`, "line-height:22px;color:#00a5f2")
// -----------------------------------------------------------

// ----------------------------------------------------------------
// 去除页面上多余的打印
window.console.log = function () { }
window.console.warn = function () { }
// -----------------------------------------------------------------


// ---------------------------------------------------------------
// 确保其他页面（如第二页）第一篇文章不添加
if (location.pathname == '/') newPost()

// 最新文章函数
function newPost() {
    // 获取所有文章信息
    let ls = document.querySelectorAll('.recent-post-info')
    // 先让时间和索引值都等于第一篇文章
    let time = new Date(ls[0].querySelector('.post-meta-date>time').getAttribute('datetime')).getTime()
    let index = 0
    // 遍历数组，如果有时间比time大（更新的文章）则替换
    ls.forEach((i, num) => {
        let t = new Date(i.querySelector('.post-meta-date>time').getAttribute('datetime')).getTime()
        if (t > time) {
            time = t
            index = num
        }
    })
    // 单数在右，双数在左
    let className = index % 2 == 0 ? 'newPost-right' : 'newPost-left'
    ls[index].innerHTML += '<span class="' + className + '">最 新</span>'
    // 如果你不想让其一左一右，可以注释上面的启用下面的，默认左，left改成right就是右
    // ls[index].innerHTML += '<span class="newPost-left">最 新</span>';
}
/*
1. 此方案有个弊端，无法配合pjax，pjax可以不再重复加载js和css，但是每次从其它页面返回首页这样就不执行js无法加上最新文章标识
2. 解决方案是改动源码pug，由于我是npm装的主题配合了github actions，他每次都会重新安装主题【npm模块文件是不能推送到仓库的】，所以只要涉及源码的魔改都没法完成，目前先这样吧，以后有机会使用git clone安装主题
3. 使用git安装主题后可以借鉴下大佬怎么改动pug源码统计最新文章标识的
+ [链接地址](https://blog.leonus.cn/2022/newpost.html)
*/

// ------------------------------------------------------------------


