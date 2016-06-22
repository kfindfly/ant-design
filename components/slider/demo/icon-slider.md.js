webpackJsonp([144,363],{762:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(110),a(109)),o=t(p),c=(a(10),a(8)),e=t(c),l=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},u=a(1),i=t(u),k=a(2);t(k);n.exports={content:[["p","\u6ed1\u5757\u5de6\u53f3\u53ef\u4ee5\u8bbe\u7f6e\u56fe\u6807\u6765\u8868\u8fbe\u4e1a\u52a1\u542b\u4e49\u3002"]],meta:{order:2,title:"\u5e26 icon \u7684\u6ed1\u5757",filename:"components/slider/demo/icon-slider.md",id:"components-slider-demo-icon-slider"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Slider<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> IconSlider <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> max <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>max<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> min <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>min<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> mid <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >(</span>max <span class="token operator" >-</span> min<span class="token punctuation" >)</span> <span class="token operator" >/</span> <span class="token number" >2</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >toFixed</span><span class="token punctuation" >(</span><span class="token number" >5</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      preIconClass<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>value <span class="token operator" >>=</span> mid <span class="token operator" >?</span> <span class="token string" >\'\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'anticon-highlight\'</span><span class="token punctuation" >,</span>\n      nextIconClass<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>value <span class="token operator" >>=</span> mid <span class="token operator" >?</span> <span class="token string" >\'anticon-highlight\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n      mid<span class="token punctuation" >,</span>\n      sliderValue<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>v<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      preIconClass<span class="token punctuation" >:</span> v <span class="token operator" >>=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mid <span class="token operator" >?</span> <span class="token string" >\'\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'anticon-highlight\'</span><span class="token punctuation" >,</span>\n      nextIconClass<span class="token punctuation" >:</span> v <span class="token operator" >>=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mid <span class="token operator" >?</span> <span class="token string" >\'anticon-highlight\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n      sliderValue<span class="token punctuation" >:</span> v<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>iconWrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>preIconClass<span class="token punctuation" >}</span></span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>icon<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token operator" >&lt;</span>Slider <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> onChange<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span> value<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>sliderValue<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>nextIconClass<span class="token punctuation" >}</span></span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>icon<span class="token punctuation" >[</span><span class="token number" >1</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>IconSlider</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >0</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >0</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >icon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'frown\'</span><span class="token punctuation" >,</span> <span class="token string" >\'smile\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"IconSlider",getInitialState:function(){var n=this.props.max,s=this.props.min,a=((n-s)/2).toFixed(5);return{preIconClass:this.props.value>=a?"":"anticon-highlight",nextIconClass:this.props.value>=a?"anticon-highlight":"",mid:a,sliderValue:this.props.value}},handleChange:function(n){this.setState({preIconClass:n>=this.state.mid?"":"anticon-highlight",nextIconClass:n>=this.state.mid?"anticon-highlight":"",sliderValue:n})},render:function(){return i["default"].createElement("div",{className:"iconWrapper"},i["default"].createElement(e["default"],{className:this.state.preIconClass,type:this.props.icon[0]}),i["default"].createElement(o["default"],l({},this.props,{onChange:this.handleChange,value:this.state.sliderValue})),i["default"].createElement(e["default"],{className:this.state.nextIconClass,type:this.props.icon[1]}))}});return i["default"].createElement(n,{min:0,max:20,value:0,icon:["frown","smile"]})},style:".iconWrapper {\n  position: relative;\n  padding: 0px 30px;\n}\n\n.iconWrapper .anticon {\n  position: absolute;\n  top: -3px;\n  width: 16px;\n  height: 16px;\n  line-height: 1;\n  font-size: 16px;\n  color: #ccc;\n}\n\n.iconWrapper .anticon:first-child {\n  left: 0;\n}\n\n.iconWrapper .anticon:last-child {\n  right: 0;\n}\n\n.anticon.anticon-highlight {\n  color: #666;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.iconWrapper</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> relative<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span>px <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.iconWrapper</span> <span class="token class" >.anticon</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> absolute<span class="token punctuation" >;</span>\n  <span class="token property" >top</span><span class="token punctuation" >:</span> -<span class="token number" >3</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#ccc</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.iconWrapper</span> <span class="token class" >.anticon</span><span class="token pseudo-class" >:first-child</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >left</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.iconWrapper</span> <span class="token class" >.anticon</span><span class="token pseudo-class" >:last-child</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >right</span><span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.anticon.anticon-highlight</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#666</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});