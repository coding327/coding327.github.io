setInterval(() => {
    let create_time = Math.round(new Date('2021-10-18 22:54:00').getTime() / 1000) //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000)
    let second = timestamp - create_time
    let time = new Array(0, 0, 0, 0, 0)
    //格式规范化，个位数前面加0
    var nol = function (h) {
        return h > 9 ? h : '0' + h
    }
    if (second >= 365 * 24 * 3600) { // 年
        time[0] = parseInt(second / (365 * 24 * 3600))
        second %= 365 * 24 * 3600
    }
    if (second >= 24 * 3600) { // 天
        time[1] = parseInt(second / (24 * 3600))
        second %= 24 * 3600
    }
    if (second >= 3600) { // 时
        time[2] = nol(parseInt(second / 3600))
        second %= 3600
    }
    if (second >= 60) { // 分
        time[3] = nol(parseInt(second / 60))
        second %= 60
    }
    if (second > 0) { // 秒
        time[4] = nol(second)
    }
    //早上9点到晚上22点营业中
    // if ((Number(time[2]) < 22) && (Number(time[2]) > 9)) {
    //     currentTimeHtml = '<div id="runtime">' + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'
    // } else { // 其余时间打烊
    //     currentTimeHtml = '<div id="runtime">' + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'
    // }
    currentTimeHtml = '<div id="runtime">' + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'
    document.getElementById("workboard").innerHTML = currentTimeHtml
}, 1000)