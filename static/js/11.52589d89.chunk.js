(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(63),r=a(62),c=a(61),o=function(e){var t=Object(r.a)("","");e.location,e.highest,e.lowest,e.model,e.type;return function(e){e({type:c.d,payload:Object(n.a)({method:"post",url:"/?end=searchcarsparameter",data:{make:"jcj ",model:"cvsr",series:"S-class",year:"mcmc ",milleage:" mmc",bodytype:" mcmc",transtype:" mxxm",condition:" mmxm",flexibility:"matchall",page:"1",numberofitem:"20",hashpass:t}})})}}},222:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),c=a(23),o=a(21),i=a(22),l=a(0),s=a.n(l),u=a(14),p=a(65),m=(a(74),a(85),a(112),a(26),a(66),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).searchDealer=function(e){e.preventDefault(),console.log("WORKING")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.g,null,s.a.createElement(p.a,null),s.a.createElement(u.p,{justify:"center"},s.a.createElement("form",{className:"search",onSubmit:this.searchDealer},s.a.createElement("input",{type:"text",className:"search__input",placeholder:"Search dealers by name"}),s.a.createElement("button",{className:"search__button"},s.a.createElement("img",{src:a(67),alt:"dealer search",style:{height:"15px"}})))))}}]),t}(l.Component));t.default=m},61:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"f",function(){return r}),a.d(t,"b",function(){return c}),a.d(t,"g",function(){return o}),a.d(t,"e",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"c",function(){return s});var n="LOGIN_USER",r="SIGNUP_USER",c="LOGOUT_USER",o="VIEW_ALL_CARS",i="SELL_CAR",l="SEARCH_CARS",s="PASSWORD_RECOVERY"},62:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t){return a(77)("$$247@"+e+t+"kapishkaboom")}},63:function(e,t,a){"use strict";var n=a(73),r=a.n(n);a(41).config();t.a=r.a.create({baseURL:"https://forthesharp.com/test",headers:{"API-Key":"kapishkaboom","Content-Type":"application/json"}})},64:function(e,t,a){e.exports=a.p+"static/media/icon.ea73ea8f.svg"},65:function(e,t,a){"use strict";var n=a(19),r=a(20),c=a(23),o=a(21),i=a(22),l=a(0),s=a.n(l),u=a(14),p=[{name:"Cars",path:"/cars"},{name:"Find a dealer",path:"/dealer"},{name:"Sell your car",path:"/sell"}],m=[{name:"Search",path:"/search",icon:a(67)}],f=[{name:"Login",path:"/login"},{name:"Signup",path:"/signup"}],h=[{name:"Logout",path:"/logout"}],d=a(84);a.d(t,"a",function(){return y});var y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.p,{height:"96px",padding:"0px 86px",justify:"space-between"},s.a.createElement(u.e,{width:"20%"},s.a.createElement(d.a,{to:"/"},s.a.createElement("img",{className:"navimg",src:a(64),alt:"icon"}))),s.a.createElement(u.e,{width:"60%"},s.a.createElement(u.p,{justify:"space-between",align:"center"},p.map(function(e,t){return s.a.createElement(d.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}),localStorage.getItem("ax_auth")?h.map(function(e,t){return s.a.createElement(d.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}):null,localStorage.getItem("ax_auth")?null:f.map(function(e,t){return s.a.createElement(d.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},e.name)}),m.map(function(e,t){return s.a.createElement(d.a,{key:t,to:e.path,activeClassName:"active",className:"navlist"},s.a.createElement("img",{src:e.icon,alt:e.name}))}))))}}]),t}(l.Component)},66:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(19),r=a(20),c=a(23),o=a(21),i=a(22),l=a(0),s=a.n(l),u=a(14),p=a(76),m=a.n(p),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).getData=function(e){var t=e.target.value,n=a.props.type,r=a.dataValidator(t,n);a.setState({data:"checkbox"===n?e.target.checked:t,validator:r,error_style:r?null:"form_error"},function(){var e=a.state,t=e.data,n=e.validator;a.props.data(t,n)})},a.dataValidator=function(e,t){var n=a.props.placeholder;return"email"===t?m.a.isEmail(e):"text"===t?!m.a.isEmpty(e):"password"===t?!m.a.isEmpty(e):"select"===t?!m.a.equals(e,n):void 0},a.state={data:"select"===e.type?e.placeholder:"",validator:!1,error_style:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.width,n=t.label,r=t.type,c=t.placeholder,o=t.options,i=this.state,l=i.error_style,p=i.data;switch(r){case"text":case"email":case"password":e=s.a.createElement(u.h,{width:a,type:r},s.a.createElement("label",null,n),s.a.createElement("input",{type:r,className:l,placeholder:c,value:this.state.data,name:r,onChange:this.getData}));break;case"select":e=s.a.createElement(s.a.Fragment,null,s.a.createElement(u.h,{width:a,type:r},s.a.createElement("label",null,n),s.a.createElement("select",{className:p===c||""===p?"placeholder ".concat(l):l,value:this.state.data,name:r,onChange:this.getData},s.a.createElement("option",{value:""},c),o.map(function(e,t){return s.a.createElement("option",{key:t},e)}))));break;case"checkbox":e=s.a.createElement(s.a.Fragment,null,s.a.createElement(u.h,{width:a,direction:"row",justify:"flex-start",type:r},s.a.createElement("input",{type:r,className:l,value:this.state.data,name:r,onChange:this.getData}),s.a.createElement("label",null,n)));break;default:e=s.a.createElement(s.a.Fragment,null)}return s.a.createElement(s.a.Fragment,null,e)}}]),t}(l.Component)},67:function(e,t,a){e.exports=a.p+"static/media/search.9a5fe0e5.svg"},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(6),l=a.n(i),s=a(25),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return a=n=p(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!m(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,c=a.to;r?t.replace(c):t.push(c)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(s.b)(t,null,null,c.location):t,i=c.createHref(o);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=f},70:function(e,t,a){e.exports=a.p+"static/media/facebook.8cfc873e.svg"},71:function(e,t,a){e.exports=a.p+"static/media/twitter.1a6ab186.svg"},72:function(e,t,a){e.exports=a.p+"static/media/instagram.6a168f14.svg"},74:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(19),r=a(20),c=a(23),o=a(21),i=a(22),l=a(0),s=a.n(l),u=a(14),p=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.p,{padding:"15px 87px 0"},s.a.createElement(u.p,{height:"auto",justify:"space-between",padding:"20px 0",className:"footer"},s.a.createElement("p",null," Copyright, Autoshop 2018"),s.a.createElement("ul",{className:"footer__list"},s.a.createElement("li",null," ",s.a.createElement("img",{className:"footer__icon",src:a(70),alt:"arrow_right"})),s.a.createElement("li",null," ",s.a.createElement("img",{className:"footer__icon",src:a(71),alt:"arrow_right"})),s.a.createElement("li",null," ",s.a.createElement("img",{className:"footer__icon",src:a(72),alt:"arrow_right"})))))}}]),t}(l.Component)},84:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(79),l=a(69),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p=function(e){var t=e.to,a=e.exact,n=e.strict,c=e.location,o=e.activeClassName,p=e.className,m=e.activeStyle,f=e.style,h=e.isActive,d=e["aria-current"],y=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),v="object"===("undefined"===typeof t?"undefined":u(t))?t.pathname:t,b=v&&v.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return r.a.createElement(i.a,{path:b,exact:a,strict:n,location:c,children:function(e){var a=e.location,n=e.match,c=!!(h?h(n,a):n);return r.a.createElement(l.a,s({to:t,className:c?[p,o].filter(function(e){return e}).join(" "):p,style:c?s({},f,m):f,"aria-current":c&&d||null},y))}})};p.propTypes={to:l.a.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},p.defaultProps={activeClassName:"active","aria-current":"page"},t.a=p},85:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(63),r=a(62),c=a(61),o=function(){var e=Object(r.a)("","");return function(t){t({type:c.g,payload:Object(n.a)({method:"post",url:"/?end=viewallcars",data:{page:1,hashpass:e,numberofitem:5}})})}}}}]);
//# sourceMappingURL=11.52589d89.chunk.js.map