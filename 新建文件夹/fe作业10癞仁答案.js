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


// 作业 1
//
var isPrime = function(n) {
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */
    for (var i = 2; i < n-1; i++) {
        if ( n%i == 0) {
            // log (n,i,(n%i))
            return false
        }
    }
    return true
}

// 作业 2
//
var primeNumbers = function() {
    /*
    返回 100 内的素数列表
    */
    var a = []
    for (var i = 2; i < 100; i++) {
        if (isPrime(i)) {
            a.push(i)
        }
    }
    return a
}


// 作业 3
//
var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    if (s1.includes(s2)) {
        for (var i = 0; i < s1.length; i++) {
            if (s2[0]===s1[i]) {
                result = i
                continue
            }
        }
    }else {
        result = -1
    }
    return result

}
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var capString = function(str) {
    /*
    给定一个英文句子 str（一个只有字母的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
    var result = ''
    var sp = ' '
    for (var i = 0; i < str.length; i++) {
        var index0 = find(lower,str[i])
        // var index1 = find(lower,str[i+1])
        var condition = sp.includes(str[i-1])
        if ( i == 0 ) {
            result += upper[index0]
            continue
        }
        if (condition && i>1) {
            result += upper[index0]
            continue
        }else {
            result += str[i]
        }
    }
    return result
}


// 作业 4
//
var strabcconter = function (str,n) {
    var con = 0
    for (var i = 0; i < str.length; i++) {
        if (str[n]==str[i]) {
            con ++
        }
    }
    return con
}
strabcconter('fatefff',0)
var letterCount = function(str) {
    /*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    Object.keys(obj)
    ["foo", "bar"]

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
    */
    var obj = {}
    var array0 = []
    var array1 = []
    for (var i = 0; i < str.length; i++) {
        obj[str[i]] = strabcconter(str,i)
    }
    // log(obj)
    var a = JSON.stringify(obj)
    // log(a)
    var key = Object.keys(obj)
    for (var j = 0; j < key.length; j++) {
        var array0 = [key[j],obj[key[j]]]
        array1.push(array0)
    }
    log(array1)
    return array1
}
// 作业 5
//
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
var queryFromObject = function(param) {
    var str = ''
    var sp1 ='='
    var sp2 ='&'
    var key = Object.keys(param)
    for (var j = 0; j < key.length; j++) {
        var s1 = key[j]
        log('s1',s1)
        var s2 = param[key[j]]
        log('s2',s2)
        str += s1 + sp1 + s2 + sp2
    }
    var len1 = str.length-1
    var str2 = str.slice(0,len1)
    log(str)
    return str2
}


// 作业 6
//
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
var split = function(s, delimiter=' ') {
    var array = []
    for (var i = 0; i < s.length; i++) {
        if (delimiter===s[i]) {
            array.push(i)
        }
    }
    var start = s.slice(0,array[0])
    var array1 = [start]
    log('start',start)
    for (var i = 0; i < array.length-1; i++) {
        var index1 = array[i]+1
        var index2 = array[i+1]
        var vs = s.slice(index1,index2)
        array1.push(vs)
        log('array1',array1)
    }
    var endIndex = array[array.length-1]+1
    log('endIndex',endIndex)
    var end   = s.slice(endIndex)
    log('end',end)
    array1.push(end)
    log('array1',array1)
    return array1
}
var is_digit = function(s) {
    /*
    s 是字符串
    检查 s 中是否只包含数字
    返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
    */
    var num = '0123456789'
    for (var i = 0; i < s.length; i++) {
        var pjdr = num.includes(s[i])
        if (!pjdr) {
            return false
        }
    }
    return true
}
var argsFromQuery = function(queryString) {
    var str = ''
    var sp1 ='='
    var sp2 ='&'
    var s2 = split(queryString,sp2)
    var s1 = []
    var obj ={}
    log(s2)
    for (var i = 0; i < s2.length; i++) {
         s01 = split(s2[i],sp1)
         var s001 =String(s01[0])
         if (is_digit(s01[1])) {
            s01[1] = Number(s01[1])
         }
         log('s01[1]',s01[1])
         obj[s001] = s01[1]

    }

    log('obj',obj)
    log(JSON.stringify(obj))
    return obj
}


// 作业 7
//
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
