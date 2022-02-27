(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{668:function(t,a,s){t.exports=s.p+"assets/img/guanxi.572445c6.png"},802:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vue3项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3项目结构"}},[t._v("#")]),t._v(" vue3项目结构")]),t._v(" "),e("p",[e("img",{attrs:{src:s(668),alt:"guanxi"}})]),t._v(" "),e("h2",{attrs:{id:"与vue2的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与vue2的区别"}},[t._v("#")]),t._v(" 与vue2的区别")]),t._v(" "),e("ul",[e("li",[t._v("vue3源码采用"),e("code",[t._v("monorepo")]),t._v(",将模块拆分到package目录中")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("See More")]),t._v(" "),e("p",[t._v("以前想用vue2中的某一模块，必须要改源码。现在可以单独引入那一个模块")])]),t._v(" "),e("ul",[e("li",[t._v("vue3采用ts开发，vue2使用flow")]),t._v(" "),e("li",[t._v("vue3性能优化，支持tree-shaking，不使用就不会被打包")]),t._v(" "),e("li",[t._v("vue2后期引入RFC")])]),t._v(" "),e("h2",{attrs:{id:"代码区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码区别"}},[t._v("#")]),t._v(" 代码区别")]),t._v(" "),e("ul",[e("li",[t._v("vue3劫持数据采用proxy，vue2采用defineProperty，defineProperty有性能和缺陷，会递归，给属性增加get，set")]),t._v(" "),e("li",[t._v("vue3对模版编译进行了优化，编译时生成了block tree，可以对子节点的动态节点进行收集，可以减少比较，并且采用了patchFlag标记动态节点")]),t._v(" "),e("li",[t._v("vue3采用了compositionApi进行组织功能，解决了反复横跳，优化复用的逻辑（mxin带来的数据来源不清晰，命名冲突等），类型推断也更方便")]),t._v(" "),e("li",[t._v("增加了Fragment，Teleport，Suspense")])]),t._v(" "),e("h2",{attrs:{id:"vue架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue架构"}},[t._v("#")]),t._v(" vue架构")]),t._v(" "),e("h3",{attrs:{id:"monorepo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[t._v("#")]),t._v(" monorepo")]),t._v(" "),e("p",[t._v("可在一个项目中管理多个模块")]),t._v(" "),e("h3",{attrs:{id:"vue3项目结构-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3项目结构-2"}},[t._v("#")]),t._v(" vue3项目结构")]),t._v(" "),e("h3",{attrs:{id:"安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("yarn add typescript rollup rollup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("typescript2 "),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollup")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("resolve "),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollup")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("json execa\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("给特定的模块安装依赖")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("yarn workspace "),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("reactivity add "),e("span",{pre:!0,attrs:{class:"token decorator"}},[e("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("shared\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h1",{attrs:{id:"响应式实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式实现"}},[t._v("#")]),t._v(" 响应式实现")]),t._v(" "),e("h2",{attrs:{id:"reactiveapi的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reactiveapi的实现"}},[t._v("#")]),t._v(" reactiveApi的实现")]),t._v(" "),e("blockquote",[e("p",[t._v("主要就是对对象进行代理\n一共要实现下面的四个方法，主要用代理的方式")])]),t._v(" "),e("ol",[e("li",[t._v("reactive()")]),t._v(" "),e("li",[t._v("shallowReactive()")]),t._v(" "),e("li",[t._v("readonly()")]),t._v(" "),e("li",[t._v("shallowReadonly()")])]),t._v(" "),e("h3",{attrs:{id:"createreactiveobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createreactiveobject"}},[t._v("#")]),t._v(" createReactiveObject")]),t._v(" "),e("p",[t._v("对外暴露就四个方法，比较显而易见，但里面的逻辑都可以抽象出一个公有的方法")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主要就是new一个代理，然后缓存代理，四个方法不同的地方都由他们的钩子完成")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 判断对象， 2. 重复代理 3. 对不同类型进行proxy 4. 做缓存")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReactiveObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isReadonly"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseHandlers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果目标不是对象，没法拦截，reactive这个api只能拦截对象类型")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" target\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxyMap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isReadonly "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" readonlyMap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" reactiveMap\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" existProxy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proxyMap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("existProxy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" existProxy\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseHandlers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  proxyMap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" proxy\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("h3",{attrs:{id:"代理具体逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理具体逻辑"}},[t._v("#")]),t._v(" 代理具体逻辑")]),t._v(" "),e("p",[t._v("主要由下面几个区别")]),t._v(" "),e("ul",[e("li",[t._v("mutableHandlers")]),t._v(" "),e("li",[t._v("shallowReactiveHandlers")]),t._v(" "),e("li",[t._v("readonlyHandlers")]),t._v(" "),e("li",[t._v("shallowReadonlyHandler")])]),t._v(" "),e("p",[t._v("也可抽象出公有逻辑"),e("code",[t._v("createGetter")]),t._v(","),e("code",[t._v("createSetter")])]),t._v(" "),e("h3",{attrs:{id:"面试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试"}},[t._v("#")]),t._v(" 面试")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("判断对象， 2. 重复代理 3. 对不同类型进行proxy 4. 做缓存")])]),t._v(" "),e("li",[e("p",[t._v("get baseHandler 取值的时候会对数组类型单独处理，对ref进行处理")])]),t._v(" "),e("li",[e("p",[t._v("set baseHandler 设置值的时候，会对ref单独处理， 对新增和修改单独处理")])])]),t._v(" "),e("h2",{attrs:{id:"effect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#effect"}},[t._v("#")]),t._v(" effect")]),t._v(" "),e("ol",[e("li",[t._v("track就是维护属性和effect之间的关系，当在effect中获取响应式变量，就会收集依赖")]),t._v(" "),e("li",[t._v("trigger就是找到target中对应属性的effect列表")])]),t._v(" "),e("h1",{attrs:{id:"diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),e("h2",{attrs:{id:"核心diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心diff算法"}},[t._v("#")]),t._v(" 核心diff算法")])])}),[],!1,null,null,null);a.default=r.exports}}]);