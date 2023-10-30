"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[6129],{9613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,r(r({ref:e},s),{},{components:a})):n.createElement(h,r({ref:e},s))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:l,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1192:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const o={title:"Radio button",description:"Display all options on radio buttons and support to select 1 option."},r="Radio button",i={unversionedId:"radio-button",id:"radio-button",title:"Radio button",description:"Display all options on radio buttons and support to select 1 option.",source:"@site/docs/radio-button.mdx",sourceDirName:".",slug:"/radio-button",permalink:"/fr/radio-button",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/radio-button.mdx",tags:[],version:"current",frontMatter:{title:"Radio button",description:"Display all options on radio buttons and support to select 1 option."},sidebar:"tutorialSidebar",previous:{title:"PDF",permalink:"/fr/pdf"},next:{title:"Radio group",permalink:"/fr/radio-group"}},p={},d=[{value:"Properties",id:"properties",level:3},{value:"Manual options",id:"manual-options",level:4},{value:"Mapped options",id:"mapped-options",level:4},{value:"Other properties",id:"other-properties",level:4},{value:"Method",id:"method",level:3},{value:"setValue",id:"setvalue",level:4},{value:"clearValue",id:"clearvalue",level:4},{value:"validate",id:"validate",level:4},{value:"clearValidate",id:"clearvalidate",level:4},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"radio-button"},"Radio button"),(0,l.kt)("p",null,"A radio button is select input component that allows users to select one option from a group of pre-defined options. It appears as a rounded square button, which can be selected or deselected by users. When a radio button is selected, all other radio buttons in the same group are automatically deselected, ensuring that only one option can be selected at a time. Radio buttons are commonly used in forms, questionnaires, and surveys to help users make a single choice from a list of options."),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radio.png",alt:""}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"manual-options"},"Manual options"),(0,l.kt)("p",null,"Add new options or delete options manually and configure the options one by one. The properties of options are as follows: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The text displayed for the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value associated with the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"mapped-options"},"Mapped options"),(0,l.kt)("p",null,"You can also add options from a data source by mapping the label and value properties to the corresponding data fields. You can get options dynamically from the database in this way. At the end of this article, we will demonstrate how to use it through an example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data source"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the data source of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the label of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the value of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to show the clear button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"editor.inspect.setter_tooltip.custom_rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"To select the theme color of the component")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following three methods:"),(0,l.kt)("h4",{id:"setvalue"},"setValue"),(0,l.kt)("p",null,"To set the selected option, for example, {{\u201dvalue1\u201d}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"A string of selected option value.")))),(0,l.kt)("h4",{id:"clearvalue"},"clearValue"),(0,l.kt)("p",null,"To clear the selected options"),(0,l.kt)("h4",{id:"validate"},"validate"),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("h4",{id:"clearvalidate"},"clearValidate"),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("p",null,"We support listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," event of the radio button component. "),(0,l.kt)("p",null,"When the selected option changes, it can trigger a specified action. This means that when a user selects a different option from a group of radio buttons, a particular action can be taken based on the selected option. For example, in a web form, selecting a different option can trigger the display of different form fields or the submission of the form to a different destination. In this way, the option selected by the user can affect the behavior of the software or web application they are using. The ability to trigger specified actions based on user input is an important aspect of interactive software design and can improve the usability and functionality of the software."),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via {{componentName.propertyName}} in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"a string of value of the selected option")))),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to use the mapped mode to dynamically obtain options. "),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"We have created a table named ",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),", including 5 columns: ",(0,l.kt)("inlineCode",{parentName:"p"},"options_en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_jp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_zh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_kr"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),". We stored the option values in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and stored options label in different languages in other columns. "),(0,l.kt)("p",null,"Create an actions to list all data in ",(0,l.kt)("inlineCode",{parentName:"p"},"selection")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql1")),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radio1.png",alt:""}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"select * from selection\n")),(0,l.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the Data sources to ",(0,l.kt)("inlineCode",{parentName:"p"},"{{postgresql1.data}}")," ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the label to change the label based on the language. "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Use {{ item.columnName }} to set the column. "),(0,l.kt)("li",{parentName:"ol"},"Use {{ currentUserInfo.language }} to set the language users use in ILLA.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{{currentUserInfo.language=='ja-JP' ? item.options_jp \n: currentUserInfo.language == 'ko-KR' ? item.options_kr \n: currentUserInfo.language == 'zh-CN' ? item.options_zh \n: item.options_en }}\n")))),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radio2.png",alt:""}))}m.isMDXComponent=!0}}]);