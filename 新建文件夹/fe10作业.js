// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败: ', message)
    }
}


// 作业 1
//
var isPrime = function(n) {
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */
    // 排除特殊情况
    if (n === 0 || n === 1) {
        return false
    } else {

        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }
}

// 作业 2
//
var primeNumbers = function() {
    /*
    返回 100 内的素数列表
    */
    var arr = []
    for (var i = 0; i < 100; i++) {
        if (isPrime(i)) {
            arr.push(i)
        }
    }
    return arr
}


// 作业 3
//
var capString = function(str) {
    /*
    给定一个英文句子 str（由空格隔开的单词组成的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
    // 将单词字母全部变为小写，并存入数组
    var lower = str.toLowerCase().split(' ')
    for (var i = 0; i < lower.length; i++) {
        var char = lower[i].charAt(0)
        // 将首字母变为大写
        lower[i] = lower[i].replace(char, char.toUpperCase())
    }
    return lower.join(' ')
}



// 作业 4
//
var number = function(str, n) {
    var num = 0
    for (var i = 0; i < str.length; i++) {
        if (str[n] === str[i]) {
            num++
        }
    }
    return num
}
var letterCount = function(str) {
    /*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    // 可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    Object.keys(obj)
    ["foo", "bar"]

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
    */
    var arr1 = []
    var arr2 = []
    var object = {}
    for (var i = 0; i < str.length; i++) {
        object[str[i]] = number(str, i)
    }
    var keys = Object.keys(object)
    for (var i = 0; i < keys.length; i++) {
        arr1 = [keys[i], object[keys[i]]]
        arr2.push(arr1)
    }
    return arr2
}
// letterCount('aabvccsdddd')

// 作业 5
//
var queryFromObject = function(param) {
    /*
    param 是一个 object
    例子如下
    param 是 {
        'foo': 1,
        'bar': 'far',
    }
    返回如下 string, 顺序不做要求(foo bar 的顺序)
    foo=1&bar=far

    注意, 使用 Object.keys 函数
    */
    var str = ''
    var arr = Object.keys(param)
    for (var i = 0; i < arr.length; i++) {
        var s = arr[i] + '=' + param[arr[i]] + '&'
        str += s
    }
    str = str.slice(0, str.length-1)
    return str
}
// queryFromObject({a: 1, b: 3, c: 2})

// 作业 6
//
var argsFromQuery = function(queryString) {
    /*
    queryString 是一个 string
    例子如下
    queryString 是 foo=1&bar=far
    返回如下 object, 顺序不做要求(foo bar 的顺序)
    {
        'foo': 1,
        'bar': 'far',
    }
    */
    var object1 = {}
    // 以 & 为分隔符创建数组
    var arr = queryString.split('&')
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i]
        for (var j = 0; j < ele.length; j++) {
            // 以 = 为分隔符区别 key 和 value
            if (ele[j] === '=') {
                object1[ele.slice(0, j)] = ele.slice(j+1)
            }
        }
    }
    return object1
}
// argsFromQuery('foo=1&bar=far')


// 作业 7
//
// 本题参考了其他同学的作业
var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
    var request = new XMLHttpRequest()
    request.onload = function () {
        if (request.status == 200 ) {
            callback()
        }

    }
    request.open("GET",url)
    request.send(null)
}


// 作业 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
    method, 请求的方法, string
    url, 请求的路径, string
    data, 请求发送的数据, 如果是 GET 方法则没这个值, string
    callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
}

var r = {
    method: 'POST',
    url: '/login',
    data: 'username=gua',
    callback: function(response) {
        console.log('响应', response)
    }
}
ajax(r)
