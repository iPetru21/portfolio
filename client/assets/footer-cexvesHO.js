import{r as u,j as n}from"./jsx-runtime-DexIYAB0.js";import{c,T as k}from"./heading-BSFn-TPg.js";import{L as g}from"./components-CIWODhZB.js";import{c as j}from"./config-BytIwQXm.js";const E="_link_1h1qj_2",L={link:E},$=["txt","png","jpg"];function y(s){const o=$.includes(s==null?void 0:s.split(".").pop());return(s==null?void 0:s.includes("://"))||(s==null?void 0:s[0])==="#"||o}const z=u.forwardRef(({rel:s,target:o,children:a,secondary:r,className:d,href:t,...m},x)=>{const i=t==null?void 0:t.includes("://"),p=s||(i?"noreferrer noopener":void 0),_=o||(i?"_blank":void 0),l={className:c(L.link,d),"data-secondary":r,rel:p,href:t,target:_,ref:x,...m};return y(t)?n.jsx("a",{...l,href:t,children:a}):n.jsx(g,{unstable_viewTransition:!0,prefetch:"intent",...l,to:t,children:a})}),N="_footer_gmxrz_2",T="_link_gmxrz_16",V="_date_gmxrz_20",e={footer:N,link:T,date:V},A=({className:s})=>n.jsx("footer",{className:c(e.footer,s),children:n.jsxs(k,{size:"s",align:"center",children:[n.jsx("span",{className:e.date,children:`© ${new Date().getFullYear()} ${j.name}.`}),n.jsx(z,{secondary:!0,className:e.link,href:"/",target:"_self",children:"Portfolio Website"})]})});export{A as F,z as L};
