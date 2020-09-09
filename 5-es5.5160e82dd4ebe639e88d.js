!function(){function t(t,e){return c(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||r(t,e)||n()}function e(t){return function(t){if(Array.isArray(t))return i(t)}(t)||o(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dgmN:function(i,u,f){"use strict";f.r(u),f.d(u,"PagesModule",(function(){return dt}));var h,b,m=f("aceb"),p=f("vTDv"),d=f("tyNb"),v=[{title:"Characters (V2)",icon:"people-outline",link:"/pages/dashboard",home:!0},{title:"Quotes By Characters",icon:"volume-up-outline",link:"/pages/iot-dashboard"}],y=f("fXoL"),g=f("mgFL"),w=((h=function t(){l(this,t),this.menu=v}).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=y.Gb({type:h,selectors:[["futurama-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(t,e){1&t&&(y.Sb(0,"futurama-one-column-layout"),y.Nb(1,"nb-menu",0),y.Nb(2,"router-outlet"),y.Rb()),2&t&&(y.Bb(1),y.hc("items",e.menu))},directives:[g.a,m.F,d.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),h),k=f("w+5F"),S=f("XNiG"),O=f("VRyK"),C=f("LRne"),q=f("lJxs"),M=function t(e,n,r){l(this,t),this.character=e,this.quote=n,this.image=r},P=f("tk/3"),R=((b=function(){function t(e){l(this,t),this.http=e}return s(t,[{key:"getList",value:function(t){return this.http.get("http://futuramaapi.herokuapp.com/api"+t.getUrl().join("")).pipe(Object(q.a)((function(t){return t.map((function(t){return new M(t.character,t.quote,t.image)}))})))}}]),t}()).\u0275fac=function(t){return new(t||b)(y.Wb(P.a))},b.\u0275prov=y.Ib({token:b,factory:b.\u0275fac,providedIn:"root"}),b),x=function(){var t=function t(){l(this,t)};return t.COUNT="count",t.CHARACTER="character",t.QUERY="query",t}(),T=function(){function t(e,n){l(this,t),this.count=e,this.param=n}return s(t,[{key:"getParams",value:function(){return Object.assign(Object.assign({},this.param.getParams()),a({},x.COUNT,this.count))}},{key:"getSource",value:function(){return"quotes"}},{key:"getUrl",value:function(){var t,i=this.param.getUrl(),a=c(t=i)||o(t)||r(t)||n(),u=a[0],s=a.slice(1);return this.count?s.length?["/",u,"/"].concat(e(s),["/",String(this.count)]):["/",this.getSource(),"/",String(this.count)]:s.length?["/",u,"/"].concat(e(s)):["/",this.getSource()]}}]),t}(),N=function(){function t(e){l(this,t),this.quotes=e}return s(t,[{key:"getParams",value:function(){return a({},x.CHARACTER,this.quotes.character)}},{key:"getSource",value:function(){return"characters"}},{key:"getUrl",value:function(){var t=this.quotes.character;return t?[this.getSource(),t]:[this.getSource()]}}]),t}(),j=f("vkgz"),A=f("5+tZ"),_=f("JIr8"),I=f("ofXK");function B(t,e){1&t&&y.Ob(0)}var U=function(t,e){return{$implicit:t,index:e}};function $(t,e){if(1&t&&(y.Qb(0),y.vc(1,B,1,0,"ng-container",2),y.Pb()),2&t){var n=e.$implicit,r=e.index,i=y.bc(),o=y.mc(2);y.Bb(1),y.hc("ngTemplateOutlet",i.rowTemplate||o)("ngTemplateOutletContext",y.kc(2,U,n,r))}}function F(t,e){1&t&&y.xc(0),2&t&&y.yc(e.$implicit)}var G,L=((G=function t(){l(this,t)}).\u0275fac=function(t){return new(t||G)},G.\u0275cmp=y.Gb({type:G,selectors:[["futurama-list"]],inputs:{keyName:"keyName",rowTemplate:"rowTemplate",list:"list"},decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],["defaultTemplate",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(y.vc(0,$,2,5,"ng-container",0),y.vc(1,F,1,1,"ng-template",null,1,y.wc)),2&t&&y.hc("ngForOf",e.list)},directives:[I.l,I.q],styles:[""]}),G);function V(t,e){if(1&t&&(y.Sb(0,"p",3),y.xc(1),y.Rb()),2&t){var n=e.$implicit;y.Bb(1),y.yc(n.quote)}}var E,J=((E=function(){function t(e,n){l(this,t),this.ref=e,this.quotesService=n}return s(t,[{key:"ngOnInit",value:function(){this.list$=this.quotesService.getList(new T(5,new N(this.quotes))).pipe(Object(_.a)((function(t){return Object(C.a)([])})))}},{key:"dismiss",value:function(){this.ref.close()}}]),t}()).\u0275fac=function(t){return new(t||E)(y.Mb(m.r),y.Mb(R))},E.\u0275cmp=y.Gb({type:E,selectors:[["futurama-five-quotes-character"]],inputs:{title:"title",quotes:"quotes"},decls:12,vars:6,consts:[[3,"keyName","list","rowTemplate"],["template",""],["nbButton","","hero","","status","primary",3,"click"],[1,"quote-preview","p-2"]],template:function(t,e){if(1&t&&(y.Sb(0,"nb-card"),y.Sb(1,"nb-card-header"),y.Sb(2,"h5"),y.xc(3),y.Rb(),y.Rb(),y.Sb(4,"nb-card-body"),y.Nb(5,"futurama-list",0),y.cc(6,"async"),y.vc(7,V,2,1,"ng-template",null,1,y.wc),y.Rb(),y.Sb(9,"nb-card-footer"),y.Sb(10,"button",2),y.Zb("click",(function(){return e.dismiss()})),y.xc(11,"Dismiss Modal"),y.Rb(),y.Rb(),y.Rb()),2&t){var n=y.mc(8);y.Bb(3),y.yc(e.title),y.Bb(2),y.hc("keyName","quote")("list",y.dc(6,4,e.list$))("rowTemplate",n)}},directives:[m.i,m.k,m.h,L,m.j,m.f],pipes:[I.b],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}.quote-preview[_ngcontent-%COMP%]{-webkit-text-decoration:underline #000;text-decoration:underline #000}"]}),E),H=f("3Pt+");function Q(t,e){if(1&t){var n=y.Tb();y.Sb(0,"nb-option",4),y.Zb("click",(function(){return y.oc(n),y.bc(2).setCount()})),y.xc(1),y.Rb()}if(2&t){var r=e.$implicit;y.hc("value",r),y.Bb(1),y.yc(r)}}function X(t,e){if(1&t&&(y.Sb(0,"nb-card-body"),y.Sb(1,"nb-select",2),y.vc(2,Q,2,2,"nb-option",3),y.Rb(),y.Rb()),2&t){var n=y.bc();y.Bb(1),y.hc("formControl",n.form),y.Bb(1),y.hc("ngForOf",n.values)}}var Z,K,D=((Z=function(){function t(){l(this,t),this.form=new H.b,this.countChanged=new y.o,this.formOpen=new y.o}return s(t,[{key:"ngOnInit",value:function(){this.values=Array.from(Array(this.count),(function(t,e){return String(e+1)}))}},{key:"setCount",value:function(){this.countChanged.emit(this.form.value)}},{key:"open",value:function(){this.show=!this.show,this.show&&this.formOpen.emit()}},{key:"formValue",set:function(t){this.form.patchValue(t)}}]),t}()).\u0275fac=function(t){return new(t||Z)},Z.\u0275cmp=y.Gb({type:Z,selectors:[["futurama-count-quotes-form"]],inputs:{formValue:"formValue",count:"count",values:"values"},outputs:{countChanged:"countChanged",formOpen:"formOpen"},decls:4,vars:1,consts:[[3,"click"],[4,"ngIf"],["placeholder","1..10",3,"formControl"],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"]],template:function(t,e){1&t&&(y.Sb(0,"nb-card"),y.Sb(1,"nb-card-header",0),y.Zb("click",(function(){return e.open()})),y.xc(2,"Select 'count' Quotes"),y.Rb(),y.vc(3,X,3,2,"nb-card-body",1),y.Rb()),2&t&&(y.Bb(3),y.hc("ngIf",e.show))},directives:[m.i,m.k,I.m,m.h,m.K,H.i,H.c,I.l,m.I],styles:[""]}),Z),W=f("GJmQ"),Y=((K=function(){function e(t,n){l(this,e),this.themeService=t,this.breakpointService=n,this.setCharacter=new y.o,this.alive=!0,this.breakpoint={name:"",width:0}}return s(e,[{key:"ngOnInit",value:function(){var e=this;this.themeService.onMediaQueryChange().pipe(Object(W.a)((function(){return e.alive}))).subscribe((function(n){var r=t(n,2),i=(r[0],r[1]),o=e.breakpointService.getBreakpointsMap().xl;e.imageUrl=e.quote.image.includes("image/fetch/")&&i.width<o?e.quote.image.replace("w_500","w_100"):e.quote.image,e.breakpoint=i}))}},{key:"ngOnDestroy",value:function(){this.alive=!1}}]),e}()).\u0275fac=function(t){return new(t||K)(y.Mb(m.R),y.Mb(m.E))},K.\u0275cmp=y.Gb({type:K,selectors:[["futurama-quote"]],inputs:{quote:"quote"},outputs:{setCharacter:"setCharacter"},decls:8,vars:3,consts:[[1,"d-flex"],[1,"p-2","bd-highligh"],["alt","quote image",1,"media-object","avatar",3,"src"],[1,"p-2"],[1,"media-heading","character-name",3,"click"],[1,"quote-preview"]],template:function(t,e){1&t&&(y.Sb(0,"div",0),y.Sb(1,"div",1),y.Nb(2,"img",2),y.Rb(),y.Sb(3,"div",3),y.Sb(4,"h5",4),y.Zb("click",(function(){return e.setCharacter.emit(e.quote)})),y.xc(5),y.Rb(),y.Sb(6,"small",5),y.xc(7),y.Rb(),y.Rb(),y.Rb()),2&t&&(y.Bb(2),y.hc("src",e.imageUrl,y.qc),y.Bb(3),y.zc(" ",e.quote.character," "),y.Bb(2),y.yc(e.quote.quote))},styles:[".avatar[_ngcontent-%COMP%]{width:50px;height:50px}"]}),K);function z(t,e){if(1&t){var n=y.Tb();y.Sb(0,"futurama-quote",3),y.Zb("setCharacter",(function(t){return y.oc(n),y.bc().onSetCharacter(t)})),y.Rb()}2&t&&y.hc("quote",e.$implicit)}var tt,et,nt,rt,it=((et=function(){function t(e,n,r,i){l(this,t),this.quotesService=e,this.router=n,this.route=r,this.dialogService=i,this.refreshList$=new S.a}return s(t,[{key:"ngOnInit",value:function(){var t=this;this.list$=Object(O.a)(this.route.data.pipe(Object(q.a)((function(t){return t[x.QUERY]}))),this.refreshList$).pipe(Object(j.a)((function(e){t.query=e})),Object(A.a)((function(e){return t.quotesService.getList(t.query).pipe(Object(_.a)((function(t){return Object(C.a)([])})))})))}},{key:"addParametersToUrl",value:function(){this.router.navigate(["."],{relativeTo:this.route,queryParams:this.query.getParams()})}},{key:"onSetCharacter",value:function(t){this.dialogService.open(J,{context:{title:t.character,quotes:t}})}},{key:"onCount",value:function(t){this.refreshList$.next(new T(t,new N(new M(this.query.getParams()[x.CHARACTER],null,null)))),this.addParametersToUrl()}},{key:"formOpen",value:function(){this.formValue=this.query.getParams()[x.COUNT]}}]),t}()).\u0275fac=function(t){return new(t||et)(y.Mb(R),y.Mb(d.c),y.Mb(d.a),y.Mb(m.s))},et.\u0275cmp=y.Gb({type:et,selectors:[["futurama-quote-list"]],decls:5,vars:7,consts:[[3,"count","formValue","formOpen","countChanged"],[3,"keyName","list","rowTemplate"],["template",""],[3,"quote","setCharacter"]],template:function(t,e){if(1&t&&(y.Sb(0,"futurama-count-quotes-form",0),y.Zb("formOpen",(function(){return e.formOpen()}))("countChanged",(function(t){return e.onCount(t)})),y.Rb(),y.Nb(1,"futurama-list",1),y.cc(2,"async"),y.vc(3,z,1,1,"ng-template",null,2,y.wc)),2&t){var n=y.mc(4);y.hc("count",10)("formValue",e.formValue),y.Bb(1),y.hc("keyName","quote")("list",y.dc(2,5,e.list$))("rowTemplate",n)}},directives:[D,L,Y],pipes:[I.b],styles:[""]}),et),ot=((tt=function(){function t(){l(this,t)}return s(t,[{key:"resolve",value:function(t,e){return new T(t.queryParams[x.COUNT],new N(new M(t.queryParams[x.CHARACTER],null,null)))}}]),t}()).\u0275fac=function(t){return new(t||tt)},tt.\u0275prov=y.Ib({token:tt,factory:tt.\u0275fac,providedIn:"root"}),tt),ct=function t(e,n,r,i,o,c,a,u,s,f){l(this,t),this.Species=e,this.Age=n,this.Planet=r,this.Profession=i,this.Status=o,this.FirstAppearance=c,this.PicUrl=a,this.Relatives=u,this.VoicedBy=s,this.Name=f},at=((rt=function(){function t(e){l(this,t),this.http=e}return s(t,[{key:"getList",value:function(){return this.http.get("http://futuramaapi.herokuapp.com/api/v2/characters").pipe(Object(q.a)((function(t){return t.map((function(t){return new ct(t.Species,t.Age,t.Planet,t.Profession,t.Status,t.FirstAppearance,t.PicUrl,t.Relatives,t.VoicedBy,t.Name)}))})))}}]),t}()).\u0275fac=function(t){return new(t||rt)(y.Wb(P.a))},rt.\u0275prov=y.Ib({token:rt,factory:rt.\u0275fac,providedIn:"root"}),rt),ut=((nt=function(){function t(){l(this,t)}return s(t,[{key:"ngOnInit",value:function(){}},{key:"charactersModel",set:function(t){this.quote=new M(t.Name,t.Species,t.PicUrl)}}]),t}()).\u0275fac=function(t){return new(t||nt)},nt.\u0275cmp=y.Gb({type:nt,selectors:[["futurama-character"]],inputs:{charactersModel:"charactersModel"},decls:1,vars:1,consts:[[3,"quote"]],template:function(t,e){1&t&&y.Nb(0,"futurama-quote",0),2&t&&y.hc("quote",e.quote)},directives:[Y],styles:[""]}),nt);function st(t,e){1&t&&y.Nb(0,"futurama-character",2),2&t&&y.hc("charactersModel",e.$implicit)}var lt,ft,ht,bt=[{path:"",component:w,children:[{path:"dashboard",component:(lt=function(){function t(e){l(this,t),this.charactersService=e}return s(t,[{key:"ngOnInit",value:function(){this.list$=this.charactersService.getList()}}]),t}(),lt.\u0275fac=function(t){return new(t||lt)(y.Mb(at))},lt.\u0275cmp=y.Gb({type:lt,selectors:[["futurama-character-list"]],decls:4,vars:5,consts:[[3,"keyName","list","rowTemplate"],["template",""],[3,"charactersModel"]],template:function(t,e){if(1&t&&(y.Nb(0,"futurama-list",0),y.cc(1,"async"),y.vc(2,st,1,1,"ng-template",null,1,y.wc)),2&t){var n=y.mc(3);y.hc("keyName","Name")("list",y.dc(1,3,e.list$))("rowTemplate",n)}},directives:[L,ut],pipes:[I.b],styles:[""]}),lt)},{path:"iot-dashboard",component:it,resolve:a({},x.QUERY,ot)},{path:"miscellaneous",loadChildren:function(){return Promise.resolve().then(f.bind(null,"ivxX")).then((function(t){return t.MiscellaneousModule}))}},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",component:k.a}]}],mt=((ft=function t(){l(this,t)}).\u0275mod=y.Kb({type:ft}),ft.\u0275inj=y.Jb({factory:function(t){return new(t||ft)},imports:[[d.g.forChild(bt)],d.g]}),ft),pt=f("ivxX"),dt=((ht=function t(){l(this,t)}).\u0275mod=y.Kb({type:ht}),ht.\u0275inj=y.Jb({factory:function(t){return new(t||ht)},imports:[[mt,p.a,m.G,pt.MiscellaneousModule]]}),ht)},ivxX:function(t,e,n){"use strict";n.r(e),n.d(e,"MiscellaneousModule",(function(){return b}));var r,i,o,c=n("aceb"),a=n("vTDv"),u=n("tyNb"),s=n("fXoL"),f=[{path:"",component:(r=function t(){l(this,t)},r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=s.Gb({type:r,selectors:[["futurama-miscellaneous"]],decls:1,vars:0,template:function(t,e){1&t&&s.Nb(0,"router-outlet")},directives:[u.h],encapsulation:2}),r),children:[{path:"404",component:n("w+5F").a}]}],h=((o=function t(){l(this,t)}).\u0275mod=s.Kb({type:o}),o.\u0275inj=s.Jb({factory:function(t){return new(t||o)},imports:[[u.g.forChild(f)],u.g]}),o),b=((i=function t(){l(this,t)}).\u0275mod=s.Kb({type:i}),i.\u0275inj=s.Jb({factory:function(t){return new(t||i)},imports:[[a.a,c.l,c.g,h]]}),i)},"w+5F":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),i=n("aceb"),o=function(){var t=function(){function t(e){l(this,t),this.menuService=e}return s(t,[{key:"goToHome",value:function(){this.menuService.navigateHome()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Mb(i.H))},t.\u0275cmp=r.Gb({type:t,selectors:[["futurama-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"nb-card"),r.Sb(3,"nb-card-body"),r.Sb(4,"div",2),r.Sb(5,"h2",3),r.xc(6,"404 Page Not Found"),r.Rb(),r.Sb(7,"small",4),r.xc(8,"The page you were looking for doesn't exist"),r.Rb(),r.Sb(9,"button",5),r.Zb("click",(function(){return e.goToHome()})),r.xc(10," Take me home "),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb())},directives:[i.i,i.h,i.f],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),t}()}}])}();