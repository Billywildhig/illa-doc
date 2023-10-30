"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2598],{9613:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1809:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(8028),o=(n(9496),n(9613));const r={title:"Tabs",description:"Learn how to use the tabs component to customize your app in ILLA Cloud."},i="Tabs",l={unversionedId:"tabs",id:"tabs",title:"Tabs",description:"Learn how to use the tabs component to customize your app in ILLA Cloud.",source:"@site/docs/tabs.mdx",sourceDirName:".",slug:"/tabs",permalink:"/zh/tabs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tabs.mdx",tags:[],version:"current",frontMatter:{title:"Tabs",description:"Learn how to use the tabs component to customize your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/zh/table"},next:{title:"Text",permalink:"/zh/text"}},p={},s=[{value:"What is Tabs?",id:"what-is-tabs",level:2},{value:"Properties",id:"properties",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add and configure Components",id:"step-1-add-and-configure-components",level:4},{value:"Step 2 Test",id:"step-2-test",level:4}],m={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tabs"},"Tabs"),(0,o.kt)("h2",{id:"what-is-tabs"},"What is Tabs?"),(0,o.kt)("p",null,"The Tabs component in ILLA Cloud is a versatile feature that allows users to organize and present content in a tabbed layout. It enables the creation of multiple tabs within a single container, allowing users to switch between different sections of content with ease. The Tabs component provides a user-friendly interface for navigating through related information, improving the overall user experience. With customizable styling options and the ability to add various types of content, such as text, images, or embedded components, the Tabs component in ILLA Cloud offers flexibility and enhances the organization and presentation of data."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Link to a container"),(0,o.kt)("td",{parentName:"tr",align:null},"link the Tabs component to a specific container, enabling seamless navigation between tabs and the associated content.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,o.kt)("td",{parentName:"tr",align:null},"detecting and responding to specific user actions or events, such as clicks, keypresses, or value change.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,o.kt)("td",{parentName:"tr",align:null},"disable specific tabs, preventing users from interacting with them")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,o.kt)("td",{parentName:"tr",align:null},"additional information or context about each tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Layout"),(0,o.kt)("td",{parentName:"tr",align:null},"offers different layout options, allowing you to arrange the tabs horizontally or vertically based on your design preferences or the available space.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Align"),(0,o.kt)("td",{parentName:"tr",align:null},"align the Tabs component to different positions within its parent container, such as left, center, or right alignment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"hide specific tabs programmatically.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text Colors"),(0,o.kt)("td",{parentName:"tr",align:null},"customizable text colors, allowing you to style the tab labels with different colors to match your application's design or branding.")))),(0,o.kt)("h3",{id:"data"},"Data"),(0,o.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"align"),(0,o.kt)("td",{parentName:"tr",align:null},"alignment of the tabs within the component, such as left, center, or right alignment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,o.kt)("td",{parentName:"tr",align:null},"defines the color of the text in the component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"currentIndex"),(0,o.kt)("td",{parentName:"tr",align:null},"represents the index of the currently selected tab within the tab list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"currentKey"),(0,o.kt)("td",{parentName:"tr",align:null},"unique identifier or key of the currently selected tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"displayName"),(0,o.kt)("td",{parentName:"tr",align:null},"represents the name or label assigned to the component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean value that determines whether the tabs component is visible or hidden")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"linkWidgetDisplayName"),(0,o.kt)("td",{parentName:"tr",align:null},"display name or label of the link widget associated with a particular tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"navigateContainer"),(0,o.kt)("td",{parentName:"tr",align:null},"container or destination where the tab content should be displayed or navigated to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tabList"),(0,o.kt)("td",{parentName:"tr",align:null},"list of tabs, including their display names, keys, and other relevant information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tabPosition"),(0,o.kt)("td",{parentName:"tr",align:null},"position of the tab strip, such as top, bottom, left, or right position")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,o.kt)("td",{parentName:"tr",align:null},"text displayed as a tooltip when the user hovers over a specific tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"viewList"),(0,o.kt)("td",{parentName:"tr",align:null},"views or content associated with each tab, enabling the rendering of different content based on the selected tab")))),(0,o.kt)("p",null,"Example: {{tabs1.displayName}}"),(0,o.kt)("h3",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"We will demonstrate how to use tabs component combined with a container component to show the three views."),(0,o.kt)("h4",{id:"step-1-add-and-configure-components"},"Step 1 Add and configure Components"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"container"))," component and a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"tabs"))," component. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"inspect")," page of the tabs component, turn ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Link to a Container"))," on and choose the container you want to link with for ",(0,o.kt)("inlineCode",{parentName:"p"},"**Container**"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View 1:")),(0,o.kt)("p",null,"This is the home page, thus we place a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"text")),' component with "Home" on the upper left corner of the container.'),(0,o.kt)("p",null,"Display a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"text")),' component "Hi! Welcome to my personal website" in the middle and a ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button")),' component labeled "Learn more about me" under it.'),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to go to the next view (view2) if clicked."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"container"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"showNextView"))," method.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/tab_view1.jpg",alt:"tab_view1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View 2:")),(0,o.kt)("p",null,"This is the about page, thus we place a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"text")),' component with "About me" on the upper left corner of the container.'),(0,o.kt)("p",null,'Display the "name", "age", and "gender" information with ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"text"))," components and a profile picture of you or anyone you want to use with the ",(0,o.kt)("inlineCode",{parentName:"p"},"**image**")," component."),(0,o.kt)("p",null,"Add a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button")),' component labeled "Make friends with me".'),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to go to the next view (view3) if clicked."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"container"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"showNextView"))," method.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/tab_view2.jpg",alt:"tab_view2"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View 3")),(0,o.kt)("p",null,"This is the form page, visitor can fill out the form with their information to send a friend request to the owner."),(0,o.kt)("p",null,'There is a form component in the middle of the container with input components labeled as "Your name", "Your age", and "Gender".'),(0,o.kt)("p",null,'Change the text of the "submit" button in the bottom right corner to "Invite".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/tab_view3.jpg",alt:"tab_view3"})),(0,o.kt)("p",null,'For the "Invite" ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to submit the information in the form if clicked."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"submit"))," method.")),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"form"))," component, we can configure it to show notification if submit."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"form"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"submit"))," in Event, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"action")),', Put "Submit successfully" for Title, "Friend request sent" for Description, and select ',(0,o.kt)("inlineCode",{parentName:"li"},"Success")," for ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Type")),". We want the notification to show for 2s so put ",(0,o.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the duration.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/tab_form_event.jpg",alt:"tab_form_event"})),(0,o.kt)("h4",{id:"step-2-test"},"Step 2 Test"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/tab_test.gif",alt:"tab_test"})))}c.isMDXComponent=!0}}]);