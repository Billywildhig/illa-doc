"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5760],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(8028),a=(n(9496),n(9613));const i={title:"List",description:"The List component allows you to create repeatable rows of data whose look and feel are defined by you."},r="List",l={unversionedId:"list",id:"list",title:"List",description:"The List component allows you to create repeatable rows of data whose look and feel are defined by you.",source:"@site/docs/list.mdx",sourceDirName:".",slug:"/list",permalink:"/list",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/list.mdx",tags:[],version:"current",frontMatter:{title:"List",description:"The List component allows you to create repeatable rows of data whose look and feel are defined by you."},sidebar:"tutorialSidebar",previous:{title:"Input",permalink:"/input"},next:{title:"Grid list",permalink:"/grid-list"}},s={},c=[{value:"List",id:"list-1",level:2},{value:"Drag components to list",id:"drag-components-to-list",level:3},{value:"Display query results in a list",id:"display-query-results-in-a-list",level:3},{value:"Use the data of list",id:"use-the-data-of-list",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list"},"List"),(0,a.kt)("h2",{id:"list-1"},"List"),(0,a.kt)("p",null,"The List component is similar to a Container in that you can nest other components inside of it."),(0,a.kt)("iframe",{width:"750",height:"315",src:"https://www.youtube.com/embed/5rtzkJxEe5o",title:"How to use List Component in ILLA Cloud? ILLA Tutorial.",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/list.png",alt:""}),(0,a.kt)("h3",{id:"drag-components-to-list"},"Drag components to list"),(0,a.kt)("p",null,"When you drag a List\xa0component to the Frame, it automatically includes some components. You can deleted or modify them and drag new components into list. "),(0,a.kt)("p",null,"Only the first item can be edited, and others will automatically change based on the first item. You can also focus on the first item and drag the bar to change the height items."),(0,a.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/list1.png",alt:""}),(0,a.kt)("h3",{id:"display-query-results-in-a-list"},"Display query results in a list"),(0,a.kt)("p",null,"When you drag a List\xa0component to the Frame, it automatically displays the test data in JSON format. You can change the data source to an action by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ mysql_list_query.data }}"),". "),(0,a.kt)("p",null,"After setting the data source, you can change the data of components:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the component in the first item. "),(0,a.kt)("li",{parentName:"ol"},"If the component data is from the list, you can set the data by using ",(0,a.kt)("inlineCode",{parentName:"li"},"{{ currentItem.columnName }}")," . For example, you can set the image source with the ",(0,a.kt)("inlineCode",{parentName:"li"},"{{ currentItem.Avater }}"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"Avater")," is a column from the data source of the list.")),(0,a.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/list2.png",alt:""}),(0,a.kt)("p",null,"You can use  ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ currentItem.columnName }}")," only when the components are in the list. "),(0,a.kt)("h3",{id:"use-the-data-of-list"},"Use the data of list"),(0,a.kt)("p",null,"You can use the data of selected items by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ list1.selectedItem.columnName }}"),". Or use any data of list by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ list1.dataSource[n].columnName }}")),(0,a.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/list3.png",alt:""}))}d.isMDXComponent=!0}}]);