(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{815:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"响应性api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应性api"}},[s._v("#")]),s._v(" 响应性api")]),s._v(" "),a("h3",{attrs:{id:"基础api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础api"}},[s._v("#")]),s._v(" 基础api")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("reactive")]),a("br"),s._v("\n响应式转换是“深层”的——它影响所有嵌套 property"),a("br"),s._v("\nreactive 将解包所有深层的 refs，同时维持 ref 的响应性。"),a("br"),s._v("\n当将 ref 分配给 reactive property 时，ref 将被自动解包")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[s._v("重要")]),a("p",[a("strong",[s._v("解包就是一般的被ref包裹的变量访问需要"),a("code",[s._v("变量.value")]),s._v("访问，reactive里有ref变量时，就可以直接变量名访问，不用.value")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\ncount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("readonly")]),a("br"),s._v("\n只读的，被包裹在里边的变量都是只读的")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("isProxy")]),a("br"),s._v("\n检查对象是否是由 reactive 或 readonly 创建的 proxy")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("isReactive")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("如果该代理是 "),a("code",[s._v("readonly")]),s._v(" 创建的，但包裹了由 "),a("code",[s._v("reactive")]),s._v(" 创建的另一个代理，它也会返回 true")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'John'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stateCopy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isReactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stateCopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[a("code",[s._v("isReadonly")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("toRow")]),a("br"),s._v("\n可以返回 "),a("code",[s._v("reactive")]),s._v(" 或 "),a("code",[s._v("readonly")]),s._v(" 代理的原始对象")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("markRow")]),a("br"),s._v("\n静态变量可以用，使其不会成为proxy对象，提高性能")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("shawllowReactive")]),a("br"),s._v("\n本身是响应式的，嵌套对象里的变量就不是响应式的")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("shawllowReadonly")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refs"}},[s._v("#")]),s._v(" Refs")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("ref")])]),s._v(" "),a("li",[a("p",[s._v("unref"),a("br"),s._v("\n如果参数是一个 ref，则返回内部值，否则返回参数本身")])]),s._v(" "),a("li",[a("p",[s._v("toRef"),a("br"),s._v("\n为源响应式对象上的某个 property 新创建一个 ref")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fooRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("toRefs"),a("br"),s._v("\n将响应式对象转换为普通对象,会将reactive里面的属性都变成ref包裹的，这样就可以解构出来，还能保证响应式")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nbar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stateAsRefs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRefs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\nstateAsRefs 的类型:\n\n{\nfoo: Ref<number>,\nbar: Ref<number>\n}\n*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("isRef")])]),s._v(" "),a("li",[a("p",[s._v("customRef\n自定义ref"),a("br"),s._v("\n比如可以自定义一个值赋值间距大于200ms")])]),s._v(" "),a("li",[a("p",[s._v("triggerRef"),a("br"),s._v("\n手动执行与 shallowRef 关联的任何作用 (effect)，比如强制刷新页面")])])]),s._v(" "),a("h3",{attrs:{id:"computed-与-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-与-watch"}},[s._v("#")]),s._v(" computed 与 watch")]),s._v(" "),a("ol",[a("li",[s._v("computed")]),s._v(" "),a("li",[s._v("watchEffect")]),s._v(" "),a("li",[s._v("watchPostEffect")]),s._v(" "),a("li",[s._v("watchSyncEffect")]),s._v(" "),a("li",[s._v("watch")])]),s._v(" "),a("h3",{attrs:{id:"effect-作用域-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#effect-作用域-api"}},[s._v("#")]),s._v(" Effect 作用域 API")]),s._v(" "),a("p",[s._v("//todo")]),s._v(" "),a("h2",{attrs:{id:"组合式api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式api"}},[s._v("#")]),s._v(" 组合式api")]),s._v(" "),a("h3",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject"}},[s._v("#")]),s._v(" Provide / Inject")]),s._v(" "),a("p",[s._v("这两者只能在使用当前活动实例的 setup() 期间被调用")]),s._v(" "),a("h3",{attrs:{id:"getcurrentinstance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcurrentinstance"}},[s._v("#")]),s._v(" getCurrentInstance")]),s._v(" "),a("p",[s._v("可以访问内部组件实例，不推荐在应用中使用"),a("br"),s._v("\n只能在setup和生命钩子中使用"),a("br"),s._v("\n如果需要在外部使用，就需要先获取到实例")]),s._v(" "),a("h2",{attrs:{id:"应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用配置"}},[s._v("#")]),s._v(" 应用配置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("errorHandler"),a("br"),s._v("\n处理组件渲染方法和侦听器执行期间抛出的未捕获错误。这个处理函数被调用时，可获取错误信息和应用实例")])]),s._v(" "),a("li",[a("p",[s._v("warnHandler"),a("br"),s._v("\n为 Vue 的运行时警告指定一个自定义处理函数。注意这只会在开发环境下生效")])]),s._v(" "),a("li",[a("p",[s._v("globalProperties"),a("br")])]),s._v(" "),a("li",[a("p",[s._v("optionMergeStrategies"),a("br"),s._v("\n自定义选项合并策略")])]),s._v(" "),a("li",[a("p",[s._v("performance"),a("br"),s._v("\n设置为 true 以在浏览器开发工具的 performance/timeline 面板中启用对组件初始化、编译、渲染和更新的性能追踪")])]),s._v(" "),a("li",[a("p",[s._v("compilerOptions")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("compilerOptions.isCustomElement\n自定义元素")])]),s._v(" "),a("li",[a("p",[s._v("compilerOptions.whitespace"),a("br"),s._v("\n类型：'condense' | 'preserve'\n默认值；'condense'\n编译的时候会把多余空格去掉")])]),s._v(" "),a("li",[a("p",[s._v("compilerOptions.delimiters"),a("br"),s._v("\n在模板内的文本插值的边界符")])]),s._v(" "),a("li",[a("p",[s._v("compilerOptions.comments"),a("br"),s._v("\nVue 会在生产环境下移除模板内的 HTML 注释。将这个选项设置为 true 可以强制 Vue 在生产环境下保留注释")])])]),s._v(" "),a("h2",{attrs:{id:"应用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用api"}},[s._v("#")]),s._v(" 应用api")]),s._v(" "),a("ol",[a("li",[s._v("component")]),s._v(" "),a("li",[s._v("config")]),s._v(" "),a("li",[s._v("directive（看vue3笔记）")]),s._v(" "),a("li",[s._v("mounted")]),s._v(" "),a("li",[s._v("unmouted")]),s._v(" "),a("li",[s._v("provide")]),s._v(" "),a("li",[s._v("mixin 不适合在应用中写，可以写插件")]),s._v(" "),a("li",[s._v("provide 通过应用提供值在写插件时尤其有用,不要和组合式api中的provide混淆")]),s._v(" "),a("li",[s._v("use 安装 Vue.js 插件")]),s._v(" "),a("li",[s._v("version 以字符串形式提供已安装的 Vue 的版本号")])]),s._v(" "),a("h2",{attrs:{id:"全局api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局api"}},[s._v("#")]),s._v(" 全局api")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("createApp")])]),s._v(" "),a("li",[a("p",[s._v("h"),a("br"),s._v("\n返回一个”虚拟节点“,目的是用于手动编写的渲染函数"),a("br"),s._v(" "),a("strong",[s._v("参数")]),s._v("：type，props 和 children")])]),s._v(" "),a("li",[a("p",[s._v("defineComponent\n在TypeScript下，给予了组件 正确的参数类型推断 "),a("br"),s._v("\n可以推断出setup(props)的类型"),a("br"),s._v("\n返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持")])]),s._v(" "),a("li",[a("p",[s._v("defineAsyncComponent"),a("br"),s._v("\n只有在需要时才会加载的异步组件"),a("br")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" AsyncComp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineAsyncComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/AsyncComponent.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("还有其他参数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineAsyncComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   loadingComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   errorComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   suspensible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   onError\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("defineCustomElement\n自定义元素，用于任意框架或不基于框架使用")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" MyVueElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineCustomElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncustomElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-vue-element'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MyVueElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//<my-vue-element></my-vue-element>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("resolveComponent"),a("br")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[s._v("重要")]),a("p",[s._v("只能在render，和setup中使用")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据组件名称来解析想组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[s._v("resolveDynamicComponent"),a("br"),s._v("\n//解析动态组件")])]),s._v(" "),a("li",[a("p",[s._v("resolveDirective")])])]),s._v(" "),a("p",[s._v("解析指令\n8. withDirectives")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许将指令应用于 VNode")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" withDirectives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resolveDirective "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveDirective")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveDirective")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withDirectives")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[s._v("createRenderer"),a("br"),s._v("\n不懂todo")])]),s._v(" "),a("li",[a("p",[s._v("nextTick"),a("br"),s._v("\nawait nextTick()")])]),s._v(" "),a("li",[a("p",[s._v("mergeProps"),a("br"),s._v("\n将包含 VNode prop 的多个对象合并为一个单独的对象")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" props "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mergeProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该 class 将与 $attrs 中的其他 class 合并。")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'active'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$attrs\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("!!!useCssModule"),a("br")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useCssModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useCssModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("success\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Task complete!'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("success "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("090")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ol",{attrs:{start:"13"}},[a("li",[s._v("version"),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);