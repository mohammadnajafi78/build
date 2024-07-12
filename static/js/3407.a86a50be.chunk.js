"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[3407],{6252:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(22413),n=i.n(r);function a(e){return n()(e).locale("en").format("YYYY-MM-DD")}},23407:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var r=i(89379),n=i(5544),a=i(9950),o=i(95537),l=i(74745),s=i(14341),d=i(4139),c=i(97539),u=i(60172),h=i(6445),p=i(13045),x=i(32459),g=i(63571),f=i(1314),m=i(41608),v=i(4721),A=i(16673),b=i(6252),j=i(29031),w=i(44414);function y(){var e=(0,a.useState)([]),t=(0,n.A)(e,2),i=t[0],y=t[1],S=(0,a.useState)([]),F=(0,n.A)(S,2),C=F[0],_=F[1],I=(0,j.dh)().enqueueSnackbar,W=(0,A.useHistory)();return(0,a.useEffect)((function(){m.A.get("".concat(v.J,"/api/management/club/gifts/select_list/")).then((function(e){200===e.status&&y(e.data)})).catch((function(e){417===e.response.status?I(e.response.data.error,{variant:"error"}):I("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))}),[]),(0,a.useEffect)((function(){m.A.post("".concat(v.J,"/api/management/club/club_grade/grade_list/"),{search:"",order:""}).then((function(e){200===e.status&&_(e.data)})).catch((function(e){417===e.response.status?I(e.response.data.error,{variant:"error"}):I("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))}),[]),(0,w.jsx)(o.A,{sx:{display:"flex",justifyContent:"center"},children:(0,w.jsx)(o.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",padding:"16px 16px 12px",gap:"20px",width:"70%",background:"#FFFFFF",borderRadius:"4px"},children:(0,w.jsx)(h.l1,{initialValues:{name:"",valid_date:new Date,require_credit:0,require_grade:"",description:"",gifts:""},onSubmit:function(e,t){t.setErrors;var i=t.setSubmitting;i(!0),m.A.post("".concat(v.J,"/api/management/club/gift_box/"),{name:e.name,valid_date:(0,b.A)(e.valid_date),require_credit:e.require_credit,require_grade:e.require_grade,description:e.description,gifts:e.gifts}).then((function(e){201===e.status&&(i(!1),W.push("/management/club/gifts"))})).catch((function(e){i(!1),417===e.response.status?I(e.response.data.error,{variant:"error"}):I("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))},children:function(e){e.errors,e.handleBlur;var t=e.handleChange,n=e.handleSubmit,a=e.isSubmitting,h=(e.touched,e.values),m=e.setFieldValue;return(0,w.jsxs)("form",{noValidate:!0,onSubmit:n,style:{display:"flex",flexDirection:"column",alignItems:"space-between",width:"100%"},children:[(0,w.jsxs)(o.A,{children:[(0,w.jsx)(u.A,{style:{color:"#00AAB5",fontWeight:700},children:"\u0635\u0646\u062f\u0648\u0642 \u062c\u062f\u06cc\u062f"}),(0,w.jsx)(l.A,{variant:"middle",sx:{margin:"6px 0px",width:"98%"}}),(0,w.jsx)(u.A,{style:{fontWeight:700,color:"#231F20"},children:"\u0645\u0634\u062e\u0635\u0627\u062a"}),(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u0639\u0646\u0648\u0627\u0646 \u0635\u0646\u062f\u0648\u0642"}),(0,w.jsx)(s.A,{id:"name","aria-describedby":"my-helper-text",fullWidth:!0,sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},value:h.name,onChange:t})]}),(0,w.jsxs)(d.Ay,{container:!0,spacing:2,children:[(0,w.jsx)(d.Ay,{item:!0,xs:6,children:(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u0627\u0639\u062a\u0628\u0627\u0631 \u062a\u0627"}),(0,w.jsx)(x.$,{dateAdapter:f.A,children:(0,w.jsx)(g.l,{value:h.valid_date,onChange:function(e){m("valid_date",e)},renderInput:function(e){return(0,w.jsx)(s.A,(0,r.A)((0,r.A)({},e),{},{sx:{background:"#F2F2F2"},fullWidth:!0}))}})})]})}),(0,w.jsx)(d.Ay,{item:!0,xs:6,children:(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u0627\u0645\u062a\u06cc\u0627\u0632"}),(0,w.jsx)(s.A,{id:"require_credit","aria-describedby":"my-helper-text",fullWidth:!0,sx:{background:"#F2F2F2",borderRadius:"4px"},value:h.require_credit,onChange:t,type:"number",InputProps:{inputProps:{min:0}}})]})})]}),(0,w.jsx)(d.Ay,{container:!0,spacing:2,children:(0,w.jsx)(d.Ay,{item:!0,xs:6,children:(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u0633\u0637\u062d \u06a9\u0627\u0631\u0628\u0631\u06cc"}),(0,w.jsx)(c.A,{fullWidth:!0,disablePortal:!0,id:"require_grade",limitTags:1,options:C,getOptionLabel:function(e){return e.name},renderInput:function(e){return(0,w.jsx)(s.A,(0,r.A)({},e))},onChange:function(e,t){m("require_grade",t.id)},isOptionEqualToValue:function(e,t){return e.name===t.name},noOptionsText:"\u0645\u0648\u0631\u062f\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f",sx:{".MuiOutlinedInput-root":{padding:"5px"}}})]})})}),(0,w.jsx)(d.Ay,{container:!0,spacing:2,children:(0,w.jsx)(d.Ay,{item:!0,xs:12,children:(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u06cc\u0634 \u062a\u0631"}),(0,w.jsx)(s.A,{id:"description","aria-describedby":"my-helper-text",fullWidth:!0,sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},multiline:!0,rows:3,value:h.description,onChange:t})]})})}),(0,w.jsx)(l.A,{variant:"middle",sx:{margin:"20px 0px",width:"98%"}})]}),(0,w.jsx)(u.A,{style:{fontWeight:700,color:"#231F20"},children:"\u062c\u0648\u0627\u06cc\u0632"}),(0,w.jsx)(d.Ay,{container:!0,spacing:2,children:(0,w.jsx)(d.Ay,{item:!0,xs:12,children:(0,w.jsxs)(o.A,{sx:{mt:3},children:[(0,w.jsx)(u.A,{children:"\u062c\u0627\u06cc\u0632\u0647 \u0647\u0627"}),(0,w.jsx)(c.A,{multiple:!0,fullWidth:!0,disablePortal:!0,id:"gifts",limitTags:2,options:i,getOptionLabel:function(e){return e.name},renderInput:function(e){return(0,w.jsx)(s.A,(0,r.A)({},e))},onChange:function(e,t){m("gifts",t.map((function(e){return e.id})))},isOptionEqualToValue:function(e,t){return e.id===t.id},noOptionsText:"\u0645\u0648\u0631\u062f\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f",sx:{".MuiOutlinedInput-root":{padding:"5px"}}})]})})}),(0,w.jsx)(o.A,{sx:{display:"flex",justifyContent:"center",gap:2,mt:3},children:(0,w.jsx)(p.A,{disabled:!1,variant:"contained",style:{width:"25%"},type:"submit",loading:a,children:"\u062b\u0628\u062a \u062c\u0627\u06cc\u0632\u0647"})})]})}})})})}},74745:(e,t,i)=>{i.d(t,{A:()=>m});var r=i(98587),n=i(58168),a=i(9950),o=i(60533),l=i(88465),s=i(97497),d=i(59254),c=i(48283),u=i(40777),h=i(44414),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,d.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,i=e.ownerState;return(0,n.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.X4)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,n.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,i=e.ownerState;return(0,n.A)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,i=e.ownerState;return(0,n.A)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,n.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,d.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var i=e.ownerState;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,i=e.ownerState;return(0,n.A)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),f=a.forwardRef((function(e,t){var i=(0,c.A)({props:e,name:"MuiDivider"}),a=i.absolute,s=void 0!==a&&a,d=i.children,f=i.className,m=i.component,v=void 0===m?d?"div":"hr":m,A=i.flexItem,b=void 0!==A&&A,j=i.light,w=void 0!==j&&j,y=i.orientation,S=void 0===y?"horizontal":y,F=i.role,C=void 0===F?"hr"!==v?"separator":void 0:F,_=i.textAlign,I=void 0===_?"center":_,W=i.variant,k=void 0===W?"fullWidth":W,q=(0,r.A)(i,p),R=(0,n.A)({},i,{absolute:s,component:v,flexItem:b,light:w,orientation:S,role:C,textAlign:I,variant:k}),D=function(e){var t=e.absolute,i=e.children,r=e.classes,n=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,d={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.A)(d,u.K,r)}(R);return(0,h.jsx)(x,(0,n.A)({as:v,className:(0,o.A)(D.root,f),role:C,ref:t,ownerState:R},q,{children:d?(0,h.jsx)(g,{className:D.wrapper,ownerState:R,children:d}):null}))}));f.muiSkipListHighlight=!0;const m=f}}]);