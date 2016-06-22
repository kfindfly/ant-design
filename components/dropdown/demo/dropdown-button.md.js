webpackJsonp([276,363],{627:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(26),s(25)),o=t(p),e=(s(94),s(93)),c=t(e),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u5de6\u8fb9\u662f\u6309\u94ae\uff0c\u53f3\u8fb9\u662f\u989d\u5916\u7684\u76f8\u5173\u529f\u80fd\u83dc\u5355\u3002"]],meta:{order:4,title:"\u5e26\u4e0b\u62c9\u6846\u7684\u6309\u94ae",filename:"components/dropdown/demo/dropdown-button.md",id:"components-dropdown-demo-dropdown-button"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> DropdownButton <span class="token operator" >=</span> Dropdown<span class="token punctuation" >.</span>Button<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleButtonClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'click left button\'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleMenuClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'click\'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleMenuClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DropdownButton</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleButtonClick<span class="token punctuation" >}</span></span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    \u67d0\u529f\u80fd\u6309\u94ae\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>DropdownButton</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("click left button",n)}function a(n){console.log("click",n)}var s=c["default"].Button,t=l["default"].createElement(o["default"],{onClick:a},l["default"].createElement(o["default"].Item,{key:"1"},"\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879"),l["default"].createElement(o["default"].Item,{key:"2"},"\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879"),l["default"].createElement(o["default"].Item,{key:"3"},"\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879"));return l["default"].createElement(s,{onClick:n,overlay:t,type:"primary"},"\u67d0\u529f\u80fd\u6309\u94ae")}}}});