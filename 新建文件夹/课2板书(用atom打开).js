// 16/09/17
//
// 此为第 2 课的上课内容
//
// 今天上课的内容是
// JavaScript 介绍
// 变量
// 四则运算
// 循环
// 函数
// 看不懂, 很正常, 因为我们还没上课


// 双斜杠 // 开头的内容是注释, 不会被程序识别
/*
这样是多行注释
注意，本课的代码要粘贴到下面的网址才能运行
http://vip.cocode.cc/arena

竞技场分左右两块
左边是代码编辑
右边是画图结果

目前这里只有两个功能
forward(100)
和
right(90)

前者往前画线 100 像素
后者右转 90 度
*/

// 例子 1
// 画一个边长为 100 像素的正三角形
forward(100)
right(120)
forward(100)
right(120)
forward(100)
right(120)


// -------------------------
// 题解
// -------------------------
//
// 作业 1
// 画一个边长为 10 像素的正三角形
//
// 很简单, 复制例子 1 并且把 3 个 100 改成 10 就好了
//
// 如果是 10 边形呢?
// 所以说, 不应该直接使用一个数字, 而是应该取个名字(变量名)
//
// 下面这样就能创建一个变量了, 它的值是 10
// 在第一次创建变量的时候，要使用 var 修饰变量
var x = 10
// 下面的代码使用 x 这个变量来表示
forward(x)
right(120)
forward(x)
right(120)
forward(x)
right(120)
// 同理, 角度 120 度也可以用一个变量表示
// 我们应该取一个有意义的名字
// 所以 var angle = 120 是一个好名字


// 作业 2
// 画一个边长为 99 像素的正方形
//
// 根据作业 1 可知
// 用 2 个变量来画正方形是最好的(边长 角度)
// 自己动手


// 作业 3
// 画一个长宽分别为 168, 99 像素的矩形
//
// 根据作业 1 2
// 这里用 3 个变量(长 宽 角度)
var w = 168
var h = 99
var angle = 90
// 下面的代码使用 x 这个变量来表示
forward(h)
right(angle)
forward(w)
right(angle)

forward(h)
right(angle)
forward(w)
right(angle)



// 作业 4
// 画一个边长为 33 像素的正三角形
//
// 作业 2 的改版
var length = 33
var angle = 120
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)

// 作业 5
// 画一个边长为 106 像素的正方形
//
// 作业 4 的改版


// 作业 6
// 画一个长宽分别为 68, 59 像素的矩形
//
// 作业 3 的改版


// 作业 7
// 画一个边长为 79 的正五边形
//
// 改一下角度和边长, 多画一次就可以了
//
var length = 79
var angle = 72
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)


// 作业 8
// 画一个边长为 63 的正六边形
//
// 理论上多画一次, 改一下角度和边长就好了
// 更好的办法是  自动计算角度
// 根据定理 正多边形内角和 n 边形的内角的和等于：
// (n － 2) × 180° (n 大于等于 3 且 n 为整数）
// 所以在这里...
// 先定义 n
var n = 6
// 再计算 内角度数, 再用 180 减去内角度数就是我们要转的角度
// 四则运算的符号分别是 + - * / 并且有和数学公式一样的优先级
// 所以要加上括号
var angle = 180 - ((n - 2) * 180 / n)
// 边长是 63
var length = 63
// 开始画图, 6 次
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)
forward(length)
right(angle)


// 作业 9
// 画一个边长为 159 的正七边形
//
// 根据作业 8
// 我们使用套路
// 先定义 n
var n = 7
// 再计算 内角度数, 再用 180 减去内角度数就是我们要转的角度
var angle = 180 - ((n - 2) * 180 /n)
// 边长是 63
var length = 159
// 开始画图, 7 次
// 复制粘贴太粗暴, 有没有优雅的办法
// 答案是 循环
// 循环是每一门编程语言必备的东西
// 可以重复性地做某件事
// 用法如下(看不懂的 都是套路)
// i 是随便什么名字, 这里用不着但是也要加上, n 是循环的次数
// 循环体内的语句, 要缩进(在 Atom 中按 tab 键自动缩进 4 个空格(这是最好的))
var i = 0
while(i < n) {
    i = i + 1
    forward(length)
    right(angle)
}

// 作业 10
// 画一个边长为 93 的正十边形
//
// 不用多说了吧



// -------------
// 定义函数并使用
// -------------
// 定义函数并取一个名字
var square = function() {
    var len = 50
    var n = 4
    var angle = 90
    // 循环开始
    var i = 0
    while(i < n) {
        i++
        forward(len)
        right(angle)
    }
}

// 使用函数
square()
forward(20)
var vgfhxy = square
vgfhxy()


// ---
// 函数参数
var square = function(length) {
    // length 只在函数内部有效
    var len = length
    var n = 4
    var angle = 90
    // 循环开始
    var i = 0
    while(i < n) {
        i++
        forward(len)
        right(angle)
    }
}

var len = 20
square(len)
square(30)
square(50)


// ---
// 多参数
var polygon = function(length, n) {
    // length 只在函数内部有效
    var len = length
    var angle = 360 / n
    // 循环开始
    var i = 0
    while(i < n) {
        i++
        forward(len)
        right(angle)
    }
}

polygon(5, 130)

// 另一种形式的函数定义方式
function polygon(length, n) {
    // length 只在函数内部有效
    var len = length
    var angle = 360 / n
    // 循环开始
    var i = 0
    while(i < n) {
        i++
        forward(len)
        right(angle)
    }
}

polygon(5, 130)


// 数据类型
var name = 'gua'
var height = 169
// 多行字符串
var line = `
多行
字符串
`

// 输出到终端（要在浏览器打开检查器的终端才能看到）
console.log(line)


// 用自己的 log
var log = function() {
    // 在 js 中, 函数里面有一个特殊的变量叫 arguments
    // 它保存了函数所有的参数, 这是套路
    console.log(arguments)
    // 在 js 中, 函数声明的时候可以不声明参数
    // 依然可以使用参数
}

log(1)
log('debug', 'hello')

var echo = function(a, b) {
    console.log(a, b, arguments)
}

echo(1, 2)



// 附录
// -------------
// 变量名命名规则
// -------------
// 变量名和函数名只能包含 字母、_下划线或数字
// 并且只能以 字母和下划线开头，不能以数字开头
// 在现代的 JavaScript 中, 汉字也是字母
