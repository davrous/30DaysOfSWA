"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7146],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8749:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={slug:"build-with-docusaurus",title:"#11: Share Content - with Docusaurus",authors:["nitya"],tags:["swa","30days","usage-examples","react","docusaurus"],draft:!1},l=void 0,u={permalink:"/blog/build-with-docusaurus",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-12.md",source:"@site/blog/2021-05-12.md",title:"#11: Share Content - with Docusaurus",description:"Welcome to Week 2, Day 4 of #30DaysOfSWA!!",date:"2021-05-12T00:00:00.000Z",formattedDate:"May 12, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"usage-examples",permalink:"/blog/tags/usage-examples"},{label:"react",permalink:"/blog/tags/react"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:7.165,truncated:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"build-with-docusaurus",title:"#11: Share Content - with Docusaurus",authors:["nitya"],tags:["swa","30days","usage-examples","react","docusaurus"],draft:!1},prevItem:{title:"#12: Headless CMS & SWA With Blazor",permalink:"/blog/build-with-blazor"},nextItem:{title:"#10: Get Creative - with Vue.js",permalink:"/blog/build-with-vuejs"}},p={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"About the Demo",id:"about-the-demo",level:2},{value:"What is Docusaurus?",id:"what-is-docusaurus",level:2},{value:"1. Setup Site",id:"1-setup-site",level:2},{value:"2. Deploy To Azure",id:"2-deploy-to-azure",level:2},{value:"3... using VS Code",id:"3-using-vs-code",level:2},{value:"3.1 Install Extension",id:"31-install-extension",level:2},{value:"3.2. Find SWA Panel",id:"32-find-swa-panel",level:2},{value:"3.3 Create SWA",id:"33-create-swa",level:2},{value:"3.4 Configure SWA",id:"34-configure-swa",level:2},{value:"3.5 Track Progress",id:"35-track-progress",level:2},{value:"3.6 Browse Site!",id:"36-browse-site",level:2},{value:"4. Customize It!",id:"4-customize-it",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources:",id:"resources",level:2}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Welcome to ",(0,s.kt)("inlineCode",{parentName:"p"},"Week 2, Day 4")," of ",(0,s.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,s.kt)("p",null,"Today's a special day - the ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/updates/azure-static-web-apps-is-now-generally-available/?WT.mc_id=30daysofswa-61155-cxall"},"1 year anniversary of Azure Static Web Apps"),"! ",(0,s.kt)("br",null)," ",(0,s.kt)("strong",{parentName:"p"},"Happy Birthday SWA! \ud83c\udf82")," "),(0,s.kt)("p",null,"I wanted to do something special to celebrate - and I thought of just the thing! Let's create a content-focused static website ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"with Docusaurus")," and deploy it ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=30daysofswa-61155-cxall"},"using Azure Static Web Apps"),". Want to get a sense of what kinds of static sites you can build with Docusaurus? ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"Check out their showcase"),"!"),(0,s.kt)("p",null,"Why ",(0,s.kt)("strong",{parentName:"p"},"this")," demo today? Well, it's very ",(0,s.kt)("em",{parentName:"p"},"Meta")," (pun intended). You may have noticed that the ",(0,s.kt)("a",{parentName:"p",href:"https://aka.ms/30DaysOfSWA"},"#30DaysOfSWA")," website is built on Docusaurus. \ud83e\udd96"),(0,s.kt)("p",null,"By sharing this tutorial, I'm hoping it inspires more of you to build/deploy sites that showcase your own tech journeys - whether its with #30Days of learning, or to feature your #100Devs portfolios. #LetsGetStarted! \ud83c\udf89"),(0,s.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Intro"),": What is Docusaurus?"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Quickstart:")," setup classic site"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Configure"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Deploy"),": Azure Static Web Apps"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Customize"),": Themes & Plugins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Exercise"),": Try extending the demo further ")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9212).Z,width:"1000",height:"420"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"about-the-demo"},"About the Demo"),(0,s.kt)("p",null,"In today's tutorial, we'll create a ",(0,s.kt)("em",{parentName:"p"},"classic")," Docusaurus site, deploy it to Azure Static Web Apps, then make some changes to the site content to validate that it rebuilds and deploys the site without any further manual effort from us. I hope to also contribute this back to the Docusaurus docs as an example for Deploying to Azure - feedback to improve this is very welcome!"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ud83c\udf1f ",(0,s.kt)("strong",{parentName:"li"},"The tutorial source is ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/fearlessly-dev/swa-demo-docusaurus"},"here on GitHub"))," - I'll update ",(0,s.kt)("strong",{parentName:"li"},"that version")," over time."),(0,s.kt)("li",{parentName:"ul"},"\ud83c\udf89  ",(0,s.kt)("strong",{parentName:"li"},"See the site live ",(0,s.kt)("a",{parentName:"strong",href:"https://zealous-bay-0062c640f.1.azurestaticapps.net/"},"on Azure Static Web Apps"))," - for demo purposes only.")),(0,s.kt)("h2",{id:"what-is-docusaurus"},"What is Docusaurus?"),(0,s.kt)("p",null,"Docusaurus is an open-source project from Meta that helps you build, deploy, and maintain, open source project websites. It was rated one of the top 3 ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"rising stars of JavaScript")," in 2021, under the ",(0,s.kt)("em",{parentName:"p"},"static site generators")," category. It has a number of features that made it attractive:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It has built-in support for search, localization and versioning"),(0,s.kt)("li",{parentName:"ul"},"It support MDX (JSX-flavored Markdown) for richer content options"),(0,s.kt)("li",{parentName:"ul"},"It has built-in support for themes and plugins to enhance default behaviors"),(0,s.kt)("li",{parentName:"ul"},"It is built with React, making it extensible with custom components")),(0,s.kt)("p",null,"Read their ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"documentation")," & visit their ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"showcase")," to see real-world examples. Now, let's dive into our tutorial for building the demo."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"1-setup-site"},"1. Setup Site"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Setup a Docusaurus site (",(0,s.kt)("inlineCode",{parentName:"li"},"classic")," theme) in a dedicated folder (",(0,s.kt)("inlineCode",{parentName:"li"},"www"),") in repo. The command automatically installs the required packages and their dependencies.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," npx create-docusaurus@latest www classic\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Let's see what was created for us. The output has been cleaned up for clarity.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ls -l www/\n\nREADME.md   \nbabel.config.js \nblog/              \ndocs/    \ndocusaurus.config.js               \nnode_modules/        \npackage-lock.json    \npackage.json           \nsidebars.js                 \nsrc/                  \nstatic/    \n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Let's preview the site locally, to validate this worked.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd www\nnpx docusaurus start\n\n[INFO] Starting the development server...\n[SUCCESS] Docusaurus website is running at http://localhost:3000/.\n")),(0,s.kt)("p",null,"You should see something like this - this is the default landing page for the scaffolded Docusaurus site."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Landing Page",src:a(5271).Z,width:"2190",height:"2026"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"The dev server supports hot reloading. Try making a minor change to the site source - for example edit ",(0,s.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," and change the ",(0,s.kt)("inlineCode",{parentName:"li"},"title")," to ",(0,s.kt)("strong",{parentName:"li"},'"My Static Web Apps Site"'),". You should see this in your site preview, instantly:")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Landing Page Reloaded",src:a(1009).Z,width:"1870",height:"2016"})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"You can now build a ",(0,s.kt)("strong",{parentName:"li"},"production-ready")," version of that site as follows. Note that the static files are generated in the ",(0,s.kt)("strong",{parentName:"li"},"build/")," directory.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'cd www/\nnpm run build\n..\n..\n[SUCCESS] Generated static files in "build".\n[INFO] Use `npm run serve` command to test your build locally.\n')),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"2-deploy-to-azure"},"2. Deploy To Azure"),(0,s.kt)("p",null,"Docusaurus is built using React - so you can use ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks"},"the same configuration settings")," for Docusaurus, when deploying to Azure Static Web Apps. "),(0,s.kt)("p",null,"You have three options to  get started:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"via browser with ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react"},"the Azure Portal quickstart")),(0,s.kt)("li",{parentName:"ul"},"via terminal with ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=vanilla-javascript"},"the Azure CLI quickstart")),(0,s.kt)("li",{parentName:"ul"},"via IDE with ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript"},"the VS Code Extension quickstart")," ")),(0,s.kt)("p",null,"If you prefer the first approach, click the button to go to the Azure portal, then follow the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react"},"quickstart")," guidance, but using ",(0,s.kt)("em",{parentName:"p"},"this")," project's details instead."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://portal.azure.com/?feature.customportal=false&WT.mc_id=30daysofswa-61155-cxall#create/Microsoft.StaticApp"},(0,s.kt)("img",{parentName:"a",src:"https://aka.ms/deploytoazurebutton",alt:"Deploy to Azure button"}))),(0,s.kt)("h2",{id:"3-using-vs-code"},"3... using VS Code"),(0,s.kt)("p",null,"I'll use the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript"},"Visual Studio Code extension")," to make this happen with just a few clicks. "),(0,s.kt)("p",null,"The whole process happens within the VS Code window, and takes just a few minutes from start to finish - ",(0,s.kt)("em",{parentName:"p"},"with guided prompts to help all the way"),". For convenience, I've documented it step-by-step with screenshots (images valid for ",(0,s.kt)("em",{parentName:"p"},"VS Code ver 1.66.2"),")."),(0,s.kt)("h2",{id:"31-install-extension"},"3.1 Install Extension"),(0,s.kt)("p",null,"Open Visual Studio Code (IDE) in the project folder for your repo. Install the ",(0,s.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps"},"Azure Static Web Apps extension"),' by visiting this page and clicking "Install".'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"VS Code Extension for SWA",src:a(9653).Z,width:"1682",height:"636"})),(0,s.kt)("h2",{id:"32-find-swa-panel"},"3.2. Find SWA Panel"),(0,s.kt)("p",null,"When extension is installed, you should see this window in your VS Code editor, confirming readiness for use."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"VS Code Extension Installed",src:a(672).Z,width:"1178",height:"278"})),(0,s.kt)("p",null,'You\'ll find the Azure Static Web Apps options listed in a  section under "Azure".'),(0,s.kt)("p",null,"The extension's ",(0,s.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps"},"documentation page")," and its ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode-azurestaticwebapps/wiki/Creating-a-Static-Web-App"},"GitHub")," page both provide detailed walkthroughs - check those for the most current process for this. We'll start by clicking the ",(0,s.kt)("em",{parentName:"p"},"Azure")," icon in the VS Code sidebar, then scrolling down till we see this ",(0,s.kt)("inlineCode",{parentName:"p"},"Static Web Apps")," section."),(0,s.kt)("h2",{id:"33-create-swa"},"3.3 Create SWA"),(0,s.kt)("p",null,'Click the "+" button to start the ',(0,s.kt)("strong",{parentName:"p"},"Create Static Web App")," workflow."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Activate SWA Extension",src:a(8579).Z,width:"410",height:"33"})),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},'"Create Static Web Apps"')," process will create (and commit) a GitHub actions workflow for you that will automate the build/deploy process for your site directly from your source on all future codebase changes."),(0,s.kt)("p",null,"So if you have ",(0,s.kt)("em",{parentName:"p"},"current pending codebase changes")," it will first prompt you to commit them before it does its magic! Let's get that done!"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Commit changes",src:a(3398).Z,width:"516",height:"392"})),(0,s.kt)("h2",{id:"34-configure-swa"},"3.4 Configure SWA"),(0,s.kt)("p",null,"The extension walks you through the five steps shown below, each with defaults already filled in for you. Customize them as shown, for this project:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Screenshot"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Step"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Step 1",src:a(295).Z,width:"998",height:"148"}),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specify project name")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Step 2",src:a(7678).Z,width:"998",height:"290"})," ",(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:"left"},"Pick Azure region to deploy it in")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Step 3",src:a(8454).Z,width:"1004",height:"620"}),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:"left"},"Pick framework used by app")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Step 4",src:a(8260).Z,width:"998",height:"178"}),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specify folder contaning site source")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Step 5",src:a(7812).Z,width:"998",height:"210"}),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:"left"},"Specify folder where site gets built by default")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"}),(0,s.kt)("td",{parentName:"tr",align:"left"})))),(0,s.kt)("h2",{id:"35-track-progress"},"3.5 Track Progress"),(0,s.kt)("p",null,"In a few seconds, you'll see this alert - this indicates that the workflow is ",(0,s.kt)("strong",{parentName:"p"},"creating and committing the GitHub Actions build/deploy workflow YAML")," for you. \ud83c\udf89"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Created",src:a(5587).Z,width:"760",height:"260"})),(0,s.kt)("p",null,"If you check your repository right now, you'll find the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fearlessly-dev/swa-demo-docusaurus/commit/1005a16c10bbbce51c8526a3c14253d1aec1a59c"},"relevant commit")," and the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fearlessly-dev/swa-demo-docusaurus/actions/runs/2313039968"},"activated Actions flow")," (labeled ",(0,s.kt)("inlineCode",{parentName:"p"},"ci: add Azure Static Web Apps worfklow"),") in progress."),(0,s.kt)("p",null,"You can also track the progress and configuration settings of your app right there in the VS Code Sidebar, under the ",(0,s.kt)("inlineCode",{parentName:"p"},"Static Web Apps")," section. ",(0,s.kt)("em",{parentName:"p"},"Look for the project name, and unroll contents..")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sidebar",src:a(3062).Z,width:"864",height:"450"})),(0,s.kt)("h2",{id:"36-browse-site"},"3.6 Browse Site!"),(0,s.kt)("p",null,"In a few second more, you'll get this alert:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Deployed",src:a(6692).Z,width:"766",height:"224"})),(0,s.kt)("p",null,"Now, go to the sidebar section for your project, right-click the name to see the available menu options:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Browse",src:a(1327).Z,width:"882",height:"410"})),(0,s.kt)("p",null,"Click \"Browse Site\" to be taken to your live deployed Docusaurus website! That's it! A few clicks, customizing defaults - and you're done!"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"4-customize-it"},"4. Customize It!"),(0,s.kt)("p",null,"At this point, you can make any changes to the site source, commit them - and watch the site get rebuilt and deployed without any further action from you!"),(0,s.kt)("p",null,"Here are some things to try:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Customize ",(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout"},"styles or layout")),(0,s.kt)("li",{parentName:"ul"},"Explore ",(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins"},"plugins")," for SEO, Search etc."),(0,s.kt)("li",{parentName:"ul"},"Try ",(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/react#using-jsx-in-markdown"},"create/use MDX")," in content")),(0,s.kt)("p",null,"I made a few example changes to the ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file to personalize the landing page content to reflect my needs. "),(0,s.kt)("p",null,"And I updated the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/css/custom.css")," file to reflect new theme colors for dark/light mode - and replaced the ",(0,s.kt)("inlineCode",{parentName:"p"},"logo.svg")," file."),(0,s.kt)("p",null,"Committing these changes should automatically rebuild and update the deployed site. Here is what they looked like in my local preview, before I committed the changes."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Light Mode"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Dark Mode"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Light Mode",src:a(8871).Z,width:"2294",height:"2012"})),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("img",{alt:"Dark Mode",src:a(2940).Z,width:"2294",height:"2028"}))))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\ud83c\udf89  ",(0,s.kt)("strong",{parentName:"p"},"Check it out: The site is ",(0,s.kt)("a",{parentName:"strong",href:"https://zealous-bay-0062c640f.1.azurestaticapps.net/"},"live on Azure Static Web Apps"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"exercise"},"Exercise"),(0,s.kt)("p",null,"You saw a few things I did to customize the site. Now it's your turn! Here are a few challenges you can try out:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Complete the tutorial to deploy your own site!"),(0,s.kt)("li",{parentName:"ul"},"Try Docusaurus customization: ",(0,s.kt)("strong",{parentName:"li"},"add an MDX component!")),(0,s.kt)("li",{parentName:"ul"},"Try SWA customization: ",(0,s.kt)("strong",{parentName:"li"},"add an API to fetch content!")),(0,s.kt)("li",{parentName:"ul"},"Try SWA customization: ",(0,s.kt)("strong",{parentName:"li"},"add auth using Twitter - use it!"))),(0,s.kt)("h2",{id:"resources"},"Resources:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," - documentation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/"},"Azure Static Web Apps (SWA)")," - documentation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://aka.ms/30DaysOfSWA"},"#30DaysOfSWA")," - guide tour to SWA.")))}m.isMDXComponent=!0},9212:function(e,t,a){t.Z=a.p+"assets/images/11-banner-a8fc4654511dc43a15deedffc1437a7f.png"},3398:function(e,t,a){t.Z=a.p+"assets/images/11-commit-e4ebcc5c88eab1fec6fb83a0440f8932.png"},9653:function(e,t,a){t.Z=a.p+"assets/images/11-extension-c840c2a0accf37e9736192e1958f12e5.png"},5271:function(e,t,a){t.Z=a.p+"assets/images/11-landing-d8ebc8da5a467aeb258b6ff21c4f5022.png"},1009:function(e,t,a){t.Z=a.p+"assets/images/11-reload-5e921244396d1bfeb1635ca0cbdacb66.png"},295:function(e,t,a){t.Z=a.p+"assets/images/11-swa-1-8cb3405b5fc4e11a4e3d383918af64e8.png"},7678:function(e,t,a){t.Z=a.p+"assets/images/11-swa-2-655a8fad3066c3bbf9cd2bbf83d3b786.png"},8454:function(e,t,a){t.Z=a.p+"assets/images/11-swa-3-817208d7936e610e563ae813343b9920.png"},8260:function(e,t,a){t.Z=a.p+"assets/images/11-swa-4-999a4b92b119f60873a0c11665a42e52.png"},7812:function(e,t,a){t.Z=a.p+"assets/images/11-swa-5-5175ad2d0baa4f50eb9cdd16a0a3757e.png"},1327:function(e,t,a){t.Z=a.p+"assets/images/11-swa-browse-af691ca869bdb57a2aedf4d6b8781761.png"},5587:function(e,t,a){t.Z=a.p+"assets/images/11-swa-created-e773df9ebd39489f9a193f29b8b11f45.png"},2940:function(e,t,a){t.Z=a.p+"assets/images/11-swa-dark-9ddedb1c4320bbdcd7108c1a171cba0c.png"},6692:function(e,t,a){t.Z=a.p+"assets/images/11-swa-deployed-8ad55a927b2f4270a5223c8c03cda7ab.png"},8871:function(e,t,a){t.Z=a.p+"assets/images/11-swa-light-d5adbe4e5651b33b64e27e41ac3cbced.png"},8579:function(e,t){t.Z="data:image/png;base64,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"},3062:function(e,t,a){t.Z=a.p+"assets/images/11-swa-sidebar-a5431359ccd9a9680923b809465aad7a.png"},672:function(e,t,a){t.Z=a.p+"assets/images/11-vscode-025c5fed556e79b72afe7ec0dbc49c41.png"}}]);