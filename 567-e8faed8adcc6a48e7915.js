(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{2604:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n(0)),r=l(n(5)),i=l(n(1063)),u=l(n(910));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=r.default.bind(u.default),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(l,t);var e,n,r,u=s(l);function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this)).state={isInvalid:!1,isIncomplete:!1,required:!1},t.toggleInvalid=t.toggleInvalid.bind(d(t)),t.toggleIncomplete=t.toggleIncomplete.bind(d(t)),t}return e=l,(n=[{key:"toggleInvalid",value:function(){this.setState((function(t){return{isInvalid:!t.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(t){return{isIncomplete:!t.isIncomplete,required:!t.required}}))}},{key:"render",value:function(){return o.default.createElement("div",{className:b("content-wrapper")},o.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle Incomplete"),o.default.createElement(i.default,{inputId:"test-input",defaultValue:"Value",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test",type:"text"},isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&a(e.prototype,n),r&&a(e,r),l}(o.default.Component);e.default=m},910:function(t,e,n){t.exports={"content-wrapper":"Input-test-module__content-wrapper___dsRQD","programmatic-button":"Input-test-module__programmatic-button___3l1_w"}}}]);
//# sourceMappingURL=567-e8faed8adcc6a48e7915.js.map