"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[757],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8028),r=(a(9496),a(9613));const i={title:"AI Agent",description:"Customize the AI Agent according to your needs, limiting the behavior of the GPT model to generate content as per your requirements. Integrate the AI Agent into the ILLA App to make your app more intelligent."},l="AI Agent",o={unversionedId:"ai-agent",id:"ai-agent",title:"AI Agent",description:"Customize the AI Agent according to your needs, limiting the behavior of the GPT model to generate content as per your requirements. Integrate the AI Agent into the ILLA App to make your app more intelligent.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ai-agent.mdx",sourceDirName:".",slug:"/ai-agent",permalink:"/zh/ai-agent",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai-agent.mdx",tags:[],version:"current",frontMatter:{title:"AI Agent",description:"Customize the AI Agent according to your needs, limiting the behavior of the GPT model to generate content as per your requirements. Integrate the AI Agent into the ILLA App to make your app more intelligent."},sidebar:"tutorialSidebar",previous:{title:"Run Script",permalink:"/zh/"}},s={},p=[{value:"What is AI Agent",id:"what-is-ai-agent",level:2},{value:"Use case",id:"use-case",level:3},{value:"Marketing",id:"marketing",level:4},{value:"Blog generator",id:"blog-generator",level:5},{value:"Email generator",id:"email-generator",level:5},{value:"SEO",id:"seo",level:5},{value:"Customer support",id:"customer-support",level:4},{value:"Language",id:"language",level:4},{value:"Language learning",id:"language-learning",level:5},{value:"Translator",id:"translator",level:5},{value:"Create AI Agent",id:"create-ai-agent",level:2},{value:"Share AI Agent",id:"share-ai-agent",level:2},{value:"Share with team members",id:"share-with-team-members",level:3},{value:"Contribute to community",id:"contribute-to-community",level:3},{value:"Use AI Agent in ILLA App",id:"use-ai-agent-in-illa-app",level:2},{value:"How-to",id:"how-to",level:3},{value:"Demo",id:"demo",level:3},{value:"Fork and use",id:"fork-and-use",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-agent"},"AI Agent"),(0,r.kt)("p",null,"Customize the AI Agent according to your needs, limiting the behavior of the GPT model to generate content as per your requirements. Integrate the AI Agent into the ILLA App to make your app more intelligent."),(0,r.kt)("h2",{id:"what-is-ai-agent"},"What is AI Agent"),(0,r.kt)("p",null,"AI Agent is a feature developed based on powerful language models such as OpenAI's GPT-3.5 and GPT-4. It empowers you to edit prompts, allowing you to tailor the capabilities of the large language models according to your specific needs. You can save these modifications as your own AI Agent, enabling quick and convenient access. Additionally, you can also directly utilize AI Agents contributed by other outstanding creators."),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Explore all AI Agents on ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/"},"illa.ai")),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://illa.ai/",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h4",{id:"marketing"},"Marketing"),(0,r.kt)("h5",{id:"blog-generator"},"Blog generator"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7es/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7es/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/1.png",alt:"1"})),(0,r.kt)("h5",{id:"email-generator"},"Email generator"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7eg/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7eg/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/2.png",alt:"2"})),(0,r.kt)("h5",{id:"seo"},"SEO"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7ep/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7ep/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/3.png",alt:"3"})),(0,r.kt)("h4",{id:"customer-support"},"Customer support"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7eh/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7eh/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/4.png",alt:"4"})),(0,r.kt)("h4",{id:"language"},"Language"),(0,r.kt)("h5",{id:"language-learning"},"Language learning"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7eD/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7eD/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/5.png",alt:"5"})),(0,r.kt)("h5",{id:"translator"},"Translator"),(0,r.kt)("p",null,"Fast try: ",(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/ai-agent/ILAfx4p1C7ek/detail"},"https://illa.ai/ai-agent/ILAfx4p1C7ek/detail"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/ai-agent/6.png",alt:"6"})),(0,r.kt)("h2",{id:"create-ai-agent"},"Create AI Agent"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/fwmhuHAjP5Uw7ZtAwMT0?embed",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required or not"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"You can upload images within 500KB, or use AI to generate an icon after filling in the Name. The icon will be displayed in your AI Agent dashboard and, if you contribute the AI Agent to the ILLA Community, it will also be shown in the Community.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the AI Agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"A brief description of 160 characters of the AI Agent. You can also generate it after filling in the prompt.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Chat mode")," : The conversation will be requested along with the current message, previous conversation history, and prompt, resulting in increased token consumption. However, the output will be more accurate as it takes the context of the conversation into account for fine-tuning.",(0,r.kt)("strong",{parentName:"td"},"Text generation mode:"),"only the current message and prompt are included in the request, resulting in lower token consumption, but it doesn't take the conversation context into consideration for tuning.",(0,r.kt)("strong",{parentName:"td"},"It's important to note that the conversation history refers to the visible conversation on the screen, and we do not store this information. Once you refresh or close the webpage, the conversation history will not be retained."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prompt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},'A prompt is a command or instruction that you provide to the language model like GPT. It defines the role or desired output of the model. You can use prompts to instruct the model to perform specific tasks or generate specific types of content. For example, you can use prompts like "Act as an English teacher" or "Please output the results in Markdown format" to guide the model\'s behavior and generate the desired response.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Variable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"Variables allow you to dynamically fill in content within the prompt. A variable consists of a key and a value.",(0,r.kt)("strong",{parentName:"td"},"The key"),"represents the variable name and cannot contain spaces. It can be freely changed in edit mode but cannot be changed in run mode.",(0,r.kt)("strong",{parentName:"td"},"The value"),"represents the variable value. Once you enter the variable name, the variable value becomes a required field. After creating a variable, you also need to reference it in the prompt using double curly braces",(0,r.kt)("inlineCode",{parentName:"td"},"{{variable_name}}"),'. For example, if you create a variable with the key "translate" and the value "English", the prompt can be:',(0,r.kt)("inlineCode",{parentName:"td"},"Translate the content to {{translate}}"),". During runtime, the model will actually receive the prompt as",(0,r.kt)("inlineCode",{parentName:"td"},"Translate the content to English."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"We support GPT-3.5-turbo, GPT-3.5-turbo-16k, GPT-4, GPT-4-32k, LLAMA, and others.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"This is used to set the maximum number of tokens allowed per API call. It helps prevent excessive token consumption in a single call, but setting a lower token limit may result in less accurate responses. Different models have different maximum token limits, and you can refer to the official documentation of each model to find out the specific limits.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The allowed range is 0.1 to 2, but it is typically set between 0.1 and 1. This is used to control the trade-off between response accuracy and randomness in the model's output. When the value is set to a lower level, the output becomes more deterministic and conservative, which may result in increased accuracy. On the other hand, when the value is set to a higher level, the output becomes more creative and random, introducing more variability but potentially reducing accuracy.")))),(0,r.kt)("h2",{id:"share-ai-agent"},"Share AI Agent"),(0,r.kt)("h3",{id:"share-with-team-members"},"Share with team members"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/IgfpeApp6wqThN71Pzlg?embed",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h3",{id:"contribute-to-community"},"Contribute to community"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/DmI2hHqM4kShp8jP7utN?embed",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h2",{id:"use-ai-agent-in-illa-app"},"Use AI Agent in ILLA App"),(0,r.kt)("h3",{id:"how-to"},"How-to"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/Y8sq05zA0uis9e0oC39z?embed",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://builder.illacloud.com/illacloud_demo/deploy/app/ILAfx4p1C71f",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h4",{id:"fork-and-use"},"Fork and use"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://illa.ai/app/ILAfx4p1C71f/detail"},"https://illa.ai/app/ILAfx4p1C71f/detail")))}c.isMDXComponent=!0}}]);