"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[7689],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(8028),r=(a(9496),a(9613));const l={title:"Oracle DB",description:"Learn how to use ILLA Cloud's database integration feature to connect and interact with your OracleDB database in a few simple steps."},o="Oracle DB",i={unversionedId:"oracledb",id:"oracledb",title:"Oracle DB",description:"Learn how to use ILLA Cloud's database integration feature to connect and interact with your OracleDB database in a few simple steps.",source:"@site/docs/oracledb.mdx",sourceDirName:".",slug:"/oracledb",permalink:"/ro/oracledb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracledb.mdx",tags:[],version:"current",frontMatter:{title:"Oracle DB",description:"Learn how to use ILLA Cloud's database integration feature to connect and interact with your OracleDB database in a few simple steps."},sidebar:"tutorialSidebar",previous:{title:"Neon",permalink:"/ro/neon"},next:{title:"PostgreSQL",permalink:"/ro/postgresql"}},s={},c=[{value:"Create Oracle DB",id:"create-oracle-db",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Oracle DB",id:"configure-oracle-db",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle-db"},"Oracle DB"),(0,r.kt)("p",null,"Oracle DB in Illa is a database integration that allows you to connect and interact with a Oracle DB database. Oracle DB is a popular open-source relational database management system that is known for its speed, reliability, and ease of use."),(0,r.kt)("p",null,"With the Oracle DB integration in Illa, you can query, insert, update, and delete data from a Oracle DB database using SQL commands. You can also create custom SQL queries and run them within Illa. This makes it easy to build data-driven applications and dashboards that display real-time data from a Oracle DB database."),(0,r.kt)("h3",{id:"create-oracle-db"},"Create Oracle DB"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign into your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Oracle DB"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below. "),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready Oracle DB will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/oracle_ex_ready.png",alt:"oracle_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Oracle DB"))," from the database list. Then, connect to the database with required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to Oracle DB database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/oracle_config.png",alt:"oracle_config"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '3306'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Treat Database name as"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"identify a database instance with SID or Service Name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the Oracle DB server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"decides how high a secure SSL TCP/IP connection is prioritized while negotiating with the server.")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created an Oracle DB resource, we can add the action by selecting Oracle DB from action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/oracle_resource_list.png",alt:"oracle_resource_list"})),(0,r.kt)("p",null," Now we have added the Oracle DB server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/oracle.png",alt:"oracle"})),(0,r.kt)("h3",{id:"configure-oracle-db"},"Configure Oracle DB"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL query"),(0,r.kt)("td",{parentName:"tr",align:null},"sql commands to fetch (select), insert, update, delete data from database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users ORDER BY lastname;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users\n\n    (firstname, lastname, email)\n\nVALUES\n\n    (\n\n        {{ NewUser.data.firstNameInput }},\n\n        {{ NewUser.data.lastNameInput }},\n\n        {{ NewUser.data.emailInput }}\n\n    );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE users\n  SET firstname = '{{form1.updatedProfile.first}}'\n  WHERE id = {{ form1.updatedProfile.uid}};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM users WHERE id = {{ form1.updatedProfile.uid }};\n")))}d.isMDXComponent=!0}}]);