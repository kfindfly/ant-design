webpackJsonp([230,363],{675:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(8)),e=t(p),o=(s(26),s(25)),c=t(o),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u70b9\u51fb\u83dc\u5355\uff0c\u6536\u8d77\u5176\u4ed6\u5c55\u5f00\u7684\u6240\u6709\u83dc\u5355\uff0c\u4fdd\u6301\u83dc\u5355\u805a\u7126\u7b80\u6d01\u3002"]],meta:{order:2,title:"\u53ea\u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355",filename:"components/menu/demo/sider-current.md",id:"components-menu-demo-sider-current"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SubMenu <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>SubMenu<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Sider <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n      openKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'click \'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>key<span class="token punctuation" >,</span>\n      openKeys<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>keyPath<span class="token punctuation" >.</span><span class="token function" >slice</span><span class="token punctuation" >(</span><span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onToggle</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      openKeys<span class="token punctuation" >:</span> info<span class="token punctuation" >.</span>open <span class="token operator" >?</span> info<span class="token punctuation" >.</span>keyPath <span class="token punctuation" >:</span> info<span class="token punctuation" >.</span>keyPath<span class="token punctuation" >.</span><span class="token function" >slice</span><span class="token punctuation" >(</span><span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleClick<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >openKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>openKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onOpen</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onToggle<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onToggle<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >selectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>current<span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>inline<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub1<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>mail<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>4<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub2<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>appstore<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>5<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >5</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub3<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e09\u7ea7\u5bfc\u822a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>7<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >7</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub4<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>setting<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>9<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >9</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>10<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >10</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>11<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >11</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >12</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Sider</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].SubMenu,a=l["default"].createClass({displayName:"Sider",getInitialState:function(){return{current:"1",openKeys:[]}},handleClick:function(n){console.log("click ",n),this.setState({current:n.key,openKeys:n.keyPath.slice(1)})},onToggle:function(n){this.setState({openKeys:n.open?n.keyPath:n.keyPath.slice(1)})},render:function(){return l["default"].createElement(c["default"],{onClick:this.handleClick,style:{width:240},openKeys:this.state.openKeys,onOpen:this.onToggle,onClose:this.onToggle,selectedKeys:[this.state.current],mode:"inline"},l["default"].createElement(n,{key:"sub1",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"mail"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e00"))},l["default"].createElement(c["default"].Item,{key:"1"},"\u9009\u98791"),l["default"].createElement(c["default"].Item,{key:"2"},"\u9009\u98792"),l["default"].createElement(c["default"].Item,{key:"3"},"\u9009\u98793"),l["default"].createElement(c["default"].Item,{key:"4"},"\u9009\u98794")),l["default"].createElement(n,{key:"sub2",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"appstore"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e8c"))},l["default"].createElement(c["default"].Item,{key:"5"},"\u9009\u98795"),l["default"].createElement(c["default"].Item,{key:"6"},"\u9009\u98796"),l["default"].createElement(n,{key:"sub3",title:"\u4e09\u7ea7\u5bfc\u822a"},l["default"].createElement(c["default"].Item,{key:"7"},"\u9009\u98797"),l["default"].createElement(c["default"].Item,{key:"8"},"\u9009\u98798"))),l["default"].createElement(n,{key:"sub4",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"setting"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e09"))},l["default"].createElement(c["default"].Item,{key:"9"},"\u9009\u98799"),l["default"].createElement(c["default"].Item,{key:"10"},"\u9009\u987910"),l["default"].createElement(c["default"].Item,{key:"11"},"\u9009\u987911"),l["default"].createElement(c["default"].Item,{key:"12"},"\u9009\u987912")))}});return l["default"].createElement(a,null)}}}});