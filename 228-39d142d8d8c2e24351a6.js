(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1011:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(884),l=n.n(a),c=function(e){var t=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-footer",name:"terra-action-footer",version:"2.52.0",url:t})}},1012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(5)),a=c(n(3)),l=c(n(1097));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={children:a.default.node.isRequired},p=function(e){var t=e.children;return r.default.createElement("div",{className:i("content-wrapper")},t)};p.propTypes=u;var f=p;t.default=f},1097:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},1583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(305)),a=l(n(1012));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.default,null,r.default.createElement(o.default,null,r.default.createElement("a",{href:"/#/site/action-footer/block"},"A link")))}},1584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(46)),a=i(n(296)),l=i(n(305)),c=i(n(1012));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(c.default,null,r.default.createElement(l.default,null,r.default.createElement(a.default,{paddingBottom:"medium"},r.default.createElement(o.default,{isBlock:!0,text:"First Action"})),r.default.createElement(o.default,{isBlock:!0,text:"Second Action"})))}},2988:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(0),o=n.n(r),a=n(289),l=n(1011),c=n(1583),i=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function m(e){var t=e.components,n=p(e,["components"]);return Object(a.mdx)("wrapper",u({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <BlockActionFooter>\n      <a href=\"/#/site/action-footer/block\">A link</a>\n    </BlockActionFooter>\n  </ExampleTemplate>\n);\n\n")))}m.isMDXComponent=!0;var d=n(883),s=n.n(d),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(s.a,{title:t||"Single Action",description:n,example:o.a.createElement(i.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},O=n(1584),x=n.n(O);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function g(e){var t=e.components,n=y(e,["components"]);return Object(a.mdx)("wrapper",v({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <BlockActionFooter>\n      <Spacer paddingBottom=\"medium\">\n        <Button isBlock text=\"First Action\" />\n      </Spacer>\n      <Button isBlock text=\"Second Action\" />\n    </BlockActionFooter>\n  </ExampleTemplate>\n);\n\n")))}g.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(s.a,{title:t||"Multiple Actions",description:n,example:o.a.createElement(x.a,null),exampleSrc:o.a.createElement(g,null),isExpanded:r})},E=n(886),k=n.n(E);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var B=function(){return Object(a.mdx)(k.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=A(t,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=A(t,["components"]);return Object(a.mdx)("wrapper",w({},e,r,{components:n,mdxType:"MDXLayout"}))}return t.isMDXComponent=!0,t({})}}]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _={};function P(e){var t=e.components,n=T(e,["components"]);return Object(a.mdx)("wrapper",M({},_,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-block-action-footer"},"Terra Block Action Footer"),Object(a.mdx)("p",null,"The block action footer component is a footer bar that contains a single socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Single Action",mdxType:"SingleActionExample"}),Object(a.mdx)(h,{title:"Multiple Actions",mdxType:"MultipleActionsExample"}),Object(a.mdx)("h2",{id:"block-action-footer-props"},"Block Action Footer Props"),Object(a.mdx)(B,{mdxType:"BlockActionFooterPropsTable"}))}P.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i}}]);
//# sourceMappingURL=228-39d142d8d8c2e24351a6.js.map