(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2046:function(e,t,r){e.exports={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___oGe5q","orion-fusion-theme":"Textarea-module__orion-fusion-theme___3IGjQ",textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},901:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var o=u(r(0)),n=u(r(3)),a=u(r(10)),i=u(r(5)),l=u(r(7)),s=u(r(2046));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=_(e);if(t){var n=_(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return v(this,r)}}function v(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=i.default.bind(s.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var w={small:2,medium:5,large:10},O={ariaLabel:n.default.string,defaultValue:n.default.string,disabled:n.default.bool,isAutoResizable:n.default.bool,isIncomplete:n.default.bool,isInvalid:n.default.bool,name:n.default.string,onChange:n.default.func,onFocus:n.default.func,onInput:n.default.func,required:n.default.bool,rows:n.default.number,size:n.default.oneOf(["small","medium","large","full"]),value:n.default.string,refCallback:n.default.func,disableResize:n.default.bool},z={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,r,n,i=y(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(g(t)),t.onFocus=t.onFocus.bind(g(t)),t}return t=l,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||w[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,i=r.required,l=(r.onChange,r.onFocus,r.onInput),s=r.isAutoResizable,u=r.isIncomplete,c=r.isInvalid,b=r.value,m=r.defaultValue,y=r.rows,v=r.size,g=r.ariaLabel,_=r.refCallback,O=r.disableResize,z=d(r,["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"]),j=this.context,P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},z),T=(0,a.default)(x("textarea",{"form-error":c},{"form-incomplete":u&&i&&!c},{"full-size":"full"===v},{resizable:s&&!this.isMobileDevice},{"no-resize":O},j.className),P.className);P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=g||P["aria-label"]:g&&(e=g),P["aria-label"]=e,i&&(P["aria-required"]="true");var C=y||w[v];return void 0!==b?P.value=b:P.defaultValue=m,P.placeholder&&(P.placeholder=null),o.default.createElement("textarea",f({},P,{ref:function(e){t.textarea=e,_&&_(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,onInput:l,required:i,rows:C,className:T}))}}])&&b(t.prototype,r),n&&b(t,n),l}(o.default.Component);j.propTypes=O,j.defaultProps=z,j.isTextarea=!0,j.contextType=l.default;var P=j;t.default=P}}]);
//# sourceMappingURL=1-05eac767a743a79f3ca0.js.map