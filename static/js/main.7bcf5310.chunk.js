(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,s,u,l=n(0),d=n.n(l),j=n(22),h=n.n(j),b=(n(41),n(36)),f=n(12),p=n.n(f),x=n(14),O=n(19),m=n(21),v=n(5),g=n(2),y=n(3),w=y.a.button(r||(r=Object(g.a)(["\n  padding: 0.5rem;\n  background-color: #cba5fa;\n  border-radius: 3px;\n  border: none;\n  color: #673a9f;\n"]))),k=y.a.section(a||(a=Object(g.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),C=y.a.header(c||(c=Object(g.a)(["\n  position: sticky;\n  top: 0;\n  padding: 0;\n\n  background-color: #cba5fa;\n  color: #fff;\n"]))),F=Object(y.a)(k)(i||(i=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n"]))),N=y.a.nav(o||(o=Object(g.a)([""]))),T=y.a.ol(s||(s=Object(g.a)(["\n  display: flex;\n  list-style-type: none;\n"]))),D=y.a.li(u||(u=Object(g.a)(["\n  border-radius: 3px;\n\n  &:not(:first-child) {\n    margin-left: 1rem;\n  }\n"]))),W=n(1);var K,S,A,E,L=function(){return Object(W.jsx)(C,{children:Object(W.jsxs)(F,{children:[Object(W.jsx)("h2",{children:"Herolo Weather"}),Object(W.jsx)(N,{children:Object(W.jsxs)(T,{children:[Object(W.jsx)(D,{children:Object(W.jsx)(m.b,{exact:!0,activeClassName:"selected",to:"./",children:"Home"})}),Object(W.jsx)(D,{children:Object(W.jsx)(m.b,{activeClassName:"selected",to:"./favorites",children:"Favorites"})})]})})]})})},P=n(33),H=n.n(P),I=y.a.section(K||(K=Object(g.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n\n  margin: 3rem auto;\n"]))),z=y.a.input(S||(S=Object(g.a)(["\n  padding: 0.5rem;\n  border-radius: 3px;\n  border-color: #cba5fa;\n  margin-right: 0.5rem;\n  min-width: 25vw;\n"]))),M=y.a.ul(A||(A=Object(g.a)(["\n  position: absolute;\n  top: 1.3rem;\n  list-style-type: none;\n  background: #fffa;\n  width: 25vw;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n"]))),V=y.a.li(E||(E=Object(g.a)(["\n  padding: 0.5rem;\n"])));function q(e){return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=KeTtBXHNPkYi36PyAGOKIulNeqKtlbhA")).then((function(e){if(e.ok)return e.json();throw new Error("Could not fetch current weather.")})).catch((function(e){throw new Error("Could not fetch current weather. "+e.message)}))}function B(e){return fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=KeTtBXHNPkYi36PyAGOKIulNeqKtlbhA")).then((function(e){if(e.ok)return e.json();throw new Error("Could not fetch the next 5 days weather.")})).catch((function(e){throw new Error("Could not fetch the next 5 days weather. "+e.message)}))}function G(e){return fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=KeTtBXHNPkYi36PyAGOKIulNeqKtlbhA&q=".concat(e,"\n")).then((function(e){if(e.ok)return e.json();throw new Error("Could not fetch suggestions.")})).catch((function(e){throw new Error("Could not fetch suggestions. "+e.message)}))}var R=function(e){var t=e.suggestions,n=e.input,r=e.setLocation,a=e.emptySuggestions;return!!t&&Object(W.jsx)(M,{children:t.map((function(e){return Object(W.jsx)(V,{onClick:function(){n.current.value=e.LocalizedName,r({id:e.Key,name:e.LocalizedName}),a()},children:e.LocalizedName},e.Key)}))})},X=n(6),Y=n(18),J=Object(Y.b)({name:"weather",initialState:{weather:{location:{},next5Days:[],currentWeather:{}}},reducers:{changeLocation:function(e,t){e.weather.location=t.payload},changeNext5Days:function(e,t){e.weather.next5Days=t.payload.DailyForecasts},changeCurrentWeather:function(e,t){e.weather.currentWeather&&(e.weather.currentWeather={temperature:t.payload[0].Temperature.Metric.Value,weatherText:t.payload[0].WeatherText})}}}),U=J.actions,Q=U.changeLocation,Z=U.changeNext5Days,$=U.changeCurrentWeather,_=function(e){return e.weather.weather.next5Days},ee=function(e){return e.weather.weather},te=J.reducer;var ne,re=function(e){var t=e.errorHandler,n=Object(l.useState)([]),r=Object(x.a)(n,2),a=r[0],c=r[1],i=Object(l.useState)(null),o=Object(x.a)(i,2),s=o[0],u=o[1],d=Object(l.useRef)(null),j=Object(X.b)();function h(){return(h=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(d.current.value);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(e){c([]),t(e)}function f(){return(f=Object(O.a)(p.a.mark((function e(t){var n,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null==s&&u({id:null===(n=a.filter((function(e){return e.LocalizedName.toLowerCase()===t.target[0].value.toLowerCase()}))[0])||void 0===n?void 0:n.Key,name:t.target[0].value}),null!=s&&null!=s.id){e.next=4;break}return e.abrupt("return",b("Wrong search"));case 4:return e.prev=4,e.next=7,B(s.id);case 7:return r=e.sent,e.next=10,q(s.id);case 10:i=e.sent,j(Q(s)),j(Z(r)),j($(i)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),b(e.t0.message);case 19:c([]),u(null);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}return Object(W.jsx)(I,{children:Object(W.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(W.jsx)(z,{type:"text",placeholder:"City",ref:d,onChange:H.a.debounce((function(){return h.apply(this,arguments)}),1e3)}),Object(W.jsx)(w,{children:"Check weather"}),Object(W.jsx)(R,{suggestions:a,input:d,setLocation:u,emptySuggestions:function(){return c([])}})]})})},ae=Object(y.a)(k)(ne||(ne=Object(g.a)(["\n  background-color: #f7bcb4;\n  border: #f57a69;\n  color: #c23029;\n  border-radius: 3px;\n  padding: 1rem;\n"])));var ce,ie,oe,se,ue,le,de,je,he,be=function(e){var t=e.errors;return t.length?Object(W.jsxs)(ae,{children:["Errors: ",t.map((function(e){return"".concat(e," ")}))]}):""},fe=y.a.section(ce||(ce=Object(g.a)(["\n  margin: 0 auto;\n  width: 80%;\n  padding: 1.5rem 3rem;\n  background-color: #7b57ae;\n  color: #eaeaff;\n  border-radius: 3px;\n"]))),pe=y.a.header(ie||(ie=Object(g.a)(["\n  text-align: center;\n"]))),xe=y.a.div(oe||(oe=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Oe=y.a.div(se||(se=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),me=y.a.footer(ue||(ue=Object(g.a)(["\n  margin-top: 2rem;\n"]))),ve=y.a.ol(le||(le=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  list-style-type: none;\n"]))),ge=y.a.li(de||(de=Object(g.a)(["\n  background-color: #673a9f;\n  text-align: center;\n  padding: 1rem;\n  min-width: calc(20% - 4rem);\n  border-radius: 3px;\n"]))),ye=y.a.h3(je||(je=Object(g.a)(["\n  margin-top: 0;\n"]))),we=y.a.div(he||(he=Object(g.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n\n  p {\n    padding: 0;\n    width: 100%;\n  }\n"])));var ke=function(e){var t=e.day,n=e.temperature,r=e.weatherText;return Object(W.jsxs)(ge,{children:[Object(W.jsx)(ye,{children:t}),Object(W.jsxs)("span",{children:["From ",n.minimum,"'C To ",n.maximum,"'C"]}),Object(W.jsxs)(we,{children:[Object(W.jsx)("img",{src:"https://img.icons8.com/color/48/000000/smiling-sun.png",alt:"sun",height:"25px"}),Object(W.jsx)("p",{children:r.byDay})]}),Object(W.jsxs)(we,{children:[Object(W.jsx)("img",{src:"https://img.icons8.com/emoji/48/000000/full-moon-face.png",alt:"night",height:"25px"}),Object(W.jsx)("p",{children:r.byNight})]})]})};function Ce(e){var t=e.Minimum,n=e.Maximum;return{minimum:"F"===t.Unit?Fe(t.Value):t.Value,maximum:"F"===n.Unit?Fe(n.Value):n.Value}}function Fe(e){return(5/9*(e-32)).toFixed(1)}function Ne(e){var t=new Date(e).getDay();return isNaN(t)?null:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t]}var Te=function(){var e=Object(X.c)(_);return Object(W.jsx)(me,{children:Object(W.jsx)(ve,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(W.jsx)(ke,{day:Ne(e.Date),temperature:Ce(e.Temperature),weatherText:{byDay:e.Day.IconPhrase,byNight:e.Night.IconPhrase}},e.Date)}))})})},De=n(35),We=Object(Y.b)({name:"favorites",initialState:{favorites:[]},reducers:{changeFavorites:function(e,t){e.favorites=t.payload},addFavorite:function(e,t){e.favorites.find((function(e){return e.location.id===t.payload.location.id}))||e.favorites.unshift(t.payload)},deleteFavorite:function(e,t){e.favorites=e.favorites.filter((function(e){return e.location.id!==t.payload.location.id}))},updateFavorites:function(e,t){if(!Array.isArray(t.payload))return e.favorites=Ke(t.payload,e.favorites);var n,r=e.favorites.map((function(e){return e.location.id})),a=t.payload.filter((function(e){return r.includes(e.location.id)})),c=Object(De.a)(a);try{for(c.s();!(n=c.n()).done;){Ke(n.value,e.favorites)}}catch(i){c.e(i)}finally{c.f()}}}});function Ke(e,t){return t.map((function(t){return t.location.id===e.location.id?e:t}))}var Se=We.actions,Ae=(Se.changeFavorites,Se.addFavorite),Ee=Se.deleteFavorite,Le=(Se.updateFavorites,Se.isFavorite,function(e){return e.favorites.favorites}),Pe=We.reducer;var He=function(){var e,t,n,r=Object(X.b)(),a=Object(X.c)(ee),c=Object(X.c)(Le),i=Object(l.useState)(c.find((function(e){return e.location.id===a.location.id}))),o=Object(x.a)(i,2),s=o[0],u=o[1];return Object(l.useEffect)((function(){u(c.find((function(e){return e.location.id===a.location.id})))}),[a,c]),Object(W.jsx)(pe,{children:Object(W.jsxs)(xe,{children:[Object(W.jsxs)(Oe,{children:[Object(W.jsx)("img",{src:"https://img.icons8.com/color/96/000000/weather-forecast.png",alt:"Weather",style:{marginRight:"3rem"}}),Object(W.jsxs)("div",{children:[Object(W.jsx)("h3",{children:null===(e=a.location)||void 0===e?void 0:e.name}),Object(W.jsxs)("span",{children:[null===(t=a.currentWeather)||void 0===t?void 0:t.temperature,"'C"]})]})]}),Object(W.jsx)("h1",{children:null===(n=a.currentWeather)||void 0===n?void 0:n.weatherText}),Object(W.jsx)("div",{children:s?Object(W.jsx)(w,{onClick:function(){u(!1),r(Ee(a))},children:"Remove from Favorites"}):Object(W.jsx)(w,{onClick:function(){u(!0),r(Ae(a))},children:"Add to Favorites"})})]})})};var Ie,ze,Me,Ve,qe=function(){return Object(W.jsxs)(fe,{children:[Object(W.jsx)(He,{}),Object(W.jsx)(Te,{})]})},Be=y.a.ul(Ie||(Ie=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  flex-wrap: wrap;\n"]))),Ge=y.a.li(ze||(ze=Object(g.a)(["\n  padding: 1rem;\n  border-radius: 3px;\n  background-color: #7b57ae;\n  color: #eaeaff;\n  text-align: center;\n  margin-bottom: 1rem;\n  min-width: calc(20% - 4rem);\n"]))),Re=y.a.h2(Me||(Me=Object(g.a)([""]))),Xe=y.a.h1(Ve||(Ve=Object(g.a)(["\n  font-size: 3rem;\n  text-align: center;\n  color: #673a9f;\n  width: 100%;\n"])));var Ye=function(e){var t=e.place,n=e.temperature,r=e.weatherText;return Object(W.jsxs)(Ge,{children:[Object(W.jsx)(Re,{children:t}),Object(W.jsxs)("p",{children:[n,"'C"]}),Object(W.jsx)("p",{children:r})]})};var Je=function(){var e=Object(X.c)(Le);return Object(W.jsxs)(k,{children:[Object(W.jsx)(Xe,{children:e.length?"Favorites":"There are no favorite cities yet!"}),Object(W.jsx)(Be,{children:e.map((function(e,t){return Object(W.jsx)(Ye,{place:e.location.name,temperature:e.currentWeather.temperature,weatherText:e.currentWeather.weatherText},t)}))})]})};function Ue(e){return Qe.apply(this,arguments)}function Qe(){return(Qe=Object(O.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(215854);case 3:return n=e.sent,e.next=6,q(215854);case 6:return r=e.sent,e.abrupt("return",[r,n]);case 10:e.prev=10,e.t0=e.catch(0),t(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var Ze=function(){var e=Object(l.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(X.b)();function c(e){r([].concat(Object(b.a)(n),[e.message])),setTimeout((function(){r([])}),1e4)}return Object(l.useEffect)((function(){function e(){return(e=Object(O.a)(p.a.mark((function e(){var t,n,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(c);case 2:if(t=e.sent,n=Object(x.a)(t,2),r=n[0],i=n[1],null!=r&&null!=i){e.next=8;break}return e.abrupt("return");case 8:a(Q({id:215854,name:"Tel Aviv"})),a(Z(i)),a($(r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(W.jsxs)(m.a,{children:[Object(W.jsx)(L,{}),Object(W.jsxs)(v.c,{children:[Object(W.jsx)(v.a,{path:"/favorites",children:Object(W.jsx)(Je,{})}),Object(W.jsxs)(v.a,{exact:!0,path:"/",children:[Object(W.jsx)(re,{errorHandler:c}),n&&Object(W.jsx)(be,{errors:n}),Object(W.jsx)(qe,{})]})]})]})},$e=Object(Y.a)({reducer:{weather:te,favorites:Pe}});h.a.render(Object(W.jsx)(d.a.StrictMode,{children:Object(W.jsx)(X.a,{store:$e,children:Object(W.jsx)(Ze,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7bcf5310.chunk.js.map