"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[7459],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(8028),r=(n(9496),n(9613));const o={title:"Menu",description:"Learn how to use the menu component to customize your app in ILLA Cloud."},l="Menu",i={unversionedId:"menu",id:"menu",title:"Menu",description:"Learn how to use the menu component to customize your app in ILLA Cloud.",source:"@site/docs/menu.mdx",sourceDirName:".",slug:"/menu",permalink:"/menu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/menu.mdx",tags:[],version:"current",frontMatter:{title:"Menu",description:"Learn how to use the menu component to customize your app in ILLA Cloud."}},p={},s=[{value:"What is Menu?",id:"what-is-menu",level:2},{value:"Properties",id:"properties",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Set the layout of the pages",id:"step-1-set-the-layout-of-the-pages",level:4},{value:"Step 2 Add views to a page",id:"step-2-add-views-to-a-page",level:4},{value:"Step 3 Connect menu and pages",id:"step-3-connect-menu-and-pages",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"menu"},"Menu"),(0,r.kt)("h2",{id:"what-is-menu"},"What is Menu?"),(0,r.kt)("p",null,"Menu component is a user interface element that provides a navigational structure for accessing different features, options, or sections within the ILLA Cloud application. It typically consists of a list of menu items or links that users can interact with to navigate through various pages or perform specific actions."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Menu"),(0,r.kt)("td",{parentName:"tr",align:null},"actual content and options displayed within the menu component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hides the form component from the user's view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Direction"),(0,r.kt)("td",{parentName:"tr",align:null},"the orientation or layout of the menu component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Align"),(0,r.kt)("td",{parentName:"tr",align:null},"the positioning or alignment of the menu component within its container or parent element")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"represents the name or label assigned to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the menu component is visible or hidden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"horizontalAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"controls the horizontal positioning or alignment of the menu component within its container or parent element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"items"),(0,r.kt)("td",{parentName:"tr",align:null},"collection of menu items or options available within the menu component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"how the menu operates or interacts with the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedValues"),(0,r.kt)("td",{parentName:"tr",align:null},"holds the values of the menu items that have been selected or chosen by the user.")))),(0,r.kt)("p",null,"Example: {{menu1.displayName}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"We will demonstrate how to make a form with name and age as input, as well as bar progress to show the completion progress of the form."),(0,r.kt)("h4",{id:"step-1-set-the-layout-of-the-pages"},"Step 1 Set the layout of the pages"),(0,r.kt)("p",null,"Go to the page configuration as the following steps\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/pages.png",alt:"pages"})),(0,r.kt)("p",null,"You can use the Preset Layouts, or manually add and delete sections to set the layout."),(0,r.kt)("h4",{id:"step-2-add-views-to-a-page"},"Step 2 Add views to a page"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"View path")),": a string spliced after the page URL to access the specified view. After the app is deployed, the complete access address is as follows:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://builder.illacloud.com/%7B%7Bteam_identifier%7D%7D/deploy/app/%7B%7Bapp_id%7D%7D/%7B%7Bpage_name%7D%7D/%7B%7Bview_path%7D%7D"},"https://builder.illacloud.com/{{team_identifier}}/deploy/app/{{app_id}}/{{page_name}}/{{view_path}}")),(0,r.kt)("p",null,"You can also enter the homepage and default view via the following path:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://builder.illacloud.com/%7B%7Bteam_identifier%7D%7D/deploy/app/%7B%7Bapp_id%7D%7D"},"https://builder.illacloud.com/{{team_identifier}}/deploy/app/{{app_id}}")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/add_page.png",alt:"add_page"})),(0,r.kt)("h4",{id:"step-3-connect-menu-and-pages"},"Step 3 Connect menu and pages"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Menu"))," component to the top of the page."),(0,r.kt)("p",null,"Add event handlers to Menu items \u2192 set the Action to Set router \u2192 select the page and view"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"menu"))," components, we can configure it to switch between pages and views"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"menu"))," component to open its inspect page."),(0,r.kt)("li",{parentName:"ol"},"Click an item to open its configuration."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Set Router"))," in action, and select the page and the view that you want to route to as the target of the event.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/menu_items.jpg",alt:"menu_items"})),(0,r.kt)("p",null,"We can do the same for other pages and view you want to route to."),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/menu_test.gif",alt:"menu_test"})))}d.isMDXComponent=!0}}]);