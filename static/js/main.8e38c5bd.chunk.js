(this["webpackJsonpbento-hero"]=this["webpackJsonpbento-hero"]||[]).push([[0],{11:function(e,t,a){e.exports={app:"App_app__3cb8i",header:"App_header__EQ4O6",body:"App_body__tW8Vr"}},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(14),i=a.n(c),o=(a(21),a(11)),l=a.n(o),s=a(9),d=a(2),u=a.n(d),m=a(7),j=a.n(m);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _=r.createElement("path",{fill:"currentColor",d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"});function h(e,t){var a=e.title,n=e.titleId,c=b(e,["title","titleId"]);return r.createElement("svg",f({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"clock",className:"svg-inline--fa fa-clock fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,_)}var O=r.forwardRef(h),v=(a.p,a(13)),p=a(4),D=a(15),x=a(16),y=a(6),k=a.n(y),g=a(3),w=a.n(g),A=a(5),S=a.n(A),N=a(0),C=function(e){var t=e.open,a=e.onClose,r=e.children,c=n.a.useRef(null),i=n.a.useRef({startY:0,endY:0});return Object(N.jsx)("div",{onClick:a,className:k()(S.a.container,Object(p.a)({},S.a.open,t)),children:Object(N.jsxs)("div",{ref:c,onClick:function(e){e.stopPropagation()},className:k()(S.a.drawer,Object(p.a)({},S.a.active,t)),children:[Object(N.jsx)("div",{onTouchStart:function(e){i.current.startY=e.touches[0].clientY},onTouchMove:function(e){i.current.endY=e.touches[0].clientY;var t=i.current.endY-i.current.startY;t<0||c.current&&(c.current.style.bottom="".concat(-t,"px"))},onTouchEnd:function(e){i.current.endY-i.current.startY>50&&(null===a||void 0===a||a()),i.current.startY=0,i.current.endY=0,c.current&&(c.current.style.bottom="0px")},className:S.a.toggle,children:Object(N.jsx)("div",{className:S.a.bar})}),r]})})},P=function(e){var t=e.title,a=e.startAt,c=e.endAt,i=e.onChange,o=e.fullSlot,l=Object(x.a)(e,["title","startAt","endAt","onChange","fullSlot"]),d=n.a.useState(new Date),m=Object(s.a)(d,2),j=m[0],f=m[1];return Object(r.useEffect)((function(){if(!c){null===i||void 0===i||i.apply(void 0,Object(D.a)(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=u()(t).startOf("hour"),r=a.clone().add(.5,"hour"),n=u()(t).isBefore(r)?a:r,c=n.clone().add(.5,"hour"),i=null===o||void 0===o?void 0:o.some((function(e){return n.isSameOrBefore(e)&&c.isSameOrAfter(e)}));return i?e(c.toDate()):[n.toDate(),c.toDate()]}()))}}),[c,o,i]),Object(r.useEffect)((function(){c&&f(c)}),[c]),Object(N.jsx)(C,Object(v.a)(Object(v.a)({},l),{},{children:Object(N.jsxs)("div",{className:w.a.root,children:[Object(N.jsx)("div",{className:w.a.title,children:Object(N.jsx)("p",{children:t})}),Object(N.jsxs)("div",{className:w.a.content,children:[Object(N.jsx)("div",{className:w.a.dates,children:Array.from({length:7}).map((function(e,t){var a=u()().startOf("day").add(t,"day"),r=a.isSame(j,"day");return Object(N.jsx)("div",{onClick:function(){f(a.toDate())},className:k()(w.a.date,Object(p.a)({},w.a.samedate,r)),children:a.calendar()},t)}))}),Object(N.jsx)("div",{className:w.a.times,children:Array.from({length:48}).map((function(e,t){var r=u()(j).startOf("day").add(t/2,"hour"),n=r.clone().add(.5,"hour"),s=r.isSame(a,"hour")&&n.isSame(c,"hour"),d=null===o||void 0===o?void 0:o.some((function(e){return r.isSameOrBefore(e)&&n.isSameOrAfter(e)}));return n.isBefore(u()())?null:Object(N.jsx)("div",{className:w.a.time,children:Object(N.jsxs)("label",{className:k()(Object(p.a)({},w.a.disabled,d)),children:[r.format("H:mm A"),"-",n.format("H:mm A"),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:w.a.full,children:d?"Slot Full":Object(N.jsx)("br",{})}),Object(N.jsx)("input",{type:"radio",checked:s,disabled:d,onChange:function(e){var t;null===i||void 0===i||i(r.toDate(),n.toDate()),null===l||void 0===l||null===(t=l.onClose)||void 0===t||t.call(l)}}),Object(N.jsx)("span",{className:w.a.mark})]})},t)}))})]})]})}))},T=function(){var e=n.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=n.a.useState({}),i=Object(s.a)(c,2),o=i[0],l=i[1];return Object(N.jsxs)("div",{className:j.a.card,children:[Object(N.jsx)(O,{className:j.a.clock}),Object(N.jsxs)("div",{className:j.a.time,children:[Object(N.jsx)("span",{className:j.a.label,children:"Delivery time:"}),Object(N.jsxs)("span",{children:[u()(o.startAt).format("H:mm A"),"-",u()(o.endAt).format("H:mm A")," on"," ",u()(o.endAt).format("M/D")]})]}),Object(N.jsx)("button",{className:j.a.edit,onClick:function(){r(!0)},children:"Edit"}),Object(N.jsx)(P,{title:"Schedule a Delivery Time",startAt:o.startAt,endAt:o.endAt,onChange:function(e,t){l({startAt:e,endAt:t})},open:a,onClose:function(){r(!1)},fullSlot:[u()().toDate(),u()().add(.5,"hour").toDate(),u()().add(2,"hour").toDate()]})]})},E=function(){return Object(N.jsxs)("div",{className:l.a.app,children:[Object(N.jsx)("header",{className:l.a.header,children:Object(N.jsx)("p",{children:"Order Summary"})}),Object(N.jsxs)("div",{className:l.a.body,children:[Object(N.jsx)("p",{children:"Delivery Information:"}),Object(N.jsx)(T,{})]})]})};u.a.locale("en",{calendar:{sameDay:"[Today] M/D",nextDay:"[Tomorrow] M/D",lastDay:"[Yesterday] M/D",nextWeek:"dddd M/D",lastWeek:"dddd M/D",sameElse:"dddd M/D"}}),i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={root:"DateTimePicker_root__1awnt",title:"DateTimePicker_title__1ajXC",content:"DateTimePicker_content__10Crp",dates:"DateTimePicker_dates__3E-kg",date:"DateTimePicker_date__2vPCv",samedate:"DateTimePicker_samedate__3JM2f",times:"DateTimePicker_times__kxQS3",time:"DateTimePicker_time__2qbPu",disabled:"DateTimePicker_disabled__LnwSU",full:"DateTimePicker_full__1abDm",mark:"DateTimePicker_mark__QB8K9"}},5:function(e,t,a){e.exports={container:"Drawer_container__19D56",open:"Drawer_open__3BE9K",drawer:"Drawer_drawer__27Bfn",active:"Drawer_active__c9Vny",toggle:"Drawer_toggle__D_SP0",bar:"Drawer_bar__3PU0b"}},7:function(e,t,a){e.exports={card:"DeliveryInformationCard_card__1p-na",clock:"DeliveryInformationCard_clock__2zRFu",time:"DeliveryInformationCard_time__3n2pq",label:"DeliveryInformationCard_label__1IajW",edit:"DeliveryInformationCard_edit__2jDji"}}},[[24,1,2]]]);
//# sourceMappingURL=main.8e38c5bd.chunk.js.map