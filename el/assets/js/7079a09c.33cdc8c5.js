"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[8760],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(8028),r=(a(9496),a(9613));const o={title:"Upstash",description:"Learn how to connect your Upstash Redis database to ILLA Cloud and create apps that can query, manipulate, and display data"},l="Upstash",i={unversionedId:"upstash",id:"upstash",title:"Upstash",description:"Learn how to connect your Upstash Redis database to ILLA Cloud and create apps that can query, manipulate, and display data",source:"@site/docs/upstash.mdx",sourceDirName:".",slug:"/upstash",permalink:"/el/upstash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/upstash.mdx",tags:[],version:"current",frontMatter:{title:"Upstash",description:"Learn how to connect your Upstash Redis database to ILLA Cloud and create apps that can query, manipulate, and display data"},sidebar:"tutorialSidebar",previous:{title:"Transformer",permalink:"/el/transformer"},next:{title:"\u0395\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5",permalink:"/el/"}},s={},p=[{value:"Set up your Back end on Upstash",id:"set-up-your-back-end-on-upstash",level:3},{value:"Create Upstash in ILLA Cloud",id:"create-upstash-in-illa-cloud",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Upstash",id:"configure-upstash",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Test",id:"step-3-test",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upstash"},"Upstash"),(0,r.kt)("p",null,"Upstash is a cloud-native serverless service with Redis compatible that provides an easy way to integrate Redis functionality into applications. In the context of ILLA Cloud, the Upstash integration allows users to leverage the features and capabilities of Upstash within the ILLA Cloud application."),(0,r.kt)("p",null,"This tutorial outlines the process of creating an Admin Panel using ILLA Builder and Upstash in a few simple steps. ILLA Cloud is a low-code platform for developers that enables the rapid development and deployment of internal tools. It allows for creating pages by dragging and dropping UI components, connecting to any database or API, and writing JavaScript. To learn more about Upstash, visit their website at ",(0,r.kt)("a",{parentName:"p",href:"https://upstash.com/(https://upstash.com/)"},"https://upstash.com/(https://upstash.com/)")," Let's begin!"),(0,r.kt)("h3",{id:"set-up-your-back-end-on-upstash"},"Set up your Back end on Upstash"),(0,r.kt)("p",null,"Create an account on Upstash. You may sign in using your Amazon, Github or Google accounts alternatively."),(0,r.kt)("p",null,"After signing into your account on ",(0,r.kt)("inlineCode",{parentName:"p"},"Upstash"),", click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create database")," button in Redis."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_home.jpg",alt:"up_home"})),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"Upstash")," dashboard, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create database"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_create_db.jpg",alt:"up_create_db"})),(0,r.kt)("p",null,"Note: you can only have ONE database in the free tier."),(0,r.kt)("p",null,"For the database configuration, You can name your database the way you want. Here we name it ",(0,r.kt)("inlineCode",{parentName:"p"},"db1"),". Choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"primary region")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read region")," based on your write and read user locations. Enable ",(0,r.kt)("inlineCode",{parentName:"p"},"TSL/SSL"),". It's optional to enable Eviction."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_db_config.jpg",alt:"up_db_config"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"create"))," button, we now have a database ready to use."),(0,r.kt)("h3",{id:"create-upstash-in-illa-cloud"},"Create Upstash in ILLA Cloud"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign in to your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Upstash"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list_0.jpg",alt:"action_list_0"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready ",(0,r.kt)("inlineCode",{parentName:"p"},"Upstash")," will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_ex_ready.jpg",alt:"up_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign in to your Illa account, create a project in Illa Builder on the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Upstash"))," from the database list. Then, connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to the Upstash database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_config_rev.jpg",alt:"up_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '6379'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL option"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to enable the SSL (recommend to enable)")))),(0,r.kt)("p",null,"In order to fill in the required information, go to the database dashboard page and click on the database we have just created in your Upstash."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_info.jpg",alt:"up_info"})),(0,r.kt)("p",null,"You may copy it by hovering the mouse over the endpoint, password, and port and clicking the copy text icon behind it."),(0,r.kt)("p",null,"In the Upstash integration configuration in ILLA Cloud, put the name you want for ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname"),", given ",(0,r.kt)("inlineCode",{parentName:"p"},"Port")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Port"),", and copy the encrypted ",(0,r.kt)("inlineCode",{parentName:"p"},"Password")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Password"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_config_rev_done.jpg",alt:"up_config_done"})),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created an Upstash resource, we can add the action by selecting Upstash from the action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_resource_list.jpg",alt:"up_resource_list"})),(0,r.kt)("p",null,"Now we have added the Upstash server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/upstash.jpg",alt:"upstash"})),(0,r.kt)("h3",{id:"configure-upstash"},"Configure Upstash"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redis query"),(0,r.kt)("td",{parentName:"tr",align:null},"use query to retrieve and manipulate data stored in your Redis database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get Values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get a value: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"GET"))," command to retrieve the value associated with a specific key. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"GET key")),"."))),(0,r.kt)("li",{parentName:"ol"},"Set Values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set a value: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SET"))," command to set the value of a key. For example ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SET key value")),"."))),(0,r.kt)("li",{parentName:"ol"},"Hash Operations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set field-value pairs in a hash: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"HSET"))," command to set a field-value pair in a hash. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"HSET hashKey field value")),"."),(0,r.kt)("li",{parentName:"ul"},"Get a value from a hash: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"HGET"))," command to retrieve the value of a specific field in a hash. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"HGET hashKey field")),"."))),(0,r.kt)("li",{parentName:"ol"},"List Operations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add an element to a list: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"LPUSH"))," or ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"RPUSH"))," command to add an element to the beginning or end of a list, respectively. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"LPUSH listKey value")),"."),(0,r.kt)("li",{parentName:"ul"},"Retrieve elements from a list: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"LRANGE"))," command to fetch a range of elements from a list. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"LRANGE listKey start end")),"."))),(0,r.kt)("li",{parentName:"ol"},"Set Operations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add elements to a set: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SADD"))," command to add one or more elements to a set. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SADD setKey value1 value2")),"."),(0,r.kt)("li",{parentName:"ul"},"Retrieve elements from a set: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SMEMBERS"))," command to get all the members of a set. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SMEMBERS setKey")),"."))),(0,r.kt)("li",{parentName:"ol"},"Sorted Set Operations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add elements to a sorted set: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZADD"))," command to add elements to a sorted set along with their scores. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZADD sortedSetKey score1 member1 score2 member2")),"."),(0,r.kt)("li",{parentName:"ul"},"Retrieve elements from a sorted set: Use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZRANGE"))," command to fetch a range of elements from a sorted set based on their scores. For example: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ZRANGE sortedSetKey start end")),".")))),(0,r.kt)("p",null,"Note: You can refer to the Redis documentation for a fully comprehensive list of commands and their usage."),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to map the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"**Upstash**")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," component."),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in Upstash called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"employee_profile"),",")," including 4 columns ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"married"),"."),(0,r.kt)("p",null,"Then we can create a new action for Upstash from the action list in ILLA Cloud and name upstash2."),(0,r.kt)("p",null,"To list all data in employee_profile put the code snippet below in the Redis query section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GET employee_profile\n")),(0,r.kt)("p",null,"Since the output data is a list of dictionary pair, we want to transform it into an array. In Transformer, enable it and put down the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const jsonString = data[0].result;\n\n// Parse the JSON string into a JavaScript object\nconst jsonData = JSON.parse(jsonString);\n\n// Access the "employees" property and map it to a new array\nconst mappedArray = jsonData.employees.map((employee) => ({\n  name: employee.name,\n  level: employee.level,\n  age: employee.age,\n  married: employee.married,\n}));\n\nreturn mappedArray;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_code.jpg",alt:"up_code"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_data.jpg",alt:"up_data"})),(0,r.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,r.kt)("p",null,"Next, we can add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"table"))," component to the canvas."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Data Source"))," field in the Inspect page after clicking on the component, put ",(0,r.kt)("inlineCode",{parentName:"p"},"{{upstash2.data}}")," to retrieve the data from upstash."),(0,r.kt)("h4",{id:"step-3-test"},"Step 3 Test"),(0,r.kt)("p",null,"The final look should be as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/up_test.jpg",alt:"up_test"})))}m.isMDXComponent=!0}}]);