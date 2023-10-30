"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[528],{9613:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),c=l,h=m["".concat(p,".").concat(c)]||m[c]||s[c]||r;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9625:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const r={title:"Editable Text",description:"Learn how to use the Editable Text component to create and customize text fields for your app in ILLA Cloud."},i="Editable text",o={unversionedId:"editable-text",id:"editable-text",title:"Editable Text",description:"Learn how to use the Editable Text component to create and customize text fields for your app in ILLA Cloud.",source:"@site/docs/editable-text.mdx",sourceDirName:".",slug:"/editable-text",permalink:"/uk/editable-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editable-text.mdx",tags:[],version:"current",frontMatter:{title:"Editable Text",description:"Learn how to use the Editable Text component to create and customize text fields for your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Divider",permalink:"/uk/divider"},next:{title:"Event calendar",permalink:"/uk/event-calendar"}},p={},d=[{value:"What is Editable Text?",id:"what-is-editable-text",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],u={toc:d},m="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"editable-text"},"Editable text"),(0,l.kt)("h2",{id:"what-is-editable-text"},"What is Editable Text?"),(0,l.kt)("p",null,"Editable text allows users to create and manipulate text within their applications. With this component, users can easily input and edit text directly on the interface, making it ideal for creating dynamic and interactive content."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show character count"),(0,l.kt)("td",{parentName:"tr",align:null},"control whether or not the character count of the input is displayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prefix text"),(0,l.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the left of the input field, often used to provide additional context or instructions to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Suffix text"),(0,l.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the right of the input field, often used to provide additional information or feedback to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"specify a pattern that the input value must match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max length"),(0,l.kt)("td",{parentName:"tr",align:null},"set the maximum number of characters that can be entered into the input field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min Length"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the minimum number of characters that the user must enter into the input field in order for the input to be considered valid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following five methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setValue"))),(0,l.kt)("p",null,'To set the text area input value, for example, {{"value1"}}'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValue"))),(0,l.kt)("p",null,"To clear the value of the selected component"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"focus"))),(0,l.kt)("p",null,"When the focus method is called, the text area input field will be highlighted and ready for the user to start typing without the need for the user to click on the number input field"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"validate"))),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValidate"))),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user changes the input value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user moves the mouse cursor on the input component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blur"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user is done inputting value and quit focusing on component")))),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"user input value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customRule"),(0,l.kt)("td",{parentName:"tr",align:null},"user-defined rule or validation logic that can be applied to the number input component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayName"),(0,l.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"generated or triggered when certain actions or events occur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"label value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,l.kt)("td",{parentName:"tr",align:null},"alignment of input label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"position of input label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of maximum length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minLength"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of minimum length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"placeholder value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefixText"),(0,l.kt)("td",{parentName:"tr",align:null},"value of the text prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffixText"),(0,l.kt)("td",{parentName:"tr",align:null},"value of the text suffix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex"),(0,l.kt)("td",{parentName:"tr",align:null},"apply pattern-based validation to the input text in the text area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showCharacterCount"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate whether the character count of input is displayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,l.kt)("td",{parentName:"tr",align:null},"value of tooltip text")))),(0,l.kt)("p",null,"Example: {{editable_text1.value}}"),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to the editable text with a button."),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"Let us create a table in REST API with columns ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),". The id 1 document is what we want to show in the form component."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_all.jpg",alt:"rest_get_all"})),(0,l.kt)("p",null,"Then we can create a new action for REST API from the action list in the app we want to build, listing all the data in the bucket and named restapi1."),(0,l.kt)("p",null,"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"**Action Type**"),". In URL Parameters, put ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," for key and ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," for value",(0,l.kt)("strong",{parentName:"p"},".")),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_1.jpg",alt:"rest_get_1"})),(0,l.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,l.kt)("p",null,"Next, we can add an ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"editable text"))," component and a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas."),(0,l.kt)("p",null,"We label editable text to be 'Name' and labeled the button as \"Set value\" as shown below"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/edit_layout.jpg",alt:"edit_layout"})),(0,l.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the value in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"editable text"))," component to the data of the document we read from restapi."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"editable text"))," component that you want to update as the target of the event."),(0,l.kt)("li",{parentName:"ol"},"Choose the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as ",(0,l.kt)("inlineCode",{parentName:"li"},'{{restapi1.data[0]["name"]}}'))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/edit_event.jpg",alt:"edit_event_config"})),(0,l.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,l.kt)("p",null,'Now that when you click the "Set value" button, the value should change to the text.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/edit_test.jpg",alt:"edit_test"})))}s.isMDXComponent=!0}}]);