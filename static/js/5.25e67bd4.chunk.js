(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,a){e.exports=a.p+"static/media/camera.53b1b05e.svg"},101:function(e,t,a){e.exports=a.p+"static/media/check-white.179a7fd5.svg"},102:function(e,t,a){e.exports=a.p+"static/media/check.03079422.svg"},103:function(e,t,a){e.exports=a.p+"static/media/directions_car-blue.8ca9e0f8.svg"},104:function(e,t,a){e.exports=a.p+"static/media/directions_car-white.f9a7fb47.svg"},105:function(e,t,a){e.exports=a.p+"static/media/folder-white.a687e94d.svg"},106:function(e,t,a){e.exports=a.p+"static/media/folder.197abbf0.svg"},107:function(e,t,a){e.exports=a.p+"static/media/location.c0ad960b.svg"},108:function(e,t,a){e.exports=a.p+"static/media/phone.cbd460fd.svg"},109:function(e,t,a){e.exports=a.p+"static/media/user-blue.980e2f50.svg"},110:function(e,t,a){e.exports=a.p+"static/media/user-white.8d23f8de.svg"},111:function(e,t,a){e.exports=a.p+"static/media/user.0cb49ca5.svg"},127:function(e,t,a){e.exports=a.p+"static/media/search_box.4add402f.svg"},128:function(e,t,a){e.exports=a.p+"static/media/dollar_box.3cda27f5.svg"},129:function(e,t,a){e.exports=a.p+"static/media/info_box.4b8820d2.svg"},212:function(e,t,a){e.exports=a.p+"static/media/arrow_right_white.493aa657.svg"},213:function(e,t,a){e.exports=a.p+"static/media/directions_car.fdaa15be.svg"},214:function(e,t,a){e.exports=a.p+"static/media/image-black.49dc0946.svg"},215:function(e,t,a){e.exports=a.p+"static/media/refresh.97c95f3f.svg"},219:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(19),r=a(20),i=a(23),c=a(21),o=a(22),l=a(0),p=a.n(l),m=a(24),u=a(210),h=a(14),d=a(66),g=a(65),f=a(74),x=a(85),b=a(26),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).onBoxhover=function(){a.setState({box_arrow:"arrow_right_white"})},a.onBoxOut=function(){a.setState({box_arrow:"arrow_right"})},a.quickSearch=function(){var e=[];for(var t in a.state.searchData)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.searchData[t]));var n=e.join("&");a.props.history.push({pathname:"/cars",search:"?"+n})},a.getLocationData=function(e,t){a.setState(Object(n.a)({},a.state,{searchData:Object(n.a)({},a.state.searchData,{location:e})}))},a.getHighestData=function(e,t){a.setState(Object(n.a)({},a.state,{searchData:Object(n.a)({},a.state.searchData,{highest:e})}))},a.getModelData=function(e,t){a.setState(Object(n.a)({},a.state,{searchData:Object(n.a)({},a.state.searchData,{model:e})}))},a.getLowestData=function(e,t){a.setState(Object(n.a)({},a.state,{searchData:Object(n.a)({},a.state.searchData,{lowest:e})}))},a.getTypeData=function(e,t){a.setState(Object(n.a)({},a.state,{searchData:Object(n.a)({},a.state.searchData,{type:e})}))},a.props.ViewAll(),a.state={box_arrow:"arrow_right",searchData:{location:"",lowest:"",highest:"",model:"",type:""}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.loading,t.payload),s=t.success,r=[],i=p.a.createElement(h.p,{justify:"center"},p.a.createElement(b.a,null));return s&&(Object.keys(n.cars).map(function(e){r.push(n.cars[e])}),i=Object(u.shuffle)(r).splice(0,4).map(function(e,t){return p.a.createElement(h.a,{width:"23%",height:"275px",padding:"10px 10px 15px 10px",left:"1%",right:"1%",key:t},p.a.createElement(h.f,{height:"100%"},p.a.createElement(h.p,{height:"151px",bottomspacing:"10px"},p.a.createElement(h.j,{src:a(98),alt:"lady_car"})),p.a.createElement(h.p,{bottomspacing:"10px"},p.a.createElement("h3",null,e.make+" "+e.series)),p.a.createElement(h.p,{bottomspacing:"10px"},p.a.createElement("p",null,"is simply dummy text of the printing and typesetting industry. Lorem\u2026\u2026"))))})),p.a.createElement(h.g,null,p.a.createElement(g.a,null),p.a.createElement(h.i,null,p.a.createElement(h.a,{width:"364px",height:"450px",padding:"26px 19px"},p.a.createElement(h.p,{bottomspacing:"21px"},p.a.createElement(d.a,{width:"100%",placeholder:"Select a Location",label:"Location",type:"select",options:["New York"],data:this.getLocationData})),p.a.createElement(h.p,{bottomspacing:"21px",justify:"space-between"},p.a.createElement(d.a,{width:"45%",placeholder:"Lowest",label:"Price Range",type:"select",options:["500"],data:this.getLowestData}),p.a.createElement(d.a,{width:"45%",placeholder:"Highest",label:"",type:"select",options:["10000"],data:this.getHighestData})),p.a.createElement(h.p,{bottomspacing:"30px",justify:"space-between"},p.a.createElement(d.a,{width:"45%",placeholder:"Select a Model",label:"Model",type:"select",options:["Toyota"],data:this.getModelData}),p.a.createElement(d.a,{width:"45%",placeholder:"Select a Type",label:"Type",type:"select",options:["SUV"],data:this.getTypeData})),p.a.createElement(h.p,null,p.a.createElement(h.b,{width:"100%",onClick:this.quickSearch,height:"58px"},"Search 500,000 cars")))),p.a.createElement(h.p,{padding:"0 91px",justify:"space-between",bottomspacing:"48px"},p.a.createElement(h.a,{width:"30%",height:"387px",padding:"31px 34px",className:"box_active box_active--selected",onMouseOver:this.onBoxhover,onMouseLeave:this.onBoxOut},p.a.createElement(h.p,{bottomspacing:"41px"},p.a.createElement("img",{className:"img_right_space",src:a(127),alt:"search"}),p.a.createElement("p",null,"FIND LOCAL DEALER")),p.a.createElement(h.p,{bottomspacing:"30px"},p.a.createElement("p",{className:"paragraph_spacing"},"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ")),p.a.createElement(h.p,{justify:"flex-end"},p.a.createElement("p",{className:"img_right_space linkdefault",onClick:function(){return e.props.history.push("/dealer")}},"Find Now"),p.a.createElement("img",{src:a(88)("./".concat(this.state.box_arrow,".svg")),alt:"arrow_right"}))),p.a.createElement(h.a,{width:"30%",height:"387px",padding:"31px 34px",className:"box_active",onMouseOver:this.onBoxhover,onMouseLeave:this.onBoxOut},p.a.createElement(h.p,{bottomspacing:"41px"},p.a.createElement("img",{className:"img_right_space",src:a(128),alt:"search"}),p.a.createElement("p",null,"SELL YOUR CAR")),p.a.createElement(h.p,{bottomspacing:"30px"},p.a.createElement("p",{className:"paragraph_spacing"},"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ")),p.a.createElement(h.p,{justify:"flex-end"},p.a.createElement("p",{className:"img_right_space linkdefault",onClick:function(){return e.props.history.push("/sell")}},"Sell Now"),p.a.createElement("img",{src:a(88)("./".concat(this.state.box_arrow,".svg")),alt:"arrow_right"}))),p.a.createElement(h.a,{width:"30%",height:"387px",padding:"31px 34px",className:"box_active",onMouseOver:this.onBoxhover,onMouseLeave:this.onBoxOut},p.a.createElement(h.p,{bottomspacing:"41px"},p.a.createElement("img",{className:"img_right_space",src:a(129),alt:"search"}),p.a.createElement("p",null,"TIPS FOR BUYING A CAR")),p.a.createElement(h.p,{bottomspacing:"30px"},p.a.createElement("p",{className:"paragraph_spacing"},"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ")),p.a.createElement(h.p,{justify:"flex-end"},p.a.createElement("p",{className:"img_right_space linkdefault"},"See Tips Now"),p.a.createElement("img",{src:a(88)("./".concat(this.state.box_arrow,".svg")),alt:"arrow_right"})))),p.a.createElement(h.p,{padding:"0 91px",bottomspacing:"48px"},p.a.createElement(h.a,{width:"100%",height:"400px",padding:"31px 34px"},p.a.createElement(h.p,{justify:"space-between"},p.a.createElement(h.e,{width:"38%"},p.a.createElement(h.j,{src:a(90),alt:"lady_car"})),p.a.createElement(h.e,{width:"58%"},p.a.createElement(h.f,{align:"flex-end"},p.a.createElement("h1",{className:"bigheader"},"Get a free valuation today!"),p.a.createElement("p",{className:"text_box_right"},"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "),p.a.createElement(h.p,{justify:"flex-end"},p.a.createElement("p",{className:"img_right_space linkdefault"},"Get Valuation today"),p.a.createElement("img",{src:a(89),alt:"arrow_right"}))))))),p.a.createElement(h.p,{padding:"0 91px"},p.a.createElement(h.a,{width:"100%",height:"100%",padding:"34px 0px 34px 61px",bottomspacing:"5px"},p.a.createElement(h.p,{bottomspacing:"40px"},p.a.createElement("h1",null,"Latest from Auto Trader")),p.a.createElement(h.p,{justify:"flex-start",height:"312.986px"},i),p.a.createElement(h.p,{justify:"flex-end",padding:"0 50px 0 0"},p.a.createElement("p",{className:"img_right_space",onClick:function(){e.props.history.push("/cars")},style:{cursor:"pointer"}},"See all"),p.a.createElement("img",{src:a(88)("./".concat(this.state.box_arrow,".svg")),alt:"arrow_right"})))),p.a.createElement(f.a,null))}}]),t}(l.Component);t.default=Object(m.b)(function(e){return{payload:e.Viewallcars.cars_payload,loading:e.Viewallcars.get_cars_loading,success:e.Viewallcars.get_cars_successful}},{ViewAll:x.a})(v)},61:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"f",function(){return s}),a.d(t,"b",function(){return r}),a.d(t,"g",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return l});var n="LOGIN_USER",s="SIGNUP_USER",r="LOGOUT_USER",i="VIEW_ALL_CARS",c="SELL_CAR",o="SEARCH_CARS",l="PASSWORD_RECOVERY"},62:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return a(77)("$$247@"+e+t+"kapishkaboom")}},63:function(e,t,a){"use strict";var n=a(73),s=a.n(n);a(41).config();t.a=s.a.create({baseURL:"https://forthesharp.com/test",headers:{"API-Key":"kapishkaboom","Content-Type":"application/json"}})},64:function(e,t,a){e.exports=a.p+"static/media/icon.ea73ea8f.svg"},65:function(e,t,a){"use strict";var n=a(19),s=a(20),r=a(23),i=a(21),c=a(22),o=a(0),l=a.n(o),p=a(14),m=[{name:"Cars",path:"/cars"},{name:"Find a dealer",path:"/dealer"},{name:"Sell your car",path:"/sell"}],u=[{name:"Search",path:"/search",icon:a(67)}],h=[{name:"Login",path:"/login"},{name:"Signup",path:"/signup"}],d=[{name:"Logout",path:"/logout"}],g=a(84);a.d(t,"a",function(){return f});var f=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.p,{height:"96px",padding:"0px 86px",justify:"space-between"},l.a.createElement(p.e,{width:"20%"},l.a.createElement(g.a,{to:"/"},l.a.createElement("img",{className:"navimg",src:a(64),alt:"icon"}))),l.a.createElement(p.e,{width:"60%"},l.a.createElement(p.p,{justify:"space-between",align:"center"},m.map(function(e,t){return l.a.createElement(g.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}),localStorage.getItem("ax_auth")?d.map(function(e,t){return l.a.createElement(g.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}):null,localStorage.getItem("ax_auth")?null:h.map(function(e,t){return l.a.createElement(g.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}),u.map(function(e,t){return l.a.createElement(g.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},l.a.createElement("img",{src:e.icon,alt:e.name}))}))))}}]),t}(o.Component)},66:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(19),s=a(20),r=a(23),i=a(21),c=a(22),o=a(0),l=a.n(o),p=a(14),m=a(76),u=a.n(m),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).getData=function(e){var t=e.target.value,n=a.props.type,s=a.dataValidator(t,n);a.setState({data:"checkbox"===n?e.target.checked:t,validator:s,error_style:s?null:"form_error"},function(){var e=a.state,t=e.data,n=e.validator;a.props.data(t,n)})},a.dataValidator=function(e,t){var n=a.props.placeholder;return"email"===t?u.a.isEmail(e):"text"===t?!u.a.isEmpty(e):"password"===t?!u.a.isEmpty(e):"select"===t?!u.a.equals(e,n):void 0},a.state={data:"select"===e.type?e.placeholder:"",validator:!1,error_style:""},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.width,n=t.label,s=t.type,r=t.placeholder,i=t.options,c=this.state,o=c.error_style,m=c.data;switch(s){case"text":case"email":case"password":e=l.a.createElement(p.h,{width:a,type:s},l.a.createElement("label",null,n),l.a.createElement("input",{type:s,className:o,placeholder:r,value:this.state.data,name:s,onChange:this.getData}));break;case"select":e=l.a.createElement(l.a.Fragment,null,l.a.createElement(p.h,{width:a,type:s},l.a.createElement("label",null,n),l.a.createElement("select",{className:m===r||""===m?"placeholder ".concat(o):o,value:this.state.data,name:s,onChange:this.getData},l.a.createElement("option",{value:""},r),i.map(function(e,t){return l.a.createElement("option",{key:t},e)}))));break;case"checkbox":e=l.a.createElement(l.a.Fragment,null,l.a.createElement(p.h,{width:a,direction:"row",justify:"flex-start",type:s},l.a.createElement("input",{type:s,className:o,value:this.state.data,name:s,onChange:this.getData}),l.a.createElement("label",null,n)));break;default:e=l.a.createElement(l.a.Fragment,null)}return l.a.createElement(l.a.Fragment,null,e)}}]),t}(o.Component)},67:function(e,t,a){e.exports=a.p+"static/media/search.9a5fe0e5.svg"},70:function(e,t,a){e.exports=a.p+"static/media/facebook.8cfc873e.svg"},71:function(e,t,a){e.exports=a.p+"static/media/twitter.1a6ab186.svg"},72:function(e,t,a){e.exports=a.p+"static/media/instagram.6a168f14.svg"},74:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(19),s=a(20),r=a(23),i=a(21),c=a(22),o=a(0),l=a.n(o),p=a(14),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.p,{padding:"15px 87px 0"},l.a.createElement(p.p,{height:"auto",justify:"space-between",padding:"20px 0",className:"footer"},l.a.createElement("p",null," Copyright, Autoshop 2018"),l.a.createElement("ul",{className:"footer__list"},l.a.createElement("li",null," ",l.a.createElement("img",{className:"footer__icon",src:a(70),alt:"arrow_right"})),l.a.createElement("li",null," ",l.a.createElement("img",{className:"footer__icon",src:a(71),alt:"arrow_right"})),l.a.createElement("li",null," ",l.a.createElement("img",{className:"footer__icon",src:a(72),alt:"arrow_right"})))))}}]),t}(o.Component)},75:function(e,t,a){e.exports=a.p+"static/media/image.781b8320.svg"},81:function(e,t,a){e.exports=a.p+"static/media/fb.116f7fa0.svg"},82:function(e,t,a){e.exports=a.p+"static/media/g+.fb3b0381.svg"},83:function(e,t,a){e.exports=a.p+"static/media/play_circular.2fa6a94a.svg"},85:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(63),s=a(62),r=a(61),i=function(){var e=Object(s.a)("","");return function(t){t({type:r.g,payload:Object(n.a)({method:"post",url:"/?end=viewallcars",data:{page:1,hashpass:e,numberofitem:5}})})}}},88:function(e,t,a){var n={"./arrow_right.svg":89,"./arrow_right_white.svg":212,"./camera-white.svg":99,"./camera.svg":100,"./check-white.svg":101,"./check.svg":102,"./directions_car-blue.svg":103,"./directions_car-white.svg":104,"./directions_car.svg":213,"./dollar_box.svg":128,"./facebook.svg":70,"./fb.svg":81,"./folder-white.svg":105,"./folder.svg":106,"./g+.svg":82,"./icon.svg":64,"./image-black.svg":214,"./image.svg":75,"./info_box.svg":129,"./instagram.svg":72,"./location.svg":107,"./phone.svg":108,"./play_circular.svg":83,"./refresh.svg":215,"./search.svg":67,"./search_box.svg":127,"./twitter.svg":71,"./user-blue.svg":109,"./user-white.svg":110,"./user.svg":111,"./valuation.svg":90};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=88},89:function(e,t,a){e.exports=a.p+"static/media/arrow_right.f70c37e6.svg"},90:function(e,t,a){e.exports=a.p+"static/media/valuation.32ebe6ef.svg"},98:function(e,t,a){e.exports=a.p+"static/media/car.fa4853f9.png"},99:function(e,t,a){e.exports=a.p+"static/media/camera-white.56f2fbed.svg"}}]);
//# sourceMappingURL=5.25e67bd4.chunk.js.map