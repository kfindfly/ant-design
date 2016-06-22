webpackJsonp([288,363],{614:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(36),s(35)),p=t(e),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u8bbe\u7f6e ",["code","disabledDate"]," \u65b9\u6cd5\uff0c\u6765\u786e\u5b9a\u4e0d\u53ef\u9009\u65f6\u6bb5\u3002"],["p","\u5982\u4e0a\u4f8b\uff1a\u4e0d\u53ef\u9009\u62e9\u4eca\u5929\u4e4b\u540e\u7684\u65e5\u671f\u3002"]],"en-US":[["p","Specify unselectable period by ",["code","disabledDate"],"."],["p","As in the example above: you can't select a date later than today."]]},meta:{order:6,title:{"zh-CN":"\u6307\u5b9a\u4e0d\u53ef\u9009\u62e9\u65e5\u671f","en-US":"Specify the date that cannot be selected"},filename:"components/date-picker/demo/disabled-date.md",id:"components-date-picker-demo-disabled-date"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> disabledDate <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>current<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token comment" spellcheck="true">// can not select days after today</span>\n  <span class="token keyword" >return</span> current <span class="token operator" >&amp;&amp;</span> current<span class="token punctuation" >.</span><span class="token function" >getTime</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >></span> Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >disabledDate</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledDate<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return n&&n.getTime()>Date.now()};return c["default"].createElement(p["default"],{disabledDate:n})}}}});