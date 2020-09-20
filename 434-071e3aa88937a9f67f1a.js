(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{1165:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(884),i=n.n(o),l=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-visually-hidden-text",name:"terra-visually-hidden-text",version:"2.30.0",url:t})}},2284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(142));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("p",null,"Focus in this section to hear screen reader only text",r.default.createElement(a.default,{tabIndex:"0",text:"This is read by a screen reader"}))}},2285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(142));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,o,i=d(s);function s(){return l(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){this.visuallyHiddenText.innerText="Text written via refCallback innerText update"}},{key:"render",value:function(){var e=this;return r.default.createElement("p",null,"Visually Hidden Text which uses refCallback to write innerText",r.default.createElement(a.default,{refCallback:function(t){e.visuallyHiddenText=t}}))}}])&&u(t.prototype,n),o&&u(t,o),s}(r.default.Component);t.default=m},2989:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(0),a=n.n(r),o=n(289),i=n(1165),l=n(2284),u=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=d(e,["components"]);return Object(o.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nexport default () => (\n  <p>\n    Focus in this section to hear screen reader only text\n    <VisuallyHiddenText tabIndex=\"0\" text=\"This is read by a screen reader\" />\n  </p>\n);\n\n")))}p.isMDXComponent=!0;var m=n(883),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Default Visually Hidden Text",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},y=n(2285),x=n.n(y);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function j(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",O({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nclass Example extends React.Component {\n  componentDidMount() {\n    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';\n  }\n\n  render() {\n    return (\n      <p>\n        Visually Hidden Text which uses refCallback to write innerText\n        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />\n      </p>\n    );\n  }\n}\n\nexport default Example;\n\n")))}j.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Ref Callback Visually Hidden Text",description:n,example:a.a.createElement(x.a,null),exampleSrc:a.a.createElement(j,null),isExpanded:r})},w=n(886),T=n.n(w);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=function(){return Object(o.mdx)(T.a,{rows:[{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback ref to pass into the dom element. This is useful when using terra-visually-hidden-text as an aria-live container."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Text to be read to the screen reader"))}return t.isMDXComponent=!0,t({})}}]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={};function D(e){var t=e.components,n=M(e,["components"]);return Object(o.mdx)("wrapper",C({},k,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-visually-hidden-text"},"Terra Visually Hidden Text"),Object(o.mdx)("p",null,"Visually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader."),Object(o.mdx)("p",null,"Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"You may want to provide a visually hidden header to allow for better readability."),Object(o.mdx)("li",{parentName:"ul"},"You may need to provide different instructions for visual users vs non visual users."),Object(o.mdx)("li",{parentName:"ul"},"div nodes have a difficult understanding the aria-label attributes as well.")),Object(o.mdx)("p",null,"In these instances, it's recommended to use visually hidden text."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",C({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-visually-hidden-text"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",C({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",C({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),"import VisuallyHiddenText from 'terra-visually-hidden-text';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features"}),"Cross-Browser Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{title:"VisuallyHiddenText with empty string",mdxType:"DefaultVisuallyHiddenText"}),Object(o.mdx)(g,{title:"VisuallyHiddenText with ref Callback",mdxType:"RefCallbackVisuallyHiddenText"}),Object(o.mdx)("h2",{id:"visually-hidden-text-props"},"Visually Hidden Text Props"),Object(o.mdx)(P,{mdxType:"VisuallyHiddenTextPropsTable"}))}D.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u}}]);
//# sourceMappingURL=434-071e3aa88937a9f67f1a.js.map