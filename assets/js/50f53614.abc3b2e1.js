"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5037],{9613:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>h});var n=l(9496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(l),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return l?n.createElement(h,i(i({ref:t},d),{},{components:l})):n.createElement(h,i({ref:t},d))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8553:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=l(8028),a=(l(9496),l(9613));const o={title:"Self-hosted deployment",description:"ILLA Builder provides a seamless deployment experience that allows you to deploy ILLA Builder at an astonishing speed within your own Virtual Private Cloud (VPC)."},i="Self-hosted deployment",r={unversionedId:"self-hosted-deployment",id:"self-hosted-deployment",title:"Self-hosted deployment",description:"ILLA Builder provides a seamless deployment experience that allows you to deploy ILLA Builder at an astonishing speed within your own Virtual Private Cloud (VPC).",source:"@site/docs/self-hosted-deployment.mdx",sourceDirName:".",slug:"/self-hosted-deployment",permalink:"/self-hosted-deployment",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/self-hosted-deployment.mdx",tags:[],version:"current",frontMatter:{title:"Self-hosted deployment",description:"ILLA Builder provides a seamless deployment experience that allows you to deploy ILLA Builder at an astonishing speed within your own Virtual Private Cloud (VPC)."},sidebar:"tutorialSidebar",previous:{title:"Server-side pagination",permalink:"/server-side-pagination"},next:{title:"Custom domain",permalink:"/custom-domain"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"CLI",id:"cli",level:2},{value:"Download ILLA CLI and deploy",id:"download-illa-cli-and-deploy",level:3},{value:"Checking the prerequisites of self-hosted installation",id:"checking-the-prerequisites-of-self-hosted-installation",level:3},{value:"Deploying ILLA Builder",id:"deploying-illa-builder",level:3},{value:"Updating ILLA Builder",id:"updating-illa-builder",level:3},{value:"Other operations",id:"other-operations",level:3},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Description",id:"description",level:3},{value:"Run with an official slim image",id:"run-with-an-official-slim-image",level:3},{value:"For Database Persistent Storage",id:"for-database-persistent-storage",level:3},{value:"For HTTPS Config",id:"for-https-config",level:3},{value:"Quickly deploy",id:"quickly-deploy",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"self-hosted-deployment"},"Self-hosted deployment"),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start Docker"),(0,a.kt)("li",{parentName:"ol"},"Enter the following command in the terminal to install the official image:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker pull illasoft/illa-builder:latest"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -p80:2022 illasoft/illa-builder:latest"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"80")," is the port, you can change it if it is already in use. After the execution is complete, you can access it via https://","[localhost]",":","[80]","."),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("h3",{id:"download-illa-cli-and-deploy"},"Download ILLA CLI and deploy"),(0,a.kt)("p",null,"If you have Rust installed, you can easily build+install the latest ILLA CLI release with cargo:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cargo install illa")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"illa deploy --self --port=10000")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"cargo")," tool will complete downloading the ILLA CLI with its source dependencies, build and install it into the cargo bin path so that we can run it. Once installed, you can run the ILLA CLI with the ",(0,a.kt)("strong",{parentName:"p"},"illa")," command."),(0,a.kt)("p",null,"Alternatively, you can just download the ILLA CLI for your operating system here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/illacloud/illa/releases/latest/download/illa-x86_64-win.zip"},"Windows"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/illacloud/illa/releases/latest/download/illa-x86_64-linux.tar.gz"},"Linux"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/illacloud/illa/releases/latest/download/illa-x86_64-macos.tar.gz"},"Mac")))),(0,a.kt)("p",null,"If you do download from the above links, the steps are slightly different compared to downloading the ILLA CLI from  ",(0,a.kt)("strong",{parentName:"p"},"cargo")," . After downloading the CLI, you will have to make it executable. Let\u2019s take the illa-linux for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plaintext"},"# download illa cli binary file\n> wget <https://github.com/illacloud/illa/releases/latest/download/illa-x86_64-linux.tar.gz>\n\n# unpack the file\n> tar -zxvf illa-x86_64-linux.tar.gz\n\n> cd illa-x86_64-linux\n\n> chmod +x illa\n\n# run the illa cli\n> ./illa\n")),(0,a.kt)("h3",{id:"checking-the-prerequisites-of-self-hosted-installation"},"Checking the prerequisites of self-hosted installation"),(0,a.kt)("p",null,"These ports 5432, 9999 and 8000 should remain for the ILLA Builder"),(0,a.kt)("p",null,"The following command will check the prerequisites of self-hosted installation on your operating system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plaintext"},"> illa doctor\n")),(0,a.kt)("h3",{id:"deploying-illa-builder"},"Deploying ILLA Builder"),(0,a.kt)("p",null,"Once the ILLA CLI has been installed, you can run a self-hosted or cloud installation."),(0,a.kt)("p",null,"You can simply deploy a self-hosted ILA Builder by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plaintext"},"# the port which ILLA Builder can be accessed on can be changed\n# the <SERVER_ADDRESS> should be your cloud server public ip, default localhost\n> illa deploy --self --port=10000 --server-addr=<SERVER_ADDRESS>\n")),(0,a.kt)("p",null,"Now, you can access the ILLA Builder: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:10000"},"http://localhost:10000")),(0,a.kt)("h3",{id:"updating-illa-builder"},"Updating ILLA Builder"),(0,a.kt)("p",null,"To update the ILLA Builder with the latest docker images, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plaintext"},"> illa update --self\n")),(0,a.kt)("h3",{id:"other-operations"},"Other operations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plaintext"},"# list the ILLA Builder\n> illa list --self\n\n# stop the ILLA Builder\n> illa stop --self\n\n# remove the ILLA Builder\n> illa remove --self\n\n# forced removal of the running ILLA Builder and persistent data\n> sudo illa remove --force --self --data\n\n# restart the ILLA Builder\n> illa restart --self\n\n# help information\n> illa help\n")),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Build illa all-in-one image and run it by k8s on your machine. You can check out the scripts file in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/illacloud/deploy-illa-manually/blob/main/kubernetes/scripts"},"scripts")," folder for more details."),(0,a.kt)("p",null,"Note:"),(0,a.kt)("p",null,"We highly recommended deploying with our auto-deploy tools ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/illacloud/illa"},"illa-cli"),"."),(0,a.kt)("p",null,"And for the moment we do not support Apple Silicon M1 (darwin-arm64 arch)."),(0,a.kt)("h3",{id:"run-with-an-official-slim-image"},"Run with an official slim image"),(0,a.kt)("p",null,"Install GNU make and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"make deploy\n")),(0,a.kt)("p",null,"or just execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"/bin/bash scripts/deploy.sh\n")),(0,a.kt)("p",null,"this command will pull illasoft official all-in-one image and deploy it on your Kubernetes cluster."),(0,a.kt)("h3",{id:"for-database-persistent-storage"},"For Database Persistent Storage"),(0,a.kt)("p",null,"Edit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/illacloud/deploy-illa-manually/blob/main/kubernetes/illa-builder.yaml"},"illa-builder.yaml"),", and add your IAAS persistent storage config on it."),(0,a.kt)("h3",{id:"for-https-config"},"For HTTPS Config"),(0,a.kt)("p",null,"You can route the NodePort to your Kubernetes cluster ingress gateway and rewrite to 443 port, and add https cert in your ingress gateway."),(0,a.kt)("p",null,"Or, you can deploy an ingress gateway manually into your Kubernetes server, config like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},'static_resources:\n  listeners:\n  - name: https_listener\n    address:\n      socket_address:\n        address: 0.0.0.0\n        port_value: 443\n    filter_chains:\n    - filters:\n      - name: envoy.filters.network.http_connection_manager\n        typed_config:\n          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\n          stat_prefix: https_listener\n          route_config:\n            name: local_route\n            virtual_hosts:\n            - name: illa_builder\n              domains:\n              - "illa.yourdomian.com" # replace with your domain\n              routes:\n              - match:\n                  prefix: "/"route:\n                  cluster: illa_builder\n          http_filters:\n          - name: envoy.filters.http.router\n            typed_config:\n              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\n      transport_socket:\n        name: envoy.transport_sockets.tls\n        typed_config:\n          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext\n          common_tls_context:\n            tls_certificates:\n            # replace this with your cert file\n            - certificate_chain:\n                filename: /your-cert-folder/fullchain.pem\n              private_key:\n                filename: /your-cert-folder/privkey.pem\n\n  clusters:\n  - name: illa_builder\n    type: STRICT_DNS\n    lb_policy: ROUND_ROBIN\n    connect_timeout: 10s\n    load_assignment:\n      cluster_name: illa_builder\n      endpoints:\n      - lb_endpoints:\n        - endpoint:\n            address:\n              socket_address:\n                address: illa-builder\n                port_value: 80\n')),(0,a.kt)("h2",{id:"quickly-deploy"},"Quickly deploy"),(0,a.kt)("p",null,"You can deploy ILLA in a remarkably fast way, please follow the instructions below:"),(0,a.kt)("p",null,"First, please download this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/illacloud/deploy-illa-manually/tree/main/docker"},"docker file")," to your computer, then run the following code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"cd docker;\n/bin/bash ./scripts/run-official-image.sh;\n")),(0,a.kt)("p",null,"And log in with the default username and password:"),(0,a.kt)("p",null,"Username: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"root"))),(0,a.kt)("p",null,"Password: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"password"))," (self-host mode only)."))}c.isMDXComponent=!0}}]);