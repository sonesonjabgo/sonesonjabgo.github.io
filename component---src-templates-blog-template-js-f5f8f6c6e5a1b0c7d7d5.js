"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[627],{7175:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(6540),r=a(2900),c=a(392),s=a(6359);var l=function(e){let{post:t}=e;return n.createElement("header",{className:"post-header"},t.emoji&&n.createElement("div",{className:"emoji"},t.emoji),n.createElement("div",{className:"info"},n.createElement("div",{className:"categories"},t.categories.map((e=>n.createElement(s.Link,{className:"category",key:e,to:`/posts/${e}`},e))))),n.createElement("h1",{className:"title"},t.title),n.createElement("div",{className:"info"},n.createElement("div",{className:"author"},"posted by ",n.createElement("strong",null,t.author),",")," ",t.date))};var o=function(e){let{prevPost:t,nextPost:a}=e;return n.createElement("div",{className:"post-navigator"},n.createElement("div",{className:"post-navigator-card-wrapper"},a&&n.createElement(s.Link,{className:"post-card prev",key:a.id,to:a.slug},n.createElement("div",{className:"direction"},"이전 글"),n.createElement("div",{className:"title"},a.title))),n.createElement("div",{className:"post-navigator-card-wrapper"},t&&n.createElement(s.Link,{className:"post-card next",key:t.id,to:t.slug},n.createElement("div",{className:"direction"},"다음 글"),n.createElement("div",{className:"title"},t.title))))},i=a(1740);var m=function(e){let{html:t}=e;return n.createElement("div",{className:"post-content"},n.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}}))},d=a(4603);const u="https://utteranc.es",p=()=>(0,d.q)("isDarkMode")?"photon-dark":"github-light",v=()=>{var e;const t=null===(e=document.querySelector("iframe"))||void 0===e?void 0:e.contentWindow;null==t||t.postMessage({type:"set-theme",theme:p()},u)};var E=function(e){let{repo:t,path:a}=e;const r=(0,n.createRef)(),c=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(!r.current||c.current)return;const e=document.createElement("script"),a={src:`${u}/client.js`,repo:t,branch:"master",theme:p(),label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((t=>{e.setAttribute(t,a[t])})),r.current.appendChild(e),window.addEventListener("theme",v),c.current=!0}),[t,r,a]),n.createElement("div",{className:"utterances",ref:r})};var h=function(e){var t,a;let{data:s}=e;const d=new i.A(s.cur),u=s.prev&&new i.A(s.prev),p=s.next&&new i.A(s.next),{comments:v}=null===(t=s.site)||void 0===t?void 0:t.siteMetadata,h=null==v||null===(a=v.utterances)||void 0===a?void 0:a.repo;return n.createElement(r.A,null,n.createElement(c.A,{title:null==d?void 0:d.title,description:null==d?void 0:d.excerpt}),n.createElement(l,{post:d}),n.createElement(m,{html:d.html}),n.createElement(o,{prevPost:u,nextPost:p}),h&&n.createElement(E,{repo:h,path:d.slug}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-f5f8f6c6e5a1b0c7d7d5.js.map