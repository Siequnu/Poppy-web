(this.webpackJsonppoppy=this.webpackJsonppoppy||[]).push([[0],{129:function(e,t,a){},221:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(49),i=a.n(r),c=(a(221),a(8)),o=a(19),l=a(25),u=a(117),d=a(187),h=a(17),b=a.n(h),m=a(22),p=a(351);function j(){var e=y.currentUserValue;return e&&e.access_token?{Authorization:"Bearer ".concat(e.access_token)}:{}}function f(){var e=y.currentUserValue;return e&&e.access_token?e.access_token:{}}function x(){var e=y.currentUserValue;return!(!e||!e.refresh_token)&&e.refresh_token}function g(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){-1!==[401,403].indexOf(e.status)&&y.logout();var n=a&&a.error||e.statusText;return Promise.reject(n)}return a}))}var O={authLogin:"/auth/login",authRefresh:"/auth/refresh",afterLogout:"/login",resetWithToken:"/auth/reset/token",authSignUp:"/auth/register",authValidate:"/auth/validate",confirmEmail:"/auth/confirm",userProfileUrl:"/auth/profile",getRoles:"/auth/roles",getUsers:"/auth/users/get"},v=new p.a(JSON.parse(localStorage.getItem("currentUser"))),y={login:function(e,t){return w.apply(this,arguments)},logout:function(){localStorage.removeItem("currentUser"),v.next(null)},signUp:function(e,t,a){return C.apply(this,arguments)},updateUser:function(e){localStorage.setItem("currentUser",JSON.stringify(e)),v.next(e)},validateRegistration:function(e,t){return S.apply(this,arguments)},confirmEmail:function(e){return k.apply(this,arguments)},currentUser:v.asObservable(),get currentUserValue(){return v.value}};function w(){return(w=Object(m.a)(b.a.mark((function e(t,a){var n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})},e.next=3,fetch(O.authLogin,n);case 3:return s=e.sent,e.next=6,g(s);case 6:return r=e.sent,localStorage.setItem("currentUser",JSON.stringify(r)),v.next(r),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(m.a)(b.a.mark((function e(t,a,n){var s,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,email:a})},e.next=3,fetch(O.authSignUp,s);case 3:return r=e.sent,e.next=6,g(r);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(m.a)(b.a.mark((function e(t,a){var n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:a})},e.next=3,fetch(O.authValidate,n);case 3:return s=e.sent,e.next=6,g(s);case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(m.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t})},e.next=3,fetch(O.confirmEmail,a);case 3:return n=e.sent,e.next=6,g(n);case 6:if(!e.sent.hasOwnProperty("success")){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(80),T=a.n(N);function U(e,t){return I.apply(this,arguments)}function I(){return(I=Object(m.a)(b.a.mark((function e(t,a){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.post(t,a,{headers:j()});case 3:return n=e.sent,s=n.data,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=a(1),B=["component"],P=function(e){var t=e.component,a=Object(d.a)(e,B);return Object(A.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return y.currentUserValue?Object(A.jsx)(t,Object(u.a)({},e)):Object(A.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=(a(129),a(52)),L=a(143),q=a(76);var F=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar;y.currentUserValue&&e.history.push("/app");var a=Object(_.a)({initialValues:{username:"",password:""},onSubmit:function(a){y.login(a.username,a.password).then((function(n){var s=(e.location.state||{from:{pathname:"/"}}).from;e.history.push(s),t({text:"Welcome, ".concat(a.username),open:!0,severity:"success"})})).catch((function(e){t({text:e||"An error occured.",open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"username",name:"username",label:"Username",value:a.values.username,onChange:a.handleChange,error:a.touched.username&&Boolean(a.errors.username)}),Object(A.jsx)(L.a,{fullWidth:!0,id:"password",variant:"standard",name:"password",label:"Password",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(A.jsx)(q.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(q.a,{component:o.b,to:"/reset",className:"ResetPasswordButton",children:"Forgot password"}),Object(A.jsx)(q.a,{component:o.b,to:"/register",children:"New account"})]})})}));var W=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar;return Object(A.jsx)(q.a,{variant:"contained",onClick:function(){return t({text:"You have logged out.",open:!0,severity:"success"}),y.logout(),void e.history.push(O.afterLogout)},children:"Logout"})}));var E=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar,a=Object(l.g)().token,n=Object(_.a)({initialValues:{password:""},onSubmit:function(n){n.token=a,fetch(O.resetWithToken,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("/login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"password",name:"password",label:"New password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(q.a,{variant:"contained",fullWidth:!0,type:"submit",children:"Set new password"})]})})}));var M=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar,a=Object(_.a)({initialValues:{email:""},onSubmit:function(a){fetch("/auth/reset",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(a.hasOwnProperty("error"))throw a.error;t({text:a.success,open:!0,severity:"success"}),e.history.push("login")})).catch((function(e){t({text:e,open:!0,severity:"error"})}))}});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"email",name:"email",label:"Email",type:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(A.jsx)(q.a,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Send password reset email"}),Object(A.jsx)(q.a,{component:o.b,to:"/login",children:"Back to Login"})]})})}));var V,z=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar;y.currentUserValue&&e.history.push("/");var a=function(){var e=Object(m.a)(b.a.mark((function e(a,n){var s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.validateRegistration(a.username,a.email);case 2:return s=e.sent,r={},["admin","null","god"].includes(a.username)&&(r.username="Please choose a different username"),s.username_exists&&(r.username="This username is already taken"),s.email_exists&&(r.email="This email is already registered"),Object.entries(r).map((function(e){return t({text:e.pop(),open:!0,severity:"warning"}),!0})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n=Object(_.a)({initialValues:{username:"",email:"",password:""},onSubmit:function(a){y.signUp(a.username,a.email,a.password).then((function(n){e.history.push("/login"),t({text:"An email has been sent to ".concat(a.email,". Please open it to continue."),open:!0,severity:"success"})}))},validate:a});return Object(A.jsx)("div",{className:"AuthForm",children:Object(A.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"username",name:"username",label:"Username",value:n.values.username,onChange:n.handleChange,error:n.touched.username&&Boolean(n.errors.username)}),Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email)}),Object(A.jsx)(L.a,{fullWidth:!0,variant:"standard",id:"password",name:"password",label:"Password",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(A.jsx)(q.a,{className:"SubmitButton",color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"}),Object(A.jsx)(q.a,{component:o.b,to:"/login",className:"ResetPasswordButton",children:"Back to log-in"})]})})})),R=a(29),D=a(44),J=a(51),G=a.n(J);var H=Object(l.h)((function(e){var t=s.a.useContext(ot).setSnackbar,a=Object(l.g)().token;y.confirmEmail(a).then((function(a){t({text:a?"Your email has been confirmed. You can now log-in.":"We could not confirm your email.",open:!0,severity:a?"success":"error"}),e.history.push("/login")}));var n=Object(D.css)(V||(V=Object(R.a)(["display: block; margin: 0 auto;"])));return Object(A.jsx)(G.a,{color:"#213459",loading:!0,css:n,size:100})})),Z=(a(256),a(59)),Y=a(370),K=a(350),X=a(349),Q=(a(257),a(363)),$=a(364),ee=a(174),te=a.n(ee),ae=a(112),ne=a.n(ae),se=a(175),re=a.n(se),ie=a(115);function ce(){var e=s.a.useState(0),t=Object(c.a)(e,2),a=t[0],n=t[1],r=s.a.useState("web"),i=Object(c.a)(r,2),l=i[0],u=i[1],d=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.getInfo();case 2:t=e.sent,u(t.platform);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d(),Object(A.jsxs)(Q.a,{value:a,onChange:function(e,t){n(t)},showLabels:!0,className:"navbar",style:{paddingBottom:"web"===l?"0":"20px",height:"web"===l?"auto":"80px"},children:[Object(A.jsx)($.a,{component:o.b,to:"/",label:"Poppy",icon:Object(A.jsx)(te.a,{})}),Object(A.jsx)($.a,{component:o.b,to:"/art",label:"Art",icon:Object(A.jsx)(ne.a,{})}),Object(A.jsx)($.a,{component:o.b,to:"/contact",label:"Inquiry",icon:Object(A.jsx)(re.a,{})})]})}var oe=a(365),le=(a(258),a(113)),ue=a.n(le);function de(e){var t=s.a.useState("web"),a=Object(c.a)(t,2),n=a[0],r=a[1],i=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.getInfo();case 2:t=e.sent,r(t.platform);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i(),Object(A.jsxs)("div",{className:"TopBar",style:{paddingTop:"web"===n?"0":"35px",height:"75px"},children:[Object(A.jsx)(oe.a,{component:o.b,to:"/",className:"AccountLink",children:Object(A.jsx)("img",{className:"MyoLogo",src:"/apple-touch-icon.png",alt:"Myo app logo"})}),Object(A.jsx)("p",{className:"MyoText"}),Object(A.jsx)(oe.a,{component:o.b,to:"/user",className:"AccountLink",children:Object(A.jsx)(ue.a,{fontSize:"large",className:"AccountCircle"})})]})}a(259);function he(e){return Object(A.jsx)("div",{className:"PhotoDividerComponent",style:{backgroundImage:'url("'.concat(e.thumbnail,'"')}})}var be=a(176),me=a(177),pe=a.n(me),je=a(178),fe=a.n(je),xe=a(141),ge=a.n(xe);a(267);var Oe=Object(l.h)((function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{children:"Poppy"}),Object(A.jsx)("a",{className:"ButtonLink",href:"https://opensea.io/POPPIES",children:Object(A.jsx)(q.a,{size:"Large",variant:"contained",endIcon:Object(A.jsx)(ge.a,{}),children:" Our OpenSea store"})}),Object(A.jsx)(he,{thumbnail:"/nft-background.jpeg",style:{margin:"200px",display:"block"}}),Object(A.jsxs)(be.Element,{name:"about",className:"element",children:[Object(A.jsxs)("div",{className:"secondary-text",children:[Object(A.jsx)("h2",{children:"We are an art collective"}),Object(A.jsxs)("div",{className:"icon-grid",children:[Object(A.jsxs)("div",{className:"icon-grid-item",children:[Object(A.jsx)(pe.a,{className:"icon"}),Object(A.jsx)("p",{children:"We are a small group of artists from 4 continents."})]}),Object(A.jsxs)("div",{className:"icon-grid-item",children:[Object(A.jsx)(ne.a,{className:"icon"}),Object(A.jsx)("p",{children:"We are commited to digital art."})]}),Object(A.jsxs)("div",{className:"icon-grid-item",children:[Object(A.jsx)(fe.a,{className:"icon"}),Object(A.jsx)("p",{children:"We seek to provoke, educate, and challenge."})]})]})]}),Object(A.jsx)(q.a,{component:o.b,to:"/art",size:"Large",variant:"contained",endIcon:Object(A.jsx)(ge.a,{}),children:" Take a look at our art"})]}),Object(A.jsx)(he,{thumbnail:"/nft-background.jpeg",style:{margin:"200px",display:"block"}})]})}));a(268),a(269);function ve(){return Object(A.jsx)("div",{className:"SplashScreen",children:Object(A.jsx)("div",{className:"SplashScreenWrapper",children:Object(A.jsx)(n.Suspense,{children:Object(A.jsx)("img",{src:"/apple-touch-icon.png",alt:"Poppy icon"})})})})}a(270),a(271);var ye,we=a(53),Ce=a(179);var Se=Object(l.h)((function(e){var t=Object(we.b)(O.userProfileUrl).data,a=Object(D.css)(ye||(ye=Object(R.a)(["display: block; margin: 0 auto;"])));if(!t)return Object(A.jsx)(G.a,{color:"#213459",loading:!0,css:a,size:100});var n=y.currentUserValue,s=Object(Ce.a)(n.access_token).admin;return Object(A.jsx)("div",{className:"UserHero",style:{backgroundImage:'url("'.concat("/assets/tsinghua1.jpeg",'"')},children:Object(A.jsxs)("div",{className:"UserHeroContent",style:{background:"linear-gradient(90deg, rgba(131,255,231,1) 40%, rgba(255,255,255,0) 90%)"},children:[e.maximised?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W,{className:"UserHeroLink"}),s?Object(A.jsx)(q.a,{color:"primary",variant:"contained",onClick:function(){e.history.push("dashboard")},children:"Dashboard"}):null]}):null,Object(A.jsx)("h1",{children:t.username}),e.maximised?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("p",{children:[Object(A.jsx)(ue.a,{className:"Icon"})," Member since:"]}),Object(A.jsx)("p",{className:"caption",children:t.registered}),Object(A.jsx)("span",{className:"stamp is-nope",children:s?"Admin":"Member"})]}):null]})})})),ke=a(43),Ne=a(195),Te=a(353),Ue=a(366),Ie=Object(ke.a)({root:{flexGrow:1}});function Ae(e){var t=Ie();return Object(A.jsx)(Ne.a,{className:t.root,children:Object(A.jsx)(Te.a,{value:e.currentTab,onChange:function(t,a){e.setCurrentTab(a)},indicatorColor:"primary",textColor:"primary",centered:!0,children:Object(A.jsx)(Ue.a,{label:"My account"})})})}function Be(){var e=s.a.useState(0),t=Object(c.a)(e,2),a=t[0],n=t[1],r=s.a.useState(null),i=Object(c.a)(r,2),o=i[0],l=i[1];return s.a.useEffect((function(){l((function(){return Object(A.jsx)(Se,{maximised:!0})}))}),[a]),Object(A.jsxs)("div",{className:"UserMenu",children:[Object(A.jsx)(Ae,{currentTab:a,setCurrentTab:n}),o]})}a(272),a(273);var Pe=a(83),_e=a.n(Pe);function Le(e){return console.log({props:e}),Object(A.jsx)("div",{className:"Hero",style:{backgroundImage:'url("'.concat(e.thumbnail,'"')},children:Object(A.jsxs)("div",{className:"HeroContent",style:{background:"linear-gradient(90deg, rgba(200,34,130,1) 35%, rgba(255,255,255,0) 64%)"},children:[Object(A.jsx)("h1",{children:e.title}),Object(A.jsx)("p",{children:e.description}),e.comingSoon?Object(A.jsx)("span",{className:"stamp is-nope",children:"Coming soon"}):Object(A.jsx)(q.a,{component:o.b,to:e.link,size:"Large",style:{margin:"10px"},variant:"contained",endIcon:Object(A.jsx)(_e.a,{}),children:" View collection"})]})})}function qe(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!!e&&e-1,a=[{title:"The Iconic McLaren Senna Collection",caption:"The highly collectible 2017 sports car reimagined for the metaverse.",url:"https://opensea.io/collection/mclaren-senna",thumbnail:"https://lh3.googleusercontent.com/C89fBczQt7I_BUvLoy5gUSZZlFhoQE-ey93nbt5ZNjOxiQ9MAvih70u_3XU3XZ7WgvjgqqLGu1UtF2-wH0ZIpcqpYCOOuR4-VnuJ=w403",description:["McLaren\u2019s highly collectible 2017 Senna limited-production sports car reimagined for the metaverse.","Created with the collector in mind, these stunning original and authenticated digital recreations of McLaren's Senna capture the essence of true memorabilia."],items:[{title:"The Midnight Purple McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/RiJea_h7GVhlBvzJX2VMbEkIOsg8jVw9H92H_JcR3QD1yNZe554J2HOwIRPGkhqj3qyOC1grn7CYn43UIAjKCYVfpz7bpET6QOo7wA=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950989341295640577"},{title:"The Electric Blue McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/AFPPL3pwzlFFC0gVUIXv2e1Dqdq11c0tpIKpHFOfg_BzzgPoP1sPpLqGPY8An_HCCVt5U7Pd2hTLLnidTL1pd4upIYOr7iGj-IAs=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950958554970062849"},{title:"The Bumblebee Yellow McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/8y8yOdm6KI_74iinGsq_TLIZJN-928AjaMMWrKBZOrvb3NU7IkhCge7wlMgtnLFvDtJT8-gJYIuOWxpLlKqezGjP9XEnfuW58SYmxA=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950986042760757249"},{title:"The Ghost White McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/nga8x-pYDqbKlVlUiiFx0CB6roGBn2ERDOwKsLouzNVQgNkMAIHlaKXV0IL99-hTZqBohn6q57IB_UIFZTwN4yhPGNP3mnW7KgK0mtU=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950955256435179521"},{title:"The Carbon Black McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/93dCFE0AbxXtjBLWb9aKvsd0NuAOvfZwp3qkH9nOL1qimhimX-taZsZG8nD2i0LDpdaKXf2-jRRXatw1qXQjzc1TeneCDyylhVt5Xg=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950991540318896129"},{title:"The Fire Red McLaren Senna",thumbnail:"https://lh3.googleusercontent.com/C89fBczQt7I_BUvLoy5gUSZZlFhoQE-ey93nbt5ZNjOxiQ9MAvih70u_3XU3XZ7WgvjgqqLGu1UtF2-wH0ZIpcqpYCOOuR4-VnuJ=w289",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950965152039829505"}]},{title:"POPPY 2021 NFT Christmas Cards",caption:"Why not make it a real 2021 Christmas by owning an exclusive NFT Christmas Card!",url:"https://opensea.io/collection/christmas-card-2021",thumbnail:"https://lh3.googleusercontent.com/uR1bMxd3GmS53ZAV3z6Bm_wuMgZRIKjLffxAVhgKmhjaNs6-NrRWmBJi0EUeXuJx9n_cs9I36KsnBA9ikR9BgkVRbniwfW31iCPQtg=w540",description:["Why not make it a real 2021 Christmas by owning an exclusive NFT Christmas Card!"],items:[{title:"2021 Cambridge Christmas Card",thumbnail:"https://lh3.googleusercontent.com/NxUcF1Q6C_BO9jsULxF9aRCweY6Mud57PCKA7hUGEScSoHNzSPwkR1UOpqTcYMB9apcBaGqCTMsiUrKODzP6Eu8kk50qMDQcAGF0=w600",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950992639830523905"},{title:"2021 Grumpy Cat Christmas Card",thumbnail:"/assets/gifs/card23.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950984943249129473"},{title:"2021 Hohoho Christmas Card",thumbnail:"/assets/gifs/card22.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950982744225873921"},{title:"2021 The Cat Christmas Card",thumbnail:"/assets/gifs/card21.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950981644714246145"},{title:"2021 Santa Vibes Christmas Card",thumbnail:"/assets/gifs/card20.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950980545202618369"},{title:"2021 Snowy Train Christmas Card",thumbnail:"/assets/gifs/card19.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950979445690990593"},{title:"2021 Hoppy Santa Christmas Card",thumbnail:"/assets/gifs/card18.gif",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950978346179362817"}]},{title:"The Book of Meta, Chapter 1",caption:"A world first dynamic NFT - the Book of Meta. Only the owner can see what is in the book. And each owner can leave a message in the book.",url:"https://opensea.io/collection/christmas-card-2021",thumbnail:"https://i.redd.it/tvx2nu84i7z01.jpg",comingSoon:!0,description:["A world first dynamic NFT - the Book of Meta. Only the owner can see what is in the book. And each owner can leave a message in the book.","What message will you find in this book?"],items:[]},{title:"Digital dreamers",caption:"Digital abstract painting. Unique, collectible, generative digital art.",url:"https://opensea.io/collection/digital-dreamers",thumbnail:"/assets/digital_dreamers/header.gif",description:["Digital abstract painting - how do androids dream? We attempted to find out"],items:[{title:"Lithe dream",thumbnail:"/assets/digital_dreamers/dream1.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950993739342151681"},{title:"Adamant dream",thumbnail:"/assets/digital_dreamers/dream2.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950994838853779457"},{title:"Immutable dream",thumbnail:"/assets/digital_dreamers/dream3.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950995938365407233"},{title:"Evasive dream",thumbnail:"/assets/digital_dreamers/dream4.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950997037877035009"},{title:"Astute dream",thumbnail:"/assets/digital_dreamers/dream5.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950998137388662785"},{title:"Egress dream",thumbnail:"/assets/digital_dreamers/dream6.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497950999236900290561/"},{title:"Amalgamated dream",thumbnail:"/assets/digital_dreamers/dream7.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951000336411918337/"},{title:"Vexed dream",thumbnail:"/assets/digital_dreamers/dream8.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951001435923546113/"},{title:"Obdurate dream",thumbnail:"/assets/digital_dreamers/dream9.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951002535435173889/"},{title:"Husk dream",thumbnail:"/assets/digital_dreamers/dream10.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951003634946801665/"},{title:"Discrete dream",thumbnail:"/assets/digital_dreamers/dream11.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951004734458429441/"},{title:"Expostulate dream",thumbnail:"/assets/digital_dreamers/dream12.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951005833970057217/"},{title:"Opprobrius dream",thumbnail:"/assets/digital_dreamers/dream13.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951006933481684993/"},{title:"Ossified dream",thumbnail:"/assets/digital_dreamers/dream14.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951008032993312769/"},{title:"Endemic dream",thumbnail:"/assets/digital_dreamers/dream15.png",url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/45817393092005930444668747326878441749376301525675786550497951009132504940545"}]}];return e?a[t]:a}function Fe(){var e=qe();return Object(A.jsx)("div",{className:"ViewActivitiesComponent",children:e.map((function(e,t){return Object(A.jsx)(Le,{title:e.title,description:e.caption,thumbnail:e.thumbnail,link:"/collection/"+(t+1),comingSoon:e.comingSoon},t)}))})}a(274);var We=a(181);function Ee(){var e=s.a.useContext(ot).setSnackbar,t=window.innerWidth,a=window.innerHeight,n=s.a.useState(!0),r=Object(c.a)(n,2),i=r[0],o=r[1],l=s.a.useState(!1),u=Object(c.a)(l,2),d=u[0],h=u[1],b=s.a.useState(!1),m=Object(c.a)(b,2),p=m[0],j=m[1];s.a.useEffect((function(){p&&(h(!0),setTimeout((function(){o(!1)}),3e3),setTimeout((function(){h(!1)}),1e4))}),[p]);var f=Object(_.a)({enableReinitialize:!0,initialValues:{name:"",email:"",inquiry:""},onSubmit:function(t){!function(t){j(!0),U("/api/inquiries/add",t).then((function(t){return e({text:t.success||t.error,open:!0,severity:t.success?"success":"error"})}))}(t)}});return p?Object(A.jsxs)("div",{children:[Object(A.jsx)(We.a,{width:t,height:a,run:d,recycle:i}),Object(A.jsx)("h1",{children:"Let's talk soon."})]}):Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Get in touch!"}),Object(A.jsxs)("form",{onSubmit:f.handleSubmit,style:{margin:"20px"},children:[Object(A.jsx)(L.a,{id:"name",name:"name",variant:"standard",label:"Your name",value:f.values.name,onChange:f.handleChange}),Object(A.jsx)(L.a,{id:"email",variant:"standard",name:"email",label:"Your email",value:f.values.email,onChange:f.handleChange}),Object(A.jsx)(L.a,{fullWidth:!0,id:"inquiry",variant:"standard",name:"inquiry",label:"Your inquiry",value:f.values.inquiry,onChange:f.handleChange}),Object(A.jsx)(q.a,{variant:"contained",color:"primary",type:"submit",style:{margin:"20px"},children:"Submit"})]})]})}a(275);var Me=function(e){return Object(A.jsx)("div",{className:"cardComponent",children:e.cards.map((function(t,a){return Object(A.jsxs)("div",{className:"card",style:{margin:e.margin},children:[Object(A.jsx)("div",{className:"card-image",children:Object(A.jsx)("img",{src:t.thumbnail,alt:"Header decoration"})}),Object(A.jsxs)("div",{className:"content",style:{height:e.height?e.height:"200px"},children:[Object(A.jsx)("h4",{children:t.title}),Object(A.jsx)("p",{children:t.description})]}),Object(A.jsx)("a",{href:t.url,className:"read-more",style:{textDecoration:"none"},children:Object(A.jsxs)("span",{children:["Buy now ",Object(A.jsx)(_e.a,{className:"chevron-right"})]})})]},a)}))})},Ve=a(183),ze=a.n(Ve);var Re=Object(l.h)((function(){var e=qe(Object(l.g)().collectionId);return Object(A.jsxs)("div",{className:"CollectionComponent",style:{padding:"10px"},children:[Object(A.jsx)(q.a,{component:o.b,to:"/art",size:"Large",style:{margin:"10px 40px 40px 0",float:"left"},variant:"contained",startIcon:Object(A.jsx)(ze.a,{}),children:" Back to collections"}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),Object(A.jsx)("h2",{children:e.title}),e.description.map((function(e,t){return Object(A.jsx)("p",{children:e},t)})),Object(A.jsx)(q.a,{component:o.b,to:e.url,size:"Large",style:{margin:"40px"},variant:"contained",endIcon:Object(A.jsx)(_e.a,{}),children:" View the entire collection on OpenSea"}),Object(A.jsx)(Me,{cards:e.items,height:"auto"}),Object(A.jsx)(he,{thumbnail:"/nft-background.jpeg",style:{margin:"200px",display:"block"}})]})})),De=Object(ke.a)({root:{flexGrow:1}});function Je(e){var t=De();return Object(A.jsx)(Ne.a,{className:t.root,children:Object(A.jsxs)(Te.a,{value:e.currentTab,onChange:function(t,a){e.setCurrentTab(a)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(A.jsx)(Ue.a,{label:"Users"}),Object(A.jsx)(Ue.a,{label:"Feedback"})]})})}var Ge,He=a(114);function Ze(){var e=Object(D.css)(Ge||(Ge=Object(R.a)(["display: block; margin: 0 auto;"]))),t=Object(we.b)(O.getUsers,{refreshInterval:2}).data;return t?Object(A.jsxs)("div",{className:"DashboardUsers",children:[Object(A.jsx)("h1",{children:"Users"}),Object(A.jsx)("div",{className:"DataGridContainer",style:{height:"600px"},children:Object(A.jsx)(He.a,{autoPageSize:!0,rows:t,columns:[{field:"id",headerName:"ID",width:70},{field:"username",headerName:"Username",width:200},{field:"registered",headerName:"Registered",width:300},{field:"last_seen",headerName:"Last seen",width:300}],pageSize:10,className:"UsersGrid"})})]}):Object(A.jsx)(G.a,{color:"#10253E",loading:!0,css:e,size:100})}var Ye,Ke,Xe=a(185),Qe=a.n(Xe),$e=a(360),et=a(367),tt=a(368),at=a(369);function nt(e){var t=function(){e.onClose()};return Object(A.jsxs)($e.a,{open:e.open,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(A.jsx)(et.a,{children:Object(A.jsxs)(tt.a,{id:"alert-dialog-description",children:["Are you sure you want to delete this inquiry from ",e.inquiry.name,"?"]})}),Object(A.jsxs)(at.a,{children:[Object(A.jsx)(q.a,{onClick:t,color:"primary",children:"Cancel"}),Object(A.jsx)(q.a,{onClick:function(){e.onConfirm(e.inquiry.id)},color:"primary",autoFocus:!0,children:"Delete"})]})]})}function st(){var e=s.a.useContext(ot).setSnackbar,t=s.a.useState({}),a=Object(c.a)(t,2),n=a[0],r=a[1],i=s.a.useState(!1),o=Object(c.a)(i,2),l=o[0],u=o[1],d=[{field:"id",headerName:"ID",width:150},{field:"name",headerName:"Name",width:70},{field:"email",headerName:"Email",width:200},{field:"inquiry",headerName:"Inquiry",width:300},{field:"",headerName:"Actions",sortable:!1,width:120,disableClickEventBubbling:!0,renderCell:function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(q.a,{onClick:function(){var t={};e.api.getAllColumns().map((function(e){return e.field})).filter((function(e){return"__check__"!==e&&!!e})).forEach((function(a){t[a]=e.row[a]})),r(t),u(!0)},children:Object(A.jsx)(Qe.a,{})})})}}],h=Object(D.css)(Ye||(Ye=Object(R.a)(["display: block; margin: 0 auto;"]))),b=Object(we.b)("/api/inquiries/get",{refreshInterval:2}),m=b.data,p=b.mutate;if(!m)return Object(A.jsx)(G.a,{color:"#10253E",loading:!0,css:h,size:100});var j=m.map((function(e){var t=JSON.parse(e.inquiry);return t.id=e.id,t}));return Object(A.jsxs)("div",{className:"DashboardUsers",children:[Object(A.jsx)(nt,{inquiry:n,open:l,onConfirm:function(t){U("/api/inquiries/delete",{id:t}).then((function(t){return e({text:t.success||t.error,open:!0,severity:t.success?"success":"error"})})),u(!1),p()},onClose:function(){return u(!1)}}),Object(A.jsx)("h1",{children:"Inquiries"}),Object(A.jsx)("div",{className:"DataGridContainer",style:{height:"600px"},children:Object(A.jsx)(He.a,{autoPageSize:!0,rows:j,columns:d,pageSize:20,className:"UsersGrid"})}),Object(A.jsx)(q.a,{onClick:function(){U("/api/inquiries/delete/all",{}).then((function(t){return e({text:t.success||t.error,open:!0,severity:t.success?"success":"error"})})),u(!1),p()},color:"primary",children:"Delete all"})]})}function rt(e){var t=s.a.useState(0),a=Object(c.a)(t,2),n=a[0],r=a[1],i=s.a.useState(null),o=Object(c.a)(i,2),u=o[0],d=o[1];s.a.useEffect((function(){d((function(){return 1===n?Object(A.jsx)(st,{}):Object(A.jsx)(Ze,{})}))}),[n]);var h=Object(we.b)(O.getRoles).data,b=Object(D.css)(Ke||(Ke=Object(R.a)(["display: block; margin: 0 auto;"])));return h?h.admin?Object(A.jsxs)("div",{style:{height:"-webkit-fill-available",padding:"15px"},children:[Object(A.jsx)(Je,{currentTab:n,setCurrentTab:r}),u]}):Object(A.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}}):Object(A.jsx)(G.a,{color:"#213459",loading:!0,css:b,size:100})}var it=a(355),ct=a(354),ot=s.a.createContext();function lt(){var e=s.a.useState(!0),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),1500)}),[]);var i=Object(Z.a)({palette:{mode:Object(X.a)("(prefers-color-scheme: dark)")?"dark":"light",primary:{main:"#FD37AA"},secondary:{main:"#CAE8FF"}},typography:{h1:{fontFamily:["Bona Nova","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},fontFamily:["Assistant","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},components:{MuiTouchRipple:{styleOverrides:{child:{backgroundColor:"#FD37AA"}}}}}),u=s.a.useState({text:"",severity:"info",open:!1}),d=Object(c.a)(u,2),h=d[0],b=d[1],m=function(){b({open:!1})};return Object(A.jsxs)(Y.a,{theme:i,children:[Object(A.jsx)(K.a,{}),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("link",{rel:"shortcut icon",href:"./favicon.ico"}),Object(A.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(A.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(A.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),Object(A.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600&family=Bona+Nova:ital,wght@0,400;0,700;1,400&display=swap",rel:"stylesheet"}),Object(A.jsx)("header",{className:"App-header",children:Object(A.jsxs)(ot.Provider,{value:{snackbar:h,setSnackbar:b},children:[Object(A.jsx)(it.a,{open:h.open,autoHideDuration:6e3,onClose:m,children:Object(A.jsx)(ct.a,{onClose:m,severity:h.severity,children:h.text})}),a?Object(A.jsx)(ve,{}):Object(A.jsxs)(o.a,{children:[Object(A.jsx)(de,{}),Object(A.jsx)("div",{className:"AppWrapper",children:Object(A.jsxs)(l.d,{children:[Object(A.jsxs)(l.b,{exact:!0,path:"/",children:[" ",Object(A.jsx)(Oe,{})," "]}),Object(A.jsx)(l.b,{exact:!0,path:"/art",component:Fe}),Object(A.jsx)(l.b,{exact:!0,path:"/collection/:collectionId",component:Re}),Object(A.jsx)(l.b,{exact:!0,path:"/contact",component:Ee}),Object(A.jsx)(P,{exact:!0,path:"/user",component:Be}),Object(A.jsx)(l.b,{exact:!0,path:"/login",component:F}),Object(A.jsx)(l.b,{exact:!0,path:"/logout",component:W}),Object(A.jsx)(l.b,{exact:!0,path:"/reset",component:M}),Object(A.jsx)(l.b,{exact:!0,path:"/register",component:z}),Object(A.jsx)(l.b,{exact:!0,path:"/confirm/:token",component:H}),Object(A.jsx)(l.b,{exact:!0,path:"/reset/:token",component:E}),Object(A.jsx)(P,{exact:!0,path:"/dashboard",component:rt})]})}),Object(A.jsx)(ce,{})]})]})})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));T.a.interceptors.response.use((function(e){return e}),(function(e){return new Promise((function(t){var a=e.config,n=x();e.response&&401===e.response.status&&e.config&&!e.config.__isRetryRequest&&n&&(a._retry=!0,t(fetch(O.authRefresh,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({refresh:x})}).then((function(e){return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access_token=e.access_token,y.updateUser(t),window.location.reload()}))));return Promise.reject(e)}))})),i.a.render(Object(A.jsx)(we.a,{value:{fetcher:function(e){return T.a.get(e,{headers:{Authorization:"Bearer "+f()}}).then((function(e){return e.data}))}},children:Object(A.jsx)(lt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[276,1,2]]]);
//# sourceMappingURL=main.e19563f3.chunk.js.map