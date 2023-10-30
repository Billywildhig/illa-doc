"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[6448],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||r;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5806:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(8028),l=(a(9496),a(9613));const r={title:"Date",description:"Learn how to use the date component to add a calendar picker to ILLA app."},o=void 0,i={unversionedId:"date",id:"date",title:"Date",description:"Learn how to use the date component to add a calendar picker to ILLA app.",source:"@site/docs/date.mdx",sourceDirName:".",slug:"/date",permalink:"/es/date",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/date.mdx",tags:[],version:"current",frontMatter:{title:"Date",description:"Learn how to use the date component to add a calendar picker to ILLA app."},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/es/container"},next:{title:"Date Range",permalink:"/es/date-range"}},d={},p=[{value:"What is Date?",id:"what-is-date",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],m={toc:p},u="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-is-date"},"What is Date?"),(0,l.kt)("p",null,"The Date component is a component that allows users to select a date from a calendar interface. The Date component is typically used in forms or data entry interfaces where the user needs to select a specific date."),(0,l.kt)("p",null,"When a Date component is added to the canvas, it displays a calendar interface by default. The user can navigate through the calendar by clicking on the previous or next arrows to move to a different month, or by clicking on a specific date to select it. The selected date will be displayed in the input field."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"Date's available properties. JavaScript may be written to read or alter information about components."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Format"),(0,l.kt)("td",{parentName:"tr",align:null},"A valid date format string. See dayJS.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max date"),(0,l.kt)("td",{parentName:"tr",align:null},"set the maximum date that a user can select from the calendar interface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min date"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the earliest date that a user can select from the calendar interface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following four methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setValue"))),(0,l.kt)("p",null,"To set the input date value, for example, {{'value1'}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValue"))),(0,l.kt)("p",null,"To clear the value of the selected component "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"validate"))),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValidate"))),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user changes the selected date value, perform specific action customized by users.")))),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"the color property of Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customRule"),(0,l.kt)("td",{parentName:"tr",align:null},"the custom rule that user specified")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"the formate of date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayName"),(0,l.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formDataKey"),(0,l.kt)("td",{parentName:"tr",align:null},"the Form Data Key of Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideValidationMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate whether the validation message is hidden")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"label value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,l.kt)("td",{parentName:"tr",align:null},"alignment of switch label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"position of switch label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelFull"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate if the label is full.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxDate"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of maximum date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minDate"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of minimum date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"placeholder value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showClear"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate wether the date will be shown clear")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,l.kt)("td",{parentName:"tr",align:null},"value of tooltip text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,l.kt)("p",null,"Example: {{date1.value}}"),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to date and set to current date with a button. "),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"Let us create a table in REST API called ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"promoteCodes"),",")," including 6 columns:\xa0 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"code")),",\xa0 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"id")),", ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"createdAt")),",\xa0",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"expiredAt")),",\xa0",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"startedAt"),", ",(0,l.kt)("inlineCode",{parentName:"strong"},"updatedAt")),". We will use the updatedAt time for sample use. "),(0,l.kt)("p",null,"Then we can create a new action for REST API from the action list, listing all data in promoteCodes and named restapi1. "),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,l.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,l.kt)("p",null,"Next, we can add a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"date"))," component and a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas. For default value of the date component, we set it up as the last update time of first promote code from the rest api data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{{restapi1.data.promoteCodes[0].updatedAt}}\n")),(0,l.kt)("p",null,'We also labeled the button as "Today" as shown below'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_time0.png",alt:"date_time0"})),(0,l.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the date in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"date"))," component to today's date."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, select the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"date"))," component that you want to update as the target of the event."),(0,l.kt)("li",{parentName:"ol"},"Choose the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as  ",(0,l.kt)("inlineCode",{parentName:"li"},"{{currentUserInfo.updatedAt}}")," ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_confg.png",alt:"date_confg"})),(0,l.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,l.kt)("p",null,'Now that when you click the "today" button, the time should change to today\'s date. As for here, we have 2023-5-6 but it may be different when you are testing it.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_time1.png",alt:"date_time1"})))}s.isMDXComponent=!0}}]);