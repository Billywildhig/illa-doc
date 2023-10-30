"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1642],{9613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1745:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(8028),r=(n(9496),n(9613));const o={title:"Button",description:"Learn how to use the button component in ILLA Cloud."},l="Button",i={unversionedId:"button",id:"button",title:"Button",description:"Learn how to use the button component in ILLA Cloud.",source:"@site/docs/button.mdx",sourceDirName:".",slug:"/button",permalink:"/pl/button",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/button.mdx",tags:[],version:"current",frontMatter:{title:"Button",description:"Learn how to use the button component in ILLA Cloud."}},p={},d=[{value:"What is Button?",id:"what-is-button",level:2},{value:"Properties",id:"properties",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add a Component",id:"step-2-add-a-component",level:4}],s={toc:d},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"button"},"Button"),(0,r.kt)("h2",{id:"what-is-button"},"What is Button?"),(0,r.kt)("p",null,"The Button component allows users to trigger an action or perform a function by clicking on the button. "),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"The text displayed for the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the component should show a loading indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"User can enter component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow users to choose between two different styles for the button: fill or outline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user click this button, perform specific action customized by users.")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the hidden status of button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiddenDynamic"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the hidden dynamic status of button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"loading value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"text value displayed on the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of tooltip text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"variant style of the button (fill or outlined)")))),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to use button to control the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"form"))," component dynamically. "),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"We have created a table named\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"countries")),", including 5 columns:\xa0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"num_code")),",\xa0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"alpha_2_code")),",\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"alpha_3_code")),",\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"en_short_name")),",\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"nationality")),". The countries\u2019 names are what we want to use as options value, which are stored the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"en_short_name"))," column."),(0,r.kt)("p",null,"Then we can create a new action for Supabase from the action list, listing all data in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"countries"))," and named supabasedb1 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select distinct en_short_name as value from "Countries" order by value;\n')),(0,r.kt)("p",null,"This is what we have as output:"),(0,r.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/countries.png",alt:""}),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("h4",{id:"step-2-add-a-component"},"Step 2 Add a Component"),(0,r.kt)("p",null,"First we add the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Form"))," component and label it as 'Survey'. Then we drag a Input component, a select component and a number input component into the form, labeling them as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"Nationality"),",")," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Age"),".")),(0,r.kt)("p",null,"We then map the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"countries"))," values to select component by "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"in mapped mode, set data sources to be ",(0,r.kt)("inlineCode",{parentName:"li"},"{{supabasedb1.data}}")," "),(0,r.kt)("li",{parentName:"ol"},"in mapped option, set value to be ",(0,r.kt)("inlineCode",{parentName:"li"},"{{item.value}}"))),(0,r.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/button1.png",alt:""}),(0,r.kt)("p",null,"Then we can configure the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Submit"))," button to control the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Send"))," method of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Form"))," component. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Submit"))," action. ")),(0,r.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/countries2.png",alt:""}))}u.isMDXComponent=!0}}]);