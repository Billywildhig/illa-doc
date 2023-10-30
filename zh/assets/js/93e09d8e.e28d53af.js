"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[7595],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=c(a),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=g;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(8028),i=(a(9496),a(9613));const l={title:"Page",metaTitle:"Page Function doc | ILLA Cloud",desc:"Build single-page apps and multi-page app on ILLA",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/243?languages=en&filter=basic&value=0",tagCategory:"doc_menu_page_click",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1},o=void 0,r={unversionedId:"page",id:"page",title:"Page",description:"---",source:"@site/docs/page.mdx",sourceDirName:".",slug:"/page",permalink:"/zh/page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/page.mdx",tags:[],version:"current",frontMatter:{title:"Page",metaTitle:"Page Function doc | ILLA Cloud",desc:"Build single-page apps and multi-page app on ILLA",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/243?languages=en&filter=basic&value=0",tagCategory:"doc_menu_page_click",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1},sidebar:"tutorialSidebar",previous:{title:"Number Input",permalink:"/zh/number-input"},next:{title:"PDF",permalink:"/zh/pdf"}},p={},c=[{value:"<h2 hidden>Page</h2>",id:"page",level:2},{value:"Set the layout of the pages",id:"set-the-layout-of-the-pages",level:3},{value:"Add views to a page",id:"add-views-to-a-page",level:3},{value:"Connect menu and pages",id:"connect-menu-and-pages",level:3}],s={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"page"},(0,i.kt)("h2",{hidden:!0},"Page")),(0,i.kt)("p",null,"A multi-page demo built on ILLA: "),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page1.gif",alt:""}),(0,i.kt)("p",null,"A single-page application is an app that can change pages without reloading all components on the page. Most resources(including HTML, CSS and Script) are only loaded once throughout the application's lifecycle, making a single-page application fast."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page2.png",alt:""}),(0,i.kt)("p",null,"In a multi-page application, every change, such as displaying the data or submitting data back to the server requests rendering a new page from the server. The multi-page application has a few levels, which makes the application structure simple and straightforward for users."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page3.png",alt:""}),(0,i.kt)("p",null,"In ILLA Builder, a single-page application can be built by setting the frame of the page and adding views to sections, and a multi-page application can be built by adding multiple pages, and developers can use both of these two design patterns in one application."),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page4.png",alt:""}),(0,i.kt)("h3",{id:"set-the-layout-of-the-pages"},"Set the layout of the pages"),(0,i.kt)("p",null,"Go to the page configuration as the following steps\uff1a"),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page5.png",alt:""}),(0,i.kt)("p",null,"You can use the Preset Layouts, or manually add and delete sections to set the layout. "),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page6.gif",alt:""}),(0,i.kt)("h3",{id:"add-views-to-a-page"},"Add views to a page"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"View path"),": a string spliced after the page URL to access the specified view. After the app is deployed, the complete access address is as follows: ",(0,i.kt)("a",{parentName:"p",href:"https://builder.illacloud.com/%7B%7Bteam_identifier%7D%7D/deploy/app/%7B%7Bapp_id%7D%7D/%7B%7Bpage_name%7D%7D/%7B%7Bview_path%7D%7D"},"https://builder.illacloud.com/{{team_identifier}}/deploy/app/{{app_id}}/{{page_name}}/{{view_path}}")),(0,i.kt)("p",null,"You can also enter the homepage and default view via the following path:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://builder.illacloud.com/%7B%7Bteam_identifier%7D%7D/deploy/app/%7B%7Bapp_id%7D%7D"},"https://builder.illacloud.com/{{team_identifier}}/deploy/app/{{app_id}}"),". "),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page7.png",alt:""}),(0,i.kt)("h3",{id:"connect-menu-and-pages"},"Connect menu and pages"),(0,i.kt)("p",null,"Add event handlers to Menu items \u2192 set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Action")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Set router")," \u2192 select the page and view"),(0,i.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/page8.gif",alt:""}))}u.isMDXComponent=!0}}]);