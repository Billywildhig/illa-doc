"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[4118],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),s=r,f=d["".concat(m,".").concat(s)]||d[s]||p[s]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(8028),r=(a(9496),a(9613));const o={title:"Custom domain",description:"You can access your ILLA Cloud team through your own domain name by customizing it."},i=void 0,l={unversionedId:"custom-domain",id:"custom-domain",title:"Custom domain",description:"You can access your ILLA Cloud team through your own domain name by customizing it.",source:"@site/docs/custom-domain.mdx",sourceDirName:".",slug:"/custom-domain",permalink:"/zh/custom-domain",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/custom-domain.mdx",tags:[],version:"current",frontMatter:{title:"Custom domain",description:"You can access your ILLA Cloud team through your own domain name by customizing it."},sidebar:"tutorialSidebar",previous:{title:"Self-hosted deployment",permalink:"/zh/self-hosted-deployment"},next:{title:"AI Agent",permalink:"/zh/ai-agent"}},m={},u=[{value:"Configure Cloudflare proxy",id:"configure-cloudflare-proxy",level:2},{value:"Customize domain in ILLA Cloud",id:"customize-domain-in-illa-cloud",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please access this feature through ILLA Cloud > Settings > Branding")),(0,r.kt)("h2",{id:"configure-cloudflare-proxy"},"Configure Cloudflare proxy"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/branding/cloudflare.jpeg",alt:"cloudflare"})),(0,r.kt)("p",null,"The image above is a page from Cloudflare. The configuration instructions are as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose CNAME.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The prefix of your domain name. For example, if the domain you configured in ILLA Cloud is illa.example.com, the name field is illa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Target"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The CNAME displayed on the domain configuration page of ILLA Cloud may be "cname-https.illa.sh"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Proxy status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn it on")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that if your domain name was not purchased through Cloudflare, you can migrate the NS (Name Server) records to Cloudflare and then proceed with the above configuration.")),(0,r.kt)("h2",{id:"customize-domain-in-illa-cloud"},"Customize domain in ILLA Cloud"),(0,r.kt)("p",null,"In addition to setting up the domain name, you can also customize the Favicon and Title. However, please note that if you haven't set up a domain name or are not accessing the website through your own domain, the Favicon and Title customization may not take effect."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Favicon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Appears next to the title in your browser tab. Recommended size is 32",(0,r.kt)("em",{parentName:"td"},"32, 57"),"57, 72",(0,r.kt)("em",{parentName:"td"},"72, 114"),"114, 144*144")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Limited to 60 characters or less.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Custom domain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A fully qualified domain name, such as illacloud.example.com")))))}p.isMDXComponent=!0}}]);