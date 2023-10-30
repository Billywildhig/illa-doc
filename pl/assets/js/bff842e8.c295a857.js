"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[3322],{9613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4125:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(8028),r=(a(9496),a(9613));const l={title:"Firebase",description:"Discover how to connect and interact with Firebase API using ILLA Cloud's integration feature."},i="Firebase",o={unversionedId:"firebase",id:"firebase",title:"Firebase",description:"Discover how to connect and interact with Firebase API using ILLA Cloud's integration feature.",source:"@site/docs/firebase.mdx",sourceDirName:".",slug:"/firebase",permalink:"/pl/firebase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/firebase.mdx",tags:[],version:"current",frontMatter:{title:"Firebase",description:"Discover how to connect and interact with Firebase API using ILLA Cloud's integration feature."},sidebar:"tutorialSidebar",previous:{title:"Elastic Search",permalink:"/pl/elastic-search"},next:{title:"Hugging Face API",permalink:"/pl/hugging-face-api"}},u={},p=[{value:"Create Firebase API",id:"create-firebase-api",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Firebase",id:"configure-firebase",level:3},{value:"Overview",id:"overview",level:4},{value:"Get user by UID",id:"get-user-by-uid",level:4},{value:"Get user by email",id:"get-user-by-email",level:4},{value:"Get user by phone number",id:"get-user-by-phone-number",level:4},{value:"Create a user",id:"create-a-user",level:4},{value:"Update a user",id:"update-a-user",level:4},{value:"Delete a user",id:"delete-a-user",level:4},{value:"List users",id:"list-users",level:4},{value:"Query Firebase",id:"query-firebase",level:4},{value:"Insert Document",id:"insert-document",level:4},{value:"Update Document",id:"update-document",level:4},{value:"Get Document by ID",id:"get-document-by-id",level:4},{value:"Delete a Document",id:"delete-a-document",level:4},{value:"Get Collections",id:"get-collections",level:4},{value:"Query Collection Group",id:"query-collection-group",level:4},{value:"Query database",id:"query-database",level:4},{value:"Set data",id:"set-data",level:4},{value:"Update data",id:"update-data",level:4},{value:"Append data to a list",id:"append-data-to-a-list",level:4}],d={toc:p},s="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firebase"},"Firebase"),(0,r.kt)("p",null,"Firebase is a comprehensive platform provided by Google that offers a wide range of tools and services for developing and managing web and mobile applications. It provides developers with a scalable and secure backend infrastructure, along with a suite of pre-built features and functionalities to accelerate the development process. With the integration of Firebase on ILLA Cloud, developers can enhance their applications with reliable and scalable storage solutions, enabling them to focus on building innovative and data-driven experiences."),(0,r.kt)("h3",{id:"create-firebase-api"},"Create Firebase API"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign in to your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Firebase"))," from the API list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready Firebase will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/firebase_ex_ready.jpg",alt:"firebase_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder on the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Firebase"))," from the database list. Then, connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to Firebase API."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/firebase_config.jpg",alt:"firebase_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firebase Database URL"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"the endpoint or URL where the Firebase Realtime Database is hosted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firestore Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a unique identifier assigned to each Firebase project that uses the Firestore database service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a security credential used for authenticating and accessing Firebase services programmatically")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created a Firebase resource, we can add the action by selecting Firebase from the action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/firebase_resource_list.jpg",alt:"firebase_resource_list"})),(0,r.kt)("p",null,"Now we have added the Firebase server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/firebase.jpg",alt:"firebase"})),(0,r.kt)("h3",{id:"configure-firebase"},"Configure Firebase"),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Firebase Auth"),(0,r.kt)("th",{parentName:"tr",align:null},"Firestore"),(0,r.kt)("th",{parentName:"tr",align:null},"Realtime Database"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Get user by UID"),(0,r.kt)("td",{parentName:"tr",align:null},"Query Firebase,"),(0,r.kt)("td",{parentName:"tr",align:null},"Query Database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Get user by email"),(0,r.kt)("td",{parentName:"tr",align:null},"Insert Document"),(0,r.kt)("td",{parentName:"tr",align:null},"Set data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Get user by phone number"),(0,r.kt)("td",{parentName:"tr",align:null},"Update Document"),(0,r.kt)("td",{parentName:"tr",align:null},"Update data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Create a user"),(0,r.kt)("td",{parentName:"tr",align:null},"Get document by ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Append data to a list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Update a user"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Document"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a user"),(0,r.kt)("td",{parentName:"tr",align:null},"Get Collections"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List user"),(0,r.kt)("td",{parentName:"tr",align:null},"Query Collection Group"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"get-user-by-uid"},"Get user by UID"),(0,r.kt)("p",null,"retrieve user information by specifying the user's unique identifier (UID). It enables you to fetch user details such as display name, email, phone number, and custom attributes associated with the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},'"User Identifier." It is a unique identifier assigned to each user in the Firebase authentication system.')))),(0,r.kt)("h4",{id:"get-user-by-email"},"Get user by email"),(0,r.kt)("p",null,"retrieve user information by specifying the user's email address. It allows you to fetch user details similar to the UID-based method, but using the email as the identifier."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the registered email associated with the user you want to retrieve")))),(0,r.kt)("h4",{id:"get-user-by-phone-number"},"Get user by phone number"),(0,r.kt)("p",null,"retrieve user information by specifying the user's phone number. It allows you to fetch user details similar to the UID-based method, but using the phone number as the identifier."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone number"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the registered phone number associated with the user you want to retrieve")))),(0,r.kt)("h4",{id:"create-a-user"},"Create a user"),(0,r.kt)("p",null,"create a new user in the Firebase authentication system. You can provide the user's email, password, display name, and other relevant information during the user creation process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User object"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"an object that contains user's information")))),(0,r.kt)("h4",{id:"update-a-user"},"Update a user"),(0,r.kt)("p",null,"update the attributes and properties of an existing user. You can modify the user's display name, email, phone number, password, and other custom attributes associated with the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},'"User Identifier." It is a unique identifier assigned to each user in the Firebase authentication system.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User object"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"an object that contains user's information")))),(0,r.kt)("h4",{id:"delete-a-user"},"Delete a user"),(0,r.kt)("p",null,"delete a user from the Firebase authentication system. This action permanently removes the user and their associated data from the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},'"User Identifier." It is a unique identifier assigned to each user in the Firebase authentication system.')))),(0,r.kt)("h4",{id:"list-users"},"List users"),(0,r.kt)("p",null,"retrieve a list of all users registered in the Firebase authentication system. It provides paginated results, enabling you to iterate through the user list and retrieve specific user details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Length of list"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"number of users you want to retrieve in a single request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Next page token"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"pagination when there are more users than can be returned in a single response")))),(0,r.kt)("h4",{id:"query-firebase"},"Query Firebase"),(0,r.kt)("p",null,"perform queries on the database using various conditions and filters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"can use dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"where"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"add conditions to your query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"limit the number of documents returned by the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order by"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the field by which you want to order the query results")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ordering direction"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"the direction of the ordering in the query results")))),(0,r.kt)("h4",{id:"insert-document"},"Insert Document"),(0,r.kt)("p",null,"create a new document in a collection or subcollection within Firestore. You provide the data to be stored in the document, and Firebase assigns a unique identifier (document ID) to it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the name of the collection in which you want to insert the document. can use the dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a custom identifier for the document being inserted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the actual data that you want to insert into the document")))),(0,r.kt)("h4",{id:"update-document"},"Update Document"),(0,r.kt)("p",null,"update an existing document in Firestore. You specify the document ID and provide the updated data, which will overwrite the existing document's fields."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the name of the collection in which you want to update the document. can use the dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a custom identifier for the document being updated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the actual data that you want to update into the document")))),(0,r.kt)("h4",{id:"get-document-by-id"},"Get Document by ID"),(0,r.kt)("p",null,"retrieves a specific document from Firestore based on its unique document ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the name of the collection in which you want to retrieve the document. can use the dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a custom identifier for the document being retrieved")))),(0,r.kt)("h4",{id:"delete-a-document"},"Delete a Document"),(0,r.kt)("p",null,"remove a document from Firestore based on its document ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the name of the collection in which you want to retrieve the document. can use the dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a custom identifier for the document being retrieved")))),(0,r.kt)("h4",{id:"get-collections"},"Get Collections"),(0,r.kt)("p",null,"retrieve all the collections within a Firestore database. It returns a list of collection names available in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parent Document ID"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a custom identifier for the document being retrieved")))),(0,r.kt)("h4",{id:"query-collection-group"},"Query Collection Group"),(0,r.kt)("p",null,"query documents across multiple collections with the same name. You can perform complex queries and retrieve matching documents from different collections that share the same name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"can use dropdown to select or use a raw id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"where"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"add conditions to your query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"limit the number of documents returned by the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order by"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the field by which you want to order the query results")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ordering direction"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"the direction of the ordering in the query results")))),(0,r.kt)("h4",{id:"query-database"},"Query database"),(0,r.kt)("p",null,"query the Realtime Database to retrieve data that meets specific criteria. You can define filters, sorting, and other conditions to retrieve a subset of data from a particular location in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database ref"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a reference to a specific location in the database.")))),(0,r.kt)("h4",{id:"set-data"},"Set data"),(0,r.kt)("p",null,"write or replace data at a specific location in the Realtime Database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database ref"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a reference to a specific location in the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object to set"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"object contains the data that we want to write to the database, including the name, age, and email fields.")))),(0,r.kt)("h4",{id:"update-data"},"Update data"),(0,r.kt)("p",null,"modify existing data at a specific location in the Realtime Database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},'"User Identifier." It is a unique identifier assigned to each user in the Firebase authentication system.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User object"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"object contains the data that we want to update to the database, including the name, age, and email fields.")))),(0,r.kt)("h4",{id:"append-data-to-a-list"},"Append data to a list"),(0,r.kt)("p",null,'use the "Push" method. It generates a unique key and appends the data as a new element in the list.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Input ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database ref"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a reference to a specific location in the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object to set"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"object contains the data that we want to update to the database, including the name, age, and email fields.")))))}m.isMDXComponent=!0}}]);