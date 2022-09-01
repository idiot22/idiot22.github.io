(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{834:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-extend"}},[t._v("#")]),t._v(" Vue.extend")]),t._v(" "),a("p",[t._v("整个过程就是先创建一个类Sub，接着通过原型继承的方式将该类继承基础Vue类，然后给Sub类添加一些属性以及将父类的某些属性复制到Sub类上，最后将Sub类返回。")]),t._v(" "),a("h2",{attrs:{id:"vue-directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-directive"}},[t._v("#")]),t._v(" Vue.directive")]),t._v(" "),a("h2",{attrs:{id:"vue-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-filter"}},[t._v("#")]),t._v(" Vue.filter")]),t._v(" "),a("p",[t._v("注册过滤器是将定义好的过滤器存放在某个位置，获取过滤器是根据过滤器id从存放过滤器的位置来读取过滤器")]),t._v(" "),a("h2",{attrs:{id:"vue-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-component"}},[t._v("#")]),t._v(" Vue.component")]),t._v(" "),a("p",[t._v("该API是用来注册或获取全局组件的")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册组件，传入一个扩展过的构造器")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册组件，传入一个选项对象 (自动调用 Vue.extend)")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取注册的组件 (始终返回构造器)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"vue-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-use"}},[t._v("#")]),t._v(" Vue.use")]),t._v(" "),a("h2",{attrs:{id:"vue-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-mixin"}},[t._v("#")]),t._v(" Vue.mixin")]),t._v(" "),a("p",[t._v("会影响到所有组件")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mixin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mixin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"vue-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-compile"}},[t._v("#")]),t._v(" Vue.compile")]),t._v(" "),a("h2",{attrs:{id:"vue-observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-observable"}},[t._v("#")]),t._v(" Vue.observable")]),t._v(" "),a("h2",{attrs:{id:"vue-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-version"}},[t._v("#")]),t._v(" Vue.version")])])}),[],!1,null,null,null);s.default=e.exports}}]);