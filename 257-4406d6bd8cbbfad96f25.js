(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{2902:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(0)),a=o(n(907));function o(t){return t&&t.__esModule?t:{default:t}}var r=function(){return i.default.createElement(a.default,{id:"animatedToggle",closedButtonText:"Custom Text",isAnimated:!0},i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"text-input"},"Text input"),i.default.createElement("input",{id:"text-input",type:"text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),i.default.createElement("select",{id:"select-field"},i.default.createElement("option",null,"Option 01"),i.default.createElement("option",null,"Option 02"))),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"textarea"},"Textarea"),i.default.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("button",{type:"button",id:"button"},"button")))};e.default=r},893:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n(0)),a=s(n(3)),o=s(n(5)),r=s(n(894)),l=s(n(895));function s(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var f=o.default.bind(l.default),d={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},h=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,l=c(t,["isAnimated","isOpen","children"]),s=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:s,easing:"ease-out"},o):a&&o,i.default.createElement("div",u({},l,{className:f("toggle",l.className),"aria-hidden":!a}),e)};h.propTypes=d,h.defaultProps={isAnimated:!1,isOpen:!1};var p=h;e.default=p},894:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),l=u(n(3)),s=u(n(10));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},d=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function h(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var l=o[r];-1===n.indexOf(l)&&(a[l]=t[l])}return a}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.delay,l=o.duration,u=o.height,f=o.onAnimationEnd,d=o.onAnimationStart;if(this.contentElement&&u!==t.height){var h;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=l+r,O=null,_={height:null,overflow:"hidden"},S="auto"===e.height;m(u)?(O=u<0||"0"===u?0:u,_.height=O):g(u)?(O="0%"===u?0:u,_.height=O):(O=b,_.height="auto",_.overflow=null),S&&(_.height=O,O=b);var T=(0,s.default)((c(h={},this.animationStateClasses.animating,!0),c(h,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(h,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(h,this.animationStateClasses.animatingToHeightZero,0===_.height),c(h,this.animationStateClasses.animatingToHeightAuto,"auto"===_.height),c(h,this.animationStateClasses.animatingToHeightSpecific,_.height>0),h)),C=this.getStaticStateClasses(_.height);this.setState({animationStateClasses:T,height:O,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(_.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(_),y(d,{newHeight:_.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:C,shouldUseTransitions:!1}),a.hideContent(_.height),y(f,{newHeight:_.height})}),v)):(y(d,{newHeight:O}),this.timeoutID=setTimeout((function(){_.animationStateClasses=C,_.shouldUseTransitions=!1,a.setState(_),"auto"!==u&&a.hideContent(O),y(f,{newHeight:O})}),v))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,s.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,l=n.children,u=n.className,f=n.contentClassName,p=n.delay,m=n.duration,g=n.easing,y=n.id,b=n.style,v=this.state,O=v.height,_=v.overflow,S=v.animationStateClasses,T=v.shouldUseTransitions,C=a({},b,{height:O,overflow:_||b.overflow});T&&o&&(C.transition="height "+m+"ms "+g+" "+p+"ms",b.transition&&(C.transition=b.transition+", "+C.transition),C.WebkitTransition=C.transition);var w={};i&&(w.transition="opacity "+m+"ms "+g+" "+p+"ms",w.WebkitTransition=w.transition,0===O&&(w.opacity=0));var E=(0,s.default)((c(t={},S,!0),c(t,u,u),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===O;return r.default.createElement("div",a({},h.apply(void 0,[this.props].concat(d)),{"aria-hidden":j,className:E,id:y,style:C}),r.default.createElement("div",{className:f,style:w,ref:function(t){return e.contentElement=t}},l))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},895:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___3Y29L"}},907:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n(0)),a=c(n(3)),o=c(n(5)),r=c(n(46)),l=c(n(193)),s=c(n(893)),u=c(n(917));function c(t){return t&&t.__esModule?t:{default:t}}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=v(t);if(e){var a=v(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=o.default.bind(u.default),_={children:a.default.node.isRequired,closedButtonText:a.default.string.isRequired,buttonAttrs:a.default.object,icon:a.default.element,isAnimated:a.default.bool,isIconAnimated:a.default.bool,isIconOnly:a.default.bool,isInitiallyOpen:a.default.bool,onClose:a.default.func,onOpen:a.default.func,openedButtonText:a.default.string},S={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:i.default.createElement(l.default,null)},T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(l,t);var e,n,a,o=g(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this,t)).state={isOpen:t.isInitiallyOpen},e.handleOnClick=e.handleOnClick.bind(b(e)),e}return e=l,(n=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),a=t.icon,o=(t.isAnimated,t.isIconAnimated),l=t.isIconOnly,u=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),c=h(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),f=u||n,p=this.state.isOpen?f:n,m=l?n:p,g=O(["button",{"is-open":this.state.isOpen},{"is-icon-animated":o},c.className]),y=i.default.createElement(r.default,d({},e,{isIconOnly:l,icon:i.default.createElement("span",{className:O("icon")},a),"aria-expanded":this.state.isOpen,text:m,onClick:this.handleOnClick}));return i.default.createElement("div",d({},c,{className:g}),y,i.default.createElement(s.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&p(e.prototype,n),a&&p(e,a),l}(i.default.Component);T.propTypes=_,T.defaultProps=S;var C=T;e.default=C},917:function(t,e,n){t.exports={"toggle-button":"ToggleButton-module__toggle-button___2y-zM",icon:"ToggleButton-module__icon___1dRrW","is-open":"ToggleButton-module__is-open___1WTt4","is-icon-animated":"ToggleButton-module__is-icon-animated___214rn","button-text":"ToggleButton-module__button-text___2GKkq"}}}]);
//# sourceMappingURL=257-4406d6bd8cbbfad96f25.js.map