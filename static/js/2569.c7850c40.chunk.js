"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[2569],{25358:(e,t,n)=>{n.d(t,{A:()=>l});n(9950);var i=n(95537),r=n(36233),o=n(93999),a=n(12833),s=n(44414);function l(e){var t=e.activeStep,n=e.steps;return(0,s.jsx)(i.A,{sx:{width:"100%"},children:(0,s.jsx)(r.A,{activeStep:t,alternativeLabel:!0,sx:{".MuiStepIcon-root":{color:"#F2F2F2"}},children:n.map((function(e){return(0,s.jsx)(o.A,{children:(0,s.jsx)(a.A,{children:e})},e)}))})})}},95266:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(64467),r=(n(9950),n(59254)),o=n(95537),a=n(61763),s=n(86551),l=n(44414),d=(0,r.Ay)(a.A)((function(e){var t;e.theme;return t={height:10,borderRadius:0,marginTop:"5px"},(0,i.A)(t,"&.".concat(s.A.colorPrimary),{backgroundColor:"#D3D2D2"}),(0,i.A)(t,"& .".concat(s.A.bar),{borderRadius:5,backgroundColor:"#00AAB5"}),t}));function c(e){return(0,l.jsx)(o.A,{sx:{flexGrow:1},children:(0,l.jsx)(d,{variant:"determinate",value:e.percentage})})}},2569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var i=n(89379),r=n(9950),o=n(14857),a=n(22433),s=n(5544),l=n(95537),d=n(72145),c=n(7233),p=n(81169),u=n(49535),x=n(6445),h=n(16673),g=n(46565),f=n(37072),A=n(4534),j=n(95266),m=n(41608),b=n(4721),y=n(58926),v=n(19984),T=n(29031),S=n(44414);const C=function(e){var t=(0,r.useState)([]),n=(0,s.A)(t,2),i=n[0],o=n[1],a=(0,r.useState)("MANUAL"),C=(0,s.A)(a,2),w=C[0],D=C[1],k=(0,T.dh)().enqueueSnackbar,I=e.location.state,E=(0,h.useHistory)();return(0,S.jsxs)(l.A,{sx:{mt:"20px"},children:[(0,S.jsx)(A.A,{style:{marginRight:"10px"},children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a"}),(0,S.jsx)(j.A,{percentage:50}),(0,S.jsx)(x.l1,{initialValues:{requestTypeName:"",project:""},validationSchema:y.Ik().shape({}),onSubmit:function(e,t){t.setErrors;var n=t.setSubmitting;n(!0),m.A.post("".concat(b.J,"/api/project/bom/update_bom/"),{ref_num:I.data.ref_num,design_type:i,control:w}).then((function(e){200===e.status&&(E.push({pathname:"/project/request/new/bom/confirmInfo",state:e.data}),n(!1))})).catch((function(e){417===e.response.status?k(e.response.data.error,{variant:"error"}):k("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})})),n(!1)},children:function(e){e.errors,e.handleBlur,e.handleChange;var t=e.handleSubmit;e.setFieldValue,e.isSubmitting,e.touched,e.values;return(0,S.jsxs)("form",{noValidate:!0,onSubmit:t,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",gap:"159px",position:"absolute",width:"90%",height:"88%",left:"20px",top:"67px"},children:[(0,S.jsxs)(l.A,{children:[(0,S.jsx)(l.A,{sx:{mt:2},children:(0,S.jsx)(f.A,{children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u062c\u0647\u062a \u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})}),(0,S.jsxs)(l.A,{sx:{mt:2},children:[(0,S.jsx)(A.A,{style:{fontSize:"14px",fontWeight:500,color:"#00346D"},children:"\u0646\u0648\u0639 \u0637\u0631\u0627\u062d\u06cc"}),(0,S.jsx)(v.A,{url:"/api/project/get_project_type",designType:i,setDesignType:o})]}),(0,S.jsxs)(l.A,{sx:{mt:2},children:[(0,S.jsx)(A.A,{style:{fontSize:"14px",fontWeight:500,color:"#00346D"},children:"\u0646\u0648\u0639 \u0633\u06cc\u0633\u062a\u0645 \u06a9\u0646\u062a\u0631\u0644"}),(0,S.jsx)(d.A,{sx:{width:"95%"},children:(0,S.jsxs)(u.A,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",value:w,onChange:function(e){D(e.target.value)},children:[(0,S.jsx)(c.A,{value:"THERMOSTATIC",control:(0,S.jsx)(p.A,{sx:{padding:"4px"}}),label:"\u062a\u0631\u0645\u0648\u0633\u062a\u0627\u062a\u06cc\u06a9",sx:{backgroundColor:"#E6EBF0",padding:"4px",margin:"4px 0px",borderRadius:"4px",".MuiTypography-root":{color:"#00346D",fontSize:"14px",fontWeight:500}}}),(0,S.jsx)(c.A,{value:"MANUAL",control:(0,S.jsx)(p.A,{sx:{padding:"4px"}}),label:"\u062f\u0633\u062a\u06cc",sx:{backgroundColor:"#E6EBF0",padding:"4px",margin:"4px 0px",borderRadius:"4px",".MuiTypography-root":{color:"#00346D",fontSize:"14px",fontWeight:500}}})]})})]})]}),(0,S.jsx)(l.A,{sx:{display:"inline-flex",justifyContent:"center",gap:2},children:(0,S.jsx)(g.A,{type:"submit",children:"\u0628\u0639\u062f\u06cc"})})]})}})]})};var w=n(13045),D=n(60172),k=n(38986),I=n(25358);const E=function(e){var t=(0,r.useState)([]),n=(0,s.A)(t,2),i=n[0],o=n[1],a=(0,r.useState)("MANUAL"),g=(0,s.A)(a,2),f=g[0],A=g[1],j=(0,T.dh)().enqueueSnackbar,C=e.location.state,E=(0,h.useHistory)();return(0,S.jsxs)(l.A,{sx:{mt:"80px",ml:"120px",width:"400px",background:"white",padding:"20px",height:"650px",borderRadius:"8px"},children:[(0,S.jsx)(k.A,{style:{marginRight:"10px"},children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a"}),(0,S.jsx)(I.A,{activeStep:0,steps:["",""]}),(0,S.jsx)(x.l1,{initialValues:{requestTypeName:"",project:""},validationSchema:y.Ik().shape({}),onSubmit:function(e,t){t.setErrors;var n=t.setSubmitting;n(!0),m.A.post("".concat(b.J,"/api/project/bom/update_bom/"),{ref_num:C.data.ref_num,design_type:i,control:f}).then((function(e){200===e.status&&(E.push({pathname:"/project/request/new/bom/confirmInfo",state:e.data}),n(!1))})).catch((function(e){417===e.response.status?j(e.response.data.error,{variant:"error"}):j("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})})),n(!1)},children:function(e){e.errors,e.handleBlur,e.handleChange;var t=e.handleSubmit;e.setFieldValue,e.isSubmitting,e.touched,e.values;return(0,S.jsxs)("form",{noValidate:!0,onSubmit:t,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",height:"540px",gap:"20px",overflow:"auto"},children:[(0,S.jsxs)(l.A,{children:[(0,S.jsx)(l.A,{sx:{mt:2},children:(0,S.jsx)(D.A,{children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u062c\u0647\u062a \u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})}),(0,S.jsxs)(l.A,{sx:{mt:2},children:[(0,S.jsx)(k.A,{style:{fontSize:"14px",fontWeight:500,color:"#00346D"},children:"\u0646\u0648\u0639 \u0637\u0631\u0627\u062d\u06cc"}),(0,S.jsx)(v.A,{url:"/api/project/get_project_type",designType:i,setDesignType:o})]}),(0,S.jsxs)(l.A,{sx:{mt:2},children:[(0,S.jsx)(k.A,{style:{fontSize:"14px",fontWeight:500,color:"#00346D"},children:"\u0646\u0648\u0639 \u0633\u06cc\u0633\u062a\u0645 \u06a9\u0646\u062a\u0631\u0644"}),(0,S.jsx)(d.A,{sx:{width:"95%"},children:(0,S.jsxs)(u.A,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",value:f,onChange:function(e){A(e.target.value)},children:[(0,S.jsx)(c.A,{value:"THERMOSTATIC",control:(0,S.jsx)(p.A,{sx:{padding:"4px"}}),label:"\u062a\u0631\u0645\u0648\u0633\u062a\u0627\u062a\u06cc\u06a9",sx:{backgroundColor:"#E6EBF0",padding:"4px",margin:"4px 0px",borderRadius:"4px",".MuiTypography-root":{color:"#00346D",fontSize:"14px",fontWeight:500}}}),(0,S.jsx)(c.A,{value:"MANUAL",control:(0,S.jsx)(p.A,{sx:{padding:"4px"}}),label:"\u062f\u0633\u062a\u06cc",sx:{backgroundColor:"#E6EBF0",padding:"4px",margin:"4px 0px",borderRadius:"4px",".MuiTypography-root":{color:"#00346D",fontSize:"14px",fontWeight:500}}})]})})]})]}),(0,S.jsx)(l.A,{sx:{display:"inline-flex",justifyContent:"center",gap:2,width:"95%"},children:(0,S.jsx)(w.A,{type:"submit",children:"\u0628\u0639\u062f\u06cc"})})]})}})]})};const M=function(e){var t=(0,o.A)(),n=(0,a.A)(t.breakpoints.down("md"));return(0,S.jsx)(S.Fragment,{children:n?(0,S.jsx)(C,(0,i.A)({},e)):(0,S.jsx)(E,(0,i.A)({},e))})}},19984:(e,t,n)=>{n.d(t,{A:()=>C});var i=n(5544),r=n(89379),o=n(60436),a=n(80045),s=n(64467),l=n(9950),d=n(59254),c=n(95537),p=n(15473),u=n(57619),x=n(225),h=n(87233),g=n(51496),f=n(85970),A=n(47644),j=n(41608),m=n(4721),b=n(29031),y=n(44414),v=["bgColor","color","labelIcon","labelInfo","labelText","isChild","id","setDesignType","designType","haveChild"],T=(0,d.Ay)(u.A)((function(e){var t,n=e.theme;return t={color:n.palette.text.secondary},(0,s.A)(t,"& .".concat(x.A.content),(0,s.A)({color:n.palette.text.secondary,backgroundColor:"#E6EBF0",padding:"4px",margin:"4px 0px",borderRadius:"4px",paddingRight:n.spacing(1),fontWeight:n.typography.fontWeightMedium,"&.MuiTreeItem-content":{flexDirection:"row-reverse"},"&.Mui-expanded":{fontWeight:n.typography.fontWeightRegular},"&:hover":{backgroundColor:n.palette.action.hover},"&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused":{backgroundColor:"var(--tree-view-bg-color, ".concat(n.palette.action.selected,")"),color:"var(--tree-view-color)"}},"& .".concat(x.A.label),{fontWeight:"inherit",color:"inherit"})),(0,s.A)(t,"& .".concat(x.A.group),(0,s.A)({marginLeft:0},"& .".concat(x.A.content),{paddingLeft:n.spacing(2)})),t}));function S(e){var t,n,i=e.bgColor,l=e.color,d=e.labelIcon,p=(e.labelInfo,e.labelText),u=e.isChild,x=e.id,f=(e.setDesignType,e.designType,e.haveChild),A=(0,a.A)(e,v);return(0,y.jsx)(T,(0,r.A)({label:(0,y.jsxs)(c.A,{sx:{display:"flex",alignItems:"center",p:.5,pr:0},children:[(0,y.jsx)(c.A,{component:d,color:"inherit",sx:{mr:1}}),u||!f?(0,y.jsxs)(c.A,{sx:{display:"inline-flex",alignItems:"center",gap:1},children:[(0,y.jsx)(g.A,{size:"small",sx:{padding:"2px",margin:"0px 6px",color:"#99AEC5",width:"12px",fontSize:"14px"},checked:e.designType.filter((function(e){return e===x})).length>0,onClick:function(){e.designType.filter((function(e){return e===x})).length<=0?e.setDesignType([].concat((0,o.A)(e.designType),[x])):e.setDesignType(e.designType.filter((function(e){return e!==x})))}}),(0,y.jsx)(h.A,{variant:"body2",sx:(t={fontWeight:"inherit",flexGrow:1,fontSize:"13px"},(0,s.A)(t,"fontWeight",300),(0,s.A)(t,"color","#00346D"),t),children:p})]}):(0,y.jsx)(h.A,{variant:"body2",sx:(n={fontWeight:"inherit",flexGrow:1,fontSize:"14px"},(0,s.A)(n,"fontWeight",500),(0,s.A)(n,"color","#00346D"),(0,s.A)(n,"lineHeight","25px"),n),children:p})]}),style:{"--tree-view-color":l,"--tree-view-bg-color":i}},A))}function C(e){var t=(0,l.useState)(null),n=(0,i.A)(t,2),r=n[0],o=n[1],a=(0,b.dh)().enqueueSnackbar;return(0,l.useEffect)((function(){e.setDesignType([]),j.A.get("".concat(m.J)+e.url).then((function(e){200===e.status&&o(e.data)})).catch((function(e){417===e.response.status?a(e.response.data.error,{variant:"error"}):a("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))}),[]),(0,y.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,y.jsx)(c.A,{sx:{display:"inline-flex",alignItems:"center",width:"100%",justifyContent:"space-between"}}),(0,y.jsx)(p.A,{"aria-label":"gmail",defaultCollapseIcon:(0,y.jsx)(A.A,{}),defaultExpandIcon:(0,y.jsx)(f.A,{}),defaultEndIcon:(0,y.jsx)("div",{style:{width:24}}),sx:{flexGrow:1,width:"100%",overflowY:"auto",paddingRight:"15px"},multiSelect:!0,children:r&&r.map((function(t,n){return(0,y.jsx)("div",{children:(0,y.jsx)(S,{nodeId:n,labelText:null===t||void 0===t?void 0:t.name,haveChild:t.child.length>0,id:t.id,designType:e.designType,setDesignType:e.setDesignType,children:null===t||void 0===t?void 0:t.child.map((function(t,n){return(0,y.jsx)(S,{nodeId:t.id+n+1e3,labelText:null===t||void 0===t?void 0:t.name,id:t.id,isChild:!0,designType:e.designType,setDesignType:e.setDesignType})}))})},n)}))})]})}}}]);