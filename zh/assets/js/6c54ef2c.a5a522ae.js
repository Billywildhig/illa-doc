"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1804],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,h=u["".concat(d,".").concat(g)]||u[g]||m[g]||i;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(8028),n=(a(9496),a(9613));const i={title:"Server-side pagination",description:"When dealing with large amounts of data, using server-side pagination in your queries can greatly improve efficiency. In this article, you will learn how to utilize server-side pagination in ILLA Cloud."},l="Server-side pagination",o={unversionedId:"server-side-pagination",id:"server-side-pagination",title:"Server-side pagination",description:"When dealing with large amounts of data, using server-side pagination in your queries can greatly improve efficiency. In this article, you will learn how to utilize server-side pagination in ILLA Cloud.",source:"@site/docs/server-side-pagination.mdx",sourceDirName:".",slug:"/server-side-pagination",permalink:"/zh/server-side-pagination",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/server-side-pagination.mdx",tags:[],version:"current",frontMatter:{title:"Server-side pagination",description:"When dealing with large amounts of data, using server-side pagination in your queries can greatly improve efficiency. In this article, you will learn how to utilize server-side pagination in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Event handler",permalink:"/zh/event-handler"},next:{title:"Self-hosted deployment",permalink:"/zh/self-hosted-deployment"}},d={},p=[{value:"How to enable server-side pagination",id:"how-to-enable-server-side-pagination",level:2},{value:"Limit offset based pagination",id:"limit-offset-based-pagination",level:2},{value:"Properties to configure",id:"properties-to-configure",level:3},{value:"State of components",id:"state-of-components",level:3},{value:"Configure Actions",id:"configure-actions",level:3},{value:"SQL-like database",id:"sql-like-database",level:3},{value:"API",id:"api",level:3},{value:"Cursor based pagination",id:"cursor-based-pagination",level:2},{value:"Properties to configure",id:"properties-to-configure-1",level:3},{value:"State of components",id:"state-of-components-1",level:3},{value:"Configure Actions",id:"configure-actions-1",level:3},{value:"Query",id:"query",level:3},{value:"Variables",id:"variables",level:3},{value:"Demo",id:"demo",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-side-pagination"},"Server-side pagination"),(0,n.kt)("p",null,"When building an application using a large dataset, it is crucial to limit the amount of data returned in each query. Returning a large amount of data at once can impact the performance of the application, especially when dealing with complex queries involving multiple table joins."),(0,n.kt)("p",null,"The best practice to optimize queries is to implement server-side pagination. By only returning the results necessary to populate the given view, the amount of data transferred can be reduced. When additional data is needed to populate the view, another action can be triggered, and the server will retrieve the next set of results."),(0,n.kt)("h2",{id:"how-to-enable-server-side-pagination"},"How to enable server-side pagination"),(0,n.kt)("p",null,"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Grid"),(0,n.kt)("li",{parentName:"ul"},"Grid List")),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/xEIOIF2YZmt54zz9g7g5?embed",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("h2",{id:"limit-offset-based-pagination"},"Limit offset based pagination"),(0,n.kt)("p",null,"Supported on Data Grid and Grid List"),(0,n.kt)("h3",{id:"properties-to-configure"},"Properties to configure"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Use example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Total row count"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"{{n}}")," to set the value. The total number of rows is used to calculate the total number of pages. You can use an Action to query the database for the total number of records and fill in the query result here."),(0,n.kt)("td",{parentName:"tr",align:null},'Create an action named mysql1 with the query statement "select count(*) from users". This query is used to determine the total number of records in the users table. Simply fill in ',(0,n.kt)("inlineCode",{parentName:"td"},"{{mysql1.data[0].count}}")," in the Total row count field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Page size"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"{{n}}")," to set the number of records displayed per page. This will also be used to limit the number of records returned by the database or API in each pagination query."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{20}}"))))),(0,n.kt)("h3",{id:"state-of-components"},"State of components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"State name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"page"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page index of data grid or grid list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,n.kt)("td",{parentName:"tr",align:null},"Page size refers to the number of records displayed per page in a data grid or grid list.")))),(0,n.kt)("h3",{id:"configure-actions"},"Configure Actions"),(0,n.kt)("p",null,"Take SQL-like database and API as examples."),(0,n.kt)("h3",{id:"sql-like-database"},"SQL-like database"),(0,n.kt)("p",null,"Step 1: Write SQL in Action"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT *\nFROM users\nLIMIT {{dataGrid1.pageSize}}\nOFFSET {{dataGrid1.page*dataGrid1.pageSize}}\n\n")),(0,n.kt)("p",null,"In this example, we use ",(0,n.kt)("inlineCode",{parentName:"p"},"{{dataGrid1.pageSize}}")," to determine how many records need to be returned for this query, and we use ",(0,n.kt)("inlineCode",{parentName:"p"},"{{dataGrid1.page*dataGrid1.pageSize}}")," to calculate the offset for this request, indicating from which record to start returning."),(0,n.kt)("p",null,'Step 2: Changing "Run action only when manually triggered" to "Run action automatically when inputs change"'),(0,n.kt)("p",null,"After that, every time you change the page number of dataGrid1, the action will be triggered automatically and  query data with the new page number."),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("p",null,"Step 1: Setting up paginated queries using a query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://example.com?limit={{dataGrid1.pageSize}}&skip={{dataGrid1.page*dataGrid1.pageSize}}\n\n")),(0,n.kt)("p",null,'Many common APIs use the parameters "limit" and "skip" for pagination. In this example, we use ',(0,n.kt)("inlineCode",{parentName:"p"},"{{dataGrid1.pageSize}}")," to determine how many records need to be returned for this query, and we use ",(0,n.kt)("inlineCode",{parentName:"p"},"{{dataGrid1.page*dataGrid1.pageSize}}")," to calculate the offset for this request, indicating from which record to start returning."),(0,n.kt)("p",null,'Step 2: Changing "Run action only when manually triggered" to "Run action automatically when inputs change"'),(0,n.kt)("p",null,"After that, every time you change the page number of dataGrid1, the action will be triggered automatically and  query data with the new page number."),(0,n.kt)("h2",{id:"cursor-based-pagination"},"Cursor based pagination"),(0,n.kt)("p",null,"Only supported on Grid List"),(0,n.kt)("h3",{id:"properties-to-configure-1"},"Properties to configure"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Use example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Previous cursor"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"When you paginate forward, we will update the 'afterCursor' value to indicate to the API from which record to start querying data."),(0,n.kt)("td",{parentName:"tr",align:null},"We can directly retrieve this value from the data returned by the API. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"{{cursorBased.data.data.repository.issues.pageInfo.startCursor}}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Next cursor"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'While you are paging backward, we will update the "beforeCursor" with this value, which will inform the API about the starting point for querying data in the backward direction.'),(0,n.kt)("td",{parentName:"tr",align:null},"We can directly retrieve this value from the data returned by the API. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"{{cursorBased.data.data.repository.issues.pageInfo.endCursor}}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Has next page"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to determine if there is still a next page."),(0,n.kt)("td",{parentName:"tr",align:null},"We can directly retrieve this value from the data returned by the API. For example, ",(0,n.kt)("inlineCode",{parentName:"td"},"{{cursorBased.data.data.repository.issues.pageInfo.hasNextPage}}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Page"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"{{n}}")," to set the number of records displayed per page. This is only used to inform the gridlist component about how many items should be displayed per page."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{20}}"))))),(0,n.kt)("h3",{id:"state-of-components-1"},"State of components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"State name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"beforeCursor"),(0,n.kt)("td",{parentName:"tr",align:null},"When paging, inform the API to start querying from a specific record number. When beforeCursor is empty, it indicates the need to page backward. Therefore, based on this value, the configuration for the subsequent action will specify whether to perform a backward or forward query. This will be further explained in the upcoming action configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"afterCursor"),(0,n.kt)("td",{parentName:"tr",align:null},"When paging, inform the API about the starting point for querying data. When afterCursor is empty, it indicates the need to page forward.")))),(0,n.kt)("h3",{id:"configure-actions-1"},"Configure Actions"),(0,n.kt)("p",null,"Take GitHub's GraphQL interface as example."),(0,n.kt)("h3",{id:"query"},"Query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"query ($repoOwner: String!, $repoName: String!, $first: Int, $last: Int, $beforeCursor: String, $afterCursor: String) {\n   repository(owner: $repoOwner, name: $repoName) {\n      issues(first: $first, last: $last, before: $beforeCursor, after: $afterCursor, orderBy: {field: CREATED_AT, direction: DESC}) {\n         pageInfo {\n            hasNextPage\n            hasPreviousPage\n            endCursor\n            startCursor\n         }\n         totalCount\n         edges {\n            cursor\n            node {\n               title\n               number\n               url\n            }\n         }\n      }\n   }\n}\n\n")),(0,n.kt)("p",null,"In this example, we first ensure that the API response includes the following four values: ",(0,n.kt)("inlineCode",{parentName:"p"},"hasNextPage"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"hasPreviousPage"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"endCursor"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"startCursor"),". These values are used to configure the properties of the component."),(0,n.kt)("p",null,"And furthermore, we define some variables such as ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeCursor"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"afterCursor"),", etc., which need to be further set in the variables section under GraphQL."),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"key"),(0,n.kt)("th",{parentName:"tr",align:null},"value"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repoOwner"),(0,n.kt)("td",{parentName:"tr",align:null},"illacloud"),(0,n.kt)("td",{parentName:"tr",align:null},"To query the issues in illa-builder repository on illacloud.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repoName"),(0,n.kt)("td",{parentName:"tr",align:null},"illa-builder"),(0,n.kt)("td",{parentName:"tr",align:null},"To query the issues in illa-builder repository on illacloud.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"beforeCursor"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.beforeCursor}}")),(0,n.kt)("td",{parentName:"tr",align:null},"This is used to set the cursor from which to start the query when paging forward. If you are paging backward, the value of this field will be null and no further processing is required.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.beforeCursor ? gridList1.pageSize : null}}")),(0,n.kt)("td",{parentName:"tr",align:null},"The last parameter is used to set the number of records to query when paging forward. If the value of ",(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.beforeCursor}}")," is not null, indicating that you want to page forward, then this conditional statement will also use ",(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.pageSize}}")," as the number of records to query when paging forward. Similarly, if you are paging backward, this value will be empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"afterCursor"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.afterCursor}}")),(0,n.kt)("td",{parentName:"tr",align:null},"This is used to set the cursor from which to start the query when paging backward. If you are paging forward, the value of this field will be null.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"first"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{!gridList1.beforeCursor ? gridList1.pageSize:null}}")),(0,n.kt)("td",{parentName:"tr",align:null},"The first parameter is used to set the number of records to query when paging forward. If the value of ",(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.afterCursor}}")," is not null, it confirms that you are paging backward. However, when you initially trigger the pagination, both beforeCursor and afterCursor are empty, resulting in an error in the query. Therefore, when both are empty, we assume that the user's first pagination is always paging backward, so we only need to check if gridList1.beforeCursor is not empty. Once it is confirmed to be paging backward, this conditional statement will also use ",(0,n.kt)("inlineCode",{parentName:"td"},"{{gridList1.pageSize}}")," as the number of records to query when paging backward.")))),(0,n.kt)("h2",{id:"demo"},"Demo"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://illa.ai/app/ILAcx4p1C7gj/detail"},"https://illa.ai/app/ILAcx4p1C7gj/detail")),(0,n.kt)("p",null,"You can fork this demo to your team to check the configuration. And you can change the resources to the following resources:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GraphQL")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Base URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.github.com/graphql"},"https://api.github.com/graphql"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,n.kt)("td",{parentName:"tr",align:null},"bearer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bearer Token"),(0,n.kt)("td",{parentName:"tr",align:null},"Generate your personal token on GitHub")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rest API")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Base URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://dummyjson.com/"},"https://dummyjson.com/"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PostgreSQL")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"146.190.2.7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"30739")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database"),(0,n.kt)("td",{parentName:"tr",align:null},"illa_demo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"illa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"illa2022")))))}m.isMDXComponent=!0}}]);