(this["webpackJsonpmesto-react-regist-autor"]=this["webpackJsonpmesto-react-regist-autor"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),o=n.n(c),i=(n(30),n(24)),r=n(2),l=n(3),u=n.p+"static/media/logo.bbe2a6ea.svg",p=n(9),d=n(0);function j(e){var t=e.onLogout,n=e.userData,s=e.loggedIn,c=Object(l.h)(),o=Object(a.useState)({routePath:"/sign-in",routeName:"\u0412\u043e\u0439\u0442\u0438"}),i=Object(r.a)(o,2),j=i[0],h=i[1];return Object(a.useEffect)((function(){"/sign-up"===c.pathname?h({routePath:"/sign-in",routeName:"\u0412\u043e\u0439\u0442\u0438"}):h({routePath:"/sign-up",routeName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),[c]),Object(d.jsxs)("header",{className:"header header_position",children:[Object(d.jsx)("img",{className:"logo logo_position",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f mesto Russia"}),Object(d.jsxs)("ul",{className:"header__nav",children:[""===n.email&&Object(d.jsx)("li",{className:"header__nav-links",children:Object(d.jsx)(p.b,{to:j.routePath,className:"header__nav-link",children:j.routeName})}),s&&Object(d.jsx)("li",{className:"header__nav-links",children:Object(d.jsx)(p.b,{to:"/",className:"header__nav-link",children:n.email})}),s&&Object(d.jsx)("li",{className:"header__nav-links",children:Object(d.jsx)(p.b,{to:"/sign-in",className:"header__nav-link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})}function h(e){return Object(d.jsx)("footer",{className:"footer footer_position",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9",(new Date).getFullYear()," Mesto Russia"]})})}var b=n(5),m=s.a.createContext();function _(e){var t=e.name,n=e.link,a=e.likes,c=e.owner,o=e._id,i=e.onCardClick,r=e.onCardLike,l=e.onCardDeleteClick,u=s.a.useContext(m),p=c._id===u._id,j="element__button-delete ".concat(p?"element__button-delete_visible":"element__button-delete_hidden"),h=a.some((function(e){return e._id===u._id})),b="element__button-like ".concat(h?"element__button-like_active_black":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("button",{className:"element__button-image",type:"button",onClick:function(){i({name:t,link:n})},children:Object(d.jsx)("img",{className:"element__image",src:n,alt:t})}),Object(d.jsxs)("div",{className:"element__description",children:[Object(d.jsx)("h2",{className:"element__title",children:t}),Object(d.jsxs)("div",{className:"element__like-counter",children:[Object(d.jsx)("button",{type:"button",className:b,onClick:function(){r({name:t,link:n,likes:a,owner:c,_id:o})}}),Object(d.jsx)("span",{className:"element__number-of-like",children:a.length})]}),Object(d.jsx)("button",{type:"button",className:j,onClick:function(){l({likes:a,_id:o,name:t,link:n,owner:c})}})]})]})}function f(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,c=e.onCardClick,o=e.cards,i=e.onCardLike,r=(e.onCardDelete,e.onCardDeleteClick),l=s.a.useContext(m);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile profile_position",children:[Object(d.jsx)("div",{className:"profile__overlay",onClick:a,children:Object(d.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:l.name})}),Object(d.jsxs)("div",{className:"profile__description",children:[Object(d.jsxs)("div",{className:"profile__edit",children:[Object(d.jsx)("h1",{className:"profile__title",children:l.name}),Object(d.jsx)("button",{onClick:t,type:"button",className:"profile__button-edit"})]}),Object(d.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(d.jsx)("button",{onClick:n,type:"button",className:"profile__button-add"})]}),Object(d.jsx)("section",{className:"places places_position",children:Object(d.jsx)("ul",{className:"elements",children:o.map((function(e){return Object(d.jsx)(_,Object(b.a)(Object(b.a)({},e),{},{onCardClick:c,onCardLike:i,onCardDeleteClick:r}),e._id)}))})})]})}function O(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(n?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__image-container",children:[Object(d.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(d.jsx)("h3",{className:"popup__paragraph",children:t.name}),Object(d.jsx)("button",{type:"button",onClick:a,className:"popup__button-exit"})]})})}function g(e){var t=e.name,n=e.title,a=e.isOpen,s=e.onClose,c=e.children,o=e.onSubmit;return Object(d.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(a?"popup_opened":""),children:Object(d.jsxs)("form",{className:"popup__container popup__container_form_".concat(t),onSubmit:o,name:"popup-".concat(t),noValidate:!0,children:[Object(d.jsx)("h2",{className:"popup__title",children:n}),c,Object(d.jsx)("button",{type:"submit",className:"popup__button-form popup__button-form_save_".concat(t),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(d.jsx)("button",{type:"button",onClick:s,className:"popup__button-exit"})]})})}function v(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],p=Object(a.useState)(""),j=Object(r.a)(p,2),h=j[0],b=j[1],_=s.a.useContext(m);return Object(a.useEffect)((function(){u(_.name),b(_.about)}),[_]),Object(d.jsxs)(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,about:h})},children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",value:l||"",onChange:function(e){u(e.target.value)},className:" popup__input popup__input_title",name:"input-title",id:"input-title",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),Object(d.jsx)("span",{id:"input-title-error",className:"popup__error popup__error_visible"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",value:h||"",onChange:function(e){b(e.target.value)},className:"popup__input popup__input_subtitle",name:"input-subtitle",id:"input-subtitle",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),Object(d.jsx)("span",{id:"input-subtitle-error",className:"popup__error popup__error_visible"})]})]})}function x(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,c=Object(a.useRef)();return Object(d.jsx)(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:c.current.value})},children:Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"url",ref:c,className:" popup__input popup__input_url-avatar",name:"input-url-avatar",id:"input-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,autoComplete:"off"}),Object(d.jsx)("span",{id:"input-avatar-error",className:"popup__error popup__error_visible"})]})})}function N(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,c=Object(a.useState)(""),o=Object(r.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),p=Object(r.a)(u,2),j=p[0],h=p[1];return Object(d.jsxs)(g,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:i,link:j}),l(""),h("")},children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",value:i||"",onChange:function(e){l(e.target.value)},className:" popup__input popup__input_name",name:"input-name",id:"input-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",autoComplete:"off"}),Object(d.jsx)("span",{id:"input-name-error",className:"popup__error popup__error_visible"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"url",value:j||"",onChange:function(e){h(e.target.value)},className:"popup__input popup__input_link",name:"input-image-link",id:"input-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,autoComplete:"off"}),Object(d.jsx)("span",{id:"input-link-error",className:"popup__error popup__error_visible"})]})]})}function C(e){var t=e.card,n=e.isOpen,a=e.onClose,s=e.onCardDelete;return Object(d.jsx)(g,{name:"deleteCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:n,onSubmit:function(e){e.preventDefault(),s(t)},onClose:a})}var k=n(11);function y(e){var t=e.onRegister,n=e.onShowInfoTooltip,s=Object(a.useState)({email:"",password:""}),c=Object(r.a)(s,2),o=c[0],i=c[1],l=Object(a.useState)(""),u=Object(r.a)(l,2),j=(u[0],u[1]);function h(e){var t=e.target,n=t.name,a=t.value;i(Object(b.a)(Object(b.a)({},o),{},Object(k.a)({},n,a)))}function m(){i({email:"",password:""}),j("")}function _(e){e.preventDefault(),o.email&&o.password?(t(o).catch((function(e){return j(e.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!")})),n(),m()):n()}return console.log(arguments),Object(d.jsxs)("div",{className:"register",children:[Object(d.jsxs)("form",{className:"register__form",onSubmit:_,children:[Object(d.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{className:"register__input",type:"text",required:!0,id:"emain",name:"email",value:o.email,placeholder:"Email",onChange:h}),Object(d.jsx)("input",{className:"register__input",type:"password",required:!0,id:"password",name:"password",value:o.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:h}),Object(d.jsx)("button",{className:"register__button-submit",type:"submit",onSubmit:_,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("p",{className:"register__link",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(d.jsx)(p.b,{className:"register__signup",to:"/sign-up",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function S(e){var t=e.onLogin,n=Object(a.useState)({email:"",password:""}),s=Object(r.a)(n,2),c=s[0],o=s[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),u=(l[0],l[1]);function p(e){var t=e.target,n=t.name,a=t.value;o(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},n,a)))}function j(e){e.preventDefault(),c.email&&c.password&&t(c).catch((function(e){return u(e.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!")}))}return Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("form",{className:"login__form",onSubmit:j,children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{className:"login__input",type:"email",required:!0,id:"email",name:"email",value:c.email,placeholder:"Email",onChange:p}),Object(d.jsx)("input",{className:"login__input",type:"password",required:!0,id:"password",name:"password",value:c.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:p}),Object(d.jsx)("button",{className:"login__button-submit",type:"submit",onSubmit:j,children:"\u0412\u043e\u0439\u0442\u0438"})]})})}var w=n(25);function T(e){var t=e.component,n=Object(w.a)(e,["component"]);return Object(d.jsx)(l.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(b.a)({},n)):Object(d.jsx)(l.a,{to:"/sign-in"})}})}var L=n.p+"static/media/Resolve.1b6082f8.svg",E=n.p+"static/media/Reject.df8eddf6.svg";function R(e){var t=e.isOpen,n=e.onClose,a=e.isRegistered,s=a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",c=a?L:E,o=a?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a";return Object(d.jsx)("div",{className:"popup popup_type_infotooltip ".concat(t?"popup_opened":""),children:Object(d.jsxs)("div",{className:"infoTooltip",children:[Object(d.jsx)("img",{className:"infoTooltip__logo",src:c,alt:o}),Object(d.jsx)("h3",{className:"infoTooltip__title",children:s}),Object(d.jsx)("button",{type:"button",onClick:n,className:"infoTooltip__button-exit"})]})})}var P=n(15),D=n(16),I=new(function(){function e(t){Object(P.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(D.a)(e,[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441-\u043a\u043e\u0434\u043e\u043c ".concat(e.status)))}},{key:"getCardList",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{method:"GET",headers:this.headers}).then((function(t){return e._parseResponse(t)}))}},{key:"createCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._parseResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this.headers}).then((function(e){return n._parseResponse(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._parseResponse(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._parseResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return e._parseResponse(t)}))}},{key:"sendUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._parseResponse(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._parseResponse(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"a2d12257-48f2-4074-bd6c-08a7c9602f41","Content-Type":"application/json"}}),A=new(function(){function e(t){Object(P.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(D.a)(e,[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u0441-\u043a\u043e\u0434\u043e\u043c ".concat(e.status,": ").concat(e.statusText)))}},{key:"register",value:function(e,t){var n=this;return fetch("".concat(this.url,"/signup"),{method:"POST",headers:this.headers,body:JSON.stringify({email:e,password:t})}).then((function(e){return n._parseResponse(e)}))}},{key:"authorize",value:function(e,t){var n=this;return fetch("".concat(this.url,"/signin"),{method:"POST",headers:this.headers,body:JSON.stringify({password:t,email:e})}).then((function(e){return n._parseResponse(e)}))}},{key:"checkToken",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:Object(b.a)(Object(b.a)({},this.headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return t._parseResponse(e)}))}}]),e}())({url:"https://auth.nomoreparties.co",headers:{Accept:"application/json","Content-Type":"application/json"}});function U(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),o=Object(r.a)(c,2),u=o[0],p=o[1],b=Object(a.useState)(!1),_=Object(r.a)(b,2),g=_[0],k=_[1],w=Object(a.useState)(!1),L=Object(r.a)(w,2),E=L[0],P=L[1],D=Object(a.useState)(!1),U=Object(r.a)(D,2),q=U[0],J=U[1],F=Object(a.useState)({}),z=Object(r.a)(F,2),B=z[0],G=z[1],H=Object(a.useState)({}),M=Object(r.a)(H,2),V=M[0],Y=M[1],K=Object(a.useState)([]),Q=Object(r.a)(K,2),W=Q[0],X=Q[1],Z=Object(a.useState)({email:"",password:""}),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(r.a)(ne,2),se=ae[0],ce=ae[1],oe=Object(a.useState)(!1),ie=Object(r.a)(oe,2),re=ie[0],le=ie[1],ue=Object(a.useState)(!1),pe=Object(r.a)(ue,2),de=pe[0],je=pe[1],he=Object(l.g)();function be(){s(!1),p(!1),P(!1),G({}),J(!1),k(!1),ce(!1)}return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");if(!e)return;A.checkToken(e).then((function(e){var t=e.email,n=e.password;te({email:t,password:n}),je(!0)})).catch((function(){he.push("/sign-in")}))}(),I.getUserInfo().then((function(e){Y(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)})),I.getCardList().then((function(e){X(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))}),[]),Object(d.jsx)(m.Provider,{value:V,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(j,{loggedIn:de,userData:ee,onLogout:function(){localStorage.removeItem("jwt"),je(!1),te({email:"",password:""}),he.push("/sign-in")}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",loggedIn:de,component:f,onEditProfile:function(){s(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){P(!0)},onCardClick:function(e){G(e),J(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===V._id}));I.changeLikeCardStatus(e._id,!t).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))},onCardDeleteClick:function(e){G(e),k(!0)},cards:W}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(y,{onRegister:function(e){var t=e.email,n=e.password;return A.register(t,n).then((function(){le(!0),he.push("/sing-in")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))},onShowInfoTooltip:function(){ce(!0)}})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(S,{onLogin:function(e){var t=e.email,n=e.password;return A.authorize(t,n).then((function(e){te({email:t,password:n}),je(!0),he.push("/"),localStorage.setItem("jwt",e.token)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))}})}),Object(d.jsx)(l.b,{children:de?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/sign-in"})})]}),Object(d.jsx)(h,{}),Object(d.jsx)(v,{isOpen:n,onClose:be,onUpdateUser:function(e){I.sendUserInfo(e).then((function(e){Y(e),be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))}}),Object(d.jsx)(N,{isOpen:u,onClose:be,onAddPlace:function(e){I.createCard(e).then((function(e){X([e].concat(Object(i.a)(W))),be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))}}),Object(d.jsx)(x,{isOpen:E,s:!0,onUpdateAvatar:function(e){I.editUserAvatar(e).then((function(e){Y(e),be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))},onClose:be}),Object(d.jsx)(C,{card:B,isOpen:g,onClose:be,onCardDelete:function(e){e.owner._id===V._id&&I.deleteCard(e._id).then((function(){var t=W.filter((function(t){return t._id!==e._id}));X(t),be()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e.message)}))}}),Object(d.jsx)(O,{card:B,isOpen:q,onClose:be}),Object(d.jsx)(R,{isOpen:se,onClose:be,isRegistered:re})]})})})}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(U,{})})}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.31957024.chunk.js.map