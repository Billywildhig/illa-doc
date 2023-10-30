"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5846],{9613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,o(o({ref:e},s),{},{components:a})):n.createElement(h,o({ref:e},s))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2051:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const r={title:"Multi-select",description:"A drop-down component that displays all options, supports multiple selections"},o="Multi-select",i={unversionedId:"multi-select",id:"multi-select",title:"Multi-select",description:"A drop-down component that displays all options, supports multiple selections",source:"@site/docs/multi-select.mdx",sourceDirName:".",slug:"/multi-select",permalink:"/da/multi-select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/multi-select.mdx",tags:[],version:"current",frontMatter:{title:"Multi-select",description:"A drop-down component that displays all options, supports multiple selections"},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/da/modal"},next:{title:"Number Input",permalink:"/da/number-input"}},p={},d=[{value:"Multi-select",id:"multi-select-1",level:2},{value:"Properties",id:"properties",level:3},{value:"Manual options",id:"manual-options",level:4},{value:"Mapped options",id:"mapped-options",level:4},{value:"Other properties",id:"other-properties",level:4},{value:"Method",id:"method",level:3},{value:"setValue",id:"setvalue",level:4},{value:"clearValue",id:"clearvalue",level:4},{value:"validate",id:"validate",level:4},{value:"clearValidate",id:"clearvalidate",level:4},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Configure the multi-select component",id:"step-2-configure-the-multi-select-component",level:4},{value:"What\u2019s more",id:"whats-more",level:4}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multi-select"},"Multi-select"),(0,l.kt)("h2",{id:"multi-select-1"},"Multi-select"),(0,l.kt)("p",null,"The multi-select component can be useful in situations where multiple options need to be selected from a list. This can allow for more efficient data entry and filtering. The component can be configured with various properties to achieve different effects and also supports methods and event handlers for more customization."),(0,l.kt)("p",null,"You can add options manually or in bulk from your data source. In this article, we will introduce in detail how to use the multi-select component. "),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"manual-options"},"Manual options"),(0,l.kt)("p",null,"Add new options or delete options manually and configure the options one by one. The properties of options are as follows: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The text displayed for the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value associated with the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"mapped-options"},"Mapped options"),(0,l.kt)("p",null,"You can also add options from a data source by mapping the label and value properties to the corresponding data fields. You can get options dynamically from the database in this way. At the end of this article, we will demonstrate how to use it through an example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data source"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the data source of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the label of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the value of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to show the clear button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Choose at least"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the minimum number of options to choose")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Choose up to"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of options to choose")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"editor.inspect.setter_tooltip.custom_rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Height"),(0,l.kt)("td",{parentName:"tr",align:null},"How to set the height to fit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"To select the theme color of the component")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following three methods:"),(0,l.kt)("h4",{id:"setvalue"},"setValue"),(0,l.kt)("p",null,"To set the selected option, for example, {{","[\u201dvalue1\u201d,\u201dvalue3\u201d\u2026]","}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of selected option values.")))),(0,l.kt)("h4",{id:"clearvalue"},"clearValue"),(0,l.kt)("p",null,"To clear the selected options"),(0,l.kt)("h4",{id:"validate"},"validate"),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("h4",{id:"clearvalidate"},"clearValidate"),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("p",null,"We support listening to the onChange event of the multi-select component."),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The multi-select component has some commonly used data, which can be called via {{componentName.propertyName}} in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"an array of selected option values")))),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to use the mapped mode to dynamically obtain options. "),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"We have created a table named ",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),", including 5 columns: ",(0,l.kt)("inlineCode",{parentName:"p"},"options_en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_jp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_zh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_kr"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),". We stored the option values in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and stored options label in different languages in other columns. "),(0,l.kt)("p",null,"Create an actions to list all data in ",(0,l.kt)("inlineCode",{parentName:"p"},"selection")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql1")),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/multiselect1.png",alt:""}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"select * from selection\n")),(0,l.kt)("h4",{id:"step-2-configure-the-multi-select-component"},"Step 2 Configure the multi-select component"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the Data sources to ",(0,l.kt)("inlineCode",{parentName:"p"},"{{postgresql1.data}}")," ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the label to change the label based on the language. "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Use {{ item.columnName }} to set the column. "),(0,l.kt)("li",{parentName:"ol"},"Use {{ currentUserInfo.language }} to set the language users use in ILLA.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{{currentUserInfo.language=='ja-JP' ? item.options_jp \n: currentUserInfo.language == 'ko-KR' ? item.options_kr \n: currentUserInfo.language == 'zh-CN' ? item.options_zh \n: item.options_en }}\n")))),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/multiselect2.png",alt:""}),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/multiselect3.png",alt:""}),(0,l.kt)("h4",{id:"whats-more"},"What\u2019s more"),(0,l.kt)("p",null,"You can add or delete options by adding or deleting rows to the selection table."))}m.isMDXComponent=!0}}]);