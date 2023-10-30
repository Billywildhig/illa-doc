"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2764],{9613:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6632:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(8028),r=(n(9496),n(9613));const o={title:"Bar progress",description:"Learn how to use the bar progress component to customize and decorate your app in ILLA Cloud."},l="Bar progress",i={unversionedId:"bar-progress",id:"bar-progress",title:"Bar progress",description:"Learn how to use the bar progress component to customize and decorate your app in ILLA Cloud.",source:"@site/docs/bar-progress.mdx",sourceDirName:".",slug:"/bar-progress",permalink:"/de/bar-progress",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bar-progress.mdx",tags:[],version:"current",frontMatter:{title:"Bar progress",description:"Learn how to use the bar progress component to customize and decorate your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"About ILLA",permalink:"/de/"},next:{title:"Button",permalink:"/de/button"}},p={},s=[{value:"What is Bar progress?",id:"what-is-bar-progress",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],m={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bar-progress"},"Bar progress"),(0,r.kt)("h2",{id:"what-is-bar-progress"},"What is Bar progress?"),(0,r.kt)("p",null,"The Bar Progress component is a visual element that represents the progress or completion of a task or process. It displays a horizontal bar that fills up or shrinks based on the specified progress value."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"the percentage value represents the progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hide value label"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the value label is hidden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caption"),(0,r.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through a dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Styles"),(0,r.kt)("td",{parentName:"tr",align:null},"the stroke width of the bar represents the progress")))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setValue"))),(0,r.kt)("p",null,'To set the text area input value, for example, {{"value1"}}'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValue"))),(0,r.kt)("p",null,"To clear the value of the selected component"),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"color of the bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"position of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strokeWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"width of the bar stroke")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of tooltip text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"percentage value of the progress")))),(0,r.kt)("p",null,"Example: {{barProgress1.value}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"We will demonstrate how to make a form with bar progress at the bottom showing the completion progress of the form."),(0,r.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"form")),' component with the default text "Form" and a "Submit" button to canvas.'),(0,r.kt)("p",null,"Add an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," component, a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," component, and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"**Insert**")," into the form."),(0,r.kt)("p",null,'Label the input component to be "Name", the number input component to be "Age" and the bar progress component to be "Progress".'),(0,r.kt)("p",null,'Set the placeholder of the input component to "Please put your name here" and the default value of the number input to 0 as shown below.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_layout.jpg",alt:"bar_layout"})),(0,r.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," components, we can configure them to set the value in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component to reflect the progress of completion."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  {\n    input1.value && numberInput1.value\n      ? "100"\n      : input1.value || numberInput1.value\n      ? "50"\n      : "0";\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_input_num_config.jpg",alt:"bar_input_num_config"})),(0,r.kt)("p",null,"Note: need to set the event handler as described above to BOTH input and number input components."),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to submit the form if the form is completed (ie bar progress 100%)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"submit"))," method and put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{barProgress1.value == 100}}")," in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Only run when")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_button_submit_config.jpg",alt:"bar_button_submit_config"})),(0,r.kt)("p",null,"Similarly, we can configure the button to show warning when the user is trying to submit an uncompleted form."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"title")),' "Error!" and ',(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description")),' "Please fill out the form before submitting". Choose ',(0,r.kt)("inlineCode",{parentName:"li"},"Error")," for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds), and put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{barProgress1.value<100}}")," for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Only run when"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_button_show_config.jpg",alt:"bar_button_show_config"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_test.gif",alt:"bar_test"})))}u.isMDXComponent=!0}}]);