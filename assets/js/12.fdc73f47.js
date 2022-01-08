(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{658:function(s,t,a){s.exports=a.p+"assets/img/dom.2de168bd.png"},659:function(s,t,a){s.exports=a.p+"assets/img/virtualDom.7fb167eb.png"},660:function(s,t,a){s.exports=a.p+"assets/img/aaa.a6f4eb56.png"},661:function(s,t,a){s.exports=a.p+"assets/img/render.1f67ab21.png"},773:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"什么是dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是dom"}},[s._v("#")]),s._v(" 什么是DOM？")]),s._v(" "),n("p",[n("img",{attrs:{src:a(658),alt:"dom"}}),s._v("\nHTML在显示网页中，需要HTML映射到一系列DOM节点，浏览器DOM节点渲染。我们可以使用JavaScript进行操作Dom。")]),s._v(" "),n("h2",{attrs:{id:"虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[s._v("#")]),s._v(" 虚拟dom")]),s._v(" "),n("p",[s._v("一旦有更新创建就修改成千上百的dom，会变的很慢，就需要虚拟dom，虚拟dom可以比较比较新旧数据，找出修改的地方，更加快，虚拟dom实际就是用js对象来描述dom结构"),n("br"),s._v("\n虚拟dom让组件的渲染逻辑与真实的dom操作解耦，并让它在其他环境中更直接地重用框架的运行\n"),n("img",{attrs:{src:a(659),alt:"virtualDom"}}),s._v("\n当组件更改时，Render函数将重新运行，它将创建另一个虚拟节点。然后发送旧的 VNode 和新的 VNode 到Vue中进行比较并以最高效的方式在我们的网页上更新。\n"),n("img",{attrs:{src:a(660),alt:"aaa"}})]),s._v(" "),n("h2",{attrs:{id:"核心模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心模块"}},[s._v("#")]),s._v(" 核心模块")]),s._v(" "),n("h3",{attrs:{id:"响应式模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式模块"}},[s._v("#")]),s._v(" 响应式模块")]),s._v(" "),n("p",[s._v("允许我们创建 JavaScript 响应对象并可以观察其变化。当使用这些对象的代码运行时，它们会被跟踪，因此，它们可以在响应对象发生变化后运行。")]),s._v(" "),n("h3",{attrs:{id:"编译器模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译器模块"}},[s._v("#")]),s._v(" 编译器模块")]),s._v(" "),n("p",[s._v("获取 HTML 模板并将它们编译成渲染函数。这可能在运行时在浏览器中发生，但在构建 Vue 项目时更常见。这样浏览器就可以只接收渲染函数")]),s._v(" "),n("h3",{attrs:{id:"渲染模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染模块"}},[s._v("#")]),s._v(" 渲染模块")]),s._v(" "),n("p",[s._v("代码包含在网页上渲染组件的三个不同阶段：")]),s._v(" "),n("ul",[n("li",[s._v("渲染阶段")]),s._v(" "),n("li",[s._v("挂载阶段")]),s._v(" "),n("li",[s._v("补丁阶段\n在渲染阶段，将调用 render 函数，它返回一个虚拟 DOM 节点。"),n("br"),s._v("\n在挂载阶段，使用虚拟DOM节点并调用 DOM API 来创建网页。"),n("br"),s._v("\n在补丁阶段，渲染器将旧的虚拟节点和新的虚拟节点进行比较并只更新网页变化的部分。"),n("br"),s._v(" "),n("img",{attrs:{src:a(661),alt:"render"}})])]),s._v(" "),n("h2",{attrs:{id:"渲染机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染机制"}},[s._v("#")]),s._v(" 渲染机制")]),s._v(" "),n("ol",[n("li",[s._v("虚拟dom让组件的渲染逻辑与真实的dom操作解耦，并让它在其他环境中更直接地重用框架的运行"),n("br")])]),s._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[s._v("See More")]),s._v(" "),n("p",[s._v("例如，Vue允许第三方开发人员创建自定义渲染解决方案目标，不仅仅是浏览器也包括IOS和Android等原生环境，也可以使用API创建自定义渲染器直接渲染到WebGL而不是DOM节点。在Vue 2中我们实际上已经有了这种能力但是，我们在Vue 2中提供的API没有正式记录并且需要分叉源代码。所以这给维护带来了很大的负担，对开发这些定制解决方案的开发人员在Vue 3中，我们让自定义渲染器API成为一等公民。因此开发人员可以直接拉取Vue运行时核心作为依赖项，然后利用自定义渲染器API构建自己的自定义渲染器。")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("render函数提供了以编程方式构造、检查、克隆以及操作所需的DOM结构的能力，在实际返回渲染引擎之前你可以利用JavaScript的全部能力做到这些。这个能力很重要")])]),s._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[s._v("See More")]),s._v(" "),n("p",[s._v("因为总会有某些情况在UI编程中使用模板语法会有一些限制，你只需要一种有充分灵活性的合适的编程语言来表达潜在的逻辑"),n("br"),s._v("\n模板会完成你要做的事在99%的情况下你只需要写出HTML就好了，但偶尔可能想做些更可控的事情在，你需要编写一个渲染函数")])]),s._v(" "),n("h3",{attrs:{id:"渲染函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染函数"}},[s._v("#")]),s._v(" 渲染函数")]),s._v(" "),n("p",[s._v("参数")]),s._v(" "),n("ul",[n("li",[s._v("第一个参数是类型，所以我们在这里创建一个 div。")]),s._v(" "),n("li",[s._v("第二个参数是一个对象包含 vnode 上的所有数据或属性")]),s._v(" "),n("li",[s._v("第三个参数是这个 vnode 的子节点")])]),s._v(" "),n("p",[n("code",[s._v("vue2渲染函数")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("ol",[n("li",[s._v("第二个参数有点冗余，要区分是attr还是on还是其他的，其实没必要")]),s._v(" "),n("li",[s._v("h要传入，如果把复杂的渲染函数分成几个，都要传一遍，比较麻烦")])])]),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("render")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      attr"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aaa'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      on"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        click"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onClick\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("code",[s._v("vue3渲染函数")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("ol",[n("li",[s._v("第二个参数扁平数据，让数据更加精简")]),s._v(" "),n("li",[s._v("h全局引入就可以")])])]),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("render")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    onClick"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onClick\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"何时-如何使用-render-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时-如何使用-render-函数"}},[s._v("#")]),s._v(" 何时/如何使用 render 函数")]),s._v(" "),n("p",[s._v("当要统一处理slot里面的内容的时候，是可以用render的。js写起来比模版更灵活的时候也可以用它")])])}),[],!1,null,null,null);t.default=r.exports}}]);