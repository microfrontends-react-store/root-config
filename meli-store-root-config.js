System.register(["single-spa"],(function(e,t){var r={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},645:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return(0,o(722).s)(1),(()=>{"use strict";o.r(a);var e=o(645);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l="undefined"!=typeof window;function p(e,r){if("object"!==t(r)||Array.isArray(r)||null===r)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(r)?"array":r," but expected a plain object"))}function d(e,r){if("boolean"!=typeof r)throw Error("Invalid ".concat(e,": received ").concat(t(r),", but expected a boolean"))}function f(e,t,r,n){if(!n){var o=Object.keys(t),a=[];o.forEach((function(e){r.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(r.join(", "))))}}function m(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||r&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(r?" non-blank":""," string"))}function h(e,t){if(m(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function v(e,r,n){if(!Array.isArray(r)&&("object"!==t(t(r))||"number"!==r.length))throw Error("Invalid ".concat(e,": received '").concat(r,"', but expected an array"));for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];for(var c=0;c<r.length;c++)n.apply(void 0,[r[c],"".concat(e,"[").concat(c,"]")].concat(a))}function y(e,t){var r;return"/"===(r="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&r.length>1&&(r=r.slice(0,r.length-1)),r}function g(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return e[r];return null}var b=Object.prototype.hasOwnProperty.call(e,"default")?Object.getOwnPropertyDescriptor(e,"default").value.pathToActiveWhen:e.pathToActiveWhen,w="undefined"!=typeof Symbol?Symbol():"@";function E(e,t){if(l)return e.getAttribute(t);var r=g(e.attrs,(function(e){return e.name===t.toLowerCase()}));return r?r.value:null}function N(e,t){return l?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function O(e,t,r){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:E(e,"name")},o=E(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))n.loader=t.loaders[o];else if(l)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=E(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))n.error=t.errors[a];else if(l)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return x(e,n,t),[n]}if("route"===e.nodeName.toLowerCase()){var i={type:"route",routes:[]},s=E(e,"path");s&&(i.path=s),N(e,"default")&&(i.default=!0),N(e,"exact")&&(i.exact=!0),x(e,i,t);for(var u=0;u<e.childNodes.length;u++){var p;(p=i.routes).push.apply(p,c(O(e.childNodes[u],t,r)))}return[i]}if("redirect"===e.nodeName.toLowerCase())return r.redirects[y("/",E(e,"from"))]=y("/",E(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var f;(f=e.routes).push.apply(f,c(O(e.childNodes[d],t,r)))}}return[e]}if(e.childNodes){for(var m={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},h=0;h<e.childNodes.length;h++){var v;(v=m.routes).push.apply(v,c(O(e.childNodes[h],t,r)))}return[m]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function x(e,t,r){for(var n=(E(e,"props")||"").split(","),o=0;o<n.length;o++){var a=n[o].trim();if(0!==a.length)if(t.props||(t.props={}),r.props&&r.props.hasOwnProperty(a))t.props[a]=r.props[a];else{if(l)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=w}}}function L(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function P(e){var t=e.location,r=e.routes,n=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return r.forEach((function(e,r){if("application"===e.type){if(a){var c,s=j(e.name);i[e.name]?c=i[e.name]:document.getElementById(s)?c=document.getElementById(s):(c=document.createElement("div")).id=s,S(c,n,o),o=c}}else if("route"===e.type)o=P({location:t,routes:e.routes,parentContainer:n,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var u=e instanceof Node?e.cloneNode(!1):C(e);e.connectedNode=u}S(e.connectedNode,n,o),e.routes&&P({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function A(e){for(var t=e.applicationName,r=e.location,n=e.routes,o=0;o<n.length;o++){var a=n[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(r)){var i=A({applicationName:t,location:r,routes:a.routes});if(i)return i}}else if(a.routes){var c=A({applicationName:t,location:r,routes:a.routes});if(c)return c}}}function S(e,t,r){var n=r?r.nextSibling:t.firstChild;n!==e&&t.insertBefore(e,n)}function j(e){return"single-spa-application:".concat(e)}function C(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(C(e))})),t}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location;return t["hash"===e.mode?"hash":"pathname"]}function I(e){try{return new URL(e)}catch(r){var t=document.createElement("a");return t.href=e,t}}function T(t){var r=[],n=(0,e.checkActivityFunctions)(t?I(t):location);return(0,e.getAppNames)().forEach((function(e){n.indexOf(e)<0&&r.push(e)})),r}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(i({},e),t)}var D,k,R,H,_=function(e,t){if(e&&e.nodeName||"string"==typeof e){if(l&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),"string"==typeof e){if(!l)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));l&&e.isConnected&&e.parentNode.removeChild(e);var r={routes:[],redirects:{}};E(e,"mode")&&(r.mode=E(e,"mode")),E(e,"base")&&(r.base=E(e,"base")),E(e,"containerEl")&&(r.containerEl=E(e,"containerEl"));for(var n=0;n<e.childNodes.length;n++){var o;(o=r.routes).push.apply(o,c(O(e.childNodes[n],t,r)))}return r}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){p("routesConfig",e);var t,r=e.disableWarnings;if(f("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],r),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(l&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,r){if(r.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(r.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(m("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var n in p("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[n];h("routesConfig.redirects key",n),h("routesConfig.redirects['".concat(n,"']"),o)}var a=l?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";v("routesConfig.routes",e.routes,(function e(t,n,o){var a=o.parentPath,i=o.siblingActiveWhens,c=o.parentActiveWhen;if(p(n,t),"application"===t.type)f(n,t,["type","name","props","loader","error"],r),t.props&&p("".concat(n,".props"),t.props),m("".concat(n,".name"),t.name);else if("route"===t.type){f(n,t,["type","path","routes","props","default","exact"],r),t.hasOwnProperty("exact")&&d("".concat(n,".exact"),t.exact);var s,u=t.hasOwnProperty("path"),l=t.hasOwnProperty("default");if(u)m("".concat(n,".path"),t.path),s=y(a,t.path),t.activeWhen=b(s,t.exact),i.push(t.activeWhen);else{if(!l)throw Error("Invalid ".concat(n,": routes must have either a path or default property."));d("".concat(n,".default"),t.default),s=a,t.activeWhen=function(e,t){return function(r){return t(r)&&!e.some((function(e){return e(r)}))}}(i,c)}if(u&&l&&t.default)throw Error("Invalid ".concat(n,": cannot have both path and set default to true."));t.routes&&v("".concat(n,".routes"),t.routes,e,{parentPath:s,siblingActiveWhens:[],parentActiveWhen:t.activeWhen})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var h in t)"routes"!==h&&"attrs"!==h&&m("".concat(n,"['").concat(h,"']"),t[h],!1);t.routes&&v("".concat(n,".routes"),t.routes,e,{parentPath:a,siblingActiveWhens:i,parentActiveWhen:c})}}),{parentPath:i+e.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}('<single-spa-router>\n    <nav class="topnav" id="single-spa-application:@meli-store/mf-header">\n        \x3c!-- <application\n            name="@meli-store/mf-header"\n            loader="microfrontLoader"\n            error="microfrontError"></application> --\x3e\n    </nav>\n    <main>\n        <route\n            path="/"\n            exact>\n            <application\n                name="@meli-store/mf-products"\n                loader="microfrontLoader"\n                error="microfrontError"></application>\n        </route>\n        <route\n            path="/producto/:productId"\n            exact>\n            <application\n                name="@meli-store/mf-products"\n                loader="microfrontLoader"\n                error="microfrontError"></application>\n        </route>\n        <route path="/carrito">\n            <application\n                name="@meli-store/mf-shopping-car"\n                loader="microfrontLoader"\n                error="microfrontError"></application>\n            <application\n                name="@meli-store/mf-history"\n                loader="microfrontLoader"\n                error="microfrontError"></application>\n        </route>\n        <route path="/login">\n            <application\n                name="@meli-store/mf-login"\n                loader="microfrontLoader"\n                error="microfrontError"></application>\n        </route>\n        <redirect\n            from="/products"\n            to="/"></redirect>\n        <route default>\n            <application name="@single-spa/welcome"></application>\n        </route>\n    </main>\n</single-spa-router>\n',{loaders:{microfrontLoader:"<h1>Loading</h1>"},errors:{microfrontError:"<h1>Failed to load</h1>"}}),B=(k=(D={routes:_,loadApp:function(e){var t=e.name;return System.import(t)}}).routes,R=D.loadApp,function e(t,r,n,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:r,props:M(n,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,M(n,o.props),o.routes):o.routes&&e(t,r,n,o.routes)}))}(H={},(function(){return!0}),{},k.routes),Object.keys(H).map((function(t){var r=H[t];return{name:t,customProps:function(e,t){var n=g(r,(function(e){return e.activeWhen(t)}));return n?n.props:{}},activeWhen:r.map((function(e){return e.activeWhen})),app:function(){var n;l&&(n=g(r,(function(e){return e.activeWhen(window.location)})));var o=R({name:t});return n&&n.loader?function(t,r,n){return Promise.resolve().then((function(){var o,a=j(t),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof r.loader?L(r.loader):r.loader,u=(0,e.mountRootParcel)(c,{name:"application-loader:".concat(t),domElement:i});function l(){return u.unmount().then((function(){o&&o()}))}return Promise.all([u.mountPromise,n]).then((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),2!==r.length);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t)||s(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();r[0];var n=r[1];return l().then((function(){return n}))}),(function(e){return l().then((function(){throw e}))}))}))}(t,n,o):o}}}))),U=function(r){var n=r.routes,o=r.active,a=void 0===o||o,i=!1,c={};if(!n)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(t(n)));var s=n.base.slice(0,n.base.length-1),u={isActive:function(){return i},activate:function(){i||(i=!0,l&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",f),window.addEventListener("single-spa:routing-event",m),(0,e.addErrorHandler)(p),f()))},deactivate:function(){i&&(i=!1,l&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",f),window.removeEventListener("single-spa:routing-event",m),(0,e.removeErrorHandler)(p)))}};return a&&u.activate(),u;function p(t){var r=A({applicationName:t.appOrParcelName,location:window.location,routes:n.routes});if(r&&r.error){var o=document.getElementById(j(r.name)),a="string"==typeof r.error?L(r.error):r.error;c[r.name]=(0,e.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw t}))}function d(r){var o=r.detail,a=o.cancelNavigation,i=o.newUrl,s=W(n,I(i)),u=function(t){var r=n.redirects[t];if(t===s){if(!a)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return a(),setTimeout((function(){(0,e.navigateToUrl)(r)})),{v:void 0}}};for(var l in n.redirects){var p=u(l);if("object"===t(p))return p.v}var d=[];T(i).forEach((function(e){c[e]&&(d.push(c[e].unmount()),delete c[e])})),d.length>0&&(a(),Promise.all(d).then((function(){(0,e.navigateToUrl)(i)})))}function f(){if(0===W(n).indexOf(s)){var t="string"==typeof n.containerEl?document.querySelector(n.containerEl):n.containerEl,r=(0,e.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(j(t)),e}),{});P({location:window.location,routes:n.routes,parentContainer:t,shouldMount:!0,applicationContainers:r})}}function m(e){T(e.detail.newUrl).forEach((function(e){var t=document.getElementById(j(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:_,applications:B});(0,e.registerApplication)({name:"@meli-store/mf-header",app:function(){return System.import("@meli-store/mf-header")},activeWhen:["/"]}),B.forEach(e.registerApplication),U.activate(),(0,e.start)()})(),a})())}}}));
//# sourceMappingURL=meli-store-root-config.js.map