(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=(a(87),a(49)),o=a(46),l=a(145),s=Object(l.a)((function(e){return Object(o.a)({},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),u=a(17),p=a(14),d=a.n(p),b=a(23),j=a(36),m=a.n(j),f="https://dummy.restapiexample.com/api/v1",x=function(e){return m.a.delete("".concat(f,"/delete/").concat(e))},y="CREATE",h="FETCH_ALL",O="UPDATE",g="DELETE",v=function(e){return function(){var t=Object(b.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:y,payload:e})}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t){return function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:O,payload:t})}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=a(158),_=a(155),k=a(154),E=Object(l.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{margin:"10px 20px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),I=a(148),N=a(150),S=a(151),D=a(157),T=a(152),W=a(74),z=a.n(W),A=a(73),B=a.n(A),P=a.p+"static/media/user.8973ad91.png",L=a(5),M=function(e){var t=e.post,a=e.setCurrentId,n=Object(u.b)(),r=E();return Object(L.jsxs)(I.a,{className:r.card,children:[Object(L.jsx)(N.a,{className:r.media,image:P,title:t.title}),Object(L.jsx)("div",{className:r.overlay,children:Object(L.jsxs)(S.a,{variant:"h6",children:[t.employee_name," "]})}),Object(L.jsx)("div",{className:r.overlay2,children:Object(L.jsx)(D.a,{style:{color:"white"},size:"small",onClick:function(){a(t.id)},children:Object(L.jsx)(B.a,{fontSize:"default"})})}),Object(L.jsx)("div",{className:r.details,children:Object(L.jsxs)(S.a,{variant:"h5",children:[" Employee Salary : \xa0 ",t.employee_salary]})}),Object(L.jsxs)(S.a,{className:r.title,variant:"body2",gutterButtom:!0,children:["Employee age : \xa0 ",t.employee_age]}),Object(L.jsx)(T.a,{className:r.actions,children:Object(L.jsxs)(D.a,{size:"small",color:"primary",onClick:function(){var e;n((e=t.id,function(){var t=Object(b.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:a({type:g,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(L.jsx)(z.a,{fontSize:"small"}),"Delete"]})})]})},F=Object(l.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),H=a(153),J=function(e){var t=e.setCurrentId,a=Object(u.c)((function(e){return e.Posts})),n=F();return a.length?Object(L.jsx)(k.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(L.jsx)(k.a,{xs:12,sm:6,item:!0,children:Object(L.jsx)(M,{post:e,setCurrentId:t})},e.id)}))}):Object(L.jsx)(H.a,{})},R=a(19),U=a(117),V=a(156),q=(a(114),Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}}))),G=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({id:"",employee_name:"",employee_age:"",employee_salary:"",profile_image:""}),c=Object(i.a)(r,2),o=c[0],l=c[1],s=Object(u.c)((function(e){return t?e.Posts.find((function(e){return e.id===t})):null})),p=Object(u.b)(),j=q();Object(n.useEffect)((function(){s&&l(s)}),[s]);var m=function(){a(null),l({id:"",employee_name:"",employee_age:"",employee_salary:"",profile_image:""})},f=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),null===t?(l(Object(R.a)(Object(R.a)({},o),{},{id:111})),p(v(o)),m()):(p(C(0,o)),m());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsx)(U.a,{className:j.paper,children:Object(L.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:f,children:[Object(L.jsx)(V.a,{name:"employee id",variant:"outlined",label:"employee id",fullWidth:!0,value:o.id,onChange:function(e){return l(Object(R.a)(Object(R.a)({},o),{},{id:e.target.value}))}}),Object(L.jsx)(V.a,{name:"employee name",variant:"outlined",label:"employee name",fullWidth:!0,value:o.employee_name,onChange:function(e){return l(Object(R.a)(Object(R.a)({},o),{},{employee_name:e.target.value}))}}),Object(L.jsx)(V.a,{name:"employee age",variant:"outlined",label:"employee age",fullWidth:!0,value:o.employee_age,onChange:function(e){return l(Object(R.a)(Object(R.a)({},o),{},{employee_age:e.target.value}))}}),Object(L.jsx)(V.a,{name:"employee salary",variant:"outlined",label:"employee salary",fullWidth:!0,value:o.employee_salary,onChange:function(e){return l(Object(R.a)(Object(R.a)({},o),{},{employee_salary:e.target.value}))}}),Object(L.jsx)(D.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(L.jsx)(D.a,{variant:"contained",color:"secondary",size:"small",onClick:m,fullWidth:!0,children:"Clear"})]})})},K=function(){return Object(L.jsx)("div",{style:{marginBottom:"20px"},children:Object(L.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light ",children:[Object(L.jsx)("a",{class:"navbar-brand text-center",href:"#",children:"Employer Dashboard"}),Object(L.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(L.jsx)("span",{class:"navbar-toggler-icon"})})]})})};var Q=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(u.b)();Object(n.useEffect)((function(){c(function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(f,"/employees"));case 3:a=e.sent,n=a.data,t({type:h,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(u.c)((function(e){return e.Posts}));var o=s();return Object(L.jsxs)("div",{children:[Object(L.jsx)(K,{}),Object(L.jsx)(w.a,{in:!0,children:Object(L.jsx)(_.a,{children:Object(L.jsxs)(k.a,{container:!0,className:o.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(L.jsx)(k.a,{item:!0,xs:12,sm:7,children:Object(L.jsx)(J,{setCurrentId:r})}),Object(L.jsx)(k.a,{item:!0,xs:12,sm:4,children:Object(L.jsx)(G,{currentId:a,setCurrentId:r})})]})})})]})},X=a(22),Y=a(75),Z=a(76),$=Object(X.c)({Posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(Z.a)(e),[t.payload]);case h:return t.payload;case O:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case g:return e.filter((function(e){return e.id!==t.payload}));default:return e}}}),ee=Object(X.e)($,Object(X.d)(Object(X.a)(Y.a)));c.a.render(Object(L.jsx)(u.a,{store:ee,children:Object(L.jsx)(Q,{})}),document.getElementById("root"))},87:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.868b5549.chunk.js.map