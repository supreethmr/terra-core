(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{2826:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=u?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=i(n(46)),a=i(n(292));function i(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,u=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(u)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=l((0,u.useState)(""),2),t=e[0],n=e[1],r=l((0,u.useState)(""),2),i=r[0],c=r[1],f=l((0,u.useState)(""),2),p=f[0],s=f[1],d=(0,u.useRef)(null);return u.default.createElement("div",null,u.default.createElement("div",null," Minimum Search Length is 3 "),u.default.createElement(a.default,{inputRef:!0,id:"searchfield",onSearch:function(e){n(e),c("Search Text: ")},onInvalidSearch:function(e){n(e),c("INVALID Search Text: ")},onChange:function(e,t){s(t)},onInput:function(e){s(e.target.value)},minimumSearchTextLength:3,value:p,inputRefCallback:function(e){d.current=e}}),u.default.createElement(o.default,{text:"Set search field text",onClick:function(){d.current&&setTimeout((function(){var e;d.current.value="IpsumLorem","function"==typeof Event?e=new Event("input",{bubbles:!0,cancelable:!1}):(e=document.createEvent("Event")).initEvent("input",!0,!1),d.current.dispatchEvent(e)}),1e3)},id:"search-field-set-text-button"}),u.default.createElement("div",{id:"search-callback-text"},i,t))};t.default=p}}]);
//# sourceMappingURL=807-a684568f93a318d54581.js.map