webpackJsonp([93,363],{814:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(21),s(20)),o=t(p),e=(s(62),s(61)),c=t(e),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u6709\u56db\u4e2a\u4f4d\u7f6e\uff0c",["code",'tabPosition="left|right|top|bottom"'],"\u3002"]],meta:{order:6,title:"\u4f4d\u7f6e",filename:"components/tabs/demo/position.md",id:"components-tabs-demo-position"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs<span class="token punctuation" >,</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      tabPosition<span class="token punctuation" >:</span> <span class="token string" >\'top\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >changeTabPosition</span><span class="token punctuation" >(</span>tabPosition<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tabPosition <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          \u9875\u7b7e\u4f4d\u7f6e\uff1a\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tabPosition<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>changeTabPosition<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >dropdownMatchSelectWidth</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>top<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>bottom<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>left<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>right<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >tabPosition</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tabPosition<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].TabPane,a=o["default"].Option,s=l["default"].createClass({displayName:"Demo",getInitialState:function(){return{tabPosition:"top"}},changeTabPosition:function(n){this.setState({tabPosition:n})},render:function(){return l["default"].createElement("div",null,l["default"].createElement("div",{style:{marginBottom:16}},"\u9875\u7b7e\u4f4d\u7f6e\uff1a",l["default"].createElement(o["default"],{value:this.state.tabPosition,onChange:this.changeTabPosition,dropdownMatchSelectWidth:!1},l["default"].createElement(a,{value:"top"},"top"),l["default"].createElement(a,{value:"bottom"},"bottom"),l["default"].createElement(a,{value:"left"},"left"),l["default"].createElement(a,{value:"right"},"right"))),l["default"].createElement(c["default"],{tabPosition:this.state.tabPosition},l["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e00",key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),l["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9"),l["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09\u5185\u5bb9")))}});return l["default"].createElement(s,null)}}}});