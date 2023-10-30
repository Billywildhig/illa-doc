"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[8401],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(8028),r=(n(9496),n(9613));const l={title:"Event calendar",description:"Learn how to use the event calendar component to customize your app in ILLA Cloud."},o="Event calendar",i={unversionedId:"event-calendar",id:"event-calendar",title:"Event calendar",description:"Learn how to use the event calendar component to customize your app in ILLA Cloud.",source:"@site/docs/event-calendar.mdx",sourceDirName:".",slug:"/event-calendar",permalink:"/es/event-calendar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/event-calendar.mdx",tags:[],version:"current",frontMatter:{title:"Event calendar",description:"Learn how to use the event calendar component to customize your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Editable Text",permalink:"/es/editable-text"},next:{title:"Form",permalink:"/es/form"}},d={},p=[{value:"What is Event calendar?",id:"what-is-event-calendar",level:2},{value:"Properties",id:"properties",level:3},{value:"Manual options",id:"manual-options",level:4},{value:"Mapped options",id:"mapped-options",level:4},{value:"Other properties",id:"other-properties",level:4},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Configure Actions",id:"step-2-configure-actions",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event-calendar"},"Event calendar"),(0,r.kt)("h2",{id:"what-is-event-calendar"},"What is Event calendar?"),(0,r.kt)("p",null,"The Event Calendar component in ILLA Cloud is a powerful tool for organizing and displaying events in a visually appealing and user-friendly manner. It allows users to create, manage, and showcase events with ease, providing features such as date navigation, event categorization, and detailed event information. The Event Calendar component offers customizable layouts, intuitive event creation interfaces, and options for integrating with other systems, making it an essential tool for businesses and organizations to effectively manage and promote their events."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"manual-options"},"Manual options"),(0,r.kt)("p",null,"Add new options or delete options manually and configure the options one by one. The properties of options are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event id"),(0,r.kt)("td",{parentName:"tr",align:null},"uniquely identifies each event in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title"),(0,r.kt)("td",{parentName:"tr",align:null},"title or name of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start"),(0,r.kt)("td",{parentName:"tr",align:null},"start date and time of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End"),(0,r.kt)("td",{parentName:"tr",align:null},"end date and time of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource id"),(0,r.kt)("td",{parentName:"tr",align:null},"identifies the resource or entity associated with the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource title"),(0,r.kt)("td",{parentName:"tr",align:null},"title or name of the resource associated with the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"All day"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the event is an all-day event or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Draggable"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the event can be dragged or moved within the calendar interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resizable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow users to update the event time range and change the time span by dragging the border of an event to lengthen or shorten the time span")))),(0,r.kt)("h4",{id:"mapped-options"},"Mapped options"),(0,r.kt)("p",null,"You can also add options from a data source by mapping the label and value properties to the corresponding data fields. You can get options dynamically from the database in this way. At the end of this article, we will demonstrate how to use it through an example."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data source"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the data source of options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event id"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique ID used to identify the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title"),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start"),(0,r.kt)("td",{parentName:"tr",align:null},"Start time of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End"),(0,r.kt)("td",{parentName:"tr",align:null},"End time of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource id"),(0,r.kt)("td",{parentName:"tr",align:null},"The resource could be a person, a meeting room, etc. You can set a resource id and connect it to the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource title"),(0,r.kt)("td",{parentName:"tr",align:null},"The resource name displayed in the resource view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"All day"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether it's an all-day event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Draggable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow users to update the event time range by dragging to move the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resizable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow users to update the event time range and change the time span by dragging the border of an event to lengthen or shorten the time span")))),(0,r.kt)("h4",{id:"other-properties"},"Other properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default date"),(0,r.kt)("td",{parentName:"tr",align:null},"the default date value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource grid"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to show a resource grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default view"),(0,r.kt)("td",{parentName:"tr",align:null},"The default view when launch the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custome message when disabled dragging"),(0,r.kt)("td",{parentName:"tr",align:null},"After dragging is disabled, the message will display when a user drags the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom message when disabled resizing"),(0,r.kt)("td",{parentName:"tr",align:null},"After resizing is disabled, the message will display when a user resizes the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show current time"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to show the current time line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calendar Background Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the background of the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calendar Text Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Set color of the text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Background Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the background of event card")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Text Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the text color of event card")))),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user changes the event value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Select"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user selects the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drag or click no event area"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user drag or click an area with no event")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the color of the border around the calendar component or the events displayed within it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,r.kt)("td",{parentName:"tr",align:null},"the source of event data for the calendar component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultDate"),(0,r.kt)("td",{parentName:"tr",align:null},"sets the initial date to be displayed when the calendar is loaded or rendered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultView"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the default view or mode in which the calendar is displayed when initially loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"draggable"),(0,r.kt)("td",{parentName:"tr",align:null},"enables or disables the ability to drag and move events within the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},"generated or triggered when certain actions or events occur within the number input component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventBackground"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the background color or styling for the event elements displayed in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventConfigureMode"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the configuration mode for events in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventList"),(0,r.kt)("td",{parentName:"tr",align:null},"the list or collection of events to be displayed in a separate view or panel within the calendar component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventTextColor"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the color of the text or content within the event elements displayed in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the event calendar component is hidden or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manualOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"manual configuration or customization of various options or settings within the event calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mappedOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"mapped or predefined options for the event calendar component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resizable"),(0,r.kt)("td",{parentName:"tr",align:null},"enables or disables the ability to resize events in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceMapList"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the mapping or association between events and resources within the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectEndTime"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the end time or date when selecting or creating a new event in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectEventValue"),(0,r.kt)("td",{parentName:"tr",align:null},"the selected or currently active event value in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectResource"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the resource or entity associated with the selected or focused event in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectStartTime"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the start time or date when selecting or creating a new event in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showCurrentTime"),(0,r.kt)("td",{parentName:"tr",align:null},"determines whether the current time indicator or marker is displayed on the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showResource"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the resource or entity associated with events is displayed or shown in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slotBackground"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the background color or styling for the time slots or cells in the calendar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"titleColor"),(0,r.kt)("td",{parentName:"tr",align:null},"the color of the title or heading displayed for events in the calendar")))),(0,r.kt)("p",null,"Example: {{eventCalendar1.events}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to add new events displayed on event calendar with a button."),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in Supabase called ",(0,r.kt)("inlineCode",{parentName:"p"},"events"),". It has 9 columns: ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource_id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource_title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"all_day"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"draggable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resizable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"start_time"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"end_time")," ."),(0,r.kt)("p",null,"Then we can create a new action for Supabase from the action list, listing all the data with the code snippet below and called ",(0,r.kt)("inlineCode",{parentName:"p"},"supabasedb1.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from events;\n")),(0,r.kt)("p",null,"Change from ",(0,r.kt)("inlineCode",{parentName:"p"},"Run action only when manually triggered")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Run action automatically when inputs change")," in the upper right corner below ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," button."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_data.jpg",alt:"event_data"})),(0,r.kt)("p",null,"In order to add a new event, we also need another action. Choose the same Supabase resource from the action list called ",(0,r.kt)("inlineCode",{parentName:"p"},"supabasedb2"),", and put the code snippet below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO events (id, title, description, start_time, end_time, resource_id, resource_title, all_day, draggable, resizable)\nVALUES ((SELECT MAX(id) + 1 FROM events), '{{input1.value}}', '{{input2.value}}', '{{dateTime1.value}}', '{{dateTime2.value}}', {{numberInput1.value}}, '{{input4.value}}', {{switch1.value}}, {{switch2.value}}, {{switch3.value}});\n")),(0,r.kt)("p",null,"The input, numberInput, dateTime, and switch components are from the modal components. There are more detailed descriptions of those components below."),(0,r.kt)("h4",{id:"step-2-configure-actions"},"Step 2 Configure Actions"),(0,r.kt)("p",null,"For supabasedb2, we want to show a notification when the new event info is successfully added to the database."),(0,r.kt)("p",null,"In the Actions, click ",(0,r.kt)("inlineCode",{parentName:"p"},"supabasedb2"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"General")," page, scroll down to ",(0,r.kt)("inlineCode",{parentName:"p"},"Event handler"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"+ New"))," to add a new event handler."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"title")),' "Success" and ',(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description")),' "Successfully add new event. Choose ',(0,r.kt)("inlineCode",{parentName:"li"},"Success")," for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_action_success.jpg",alt:"event_action_success"})),(0,r.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,r.kt)("p",null,"Next, we can add an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"event calendar"))," component, a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"**modal**")," component to the canvas. Label the button component to ",(0,r.kt)("inlineCode",{parentName:"p"},"Add new event"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_layout.jpg",alt:"event_layout"})),(0,r.kt)("p",null,'In the modal component, we change the text on the upper left corner to "New Event". We then add the ',(0,r.kt)("inlineCode",{parentName:"p"},"Title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," input components, ",(0,r.kt)("inlineCode",{parentName:"p"},"Start time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"End time")," date time components, ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource ID")," number input, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource Title")," input components, ",(0,r.kt)("inlineCode",{parentName:"p"},"All day"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Draggable"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Resizable")," switch components, and label them as needed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_modal_layout.jpg",alt:"event_modal_layout"})),(0,r.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"**event calendar**")," component, we can map the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"supabasedb1")," to display. We first choose ",(0,r.kt)("inlineCode",{parentName:"p"},"mapped")," from options, then we put ",(0,r.kt)("inlineCode",{parentName:"p"},"{{supabasedb1.data}}")," in the Data source and fill out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapped Option")," fields as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_data_source.jpg",alt:"event_data_source"})),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to open the modal when clicked."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"modal"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openModal"))," method")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_add_new_button.jpg",alt:"event_add_new_button"})),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"modal"))," component, we can configure it to refresh the events display in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**event calendar**")," when the modal is closed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"modal"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Trigger action"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"supabasedb"))," component that you want to trigger for ",(0,r.kt)("inlineCode",{parentName:"li"},"Action name"),". In our case, it's the ",(0,r.kt)("inlineCode",{parentName:"li"},"supabasedb1"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_modal.jpg",alt:"event_modal"})),(0,r.kt)("p",null,'For the "Cancel" ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to close the modal if clicked"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"modal"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"closeModal"))," method")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/close_modal.jpg",alt:"close_modal"})),(0,r.kt)("p",null,'For the "Confirm" ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button")),", we want it to insert the new data filled out in the modal into the supabase ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"events"))," table and close modal."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Trigger action"))," for action and choose ",(0,r.kt)("inlineCode",{parentName:"li"},"supabasedb2")," for action name")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_db2.jpg",alt:"event_db2"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"+ New"))," to add a new event handler."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"modal"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"closeModal"))," method")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/close_modal.jpg",alt:"close_modal"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,"Now that we can test it as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/event_test_2.gif",alt:"event_test"})))}c.isMDXComponent=!0}}]);