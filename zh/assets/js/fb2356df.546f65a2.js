"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[4169],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const o={title:"V 3.6",description:"ILLA Cloud V 3.6 Changelog"},i="V 3.6",l={unversionedId:"3-6",id:"3-6",title:"V 3.6",description:"ILLA Cloud V 3.6 Changelog",source:"@site/docs/3-6.mdx",sourceDirName:".",slug:"/3-6",permalink:"/zh/3-6",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/3-6.mdx",tags:[],version:"current",frontMatter:{title:"V 3.6",description:"ILLA Cloud V 3.6 Changelog"},sidebar:"tutorialSidebar",previous:{title:"ILLA Cloud V 3.7 Changelog",permalink:"/zh/3-7"},next:{title:"V 3.5",permalink:"/zh/3-5"}},u={},c=[{value:"\ud83d\ude80 New features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug fix",id:"-bug-fix",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"v-36"},"V 3.6"),(0,a.kt)("p",null,"2023.12.07"),(0,a.kt)("h2",{id:"-new-features"},"\ud83d\ude80 New features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mock data for your actions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When the API is not ready yet, you can use Mock data for simulation"))),(0,a.kt)("li",{parentName:"ul"},"Create app from an AI Agent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Create app from AI Agent"),", we will automatically set up the interface and data connections between components and the AI Agent. You can then configure the necessary functionalities for your business on top of this foundation."))),(0,a.kt)("li",{parentName:"ul"},"Actions for SQL databases types such as MySQL, PostgreSQL, MSSQL, etc., now support the ability to set either Safe mode or Unsafe mode.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Safe mode: Your SQL can only reference variables in the place of variables, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"where name = '{{input1.value}}'"),". This prevents users from compromising your database by inputting statements like ",(0,a.kt)("inlineCode",{parentName:"li"},"'; drop table;'")," in input1"),(0,a.kt)("li",{parentName:"ul"},"Unsafe mode: When using the unsafe mode, SQL syntax words can also be replaced with variables, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"where {{input1.value}} {{input2.value}} '{{input3.value}}'"),". However, in this case, the database can be compromised by the content entered by the user. It is not recommended for you to use this mode.")))),(0,a.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where the Data Grid component would throw an error in certain cases when switching the primary key.")))}d.isMDXComponent=!0}}]);