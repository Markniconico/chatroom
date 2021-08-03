(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8c5cb033"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"4d2cbf90"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],b.parentNode.removeChild(b),n(c)},b.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chatroom/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"39ae":function(e,t,n){"use strict";n("6d0a")},4360:function(e,t,n){"use strict";var r=n("5502"),a=(n("9a83"),n("f564")),o=n("1da1"),c=(n("96cf"),n("d3b7"),n("bc3a")),u=n.n(c),i=n("a78e"),s=n.n(i),f="Admin-Token";function d(){return s.a.get(f)}function b(e){return s.a.set(f,e)}function l(){return s.a.remove(f)}var m=n("a18c"),p=u.a.create({baseURL:"/api",timeout:3e3});p.interceptors.request.use((function(e){var t=T.state.user.token;return e.headers["Authorization"]=t?"Bearer ".concat(t):"",e.xsrfHeaderName="X-CSRF-TOKEN",e}),(function(e){return console.log(e),Promise.reject(e)})),p.interceptors.response.use((function(e){var t=e.data,n=t.code,r=t.message;return 200==n?t:401==n?(Object(a["a"])({type:"danger",message:r}),T.dispatch("user/resetToken"),m["a"].push("/login"),Promise.reject(new Error(r||"Error"))):(Object(a["a"])({type:"danger",message:r}),Promise.reject(new Error(r||"Error")))}),(function(e){return Object(a["a"])({type:"danger",message:e.message}),Promise.reject(e)}));var h=p;function v(e){return h({url:"/login",method:"POST",data:e})}function g(){return h({url:"/verify",method:"POST"})}function j(){return h({url:"/logout",method:"POST"})}var O={namespaced:!0,state:{token:d(),userinfo:{role:1,username:""}},getters:{},mutations:{setToken:function(e,t){e.token=t},setUserinfo:function(e,t){e.userinfo=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){v(t).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n("setToken",r.data),b(r.data),Object(a["a"])({type:"success",message:"登录成功"}),e();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return r(e)}))}))},verify:function(e,t){var n=e.commit;return new Promise((function(e,r){g(t).then((function(t){n("setUserinfo",t.data),e()})).catch((function(e){return r(e)}))}))},logOut:function(e){var t=e.commit;return new Promise((function(e,n){j().then((function(){Object(a["a"])({type:"success",message:"退出成功"}),t("setToken",""),l(),e()})).catch((function(e){return n(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("setToken",""),l(),e()}))}}},y=n("8e27"),k=n.n(y),w=n("ca08"),x=n.n(w),P={namespaced:!0,state:{socket:null},getters:{getSocket:function(e){return e.socket}},mutations:{setSocket:function(e,t){e.socket=t}},actions:{connect:function(e){var t=e.commit;return new Promise((function(e,n){var r=k()("/",{path:"/socket.io",extraHeaders:{Authorization:"Bearer ".concat(x.a.get("Admin-Token"))}});r.on("connect",(function(){t("setSocket",r),Object(a["a"])({type:"success",message:"socket连接成功"}),r.emit("addRooms"),e()})),r.on("disconnect",(function(){console.log("自动重连ing"),r.connect()}))}))},sendMessage:function(e,t){e.commit;var n=e.state,r=t.chat_id,a=t.message;return new Promise((function(e,t){n.socket.emit("sendMessage",{chat_id:r,message:a},(function(n){var r=n.code;n.message;200===r?e():t()}))}))}}};function S(){return h({url:"/chat/getChatList",methods:"GET"})}var _={namespaced:!0,state:{chatList:[]},mutations:{Set_ChatList:function(e,t){e.chatList=t}},actions:{getChatList:function(){return new Promise((function(e,t){S().then((function(t){e(t)})).catch((function(e){t(e)}))}))}}},T=t["a"]=Object(r["a"])({state:{},mutations:{},actions:{},modules:{user:O,socket:P,chat:_}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["Q"])("data-v-5e5c843f");Object(r["A"])("data-v-5e5c843f");var o={class:"app"},c=Object(r["i"])(" Loading.... ");Object(r["y"])();var u=a((function(e,t,n,u,i,s){var f=Object(r["F"])("router-view");return Object(r["x"])(),Object(r["g"])("div",o,[(Object(r["x"])(),Object(r["g"])(r["b"],null,{default:a((function(){return[Object(r["j"])(f)]})),fallback:a((function(){return[c]})),_:1}))])})),i=(n("8e27"),n("ca08"),Object(r["k"])({name:"App",setup:function(){Object(r["u"])((function(){}))}}));n("39ae");i.render=u,i.__scopeId="data-v-5e5c843f";var s=i,f=n("a18c"),d=n("4360"),b=(n("5cfb"),n("b85c")),l=(n("e930"),n("8f80")),m=(n("0ec5"),n("21ab")),p=(n("3df5"),n("2830")),h=(n("8a58"),n("e41f")),v=(n("d82d"),n("7278")),g=(n("c194"),n("7744")),j=(n("66cf"),n("343b")),O=(n("4056"),n("44bf")),y=(n("ab71"),n("58e6")),k=(n("c3a6"),n("ad06")),w=(n("5246"),n("6b41")),x=(n("2994"),n("2bdd")),P=(n("a52c"),n("2ed4")),S=(n("537a"),n("ac28")),_=(n("be7f"),n("565f")),T=(n("38d5"),n("772a")),A=(n("91d5"),n("f0ca")),E=(n("66b9"),n("b650")),C=[E["b"],A["a"],T["a"],_["a"],S["a"],P["a"],x["a"],w["a"],k["b"],y["a"],O["b"],j["a"],g["b"],v["a"],h["b"],p["a"],m["a"],l["a"]],L=function(e){var t,n=Object(b["a"])(C);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.use(r)}}catch(a){n.e(a)}finally{n.f()}},F=(n("f5df1"),n("acc7"),Object(r["f"])(s));F.use(L).use(d["a"]).use(f["a"]).mount("#app")},"5db9":function(e,t,n){},"6d0a":function(e,t,n){},a18c:function(e,t,n){"use strict";n("9a83");var r=n("f564"),a=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c=n("7a23"),u={class:"home"},i={class:"main"},s=Object(c["i"])("聊天"),f=Object(c["i"])("好友"),d=Object(c["i"])("我的");function b(e,t,n,r,a,o){var b=Object(c["F"])("nav-bar"),l=Object(c["F"])("router-view"),m=Object(c["F"])("van-tabbar-item"),p=Object(c["F"])("van-tabbar");return Object(c["x"])(),Object(c["g"])("div",u,[Object(c["j"])(b),Object(c["j"])("main",i,[Object(c["j"])(l)]),Object(c["j"])(p,{route:"",fixed:!1},{default:Object(c["O"])((function(){return[Object(c["j"])(m,{to:"/chat",icon:"more",badge:"20"},{default:Object(c["O"])((function(){return[s]})),_:1}),Object(c["j"])(m,{to:"/friend",icon:"friends",dot:""},{default:Object(c["O"])((function(){return[f]})),_:1}),Object(c["j"])(m,{to:"/my",icon:"manager"},{default:Object(c["O"])((function(){return[d]})),_:1})]})),_:1})])}var l=Object(c["Q"])("data-v-730f3ce4");Object(c["A"])("data-v-730f3ce4");var m={class:"nav-bar"};Object(c["y"])();var p=l((function(e,t,n,r,a,o){var u=Object(c["F"])("van-icon"),i=Object(c["F"])("van-popover"),s=Object(c["F"])("van-nav-bar");return Object(c["x"])(),Object(c["g"])("div",m,[Object(c["j"])(s,{title:e.title,"right-text":"按钮"},{right:l((function(){return[Object(c["j"])(u,{name:"search",color:"#000",size:".5rem"}),Object(c["j"])(i,{show:e.showPopover,"onUpdate:show":t[1]||(t[1]=function(t){return e.showPopover=t}),onSelect:e.onSelect,theme:"dark",actions:e.actions,color:"#fff",size:"16",teleport:"body",placement:"bottom-end",offset:e.offset},{reference:l((function(){return[Object(c["j"])(u,{name:"add-o",color:"#000",size:".5rem"})]})),_:1},8,["show","onSelect","actions","offset"])]})),_:1},8,["title"])])}));function h(){var e=[{text:"发起群聊",icon:"chat"},{text:"添加好友",icon:"manager"},{text:"扫一扫",icon:"photo"},{text:"首付款",icon:"alipay"},{text:"帮助反馈",icon:"wechat-pay"}],t=[8,20],n=Object(c["C"])(!1),r=function(e){console.log(e)};return{actions:e,offset:t,showPopover:n,onSelect:r}}var v=Object(c["k"])({name:"NavBar",setup:function(){var e=Object(o["c"])(),t=Object(c["e"])((function(){return e.meta.title})),n=h(),r=n.actions,a=n.showPopover,u=n.onSelect,i=n.offset;return{title:t,actions:r,offset:i,onSelect:u,showPopover:a}}});n("e3b7");v.render=p,v.__scopeId="data-v-730f3ce4";var g=v,j=Object(c["k"])({name:"Home",components:{NavBar:g},setup:function(){console.log("home")}});n("bfcd");j.render=b;var O=j,y=n("4360"),k=[{path:"/",name:"Home",redirect:"/chat",component:O,children:[{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"ca20"))},meta:{requiresAuth:!0,title:"聊天",navBar:!0}},{path:"/friend",name:"friend",component:function(){return n.e("about").then(n.bind(null,"10bb"))},meta:{requiresAuth:!0,title:"好友",navBar:!0}},{path:"/my",name:"my",component:function(){return n.e("about").then(n.bind(null,"c7d6"))},meta:{requiresAuth:!0,title:"我的"}}]},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"ede4"))},meta:{title:"登录"}},{path:"/chatwindow",name:"ChatWindow",component:function(){return n.e("about").then(n.bind(null,"f270"))},meta:{title:"聊天"}},{path:"/:catchAll(.*)",name:"Page404",component:function(){return n.e("about").then(n.bind(null,"333e"))},meta:{title:"找不到你想去的页面"}}],w=Object(o["a"])({history:Object(o["b"])(),routes:k});w.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){var o,c,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=y["a"].state.user,c=o.token,u=o.userinfo,document.title=t.meta.title||"聊天室","/login"!==t.path){e.next=8;break}if(!c){e.next=5;break}return e.abrupt("return",a({path:"/chat",replace:!0}));case 5:a(),e.next=23;break;case 8:if(c){e.next=12;break}a({path:"/login",query:{redirect:t.fullPath}}),e.next=23;break;case 12:if(u.username){e.next=22;break}return e.next=15,y["a"].dispatch("user/verify");case 15:return e.next=17,y["a"].dispatch("socket/connect");case 17:i=y["a"].getters["socket/getSocket"],i&&i.on("error",(function(e){var t=e.code;e.message;401===t?(Object(r["a"])({type:"danger",message:"socket登录失效"}),y["a"].dispatch("user/resetToken"),w.push("/login")):500===t&&Object(r["a"])({type:"danger",message:"socket未知错误"})})),a(),e.next=23;break;case 22:a();case 23:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),w.afterEach((function(){}));t["a"]=w},acc7:function(e,t,n){},bfcd:function(e,t,n){"use strict";n("decc")},decc:function(e,t,n){},e3b7:function(e,t,n){"use strict";n("5db9")}});
//# sourceMappingURL=app.2c0fcd38.js.map