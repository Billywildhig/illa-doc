"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[349],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(8028),a=(n(9496),n(9613));const i={title:"Divider",description:"Learn how to use the divider component to customize your app in ILLA Cloud."},o="Divider",l={unversionedId:"divider",id:"divider",title:"Divider",description:"Learn how to use the divider component to customize your app in ILLA Cloud.",source:"@site/docs/divider.mdx",sourceDirName:".",slug:"/divider",permalink:"/zh/divider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/divider.mdx",tags:[],version:"current",frontMatter:{title:"Divider",description:"Learn how to use the divider component to customize your app in ILLA Cloud."}},d={},p=[{value:"What is Divider?",id:"what-is-divider",level:2},{value:"Properties",id:"properties",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3}],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"divider"},"Divider"),(0,a.kt)("h2",{id:"what-is-divider"},"What is Divider?"),(0,a.kt)("p",null,"In ILLA Cloud, the divider component is a visual element that helps to separate or divide sections of content within a web application. It is a simple horizontal line or vertical line that can be inserted between different sections or components to improve the visual organization and clarity of the user interface."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"add additional information to the divider component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text align"),(0,a.kt)("td",{parentName:"tr",align:null},"determines the horizontal alignment of the text within the divider component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,a.kt)("td",{parentName:"tr",align:null},"hide the divider component from the user interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text size"),(0,a.kt)("td",{parentName:"tr",align:null},"adjust the font size of the text within the divider component")))),(0,a.kt)("h3",{id:"data"},"Data"),(0,a.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,a.kt)("td",{parentName:"tr",align:null},"defines the color of the text in the component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayName"),(0,a.kt)("td",{parentName:"tr",align:null},"represents the name or label assigned to the component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fs"),(0,a.kt)("td",{parentName:"tr",align:null},"file system (fs) associated with the divider")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hidden"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean value that determines whether the component is visible or hidden")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"the text value")))),(0,a.kt)("p",null,"Example: {{divider1.text}}"),(0,a.kt)("h3",{id:"use-case"},"Use case"),(0,a.kt)("p",null,"You can place it anywhere you want to divide the page into two sections. Here we will show the divider with three different text alignments."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/divider_test.jpg",alt:"divider_test"})))}u.isMDXComponent=!0}}]);