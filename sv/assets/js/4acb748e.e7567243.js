"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[8597],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(8028),a=(n(9496),n(9613));const r={title:"Modal",description:"Learn how to use the modal component to customize your app in ILLA Cloud."},l="Modal",i={unversionedId:"modal",id:"modal",title:"Modal",description:"Learn how to use the modal component to customize your app in ILLA Cloud.",source:"@site/docs/modal.mdx",sourceDirName:".",slug:"/modal",permalink:"/sv/modal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modal.mdx",tags:[],version:"current",frontMatter:{title:"Modal",description:"Learn how to use the modal component to customize your app in ILLA Cloud."}},p={},d=[{value:"What is Modal?",id:"what-is-modal",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modal"},"Modal"),(0,a.kt)("h2",{id:"what-is-modal"},"What is Modal?"),(0,a.kt)("p",null,"In ILLA Cloud, the modal component is a user interface element that is used to display content, information, or actions in a focused and overlayed window. The modal component typically appears on top of the main application screen, temporarily interrupting the user's workflow and drawing their attention to the modal content."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,a.kt)("td",{parentName:"tr",align:null},"detecting and responding to specific user actions or events, such as clicks, keypresses, value changes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Click mask to close modal"),(0,a.kt)("td",{parentName:"tr",align:null},"whether clicking on the background overlay or mask of the modal will close the modal window")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Show header"),(0,a.kt)("td",{parentName:"tr",align:null},"whether the component should display a header or title section")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Show footer"),(0,a.kt)("td",{parentName:"tr",align:null},"whether the component should display a footer section")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Border Color"),(0,a.kt)("td",{parentName:"tr",align:null},"color of the border that surrounds a modal component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Border Radius"),(0,a.kt)("td",{parentName:"tr",align:null},"curvature of the corners of a modal component's border")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Border Width"),(0,a.kt)("td",{parentName:"tr",align:null},"thickness or width of the border surrounding a modal component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Background"),(0,a.kt)("td",{parentName:"tr",align:null},"defines the color or image that fills the content area of a modal component")))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"openModal")),(0,a.kt)("p",null,"open the modal component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"closeModal")),(0,a.kt)("p",null,"close the modal component"),(0,a.kt)("h3",{id:"use-case"},"Use case"),(0,a.kt)("p",null,"We will demonstrate how to make a form with name and age as input, as well as bar progress to show the completion progress of the form."),(0,a.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"button")),' component labeled "Open Modal"'),(0,a.kt)("p",null,"Add a modal component to the canvas."),(0,a.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,a.kt)("p",null,'For the "Open Modal" ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," components, we can configure it to open the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"modal"))," component if clicked."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"modal"))," component that you want to update as the target of the event."),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"openModal"))," method")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/open_modal.jpg",alt:"open_modal"})),(0,a.kt)("p",null,"Click this button to open the modal component and you may put whatever you want in the middle area of the modal."),(0,a.kt)("p",null,'For the "Cancel" ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to close the modal if clicked"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"modal"))," component that you want to update as the target of the event."),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"closeModal"))," method")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/close_modal.jpg",alt:"close_modal"})),(0,a.kt)("p",null,'Similarly, we can configure the "Confirm" button to congrats'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"title")),' "Congrat!" and ',(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"description")),' "Congratulations!". Choose ',(0,a.kt)("inlineCode",{parentName:"li"},"Success")," for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,a.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds)")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/modal_confirm.jpg",alt:"modal_confirm"})),(0,a.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/modal_test.gif",alt:"modal_test"})))}c.isMDXComponent=!0}}]);