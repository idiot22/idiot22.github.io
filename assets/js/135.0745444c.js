(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{856:function(t,_,a){"use strict";a.r(_);var s=a(6),v=Object(s.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("https://juejin.cn/post/6844903844216832007#heading-10")]),t._v(" "),a("h2",{attrs:{id:"状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),a("h3",{attrs:{id:"_3xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3XX")]),t._v(" "),a("p",[t._v("URL 重定向，能够将多个 URL 指向同一个页面。")]),t._v(" "),a("p",[t._v("服务器可以通过返回一个重定向响应来进行重定向。这个重定向响应有一个以 3 开头的状态码 ，并且有一个"),a("code",[t._v("Location")]),t._v("头字段 表示要重定向到的位置。")]),t._v(" "),a("p",[t._v("浏览器接收到这个重定向之后，会立即加载 Location 中指定的 URL。用户基本注意不到这个过程。")]),t._v(" "),a("h4",{attrs:{id:"_1-永久重定向类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-永久重定向类"}},[t._v("#")]),t._v(" 1. 永久重定向类")]),t._v(" "),a("p",[a("code",[t._v("301")]),t._v(" 和 "),a("code",[t._v("308")]),t._v(" 都属于永久重定向。永久重定向意味着原始 URL 不再可用，替换成了一个新的内容。"),a("strong",[t._v("所以搜索引擎、聚合内容阅读器以及其他爬虫识别这两个状态码时，会更新旧 URL 的资源。")])]),t._v(" "),a("p",[a("strong",[t._v("划重点：这个就是永久重定向和临时重定向的区别。")])]),t._v(" "),a("p",[t._v("规范中，301 本来不允许改变请求方法，但是已有的浏览器厂商都使用了 GET 方法进行新的请求。所以创建了 308 用来处理需要使用非 GET 进行重定向的场景。")]),t._v(" "),a("h3",{attrs:{id:"_2-临时重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-临时重定向"}},[t._v("#")]),t._v(" 2. 临时重定向")]),t._v(" "),a("p",[t._v("302/303/307 都属于临时重定向。有时，当原有资源因为一些不可预测的原因而临时无法访问时，可以通过临时重定向的方式将请求转移到另一个地方。搜索引擎和爬虫不应该记住这个临时的连接")]),t._v(" "),a("p",[t._v("302,307和上面的301,308关系差不多")]),t._v(" "),a("h3",{attrs:{id:"_3-特殊重定向类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-特殊重定向类"}},[t._v("#")]),t._v(" 3. 特殊重定向类")]),t._v(" "),a("p",[t._v("300/304/305/306 可以归属到特殊重定向类。这里重点说一下 304，304 是 HTTP 缓存中的一个重要内容，表示资源未修改，相当于将资源重定向到本地缓存")])])}),[],!1,null,null,null);_.default=v.exports}}]);