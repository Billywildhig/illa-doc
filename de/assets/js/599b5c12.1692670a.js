"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[6142],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var l=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=l.createContext({}),p=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?l.createElement(h,r(r({ref:t},s),{},{components:a})):l.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=a(8028),n=(a(9496),a(9613));const o={title:"Upload",description:"Use the upload component to upload files from the local machines to any cloud storage"},r="Upload",i={unversionedId:"upload",id:"upload",title:"Upload",description:"Use the upload component to upload files from the local machines to any cloud storage",source:"@site/docs/upload.mdx",sourceDirName:".",slug:"/upload",permalink:"/de/upload",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/upload.mdx",tags:[],version:"current",frontMatter:{title:"Upload",description:"Use the upload component to upload files from the local machines to any cloud storage"},sidebar:"tutorialSidebar",previous:{title:"Timeline",permalink:"/de/timeline"},next:{title:"Video",permalink:"/de/video"}},d={},p=[{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data of Uploader",id:"data-of-uploader",level:3},{value:"Upload files to a cloud storage service",id:"upload-files-to-a-cloud-storage-service",level:3},{value:"Upload a single file through an S3 resource",id:"upload-a-single-file-through-an-s3-resource",level:4},{value:"Upload multiple files through an S3 resource",id:"upload-multiple-files-through-an-s3-resource",level:4}],s={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upload"},"Upload"),(0,n.kt)("p",null,"The upload component is used to allow users to upload files from their local machines to any cloud storage via API. Next, we will introduce how to configure an upload component, how to associate the upload component with a cloud storage service, how to use the upload component to select an image, and display it with an image, etc."),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/upload1.png",alt:""}),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Set the type of upload component, including Button and Dropzone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The text shown on the upload component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Selection types"),(0,n.kt)("td",{parentName:"tr",align:null},"Set the selection type to multiple files, single file, or directory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File types"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of file extensions allowed to upload. No value will permit all file types.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Append newly selected files"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the selected new file to append to the selected file or replace the selected file in the selection type of multiple files or directory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File list"),(0,n.kt)("td",{parentName:"tr",align:null},"To set whether to show a list of selected files below the upload component. The height of uploader will change dynamically based on the length of the file list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Parse Value"),(0,n.kt)("td",{parentName:"tr",align:null},"Attempt to parse the selected files, with support for JSON, CSV, TSV, Excel, and TXT files. Parsed data can be accessed via {{upload1.parsedValue}}. Files that can not be parsed will be null in the array. All files are available as base64 encoded strings on the value array, regardless of this option.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Loading"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the component should show a loading indicator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"To set whether to disable this component and under what conditions to disable it. For example, if the input1 component is null, this component should be disabled: {{ input1.value == \u2018 \u2019}}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,n.kt)("td",{parentName:"tr",align:null},"A tooltip displayed on the component when users hover over the component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Required field"),(0,n.kt)("td",{parentName:"tr",align:null},"To set whether it is required.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min size"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the minimum file size allowed to be added.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max size"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the maximum file size allowed to be added.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the text displayed when verification fails.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,n.kt)("td",{parentName:"tr",align:null},"To set whether to display the validation message when verification fails.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,n.kt)("td",{parentName:"tr",align:null},"To set a key for the component. After adding this component to a form, this key will be used to identify the data of this component when submitting the form.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,n.kt)("td",{parentName:"tr",align:null},"To set whether to display this component and under what conditions to display it. For example, if the current user is not User A, this component should be hidden: {{ currentUserInfo.nickname != 'User A' }}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variant"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the Button Upload component to Outline or Filled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,n.kt)("td",{parentName:"tr",align:null},"To set the color of the Button Upload component.")))),(0,n.kt)("h3",{id:"method"},"Method"),(0,n.kt)("p",null,"You can use other components to control the Upload component. We support the following three methods:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"clearValidation"),(0,n.kt)("th",{parentName:"tr",align:null},"Used to clear the validation message"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"clearValue"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to clear the selected")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setDisabled"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to set the upload component to disabled or enabled")))),(0,n.kt)("h3",{id:"event-handler"},"Event handler"),(0,n.kt)("p",null,"To trigger actions when the selected files change"),(0,n.kt)("h3",{id:"data-of-uploader"},"Data of Uploader"),(0,n.kt)("p",null,"The upload component has some commonly used data, which can be called in the app."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"value")," an array consisting of the base64 data of files. "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"files")," an array of objects. The keys of the objects include ",(0,n.kt)("inlineCode",{parentName:"p"},"lastModified"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"type"),". You can use  ",(0,n.kt)("inlineCode",{parentName:"p"},"{{upload1.files.map(file =>file.name)}}")," to get an array of file names and you can also get lastModified array, size array, type array in the same way. "),(0,n.kt)("h3",{id:"upload-files-to-a-cloud-storage-service"},"Upload files to a cloud storage service"),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/upload2.gif",alt:""}),(0,n.kt)("h4",{id:"upload-a-single-file-through-an-s3-resource"},"Upload a single file through an S3 resource"),(0,n.kt)("p",null,"The configuration of action is as follows. "),(0,n.kt)("p",null,"Upload object name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{{upload1.files.map(file =>file.name)[0]}}\n")),(0,n.kt)("p",null,"Upload data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{{upload1.value[0]}}\n")),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/upload3.png",alt:""}),(0,n.kt)("h4",{id:"upload-multiple-files-through-an-s3-resource"},"Upload multiple files through an S3 resource"),(0,n.kt)("p",null,"Upload object name list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{{upload1.files.map(file =>file.name)}}\n")),(0,n.kt)("p",null,"Upload data list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{{upload1.value}}\n")),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/upload4.png",alt:""}),(0,n.kt)("p",null,"Upload an image and display it on the image component\nChange the image source to the file base64 data of upload component. The base64 data is stored in the value attribute in array. And we should splice the file prefix with the file data. The code is as follows. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{{'data:image/jpeg;base64,'+upload1.value[0]}}\n")),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/upload5.gif",alt:""}))}c.isMDXComponent=!0}}]);