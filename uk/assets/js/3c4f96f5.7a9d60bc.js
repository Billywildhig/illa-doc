"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[7861],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(n),c=l,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||r;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4978:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(8028),l=(n(9496),n(9613));const r={title:"Number Input",description:"Learn how to use the number input component to create and customize number input fields for your app in ILLA Cloud."},o="Number input",i={unversionedId:"number-input",id:"number-input",title:"Number Input",description:"Learn how to use the number input component to create and customize number input fields for your app in ILLA Cloud.",source:"@site/docs/number-input.mdx",sourceDirName:".",slug:"/number-input",permalink:"/uk/number-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/number-input.mdx",tags:[],version:"current",frontMatter:{title:"Number Input",description:"Learn how to use the number input component to create and customize number input fields for your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Multi-select",permalink:"/uk/multi-select"},next:{title:"Page",permalink:"/uk/page"}},p={},u=[{value:"What is Number Input?",id:"what-is-number-input",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],d={toc:u},m="wrapper";function s(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"number-input"},"Number input"),(0,l.kt)("h2",{id:"what-is-number-input"},"What is Number Input?"),(0,l.kt)("p",null,"The number Input component is a user interface element that allows users to enter and edit the number in a form or input field."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal place"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of decimal places that can be entered in the number input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Minimum"),(0,l.kt)("td",{parentName:"tr",align:null},"minimum value that can be entered in the number input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"maximum value that can be entered in the number input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loading"),(0,l.kt)("td",{parentName:"tr",align:null},"maximum value that can be entered in the number input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Prefix text"),(0,l.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the left of the input field, often used to provide additional context or instructions to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Suffix text"),(0,l.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the right of the input field, often used to provide additional information or feedback to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"focus"))),(0,l.kt)("p",null,"When the focus method is called, the number input field will be highlighted and ready for the user to start typing without the need for the user to click on the number input field"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setValue"))),(0,l.kt)("p",null,"To set the number input value, for example, {{\u201dvalue1\u201d}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValue"))),(0,l.kt)("p",null,"To clear the value of the selected component"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"validate"))),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearValidate"))),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user changes the input value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user moves the mouse cursor on the input component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blur"),(0,l.kt)("td",{parentName:"tr",align:null},"When a user is done inputting value and quit from focusing on the component")))),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"user input value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customRule"),(0,l.kt)("td",{parentName:"tr",align:null},"user-defined rule or validation logic that can be applied to the number input component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayName"),(0,l.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"generated or triggered when certain actions or events occur within the number input component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formDataKey"),(0,l.kt)("td",{parentName:"tr",align:null},"the Form Data Key of input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"label value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,l.kt)("td",{parentName:"tr",align:null},"alignment of input label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"position of input label (left or right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of maximum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"the value of minimum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"placeholder value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"value of the prefix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suffix"),(0,l.kt)("td",{parentName:"tr",align:null},"value of the suffix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showCharacterCount"),(0,l.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate whether the character count of input is displayed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,l.kt)("td",{parentName:"tr",align:null},"value of tooltip text")))),(0,l.kt)("p",null,"Example: {{numberInput1.value}}"),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to number input with a button."),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"Let us create a table in Amazon S3. One of the documents is called"),(0,l.kt)("p",null,"'111.txt' with the number '111' as its data. This is the value we want to show in number input."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/s3data.jpg",alt:"s3data"})),(0,l.kt)("p",null,"Then we can create a new action for Amazon S3 from the action list, listing all the data in the bucket and named s31."),(0,l.kt)("p",null,"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"Read an object")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"**Action Type**"),". Put ",(0,l.kt)("inlineCode",{parentName:"p"},"111.txt")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"**Object Key"),".","*","*"),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/s3output.jpg",alt:"s3output"})),(0,l.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,l.kt)("p",null,"Next, we can add a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"number input"))," component and a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas."),(0,l.kt)("p",null,"We set the default value of numberInput to be 1 and labeled the button as 'Set value' as shown below"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/default1.jpg",alt:"default1"})),(0,l.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the value in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"number input"))," component to the data of the document we read from s31 api."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"numberInput1"))," component that you want to update as the target of the event."),(0,l.kt)("li",{parentName:"ol"},"Choose the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as ",(0,l.kt)("inlineCode",{parentName:"li"},"{{s31.data}}"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/number_input_button_config.jpg",alt:"number_input_button_config"})),(0,l.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,l.kt)("p",null,"Now that when you click the 'Set value' button, the value should change to 111."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/number_input_test.jpg",alt:"number_input_test"})))}s.isMDXComponent=!0}}]);