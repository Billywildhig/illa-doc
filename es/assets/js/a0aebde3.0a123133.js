"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[8450],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(8028),r=(a(9496),a(9613));const l={title:"Hydra",description:"Use ILLA Cloud to access and work with your Hydra data. Create apps that can query, manipulate, and display data."},i=void 0,o={unversionedId:"hydra",id:"hydra",title:"Hydra",description:"Use ILLA Cloud to access and work with your Hydra data. Create apps that can query, manipulate, and display data.",source:"@site/docs/hydra.mdx",sourceDirName:".",slug:"/hydra",permalink:"/es/hydra",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hydra.mdx",tags:[],version:"current",frontMatter:{title:"Hydra",description:"Use ILLA Cloud to access and work with your Hydra data. Create apps that can query, manipulate, and display data."},sidebar:"tutorialSidebar",previous:{title:"Hugging Face Endpoint",permalink:"/es/hugging-face-endpoint"},next:{title:"MariaDB",permalink:"/es/mariadb"}},s={},d=[{value:"Hydra",id:"hydra",level:2},{value:"Create Hydra",id:"create-hydra",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure Hydra",id:"configure-hydra",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hydra"},"Hydra"),(0,r.kt)("p",null,"Hydra is a powerful integration within the ILLA Cloud platform that seamlessly connects and consolidates various data sources and applications. Acting as a central hub, Hydra enables efficient data flow and communication between different systems, allowing for real-time data synchronization, automated workflows, and streamlined processes. With its robust capabilities, Hydra empowers businesses to optimize their operations, enhance collaboration, and make data-driven decisions with ease, all within the integrated ecosystem of ILLA Cloud."),(0,r.kt)("h3",{id:"create-hydra"},"Create Hydra"),(0,r.kt)("p",null,"There are two ways to create a resource in ILLA after signing into your account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign into your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Hydra"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list_3.jpeg",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready Hydra will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/hydra_ex_ready.jpeg",alt:"hydra_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Hydra"))," from the database list. Then, connect to the database with required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to Hydra database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/hydra_config.jpeg",alt:"hydra_config"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/hydra_config_1.jpeg",alt:"hydra_config_1"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '5432'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the Hydra server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL options"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"decides how high a secure SSL TCP/IP connection is prioritized while negotiating with the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CA Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a digital certificate that is used to verify the identity of a server and establish a secure, encrypted connection between a client and a Hydra cluster. If you don't specify it, we have filled in a default certificate for you.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Key"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a parameter that is used to establish a secure connection between the Hydra client and the Hydra server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a security feature that allows a client to authenticate itself to a Hydra server")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created a Hydra resource, we can add the action by selecting Hyd from action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/hydra_resource_list.jpeg",alt:"hydra_resource_list"})),(0,r.kt)("p",null,"Now we have added the Hydra server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/intergration/hydra.jpeg",alt:"hydra"})),(0,r.kt)("h3",{id:"configure-hydra"},"Configure Hydra"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL query"),(0,r.kt)("td",{parentName:"tr",align:null},"sql commands to fetch (select), insert, update, delete data from database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using Javascript")))),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users ORDER BY lastname;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users\n\n    (firstname, lastname, email)\n\nVALUES\n\n    (\n\n        {{ NewUser.data.firstNameInput }},\n\n        {{ NewUser.data.lastNameInput }},\n\n        {{ NewUser.data.emailInput }}\n\n    );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE users\n  SET firstname = '{{form1.updatedProfile.first}}'\n  WHERE id = {{ form1.updatedProfile.uid}};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM users WHERE id = {{ form1.updatedProfile.uid }};\n")))}u.isMDXComponent=!0}}]);