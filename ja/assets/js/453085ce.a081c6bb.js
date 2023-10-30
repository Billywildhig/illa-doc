"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1058],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(8028),o=(n(9496),n(9613));const r={title:"REST API",description:"Learn how to use ILLA Cloud to access and work with REST API data. Build apps, visualize data, and automate workflows with ILLA Cloud."},i="REST API",l={unversionedId:"restapi",id:"restapi",title:"REST API",description:"Learn how to use ILLA Cloud to access and work with REST API data. Build apps, visualize data, and automate workflows with ILLA Cloud.",source:"@site/docs/restapi.mdx",sourceDirName:".",slug:"/restapi",permalink:"/ja/restapi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/restapi.mdx",tags:[],version:"current",frontMatter:{title:"REST API",description:"Learn how to use ILLA Cloud to access and work with REST API data. Build apps, visualize data, and automate workflows with ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/ja/redis"},next:{title:"Snowflake",permalink:"/ja/snowflake"}},s={},p=[{value:"Create REST API",id:"create-rest-api",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure REST API",id:"configure-rest-api",level:3},{value:"GET",id:"get",level:4},{value:"POST",id:"post",level:4},{value:"PUT",id:"put",level:4},{value:"HEAD",id:"head",level:4},{value:"PATCH",id:"patch",level:4},{value:"DELETE",id:"delete",level:4},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"In ILLA Cloud, the REST API functionality empowers developers to interact with external systems, services, and data sources by utilizing the Representational State Transfer (REST) architectural style. With the REST API in ILLA Cloud, developers can seamlessly integrate their low-code applications with other applications, databases, or services."),(0,o.kt)("p",null,"The REST API in ILLA Cloud allows for creating custom endpoints that can handle HTTP requests, such as GET, POST, PUT, and DELETE. This enables developers to perform various operations, including retrieving data, submitting data, updating records, and deleting information."),(0,o.kt)("h3",{id:"create-rest-api"},"Create REST API"),(0,o.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create in Resources")),(0,o.kt)("p",null,"Sign into your Illa account, select ",(0,o.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"REST API"))," from the database list."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,o.kt)("p",null,"Connect to the database with the required parameters described in ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,o.kt)("p",null,"After creating a resource, the ready REST API will display as shown."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_ex_ready.jpg",alt:"rest_ex_ready"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create in Builder")),(0,o.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"REST API"))," from the database list. Then, connect to the database with the required parameters described in ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,o.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,o.kt)("p",null,"Here we need to provide information for connecting to REST API database."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_config.jpg",alt:"rest_config"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Base URL"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL Parameters"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"provide additional information or modify the behavior of API requests")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Headers"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"additional metadata about the API request or response")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cookies"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"small pieces of data that are stored on the client-side and sent with each API request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"verifying the identity of the user or application making the API request")))),(0,o.kt)("h3",{id:"create-actions"},"Create Actions"),(0,o.kt)("p",null,"We have created a REST API resource; we can add the action by selecting REST API from the action list and choosing the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_resource_list.jpg",alt:"rest_resource_list"})),(0,o.kt)("p",null,"Now we have added the REST API server as an action to our building page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest.jpg",alt:"rest"})),(0,o.kt)("h3",{id:"configure-rest-api"},"Configure REST API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,o.kt)("td",{parentName:"tr",align:null},"GET, POST, PUT, HEAD, PATCH, DELETE, OPTIONS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL Parameter"),(0,o.kt)("td",{parentName:"tr",align:null},"provide additional information or modify the behavior of API requests if not specified in connection setting")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Headers"),(0,o.kt)("td",{parentName:"tr",align:null},"additional metadata about the API request or response if not specified in connection setting")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,o.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,o.kt)("h4",{id:"get"},"GET"),(0,o.kt)("p",null,"retrieve or fetch data from a server. When making a GET request, the client specifies the URL of the resource it wants to access, and the server responds with the requested data."),(0,o.kt)("h4",{id:"post"},"POST"),(0,o.kt)("p",null,"create a new resource on the server. It allows clients to submit data to the server to be processed and stored. When sending a POST request, the client includes the data in the body of the request."),(0,o.kt)("h4",{id:"put"},"PUT"),(0,o.kt)("p",null,"updating or replacing an existing resource. It is typically used to modify the state or content of a resource identified by a specific URL."),(0,o.kt)("h4",{id:"head"},"HEAD"),(0,o.kt)("p",null,"similar to the GET method, but with one key difference: the HEAD method retrieves only the headers of the response, without the response body."),(0,o.kt)("h4",{id:"patch"},"PATCH"),(0,o.kt)("p",null,"update a specific resource. It is typically used to make partial modifications to an existing resource without replacing the entire resource."),(0,o.kt)("h4",{id:"delete"},"DELETE"),(0,o.kt)("p",null,"request the removal of a specific resource or data identified by a given URL"),(0,o.kt)("h3",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"We will demonstrate how to auto fill the form information from REST API data."),(0,o.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,o.kt)("p",null,"Let us create a table in REST API with columns ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"age"),". The id 1 document is what we want to show in the form component."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_all.jpg",alt:"rest_get_all"})),(0,o.kt)("p",null,"Then we can create a new action for REST API from the action list in the app we want to build, listing all the data in the bucket and named restapi1."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"**Action Type**"),". In URL Parameters, put ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," for key and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," for value",(0,o.kt)("strong",{parentName:"p"},".")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_1.jpg",alt:"rest_get_1"})),(0,o.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"form")),' component with the default text "Form" and a "Submit" button to canvas.'),(0,o.kt)("p",null,"Add an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"input"))," component, a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"number input"))," component, and a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"**Insert**")," into the form."),(0,o.kt)("p",null,'Label the input component to be "Name", the number input component to be "Age" and the button component to be "Auto Fill".'),(0,o.kt)("p",null,'Set the placeholder of the input component to "Please put your name here" and the default value of the number input to 0 as shown below.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_layout.jpg",alt:"rest_layout"})),(0,o.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,o.kt)("p",null,'For the "Auto Fill" ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," components, we can configure it to set the value in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"input"))," component."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click the "Auto Fill" ',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"input"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as ",(0,o.kt)("inlineCode",{parentName:"li"},'{{restapi1.data[0]["name"]}}'))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_input.jpg",alt:"rest_get_input"})),(0,o.kt)("p",null,'Similarly, for "Auto Fill" ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," components to set value in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"number input"))," component."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"number input"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as ",(0,o.kt)("inlineCode",{parentName:"li"},'{{restapi1.data[0]["age"]}}'))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_get_num.jpg",alt:"rest_get_num"})),(0,o.kt)("p",null,'For the "Submit" ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to submit the form if the form is completed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"submit"))," method")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_submit_config.jpg",alt:"rest_submit_config"})),(0,o.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/rest_test.gif",alt:"rest_test"})))}u.isMDXComponent=!0}}]);