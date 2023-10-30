"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2735],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(8028),l=(n(9496),n(9613));const r={title:"Video",description:"Learn how to use the Video component to upload and customize video for your app in ILLA Cloud."},o="Video",i={unversionedId:"video",id:"video",title:"Video",description:"Learn how to use the Video component to upload and customize video for your app in ILLA Cloud.",source:"@site/docs/video.mdx",sourceDirName:".",slug:"/video",permalink:"/de/video",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/video.mdx",tags:[],version:"current",frontMatter:{title:"Video",description:"Learn how to use the Video component to upload and customize video for your app in ILLA Cloud."}},p={},d=[{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 3 Test",id:"step-3-test",level:4}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"video"},"Video"),(0,l.kt)("p",null,"The video component in ILLA Cloud is a powerful tool that allows users to incorporate multimedia content into their applications or projects. With this feature, users can seamlessly integrate videos into their user interfaces and create engaging and interactive experiences for their end-users."),(0,l.kt)("p",null,"The video component supports various video formats, including popular formats such as MP4, AVI, and MOV. Users can upload videos directly from their devices or provide URLs to external video sources. This flexibility enables users to leverage existing video content or create new videos specifically for their applications."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Video source"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the location of the video file or provide a URL to an external video source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"enables the video to start playing automatically when the webpage loads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loop"),(0,l.kt)("td",{parentName:"tr",align:null},"allows the video to play continuously in a loop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show controls"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the video player controls are visible or hidden")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mute"),(0,l.kt)("td",{parentName:"tr",align:null},"allows the video to play without any sound")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Volume"),(0,l.kt)("td",{parentName:"tr",align:null},"controls the audio level of the video")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through a dynamical boolean value.")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following eight methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"play"))),(0,l.kt)("p",null,"start playing the video. When invoked, it initiates the playback of the video from the current position."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pause"))),(0,l.kt)("p",null,"pause the video playback. When called, it temporarily stops the video at its current position."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showControls"))),(0,l.kt)("p",null,"toggle the visibility of the video player controls. By invoking this method, the controls can be displayed or hidden, allowing users to interact with the video playback."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setVideoUrl"))),(0,l.kt)("p",null,"dynamically change the source or URL of the video."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Video URL"),(0,l.kt)("td",{parentName:"tr",align:null},"video source url")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setVolume"))),(0,l.kt)("p",null,"adjusting the audio volume of the video. It takes a numeric value as the parameter volume"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Volume"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric value, ranging from 0 to 1, where 0 represents muted or no sound, and 1 represents maximum volume.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setSpeed"))),(0,l.kt)("p",null,"changing the playback speed of the video. It accepts a numeric value as the parameter Speed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Speed"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric value. 1 represents the normal playback speed. Values less than 1 slow down the video, while values greater than 1 speed it up.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"setLoop"))),(0,l.kt)("p",null,"enable or disable the looping functionality of the video. By passing a boolean value as a parameter, the video can be set to loop continuously or play only once."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"seekTo"))),(0,l.kt)("p",null,"seeking a specific time or position in the video. It takes numerical values as the parameter time(s)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"a numeric value representing the desired time in seconds as a parameter and adjusts the playback position accordingly.")))),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Play"),(0,l.kt)("td",{parentName:"tr",align:null},"perform specific actions or execute code when the video playback begins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pause"),(0,l.kt)("td",{parentName:"tr",align:null},"handle the pause event and execute actions accordingly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Loaded"),(0,l.kt)("td",{parentName:"tr",align:null},"performing tasks that need to be executed after the video has been fully loaded, such as updating the UI to display the video duration or initializing additional features related to the video playback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ended"),(0,l.kt)("td",{parentName:"tr",align:null},"handle the end of the video and perform actions such as displaying a replay button, showing related content, or executing any other desired logic when the video has finished playing")))),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the video should automatically start playing when it is loaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controls"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the video player controls, such as play, pause, and volume, are displayed to the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayName"),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that represents the name or title of the video.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"An array or object that defines the event handlers associated with the video component, such as play, pause, loaded, ended, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the video component is hidden from the user interface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the video should automatically restart playing from the beginning once it reaches the end.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the video should be muted, i.e., played without sound.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"playing"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that indicates whether the video is currently playing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,l.kt)("td",{parentName:"tr",align:null},"string value that represents the tooltip or hovers text to display when the user hovers over the video component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the URL or source of the video file to be played.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volume"),(0,l.kt)("td",{parentName:"tr",align:null},"A number value between 0 and 1 represents the volume level of the video, where 0 is muted and 1 is the maximum volume.")))),(0,l.kt)("p",null,"Example: {{video1.volume}}"),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to control the video playing with a button."),(0,l.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,l.kt)("p",null,"Add a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Video"))," component and a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas."),(0,l.kt)("p",null,"We set the video source of video component to the youtube link of any video you want to play. Here we will use the default video as example and labeled the button as \u201cPlay\u201d as shown below"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/video_layout.jpg",alt:"video_layout"})),(0,l.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"video"))," component playing if the video is not playing."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("inlineCode",{parentName:"li"},"**button**")," component to open its inspect page. Under ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,l.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,l.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"video1"))," component that you want to change as the target of the event."),(0,l.kt)("li",{parentName:"ol"},"Choose the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"play"))," action"),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Only run when"))," field, put ",(0,l.kt)("inlineCode",{parentName:"li"},"{{!video1.playing}}"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/video_config.jpg",alt:"video_config"})),(0,l.kt)("p",null,"Similarly, to stop the video playing, we create a new Event handler and follow the first two steps the same as above."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Choose the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"pause"))," action"),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Only run when"))," field, put ",(0,l.kt)("inlineCode",{parentName:"li"},"{{video1.playing}}"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/video_config_1.jpg",alt:"video_config_1"})),(0,l.kt)("h4",{id:"step-3-test"},"Step 3 Test"),(0,l.kt)("p",null,"Now that when you click the \u201cPlay\u201d button, the video should play if not playing and pause if playing."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/video_test.gif",alt:"video_test"})))}m.isMDXComponent=!0}}]);