(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{4469:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/widget",function(){return n(65622)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,u=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).suspense&&(delete u.ssr,delete u.loading);u.loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,i(n,u);delete u.ssr}return n(u)},t.noSSR=i;var o=n(6495).Z,u=n(92648).Z,a=(u(n(67294)),u(n(14302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,a=(0,n(92648).Z)(n(67294)),i=n(16319),l=n(67294).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new p(e,o);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=a.default.useContext(i.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var s=null;if(!c){var f=o.webpack?o.webpack():o.modules;f&&d.push((function(e){var t=!0,r=!1,o=void 0;try{for(var u,a=f[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var i=u.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,o=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var h=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,u({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",a.default.forwardRef(h)}(f,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){_(s).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};_(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;t.default=v},65622:function(e,t,n){"use strict";n.r(t);var r=n(828),o=n(7297),u=n(85893),a=n(67294),i=n(5152),l=n.n(i),s=n(11163),d=n(86501),c=n(9193),f=n(95087),p=n(69158),h=n(20178),_=n(19521);function v(){var e=(0,o.Z)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  color: ",";\n  background: ",";\n  padding: 4px 8px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 3px 0 0 0;\n  opacity: 0.8;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n"]);return v=function(){return e},e}var y=l()((function(){return Promise.all([n.e(987),n.e(434),n.e(717),n.e(799),n.e(628)]).then(n.bind(n,87799)).then((function(e){return e.GraphCanvas}))}),{loadableGenerated:{webpack:function(){return[87799]}},ssr:!1}),m=_.ZP.a(v(),(function(e){return e.theme.INTERACTIVE_NORMAL}),(function(e){return e.theme.SILVER_DARK}));t.default=function(){var e=(0,s.useRouter)(),t=e.query,n=e.push,o=e.isReady,i=(0,r.Z)(a.useState("dark"),2),l=i[0],v=i[1],b=(0,h.Z)((function(e){return e.fetchJson})),g=(0,p.Z)((function(e){return e.setGraph}));return a.useEffect((function(){o&&(b(t.json),function(){try{return window.self!==window.top}catch(e){return!0}}()||n("/"))}),[b,o,n,t.json]),a.useEffect((function(){var e=function(e){try{var t,n,r,o,u;if(!(null===(t=e.data)||void 0===t?void 0:t.json))return;"light"!==(null===(n=e.data)||void 0===n||null===(r=n.options)||void 0===r?void 0:r.theme)&&"dark"!==(null===(o=e.data)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.theme)||v(e.data.options.theme),g(e.data.json,e.data.options)}catch(a){console.error(a),d.ZP.error("Invalid JSON!")}};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[g,l]),(0,u.jsxs)(_.f6,{theme:"dark"===l?f.$_:f.Wb,children:[(0,u.jsx)(y,{isWidget:!0}),(0,u.jsx)(m,{href:"".concat(c.v,"/editor"),target:"_blank",rel:"noreferrer",children:"jsoncrack.com"})]})}},5152:function(e,t,n){e.exports=n(90638)}},function(e){e.O(0,[774,888,179],(function(){return t=4469,e(e.s=t);var t}));var t=e.O();_N_E=t}]);