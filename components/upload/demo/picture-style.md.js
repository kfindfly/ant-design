webpackJsonp([48,363],{859:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(81),a(80)),o=t(p),e=(a(7),a(5)),c=t(e),l=(a(10),a(8)),u=t(l),i=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},k=a(1),r=t(k),d=a(2);t(d);n.exports={content:[["p","\u4e0a\u4f20\u6587\u4ef6\u4e3a\u56fe\u7247\uff0c\u53ef\u5c55\u793a\u672c\u5730\u7f29\u7565\u56fe\u3002"],["p",["code","IE8/9"]," \u4e0d\u652f\u6301\u6d4f\u89c8\u5668\u672c\u5730\u7f29\u7565\u56fe\u5c55\u793a\uff08",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL"},"Ref"],"\uff09\uff0c\u53ef\u4ee5\u5199 ",["code","thumbUrl"]," \u5c5e\u6027\u6765\u4ee3\u66ff\u3002"]],meta:{order:6,title:"\u56fe\u7247\u5217\u8868\u6837\u5f0f",filename:"components/upload/demo/picture-style.md",id:"components-upload-demo-picture-style"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n  listType<span class="token punctuation" >:</span> <span class="token string" >\'picture\'</span><span class="token punctuation" >,</span>\n  defaultFileList<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'xxx.png\'</span><span class="token punctuation" >,</span>\n    status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n    url<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n    thumbUrl<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >2</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'yyy.png\'</span><span class="token punctuation" >,</span>\n    status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n    url<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n    thumbUrl<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> className<span class="token operator" >=</span><span class="token string" >"upload-list-inline"</span><span class="token operator" >></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={action:"/upload.do",listType:"picture",defaultFileList:[{uid:-1,name:"xxx.png",status:"done",url:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",thumbUrl:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"},{uid:-2,name:"yyy.png",status:"done",url:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",thumbUrl:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"}]};return r["default"].createElement("div",null,r["default"].createElement(o["default"],n,r["default"].createElement(c["default"],{type:"ghost"},r["default"].createElement(u["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20")),r["default"].createElement("br",null),r["default"].createElement("br",null),r["default"].createElement(o["default"],i({},n,{className:"upload-list-inline"}),r["default"].createElement(c["default"],{type:"ghost"},r["default"].createElement(u["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20")))},style:"/* \u52a0\u51e0\u884c\u6837\u5f0f\u5c06\u4e0a\u4f20\u9879\u53d8\u6210\u5e73\u94fa\u6837\u5f0f */\n.upload-list-inline .ant-upload-list-item {\n  display: inline-block;\n  width: 200px;\n  margin-right: 8px;\n}",highlightedStyle:'<span class="token comment" spellcheck="true">/* \u52a0\u51e0\u884c\u6837\u5f0f\u5c06\u4e0a\u4f20\u9879\u53d8\u6210\u5e73\u94fa\u6837\u5f0f */</span>\n<span class="token selector" ><span class="token class" >.upload-list-inline</span> <span class="token class" >.ant-upload-list-item</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >200</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});