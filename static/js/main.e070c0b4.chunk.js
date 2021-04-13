(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,s,u,l=n(0),d=n.n(l),j=n(22),h=n.n(j),b=(n(41),n(13)),f=n.n(b),p=n(19),O=n(36),x=n(15),m=n(21),v=n(5),g=n(2),y=n(3),w=y.a.button(r||(r=Object(g.a)(["\n  padding: 0.5rem;\n  background-color: #cba5fa;\n  border-radius: 3px;\n  border: none;\n  color: #673a9f;\n"]))),T=y.a.section(a||(a=Object(g.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),S=y.a.header(c||(c=Object(g.a)(["\n  position: sticky;\n  top: 0;\n  padding: 0;\n\n  background-color: #cba5fa;\n  color: #fff;\n"]))),C=Object(y.a)(T)(i||(i=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n"]))),E=y.a.nav(o||(o=Object(g.a)([""]))),_=y.a.ol(s||(s=Object(g.a)(["\n  display: flex;\n  list-style-type: none;\n"]))),k=y.a.li(u||(u=Object(g.a)(["\n  &:not(:first-child) {\n    margin-left: 1rem;\n  }\n"]))),D=n(1);var F,W,P,A,N=function(){return Object(D.jsx)(S,{children:Object(D.jsxs)(C,{children:[Object(D.jsx)("h2",{children:"Herolo Weather Task"}),Object(D.jsx)(E,{children:Object(D.jsxs)(_,{children:[Object(D.jsx)(k,{children:Object(D.jsx)(m.b,{exact:!0,activeClassName:"selected",to:"./",children:"Home"})}),Object(D.jsx)(k,{children:Object(D.jsx)(m.b,{activeClassName:"selected",to:"./favorites",children:"Favorites"})})]})})]})})},R=n(33),L=n.n(R),K=y.a.section(F||(F=Object(g.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n\n  margin: 3rem auto;\n"]))),H=y.a.input(W||(W=Object(g.a)(["\n  padding: 0.5rem;\n  border-radius: 3px;\n  border-color: #cba5fa;\n  margin-right: 0.5rem;\n  min-width: 25vw;\n"]))),I=y.a.ul(P||(P=Object(g.a)(["\n  position: absolute;\n  top: 1.3rem;\n  list-style-type: none;\n  background: #fffa;\n  width: 25vw;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n"]))),U=y.a.li(A||(A=Object(g.a)(["\n  padding: 0.5rem;\n"])));function V(e){return fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/saar-davidson-11-04-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY)).then((function(e){if(e.ok)return e.json();throw new Error("Could not fetch current weather.")})).catch((function(e){throw new Error("Could not fetch current weather.")}))}function z(e){return fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/saar-davidson-11-04-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY)).then((function(e){if(e.ok)return e.json();throw new Error("Could not fetch the next 5 days weather.")})).catch((function(e){throw new Error("Could not fetch the next 5 days weather.")}))}function B(e){return fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/saar-davidson-11-04-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&q=").concat(e,"\n")).then((function(e){if(console.log(e),e.ok)return e.json();throw new Error("Could not fetch suggestions.")})).catch((function(e){throw new Error("Could not fetch suggestions.")}))}var M=function(e){var t=e.suggestions,n=e.input,r=e.setLocation,a=e.emptySuggestions;return!!t&&Object(D.jsx)(I,{children:t.map((function(e){return Object(D.jsx)(U,{onClick:function(){n.current.value=e.LocalizedName,r({id:e.Key,name:e.LocalizedName}),a()},children:e.LocalizedName},e.Key)}))})},Y=n(6),J=n(18),q=Object(J.b)({name:"weather",initialState:{weather:{location:{},next5Days:[],currentWeather:{}}},reducers:{changeLocation:function(e,t){e.weather.location=t.payload},changeNext5Days:function(e,t){e.weather.next5Days=t.payload.DailyForecasts},changeCurrentWeather:function(e,t){e.weather.currentWeather&&(e.weather.currentWeather={temperature:t.payload[0].Temperature.Metric.Value,weatherText:t.payload[0].WeatherText})}}}),$=q.actions,G=$.changeLocation,Q=$.changeNext5Days,X=$.changeCurrentWeather,Z=function(e){return e.weather.weather.next5Days},ee=function(e){return e.weather.weather},te=q.reducer;var ne,re=function(e){var t=e.errorHandler,n=Object(l.useState)([]),r=Object(x.a)(n,2),a=r[0],c=r[1],i=Object(l.useState)(null),o=Object(x.a)(i,2),s=o[0],u=o[1],d=Object(l.useRef)(null),j=Object(Y.b)();function h(){return(h=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(d.current.value);case 3:t=e.sent,c(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message),b(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(e){c([]),t(e)}function O(){return(O=Object(p.a)(f.a.mark((function e(t){var n,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null==s&&u({id:null===(n=a.filter((function(e){return e.LocalizedName.toLowerCase()===t.target[0].value.toLowerCase()}))[0])||void 0===n?void 0:n.Key,name:t.target[0].value}),null!=s&&null!=s.id){e.next=4;break}return e.abrupt("return",b("Wrong search"));case 4:return e.prev=4,e.next=7,z(s.id);case 7:return r=e.sent,e.next=10,V(s.id);case 10:i=e.sent,j(G(s)),j(Q(r)),j(X(i)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),b(e.t0.message);case 19:c([]),u(null);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}return Object(D.jsx)(K,{children:Object(D.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(D.jsx)(H,{type:"text",placeholder:"City",ref:d,onChange:L.a.debounce((function(){return h.apply(this,arguments)}),1e3)}),Object(D.jsx)(w,{children:"Check weather"}),Object(D.jsx)(M,{suggestions:a,input:d,setLocation:u,emptySuggestions:function(){return c([])}})]})})},ae=Object(y.a)(T)(ne||(ne=Object(g.a)(["\n  background-color: #f7bcb4;\n  border: #f57a69;\n  color: #c23029;\n  border-radius: 3px;\n  padding: 1rem;\n"])));var ce,ie,oe,se,ue,le,de,je,he,be=function(e){var t=e.errors;return t.length?Object(D.jsxs)(ae,{children:["Errors: ",t.map((function(e){return"".concat(e," ")}))]}):""},fe=y.a.section(ce||(ce=Object(g.a)(["\n  margin: 0 auto;\n  width: 80%;\n  padding: 1.5rem 3rem;\n  background-color: #7b57ae;\n  color: #eaeaff;\n  border-radius: 3px;\n"]))),pe=y.a.header(ie||(ie=Object(g.a)(["\n  text-align: center;\n"]))),Oe=y.a.div(oe||(oe=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),xe=y.a.div(se||(se=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),me=y.a.footer(ue||(ue=Object(g.a)(["\n  margin-top: 2rem;\n"]))),ve=y.a.ol(le||(le=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  list-style-type: none;\n"]))),ge=y.a.li(de||(de=Object(g.a)(["\n  background-color: #673a9f;\n  text-align: center;\n  padding: 1rem;\n  min-width: calc(20% - 4rem);\n  border-radius: 3px;\n"]))),ye=y.a.h3(je||(je=Object(g.a)(["\n  margin-top: 0;\n"]))),we=y.a.div(he||(he=Object(g.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n\n  p {\n    padding: 0;\n    width: 100%;\n  }\n"])));var Te=function(e){var t=e.day,n=e.temperature,r=e.weatherText;return Object(D.jsxs)(ge,{children:[Object(D.jsx)(ye,{children:t}),Object(D.jsxs)("span",{children:["From ",n.minimum,"'C To ",n.maximum,"'C"]}),Object(D.jsxs)(we,{children:[Object(D.jsx)("img",{src:"https://img.icons8.com/color/48/000000/smiling-sun.png",alt:"sun",height:"25px"}),Object(D.jsx)("p",{children:r.byDay})]}),Object(D.jsxs)(we,{children:[Object(D.jsx)("img",{src:"https://img.icons8.com/emoji/48/000000/full-moon-face.png",alt:"night",height:"25px"}),Object(D.jsx)("p",{children:r.byNight})]})]})};function Se(e){var t=e.Minimum,n=e.Maximum;return{minimum:"F"===t.Unit?Ce(t.Value):t.Value,maximum:"F"===n.Unit?Ce(n.Value):n.Value}}function Ce(e){return(5/9*(e-32)).toFixed(1)}function Ee(e){var t=new Date(e).getDay();return isNaN(t)?null:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t]}var _e=function(){var e=Object(Y.c)(Z);return Object(D.jsx)(me,{children:Object(D.jsx)(ve,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(D.jsx)(Te,{day:Ee(e.Date),temperature:Se(e.Temperature),weatherText:{byDay:e.Day.IconPhrase,byNight:e.Night.IconPhrase}},e.Date)}))})})},ke=n(35),De=Object(J.b)({name:"favorites",initialState:{favorites:[]},reducers:{changeFavorites:function(e,t){e.favorites=t.payload},addFavorite:function(e,t){console.log(e),e.favorites.find((function(e){return e.location.id===t.payload.location.id}))||e.favorites.unshift(t.payload)},deleteFavorite:function(e,t){e.favorites=e.favorites.filter((function(e){return e.location.id!==t.payload.location.id}))},updateFavorites:function(e,t){if(!Array.isArray(t.payload))return e.favorites=Fe(t.payload,e.favorites);var n,r=e.favorites.map((function(e){return e.location.id})),a=t.payload.filter((function(e){return r.includes(e.location.id)})),c=Object(ke.a)(a);try{for(c.s();!(n=c.n()).done;){Fe(n.value,e.favorites)}}catch(i){c.e(i)}finally{c.f()}}}});function Fe(e,t){return t.map((function(t){return t.location.id===e.location.id?e:t}))}var We=De.actions,Pe=(We.changeFavorites,We.addFavorite),Ae=We.deleteFavorite,Ne=(We.updateFavorites,We.isFavorite,function(e){return e.favorites.favorites}),Re=De.reducer;var Le=function(){var e,t,n,r=Object(Y.b)(),a=Object(Y.c)(ee),c=Object(Y.c)(Ne),i=Object(l.useState)(c.find((function(e){return e.location.id===a.location.id}))),o=Object(x.a)(i,2),s=o[0],u=o[1];return Object(l.useEffect)((function(){u(c.find((function(e){return e.location.id===a.location.id})))}),[a,c]),Object(D.jsx)(pe,{children:Object(D.jsxs)(Oe,{children:[Object(D.jsxs)(xe,{children:[Object(D.jsx)("img",{src:"https://img.icons8.com/color/96/000000/weather-forecast.png",alt:"Weather",style:{marginRight:"3rem"}}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{children:null===(e=a.location)||void 0===e?void 0:e.name}),Object(D.jsxs)("span",{children:[null===(t=a.currentWeather)||void 0===t?void 0:t.temperature,"'C"]})]})]}),Object(D.jsx)("h1",{children:null===(n=a.currentWeather)||void 0===n?void 0:n.weatherText}),Object(D.jsx)("div",{children:s?Object(D.jsx)(w,{onClick:function(){u(!1),r(Ae(a))},children:"Remove from Favorites"}):Object(D.jsx)(w,{onClick:function(){u(!0),r(Pe(a))},children:"Add to Favorites"})})]})})};var Ke,He,Ie,Ue,Ve=function(){return Object(D.jsxs)(fe,{children:[Object(D.jsx)(Le,{}),Object(D.jsx)(_e,{})]})},ze=y.a.ul(Ke||(Ke=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  flex-wrap: wrap;\n"]))),Be=y.a.li(He||(He=Object(g.a)(["\n  padding: 1rem;\n  border-radius: 3px;\n  background-color: #7b57ae;\n  color: #eaeaff;\n  text-align: center;\n  margin-bottom: 1rem;\n  min-width: calc(20% - 4rem);\n"]))),Me=y.a.h2(Ie||(Ie=Object(g.a)([""]))),Ye=y.a.h1(Ue||(Ue=Object(g.a)(["\n  font-size: 3rem;\n  text-align: center;\n  color: #673a9f;\n  width: 100%;\n"])));var Je=function(e){var t=e.place,n=e.temperature,r=e.weatherText;return Object(D.jsxs)(Be,{children:[Object(D.jsx)(Me,{children:t}),Object(D.jsxs)("p",{children:[n,"'C"]}),Object(D.jsx)("p",{children:r})]})};var qe=function(){var e=Object(Y.c)(Ne);return Object(D.jsxs)(T,{children:[Object(D.jsx)(Ye,{children:e.length?"Favorites":"There are no favorite cities yet!"}),Object(D.jsx)(ze,{children:e.map((function(e){return Object(D.jsx)(Je,{place:e.location.name,temperature:e.currentWeather.temperature,weatherText:e.currentWeather.weatherText})}))})]})};var $e=function(){var e=Object(l.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(Y.b)();function c(e){r([].concat(Object(O.a)(n),[e.message])),console.log(e,n),setTimeout((function(){r([])}),1e4)}function i(){return(i=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(215854);case 3:return t=e.sent,e.next=6,V(215854);case 6:n=e.sent,a(G({id:215854,name:"Tel Aviv"})),a(Q(t)),a(X(n)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(N,{}),Object(D.jsxs)(v.c,{children:[Object(D.jsx)(v.a,{path:"/favorites",children:Object(D.jsx)(qe,{})}),Object(D.jsxs)(v.a,{exact:!0,path:"/",children:[Object(D.jsx)(re,{errorHandler:c}),n&&Object(D.jsx)(be,{errors:n}),Object(D.jsx)(Ve,{})]})]})]})},Ge=Object(J.a)({reducer:{weather:te,favorites:Re}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(Object(D.jsx)(d.a.StrictMode,{children:Object(D.jsx)(Y.a,{store:Ge,children:Object(D.jsx)($e,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.e070c0b4.chunk.js.map