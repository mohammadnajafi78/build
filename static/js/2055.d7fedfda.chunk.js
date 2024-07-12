"use strict";(self.webpackChunkbts=self.webpackChunkbts||[]).push([[2055],{78468:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(80045),o=(n(9950),n(4139)),r=n(44414),u=["children"];function a(t){var e=t.children;(0,i.A)(t,u);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Ay,{container:!0,sx:{height:"100vh"},children:[(0,r.jsx)(o.Ay,{item:!0,md:5,sx:{backgroundColor:"#CCEEF0",display:"flex",justifyContent:"center",alignItems:"center"}}),(0,r.jsx)(o.Ay,{item:!0,md:7,sx:{backgroundColor:"#E5E5E5",display:"flex",justifyContent:"center",alignItems:"center"},children:e})]})})}},59170:(t,e,n)=>{n.d(e,{A:()=>i});const i=function(t){return t.replace(/[\u06f0-\u06f9]/g,(function(t){return"\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9".indexOf(t)}))}},42055:(t,e,n)=>{n.r(e),n.d(e,{default:()=>G});var i=n(89379),o=n(9950),r=n(14857),u=n(22433),a=n(5544),p=n(95537),s=n(6445),l=n(4534),d=n(37072),c=n(46565),h=n(64467),x=n(80045),m=n(67535),g=n(44414),f=["children"];function A(t){var e,n=t.children,o=(0,x.A)(t,f);return(0,g.jsx)(m.A,(0,i.A)((0,i.A)({color:"primary",fullWidth:!0,type:"submit",variant:"contained",sx:(e={padding:"10px",color:"#4F4C4D",minHeight:"44px",borderRadius:"4px"},(0,h.A)(e,"borderRadius","4px"),(0,h.A)(e,"fontStyle","normal"),(0,h.A)(e,"fontWeight",400),(0,h.A)(e,"fontSize","16px"),(0,h.A)(e,"lineHeight","24px"),(0,h.A)(e,"backgroundColor","#DFDFDF"),(0,h.A)(e,"marginBottom","10px"),(0,h.A)(e,"fontFamily","IRANSans"),e)},o),{},{children:n}))}var y=n(41608),b=n(16673),v=n(23029),j=n(92901),C=n(9417),w=n(85501),I=n(29426);const k=function(t){(0,w.A)(n,t);var e=(0,I.A)(n);function n(t){var i;return(0,v.A)(this,n),(i=e.call(this,t)).state={time:{}},i.timer=0,i.startTimer=i.startTimer.bind((0,C.A)(i)),i.countDown=i.countDown.bind((0,C.A)(i)),i}return(0,j.A)(n,[{key:"secondsToTime",value:function(t){var e=t%3600,n=e%60;return{h:Math.floor(t/3600),m:Math.floor(e/60),s:Math.ceil(n)}}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"startTimer",value:function(){0==this.timer&&this.props.seconds()>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){this.setState({time:this.secondsToTime(this.props.seconds())}),0==this.props.seconds()&&(this.props.onEnd(),clearInterval(this.timer))}},{key:"render",value:function(){return(0,g.jsx)(g.Fragment,{children:this.state.time.s||this.state.time.m||this.state.time.h?(0,g.jsx)("div",{children:"".concat(("0"+this.state.time.s).slice(-2)," : \n        ").concat(("0"+this.state.time.m).slice(-2),"  :\n         ").concat(("0"+this.state.time.h).slice(-2)," ")}):(0,g.jsx)("div",{children:"00:00:00"})})}}]),n}(o.Component);var E=n(59051),B=n.n(E),D=n(4721),S=n(96011),F=n.n(S),T=n(33507),R=n(14341),W=n(59254),_=(0,W.Ay)(R.A)({"& .MuiFilledInput-input":{textAlign:"center",padding:"18px"},"& .Mui-error":{backgroundColor:"#FEEEEC"},"& .MuiFormHelperText-root":{backgroundColor:"white"}}),K=n(74883),M=n(58926),H=n(59170),J=n(61310),V=n(29031);const q=function(t){var e=(0,b.useHistory)(),n=(0,o.useState)(!1),i=(0,a.A)(n,2),r=i[0],u=i[1],h=(0,T.A)().registry,x=(0,K.A)().setScore,m=(0,V.dh)().enqueueSnackbar;return(0,g.jsx)(s.l1,{initialValues:{input1:"",input2:"",input3:"",input4:"",input5:"",input6:""},validationSchema:M.Ik().shape({}),onSubmit:function(n,i){var o=i.setErrors;i.setSubmitting,i.setFieldError;"entry"===t.location.state.status?y.A.post("".concat(D.J,"/api/users/login_with_otp/"),{verification_code:"".concat((0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)),username:t.location.state.mobile}).then((function(t){200===t.status?(localStorage.setItem("token",t.headers["x-auth-token"]),(0,J.q)(),F().defaults.headers.common.Authorization="Bearer ".concat(t.headers["x-auth-token"]),localStorage.setItem("user",JSON.stringify(t.data)),h(t.headers["x-auth-token"]),x(),e.push("/"+t.data.profile_state.toLowerCase())):o({input1:!0,input2:!0,input3:!0,input4:!0,input5:!0,input6:!0})})).catch((function(t){o({input1:!0,input2:!0,input3:!0,input4:!0,input5:!0,input6:!0}),417===t.response.status?m(t.response.data.error,{variant:"error"}):m("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})})):"forgot"===t.location.state.status?e.push({pathname:"/newPassword",state:{mobile:t.location.state.mobile,verification_code:(0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)}}):y.A.post("".concat(D.J,"/api/users/mobile_verification/"),{verification_code:"".concat((0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)),mobile:t.location.state.mobile}).then((function(n){200===n.status&&e.push({pathname:"/registerPass",state:{mobile:t.location.state.mobile}})})).catch((function(t){417===t.response.status?m(t.response.data.error,{variant:"error"}):m("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))},children:function(e){var n=e.errors,i=(e.handleBlur,e.handleChange),o=e.handleSubmit,a=e.isSubmitting,s=e.touched,h=e.values,x=e.setFieldValue;return(0,g.jsxs)("form",{noValidate:!0,onSubmit:o,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",gap:"159px",position:"absolute",width:"90%",height:"90%",left:"20px",top:"57px"},children:[(0,g.jsxs)(p.A,{children:[(0,g.jsx)(l.A,{children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f"}),(0,g.jsx)(d.A,{children:"\u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0628\u0647 ".concat(t.location.state.mobile," \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f:")}),(0,g.jsxs)(p.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"0px",marginTop:"6px",height:"50px",direction:"rtl"},children:[(0,g.jsx)(_,{id:"input1",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input1,onChange:function(t){i(t,"input1"),1===t.target.value.length&&document.getElementById("input2").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input1").focus()},autoFocus:!0,error:Boolean(s.input1&&n.input1),helperText:s.input1&&n.input1,variant:"filled"}),(0,g.jsx)(_,{id:"input2",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input2,onChange:function(t){i(t,"input2"),1===t.target.value.length&&document.getElementById("input3").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input1").focus()},error:Boolean(s.input2&&n.input2),helperText:s.input2&&n.input2,variant:"filled"}),(0,g.jsx)(_,{id:"input3",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input3,onChange:function(t){i(t,"input3"),1===t.target.value.length&&document.getElementById("input4").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input2").focus()},error:Boolean(s.input3&&n.input3),helperText:s.input3&&n.input3,variant:"filled"}),(0,g.jsx)(_,{id:"input4",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input4,onChange:function(t){i(t,"input4"),1===t.target.value.length&&document.getElementById("input5").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input3").focus()},error:Boolean(s.input4&&n.input4),helperText:s.input4&&n.input4,variant:"filled"}),(0,g.jsx)(_,{id:"input5",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input5,onChange:function(t){i(t,"input5"),1===t.target.value.length&&document.getElementById("input6").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input4").focus()},error:Boolean(s.input5&&n.input5),helperText:s.input5&&n.input5,variant:"filled"}),(0,g.jsx)(_,{id:"input6",type:"tel","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:h.input6,onChange:function(t){i(t,"input6"),1===t.target.value.length&&(document.getElementById("input7").focus(),o())},onKeyDown:function(t){8===t.keyCode&&(x("input6",""),document.getElementById("input5").focus())},error:Boolean(s.input6&&n.input6),helperText:s.input6&&n.input6,variant:"filled"})]})]}),(0,g.jsxs)(p.A,{children:[(0,g.jsx)(d.A,{children:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0634\u062a\u0628\u0627\u0647 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u06cc\u062f\u061f"}),!r&&(0,g.jsx)(A,{disabled:a,id:"input7",children:(0,g.jsx)(k,{seconds:function(){return function(t){var e=B()(),n=60*+t.getHours()*60+60*+t.getMinutes()+ +t.getSeconds(),i="00:02:00".split(":"),o=60*+i[0]*60+60*+i[1]+ +i[2],r=new Date(1970,0,1);r.setSeconds(n+o);var u=r.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1"),a=60*+u.split(":")[0]*60+60*+u.split(":")[1]+ +u.split(":")[2],p=3600*parseInt(e.hour())+60*parseInt(e.minutes())+parseInt(e.seconds());return a-p>0?a-p:0}(new Date(t.location.state.lastUpdate))},onEnd:function(){u(!0)}})}),r&&(0,g.jsx)(c.A,{disabled:a,loading:a,onClick:function(){o()},children:"\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f \u06a9\u062f"})]})]})}})};var z=n(38986),N=n(60172),P=["children"];function O(t){var e,n=t.children,o=(0,x.A)(t,P);return(0,g.jsx)(m.A,(0,i.A)((0,i.A)({color:"primary",fullWidth:!0,type:"submit",variant:"contained",sx:(e={padding:"10px",color:"#4F4C4D",minHeight:"36px",borderRadius:"4px"},(0,h.A)(e,"borderRadius","4px"),(0,h.A)(e,"fontStyle","normal"),(0,h.A)(e,"fontWeight",400),(0,h.A)(e,"fontSize","14px"),(0,h.A)(e,"lineHeight","20px"),(0,h.A)(e,"backgroundColor","#DFDFDF"),(0,h.A)(e,"marginBottom","10px"),(0,h.A)(e,"fontFamily","IRANSans"),e)},o),{},{children:n}))}var L=n(78468),U=(0,W.Ay)(R.A)({"& .MuiFilledInput-input":{textAlign:"center",padding:"18px"},"& .Mui-error":{backgroundColor:"#FEEEEC"},"& .MuiFormHelperText-root":{backgroundColor:"white"}});const $=function(t){var e=(0,b.useHistory)(),n=(0,o.useState)(!1),i=(0,a.A)(n,2),r=i[0],u=i[1],l=(0,T.A)().registry,d=(0,K.A)().setScore,h=(0,V.dh)().enqueueSnackbar;return(0,g.jsx)(L.A,{children:(0,g.jsx)(p.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 30px 20px",gap:"60px",position:"absolute",width:"386px",height:"500px",background:"#FFFFFF",border:"1px solid #D3D2D2",borderRadius:"10px"},children:(0,g.jsx)(s.l1,{initialValues:{input1:"",input2:"",input3:"",input4:"",input5:"",input6:""},validationSchema:M.Ik().shape({}),onSubmit:function(n,i){var o=i.setErrors;i.setSubmitting,i.setFieldError;"entry"===t.location.state.status?y.A.post("".concat(D.J,"/api/users/login_with_otp/"),{verification_code:"".concat((0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)),username:t.location.state.mobile}).then((function(t){200===t.status?(localStorage.setItem("token",t.headers["x-auth-token"]),(0,J.q)(),F().defaults.headers.common.Authorization="Bearer ".concat(t.headers["x-auth-token"]),l(t.headers["x-auth-token"]),localStorage.setItem("user",JSON.stringify(t.data)),d(),e.push("/"+t.data.profile_state.toLowerCase())):o({input1:!0,input2:!0,input3:!0,input4:!0,input5:!0,input6:!0})})).catch((function(t){417===t.response.status?h(t.response.data.error,{variant:"error"}):h("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"}),o({input1:!0,input2:!0,input3:!0,input4:!0,input5:!0,input6:!0})})):"forgot"===t.location.state.status?e.push({pathname:"/newPassword",state:{mobile:t.location.state.mobile,verification_code:(0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)}}):y.A.post("".concat(D.J,"/api/users/mobile_verification/"),{verification_code:"".concat((0,H.A)(n.input1)+(0,H.A)(n.input2)+(0,H.A)(n.input3)+(0,H.A)(n.input4)+(0,H.A)(n.input5)+(0,H.A)(n.input6)),mobile:t.location.state.mobile}).then((function(n){200===n.status&&e.push({pathname:"/registerPass",state:{mobile:t.location.state.mobile}})})).catch((function(t){417===t.response.status?h(t.response.data.error,{variant:"error"}):h("\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647! \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",{variant:"error"})}))},children:function(e){var n=e.errors,i=(e.handleBlur,e.handleChange),o=e.handleSubmit,a=e.isSubmitting,s=e.touched,l=e.values,d=e.setFieldValue;return(0,g.jsxs)("form",{noValidate:!0,onSubmit:o,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0px",gap:"159px",position:"absolute",width:"90%",height:"90%",left:"20px",top:"27px"},children:[(0,g.jsxs)(p.A,{children:[(0,g.jsx)(z.A,{children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f"}),(0,g.jsx)(N.A,{children:"\u06a9\u062f \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0628\u0647 ".concat(t.location.state.mobile," \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f:")}),(0,g.jsxs)(p.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"0px",marginTop:"6px",height:"50px",direction:"rtl"},children:[(0,g.jsx)(U,{id:"input1","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input1,onChange:function(t){i(t,"input1"),1===t.target.value.length&&document.getElementById("input2").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input1").focus()},autoFocus:!0,error:Boolean(s.input1&&n.input1),helperText:s.input1&&n.input1,variant:"filled"}),(0,g.jsx)(U,{id:"input2","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input2,onChange:function(t){i(t,"input2"),1===t.target.value.length&&document.getElementById("input3").focus()},onKeyDown:function(t){console.log("event",t.keyCode),8===t.keyCode&&document.getElementById("input1").focus()},type:"tel",error:Boolean(s.input2&&n.input2),helperText:s.input2&&n.input2,variant:"filled"}),(0,g.jsx)(U,{id:"input3","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input3,onChange:function(t){i(t,"input3"),1===t.target.value.length&&document.getElementById("input4").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input2").focus()},error:Boolean(s.input3&&n.input3),helperText:s.input3&&n.input3,variant:"filled"}),(0,g.jsx)(U,{id:"input4","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input4,onChange:function(t){i(t,"input4"),1===t.target.value.length&&document.getElementById("input5").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input3").focus()},error:Boolean(s.input4&&n.input4),helperText:s.input4&&n.input4,variant:"filled"}),(0,g.jsx)(U,{id:"input5","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input5,onChange:function(t){i(t,"input5"),1===t.target.value.length&&document.getElementById("input6").focus()},onKeyDown:function(t){8===t.keyCode&&document.getElementById("input4").focus()},error:Boolean(s.input5&&n.input5),helperText:s.input5&&n.input5,variant:"filled"}),(0,g.jsx)(U,{id:"input6","aria-describedby":"my-helper-text",fullWidth:!0,sx:{width:"50px",height:"50px",borderRadius:"4px",margin:"6px 3px",textAlign:"center"},value:l.input6,onChange:function(t){i(t,"input6"),1===t.target.value.length&&(document.getElementById("input7").focus(),o())},onKeyDown:function(t){8===t.keyCode&&(d("input6",""),document.getElementById("input5").focus())},error:Boolean(s.input6&&n.input6),helperText:s.input6&&n.input6,variant:"filled"})]})]}),(0,g.jsxs)(p.A,{children:[(0,g.jsx)(N.A,{children:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0634\u062a\u0628\u0627\u0647 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u06cc\u062f\u061f"}),!r&&(0,g.jsx)(O,{disabled:a,id:"input7",children:(0,g.jsx)(k,{seconds:function(){return function(t){var e=B()(),n=60*+t.getHours()*60+60*+t.getMinutes()+ +t.getSeconds(),i="00:02:00".split(":"),o=60*+i[0]*60+60*+i[1]+ +i[2],r=new Date(1970,0,1);r.setSeconds(n+o);var u=r.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1"),a=60*+u.split(":")[0]*60+60*+u.split(":")[1]+ +u.split(":")[2],p=3600*parseInt(e.hour())+60*parseInt(e.minutes())+parseInt(e.seconds());return a-p>0?a-p:0}(new Date(t.location.state.lastUpdate))},onEnd:function(){u(!0)}})}),r&&(0,g.jsx)(c.A,{disabled:a,loading:a,onClick:function(){o()},children:"\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f \u06a9\u062f"})]})]})}})})})};const G=function(t){var e=(0,r.A)(),n=(0,u.A)(e.breakpoints.down("md"));return(0,g.jsx)(g.Fragment,{children:n?(0,g.jsx)(q,(0,i.A)({},t)):(0,g.jsx)($,(0,i.A)({},t))})}}}]);