"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[319],{9613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3986:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(8028),r=(a(9496),a(9613));const l={title:"Statistics",description:"Learn how to use the statistics component to create and customize the statistic value for your app in ILLA Cloud."},o="Statistics",i={unversionedId:"statistics",id:"statistics",title:"Statistics",description:"Learn how to use the statistics component to create and customize the statistic value for your app in ILLA Cloud.",source:"@site/docs/statistics.mdx",sourceDirName:".",slug:"/statistics",permalink:"/pt/statistics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/statistics.mdx",tags:[],version:"current",frontMatter:{title:"Statistics",description:"Learn how to use the statistics component to create and customize the statistic value for your app in ILLA Cloud."}},p={},s=[{value:"What is Statistics?",id:"what-is-statistics",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statistics"},"Statistics"),(0,r.kt)("h2",{id:"what-is-statistics"},"What is Statistics?"),(0,r.kt)("p",null,"The Statistics component in ILLA Cloud is a powerful tool for displaying and analyzing numerical data. It provides a visually appealing and customizable way to showcase key metrics and statistics."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary value"),(0,r.kt)("td",{parentName:"tr",align:null},"the primary value or rating displayed by the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary value"),(0,r.kt)("td",{parentName:"tr",align:null},"an additional rating or value associated with the primary value, providing additional information or context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal place"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the number of decimal places that can be entered in the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show trend sign"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this property displays an arrow or sign indicating the trend or change in the rating value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show thousand separator"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, this property adds a thousand separators (comma or period) to the primary and secondary values for better readability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable trend color"),(0,r.kt)("td",{parentName:"tr",align:null},"change color based on the trend or change in the rating value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the left of the input field, often used to provide additional context or instructions to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Suffix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the right of the input field, often used to provide additional information or feedback to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal place"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the number of decimal places that can be entered in the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show trend sign"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this property displays an arrow or sign indicating the trend or change in the rating value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show thousand separator"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, this property adds a thousand separators (comma or period) to the primary and secondary values for better readability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable trend color"),(0,r.kt)("td",{parentName:"tr",align:null},"change color based on the trend or change in the rating value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the left of the input field, often used to provide additional context or instructions to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Suffix text"),(0,r.kt)("td",{parentName:"tr",align:null},"a short piece of text that appears to the right of the input field, often used to provide additional information or feedback to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,r.kt)("td",{parentName:"tr",align:null},"define custom actions or logic that trigger when the component is interacted with or the rating is changed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of the component, such as left, center, or right.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Positive color"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the color used for positive or high ratings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Negative color"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the color used for negative or low ratings.")))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setPrimaryValue"))),(0,r.kt)("p",null,'To set the primary value, for example, {{"value1"}}'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input primary value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resetPrimaryValue"))),(0,r.kt)("p",null,"To reset the value to the default value of the selected component. If the default value is not specified, clear value."),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user clicks this button, perform specific action customized by users.")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},"generated or triggered when certain actions or events occur within the number input component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"negativeColorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the color scheme used for displaying negative values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"positiveColorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"sets the color scheme for positive values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primaryValue"),(0,r.kt)("td",{parentName:"tr",align:null},"the primary numerical value to be displayed in the statistics component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimalPlace"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the number of decimal places to be shown for both the primary and secondary values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showTrendSign"),(0,r.kt)("td",{parentName:"tr",align:null},"displays a positive or negative trend sign (+ or -) next to the values, indicating the direction of the trend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"textAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"the alignment of the statistics component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"positiveSign"),(0,r.kt)("td",{parentName:"tr",align:null},"sets the symbol to be displayed for positive values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"negativeSign"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the symbol to be shown for negative values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSeparator"),(0,r.kt)("td",{parentName:"tr",align:null},"whether displays a thousand separator (such as a comma) to improve readability of large numbers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefixText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of the prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suffixText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of the suffix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setPrimaryValue"),(0,r.kt)("td",{parentName:"tr",align:null},"enables you to programmatically set or update the primary value of the statistics component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryValue"),(0,r.kt)("td",{parentName:"tr",align:null},"a secondary numerical value that can be displayed alongside the primary value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryDecimalPlace"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the number of decimal places to be shown for the secondary value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryEnableTrendColor"),(0,r.kt)("td",{parentName:"tr",align:null},"whether applies a color scheme to the secondary value based on its trend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryPositiveSign"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the symbol to be displayed for positive secondary values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryNegativeSign"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the symbol to be shown for negative secondary values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryPrefixText"),(0,r.kt)("td",{parentName:"tr",align:null},"add custom text or symbols to appear before the secondary values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryShowSeparator"),(0,r.kt)("td",{parentName:"tr",align:null},"displays a thousand separator for the secondary value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondaryShowTrendSign"),(0,r.kt)("td",{parentName:"tr",align:null},"displays a trend sign (+ or -) for the secondary value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondarySuffixText"),(0,r.kt)("td",{parentName:"tr",align:null},"add custom text or symbols to appear after the secondary values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of tooltip text")))),(0,r.kt)("p",null,"Example: {{statistics1.secondaryValue}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to statistics with a button."),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in Amazon S3. One of the documents is called"),(0,r.kt)("p",null,"'1.txt' with the decimal '1.1111' as its data. This is the value we want to show in number input."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/s3data.jpg",alt:"s3data"})),(0,r.kt)("p",null,"Then we can create a new action for Amazon S3 from the action list, listing all the data in the bucket and named s31."),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Read an object")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"**Action Type**"),". Put ",(0,r.kt)("inlineCode",{parentName:"p"},"1.txt")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"**Object Key"),".","*","*"),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/stat_data.jpg",alt:"stat_data"})),(0,r.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,r.kt)("p",null,"Next, we can add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"statistics"))," component and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas."),(0,r.kt)("p",null,'We set the default primary value of statistics to 0 and labeled the button as "Set value" as shown below'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/stat_layout.jpg",alt:"stat_layout"})),(0,r.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the value in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"statistics"))," component to the data of the document we read from s31 api."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"statistics"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as ",(0,r.kt)("inlineCode",{parentName:"li"},"{{s31.data}}"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/stat_config.jpg",alt:"stat_button_config"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,'Now that when you click the "Set value" button, the value should change to 1.1111.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/stat_test.gif",alt:"stat_test"})))}u.isMDXComponent=!0}}]);