"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[9988],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(8028),r=(n(9496),n(9613));const a={title:"Container",description:"Learn how to use ILLA Container to group reltated components together in a card"},i="Container",c={unversionedId:"container",id:"container",title:"Container",description:"Learn how to use ILLA Container to group reltated components together in a card",source:"@site/docs/container.mdx",sourceDirName:".",slug:"/container",permalink:"/el/container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/container.mdx",tags:[],version:"current",frontMatter:{title:"Container",description:"Learn how to use ILLA Container to group reltated components together in a card"},sidebar:"tutorialSidebar",previous:{title:"Circle progress",permalink:"/el/circle-progress"},next:{title:"Date",permalink:"/el/date"}},l={},s=[{value:"Multiple views",id:"multiple-views",level:3},{value:"Use other components to change views",id:"use-other-components-to-change-views",level:3},{value:"Connect a tab to a container",id:"connect-a-tab-to-a-container",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container"},"Container"),(0,r.kt)("p",null,"You can group related components together in a card using the\xa0Container\xa0component. Containers also support multiple views that allow you to separate content into distinct views that users can switch between."),(0,r.kt)("p",null,"Containers function like any other component. Once added, you can group components within it by pressing D or K and dragging them onto the Container."),(0,r.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/container.png",alt:""}),(0,r.kt)("h3",{id:"multiple-views"},"Multiple views"),(0,r.kt)("p",null,"Containers support multiple views for grouping content. You can set views in\xa0",(0,r.kt)("strong",{parentName:"p"},"Views"),"\xa0section of the\xa0",(0,r.kt)("strong",{parentName:"p"},"Inspect"),"\xa0tab. Only one view is visible at a time and users switch between them by changing the current view of the Container component."),(0,r.kt)("h3",{id:"use-other-components-to-change-views"},"Use other components to change views"),(0,r.kt)("p",null,"You can use other components to control containers by add an event handlers to other components. The following methods are supported:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set current view by key"),(0,r.kt)("li",{parentName:"ol"},"Set current view by index"),(0,r.kt)("li",{parentName:"ol"},"Show the next  (visible)  view"),(0,r.kt)("li",{parentName:"ol"},"Show the previous (visible) view")),(0,r.kt)("h3",{id:"connect-a-tab-to-a-container"},"Connect a tab to a container"),(0,r.kt)("p",null,"You can use a tab component to control a container by switching on ",(0,r.kt)("strong",{parentName:"p"},"Link to a container")," of the\xa0",(0,r.kt)("strong",{parentName:"p"},"Inspect"),"\xa0tab."),(0,r.kt)("p",null,"After linking to a container, labels of tabs will change to the labels of views. You can change views by clicking tabs without event handlers."))}m.isMDXComponent=!0}}]);