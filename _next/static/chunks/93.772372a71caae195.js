"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{48093:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r=t(7297),i=t(85893),o=t(67294),u=t(87799),c=t(8193),a=t(86893),l=t(5434),s=t(26042),d=t(69396),f=t(828),h=t(60155),v=t(69158),p=function(){var n=(0,v.Z)((function(n){return n.togglePerfMode})),e=(0,v.Z)((function(n){return n.zoomPanPinch})),t=(0,f.Z)(o.useState(0),2),r=t[0],i=t[1],u=(0,f.Z)(o.useState({value:"",debounced:""}),2),c=u[0],a=u[1];return o.useEffect((function(){n(!c.value.length);var e=setTimeout((function(){a((function(n){return(0,d.Z)((0,s.Z)({},n),{debounced:c.value})}))}),800);return function(){return clearTimeout(e)}}),[c.value,n]),o.useEffect((function(){if(e){var n,t=e.instance.wrapperComponent,o=(n="span[data-key*='".concat(c.debounced,"' i]"),document.querySelectorAll("".concat(n))),u=o[r]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),t&&u&&u.parentElement){var a=Number(u.getAttribute("data-x")),l=Number(u.getAttribute("data-y")),s=.4*(t.offsetLeft-a)+t.clientWidth/10-u.getBoundingClientRect().width/10,d=.4*(t.offsetLeft-l)+t.clientHeight/10-u.getBoundingClientRect().height/10;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t;null===(t=null===(e=n.parentElement)||void 0===e?void 0:e.closest("foreignObject"))||void 0===t||t.classList.add("searched")})),n[e].classList.add("highlight")}(o,r),null===e||void 0===e||e.setTransform(s,d,.4)}else i(0);return function(){c.value||i(0)}}}),[c.debounced,c.value,r,e]),[c,a,function(){return i((function(n){return n+1}))}]},x=t(19521);function g(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  height: 25px;\n"]);return g=function(){return n},n}function b(){var n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n"]);return b=function(){return n},n}function m(){var n=(0,r.Z)(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return m=function(){return n},n}function Z(){var n=(0,r.Z)(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return Z=function(){return n},n}var j=x.ZP.div(g(),(function(n){return n.theme.BACKGROUND_TERTIARY})),k=x.ZP.form(b()),w=x.ZP.input(m(),(function(n){return n.theme.TEXT_NORMAL})),R=x.ZP.button(Z(),(function(n){return n.theme.INTERACTIVE_NORMAL})),C=function(){var n=(0,f.Z)(p(),3),e=n[0],t=n[1],r=n[2];return(0,i.jsx)(j,{children:(0,i.jsxs)(k,{onSubmit:function(n){n.preventDefault(),r()},children:[(0,i.jsx)(w,{type:"text",value:e.value,onChange:function(n){return t((function(e){return(0,d.Z)((0,s.Z)({},e),{value:n.target.value})}))},placeholder:"Search Node"}),(0,i.jsx)(R,{type:"reset","aria-label":"search",onClick:function(n){n.preventDefault(),t({value:"",debounced:""})},children:e.value?(0,i.jsx)(h.Lp2,{size:18}):(0,i.jsx)(c.RB5,{size:18})})]})})},E=t(52252);function y(){var n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n  box-shadow: 0 1px 0px ",";\n  z-index: 1;\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return y=function(){return n},n}function A(){var n=(0,r.Z)(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n  padding: 6px;\n  border-radius: 3px;\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return A=function(){return n},n}var T=x.ZP.div(y(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),L=x.ZP.button(A(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),N=function(){var n=(0,E.Z)((function(n){return n.setVisible})),e=(0,v.Z)((function(n){return n.fullscreen})),t=(0,v.Z)((function(n){return n.toggleFullscreen})),r=(0,v.Z)((function(n){return n.zoomIn})),o=(0,v.Z)((function(n){return n.zoomOut})),u=(0,v.Z)((function(n){return n.centerView}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(T,{children:[(0,i.jsx)(L,{"aria-label":"fullscreen",onClick:function(){return t(!e)},children:(0,i.jsx)(c.vju,{})}),(0,i.jsx)(C,{}),(0,i.jsx)(L,{"aria-label":"save",onClick:function(){return n("download")(!0)},children:(0,i.jsx)(a._hL,{})}),(0,i.jsx)(L,{"aria-label":"center canvas",onClick:u,children:(0,i.jsx)(l.XIv,{})}),(0,i.jsx)(L,{"aria-label":"zoom out",onClick:o,children:(0,i.jsx)(c.ywL,{})}),(0,i.jsx)(L,{"aria-label":"zoom in",onClick:r,children:(0,i.jsx)(c.Lfi,{})})]})})};function I(){var n=(0,r.Z)(["\n  position: relative;\n  height: 100%;\n"]);return I=function(){return n},n}var _=x.ZP.div(I()),P=function(){return(0,i.jsxs)(_,{children:[(0,i.jsx)(N,{}),(0,i.jsx)(u.GraphCanvas,{})]})}}}]);