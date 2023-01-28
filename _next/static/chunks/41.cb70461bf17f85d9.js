"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{79734:function(n,e,t){t.d(e,{w:function(){return N}});var r=t(7297),i=t(85893),o=t(67294),l=t(8193),a=t(86893),c=t(5434),u=t(60155),s=t(79120);let d=n=>document.querySelectorAll("".concat(n)),h=()=>{let n=document.querySelectorAll("foreignObject.searched, .highlight");null==n||n.forEach(n=>{n.classList.remove("highlight"),n.classList.remove("searched")})},p=(n,e)=>{null==n||n.forEach(n=>{var e,t;null===(e=null===(t=n.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===e||e.classList.add("searched")}),n[e].classList.add("highlight")},f=()=>{let n=(0,s.Z)(n=>n.zoomPanPinch),[e,t]=o.useState(0),[r,i]=o.useState(0),[l,a]=o.useState({value:"",debounced:""}),c=()=>t(n=>n+1);return o.useEffect(()=>{let n=setTimeout(()=>{a(n=>({...n,debounced:l.value}))},800);return()=>clearTimeout(n)},[l.value]),o.useEffect(()=>{if(!n)return;let r=n.instance.wrapperComponent,o=d("span[data-key*='".concat(l.debounced,"' i]")),a=o[e]||null;if(h(),r&&a&&a.parentElement){let t=Number(a.getAttribute("data-x")),l=Number(a.getAttribute("data-y")),c=(r.offsetLeft-t)*.8+r.clientWidth/5-a.getBoundingClientRect().width/5,u=(r.offsetLeft-l)*.8+r.clientHeight/8-a.getBoundingClientRect().height/8;p(o,e),i(o.length),null==n||n.setTransform(c,u,.8)}else t(0),i(0);return()=>{l.value||(t(0),i(0))}},[l.debounced,l,e,n]),[l,a,c,r,e]};var g=t(19521);function x(){let n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  height: 25px;\n"]);return x=function(){return n},n}function b(){let n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n"]);return b=function(){return n},n}function v(){let n=(0,r.Z)(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: ",";\n  }\n"]);return v=function(){return n},n}function m(){let n=(0,r.Z)(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return m=function(){return n},n}function w(){let n=(0,r.Z)(["\n  font-size: 14px;\n  letter-spacing: 2px;\n  padding: 0 6px;\n  opacity: 0.5;\n"]);return w=function(){return n},n}let C=g.ZP.div.withConfig({componentId:"sc-97d7d024-0"})(x(),n=>{let{theme:e}=n;return e.BACKGROUND_TERTIARY}),j=g.ZP.form.withConfig({componentId:"sc-97d7d024-1"})(b()),Z=g.ZP.input.withConfig({componentId:"sc-97d7d024-2"})(v(),n=>{let{theme:e}=n;return e.TEXT_NORMAL},n=>{let{hasInput:e}=n;return e&&"165px"}),k=g.ZP.button.withConfig({componentId:"sc-97d7d024-3"})(m(),n=>{let{theme:e}=n;return e.INTERACTIVE_NORMAL}),I=g.ZP.span.withConfig({componentId:"sc-97d7d024-4"})(w()),R=()=>{let[n,e,t,r,o]=f(),a=n=>{n.preventDefault(),t()},c=n=>{n.preventDefault(),e({value:"",debounced:""})};return(0,i.jsx)(C,{children:(0,i.jsxs)(j,{onSubmit:a,children:[(0,i.jsx)(Z,{type:"text",value:n.value,onChange:n=>e(e=>({...e,value:n.target.value})),placeholder:"Search Node",hasInput:!!n.value.length}),(0,i.jsx)(I,{children:n.value&&"".concat(r,"/").concat(r>0?o+1:"0")}),(0,i.jsx)(k,{type:"reset","aria-label":"search",onClick:c,children:n.value?(0,i.jsx)(u.Lp2,{size:18}):(0,i.jsx)(l.RB5,{size:18})})]})})};var E=t(44502);function y(){let n=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n  box-shadow: 0 1px 0px ",";\n  z-index: 1;\n\n  @media only screen and (max-width: 320px) {\n    display: none;\n  }\n"]);return y=function(){return n},n}function A(){let n=(0,r.Z)(["\n  display: ",";\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n  padding: 6px;\n  border-radius: 3px;\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return A=function(){return n},n}let T=g.ZP.div.withConfig({componentId:"sc-fea8a048-0"})(y(),n=>{let{theme:e}=n;return e.BACKGROUND_PRIMARY},n=>{let{theme:e}=n;return e.SILVER},n=>{let{theme:e}=n;return e.BACKGROUND_TERTIARY}),L=g.ZP.button.withConfig({componentId:"sc-fea8a048-1"})(A(),n=>{let{hide:e}=n;return e?"none":"grid"},n=>{let{theme:e}=n;return e.INTERACTIVE_NORMAL},n=>{let{theme:e}=n;return e.INTERACTIVE_HOVER}),N=n=>{let{isWidget:e=!1}=n,t=(0,E.Z)(n=>n.setVisible),r=(0,s.Z)(n=>n.fullscreen),o=(0,s.Z)(n=>n.toggleFullscreen),u=(0,s.Z)(n=>n.zoomIn),d=(0,s.Z)(n=>n.zoomOut),h=(0,s.Z)(n=>n.centerView),p=()=>o(!r);return(0,i.jsxs)(T,{children:[(0,i.jsx)(L,{"aria-label":"fullscreen",hide:e,onClick:p,children:(0,i.jsx)(l.vju,{})}),(0,i.jsx)(R,{}),(0,i.jsx)(L,{"aria-label":"save",onClick:()=>t("download")(!0),children:(0,i.jsx)(a._hL,{})}),(0,i.jsx)(L,{"aria-label":"center canvas",onClick:h,children:(0,i.jsx)(c.XIv,{})}),(0,i.jsx)(L,{"aria-label":"zoom out",onClick:d,children:(0,i.jsx)(l.ywL,{})}),(0,i.jsx)(L,{"aria-label":"zoom in",onClick:u,children:(0,i.jsx)(l.Lfi,{})})]})}},9720:function(n,e,t){t.r(e);var r=t(7297),i=t(85893);t(67294);var o=t(63251),l=t(79734),a=t(19521);function c(){let n=(0,r.Z)(["\n  position: relative;\n  height: 100%;\n"]);return c=function(){return n},n}let u=a.ZP.div.withConfig({componentId:"sc-ecd6c79f-0"})(c()),s=()=>(0,i.jsxs)(u,{children:[(0,i.jsx)(l.w,{}),(0,i.jsx)(o.GraphCanvas,{})]});e.default=s}}]);