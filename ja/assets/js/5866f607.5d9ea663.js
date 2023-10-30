"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2603],{9613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2160:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(8028),r=(a(9496),a(9613));const l={title:"Cascader",description:"Learn how to customize and control the Cascader options in ILLA Cloud."},o="Cascader",i={unversionedId:"cascader",id:"cascader",title:"Cascader",description:"Learn how to customize and control the Cascader options in ILLA Cloud.",source:"@site/docs/cascader.mdx",sourceDirName:".",slug:"/cascader",permalink:"/ja/cascader",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cascader.mdx",tags:[],version:"current",frontMatter:{title:"Cascader",description:"Learn how to customize and control the Cascader options in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/ja/button"},next:{title:"Circle progress",permalink:"/ja/circle-progress"}},p={},s=[{value:"What is Cascader?",id:"what-is-cascader",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Transform the data",id:"step-2-transform-the-data",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4}],d={toc:s},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cascader"},"Cascader"),(0,r.kt)("h2",{id:"what-is-cascader"},"What is Cascader?"),(0,r.kt)("p",null,"A cascader is a type of input component that allows users to select hierarchical data, such as a category or subcategory from a dropdown menu. When a user selects an option from the dropdown menu, the cascader will automatically update to show the relevant subcategories or options in a nested dropdown menu."),(0,r.kt)("p",null,'For example, if you have a cascader input component for selecting a product category, the first dropdown menu may show all the available categories, such as "Electronics," "Clothing," and "Books." When a user selects "Electronics," the cascader will update to show the subcategories of electronics, such as "Phones," "Laptops," and "Tablets." This allows users to quickly and easily navigate through hierarchical data and select the option they need.'),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Cascader's available properties. JavaScript may be written to read or alter information about components."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Source"),(0,r.kt)("td",{parentName:"tr",align:null},'Each option must be JSON format and contain two keys, value and label. By using arrays, you can create options at the same level. And child options can be created by using "children" attribute.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caption"),(0,r.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expansion method"),(0,r.kt)("td",{parentName:"tr",align:null},"Set how cascader expands (by clicking or hovering)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setValue"))),(0,r.kt)("p",null,"To set the selected option, for example, {{\u201dvalue1\u201d}}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValue"))),(0,r.kt)("p",null,"To clear the value of the selected component "),(0,r.kt)("p",null,"Example Usage:"),(0,r.kt)("p",null,"Cascader component support listening to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," event of other components using built-in event system. Set it up by following these example steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an event trigger to the component that you want to listen to. For example, if you want to listen to the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"onChange"))," event of a Radio Group component, you would add an event trigger to that Radio Group component."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Cascader"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SetValue"))," action and select the appropriate value for the Cascader component. This will be the value that the Cascader component have and will update when the event is triggered."),(0,r.kt)("li",{parentName:"ol"},"Save the event trigger settings and repeat the process for any other components that you want to listen to.")),(0,r.kt)("p",null,"Once you've set up the event triggers, the Cascader input component will automatically update whenever the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"onChange"))," event is triggered on the other components. This allows you to create dynamic interfaces that respond to user input in real-time, making it easier for users to navigate and interact with your application."),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user changes the selected option value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user moves the mouse cursor on the cascader component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blur"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user is done selecting options and quit from focusing on the cascader component")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceMode"),(0,r.kt)("td",{parentName:"tr",align:null},"the mode of the data source in cascader (default dynamic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie cascader1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandTrigger"),(0,r.kt)("td",{parentName:"tr",align:null},"trigger events (click)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of cascader label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"position of cascader label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"the integer representing width of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder value")))),(0,r.kt)("p",null,"Example: {{cascader1.value","[0]","}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to options in cascader dynamically. "),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in Supabase called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"project"),",")," as well as a subtable called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"therapist"))," which are aligned by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"project_id")),"."),(0,r.kt)("p",null,"Then we can create a new action for Supabase from the action list, listing all data in project and named supabasedb1 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT [project.id](http://project.id/) as project_id, [therapist.name](http://therapist.name/) as therapist_name from therapist join project on therapist.project_id = [project.id](http://project.id/)\n")),(0,r.kt)("h4",{id:"step-2-transform-the-data"},"Step 2 Transform the data"),(0,r.kt)("p",null,"Next, we can ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"enable"))," the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"transformer"))," section under the Select Section. Within the text area, we can capture only the values and labels we need from the data and transform them into cascader-friendly options using JavaScript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const transformedArray = data.reduce((acc, current) => {\n  const existing = acc.find((item) => item.value === current.project_id);\n  if (existing) {\n    const therapist = { value: current.therapist_id, label: current.therapist_name };\n    existing.children.push(therapist);\n  } else {\n    const project = { value: current.project_id, label: current.project_name, children: [] };\n    const therapist = { value: current.therapist_id, label: current.therapist_name };\n    project.children.push(therapist);\n    acc.push(project);\n  }\n  return acc;\n}, []);\n\nreturn transformedArray;\n")),(0,r.kt)("p",null,"The final action should be displayed the same as"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/cascader1.png",alt:"cascader 1"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,r.kt)("p",null,"After dragging a cascader component to the canvas, we can single click to configure its data source to ",(0,r.kt)("inlineCode",{parentName:"p"},"{{supabasedb1.data}}")," "),(0,r.kt)("p",null,"Optional: Here we set a default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"{{['a', '1']}}")," for corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"{{['Psychotherapy'], ['James']}}")," labels."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/cascader0.png",alt:"cascader 2"})))}u.isMDXComponent=!0}}]);