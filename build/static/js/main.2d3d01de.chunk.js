(this.webpackJsonpratatouille=this.webpackJsonpratatouille||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),s=(n(72),n(73),n(74),n(75),n(2)),o=n(12),u=n(21),l=(n(79),n(80),n(81),n(8)),j=n(53),d=n(1),p=function(e){var t=Object(l.f)(),n=Object(r.useCallback)((function(e){return t.push(e)}),[t]),c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],p=a[1];Object(r.useEffect)((function(){null!=window.$email&&p(!0)}),[]);var b=Object(r.useState)(0),m=Object(s.a)(b,2),h=(m[0],m[1]),O=[{label:"Home",icon:"pi pi-fw pi-file",command:function(){n("/")}},{label:"Rezepte",icon:"pi pi-fw pi-file",command:function(){n("/menu")}},{label:"Erstellen",icon:"pi pi-fw pi-pencil",command:function(){n("/create")}},{label:"Profil",icon:"pi pi-fw pi-user",command:function(){n("/profile")}},{label:"Favoriten",icon:"pi pi-fw pi-calendar",command:function(){n("/favorites")}}],g=Object(d.jsx)("img",{alt:"logo",src:"showcase/images/logo.png",onError:function(e){return e.target.src="https://i.ibb.co/d6P2dT2/rataicon.png"},height:"40",className:"p-mr-2"});return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(j.Menubar,{model:O,start:g,end:Object(d.jsx)("div",{children:function(e){return!1!==e?Object(d.jsx)(o.Button,{label:"Logout",icon:"pi pi-fw pi-sign-out",className:"p-shadow-1",onClick:function(){h((function(e){return e+1})),window.$email=null,p(!1)}}):Object(d.jsx)(u.b,{to:"/login",children:Object(d.jsx)(o.Button,{label:"Login",icon:"pi pi-fw pi-sign-in",className:"p-shadow-1"})})}(i)})})})})},b=n(4),m=n.n(b),h=n(9),O=n(55),g=n.p+"static/media/Cooking.1f16cdcd.png",f=n(10),x=n.n(f),v=n(25),w=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(404),o=Object(s.a)(i,2),u=(o[0],o[1]),l=Object(r.useState)([]),j=Object(s.a)(l,2),p=j[0],b=j[1];Object(r.useLayoutEffect)((function(){f()}),[]),Object(r.useEffect)((function(){n&&n.forEach((function(e){var t=p;t.push(Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(v.Card,{className:"Card",title:e.name,footer:e.averagetimeinminutes+" Minuten",header:Object(d.jsx)("img",{src:e.imageurl}),style:{border:"1px solid var(--surface-d)"}})},e.id)),b(t)}))}),[n]);var f=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes"}).catch((function(e){return{error:e}}));case 2:t=e.sent,a(t.data),200===t.status&&u(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"home",class:"p-mt-6",children:[Object(d.jsx)("div",{className:"row",class:"p-grid p-m-3",children:Object(d.jsxs)("div",{class:"p-col",children:[Object(d.jsx)("img",{class:"p-mr-5",className:"Images",alt:"Let's",src:"data:image/png;base64,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",width:"450px"}),Object(d.jsx)("img",{alt:"logo",class:"p-mr-2",src:"showcase/images/logo.png",onError:function(e){return e.target.src="https://i.ibb.co/d6P2dT2/rataicon.png"},className:"logo",width:"180px"}),Object(d.jsx)("img",{class:"p-ml-5",className:"Images",alt:"Cooking",src:g,width:"450px"})]})}),Object(d.jsx)("div",{className:"card",class:"p-mt-6",children:Object(d.jsx)(O.Carousel,{value:p,itemTemplate:function(e){return e},numVisible:4,numScroll:2,responsiveOptions:[{breakpoint:"1200px",numVisible:3,numScroll:2},{breakpoint:"1020px",numVisible:2,numScroll:2},{breakpoint:"550px",numVisible:1,numScroll:1}],circular:!0,autoplayInterval:5e3})})]})},k=n(35),A=function(e,t){var n=e.cardProduct,c=(t.favourites,Object(r.useState)([])),a=Object(s.a)(c,2),i=(a[0],a[1],Object(r.useState)([])),u=Object(s.a)(i,2),l=u[0],j=u[1],p=Object(r.useState)([]),b=Object(s.a)(p,2),O=(b[0],b[1],function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/like",data:{accountId:window.$id,recipeId:n.id}}).catch((function(e){return{error:e}}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),g=function(){};return console.log(n.creatorId),Object(d.jsxs)("div",{className:"fullCard",children:[Object(d.jsx)(v.Card,{className:"p-mb-2",title:n.name,subTitle:(console.log(n.categories),console.log(JSON.parse(n.categories)),void JSON.parse(n.categories).forEach((function(e){var t=l;t.push(Object(d.jsx)(k.Chip,{label:e.name,className:"p-mr-2 p-mb-2 custom-chip"})),j(t)}))),style:{width:"25em",height:"32em"},footer:Object(d.jsx)("div",{className:"p-pb-1 ",children:n.averagetimeinminutes+" Minuten"}),header:Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"pictureRecipe",src:n.imageurl})})}),Object(d.jsx)("div",{className:"cardButton",children:void 0===window.$id||window.$id!==n.creatorId?Object(d.jsx)("div",{onClick:O,className:"recipeButton",children:Object(d.jsx)(o.Button,{icon:"pi pi-heart",className:"p-button-rounded p-button-help p-button-text"})}):window.$id===n.creatorId?Object(d.jsx)("div",{onClick:g,className:"recipeButton",children:Object(d.jsx)(o.Button,{icon:"pi pi-pencil",className:"p-button-rounded p-button-info p-button-text"})}):void 0})]})},S=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(404),o=Object(s.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)([]),p=Object(s.a)(j,2),b=p[0],O=p[1],g=Object(r.useState)(null),f=Object(s.a)(g,2),v=f[0];f[1];Object(r.useLayoutEffect)((function(){w()}),[]),Object(r.useEffect)((function(){n&&(console.log(n),n.forEach((function(e){var t=b;t.push(Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{class:"oneRecipe p-p-1 p-m-lg-3 p-b-lg-3",children:Object(d.jsx)(A,{cardProduct:e,favourites:v})})},e.id)),O(t)})))}),[n]);var w=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes"}).catch((function(e){return{error:e}}));case 2:t=e.sent,a(t.data),200===t.status&&l(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 200===u?Object(d.jsx)(c.a.Fragment,{children:b}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Rezepte konnten nicht geladen werden. Bitte sp\xe4ter erneut versuchen."})})},y=n(38),N=n(56),I=n(57),R=n(66),C=n(65),B=n(58),E=n(29),Z=function(e){Object(R.a)(n,e);var t=Object(C.a)(n);function n(e){var r;return Object(N.a)(this,n),(r=t.call(this,e)).state={selectedIngredient:null,activeIndex:1},r.ingredients=[{name:"Tomate"},{name:"Salz"},{name:"Brot"}],r}return Object(I.a)(n,[{key:"render",value:function(){var e,t=this;return Object(d.jsxs)("div",{class:"recipe",children:[Object(d.jsxs)("div",{class:"recipeTop",children:[Object(d.jsxs)("div",{class:"recipeLeft",children:[Object(d.jsx)("h3",{children:"Name"}),Object(d.jsx)("h4",{children:"Kategorien"}),Object(d.jsx)("img",{alt:"bild",src:"",onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},width:"400px"})]}),Object(d.jsxs)("div",(e={class:"recipeRight"},Object(y.a)(e,"class","p-mt-4"),Object(y.a)(e,"children",[Object(d.jsx)(o.Button,{label:"Favorit",icon:"pi pi-heart"}),Object(d.jsx)("h4",{children:"Zutaten"}),Object(d.jsx)(B.ListBox,{value:this.state.selectedIngredient,options:this.ingredients,onChange:function(e){return t.setState({selectedIngredient:e.value})},optionLabel:"name",style:{width:"15rem"}}),Object(d.jsx)("h4",{children:"Dauer:"}),Object(d.jsx)("h4",{children:"Schwierigkeit:"}),Object(d.jsx)("h4",{children:"Erstellt von: ... am ..."})]),e))]}),Object(d.jsx)("div",{class:"recipePreparation",children:Object(d.jsxs)(E.TabView,{children:[Object(d.jsx)(E.TabPanel,{header:"Schritt 1",children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),Object(d.jsx)(E.TabPanel,{header:"Schritt 2",children:Object(d.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),Object(d.jsx)(E.TabPanel,{header:"Schritt 3",children:Object(d.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})})]})}}]),n}(r.Component),T=n(22),J=n(59),Q=n(26),z=function(e){var t=Object(l.f)(),n=Object(r.useRef)(null),a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],j=i[1],p=Object(r.useState)(""),b=Object(s.a)(p,2),O=b[0],g=b[1],f=Object(r.useCallback)((function(){return t.push("/")}),[t]),v=function(){n.current.clear(),n.current.show({severity:"error",summary:"Registrierung fehlgeschlagen",detail:"Bitte eine g\xfcltige Daten angeben",life:3e3,closable:!1})},w=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"https://thatcopy.pw/catapi/rest/"}).catch((function(e){return{error:e}}));case 2:return t=e.sent,e.abrupt("return",t.data.webpurl);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===O){e.next=8;break}return e.next=3,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/login",data:{email:u,password:O}}).catch((function(e){return{error:e}}));case 3:t=e.sent,console.log(t.data),200===t.status?(window.$email=u.toLowerCase(),window.$id=t.data.accountId,n.current.clear(),n.current.show({severity:"success",summary:"Login erfolgreich",detail:"Sie werden nun weitergeleitet",life:2e3,closable:!1}),w(2e3).then((function(e){f()}))):(n.current.clear(),n.current.show({severity:"error",summary:"Login fehlgeschlagen",detail:"Bitte Eingaben \xfcberpr\xfcfen",life:3e3,closable:!1})),e.next=9;break;case 8:v();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(m.a.mark((function e(){var t,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.toLocaleLowerCase(),!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||""===O){e.next=11;break}return e.next=4,k();case 4:return r=e.sent,e.next=7,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/register",data:{email:t,password:O,pictureurl:r}}).catch((function(e){return{error:e}}));case 7:200===(c=e.sent).status?(console.log(c.data),window.$email=c.data.email,window.$id=c.data.id,n.current.clear(),n.current.show({severity:"success",summary:"Registrierung erfolgreich",detail:"Sie k\xf6nnen sich nun anmelden",life:2e3,closable:!1})):(n.current.clear(),n.current.show({severity:"error",summary:"Registrierung fehlgeschlagen",detail:"Email Adresse wird bereits verwendet",life:3e3,closable:!1})),e.next=12;break;case 11:v();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(Q.Toast,{ref:n,onClick:function(){n.current.clear()},className:"ToastMsg"}),Object(d.jsxs)("div",{className:"p-d-block p-mx-auto p-md-2 p-mt-6 loginform",children:[Object(d.jsxs)("div",{className:"p-inputgroup",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-user"})}),Object(d.jsx)(T.InputText,{placeholder:"Email Adresse",id:"email",name:"Email",onChange:function(e){return j(e.target.value)},type:"text"})]}),Object(d.jsxs)("div",{className:"p-inputgroup p-mt-1",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-key"})}),Object(d.jsx)(J.Password,{toggleMask:!0,placeholder:"Password ",id:"password",name:"Password",onChange:function(e){return g(e.target.value)},type:"text",feedback:!1})]}),Object(d.jsxs)("div",{className:"p-mt-2 buttons",children:[Object(d.jsx)(o.Button,{onClick:A,label:"Anmelden",className:"p-button-primary p-mr-2 p-shadow-1"}),Object(d.jsx)(o.Button,{onClick:S,label:"Registrieren",className:"p-button-primary p-shadow-1"})]})]})]})},F=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(404),o=Object(s.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)([]),p=Object(s.a)(j,2),b=p[0],O=p[1];Object(r.useLayoutEffect)((function(){g()}),[]),Object(r.useEffect)((function(){n&&n.forEach((function(e){var t=b;t.push(Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{class:"oneRecipe p-m-1 p-p-1 p-m-lg-3 p-b-lg-3",children:Object(d.jsx)(A,{cardProduct:e})})},e.id)),O(t)}))}),[n]);var g=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/mycreated",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 2:t=e.sent,a(t.data),200===t.status&&l(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 200===u?Object(d.jsx)(c.a.Fragment,{children:b}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Keine vorhandene eigenen Rezepte."})})},P=function(e){var t=Object(l.f)(),n=Object(r.useRef)(null),a=Object(r.useState)(window.$email),i=Object(s.a)(a,2),u=i[0],j=i[1],p=Object(r.useState)(""),b=Object(s.a)(p,2),O=b[0],g=b[1],f=Object(r.useCallback)((function(){return t.push("/login")}),[t]);null==window.$email&&f();var v=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===O){e.next=7;break}return e.next=3,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/newpw",data:{accountId:window.$id,password:O}}).catch((function(e){return{error:e}}));case 3:200===e.sent.status&&(n.current.clear(),n.current.show({severity:"success",summary:"Passwort erfolgreich ge\xe4ndert",life:2e3,closable:!1})),e.next=8;break;case 7:n.current.clear(),n.current.show({severity:"error",summary:"Passwort darf nicht leer sein",detail:"Bitte Eingaben \xfcberpr\xfcfen",life:3e3,closable:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(Q.Toast,{ref:n,onClick:function(){n.current.clear()}}),Object(d.jsxs)("div",{className:"p-grid p-fluid",children:[Object(d.jsxs)("div",{className:"p-col-12 p-md-4",children:[Object(d.jsxs)("div",{className:"p-inputgroup",style:{width:"400px"},children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-user"})}),Object(d.jsx)(T.InputText,{disabled:!0,placeholder:"Email Adresse",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"p-inputgroup",style:{width:"400px"},children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-key"})}),Object(d.jsx)(T.InputText,{placeholder:"... neues Passwort",value:O,onChange:function(e){return g(e.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)(o.Button,{onClick:v,label:"Speichern",className:"p-button-primary p-mr-2"})})]}),Object(d.jsx)("div",{className:"MyRecepies",children:Object(d.jsx)(F,{})})]})]})},L=n(60),M=n(61),G=n(39),q=n(62),K=n(63),D=function(e){var t=Object(l.f)(),n=Object(r.useRef)(null),a=Object(r.useCallback)((function(){return t.push("/login")}),[t]);null==window.$email&&a();var i=function(e){return new Promise((function(t){return setTimeout(t,e)}))},u=Object(r.useCallback)((function(){return t.push("/")}),[t]),j=Object(r.useState)(""),p=Object(s.a)(j,2),b=p[0],O=p[1],g=Object(r.useState)(""),f=Object(s.a)(g,2),v=f[0],w=f[1],k=Object(r.useState)("30"),A=Object(s.a)(k,2),S=A[0],y=A[1],N=Object(r.useState)(),I=Object(s.a)(N,2),R=I[0],C=I[1],B=Object(r.useState)(""),E=Object(s.a)(B,2),Z=E[0],J=E[1],z=Object(r.useState)(""),F=Object(s.a)(z,2),P=F[0],D=F[1],W=Object(r.useState)([]),X=Object(s.a)(W,2),U=X[0],Y=X[1],V=function(){O(""),w(""),y("30"),C(),J(""),D(""),Y([])},H=function(e){n.current.clear(),n.current.show({severity:"success",summary:"Rezept wurde gespeichert!",detail:e,life:1500,closable:!1})},$=function(e){n.current.clear(),n.current.show({severity:"error",summary:"Es fehlt "+e+"!",detail:"Bitte alle Felder f\xfcllen.",life:3e3,closable:!1})},_=function(){n.current.clear(),n.current.show({severity:"error",summary:"Bild Url ist ung\xfcltig!",detail:'Die Url sollte mit "https://" beginnen und mit ".jpg, .png, .jpeg, .gif" enden.',life:5e3,closable:!1})},ee=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(window.$id),console.log(JSON.stringify(U)),console.log(R),e.next=5,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/create",data:{name:b,imageurl:v,averagetimeinminutes:S,difficulty:JSON.stringify(R),ingredients:Z,preparation:P,categories:JSON.stringify(U),creatorId:window.$id}}).catch((function(e){return{error:e}}));case 5:200===e.sent.status?(V(),H(t),i(1500).then((function(e){u()}))):(n.current.clear(),n.current.show({severity:"error",summary:"Speichern fehlgeschlagen!",detail:"Bitte versuchen Sie es erneut.",life:3e3,closable:!1}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(Q.Toast,{ref:n,onClick:function(){n.current.clear()},className:"ToastMsg"}),Object(d.jsxs)("div",{className:"createrecipe",children:[Object(d.jsx)("h1",{children:"Rezept erstellen"}),Object(d.jsxs)("span",{className:"recipename",children:[Object(d.jsx)("label",{htmlFor:"recipename",children:"Rezeptname: "}),Object(d.jsx)("br",{}),Object(d.jsx)(T.InputText,{id:"recipename",value:b,onChange:function(e){return O(e.target.value)},placeholder:"... Bauernsalat"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:"recipeimageurl",children:[Object(d.jsx)("label",{htmlFor:"recipeimageurl",children:"Bild Url: "}),Object(d.jsx)("br",{}),Object(d.jsx)(T.InputText,{id:"recipeimageurl",value:v,onChange:function(e){return w(e.target.value)},placeholder:"... http://link-zum-bild"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"recipeavetime",children:[Object(d.jsxs)("span",{children:["Arbeitszeit: ",S," Minuten"]}),Object(d.jsx)("br",{}),Object(d.jsx)(K.InputNumber,{value:S,style:{width:"12rem",hight:"12rem"},mode:"decimal",onValueChange:function(e){return y(e.target.value)}}),Object(d.jsx)(L.Slider,{value:S,style:{width:"12rem",hight:"12rem",margin:"auto"},onChange:function(e){return y(e.value)},min:0,max:555})]}),Object(d.jsxs)("div",{className:"recipedifficulty",children:[Object(d.jsx)("h5",{children:"Schwierigkeit"}),Object(d.jsx)(q.SelectButton,{value:R,options:[{name:"einfach"},{name:"normal"},{name:"schwer"}],onChange:function(e){return C(e.value)},optionLabel:"name"})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Zutaten: "}),Object(d.jsx)(G.InputTextarea,{value:Z,onChange:function(e){return J(e.target.value)},placeholder:"... Eier 3Stk, Milch 300ml, ...",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Arbeitsanweisung: "}),Object(d.jsx)(G.InputTextarea,{value:P,onChange:function(e){return D(e.target.value)},placeholder:"... erst Mixen, dann Backen",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Kategorien"}),Object(d.jsx)(M.MultiSelect,{value:U,options:[{name:"Hauptspeise"},{name:"Gem\xfcse"},{name:"Vegetarisch"},{name:"Auflauf"},{name:"Nudeln"},{name:"Suppe"},{name:"Salat"},{name:"Backen"},{name:"Torte"},{name:"Vegan"}],onChange:function(e){return Y(e.value)},optionLabel:"name",filter:!0,filterPlaceholder:"Vegan",selectionLimit:"4",placeholder:"W\xe4hle eine Kategorie",display:"chip",showSelectAll:!1}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[Object(d.jsx)(o.Button,{label:"Rezept einreichen",icon:"pi pi-check",className:"p-button-success p-buttonset",onClick:function(){console.log(b,v,R,Z,P,U),R?""!==P?""!==Z?""!==v?null!=v.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|))/)?""!==b?0==U.length?(console.log("arrrrraaaay:"+U),$("Kategorien")):(ee(""),console.log("Kategorien: "+U)):($("Rezeptname"),console.log("Rezeptname: "+b)):_():(w("http://myminidoxie.com/wp-content/uploads/2012/11/which-came-first-the-wiener-or-the-dachshund.jpg"),""!==b?0==U.length?(console.log("arrrrraaaay:"+U),$("Kategorien")):(ee("mit Platzhalter als Bild"),console.log("Kategorien: "+U)):($("Rezeptname"),console.log("Rezeptname: "+b))):($("Zutaten"),console.log("Zutaten: "+Z)):($("Arbeitsanweisung"),console.log("Arbeitsanweisung: "+P)):($("Schwierigkeit"),console.log("Schwierigkeit: "+R))}}),Object(d.jsx)(o.Button,{label:"Zur\xfccksetzen",icon:"pi pi-replay",className:"p-button-raised p-button-danger",onClick:V})]})]})]})},W=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(404),o=Object(s.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)([]),p=Object(s.a)(j,2),b=p[0],O=p[1];Object(r.useLayoutEffect)((function(){g()}),[]),Object(r.useEffect)((function(){n&&n.forEach((function(e){var t=b;t.push(Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{class:"oneRecipe p-m-1 p-p-1 p-m-lg-3 p-b-lg-3",children:Object(d.jsx)(A,{cardProduct:e})})},e.id)),O(t)}))}),[n]);var g=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 2:t=e.sent,a(t.data),200===t.status&&l(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 200===u?Object(d.jsx)(c.a.Fragment,{children:b}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Keine vorhandene Favoriten."})})},X=n(64);n.n(X).a.ripple=!0;var U=function(){var e=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(w,{})]})},t=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(S,{})]})},n=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(Z,{})]})},r=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(z,{})]})},a=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(P,{})]})},i=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(D,{})]})},s=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(W,{})]})};return Object(d.jsx)(u.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/menu",children:Object(d.jsx)(t,{})}),Object(d.jsx)(l.a,{path:"/recipe",children:Object(d.jsx)(n,{})}),Object(d.jsx)(l.a,{path:"/login",children:Object(d.jsx)(r,{})}),Object(d.jsx)(l.a,{path:"/profile",children:Object(d.jsx)(a,{})}),Object(d.jsx)(l.a,{path:"/create",children:Object(d.jsx)(i,{})}),Object(d.jsx)(l.a,{path:"/favorites",children:Object(d.jsx)(s,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(e,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),Y()},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.2d3d01de.chunk.js.map