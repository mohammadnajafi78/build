"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[7070],{17070:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(89379),o=n(9950),a=n(14857),i=n(22433),l=n(5544),s=n(95537),c=n(74745),d=n(7233),u=n(81169),p=n(49535),f=n(70821),x=n(29031),h=n(16673),m=n(46565),v=n(37072),g=n(41608),A=n(4721),b=n(44414),w=(0,f.A)((function(e){return{paper:{borderRadius:"20px 20px 0px 0px",zIndex:999,position:"fixed",bottom:0,minHeight:"40%"}}}));function j(e){var t=(0,o.useState)(null),n=(0,l.A)(t,2),r=n[0],a=n[1],i=(0,o.useState)(4),f=(0,l.A)(i,2),j=f[0],y=(f[1],(0,o.useState)(0)),C=(0,l.A)(y,2),S=C[0],k=C[1],_=(0,o.useState)(0),R=(0,l.A)(_,2),z=R[0],I=R[1],D=(0,o.useState)(!1),q=(0,l.A)(D,2),E=(q[0],q[1],(0,h.useHistory)(),w(),(0,x.dh)().enqueueSnackbar);return(0,o.useEffect)((function(){g.A.get("".concat(A.J,"/api/lms/exam/get_exam_question/?ref_num=").concat(e.location.state.exam.ref_num,"&limit=").concat(j,"&offset=").concat(S*j)).then((function(e){200===e.status&&(a(e.data.results),I(e.data.page_count))})).catch((function(e){417===e.response.status?E(e.response.data.error,{variant:"error"}):E("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))}),[S]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(s.A,{sx:{position:"absolute",top:"10%",backgroundColor:"#335D8A",color:"white",padding:"10px 20px",width:"100%",display:"flex",flexDirection:"column"},children:[(0,b.jsx)(s.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:(0,b.jsx)(v.A,{style:{color:"white"},children:e.location.state.exam.name})}),(0,b.jsx)(c.A,{sx:{my:1},color:"#99AEC5"}),(0,b.jsx)(v.A,{style:{color:"white",fontSize:"14px"},children:"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0622\u0632\u0645\u0648\u0646: ".concat(e.location.state.exam.duration)})]}),(0,b.jsx)(s.A,{sx:{display:"flex",flexDirection:"column",paddingTop:"60px",backgroundColor:"#E5E5E5",justifyContent:"center",alignItems:"center",width:"100%",mt:"100px"},children:r&&r.map((function(t,n){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"10px",width:"95%",m:"5px",borderRadius:"4px"},children:[(0,b.jsx)(v.A,{style:{backgroundColor:"#33BBC4",color:"white",padding:"5px",borderRadius:"4px",fontSize:"13px",width:"fit-content"},children:"\u0633\u0648\u0627\u0644 ".concat(t.question_num)}),(0,b.jsx)(c.A,{sx:{m:"4px"}}),(0,b.jsxs)(p.A,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:r.filter((function(e){return e.ref_num===t.ref_num}))[0].user_answer,onChange:function(n){var o=r.findIndex((function(e){return e.ref_num===t.ref_num}));if(-1===o)console.log("not found");else{var i=r.slice();i[o].user_answer=n.target.value,a(i)}g.A.post("".concat(A.J,"/api/lms/exam/add_answer/"),{ref_num:e.location.state.exam.ref_num,question_num:t.question_num,answer:n.target.value}).then((function(e){e.status})).catch((function(e){417===e.response.status?E(e.response.data.error,{variant:"error"}):E("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))},children:[(0,b.jsx)(d.A,{value:"1",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f1",sx:{marginLeft:"1px"}}),(0,b.jsx)(d.A,{value:"2",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f2"}),(0,b.jsx)(d.A,{value:"3",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f3"}),(0,b.jsx)(d.A,{value:"4",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f4"})]})]})})}))}),(0,b.jsxs)(s.A,{sx:{display:"flex",justifyContent:"space-between",gap:2,padding:"10px",position:"absolute",bottom:"0%",width:"100%"},children:[(0,b.jsx)(m.A,{disabled:0===S,variant:"outlined",onClick:function(){return k(S-1)},children:"\u0635\u0641\u062d\u0647 \u0642\u0628\u0644\u06cc"}),(0,b.jsx)(m.A,{disabled:S===z-1,onClick:function(){return k(S+1)},children:"\u0635\u0641\u062d\u0647 \u0628\u0639\u062f\u06cc"})]})]})}var y=(0,f.A)((function(e){return{paper:{borderRadius:"20px 20px 0px 0px",zIndex:999,position:"fixed",bottom:0,minHeight:"40%"}}}));function C(e){var t=(0,o.useState)(null),n=(0,l.A)(t,2),r=n[0],a=n[1],i=(0,o.useState)(4),f=(0,l.A)(i,2),w=f[0],j=(f[1],(0,o.useState)(0)),C=(0,l.A)(j,2),S=C[0],k=C[1],_=(0,o.useState)(0),R=(0,l.A)(_,2),z=R[0],I=R[1],D=(0,o.useState)(!1),q=(0,l.A)(D,2),E=(q[0],q[1],(0,h.useHistory)(),y(),(0,x.dh)().enqueueSnackbar);return(0,o.useEffect)((function(){g.A.get("".concat(A.J,"/api/lms/exam/get_exam_question/?ref_num=").concat(e.location.state.exam.ref_num,"&limit=").concat(w,"&offset=").concat(S*w)).then((function(e){200===e.status&&(a(e.data.results),I(e.data.page_count))})).catch((function(e){417===e.response.status?E(e.response.data.error,{variant:"error"}):E("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))}),[S]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",marginTop:"60px",padding:"0px 20px",marginRight:"140px",overflow:"auto"},children:[(0,b.jsx)(s.A,{sx:{color:"#00346D",padding:"10px 20px",width:"100%",display:"flex",flexDirection:"column"},children:(0,b.jsx)(s.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:(0,b.jsx)(v.A,{style:{color:"#00346D"},children:e.location.state.exam.name})})}),(0,b.jsx)(s.A,{sx:{display:"flex",flexDirection:"column",padding:"20px 0px",backgroundColor:"#E5E5E5",justifyContent:"center",alignItems:"center",width:"100%"},children:r&&r.map((function(t,n){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"10px",width:"95%",m:"5px",borderRadius:"4px"},children:[(0,b.jsx)(v.A,{style:{backgroundColor:"#33BBC4",color:"white",padding:"5px",borderRadius:"4px",fontSize:"13px",width:"fit-content"},children:"\u0633\u0648\u0627\u0644 ".concat(t.question_num)}),(0,b.jsx)(c.A,{sx:{m:"4px"}}),(0,b.jsxs)(p.A,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:r.filter((function(e){return e.ref_num===t.ref_num}))[0].user_answer,onChange:function(n){var o=r.findIndex((function(e){return e.ref_num===t.ref_num}));if(-1===o)console.log("not found");else{var i=r.slice();i[o].user_answer=n.target.value,a(i)}g.A.post("".concat(A.J,"/api/lms/exam/add_answer/"),{ref_num:e.location.state.exam.ref_num,question_num:t.question_num,answer:n.target.value}).then((function(e){e.status})).catch((function(e){417===e.response.status?E(e.response.data.error,{variant:"error"}):E("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))},children:[(0,b.jsx)(d.A,{value:"1",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f1",sx:{marginLeft:"1px"}}),(0,b.jsx)(d.A,{value:"2",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f2"}),(0,b.jsx)(d.A,{value:"3",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f3"}),(0,b.jsx)(d.A,{value:"4",control:(0,b.jsx)(u.A,{sx:{padding:0,margin:0}}),label:"\u06af\u0632\u06cc\u0646\u0647 \u06f4"})]})]})})}))}),(0,b.jsxs)(s.A,{sx:{display:"flex",justifyContent:"center",gap:2,padding:"10px",position:"absolute",bottom:"0%",left:"0%",width:"100%"},children:[(0,b.jsx)(m.A,{disabled:0===S,variant:"outlined",onClick:function(){return k(S-1)},style:{width:"200px"},children:"\u0635\u0641\u062d\u0647 \u0642\u0628\u0644\u06cc"}),(0,b.jsx)(m.A,{disabled:S===z-1,onClick:function(){return k(S+1)},style:{width:"200px"},children:"\u0635\u0641\u062d\u0647 \u0628\u0639\u062f\u06cc"})]})]})})}const S=function(e){var t=(0,a.A)(),n=((0,h.useParams)().id,(0,i.A)(t.breakpoints.down("md")));return(0,b.jsx)(b.Fragment,{children:n?(0,b.jsx)(j,(0,r.A)({},e)):(0,b.jsx)(C,(0,r.A)({},e))})}},74745:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(98587),o=n(58168),a=n(9950),i=n(60533),l=n(88465),s=n(97497),c=n(59254),d=n(48283),u=n(40777),p=n(44414),f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,c.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.X4)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,o.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.A)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.A)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,o.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),h=(0,c.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.A)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=a.forwardRef((function(e,t){var n=(0,d.A)({props:e,name:"MuiDivider"}),a=n.absolute,s=void 0!==a&&a,c=n.children,m=n.className,v=n.component,g=void 0===v?c?"div":"hr":v,A=n.flexItem,b=void 0!==A&&A,w=n.light,j=void 0!==w&&w,y=n.orientation,C=void 0===y?"horizontal":y,S=n.role,k=void 0===S?"hr"!==g?"separator":void 0:S,_=n.textAlign,R=void 0===_?"center":_,z=n.variant,I=void 0===z?"fullWidth":z,D=(0,r.A)(n,f),q=(0,o.A)({},n,{absolute:s,component:g,flexItem:b,light:j,orientation:C,role:k,textAlign:R,variant:I}),E=function(e){var t=e.absolute,n=e.children,r=e.classes,o=e.flexItem,a=e.light,i=e.orientation,s=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===i&&"vertical",o&&"flexItem",n&&"withChildren",n&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.A)(c,u.K,r)}(q);return(0,p.jsx)(x,(0,o.A)({as:g,className:(0,i.A)(E.root,m),role:k,ref:t,ownerState:q},D,{children:c?(0,p.jsx)(h,{className:E.wrapper,ownerState:q,children:c}):null}))}));m.muiSkipListHighlight=!0;const v=m},49535:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(5544),o=n(58168),a=n(98587),i=n(9950),l=n(30609),s=n(31506),c=n(48733),d=n(57272),u=n(31014),p=n(44414),f=["actions","children","defaultValue","name","onChange","value"];const x=i.forwardRef((function(e,t){var n=e.actions,x=e.children,h=e.defaultValue,m=e.name,v=e.onChange,g=e.value,A=(0,a.A)(e,f),b=i.useRef(null),w=(0,c.A)({controlled:g,default:h,name:"RadioGroup"}),j=(0,r.A)(w,2),y=j[0],C=j[1];i.useImperativeHandle(n,(function(){return{focus:function(){var e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var S=(0,s.A)(t,b),k=(0,u.A)(m),_=i.useMemo((function(){return{name:k,onChange:function(e){C(e.target.value),v&&v(e,e.target.value)},value:y}}),[k,v,C,y]);return(0,p.jsx)(d.A.Provider,{value:_,children:(0,p.jsx)(l.A,(0,o.A)({role:"radiogroup",ref:S},A,{children:x}))})}))},57272:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(9950).createContext(void 0)},64340:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(9950),o=n(57272);function a(){return r.useContext(o.A)}},81169:(e,t,n)=>{n.d(t,{A:()=>z});var r=n(64467),o=n(98587),a=n(58168),i=n(9950),l=n(60533),s=n(88465),c=n(97497),d=n(46282),u=n(48283),p=n(65471),f=n(44414);const x=(0,p.A)((0,f.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),h=(0,p.A)((0,f.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var m=n(59254),v=(0,m.Ay)("span")({position:"relative",display:"flex"}),g=(0,m.Ay)(x)({transform:"scale(1)"}),A=(0,m.Ay)(h)((function(e){var t=e.theme,n=e.ownerState;return(0,a.A)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));const b=function(e){var t=e.checked,n=void 0!==t&&t,r=e.classes,o=void 0===r?{}:r,i=e.fontSize,l=(0,a.A)({},e,{checked:n});return(0,f.jsxs)(v,{className:o.root,ownerState:l,children:[(0,f.jsx)(g,{fontSize:i,className:o.background,ownerState:l}),(0,f.jsx)(A,{fontSize:i,className:o.dot,ownerState:l})]})};var w=n(61676),j=n(25920),y=n(64340),C=n(95601),S=["checked","checkedIcon","color","icon","name","onChange","size","className"],k=(0,m.Ay)(d.A,{shouldForwardProp:function(e){return(0,m.ep)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat((0,w.A)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.A)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(0,r.A)({},"&.".concat(C.A.checked),{color:(t.vars||t).palette[n.color].main}),(0,r.A)({},"&.".concat(C.A.disabled),{color:(t.vars||t).palette.action.disabled}))}));var _=(0,f.jsx)(b,{checked:!0}),R=(0,f.jsx)(b,{});const z=i.forwardRef((function(e,t){var n,r,c,d,p=(0,u.A)({props:e,name:"MuiRadio"}),x=p.checked,h=p.checkedIcon,m=void 0===h?_:h,v=p.color,g=void 0===v?"primary":v,A=p.icon,b=void 0===A?R:A,z=p.name,I=p.onChange,D=p.size,q=void 0===D?"medium":D,E=p.className,B=(0,o.A)(p,S),M=(0,a.A)({},p,{color:g,size:q}),N=function(e){var t=e.classes,n=e.color,r={root:["root","color".concat((0,w.A)(n))]};return(0,a.A)({},t,(0,s.A)(r,C.q,t))}(M),L=(0,y.A)(),F=x,H=(0,j.A)(I,L&&L.onChange),V=z;return L&&("undefined"===typeof F&&(c=L.value,F="object"===typeof(d=p.value)&&null!==d?c===d:String(c)===String(d)),"undefined"===typeof V&&(V=L.name)),(0,f.jsx)(k,(0,a.A)({type:"radio",icon:i.cloneElement(b,{fontSize:null!=(n=R.props.fontSize)?n:q}),checkedIcon:i.cloneElement(m,{fontSize:null!=(r=_.props.fontSize)?r:q}),ownerState:M,classes:N,name:V,checked:F,onChange:H,ref:t,className:(0,l.A)(N.root,E)},B))}))},95601:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>a});var r=n(1763),o=n(423);function a(e){return(0,o.A)("MuiRadio",e)}const i=(0,r.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"])}}]);