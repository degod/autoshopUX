(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(19),i=a(20),l=a(23),s=a(21),c=a(22),o=a(0),m=a.n(o),p=a(14),u=a(91),d=a(66),h=a(209),g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.name,n=e.title,r=e.review;return m.a.createElement(p.o,null,m.a.createElement(p.n,null,m.a.createElement("img",{src:t,alt:"pp"})),m.a.createElement("label",null,a),m.a.createElement("p",{className:"linkblue"},n),m.a.createElement("p",null,r))}}]),t}(o.Component),E=a(76),f=a.n(E),b=a(24),y=a(80),w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).getFirstNameData=function(t,a){e.setState({data:Object(n.a)({},e.state.data,{Firstname:t})})},e.getLastNameData=function(t,a){e.setState({data:Object(n.a)({},e.state.data,{Lastname:t})})},e.getEmailData=function(t,a){e.setState({data:Object(n.a)({},e.state.data,{Email:t})})},e.getEmailConfirmData=function(t,a){var r=e.state.data.Email;f.a.equals(r,t)?e.setState({data:Object(n.a)({},e.state.data,{EmailConfirm:1})}):e.setState({data:Object(n.a)({},e.state.data,{EmailConfirm:0})})},e.getPasswordData=function(t,a){e.setState({data:Object(n.a)({},e.state.data,{Password:t})})},e.onSubmit=function(){e.props.SignUpUser(e.state.data)},e.state={data:{Firstname:"",Lastname:"",Email:"",EmailConfirm:0,Password:""},done:!1},e}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e!==this.props&&("100"===this.props.payload.Statuscode&&this.setState({done:!0}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.loading,r=t.payload;return m.a.createElement(p.g,null,m.a.createElement(p.p,{align:"flex-start"},m.a.createElement(p.e,{width:"50%",padding:"44px 90px",height:"100vh",scroll:!0},m.a.createElement(p.p,{bottomspacing:"71px"},m.a.createElement("img",{src:a(64),alt:"icon",onClick:function(){return e.props.history.push("/")},style:{cursor:"pointer"}})),this.state.done?m.a.createElement(m.a.Fragment,null,m.a.createElement(p.p,{bottomspacing:"17px"},m.a.createElement("p",null,r?r.Message:"")),m.a.createElement(p.p,{justify:"space-between",bottomspacing:"100px"},m.a.createElement(p.b,{width:"100%",onClick:function(){return e.props.history.push("/login")},height:"58px"},"Please Login"))):m.a.createElement(m.a.Fragment,null,m.a.createElement(p.p,{justify:"space-between"},m.a.createElement(u.a,{text:"Signup with Facebook",icon:a(81),width:"40%",height:"52px",bgcolor:"#507CC0"}),m.a.createElement(u.a,{text:"Signup with Google+",icon:a(82),width:"40%",height:"52px",bgcolor:"#DF4930"})),m.a.createElement(p.p,{justify:"center",height:"88px"},m.a.createElement("p",{className:"op_20"},"- OR -")),m.a.createElement(p.p,{bottomspacing:"17px"},m.a.createElement("p",null,r?r.Message:"")),m.a.createElement(p.p,{bottomspacing:"31px"},m.a.createElement(d.a,{width:"100%",placeholder:"",label:"First Name",type:"text",value:this.state.data.Firstname,data:this.getFirstNameData})),m.a.createElement(p.p,{bottomspacing:"31px"},m.a.createElement(d.a,{width:"100%",placeholder:"",label:"Last Name",value:this.state.data.Lastname,type:"text",data:this.getLastNameData})),m.a.createElement(p.p,{bottomspacing:"31px"},m.a.createElement(d.a,{width:"100%",placeholder:"",label:"Email Address",value:this.state.data.Email,type:"email",data:this.getEmailData})),m.a.createElement(p.p,{bottomspacing:"31px"},m.a.createElement(d.a,{width:"100%",placeholder:"",label:"Confirm Email Address",type:"email",data:this.getEmailConfirmData})),m.a.createElement(p.p,{bottomspacing:"31px"},m.a.createElement(d.a,{width:"100%",placeholder:"",label:"Password",type:"password",data:this.getPasswordData})),m.a.createElement(p.p,{justify:"space-between",bottomspacing:"100px"},m.a.createElement(p.b,{disabled:n,width:"45%",onClick:this.onSubmit,height:"58px"},n?m.a.createElement("div",{className:"loader"}):"Sign up"," "),m.a.createElement(p.c,{onClick:function(){return e.props.history.push("/login")},width:"45%",height:"58px"},"Login"))),m.a.createElement(p.p,null,m.a.createElement("label",null,"By sigining up, you agree to Autoshop\u2019s ",m.a.createElement("span",{className:"linkblue"},"Terms and Conditions")," & ",m.a.createElement("span",{className:"linkblue"},"Privacy Policy")))),m.a.createElement(p.e,{width:"50%",height:"100vh"},m.a.createElement(p.l,null,m.a.createElement(p.p,{justify:"space-between",padding:"0 77px",height:"365px"},m.a.createElement("h1",null,"Find out more about AutoShop"),m.a.createElement("img",{src:a(83),alt:"play_circular"})),m.a.createElement(p.q,null,m.a.createElement(h.a,{className:"scroll"},[1,2,3,4,5,6,7].map(function(e,t){return m.a.createElement(g,{key:t,image:"https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c027768ca5e582698906cf05ab64ce7d&auto=format&fit=crop&w=934&q=80",name:"John Smith ".concat(e),title:"Car expert",review:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and"})})))),m.a.createElement(p.m,{src:a(97),alt:"unboarding image"}))))}}]),t}(o.Component);t.default=Object(b.b)(function(e){return{loading:e.Onboarding.signup_user_loading,successful:e.Onboarding.signup_user_successful,payload:e.Onboarding.signup_payload}},{SignUpUser:y.c})(w)},61:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"f",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"g",function(){return l}),a.d(t,"e",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"c",function(){return o});var n="LOGIN_USER",r="SIGNUP_USER",i="LOGOUT_USER",l="VIEW_ALL_CARS",s="SELL_CAR",c="SEARCH_CARS",o="PASSWORD_RECOVERY"},62:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return a(77)("$$247@"+e+t+"kapishkaboom")}},63:function(e,t,a){"use strict";var n=a(73),r=a.n(n);a(41).config();t.a=r.a.create({baseURL:"https://forthesharp.com/test",headers:{"API-Key":"kapishkaboom","Content-Type":"application/json"}})},64:function(e,t,a){e.exports=a.p+"static/media/icon.ea73ea8f.svg"},66:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(19),r=a(20),i=a(23),l=a(21),s=a(22),c=a(0),o=a.n(c),m=a(14),p=a(76),u=a.n(p),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).getData=function(e){var t=e.target.value,n=a.props.type,r=a.dataValidator(t,n);a.setState({data:"checkbox"===n?e.target.checked:t,validator:r,error_style:r?null:"form_error"},function(){var e=a.state,t=e.data,n=e.validator;a.props.data(t,n)})},a.dataValidator=function(e,t){var n=a.props.placeholder;return"email"===t?u.a.isEmail(e):"text"===t?!u.a.isEmpty(e):"password"===t?!u.a.isEmpty(e):"select"===t?!u.a.equals(e,n):void 0},a.state={data:"select"===e.type?e.placeholder:"",validator:!1,error_style:""},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.width,n=t.label,r=t.type,i=t.placeholder,l=t.options,s=this.state,c=s.error_style,p=s.data;switch(r){case"text":case"email":case"password":e=o.a.createElement(m.h,{width:a,type:r},o.a.createElement("label",null,n),o.a.createElement("input",{type:r,className:c,placeholder:i,value:this.state.data,name:r,onChange:this.getData}));break;case"select":e=o.a.createElement(o.a.Fragment,null,o.a.createElement(m.h,{width:a,type:r},o.a.createElement("label",null,n),o.a.createElement("select",{className:p===i||""===p?"placeholder ".concat(c):c,value:this.state.data,name:r,onChange:this.getData},o.a.createElement("option",{value:""},i),l.map(function(e,t){return o.a.createElement("option",{key:t},e)}))));break;case"checkbox":e=o.a.createElement(o.a.Fragment,null,o.a.createElement(m.h,{width:a,direction:"row",justify:"flex-start",type:r},o.a.createElement("input",{type:r,className:c,value:this.state.data,name:r,onChange:this.getData}),o.a.createElement("label",null,n)));break;default:e=o.a.createElement(o.a.Fragment,null)}return o.a.createElement(o.a.Fragment,null,e)}}]),t}(c.Component)},80:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return c});var n=a(61),r=a(63),i=a(62),l=function(e){var t=e.Email,a=e.Password,l={Email:t,Password:a,Hashpass:Object(i.a)(t,a)};return function(e){e({type:n.a,payload:Object(r.a)({method:"POST",url:"/?end=login",data:l})})}},s=function(e){var t=e.Firstname,a=e.Lastname,l=e.Email,s=e.EmailConfirm,c=e.Password,o=Object(i.a)(l,c);return function(e){e({type:n.f,payload:Object(r.a)({method:"POST",url:"/?end=signup",data:{Firstname:t,Lastname:a,Email:l,EmailConfirm:s,Password:c,hashpass:o}})})}},c=function(){return localStorage.removeItem("ax_auth"),function(e){e({type:n.b})}}},81:function(e,t,a){e.exports=a.p+"static/media/fb.116f7fa0.svg"},82:function(e,t,a){e.exports=a.p+"static/media/g+.fb3b0381.svg"},83:function(e,t,a){e.exports=a.p+"static/media/play_circular.2fa6a94a.svg"},91:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(14);t.a=function(e){var t=e.width,a=e.height,n=e.bgcolor,l=e.icon,s=e.text,c=e.onclick;return r.a.createElement(i.r,{width:t,height:a,bgcolor:n,onClick:c},r.a.createElement("img",{src:l,alt:s}),r.a.createElement("p",null,s))}},97:function(e,t,a){e.exports=a.p+"static/media/unboarding.d5583344.png"}}]);
//# sourceMappingURL=4.74c0a584.chunk.js.map