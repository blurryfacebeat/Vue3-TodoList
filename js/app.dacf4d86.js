(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({List:"List"}[t]||t)+"."+{List:"5c3aad7e"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={List:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({List:"List"}[t]||t)+"."+{List:"43f32d10"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===i))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],f=u.getAttribute("data-href");if(f===r||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=s);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=o(t);var l=new Error;u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Vue3-TodoList/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1568:function(t,e,n){},4158:function(t,e,n){},"4b4f":function(t,e,n){"use strict";n("8257")},"532e":function(t,e,n){"use strict";n("1568")},8257:function(t,e,n){},9903:function(t,e,n){"use strict";n("4158")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e,n,a,i,s){var o=Object(r["D"])("router-view"),c=Object(r["D"])("layout");return Object(r["u"])(),Object(r["f"])(c,null,{default:Object(r["K"])((function(){return[Object(r["k"])(o)]})),_:1})}var i=n("bee2"),s=n("d4ec"),o=n("262e"),c=n("2caf"),u=n("9ab4"),f=n("ce1f");function l(t,e,n,a,i,s){return Object(r["u"])(),Object(r["h"])("div",{class:Object(r["q"])(["layout",{light:t.isLightTheme}])},[Object(r["C"])(t.$slots,"default",{},void 0,!0)],2)}var d=n("5502"),h=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.store=Object(d["b"])(),t}return Object(i["a"])(n,[{key:"isLightTheme",get:function(){return"light"===this.store.state.settings.theme}}]),n}(f["b"]);h=Object(u["a"])([Object(f["a"])({})],h);var b=h,p=(n("9903"),n("6b0d")),m=n.n(p);const v=m()(b,[["render",l],["__scopeId","data-v-248d5dd8"]]);var O=v,g=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n)}(f["b"]);g=Object(u["a"])([Object(f["a"])({components:{Layout:O},created:function(){document.title="TodoList"}})],g);var j=g;n("532e");const y=m()(j,[["render",a]]);var k=y,L=n("6c02"),T=(n("d3b7"),n("3ca3"),n("ddb0"),function(t){return Object(r["y"])("data-v-758c8aa8"),t=t(),Object(r["v"])(),t}),w={class:"home"},S=T((function(){return Object(r["i"])("h1",null,"Todo List",-1)})),_=Object(r["j"])("Go to tasks");function C(t,e,n,a,i,s){var o=Object(r["D"])("router-link");return Object(r["u"])(),Object(r["h"])("div",w,[S,Object(r["k"])(o,{to:"/list"},{default:Object(r["K"])((function(){return[_]})),_:1})])}var A=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n)}(f["b"]);A=Object(u["a"])([Object(f["a"])({})],A);var N=A;n("4b4f");const P=m()(N,[["render",C],["__scopeId","data-v-758c8aa8"]]);var E=P,F=[{path:"/",name:"Home",component:E},{path:"/list",name:"List",component:function(){return n.e("List").then(n.bind(null,"bc10"))}}],x=Object(L["a"])({history:Object(L["b"])("/Vue3-TodoList/"),routes:F}),J=x,I=(n("a434"),n("4de4"),n("e9c4"),function(){function t(e){Object(s["a"])(this,t),this.key=e}return Object(i["a"])(t,[{key:"set",value:function(t){localStorage.setItem(this.key,t)}},{key:"get",value:function(){return localStorage.getItem(this.key)}},{key:"remove",value:function(){localStorage.removeItem(this.key)}}]),t}()),D=new I("tasks"),M={namespaced:!0,state:function(){return{tasksList:D.get()?JSON.parse(D.get()):[],filter:"All"}},mutations:{addTask:function(t,e){var n=t.tasksList;n.push(e)},deleteTask:function(t,e){var n=t.tasksList;n.splice(e,1)},finishTask:function(t,e){var n=t.tasksList;n[e].isFinished=!n[e].isFinished},clearCompleted:function(t){t.tasksList=t.tasksList.filter((function(t){return!t.isFinished}))},changeFilter:function(t,e){t.filter=e}},actions:{addTask:function(t,e){var n=t.commit,r=t.state;n("addTask",e),D.set(JSON.stringify(r.tasksList))},deleteTask:function(t,e){var n=t.commit,r=t.state;n("deleteTask",e),D.set(JSON.stringify(r.tasksList))},finishTask:function(t,e){var n=t.commit,r=t.state;n("finishTask",e),D.set(JSON.stringify(r.tasksList))},clearCompleted:function(t){var e=t.commit,n=t.state;e("clearCompleted"),e("changeFilter","All"),D.set(JSON.stringify(n.tasksList))}},getters:{filteredTasks:function(t){var e=t.tasksList,n=t.filter;switch(n){case"All":return e;case"Active":return e.filter((function(t){return!t.isFinished}));case"Finished":return e.filter((function(t){return t.isFinished}))}}}},q=new I("theme"),B={namespaced:!0,state:function(){return{theme:q.get()?q.get():"dark"}},mutations:{changeTheme:function(t,e){t.theme=e}},actions:{changeTheme:function(t,e){var n=t.commit;t.state;n("changeTheme",e),q.set(e)}}},K=Object(d["a"])({modules:{tasks:M,settings:B}});Object(r["e"])(k).use(K).use(J).mount("#app")}});
//# sourceMappingURL=app.dacf4d86.js.map