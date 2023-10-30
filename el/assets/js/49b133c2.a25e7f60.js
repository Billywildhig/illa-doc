"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[7871],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=l,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(8028),l=(a(9496),a(9613));const o={title:"Select",description:"Displays all options in dropdown box and supports to select 1 option."},r="Select",i={unversionedId:"select",id:"select",title:"Select",description:"Displays all options in dropdown box and supports to select 1 option.",source:"@site/docs/select.mdx",sourceDirName:".",slug:"/select",permalink:"/el/select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/select.mdx",tags:[],version:"current",frontMatter:{title:"Select",description:"Displays all options in dropdown box and supports to select 1 option."},sidebar:"tutorialSidebar",previous:{title:"Rate",permalink:"/el/rate"},next:{title:"Statistics",permalink:"/el/statistics"}},p={},s=[{value:"Properties",id:"properties",level:3},{value:"Manual options",id:"manual-options",level:4},{value:"Mapped options",id:"mapped-options",level:4},{value:"Other properties",id:"other-properties",level:4},{value:"Method",id:"method",level:3},{value:"setValue",id:"setvalue",level:4},{value:"clearValue",id:"clearvalue",level:4},{value:"validate",id:"validate",level:4},{value:"clearValidate",id:"clearvalidate",level:4},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select"},"Select"),(0,l.kt)("p",null,"A select component is commonly used to present users with a list of options in a dropdown menu format. The user can select only one option from the dropdown list at a time."),(0,l.kt)("p",null,"The dropdown single-select component typically consists of a text label and a dropdown arrow icon, which when clicked or tapped, opens a list of options for the user to choose from. Once the user selects an option, the dropdown menu closes, and the selected option is displayed in the component."),(0,l.kt)("p",null,"This component is often used in forms, surveys, and other data entry scenarios where a user needs to select one option from a predefined set of choices. It offers a compact and intuitive way to present a list of options without taking up too much screen real estate or overwhelming the user with too many options at once."),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/select1.png",alt:""}),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/select2.png",alt:""}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"manual-options"},"Manual options"),(0,l.kt)("p",null,"Add new options or delete options manually and configure the options one by one. The properties of options are as follows: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The text displayed for the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value associated with the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"mapped-options"},"Mapped options"),(0,l.kt)("p",null,"You can also add options from a data source by mapping the label and value properties to the corresponding data fields. You can get options dynamically from the database in this way. At the end of this article, we will demonstrate how to use it through an example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data source"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the data source of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the label of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the value of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to show the clear button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"editor.inspect.setter_tooltip.custom_rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"To select the theme color of the component")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following three methods:"),(0,l.kt)("h4",{id:"setvalue"},"setValue"),(0,l.kt)("p",null,"To set the selected option, for example, {{\u201dvalue1\u201d}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Selected value")))),(0,l.kt)("h4",{id:"clearvalue"},"clearValue"),(0,l.kt)("p",null,"To clear the selected options"),(0,l.kt)("h4",{id:"validate"},"validate"),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("h4",{id:"clearvalidate"},"clearValidate"),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("p",null,"We support listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," event of the select component. "),(0,l.kt)("p",null,"When the selected option changes, it can trigger a specified action. This means that when a user selects a different option from a select component, a particular action can be taken based on the selected option. For example, in a web form, selecting a different option can trigger the display of different form fields or the submission of the form to a different destination. In this way, the option selected by the user can affect the behavior of the software or web application they are using. The ability to trigger specified actions based on user input is an important aspect of interactive software design and can improve the usability and functionality of the software."),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via {{componentName.propertyName}} in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Selected value")))),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to use the mapped mode to dynamically obtain options. "),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"We have created a table named ",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),", including 5 columns: ",(0,l.kt)("inlineCode",{parentName:"p"},"options_en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_jp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_zh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_kr"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),". We stored the option values in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and stored options label in different languages in other columns. "),(0,l.kt)("p",null,"Create an actions to list all data in ",(0,l.kt)("inlineCode",{parentName:"p"},"selection")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql1")),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radio1.png",alt:""}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"select * from selection\n")),(0,l.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the Data sources to ",(0,l.kt)("inlineCode",{parentName:"p"},"{{postgresql1.data}}")," ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the label to change the label based on the language. "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Use {{ item.columnName }} to set the column. "),(0,l.kt)("li",{parentName:"ol"},"Use {{ currentUserInfo.language }} to set the language users use in ILLA.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{{currentUserInfo.language=='ja-JP' ? item.options_jp \n: currentUserInfo.language == 'ko-KR' ? item.options_kr \n: currentUserInfo.language == 'zh-CN' ? item.options_zh \n: item.options_en }}\n")))),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/select3.png",alt:""}))}u.isMDXComponent=!0}}]);