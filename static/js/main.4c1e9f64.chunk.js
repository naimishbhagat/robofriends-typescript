(this["webpackJsonprobofriends-typescript"]=this["webpackJsonprobofriends-typescript"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(5),a=n.n(c),i=(n(11),n(4)),s=n.n(i),u=n(6),d=n(2),l=n(0),h=function(e){var t=e.id,n=e.name,r=e.email;return Object(l.jsxs)("div",{"data-testid":"robot-".concat(t),className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:r})]})]})},f=function(e){var t=e.robots;return Object(l.jsx)("div",{"data-testid":"robotList",children:t.map((function(e,n){return Object(l.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){var t=e.searchField,n=e.searchChange;return Object(l.jsx)("div",{className:"pa2","data-testid":"searchBox",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search","data-testid":"search",placeholder:"search robots",value:t,onChange:n})})};n(14);var j=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),a=Object(d.a)(c,2),i=a[0],h=a[1],j=Object(r.useState)(""),g=Object(d.a)(j,2),p=g[0],v=g[1],m=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:if(!(t.status>200&&t.status<500)){e.next=15;break}return e.abrupt("return",Promise.reject("Error 404"));case 15:return e.abrupt("return",Promise.reject("Some other error: "+t.status));case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0.message));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){var e=!0;return m().then((function(t){e&&o(t)})).catch((function(t){e&&h(t)})),function(){e=!1}}),[]),i)return Object(l.jsx)("div",{"data-testid":"error",children:i});var w=n.length>0?n.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})):[];return n.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(l.jsx)(b,{searchChange:function(e){v(e.target.value)},searchField:p}),Object(l.jsx)(f,{robots:w})]}):Object(l.jsx)("h1",{"data-testid":"loading",children:"Loading"})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))},p=(n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),g(),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-typescript",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-typescript","/service-worker.js");p?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.4c1e9f64.chunk.js.map