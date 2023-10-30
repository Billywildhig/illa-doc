"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[8123],{9613:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=l,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5956:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const r={title:"Table",description:"Learn how to use the table component to customize your app in ILLA Cloud."},i="Table",o={unversionedId:"table",id:"table",title:"Table",description:"Learn how to use the table component to customize your app in ILLA Cloud.",source:"@site/docs/table.mdx",sourceDirName:".",slug:"/table",permalink:"/sv/table",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/table.mdx",tags:[],version:"current",frontMatter:{title:"Table",description:"Learn how to use the table component to customize your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/sv/switch"},next:{title:"Tabs",permalink:"/sv/tabs"}},p={},d=[{value:"What is Table?",id:"what-is-table",level:2},{value:"Properties",id:"properties",level:3},{value:"<strong>Column Properties Overview</strong>",id:"column-properties-overview",level:4},{value:"Column types:",id:"column-types",level:4},{value:"Method",id:"method",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Test",id:"step-3-test",level:4}],u={toc:d},m="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table"},"Table"),(0,l.kt)("h2",{id:"what-is-table"},"What is Table?"),(0,l.kt)("p",null,"The Table component in ILLA Cloud is a powerful feature that allows users to display, organize, and manipulate tabular data within the application. It provides a structured layout with rows and columns, enabling users to view and interact with data in a convenient and structured manner."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data source"),(0,l.kt)("td",{parentName:"tr",align:null},"source of data that populates the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Empty state"),(0,l.kt)("td",{parentName:"tr",align:null},"the content or message displayed when the table has no data to show")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loading"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the Table component is currently in a loading state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Columns"),(0,l.kt)("td",{parentName:"tr",align:null},"structure and configuration of the columns in the table. (See the section about Columns below for more detail)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Row Selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{table.selectedRow","[n]",".columnName}} to access data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cell Selection"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether allow users to select a cell")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Click outside to deselect"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported in the row single selection mode. After enabling it, click an area other than the table to unselect the row.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overflow"),(0,l.kt)("td",{parentName:"tr",align:null},"how the table handles content that exceeds the available space within the table's container (pagination or scroll)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable server side pagination"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable server pagination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of rows to be displayed per page when server-side pagination is enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Refresh"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the refresh icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Download"),(0,l.kt)("td",{parentName:"tr",align:null},"Show download button in toolbar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Download raw data"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the download raw data icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Show filter button in toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,l.kt)("td",{parentName:"tr",align:null},"detecting and responding to specific user actions or events, such as clicks, keypresses, or form submissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"non-interactive and cannot be modified or triggered by the user.")))),(0,l.kt)("h4",{id:"column-properties-overview"},(0,l.kt)("strong",{parentName:"h4"},"Column Properties Overview")),(0,l.kt)("p",null,"For each column, we can configure its properties to customize the data displayed for each column."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column title"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the name or label of the column, which serves as a header to identify the data it represents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column type"),(0,l.kt)("td",{parentName:"tr",align:null},"defines the type of data that the column contains, including auto, text, date, tag, time, dateTime, number, percent, link, button, button group, boolean, image, iconGroup, Rating, Markdown, currency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mapped Value"),(0,l.kt)("td",{parentName:"tr",align:null},'Use {{ currentRow }} to access the data of current row. For example, to calculate "cost per click" based on columns "cost" and "clickTimes":')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{ currentRow.cost / currentRow.clickTimes }}"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Sorting"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the column allows users to sort the table data based on the values in that specific column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the background of column. Use {{ write a conditional statement to set the color displayed by each cell under different conditions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"controls the horizontal alignment of the content within the column cells")))),(0,l.kt)("h4",{id:"column-types"},"Column types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Auto")),(0,l.kt)("p",null,"a dynamic type that automatically determines the data type based on the values within the column"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Text")),(0,l.kt)("p",null,"represents a column that contains textual data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Date")),(0,l.kt)("p",null,"represents data values that correspond to specific dates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Format"),(0,l.kt)("td",{parentName:"tr",align:null},"accepts various formatting codes or patterns, default is YYYY-MM-DD")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tag")),(0,l.kt)("p",null,"a specialized format for displaying tags or labels associated with data entries"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag label"),(0,l.kt)("td",{parentName:"tr",align:null},'represents the text or label assigned to a tag in the "tag" column')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag color"),(0,l.kt)("td",{parentName:"tr",align:null},'defines the color assigned to the tag in the "tag" column')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Time")),(0,l.kt)("p",null,"accurately represent and manipulate time values within the table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Format"),(0,l.kt)("td",{parentName:"tr",align:null},"the visual representation of the time data within the column, default is HH:mm:ss")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DateTime")),(0,l.kt)("p",null,"stores and represents date and time values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Format"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies how the date and time values should be displayed in the column, default is YYYY-MM-DD HH:mm:ss")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Number")),(0,l.kt)("p",null,"handle numerical data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal places"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of decimal places to display for numeric values in the column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show thousands separator"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the column should display a thousands separator to improve readability and ease of interpretation for large numbers")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Percent")),(0,l.kt)("p",null,"handle percentage values in a concise and visually appealing manner"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal places"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of decimal places to display for percentage values in the column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show thousands separator"),(0,l.kt)("td",{parentName:"tr",align:null},"whether a thousands separator should be included in the displayed percentage values")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Link")),(0,l.kt)("p",null,"include clickable links within a specific column"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Button")),(0,l.kt)("p",null,"include interactive buttons within a specific column"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,l.kt)("td",{parentName:"tr",align:null},"defines the action or event that occurs when the button within the column is clicked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the button within the column is enabled or disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"choose a theme color for the button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Variant"),(0,l.kt)("td",{parentName:"tr",align:null},"visual style or variant of the button (Fill or outline)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"buttonGroup")),(0,l.kt)("p",null,"allows users to create interactive button groups within a column"),(0,l.kt)("p",null,"For each button in the columns, we can configure its properties."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mapped Value"),(0,l.kt)("td",{parentName:"tr",align:null},"associate each button in the button group with a specific value or field from the data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Variant"),(0,l.kt)("td",{parentName:"tr",align:null},"visual style or appearance of the buttons in the button group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,l.kt)("td",{parentName:"tr",align:null},"the action or function triggered when a button in the group is clicked or interacted with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the buttons in the button group are enabled or disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"customize the color or styling of the buttons in the group to align with the overall theme or branding of their application or website")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Boolean")),(0,l.kt)("p",null,"represents data that has two possible states: true or false"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Image")),(0,l.kt)("p",null,"populate a column in the table with image data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scale Type"),(0,l.kt)("td",{parentName:"tr",align:null},"how the image is scaled or resized within the table cell")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IconGroup")),(0,l.kt)("p",null,"a specialized column that allows users to display icons within a group or collection"),(0,l.kt)("p",null,"For each button in the columns, we can configure its properties."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"allows users to select or specify the icon to be displayed within the IconGroup column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"determines the color scheme or theme applied to the icon within the IconGroup column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,l.kt)("td",{parentName:"tr",align:null},"enables users to define an event or action triggered when the icon in the IconGroup column is interacted with by users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"state of the IconGroup column, determining whether it is disabled or enabled for user interaction")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rating")),(0,l.kt)("p",null,"represents ratings or feedback given to items or entities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Markdown")),(0,l.kt)("p",null,"ability to render formatted text using Markdown syntax within the column cells"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Currency")),(0,l.kt)("p",null,"handle and format currency values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal places"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of decimal places to display for the currency values within the column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Currency code"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the code or abbreviation representing the currency used in the column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show thousands separator"),(0,l.kt)("td",{parentName:"tr",align:null},"whether a thousands separator is displayed for large currency values")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"selectPage"))),(0,l.kt)("p",null,"select all the rows on a specific page in a paginated table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End Value"),(0,l.kt)("td",{parentName:"tr",align:null},"the page number or index of the page to be selected")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"selectRow"))),(0,l.kt)("p",null,"select a specific row in the table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default selected row"),(0,l.kt)("td",{parentName:"tr",align:null},"default selected row value, can be the row index, a unique identifier, or any other property that uniquely identifies the row to be selected")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearSelection"))),(0,l.kt)("p",null,"clear the current selection in the table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setFilters"))),(0,l.kt)("p",null,"apply filters to the table data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filters"),(0,l.kt)("td",{parentName:"tr",align:null},"filtering conditions or criteria")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter mode"),(0,l.kt)("td",{parentName:"tr",align:null},"determines how the filters are applied")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ClearFilters"))),(0,l.kt)("p",null,"clears any applied filters in the table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setSort"))),(0,l.kt)("p",null,"set the sorting for the table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Column"),(0,l.kt)("td",{parentName:"tr",align:null},"the column on which the sorting should be applied")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Direction"),(0,l.kt)("td",{parentName:"tr",align:null},'direction of the sort, which can be "ascending" or "descending"')))),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickOutsideToResetSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"whether clicking outside the Table component should reset the current selection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnMapper"),(0,l.kt)("td",{parentName:"tr",align:null},"an object that maps the data fields or keys in the table's data source to the corresponding column names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnNameIndices"),(0,l.kt)("td",{parentName:"tr",align:null},"an object that stores the indices of the column names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"an array that defines the configuration and properties of each column in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnVisibility"),(0,l.kt)("td",{parentName:"tr",align:null},"an object that stores the visibility status of each column in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customColumnIndices"),(0,l.kt)("td",{parentName:"tr",align:null},"an object that stores the indices of the custom columns in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,l.kt)("td",{parentName:"tr",align:null},"the data source for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSourceJS"),(0,l.kt)("td",{parentName:"tr",align:null},"a JavaScript representation of the data source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSourceMode"),(0,l.kt)("td",{parentName:"tr",align:null},"the mode or type of the data source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultSortKey"),(0,l.kt)("td",{parentName:"tr",align:null},"default column key to be used for sorting the table initially")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultSortOrder"),(0,l.kt)("td",{parentName:"tr",align:null},"the default sorting order for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the Table component is disabled or not")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayedData"),(0,l.kt)("td",{parentName:"tr",align:null},"currently displayed data in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayedDataIndices"),(0,l.kt)("td",{parentName:"tr",align:null},"the indices of the displayed rows in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayName"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the name or label of the table component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"download"),(0,l.kt)("td",{parentName:"tr",align:null},"enables the ability to download the table data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"downloadRawData"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to download the raw data or the displayed data of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emptyState"),(0,l.kt)("td",{parentName:"tr",align:null},"the content or message to be displayed when the table is empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableServerSidePagination"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to true, the enableServerSidePagination property enables server-side pagination for the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableSingleCellSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"allows for single-cell selection in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"the currently applied filter or filtering conditions in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hasNextPage"),(0,l.kt)("td",{parentName:"tr",align:null},"whether there is a next page available in the paginated table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the Table component is in a loading state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multiRowSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"enables multi-row selection in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextAfterCursor"),(0,l.kt)("td",{parentName:"tr",align:null},"the cursor or identifier for fetching the next set of data in server-side pagination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextBeforeCursor"),(0,l.kt)("td",{parentName:"tr",align:null},"the cursor for fetching the previous set of data in server-side pagination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"overflow"),(0,l.kt)("td",{parentName:"tr",align:null},"the behavior of the table when the content exceeds the available space")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"the current page index in a paginated table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"determines the number of rows to be displayed per page in a paginated table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paginationOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"the number of pages to be offset in the pagination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh"),(0,l.kt)("td",{parentName:"tr",align:null},"triggers a refresh of the table's data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renamedColumnNames"),(0,l.kt)("td",{parentName:"tr",align:null},"stores the renamed column names in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowEvents"),(0,l.kt)("td",{parentName:"tr",align:null},"allows for custom events or actions to be associated with specific rows in the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalRowCount"),(0,l.kt)("td",{parentName:"tr",align:null},"the total number of rows in the table")))),(0,l.kt)("p",null,"Example: {{table1.disabled}}"),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to map the data from ",(0,l.kt)("inlineCode",{parentName:"p"},"**Upstash**")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"**table**")," component."),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"Let us create a table in Upstash called ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"employee_profile"),",")," including 4 columns ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"married"),"."),(0,l.kt)("p",null,"Then we can create a new action for Upstash from the action list in ILLA Cloud and named upstash2."),(0,l.kt)("p",null,"To list all data in employee_profile put the code snippet below in the Redis query section."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GET employee_profile\n")),(0,l.kt)("p",null,"Since the output data is a list of dictionary pair, we want to transform it into an array. In Transformer, enable it and put down the code below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const jsonString = data[0].result;\n\n// Parse the JSON string into a JavaScript object\nconst jsonData = JSON.parse(jsonString);\n\n// Access the "employees" property and map it to a new array\nconst mappedArray = jsonData.employees.map((employee) => ({\n  name: employee.name,\n  level: employee.level,\n  age: employee.age,\n  married: employee.married,\n}));\n\nreturn mappedArray;\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_code.jpg",alt:"up_code"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_data.jpg",alt:"up_data"})),(0,l.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,l.kt)("p",null,"Next, we can add a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"table"))," component to the canvas."),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Data Source"))," field in the Inspect page after clicking on the component, put ",(0,l.kt)("inlineCode",{parentName:"p"},"{{upstash2.data}}")," to retrieve the data from Upstash."),(0,l.kt)("h4",{id:"step-3-test"},"Step 3 Test"),(0,l.kt)("p",null,"The final look should be as shown."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_test.jpg",alt:"up_test"})))}s.isMDXComponent=!0}}]);