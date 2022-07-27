"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{7410:function(f,c,a){var g=a(3227),h=a(8361),i=a(5971),j=a(2715),k=a(1193);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=m(a(7294)),l=m(a(630));function m(a){return a&&a.__esModule?a:{default:a}}var n={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(b){var a=b.res,c=b.err;return{statusCode:a&&a.statusCode?a.statusCode:c?c.statusCode:404}}var b=function(b){i(a,b);var c,d,f=(c=a,d=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,b=k(c);if(d){var e=k(this).constructor;a=Reflect.construct(b,arguments,e)}else a=b.apply(this,arguments);return j(this,a)});function a(){return g(this,a),f.apply(this,arguments)}return h(a,[{key:"render",value:function(){var b=this.props,a=b.statusCode,c=b.withDarkMode,d=this.props.title||n[a]||"An unexpected error has occurred";return e.default.createElement("div",{style:o.error},e.default.createElement(l.default,null,e.default.createElement("title",null,a?"".concat(a,": ").concat(d):"Application error: a client-side exception has occurred")),e.default.createElement("div",null,e.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ".concat(void 0===c||c?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),a?e.default.createElement("h1",{className:"next-error-h1",style:o.h1},a):null,e.default.createElement("div",{style:o.desc},e.default.createElement("h2",{style:o.h2},this.props.title||a?d:e.default.createElement(e.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),a}(e.default.Component);b.displayName="ErrorPage",b.getInitialProps=d,b.origGetInitialProps=d;var o={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}};c.default=b},3967:function(e,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var a,f,d=(a=c(7294),a&&a.__esModule?a:{default:a}).default.createContext({});b.AmpStateContext=d},162:function(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.isInAmpMode=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},630:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.defaultHead=l,a.default=void 0;var c,e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=k();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(b(7294)),f=(c=b(822),c&&c.__esModule?c:{default:c}),g=b(3967),h=b(6999),i=b(162);function j(){return(j=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function k(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return k=function(){return a},a}function l(){var b=arguments.length>0&& void 0!==arguments[0]&&arguments[0],a=[e.default.createElement("meta",{charSet:"utf-8"})];return b||a.push(e.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function m(b,a){return"string"==typeof a||"number"==typeof a?b:a.type===e.default.Fragment?b.concat(e.default.Children.toArray(a.props.children).reduce(function(b,a){return"string"==typeof a||"number"==typeof a?b:b.concat(a)},[])):b.concat(a)}b(3523);var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,d,f,g;return a.reduce(m,[]).reverse().concat(l(b.inAmpMode).reverse()).filter((c=new Set,d=new Set,f=new Set,g={},function(a){var e=!0,j=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){j=!0;var k=a.key.slice(a.key.indexOf("$")+1);c.has(k)?e=!1:c.add(k)}switch(a.type){case"title":case"base":d.has(a.type)?e=!1:d.add(a.type);break;case"meta":for(var h=0,m=n.length;h<m;h++){var b=n[h];if(a.props.hasOwnProperty(b)){if("charSet"===b)f.has(b)?e=!1:f.add(b);else{var l=a.props[b],i=g[b]||new Set;("name"!==b||!j)&&i.has(l)?e=!1:(i.add(l),g[b]=i)}}}}return e})).reverse().map(function(a,d){var f=a.key||d;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var c=j({},a.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,e.default.cloneElement(a,c)}return e.default.cloneElement(a,{key:f})})}a.default=function(a){var b=a.children,c=e.useContext(g.AmpStateContext),d=e.useContext(h.HeadManagerContext);return e.default.createElement(f.default,{reduceComponentsToState:o,headManager:d,inAmpMode:i.isInAmpMode(c)},b)},("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),d.exports=a.default)},822:function(e,a,d){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var d,e=a.headManager,i=a.reduceComponentsToState;function f(){if(e&&e.mountedInstances){var c=b.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(i(c,a))}}return c&&(null==e||null==(d=e.mountedInstances)||d.add(a.children),f()),g(function(){var b;return null==e||null==(b=e.mountedInstances)||b.add(a.children),function(){var b;null==e||null==(b=e.mountedInstances)||b.delete(a.children)}}),g(function(){return e&&(e._pendingUpdate=f),function(){e&&(e._pendingUpdate=f)}}),h(function(){return e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),function(){e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)}}),null};var b=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=f();if(b&&b.has(a))return b.get(a);var c={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=g?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(d(7294));function f(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return f=function(){return a},a}var c=!1,g=c?function(){}:b.useLayoutEffect,h=c?function(){}:b.useEffect}}])