import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// 页面路由
window.location.href = '地址' // www.baidu.com
history.back()  //回退


// hash 路由
window.location = '#hash'
window.onhashchange = function () {
    console.log('current hash' + window.location.hash)
}

// h5路由
history.pushState('name', 'title', '/path')  // 推进一个状态
history.replaceState('name', 'title', '/path') // 更换一个状态
window.onpopstate = function () {
    console.log(window.location.href)
    console.log(window.location.pathname)
    console.log(window.location.hash)
    console.log(window.location.search)
}