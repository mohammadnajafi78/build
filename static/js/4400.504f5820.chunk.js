"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[4400],{82669:(e,t,n)=>{n.d(t,{A:()=>i});n(9950);const i=n.p+"static/media/attach.ff9a92d492af27efb56122f15c661d9e.svg"},11131:(e,t,n)=>{n.d(t,{A:()=>i});n(9950);const i=n.p+"static/media/delete.c16b753a6f5712bce41f56c8a50d9186.svg"},23353:(e,t,n)=>{n.d(t,{A:()=>i});n(9950);const i=n.p+"static/media/upload.8253858f7da368e338b06236df25c3ab.svg"},25358:(e,t,n)=>{n.d(t,{A:()=>o});n(9950);var i=n(95537),s=n(36233),a=n(93999),r=n(12833),l=n(44414);function o(e){var t=e.activeStep,n=e.steps;return(0,l.jsx)(i.A,{sx:{width:"100%"},children:(0,l.jsx)(s.A,{activeStep:t,alternativeLabel:!0,sx:{".MuiStepIcon-root":{color:"#F2F2F2"}},children:n.map((function(e){return(0,l.jsx)(a.A,{children:(0,l.jsx)(r.A,{children:e})},e)}))})})}},95266:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(64467),s=(n(9950),n(59254)),a=n(95537),r=n(61763),l=n(86551),o=n(44414),c=(0,s.Ay)(r.A)((function(e){var t;e.theme;return t={height:10,borderRadius:0,marginTop:"5px"},(0,i.A)(t,"&.".concat(l.A.colorPrimary),{backgroundColor:"#D3D2D2"}),(0,i.A)(t,"& .".concat(l.A.bar),{borderRadius:5,backgroundColor:"#00AAB5"}),t}));function d(e){return(0,o.jsx)(a.A,{sx:{flexGrow:1},children:(0,o.jsx)(c,{variant:"determinate",value:e.percentage})})}},4400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var i=n(89379),s=n(9950),a=n(14857),r=n(22433),l=n(5544),o=n(95537),c=n(67535),d=n(46565),p=n(4534),x=n(37072),u=n(6445),h=n(41608),f=n(16673),A=n(4721),g=n(58926),j=n(95266),m=n(23353),b=n(29031),y=n(11131),S=n(82669),v=n(44414);const D=function(e){var t=(0,s.useState)(null),n=(0,l.A)(t,2),i=(n[0],n[1],(0,s.useState)(null)),a=(0,l.A)(i,2),r=(a[0],a[1],(0,s.useState)([])),D=(0,l.A)(r,2),w=(D[0],D[1],(0,s.useState)(null)),C=(0,l.A)(w,2),R=(C[0],C[1],(0,s.useState)([])),I=(0,l.A)(R,2),k=(I[0],I[1],(0,s.useState)()),z=(0,l.A)(k,2),F=(z[0],z[1],(0,f.useHistory)()),N=(0,b.dh)().enqueueSnackbar,W=e.location.state;return(0,v.jsxs)(o.A,{sx:{mt:"20px"},children:[(0,v.jsx)(p.A,{style:{marginRight:"10px"},children:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u0646\u0642\u0634\u0647"}),(0,v.jsx)(j.A,{percentage:60}),(0,v.jsx)(u.l1,{initialValues:{files:W?W.files:null},validationSchema:g.Ik().shape({}),onSubmit:function(t,n){n.setErrors;var i=n.setSubmitting,s=new FormData;s.append("ref_num",W?W.ref_num:e.location.state1.ref_num),s.append("RAW_PLAN",t.filess),i(!0),h.A.post("".concat(A.J,"/api/project/design/update_design/"),s).then((function(e){200===e.status&&(W?(F.push({pathname:"/project/request/new/design/designerInfo",state:W}),i(!1)):(F.push({pathname:"/project/request/new/design/designerInfo",state1:W}),i(!1)))})).catch((function(e){417===e.response.status?N(e.response.data.error,{variant:"error"}):N("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})})),i(!1)},children:function(e){e.errors,e.handleBlur,e.handleChange;var t=e.handleSubmit,n=e.setFieldValue,i=(e.isSubmitting,e.touched,e.values);return(0,v.jsxs)("form",{noValidate:!0,onSubmit:t,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",gap:"159px",position:"absolute",width:"90%",height:"88%",left:"20px",top:"67px"},children:[(0,v.jsx)(o.A,{children:(0,v.jsxs)(o.A,{sx:{mt:2},children:[(0,v.jsx)(x.A,{style:{fontSize:"13px"},children:"\u0646\u0642\u0634\u0647 Autocad \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u06a9\u0646\u06cc\u062f:"}),i.files?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"20px 10px 5px",gap:"20px",height:"320px",border:"2px dashed #99DDE1",borderRadius:"4px"},children:[(0,v.jsx)("img",{src:URL.createObjectURL(i.files),width:"300px",height:"180px",style:{borderRadius:"8px"}}),(0,v.jsx)(x.A,{style:{color:"#335D8A",fontSize:"11px"},children:i.files.name}),(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%"},children:[(0,v.jsxs)(c.A,{sx:{fontFamily:"IRANSans",fontSize:"12px",fontWeight:400},onClick:function(){n("files","")},children:[(0,v.jsx)("img",{src:y.A,width:"13px",height:"13px"}),"\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646"]}),(0,v.jsxs)(c.A,{sx:{fontFamily:"IRANSans",fontSize:"12px",fontWeight:400},component:"label",onChange:function(e){n("files",event.target.files[0])},children:[(0,v.jsx)("img",{src:S.A,width:"13px",height:"20px"}),"\u062a\u063a\u06cc\u06cc\u0631 \u0641\u0627\u06cc\u0644",(0,v.jsx)("input",{type:"file",hidden:!0,multiple:!1})]})]})]}):(0,v.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"40px 0px",height:"150px",border:"2px dashed #99DDE1",borderRadius:"4px",color:"#4F4C4D",fontFamily:"IRANSans",fontWeight:400,fontSize:"16px"},component:"label",onChange:function(e){console.log("files",e.target.files),n("files",e.target.files[0])},children:[(0,v.jsx)("img",{src:m.A,with:"33px",height:"28px"}),(0,v.jsx)(x.A,{style:{color:"#00346D",fontSize:"14px"},children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0627\u06cc\u0644"}),(0,v.jsx)(x.A,{style:{color:"#00346D",fontSize:"12px"},children:"\u062d\u062f\u0627\u06a9\u062b\u0631 \u062d\u062c\u0645 \u0641\u0627\u06cc\u0644 3M"}),(0,v.jsx)(x.A,{style:{color:"#00346D",fontSize:"10px"},children:"\u0641\u0631\u0645\u062a \u0641\u0627\u06cc\u0644 \u0647\u0627:\u200cDWG, DGN, ACIS"}),(0,v.jsx)("input",{type:"file",hidden:!0})]})]})}),(0,v.jsxs)(o.A,{sx:{display:"inline-flex",justifyContent:"center",gap:2},children:[(0,v.jsx)(d.A,{disabled:!1,variant:"outlined",onClick:function(){F.push({pathname:"/project/project/new/2",state:W})},type:"button",children:"\u0628\u0627\u0631\u06af\u0634\u062a"}),(0,v.jsx)(d.A,{type:"submit",children:"\u0628\u0639\u062f\u06cc"})]})]})}})]})};var w=n(13045),C=n(38986),R=n(60172),I=n(25358);const k=function(e){var t=(0,s.useState)(null),n=(0,l.A)(t,2),i=(n[0],n[1],(0,s.useState)(null)),a=(0,l.A)(i,2),r=(a[0],a[1],(0,s.useState)([])),d=(0,l.A)(r,2),p=(d[0],d[1],(0,s.useState)(null)),x=(0,l.A)(p,2),j=(x[0],x[1],(0,s.useState)([])),D=(0,l.A)(j,2),k=(D[0],D[1],(0,s.useState)()),z=(0,l.A)(k,2),F=(z[0],z[1],(0,f.useHistory)()),N=(0,b.dh)().enqueueSnackbar,W=e.location.state;return console.log("inja",W),(0,v.jsxs)(o.A,{sx:{mt:"80px",ml:"120px",width:"400px",background:"white",padding:"20px",height:"650px",borderRadius:"8px"},children:[(0,v.jsx)(C.A,{style:{marginRight:"10px"},children:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u0646\u0642\u0634\u0647"}),(0,v.jsx)(I.A,{activeStep:2,steps:["","","","",""]}),(0,v.jsx)(u.l1,{initialValues:{files:W?W.files:null},validationSchema:g.Ik().shape({}),onSubmit:function(t,n){n.setErrors;var i=n.setSubmitting,s=new FormData;s.append("ref_num",W?W.ref_num:e.location.state1.ref_num),s.append("RAW_PLAN",t.files),i(!0),h.A.post("".concat(A.J,"/api/project/design/update_design/"),s).then((function(e){200===e.status&&(W?(F.push({pathname:"/project/request/new/design/designerInfo",state:W}),i(!1)):(F.push({pathname:"/project/request/new/design/designerInfo",state1:state1}),i(!1)))})).catch((function(e){417===e.response.status?N(e.response.data.error,{variant:"error"}):N("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})})),i(!1)},children:function(e){e.errors,e.handleBlur,e.handleChange;var t=e.handleSubmit,n=e.setFieldValue,i=(e.isSubmitting,e.touched,e.values);return(0,v.jsxs)("form",{noValidate:!0,onSubmit:t,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",height:"540px",gap:"20px",overflow:"auto"},children:[(0,v.jsx)(o.A,{children:(0,v.jsxs)(o.A,{sx:{mt:2},children:[(0,v.jsx)(R.A,{style:{fontSize:"13px"},children:"\u0646\u0642\u0634\u0647 Autocad \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u06a9\u0646\u06cc\u062f:"}),i.files?(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"20px 10px 5px",gap:"20px",height:"320px",border:"2px dashed #99DDE1",borderRadius:"4px"},children:[(0,v.jsx)("img",{src:URL.createObjectURL(i.files),width:"300px",height:"180px",style:{borderRadius:"8px"}}),(0,v.jsx)(R.A,{style:{color:"#335D8A",fontSize:"11px"},children:i.files.name}),(0,v.jsxs)(o.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%"},children:[(0,v.jsxs)(c.A,{sx:{fontFamily:"IRANSans",fontSize:"12px",fontWeight:400},onClick:function(){n("files","")},children:[(0,v.jsx)("img",{src:y.A,width:"13px",height:"13px"}),"\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646"]}),(0,v.jsxs)(c.A,{sx:{fontFamily:"IRANSans",fontSize:"12px",fontWeight:400},component:"label",onChange:function(e){n("files",event.target.files[0])},children:[(0,v.jsx)("img",{src:S.A,width:"13px",height:"20px"}),"\u062a\u063a\u06cc\u06cc\u0631 \u0641\u0627\u06cc\u0644",(0,v.jsx)("input",{type:"file",hidden:!0,multiple:!1})]})]})]}):(0,v.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"40px 0px",height:"150px",border:"2px dashed #99DDE1",borderRadius:"4px",color:"#4F4C4D",fontFamily:"IRANSans",fontWeight:400,fontSize:"16px"},component:"label",onChange:function(e){console.log("files",e.target.files),n("files",e.target.files[0])},children:[(0,v.jsx)("img",{src:m.A,with:"33px",height:"28px"}),(0,v.jsx)(R.A,{style:{color:"#00346D",fontSize:"14px"},children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0627\u06cc\u0644"}),(0,v.jsx)(R.A,{style:{color:"#00346D",fontSize:"12px"},children:"\u062d\u062f\u0627\u06a9\u062b\u0631 \u062d\u062c\u0645 \u0641\u0627\u06cc\u0644 3M"}),(0,v.jsx)(R.A,{style:{color:"#00346D",fontSize:"10px"},children:"\u0641\u0631\u0645\u062a \u0641\u0627\u06cc\u0644 \u0647\u0627:\u200cDWG, DGN, ACIS"}),(0,v.jsx)("input",{type:"file",hidden:!0})]})]})}),(0,v.jsxs)(o.A,{sx:{display:"inline-flex",justifyContent:"center",gap:2},children:[(0,v.jsx)(w.A,{disabled:!1,variant:"outlined",onClick:function(){F.push({pathname:"/project/request/new/design/techInfo",state:W})},type:"button",children:"\u0628\u0627\u0631\u06af\u0634\u062a"}),(0,v.jsx)(w.A,{type:"submit",children:"\u0628\u0639\u062f\u06cc"})]})]})}})]})};const z=function(e){var t=(0,a.A)(),n=(0,r.A)(t.breakpoints.down("md"));return(0,v.jsx)(v.Fragment,{children:n?(0,v.jsx)(D,(0,i.A)({},e)):(0,v.jsx)(k,(0,i.A)({},e))})}}}]);