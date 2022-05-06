"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[687],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),h=r,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9863:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={slug:"securing-swa",title:"#05: Securing SWA",authors:["mitali","nitya"],tags:["swa","30days","core-concepts"],draft:!1},c=void 0,l={permalink:"/blog/securing-swa",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-06.md",source:"@site/blog/2021-05-06.md",title:"#05: Securing SWA",description:"Welcome to Week 1, Day 5 of #30DaysOfSWA!!",date:"2021-05-06T00:00:00.000Z",formattedDate:"May 6, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"core-concepts",permalink:"/blog/tags/core-concepts"}],readingTime:5.515,truncated:!1,authors:[{name:"Mitali Karmarkar",title:"Software Engineer @Microsoft",url:"https://twitter.com/KarmarkarMitali",imageURL:"https://pbs.twimg.com/profile_images/1292880690237718529/yFXe2D99_400x400.jpg",key:"mitali"},{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"securing-swa",title:"#05: Securing SWA",authors:["mitali","nitya"],tags:["swa","30days","core-concepts"],draft:!1},nextItem:{title:"#04: Configuring SWA",permalink:"/blog/configuring-swa"}},u={authorsImageUrls:[void 0,void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Securing SWA",id:"securing-swa",level:2},{value:"Managed Auth",id:"managed-auth",level:2},{value:"Custom Auth",id:"custom-auth",level:2},{value:"User Roles",id:"user-roles",level:2},{value:"Role-Based Auth",id:"role-based-auth",level:2},{value:"Access User Info",id:"access-user-info",level:2},{value:"How-Tos: Watch It!",id:"how-tos-watch-it",level:2},{value:"Exercise: Try it!",id:"exercise-try-it",level:2},{value:"Useful Resources",id:"useful-resources",level:2}],m={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 1, Day 5")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"So far, we've learnt to build/deploy a basic web app, add a serverless API endpoint and customize the configuration settings for both application behaviors and build workflows. But we forgot one thing - the ",(0,o.kt)("strong",{parentName:"p"},"user"),"! To create ",(0,o.kt)("em",{parentName:"p"},"differentiated")," experiences for users, we need ways to ",(0,o.kt)("strong",{parentName:"p"},"identify them")," and ",(0,o.kt)("strong",{parentName:"p"},"understand their role")," in the application context. We can then use that information to ",(0,o.kt)("strong",{parentName:"p"},"manage user access to application features")," (role-based authorization) as well as ",(0,o.kt)("strong",{parentName:"p"},"application access to user information")," (once authenticated)."),(0,o.kt)("p",null,"Thankfully, Azure Static Web Apps makes this fairly painless. Let's see how."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do we secure a SWA?"),(0,o.kt)("li",{parentName:"ul"},"Managed authentication"),(0,o.kt)("li",{parentName:"ul"},"Custom authentication"),(0,o.kt)("li",{parentName:"ul"},"Managing user roles"),(0,o.kt)("li",{parentName:"ul"},"Role-based authorization"),(0,o.kt)("li",{parentName:"ul"},"Accessing user information")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(216).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"securing-swa"},"Securing SWA"),(0,o.kt)("p",null,"What does it mean to ",(0,o.kt)("em",{parentName:"p"},"secure")," a Static Web App? It's three things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Knowing User Identity")," - Having a way to determine the identity of the user using an authentication service or provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Knowing User Roles")," - Understanding what persona the user is taking on when (using the application), and customizing the experience accordingly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managing User Access")," - Making sure the authenticaton information is seamlessly accessible to all SWA components, allowing them to enforce rules that allow only authorized users or roles to access resources.")),(0,o.kt)("p",null,"Let's dive into the three concepts that tackle these needs: ",(0,o.kt)("strong",{parentName:"p"},"Authentication"),", ",(0,o.kt)("strong",{parentName:"p"},"Role Assignment")," and ",(0,o.kt)("strong",{parentName:"p"},"Role-Based Authorization"),"."),(0,o.kt)("h2",{id:"managed-auth"},"Managed Auth"),(0,o.kt)("p",null,"Azure Static Web Apps comes with a default ",(0,o.kt)("strong",{parentName:"p"},"streamlined authentication experience")," that supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"pre-configured providers"),": Twitter, GitHub, Azure Active Directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"pre-assigned roles"),": anonymous (guest) or authenticated (on login)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"customizable rules"),": defined for routes, in ",(0,o.kt)("inlineCode",{parentName:"li"},"staticwebapps.config.json"))),(0,o.kt)("p",null,"All pre-configured providers are active by default, with their own pre-defined API endpoints for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#login"},"Login"),", and a shared API endpoint for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#logout"},"Logout"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Want to block a specific pre-configured provider? Just ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#block-an-authentication-provider"},"add a blocking rule")," to their login route to ensure no user is allowed access to it."),(0,o.kt)("li",{parentName:"ul"},"Want to send users to custom pages after successful or failed login attempts? Use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#post-login-redirect"},"query parameters and route rules")," to make this work.")),(0,o.kt)("p",null,"This is the default ",(0,o.kt)("em",{parentName:"p"},"managed authentication")," experience. But what if you want more flexibility with the registration process (used by a pre-configured provider) or want to add a new one (custom provider)?"),(0,o.kt)("h2",{id:"custom-auth"},"Custom Auth"),(0,o.kt)("p",null,"This is where ",(0,o.kt)("em",{parentName:"p"},"custom authentication")," options come in. "),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=aad#configure-a-custom-identity-provider"},"configure custom providers")," if they support the ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," standard. By configuring at least one custom provider, you are effectively disabling the pre-configured provider options."),(0,o.kt)("p",null,"How do you configure them? Just add the provider's configuration information to the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"staticwebapps.config.json")," file. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=apple#configure-a-custom-identity-provider"},"the documentation")," for the relevant configuration properties defined for custom providers like ",(0,o.kt)("em",{parentName:"p"},"Apple"),", ",(0,o.kt)("em",{parentName:"p"},"Facebook"),", ",(0,o.kt)("em",{parentName:"p"},"Google")," etc. ",(0,o.kt)("strong",{parentName:"p"},"This is also a good example for using Application Settings (environment variables)")," for representing sensitive configuration information in a privacy-preserving way."),(0,o.kt)("p",null,"Azure Static Web Apps makes custom registrations easy by providing standard route patterns for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=apple#authentication-callbacks"},(0,o.kt)("em",{parentName:"a"},"Login"),", ",(0,o.kt)("em",{parentName:"a"},"Logout")," and ",(0,o.kt)("em",{parentName:"a"},"User Profile"))," requests, as well as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=apple#authentication-callbacks"},"redirect URLs")," for authentication callbacks (from the custom provider) on login/logout."),(0,o.kt)("h2",{id:"user-roles"},"User Roles"),(0,o.kt)("p",null,"There are three key concepts you need to know in this context:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every Static Web Apps user has one or more roles assigned to them."),(0,o.kt)("li",{parentName:"ul"},'There are 2 built-in roles ("anonymous" and "authenticated")'),(0,o.kt)("li",{parentName:"ul"},"You can define custom roles & assign users by-invite or by-function.")),(0,o.kt)("p",null,"Let's review these quickly. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All users accessing a Static Web App are in an ",(0,o.kt)("em",{parentName:"li"},"anonymous")," role (guest) until authenticated by a pre-configured or custom provider."),(0,o.kt)("li",{parentName:"ul"},"Once authenticated, they have an ",(0,o.kt)("em",{parentName:"li"},"authenticated")," role but can now be ",(0,o.kt)("em",{parentName:"li"},"assigned custom roles")," by invitation (proactive) or by function (reactive)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proactive invitations")," can be configured and sent from the Azure Portal, using provider-specific email addresses for the user. Users now click on the invite link to login with that custom role assigned automatically."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reactive functions")," defer assignment to post-login, using an Azure Function that dynamically returns an assigned role (or roles) to the user on being given the authenticated user details.")),(0,o.kt)("p",null,"The latter approach offers more flexibility, allowing you to use the function handler to invoke another service (like ",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/graph"},"Microsoft Graph"),") to make the role-assignment decision for you. Read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=function#role-management"},(0,o.kt)("strong",{parentName:"a"},"Role Management"))," for more details - including steps to update role assignments or remove users from a role."),(0,o.kt)("h2",{id:"role-based-auth"},"Role-Based Auth"),(0,o.kt)("p",null,"Once the user has been assigned a role, ",(0,o.kt)("em",{parentName:"p"},"managing user access")," based on that assignment becomes easy using the built-in support for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#routes"},"routing rules")," based on the ",(0,o.kt)("strong",{parentName:"p"},"allowedRoles")," property attached to each ",(0,o.kt)("inlineCode",{parentName:"p"},"route"),". For example, the following configuration setting (in ",(0,o.kt)("inlineCode",{parentName:"p"},"staticwebapps.config.json"),") would restrict access to all routes that start with ",(0,o.kt)("inlineCode",{parentName:"p"},"/profile*")," to ",(0,o.kt)("em",{parentName:"p"},"only authenticated users"),".\n)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "route": "/profile*",\n  "allowedRoles": ["authenticated"]\n}\n')),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#securing-routes-with-roles"},"securing routes with rules")," to understand various usage scenarios and configuration settings to enforce them."),(0,o.kt)("h2",{id:"access-user-info"},"Access User Info"),(0,o.kt)("p",null,"One of the benefits of Azure Static Web Apps' seamless integration of application and API capabilities is that ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript"},"authenticated user information can be accessed transparently")," in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript#direct-access-endpoint"},"direct access endpoint")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"/.auth/me")," that is automatically provisioned with the user's information when authenticated."),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript#api-functions"},"API functions")," with a ",(0,o.kt)("inlineCode",{parentName:"li"},"fetch")," call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/xxx")," endpoint, where ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx")," is a named function you implement to return user information. ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-tos-watch-it"},"How-Tos: Watch It!"),(0,o.kt)("p",null,"Prefer a Video Walkthrough to understand the process? We have you covered with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/"},"Azure Tips And Tricks: Static Web Apps")," series. Check out the following videos:"),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=how-to-integrate-authentication-in-azure-static-web-apps-8-of-16--azure-tips-and-tricks-static-web-a"}),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=how-to-configure-authorization-in-azure-static-web-apps-9-of-16--azure-tips-and-tricks-static-web-ap"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"exercise-try-it"},"Exercise: Try it!"),(0,o.kt)("p",null,"One popular feature that modern web apps often support is the ability to assign a custom role to an authenticated user (based on some identifiable context) and then regulate their access to various routes or features in the application based on that assigned role. ",(0,o.kt)("strong",{parentName:"p"},"How can we make that happen in Static Web Apps?")),(0,o.kt)("p",null,"There's a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/assign-roles-microsoft-graph"},(0,o.kt)("strong",{parentName:"a"},"tutorial"))," that teaches you how! "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authenticate the user using the managed ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis"},"Azure Active Directory")," API endpoint."),(0,o.kt)("li",{parentName:"ul"},"Query ",(0,o.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/graph"},"Microsoft Graph")," to determine their Active Directory group membership."),(0,o.kt)("li",{parentName:"ul"},"Use that membership to assign them a custom role.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Challenge Yourself!")," "),(0,o.kt)("p",null,"Update the application behavior in the ",(0,o.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json")," file to restrict user access to specific routes by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"allowedRoles")," for those routes. Test what happens when the custom role above is added, and then removed, from the collection of allowedRoles."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"useful-resources"},"Useful Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations"},"Authentication and Authorization in SWA")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript"},"Accessing authenticated user information in SWA")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=aad"},"Implement custom authentication in SWA")),(0,o.kt)("li",{parentName:"ol"},"Tutorial: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/assign-roles-microsoft-graph"},"Assign custom roles using Microsoft Graph and AAD")),(0,o.kt)("li",{parentName:"ol"},"Video Series: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/"},"Azure Tips And Tricks - Static Web Apps"))))}h.isMDXComponent=!0},216:function(e,t,a){t.Z=a.p+"assets/images/05-banner-58c09cd248a074a90780339236c54413.png"}}]);