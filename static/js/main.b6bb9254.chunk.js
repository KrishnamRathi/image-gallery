(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),s=n.n(c),i=(n(97),n(9)),o=n(12),l=n(6),d=n(152),j=n(166),u=n(165),h=n(167),b=n(168),p=n(162),x=n(78),O=n.n(x),m=n(1),g=Object(l.a)("div")((function(e){var t=e.theme;return Object(o.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(d.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),f=Object(l.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),v=Object(l.a)(p.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(o.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"30ch"})}}));function y(e){var t=e.keyword,n=e.setKeyword;return Object(m.jsx)(u.a,{sx:{flexGrow:1,marginBottom:2},children:Object(m.jsx)(j.a,{position:"static",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"Image-Gallery"}),Object(m.jsxs)(g,{children:[Object(m.jsx)(f,{children:Object(m.jsx)(O.a,{})}),Object(m.jsx)(v,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},value:t,onChange:function(e){return n(e.target.value)}})]}),Object(m.jsx)(u.a,{sx:{flexGrow:1}})]})})})}var w=n(23),k=n.n(w),_=n(31),L=n(170),S=n(171),C=n(172),I=n(173),N=n(164),R=n(161),B=n(30),A=n(49),E=n.n(A);function H(e){var t=e.imageLink,n=e.username,r=e.likes,a=e.avatar;return Object(m.jsxs)(L.a,{sx:{maxWidth:345,cursor:"pointer"},children:[Object(m.jsx)(S.a,{avatar:Object(m.jsx)(N.a,{sx:{bgcolor:B.a[500]},"aria-label":"recipe",src:a,children:n.charAt(0)}),title:"".concat(n)||"Shrimp and Chorizo Paella"}),Object(m.jsx)(C.a,{component:"img",height:"194",image:t||"https://source.unsplash.com/random",alt:"Paella dish"}),Object(m.jsxs)(I.a,{disableSpacing:!0,children:[Object(m.jsx)(R.a,{"aria-label":"add to favorites",children:Object(m.jsx)(E.a,{style:{color:"red"}})}),Object(m.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:["".concat(r)||"229"," Likes"]})]})]})}var P=n(160),q=n(80),F=n.n(q),G=n(79),T=n.n(G),z=n(81),D=n.n(z);n(104);function M(e){var t=e.open,n=e.setOpen,r=e.image;return Object(m.jsx)("div",{children:Object(m.jsx)(P.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(m.jsx)(u.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:3,maxHeight:"80%"},children:Object(m.jsxs)("div",{className:"image_viewer",children:[Object(m.jsx)("img",{loading:"lazy",src:r.urls.raw,alt:r.id,style:{height:"100%",width:"100%",objectFit:"contain",maxWidth:500,maxHeight:500,borderRadius:10,marginRight:20}}),Object(m.jsxs)("div",{style:{width:"100%",flex:1,overflowY:"scroll"},children:[Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)(N.a,{alt:r.user.username,src:r.user.profile_image.small}),Object(m.jsx)("h2",{style:{marginLeft:10},children:r.user.username})]}),Object(m.jsxs)("div",{className:"unsplash_stats",children:[Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("strong",{children:r.user.total_collections}),Object(m.jsx)("p",{children:"Total Collections"})]}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("strong",{children:r.user.total_likes}),Object(m.jsx)("p",{children:"Total Likes"})]}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("strong",{children:r.user.total_photos}),Object(m.jsx)("p",{children:"Total Photos"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Bio"}),Object(m.jsx)("p",{children:r.user.bio})]}),r.description||r.alt_description?Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Image Description"}),Object(m.jsx)("p",{children:r.description||r.alt_description})]}):null,Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)(R.a,{"aria-label":"add to favorites",children:Object(m.jsx)(E.a,{style:{color:"red"}})}),Object(m.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:["".concat(r.likes)||"229"," Likes"]})]}),Object(m.jsxs)("div",{className:"social",children:[r.user.twitter_username?Object(m.jsx)("a",{href:"https://twitter.com/"+r.user.twitter_username,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(R.a,{children:Object(m.jsx)(T.a,{})})}):null,r.user.instagram_username?Object(m.jsx)("a",{href:"https://instagram.com/"+r.user.instagram_username,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(R.a,{children:Object(m.jsx)(F.a,{})})}):null,r.user.portfolio_url?Object(m.jsx)("a",{href:r.user.portfolio_url,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(R.a,{children:Object(m.jsx)(D.a,{})})}):null]})]})]})})})})}n(105);var W=n(62),Y=n.n(W),J=function(){var e=Object(_.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("https://api.unsplash.com/photos?page=".concat(t,"&per_page=").concat(n,"&client_id=").concat("fO4jHzNmAyaq0i9DIdBEHhl8LnNqY5yRxGVyxOcSCLM"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(_.a)(k.a.mark((function e(t,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("https://api.unsplash.com/search/photos?page=".concat(t,"&query=").concat(n,"&client_id=").concat("fO4jHzNmAyaq0i9DIdBEHhl8LnNqY5yRxGVyxOcSCLM"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=n(169);var Q=function(e){var t=e.keyword,n=r.useState(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=r.useState(null),l=Object(i.a)(o,2),d=l[0],j=l[1],u=r.useState(null),h=Object(i.a)(u,2),b=h[0],p=h[1],x=r.useState(null),O=Object(i.a)(x,2),g=O[0],f=O[1],v=function(){var e=Object(_.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(1,50);case 2:t=e.sent,p(t),f(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){v()}),[]),r.useEffect((function(){var e=function(){var e=Object(_.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(1,t);case 2:n=e.sent,p(n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.length>3?e():p(g)}),[t,g]),b?Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"grid",children:[b.map((function(e){return Object(m.jsx)("div",{onClick:function(){return t=e,s(!0),void j(t);var t},children:Object(m.jsx)(H,{imageLink:e.urls.thumb,username:e.user.username,likes:e.likes,avatar:e.user.profile_image.small})},e.id)})),c?Object(m.jsx)(M,{open:c,setOpen:s,image:d}):null]})}):Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)(V.a,{})})};var U=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{keyword:n,setKeyword:r}),Object(m.jsx)(Q,{keyword:n})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),X()},97:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.b6bb9254.chunk.js.map