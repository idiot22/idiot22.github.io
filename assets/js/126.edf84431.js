(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{847:function(t,a,e){"use strict";e.r(a);var s=e(6),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"编译过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译过程"}},[t._v("#")]),t._v(" 编译过程")]),t._v(" "),e("ul",[e("li",[t._v("先将模版进行分析，生成对应的ast树（用对象来描述语法）")]),t._v(" "),e("li",[t._v("做转化流程 transform -> 对动态节点做一些标记 指令 插槽 事件 属性...patchFlag")]),t._v(" "),e("li",[t._v("代码生成 codegen -> 生成最终代码")])]),t._v(" "),e("h2",{attrs:{id:"block的概念-block-tree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block的概念-block-tree"}},[t._v("#")]),t._v(" Block的概念 -> Block Tree")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("diff算法的特点是递归遍历，每次比较同一层")])]),t._v(" "),e("li",[e("p",[t._v("block的作用就是为了收集动态节点，将树的递归拍平成一个数组")])]),t._v(" "),e("li",[e("p",[t._v("在createVnode的时候，会判断这个节点是动态的，就让外层的block收集起来")])]),t._v(" "),e("li",[e("p",[t._v("目的是为了diff的时候只diff动态节点")])]),t._v(" "),e("li",[e("p",[t._v("如果会影响结构的dom都会被标记成block节点，"),e("code",[t._v("v-if v-else")])])]),t._v(" "),e("li",[e("p",[t._v("父亲也会收集儿子block -> blockTree")])]),t._v(" "),e("li",[e("p",[t._v("改变结构的也要封装到block，更新方式是拿以前的和现在的区别，靶向更新，如果前后节点个数不一致，就全部比对，"),e("code",[t._v("v-for")])])])]),t._v(" "),e("h2",{attrs:{id:"patchflags对不同的动态节点进行描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patchflags对不同的动态节点进行描述"}},[t._v("#")]),t._v(" patchFlags对不同的动态节点进行描述")]),t._v(" "),e("h2",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),e("h3",{attrs:{id:"静态节点提升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态节点提升"}},[t._v("#")]),t._v(" 静态节点提升")]),t._v(" "),e("ul",[e("li",[t._v("vue2每次渲染都要创建虚拟节点,vue3有静态提升，将静态节点进行提取，不用重新渲染")]),t._v(" "),e("li",[t._v("当很多静态节点是一样的，达到一定数量就会合并一个，这样不用每次创建都要去创建一次虚拟dom")])]),t._v(" "),e("h3",{attrs:{id:"事件缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件缓存"}},[t._v("#")]),t._v(" 事件缓存")]),t._v(" "),e("ul",[e("li",[t._v("缓存事件，防止重新创建事件")])]),t._v(" "),e("h2",{attrs:{id:"jsx-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx-template"}},[t._v("#")]),t._v(" jsx，template")]),t._v(" "),e("p",[t._v("jsx目的是灵活（没有上述优化），template写起来简单，有模版编译优化")])])}),[],!1,null,null,null);a.default=l.exports}}]);