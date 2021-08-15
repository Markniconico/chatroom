(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"25650ec8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"578e6437"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/chatroom/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b06":function(e,t,n){},"39ae":function(e,t,n){"use strict";n("0b06")},"3fc3":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("5502"),a=(n("9a83"),n("f564")),o=n("1da1"),c=(n("96cf"),n("d3b7"),n("bc3a")),i=n.n(c),u=n("a78e"),s=n.n(u),f="Admin-Token";function d(){return s.a.get(f)}function m(e){return s.a.set(f,e)}function l(){return s.a.remove(f)}var b=n("a18c"),h=i.a.create({baseURL:"/api",timeout:3e3});h.interceptors.request.use((function(e){var t=L.state.user.token;return e.headers["Authorization"]=t?"Bearer ".concat(t):"",e.xsrfHeaderName="X-CSRF-TOKEN",e}),(function(e){return console.log(e),Promise.reject(e)})),h.interceptors.response.use((function(e){var t=e.data,n=t.code,r=t.message;return 200==n?t:401==n?(Object(a["a"])({type:"danger",message:r}),L.dispatch("user/resetToken"),b["a"].push("/login"),Promise.reject(new Error(r||"Error"))):(Object(a["a"])({type:"danger",message:r}),Promise.reject(new Error(r||"Error")))}),(function(e){return Object(a["a"])({type:"danger",message:e.message}),Promise.reject(e)}));var p=h;function v(e){return p({url:"/login",method:"POST",data:e})}function g(){return p({url:"/verify",method:"POST"})}function j(){return p({url:"/logout",method:"POST"})}var O={namespaced:!0,state:{token:d(),userinfo:{role:1,username:""}},getters:{},mutations:{setToken:function(e,t){e.token=t},setUserinfo:function(e,t){e.userinfo=t}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,r){v(t).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n("setToken",r.data),m(r.data),Object(a["a"])({type:"success",message:"登录成功"}),e();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return r(e)}))}))},verify:function(e,t){var n=e.commit;return new Promise((function(e,r){g(t).then((function(t){n("setUserinfo",t.data),e()})).catch((function(e){return r(e)}))}))},logOut:function(e){var t=e.commit;return new Promise((function(e,n){j().then((function(){Object(a["a"])({type:"success",message:"退出成功"}),t("setToken",""),t("setUserinfo",{role:1,username:""}),l(),e()})).catch((function(e){return n(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("setToken",""),l(),e()}))}}},y=n("8e27"),k=n.n(y),w=n("ca08"),P=n.n(w),_={namespaced:!0,state:{socket:null},getters:{getSocket:function(e){return e.socket}},mutations:{setSocket:function(e,t){e.socket=t}},actions:{connect:function(e){var t=e.commit;return new Promise((function(e,n){var r=k()("/",{path:"/socket.io",extraHeaders:{Authorization:"Bearer ".concat(P.a.get("Admin-Token"))}});r.on("connect",(function(){t("setSocket",r),Object(a["a"])({type:"success",message:"socket连接成功"}),r.emit("addRooms"),e()})),r.on("disconnect",(function(){console.log("自动重连ing"),r.connect()}))}))},createChat:function(e,t){e.commit;var n=e.state,r=t.chat_user_id;return new Promise((function(e,t){n.socket.emit("createChat",{chat_user_id:r},(function(n){var r=n.code,a=(n.message,n.data);200===r?e(a):t()}))}))},sendMessage:function(e,t){e.commit;var n=e.state,r=t.chat_id,a=t.message;return new Promise((function(e,t){n.socket.emit("sendMessage",{chat_id:r,message:a},(function(n){var r=n.code;n.message;200===r?e():t()}))}))}}};function x(){return p({url:"/chat/getChatList",methods:"GET"})}function S(){return p({url:"/chat/getUserList",methods:"GET"})}var T={namespaced:!0,state:{chatList:[],userList:[]},mutations:{Set_ChatList:function(e,t){e.chatList=t},Set_UserList:function(e,t){e.userList=t}},actions:{getChatList:function(e){var t=e.commit;return new Promise((function(e,n){x().then((function(r){var a=r.code,o=r.data,c=r.message;200===a?(t("Set_ChatList",o),e()):n(c)})).catch((function(e){n(e)}))}))},getUserList:function(e){var t=e.commit;return new Promise((function(e,n){S().then((function(r){var a=r.code,o=r.data,c=r.message;200===a?(t("Set_UserList",o),e()):n(c)})).catch((function(e){n(e)}))}))}}},L=t["a"]=Object(r["a"])({state:{},mutations:{},actions:{},modules:{user:O,socket:_,chat:T}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["S"])("data-v-5e5c843f");Object(r["B"])("data-v-5e5c843f");var o={class:"app"},c=Object(r["i"])(" Loading.... ");Object(r["z"])();var i=a((function(e,t,n,i,u,s){var f=Object(r["G"])("router-view");return Object(r["y"])(),Object(r["g"])("div",o,[(Object(r["y"])(),Object(r["g"])(r["b"],null,{default:a((function(){return[Object(r["j"])(f)]})),fallback:a((function(){return[c]})),_:1}))])})),u=(n("8e27"),n("ca08"),Object(r["k"])({name:"App",setup:function(){Object(r["v"])((function(){}))}}));n("39ae");u.render=i,u.__scopeId="data-v-5e5c843f";var s=u,f=n("a18c"),d=n("4360"),m=(n("5cfb"),n("b85c")),l=(n("615f"),n("92e2")),b=(n("6894"),n("e11d")),h=(n("e930"),n("8f80")),p=(n("0ec5"),n("21ab")),v=(n("3df5"),n("2830")),g=(n("8a58"),n("e41f")),j=(n("d82d"),n("7278")),O=(n("c194"),n("7744")),y=(n("66cf"),n("343b")),k=(n("4056"),n("44bf")),w=(n("ab71"),n("58e6")),P=(n("c3a6"),n("ad06")),_=(n("5246"),n("6b41")),x=(n("2994"),n("2bdd")),S=(n("a52c"),n("2ed4")),T=(n("537a"),n("ac28")),L=(n("be7f"),n("565f")),E=(n("38d5"),n("772a")),C=(n("91d5"),n("f0ca")),A=(n("66b9"),n("b650")),B=[A["b"],C["a"],E["a"],L["a"],T["a"],S["a"],x["a"],_["a"],P["b"],w["a"],k["b"],y["a"],O["b"],j["a"],g["b"],v["a"],p["a"],h["a"],b["a"],l["a"]],N=function(e){var t,n=Object(m["a"])(B);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.use(r)}}catch(a){n.e(a)}finally{n.f()}},U=(n("f5df1"),n("acc7"),Object(r["f"])(s));U.use(N).use(d["a"]).use(f["a"]).mount("#app")},7251:function(e,t,n){"use strict";n("3fc3")},a18c:function(e,t,n){"use strict";n("9a83");var r=n("f564"),a=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c=n("7a23"),i={class:"home"},u={class:"main"},s=Object(c["i"])("聊天"),f=Object(c["i"])("好友"),d=Object(c["i"])("我的");function m(e,t,n,r,a,o){var m=Object(c["G"])("nav-bar"),l=Object(c["G"])("router-view"),b=Object(c["G"])("van-tabbar-item"),h=Object(c["G"])("van-tabbar");return Object(c["y"])(),Object(c["g"])("div",i,[Object(c["j"])(m),Object(c["j"])("main",u,[Object(c["j"])(l)]),Object(c["j"])(h,{route:"",fixed:!1},{default:Object(c["Q"])((function(){return[Object(c["j"])(b,{to:"/chat",icon:"more"},{default:Object(c["Q"])((function(){return[s]})),_:1}),Object(c["j"])(b,{to:"/friend",icon:"friends"},{default:Object(c["Q"])((function(){return[f]})),_:1}),Object(c["j"])(b,{to:"/my",icon:"manager"},{default:Object(c["Q"])((function(){return[d]})),_:1})]})),_:1})])}var l=Object(c["S"])("data-v-fc6e00b0");Object(c["B"])("data-v-fc6e00b0");var b={class:"nav-bar"};Object(c["z"])();var h=l((function(e,t,n,r,a,o){var i=Object(c["G"])("van-nav-bar");return Object(c["y"])(),Object(c["g"])("div",b,[Object(c["j"])(i,{title:e.title,"right-text":"按钮"},{right:l((function(){return[]})),_:1},8,["title"])])}));function p(){var e=[{text:"发起群聊",icon:"chat"},{text:"添加好友",icon:"manager"},{text:"扫一扫",icon:"photo"},{text:"首付款",icon:"alipay"},{text:"帮助反馈",icon:"wechat-pay"}],t=[8,20],n=Object(c["D"])(!1),r=function(e){console.log(e)};return{actions:e,offset:t,showPopover:n,onSelect:r}}var v=Object(c["k"])({name:"NavBar",setup:function(){var e=Object(o["c"])(),t=Object(c["e"])((function(){return e.meta.title})),n=p(),r=n.actions,a=n.showPopover,i=n.onSelect,u=n.offset;return{title:t,actions:r,offset:u,onSelect:i,showPopover:a}}});n("d30e");v.render=h,v.__scopeId="data-v-fc6e00b0";var g=v,j=Object(c["k"])({name:"Home",components:{NavBar:g},setup:function(){console.log("home")}});n("7251");j.render=m;var O=j,y=n("4360"),k=[{path:"/",name:"Home",redirect:"/chat",component:O,children:[{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"ca20"))},meta:{requiresAuth:!0,title:"聊天",navBar:!0}},{path:"/friend",name:"friend",component:function(){return n.e("about").then(n.bind(null,"10bb"))},meta:{requiresAuth:!0,title:"好友",navBar:!0}},{path:"/my",name:"my",component:function(){return n.e("about").then(n.bind(null,"c7d6"))},meta:{requiresAuth:!0,title:"我的"}}]},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"ede4"))},meta:{title:"登录"}},{path:"/chatwindow",name:"ChatWindow",component:function(){return n.e("about").then(n.bind(null,"f270"))},meta:{title:"聊天"}},{path:"/:catchAll(.*)",name:"Page404",component:function(){return n.e("about").then(n.bind(null,"333e"))},meta:{title:"找不到你想去的页面"}}],w=Object(o["a"])({history:Object(o["b"])(),routes:k});w.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){var o,c,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=y["a"].state.user,c=o.token,i=o.userinfo,document.title=t.meta.title||"聊天室","/login"!==t.path){e.next=8;break}if(!c){e.next=5;break}return e.abrupt("return",a({path:"/chat",replace:!0}));case 5:a(),e.next=23;break;case 8:if(c){e.next=12;break}a({path:"/login",query:{redirect:t.fullPath}}),e.next=23;break;case 12:if(i.username){e.next=22;break}return e.next=15,y["a"].dispatch("user/verify");case 15:return e.next=17,y["a"].dispatch("socket/connect");case 17:u=y["a"].getters["socket/getSocket"],u&&u.on("error",(function(e){var t=e.code;e.message;401===t?(Object(r["a"])({type:"danger",message:"socket登录失效"}),y["a"].dispatch("user/resetToken"),w.push("/login")):500===t&&Object(r["a"])({type:"danger",message:"socket未知错误"})})),a(),e.next=23;break;case 22:a();case 23:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),w.afterEach((function(){}));t["a"]=w},ac9d:function(e,t,n){},acc7:function(e,t,n){},d30e:function(e,t,n){"use strict";n("ac9d")}});
//# sourceMappingURL=app.907032ab.js.map