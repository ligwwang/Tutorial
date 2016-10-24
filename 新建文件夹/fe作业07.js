// 2016/09/30
//
// ============
// 作业 7
//
// 本次作业主要是 string 和 object 相关
// 带有一定的 DOM API 练习
// string 题目用到的知识还是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//

/*
交作业手动传送门
http://vip.cocode.cc/topics/346
*/


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
        log('*** 测试失败 ***', message)
    }
}


// 作业 1
// 实现函数
// 10分钟做不出来就看提示
var startsWith = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 开头, 返回 true 或者 false
    */
    for (var i = 0; i < s2.length; i++) {
        if (s2[i] != s1[i]) {
            return false
        }
    }
    return true
}

// 用法如下, 作为测试参考
// log('starts_with', startsWith('guagua', 'gua'))
// starts_with true
// log('starts_with', startsWith('guagua', 'melon'))
// starts_with false
// log('starts_with', startsWith('melongua', 'gua'))
// starts_with false


// 作业 2
// 实现函数
// 10 分钟做不出就看提示
var findIn = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中第一次出现的下标
    如果 s2 没有在 s1 中出现, 返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s2 === s1[i]) {
            // log('i is ', i)
            return i
            break
        }
    }
    // log ('i is ', i)
    return -1
}
var test_findIn = function() {
    ensure(findIn('abc', 'c') === 2, 'findIn 测试 1')
    ensure(findIn('wang', 'b') === -1, 'findIn 测试2')
}

// 作业 3
// 实现函数
// 10 分钟做不出就看提示
var findAllIn = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中出现的所有下标组成的 array
    如果 s2 没有在 s1 中出现, 返回空数组 []
    */
    var array = []
    for (var i = 0; i < s1.length; i++) {
        if (s2 === s1[i]) {
            log('i is ', i)
            array.push(i)
        }
    }
    return array
}

// 用法范例, 作为测试参考
// log('find all', findAllIn('10121320', '1'))
// find all [0, 2, 4]
// log('find all', findAllIn('10121320', '0'))
// find all [1, 7]
// log('find all', findAllIn('10121320', '3'))
// find all [5]
// log('find all', findAllIn('10121320', '9'))
// find all []


// 作业 4
// 实现函数
// 10 分钟做不出就看提示
var findAllString = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串, 长度未知, 不一定为 1
    返回参数 s2 在 s1 中出现的下标组成的 array
    如果 s2 没有在 s1 中出现, 返回 []
    */
    var l = s2.length
    var array = []
    for (var i = 0; i < s1.length - l - 1; i++) {
        if (s2 === s1.slice(i, i + l)) {
            // log('i is ', i)
            array.push(i)
        }
    }
    return array
}

// 用法
// log('find all str', findAllString('1012100120', '10'))
// find all [0, 4]
// log('find all str', findAllString('1012100120', '100'))
// find all [4]
// log('find all str', findAllString('1012100120', '3'))
// find all []


// 作业 5
// 实现函数
// 10分钟做不出来就看提示
var endsWith = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 结尾, 返回 true 或者 false
    */
    var len1 = s1.length
    var len2 = len1 - s2.length
    if (s2 === s1.slice(len2)) {
        return true
    } else {
        return false
    }
}

//test
var test_endsWith = function() {
    ensure(endsWith('abcd', 'cd'), 'endsWith 测试一')
    ensure(!endsWith('acde', 'ed'), 'endsWith 测试二')
}
// 作业 6
// 实现函数
/*
students 是 array
里面的每个元素都是如下格式的 object
{
    'name': 'gua',
    'sex': '男',
    'score': 127,
}
返回 score 最高的那个元素(object)
*/
var top2 = function(students) {
    var a = students[0].score
    var top1 = 0
    for (var i = 0; i < students.length; i++) {
        var b = students[i].score
        if (a < b) {
            a = b
            top1 = i
        }
    }
    return students[top1]
}

// 目前只有两个数据, 自行扩充到 5 个
var student_list = [
    {
        'name': 'gua1',
        'sex': '男',
        'score': 127,
    },
    {
        'name': 'gua2',
        'sex': '男',
        'score': 99,
    },
    {
        'name': 'xigua',
        'sex': 'unknown',
        'score': 144,
    },
    {
        'name': 'donggua',
        'sex': '女',
        'score': 150,
    },
    {
        'name': 'nangua',
        'sex': '男',
        'score': 111,
    }
]


// 作业 7
// 做不出尽早看提示或者到群里讨论或者发帖
//
var formated_weekday = function(day) {
    /*
    day 是代表星期的数字, 从周一到周日分别是 1 2 3 4 5 6 7
    返回 '星期一' '星期二' 这样的描述字符串
    */
    var day = day - 1
    var week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    return week[day]
}


// 作业 8
// 做不出尽早看提示或者到群里讨论或者发帖
//
/*
price 是一个 int
grade 合法情况下一共 6 种取值, 还可能没有给出这个参数
    '小学生'
    '初中生'
    '高中生'
    '大学生'
    '研究生'
对应的折扣分别是 5 6 7 8 9

注意, 如果调用者没有给出 grade 参数, 没有折扣

返回折扣后的价格
*/

var discount = function(price, grade) {
    if (grade != undefined) {
        var discount1 = {
            '小学生': 0.5,
            '初中生': 0.6,
            '高中生': 0.7,
            '大学生': 0.8,
            '研究生': 0.9,
        }
        var pay = discount1[grade] * price
        return pay
    }
    return price
}

//test
var test_discount = function() {
ensure(discount(50, '小学生') === 25, 'discount 测试一')
ensure(discount(60) === 60, 'discount 测试二')
}
// 作业 9
// 做不出尽早看提示或者到群里讨论或者发帖
    /*
    array 是 array 类型, 里面的元素都是字符串

    按如下的格式返回这个 array
    假设 array 是 var a = ['python', 'js', 'objective-c']
    那么返回的数据是一个数组, 多了首尾两个元素
    [
        '+++++++++++++++',
        '+ python      +',
        '+ js          +',
        '+ objective-c +',
        '+++++++++++++++',
    ]
    返回包含了 string 的 array
    */
var prettyLog = function(array) {
    var len1 = 0
    //找出最长的字符串的数值
    for (var i = 0; i < array.length; i++) {
        if (len1 < array[i].length) {
            len1 = array[i].length
        }
    }
    // log(len1)
    //对字符串按要求进行处理
    var space = ' '
    // 加空格
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < len1 - array[i].length + j; j++) {
            array[i] = array[i] + space
        }
        // log('j is ', j)
        // log('i is ', i)
    }
    //修饰数组
    for (var i = 0; i < array.length; i++) {
        array[i] = '+ ' + array[i] + ' +'
    }
    //增加首尾项
    var fae = '++++'
    for (var i = 0; i < len1; i++) {
        fae += '+'
    }
    array.splice(0, 0, fae)
    array.push(fae)
    // log(array)
    return array
}


// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, startsWith
简单的办法是 slice s1 后与 s2 比较


2, findIn
初始化下标为 -1
用 while 循环去遍历 s1 来比较
如果找到则设置下标并 break 循环


3, findAllIn
和 findIn 类似
只不过是用一个 array 去保存下标


4, findAllString
循环遍历 s1
每次循环 slice 一个字符串出来用 startsWith 检查


5, endsWith
切片 s1 然后和 s2 比较
切片下标可以用长度算出


6, top
参考前几次作业的 min max 函数


7, formated_weekday
无


8, discount
无


9, prettyLog
先求出最长的那个字符串的长度
这样就可以算出每行的长度
这样就很简单了
*/
