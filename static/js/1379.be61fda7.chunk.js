"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[1379],{78468:(e,s,r)=>{r.d(s,{A:()=>i});var a=r(80045),t=(r(9950),r(4139)),n=r(44414),o=["children"];function i(e){var s=e.children;(0,a.A)(e,o);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.Ay,{container:!0,sx:{height:"100vh"},children:[(0,n.jsx)(t.Ay,{item:!0,md:5,sx:{backgroundColor:"#CCEEF0",display:"flex",justifyContent:"center",alignItems:"center"}}),(0,n.jsx)(t.Ay,{item:!0,md:7,sx:{backgroundColor:"#E5E5E5",display:"flex",justifyContent:"center",alignItems:"center"},children:s})]})})}},63760:(e,s,r)=>{r.r(s),r.d(s,{default:()=>$});var a=r(89379),t=r(9950),n=r(14857),o=r(22433),i=r(5544),d=r(95537),l=r(14341),c=r(46483),p=r(57073),x=r(37072),u=r(16673),h=r(41608),A=r(4721),m=r(33507),b=r(6445),g=r(4534),j=r(46565),w=r(12714),f=r(68179),y=r(10185),k=r.n(y),v=r(58926),S=r(74883),C=r(96011),I=r.n(C),F=r(29031),B=r(44414);const R=function(e){var s=(0,t.useState)(!1),r=(0,i.A)(s,2),a=r[0],n=r[1],o=(0,t.useState)(!1),y=(0,i.A)(o,2),C=y[0],R=y[1],D=((0,t.useRef)(),(0,u.useHistory)()),E=(0,m.A)().registry,q=(0,S.A)().setScore,z=(0,F.dh)().enqueueSnackbar;function Y(){n(!a)}function $(){R(!C)}return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(b.l1,{initialValues:{password:"",password2:""},validationSchema:v.Ik().shape({password:v.Yj().min(8,"\u067e\u0633\u0648\u0631\u062f \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u06f8 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f").max(255).required("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u062c\u0628\u0627\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f").matches("(?=.*[A-Z]).","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0631\u0648\u0641 \u0628\u0632\u0631\u06af \u0628\u0627\u0634\u062f").matches("(?=.*[a-z]).","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0631\u0648\u0641 \u06a9\u0648\u0686\u06a9 \u0628\u0627\u0634\u062f").matches("(?=.*[0-9])","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9 \u0639\u062f\u062f \u06f0 \u062a\u0627 \u06f9 \u0628\u0627\u0634\u062f").matches("([^A-Za-z0-9])","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u062e\u0627\u0635 \u0628\u0627\u0634\u062f \u0628\u0627\u0634\u062f"),password2:v.Yj().oneOf([v.KR("password"),null],"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0648 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u06cc\u06a9\u0633\u0627\u0646 \u0628\u0627\u0634\u0646\u062f").required("\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u062c\u0628\u0627\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f")}),onSubmit:function(s,r){r.setErrors;var a=r.setSubmitting;a(!0),h.A.post("".concat(A.J,"/api/users/"),{mobile:e.location.state.mobile,password:k().hashSync(s.password,"$2a$10$p.DMYfbaIgtkCH7rseuMnu")}).then((function(e){200===e.status&&(a(!1),localStorage.setItem("token",e.headers["x-auth-token"]),I().defaults.headers.common.Authorization="Bearer ".concat(e.headers["x-auth-token"]),E(e.headers["x-auth-token"]),localStorage.setItem("user",JSON.stringify(e.data)),q(),D.push("/"+e.data.profile_state.toLowerCase()))})).catch((function(e){417===e.response.status?z(e.response.data.error,{variant:"error"}):z("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"}),a(!1)}))},children:function(e){var s=e.errors,r=e.handleBlur,t=e.handleChange,n=e.handleSubmit,o=e.isSubmitting,i=e.touched,u=e.values;return(0,B.jsxs)("form",{noValidate:!0,onSubmit:n,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",gap:"159px",position:"absolute",width:"90%",height:"90%",left:"20px",top:"57px"},children:[(0,B.jsxs)(d.A,{children:[(0,B.jsx)(g.A,{children:"\u0648\u0631\u0648\u062f \u0628\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),(0,B.jsx)(x.A,{children:"\u062c\u0647\u062a \u0648\u0631\u0648\u062f\u060c \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f:"}),(0,B.jsxs)(d.A,{children:[(0,B.jsx)(d.A,{sx:{mt:2},children:(0,B.jsx)(l.A,{id:"password","aria-describedby":"my-helper-text",fullWidth:!0,placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},value:u.password,onChange:t,onBlur:r,error:Boolean(i.password&&s.password),helperText:i.password&&s.password,type:!1===a?"password":"text",InputProps:{endAdornment:(0,B.jsx)(c.A,{position:"end",tabIndex:-1,children:(0,B.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:Y,edge:"end",tabIndex:-1,children:a?(0,B.jsx)(f.A,{sx:{color:"#00AAB5"}}):(0,B.jsx)(w.A,{sx:{color:"#00AAB5"}})})})}})}),(0,B.jsx)(d.A,{children:(0,B.jsx)(l.A,{id:"password2","aria-describedby":"my-helper-text",fullWidth:!0,placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},value:u.password2,onChange:t,onBlur:r,error:Boolean(i.password2&&s.password2),helperText:i.password2&&s.password2,type:!1===C?"password":"text",InputProps:{endAdornment:(0,B.jsx)(c.A,{position:"end",tabIndex:-1,children:(0,B.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:$,edge:"end",tabIndex:-1,children:C?(0,B.jsx)(f.A,{sx:{color:"#00AAB5"}}):(0,B.jsx)(w.A,{sx:{color:"#00AAB5"}})})})}})})]})]}),(0,B.jsx)(d.A,{children:(0,B.jsx)(j.A,{disabled:o,type:"submit",loading:o,children:"\u062b\u0628\u062a"})})]})}})})};var D=r(13045),E=r(38986),q=r(60172),z=r(78468);const Y=function(e){var s=(0,t.useState)(!1),r=(0,i.A)(s,2),a=r[0],n=r[1],o=(0,t.useState)(!1),x=(0,i.A)(o,2),g=x[0],j=x[1],y=((0,t.useRef)(),(0,u.useHistory)()),C=(0,m.A)().registry,R=(0,S.A)().setScore,Y=(0,F.dh)().enqueueSnackbar;function $(){n(!a)}function H(){j(!g)}return(0,B.jsx)(z.A,{children:(0,B.jsx)(d.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 30px 20px",gap:"60px",position:"absolute",width:"386px",height:"500px",background:"#FFFFFF",border:"1px solid #D3D2D2",borderRadius:"10px"},children:(0,B.jsx)(b.l1,{initialValues:{password:"",password2:""},validationSchema:v.Ik().shape({password:v.Yj().min(8,"\u067e\u0633\u0648\u0631\u062f \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u06f8 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f").max(255).required("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u062c\u0628\u0627\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f").matches("(?=.*[A-Z]).","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0631\u0648\u0641 \u0628\u0632\u0631\u06af \u0628\u0627\u0634\u062f").matches("(?=.*[a-z]).","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0631\u0648\u0641 \u06a9\u0648\u0686\u06a9 \u0628\u0627\u0634\u062f").matches("(?=.*[0-9])","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9 \u0639\u062f\u062f \u06f0 \u062a\u0627 \u06f9 \u0628\u0627\u0634\u062f").matches("([^A-Za-z0-9])","\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u0634\u0627\u0645\u0644 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u062e\u0627\u0635 \u0628\u0627\u0634\u062f \u0628\u0627\u0634\u062f"),password2:v.Yj().oneOf([v.KR("password"),null],"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0648 \u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06cc\u062f \u06cc\u06a9\u0633\u0627\u0646 \u0628\u0627\u0634\u0646\u062f").required("\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u062c\u0628\u0627\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f")}),onSubmit:function(s,r){r.setErrors;var a=r.setSubmitting;a(!0),h.A.post("".concat(A.J,"/api/users/"),{mobile:e.location.state.mobile,password:k().hashSync(s.password,"$2a$10$p.DMYfbaIgtkCH7rseuMnu")}).then((function(e){a(!1),200===e.status&&(localStorage.setItem("token",e.headers["x-auth-token"]),I().defaults.headers.common.Authorization="Bearer ".concat(e.headers["x-auth-token"]),C(e.headers["x-auth-token"]),localStorage.setItem("user",JSON.stringify(e.data)),R(),y.push("/"+e.data.profile_state.toLowerCase()))})).catch((function(e){417===e.response.status?Y(e.response.data.error,{variant:"error"}):Y("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"}),a(!1)}))},children:function(e){var s=e.errors,r=e.handleBlur,t=e.handleChange,n=e.handleSubmit,o=e.isSubmitting,i=e.touched,x=e.values;return(0,B.jsxs)("form",{noValidate:!0,onSubmit:n,style:{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",width:"100%",height:"100%"},children:[(0,B.jsxs)(d.A,{sx:{width:"100%"},children:[(0,B.jsx)(E.A,{children:"\u0648\u0631\u0648\u062f \u0628\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),(0,B.jsx)(d.A,{sx:{mt:2},children:(0,B.jsx)(q.A,{children:"\u062c\u0647\u062a \u0648\u0631\u0648\u062f\u060c \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f:"})}),(0,B.jsxs)(d.A,{children:[(0,B.jsx)(d.A,{sx:{mt:2},children:(0,B.jsx)(l.A,{id:"password","aria-describedby":"my-helper-text",fullWidth:!0,placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},value:x.password,error:Boolean(i.password&&s.password),helperText:i.password&&s.password,onChange:t,onBlur:r,type:!1===a?"password":"text",InputProps:{endAdornment:(0,B.jsx)(c.A,{position:"end",tabIndex:-1,children:(0,B.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:$,edge:"end",tabIndex:-1,children:a?(0,B.jsx)(f.A,{sx:{color:"#00AAB5"}}):(0,B.jsx)(w.A,{sx:{color:"#00AAB5"}})})})}})}),(0,B.jsx)(d.A,{children:(0,B.jsx)(l.A,{id:"password2","aria-describedby":"my-helper-text",fullWidth:!0,placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",sx:{background:"#F2F2F2",borderRadius:"4px",margin:"6px 3px"},value:x.password2,error:Boolean(i.password2&&s.password2),helperText:i.password2&&s.password2,onChange:t,onBlur:r,type:!1===g?"password":"text",InputProps:{endAdornment:(0,B.jsx)(c.A,{position:"end",tabIndex:-1,children:(0,B.jsx)(p.A,{"aria-label":"toggle password visibility",onClick:H,edge:"end",tabIndex:-1,children:g?(0,B.jsx)(f.A,{sx:{color:"#00AAB5"}}):(0,B.jsx)(w.A,{sx:{color:"#00AAB5"}})})})}})})]})]}),(0,B.jsx)(d.A,{sx:{padding:"0px",margin:0,width:"100%"},children:(0,B.jsx)(D.A,{disabled:o,loading:o,children:"\u062b\u0628\u062a"})})]})}})})})};const $=function(e){var s=(0,n.A)(),r=(0,o.A)(s.breakpoints.down("md"));return(0,B.jsx)(B.Fragment,{children:r?(0,B.jsx)(R,(0,a.A)({},e)):(0,B.jsx)(Y,(0,a.A)({},e))})}}}]);