webpackJsonp([141,363],{765:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(110),s(109)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:[["p","\u4f7f\u7528 ",["code","tipFormatter"]," \u53ef\u4ee5\u683c\u5f0f\u5316 ",["code","Tooltip"]," \u7684\u5185\u5bb9\uff0c\u8bbe\u7f6e ",["code","tipFormatter={null}"],"\uff0c\u5219\u9690\u85cf ",["code","Tooltip"],"\u3002"]],meta:{order:5,title:"\u81ea\u5b9a\u4e49\u63d0\u793a",filename:"components/slider/demo/tip-formatter.md",id:"components-slider-demo-tip-formatter"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Slider <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >formatter</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >%`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >tipFormatter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>formatter<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >tipFormatter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >null</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){return n+"%"}return c["default"].createElement("div",null,c["default"].createElement(o["default"],{tipFormatter:n}),c["default"].createElement(o["default"],{tipFormatter:null}))}}}});