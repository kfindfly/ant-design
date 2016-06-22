webpackJsonp([155,363],{750:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(21),a(20)),o=t(p),c=a(1),e=t(c),u=a(2);t(u);n.exports={content:[["p","\u8f93\u5165\u6846\u81ea\u52a8\u5b8c\u6210\u529f\u80fd\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u8d26\u53f7\u6ce8\u518c\u8868\u5355\u7684\u4f8b\u5b50\u3002"]],meta:{order:4,title:"\u667a\u80fd\u63d0\u793a",filename:"components/select/demo/combobox.md",id:"components-select-demo-combobox"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> options<span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>value <span class="token operator" >||</span> value<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span><span class="token string" >\'@\'</span><span class="token punctuation" >)</span> <span class="token operator" >>=</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'gmail.com\'</span><span class="token punctuation" >,</span> <span class="token string" >\'163.com\'</span><span class="token punctuation" >,</span> <span class="token string" >\'qq.com\'</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>domain<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >const</span> email <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >@</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>domain<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n        <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>email<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>email<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> options <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// filterOption \u9700\u8981\u8bbe\u7f6e\u4e3a false\uff0c\u6570\u636e\u662f\u52a8\u6001\u8bbe\u7f6e\u7684</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >combobox</span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >filterOption</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u8d26\u6237\u540d<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>options<span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Option,s=e["default"].createClass({displayName:"Test",getInitialState:function(){return{options:[]}},handleChange:function(s){var a=void 0;a=!s||s.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map(function(a){var t=s+"@"+a;return e["default"].createElement(n,{key:t},t)}),this.setState({options:a})},render:function(){return e["default"].createElement(o["default"],{combobox:!0,style:{width:200},onChange:this.handleChange,filterOption:!1,placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d"},this.state.options)}});return e["default"].createElement(s,null)}}}});