(this.webpackJsonpratatouille=this.webpackJsonpratatouille||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(68),n(69),n(70),n(71),n(2)),l=n(7),o=n(18),u=(n(43),n(44),n(45),n(11)),p=n(57),d=n(0),j=function(e){var t=Object(u.f)(),n=Object(a.useCallback)((function(e){return t.push(e)}),[t]),c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],j=r[1];Object(a.useEffect)((function(){null!=window.$email&&j(!0)}),[]);var m=Object(a.useState)(0),b=Object(i.a)(m,2),h=(b[0],b[1]),f=[{label:"Home",icon:"pi pi-fw pi-file",command:function(){n("/")}},{label:"Rezepte",icon:"pi pi-fw pi-book",command:function(){n("/menu")}},{label:"Erstellen",icon:"pi pi-fw pi-pencil",command:function(){n("/create")}},{label:"Profil",icon:"pi pi-fw pi-user",command:function(){n("/profile")}},{label:"Favoriten",icon:"pi pi-fw pi-calendar",command:function(){n("/favorites")}}],O=Object(d.jsx)("img",{alt:"logo",src:"showcase/images/logo.png",onError:function(e){return e.target.src="https://i.ibb.co/d6P2dT2/rataicon.png"},height:"40",className:"p-mr-2"});return Object(d.jsx)("div",{className:"appHeader",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(p.Menubar,{model:f,start:O,end:Object(d.jsx)("div",{children:function(e){return!1!==e?Object(d.jsx)(l.Button,{label:"Logout",icon:"pi pi-fw pi-sign-out",className:"p-shadow-1",onClick:function(){h((function(e){return e+1})),window.$email=null,j(!1)}}):Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)(l.Button,{label:"Login",icon:"pi pi-fw pi-sign-in",className:"p-shadow-1"})})}(s)})})})})},m=n(3),b=n.n(m),h=n(6),f=n(59),O=n.p+"static/media/Lets_get_.09e664e3.png",g=n.p+"static/media/Cooking.1f16cdcd.png",x=n(5),w=n.n(x),v=n(32),k=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(404),l=Object(i.a)(s,2),o=(l[0],l[1]),u=Object(a.useState)([]),p=Object(i.a)(u,2),j=p[0],m=p[1];Object(a.useLayoutEffect)((function(){x()}),[]),Object(a.useEffect)((function(){n&&n.forEach((function(e){var t=j;t.push(Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(v.Card,{className:"Card",title:e.name,footer:e.averagetimeinminutes+" Minuten",header:Object(d.jsx)("img",{alt:"Product",src:e.imageurl}),style:{border:"1px solid var(--surface-d)"}})},e.id)),m(t)}))}),[n]);var x=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes"}).catch((function(e){return{error:e}}));case 2:t=e.sent,r(t.data),200===t.status&&o(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"home p-mt-6",children:[Object(d.jsx)("div",{className:"row p-grid p-m-3",children:Object(d.jsxs)("div",{className:"p-col",children:[Object(d.jsx)("img",{className:"Images p-mr-5",alt:"Let's",src:O,width:"450px"}),Object(d.jsx)("img",{alt:"logo",src:"showcase/images/logo.png",onError:function(e){return e.target.src="https://i.ibb.co/d6P2dT2/rataicon.png"},className:"logo p-mr-2",width:"180px"}),Object(d.jsx)("img",{className:"Images p-ml-5",alt:"Cooking",src:g,width:"450px"})]})}),Object(d.jsx)("div",{className:"card p-mt-6",children:Object(d.jsx)(f.Carousel,{className:"carousel ",value:j,itemTemplate:function(e){return e},numVisible:4,numScroll:2,responsiveOptions:[{breakpoint:"1200px",numVisible:3,numScroll:2},{breakpoint:"1020px",numVisible:2,numScroll:2},{breakpoint:"550px",numVisible:1,numScroll:1}],circular:!0,autoplayInterval:5e3})})]})},y=n(27),N=n(60),S=function(e){var t=Object(a.useState)(e.liked),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(u.f)(),o=Object(a.useState)(),p=Object(i.a)(o,2),j=p[0];p[1];Object(a.useEffect)((function(){}),[j]);var m=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$id){t.next=5;break}return t.next=3,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/like",data:{accountId:window.$id,recipeId:e.id}}).catch((function(e){return{error:e}}));case 3:200===t.sent.status&&r(!1===c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=Object(a.useCallback)((function(){return s.push("/recipe/edit/"+e.id)}),[s,e.id]),O=Object(a.useCallback)((function(){return s.push("/recipe/"+e.id)}),[s,e.id]),g=Object(a.useCallback)((function(){return s.push("/")})),x=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$id){t.next=5;break}return t.next=3,w()({method:"delete",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/mycreated/delete/"+e.id,data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 3:t.sent,g();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=[];e.categories.forEach((function(e){k.push(Object(d.jsx)(y.Chip,{label:e,className:"p-shadow-1 p-mr-2 p-mb-2 custom-chip"}))}));var S,C=Object(d.jsx)("img",{alt:"Card",className:"recipeCardImg",src:"showcase/demo/images/usercard.png",onError:function(t){return t.target.src=e.img}});return window.$id?!0===c?S=Object(d.jsxs)("span",{children:[Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn",label:"",icon:"pi pi-window-maximize",onClick:O}),Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn p-ml-2",label:"Gemerkt",icon:"pi pi-star",onClick:m})]}):!1===c?S=Object(d.jsxs)("span",{children:[Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn",label:"",icon:"pi pi-window-maximize",onClick:O}),Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn p-ml-2",label:"Merken",icon:"pi pi-star-o",onClick:m})]}):"editable"===c&&(S=Object(d.jsxs)("span",{children:[Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn p-mb-2 p-lg-3 p-mr-2",label:"",icon:"pi pi-window-maximize",onClick:O}),Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn p-mb-2 p-lg-3 p-mr-2",label:"",icon:"pi pi-pencil",onClick:f}),Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn p-button-danger p-mb-2  ",label:"",icon:"pi pi-trash",onClick:function(){Object(N.confirmDialog)({message:"Wollen Sie das Rezept wirklich l\xf6schen?",header:"L\xf6schen",icon:"pi pi-exclamation-triangle",acceptLabel:"Ja",rejectLabel:"Nein",accept:function(){return x()}})}})]})):S=Object(d.jsx)("span",{children:Object(d.jsx)(l.Button,{className:"p-shadow-1 likebtn ",label:"",icon:"pi pi-window-maximize",onClick:O})}),Object(d.jsx)("div",{className:"fullCard p-d-block p-mx-auto",children:Object(d.jsxs)(v.Card,{className:"cardContent",title:e.name,subTitle:e.time,style:{"box-shadow":"0 4px 7px 0 rgba(0, 0, 0, 0.15) , 0 6px 10px 0 rgba(0, 0, 0, 0.19)"},footer:S,header:C,children:[Object(d.jsx)("p",{className:"p-m-0",style:{lineHeight:"1.5"},children:e.description}),Object(d.jsx)("div",{className:"chip-holder",children:k})]})})},C=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),l=Object(i.a)(s,2),o=l[0],u=l[1],p=Object(a.useState)(404),j=Object(i.a)(p,2),m=j[0],f=j[1],O=Object(a.useState)([]),g=Object(i.a)(O,2),x=g[0],v=g[1];Object(a.useLayoutEffect)((function(){console.clear(),k()}),[]),Object(a.useLayoutEffect)((function(){if(n){var e=[];n.forEach((function(t){var n=t.categories.match(/[A-Za-z0-9_\xe4\xc4\xf6\xd6\xfc\xdc\xdf]+/g),a=!1;null!=o&&o.length>0&&o.forEach((function(e){t.id===e.id&&(a=!0)})),console.log(a),e.push(y(t,a,n))})),v(e)}else console.log("No products")}),[n,o]);var k=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 2:if(t=e.sent,!window.$id){e.next=9;break}return console.log("Fetching favorite recipes with accountId: "+window.$id),e.next=7,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 7:200===(n=e.sent).status?u(n.data):u([]);case 9:r(t.data),200===t.status&&f(200);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,t,n){return Object(d.jsx)(S,{className:"p-mb-2 p-shadow-2",id:e.id,liked:t,img:e.imageurl,categories:n,style:{width:"25em"},name:e.name,time:e.averagetimeinminutes+" Minuten"},e.id)};return 200===m?Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{className:"cards p-mt-4 p-mb-4",children:x})}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Rezepte werden geladen."})})},z=n(33),B=n(20),I=n(34),F=n(28),E=n(35),R=n(36),T=n(24),L=function(e){var t=Object(u.f)(),n=Object(a.useRef)(null);Object(a.useEffect)((function(){ee(),Q()}),[]);var r=e.recipeId.match.params.recipeId,s=Object(a.useState)(""),o=Object(i.a)(s,2),p=o[0],j=o[1],m=Object(a.useState)(""),f=Object(i.a)(m,2),O=f[0],g=f[1],x=Object(a.useState)(""),v=Object(i.a)(x,2),k=v[0],y=v[1],N=Object(a.useState)("30"),S=Object(i.a)(N,2),C=S[0],L=S[1],$=Object(a.useState)(),P=Object(i.a)($,2),M=P[0],A=P[1],K=Object(a.useState)(""),Z=Object(i.a)(K,2),V=Z[0],D=Z[1],G=Object(a.useState)(""),U=Object(i.a)(G,2),H=U[0],J=U[1],W=Object(a.useState)([]),_=Object(i.a)(W,2),Y=_[0],q=_[1],Q=function(){g(p.name),y(p.imageurl),L(p.averagetimeinminutes),A({name:p.difficulty}),D(p.ingredients),J(p.preparation)},X=Object(a.useCallback)((function(){return t.push("/#profile")}),[t]),ee=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/recipe/"+r}).catch((function(e){return{error:e}}));case 2:200===(t=e.sent).status&&(j(t.data),console.log(t.data),g(t.data.name),y(t.data.imageurl),L(t.data.averagetimeinminutes),A({name:t.data.difficulty}),D(t.data.ingredients),J(t.data.preparation));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ne=function(e){n.current.clear(),n.current.show({severity:"success",summary:"Rezept wurde gespeichert!",detail:e,life:1500,closable:!1})},ae=function(e){n.current.clear(),n.current.show({severity:"error",summary:"Es fehlt "+e+"!",detail:"Bitte alle Felder f\xfcllen.",life:3e3,closable:!1})},ce=function(){n.current.clear(),n.current.show({severity:"error",summary:"Bild Url ist ung\xfcltig!",detail:'Die Url sollte mit "https://" beginnen und mit ".jpg, .png, .jpeg, .gif" enden.',life:5e3,closable:!1})},re=function(){var e=Object(h.a)(b.a.mark((function e(t,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Sending recipe to backend"),c=[],console.log(window.$id),Y.forEach((function(e){c.push(e.name)})),e.next=6,w()({method:"put",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/mycreated/edit/"+r,data:{name:O,imageurl:a,averagetimeinminutes:C,difficulty:M.name,ingredients:V,preparation:H,categories:JSON.stringify(c),accountId:window.$id}}).catch((function(e){return{error:e}}));case 6:200===e.sent.status?(Q(),ne(t),te(1500).then((function(e){X()}))):(n.current.clear(),n.current.show({severity:"error",summary:"Speichern fehlgeschlagen!",detail:"Bitte versuchen Sie es erneut.",life:3e3,closable:!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(T.Toast,{ref:n,onClick:function(){n.current.clear()},className:"ToastMsg"}),Object(d.jsxs)("div",{className:"createrecipe p-mb-4",children:[Object(d.jsx)("h1",{children:"Rezept bearbeiten"}),Object(d.jsxs)("span",{className:"recipename",children:[Object(d.jsx)("label",{htmlFor:"recipename",children:"Rezeptname: "}),Object(d.jsx)("br",{}),Object(d.jsx)(B.InputText,{style:{width:"40rem"},id:"recipename",value:O,onChange:function(e){return g(e.target.value)},placeholder:"... Bauernsalat"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:"recipeimageurl",children:[Object(d.jsx)("label",{htmlFor:"recipeimageurl",children:"Bild Url: "}),Object(d.jsx)("br",{}),Object(d.jsx)(B.InputText,{style:{width:"35rem"},id:"recipeimageurl",value:k,onChange:function(e){return y(e.target.value)},placeholder:"... http://link-zum-bild"}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"recipeavetime",children:[Object(d.jsxs)("span",{children:["Arbeitszeit: ",C," Min."]}),Object(d.jsx)("br",{}),Object(d.jsx)(R.InputNumber,{value:C,style:{width:"12rem",hight:"12rem"},mode:"decimal",onValueChange:function(e){return L(e.target.value)}}),Object(d.jsx)(z.Slider,{value:C,style:{width:"12rem",hight:"12rem",margin:"auto"},onChange:function(e){return L(e.value)},min:0,max:555})]}),Object(d.jsxs)("div",{className:"recipedifficulty",children:[Object(d.jsx)("h5",{children:"Schwierigkeit"}),Object(d.jsx)(E.SelectButton,{value:M,options:[{name:"einfach"},{name:"normal"},{name:"schwer"}],onChange:function(e){return A(e.value)},optionLabel:"name"})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Zutaten: "}),Object(d.jsx)(F.InputTextarea,{style:{width:"40rem"},value:V,onChange:function(e){return D(e.target.value)},placeholder:"... Eier 3Stk, Milch 300ml, ...",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Arbeitsanweisung: "}),Object(d.jsx)(F.InputTextarea,{style:{width:"40rem"},value:H,onChange:function(e){return J(e.target.value)},placeholder:"... erst Mixen, dann Backen",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"recipecategory",children:[Object(d.jsx)("h5",{children:"Kategorien"}),Object(d.jsx)(I.MultiSelect,{value:Y,options:[{name:"Hauptspeise"},{name:"Gem\xfcse"},{name:"Vegetarisch"},{name:"Auflauf"},{name:"Nudeln"},{name:"Suppe"},{name:"Salat"},{name:"Backen"},{name:"Torte"},{name:"Vegan"},{name:"Dessert"},{name:"Beilage"},{name:"Fisch"},{name:"Obst"},{name:"Eis"},{name:"Kuchen"},{name:"Pizza"},{name:"Fr\xfchst\xfcck"},{name:"Brot"},{name:"Fleisch"},{name:"K\xe4se"},{name:"Warm"},{name:"Kalt"},{name:"Vorspeise"},{name:"S\xfc\xdfspeise"},{name:"Vollkorn"},{name:"Pl\xe4tzchen"},{name:"Schmoren"},{name:"Snack"}],onChange:function(e){return q(e.value)},optionLabel:"name",filter:!0,filterPlaceholder:"z.B: Backen",selectionLimit:"4",placeholder:"W\xe4hle eine Kategorie",display:"chip",showSelectAll:!1}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[Object(d.jsx)(l.Button,{label:"Rezept speichern",icon:"pi pi-check",className:"p-shadow-2 p-button-success p-buttonset p-mr-2",onClick:function(){console.log(O,k,M,V,H,Y),M?""!==H?""!==V?""!==k?null!=k.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|))/)?""!==O?0===Y.length?(console.log("arrrrraaaay:"+Y),ae("Kategorien")):(re("",k),console.log("Kategorien: "+Y)):(ae("Rezeptname"),console.log("Rezeptname: "+O)):ce():""!==O?0===Y.length?(console.log("arrrrraaaay:"+Y),ae("Kategorien")):(re("mit Platzhalter als Bild","http://myminidoxie.com/wp-content/uploads/2012/11/which-came-first-the-wiener-or-the-dachshund.jpg"),console.log("Kategorien: "+Y)):(ae("Rezeptname"),console.log("Rezeptname: "+O)):(ae("Zutaten"),console.log("Zutaten: "+V)):(ae("Arbeitsanweisung"),console.log("Arbeitsanweisung: "+H)):(ae("Schwierigkeit"),console.log("Schwierigkeit: "+M))}}),Object(d.jsx)(l.Button,{label:"Zur\xfccksetzen",icon:"pi pi-replay",className:"p-shadow-2 p-button-warning p-mr-2",onClick:Q}),Object(d.jsx)(l.Button,{label:"Abbrechen",icon:"pi pi-times",className:"p-shadow-2 p-button-danger",onClick:X})]})]})]})},$=n(61),P=function(e){var t=Object(u.f)(),n=Object(a.useRef)(null),r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],p=s[1],j=Object(a.useState)(""),m=Object(i.a)(j,2),f=m[0],O=m[1],g=Object(a.useCallback)((function(){return t.push("/")}),[t]),x=function(){n.current.clear(),n.current.show({severity:"error",summary:"Registrierung fehlgeschlagen",detail:"Bitte eine g\xfcltige Daten angeben",life:3e3,closable:!1})},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://thatcopy.pw/catapi/rest/"}).catch((function(e){return{error:e}}));case 2:return t=e.sent,e.abrupt("return",t.data.webpurl);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===f){e.next=8;break}return e.next=3,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/login",data:{email:o,password:f}}).catch((function(e){return{error:e}}));case 3:t=e.sent,console.log(t.data),200===t.status?(window.$email=o.toLowerCase(),window.$id=t.data.accountId,n.current.clear(),n.current.show({severity:"success",summary:"Login erfolgreich",detail:"Sie werden nun weitergeleitet",life:2e3,closable:!1}),v(2e3).then((function(e){g()}))):(n.current.clear(),n.current.show({severity:"error",summary:"Login fehlgeschlagen",detail:"Bitte Eingaben \xfcberpr\xfcfen",life:3e3,closable:!1})),e.next=9;break;case 8:x();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.toLocaleLowerCase(),!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||""===f){e.next=11;break}return e.next=4,k();case 4:return a=e.sent,e.next=7,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/register",data:{email:t,password:f,pictureurl:a}}).catch((function(e){return{error:e}}));case 7:200===(c=e.sent).status?(console.log(c.data),window.$email=c.data.email,window.$id=c.data.id,n.current.clear(),n.current.show({severity:"success",summary:"Registrierung erfolgreich",detail:"Sie k\xf6nnen sich nun anmelden",life:2e3,closable:!1})):(n.current.clear(),n.current.show({severity:"error",summary:"Registrierung fehlgeschlagen",detail:"Email Adresse wird bereits verwendet",life:3e3,closable:!1})),e.next=12;break;case 11:x();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(T.Toast,{ref:n,onClick:function(){n.current.clear()},className:"ToastMsg"}),Object(d.jsxs)("div",{className:"p-d-block p-mx-auto p-mt-6 loginform",children:[Object(d.jsxs)("div",{className:"p-inputgroup",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-user"})}),Object(d.jsx)(B.InputText,{placeholder:"Email Adresse",id:"email",name:"Email",onChange:function(e){return p(e.target.value)},type:"text"})]}),Object(d.jsxs)("div",{className:"p-inputgroup p-mt-1",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-key"})}),Object(d.jsx)($.Password,{toggleMask:!0,placeholder:"Password ",id:"password",name:"Password",onChange:function(e){return O(e.target.value)},type:"text",feedback:!1})]}),Object(d.jsxs)("div",{className:"p-mt-2 buttons",children:[Object(d.jsx)(l.Button,{onClick:y,label:"Anmelden",className:"p-button-primary p-mr-2 p-shadow-1"}),Object(d.jsx)(l.Button,{onClick:N,label:"Registrieren",className:"p-button-primary p-shadow-1"})]})]})]})},M=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(404),l=Object(i.a)(s,2),o=l[0],u=l[1],p=Object(a.useState)([]),j=Object(i.a)(p,2),m=j[0],f=j[1];Object(a.useLayoutEffect)((function(){O()}),[]),Object(a.useLayoutEffect)((function(){if(n){var e=[];n.forEach((function(t){var n=t.categories.match(/[A-Za-z0-9_\xe4\xc4\xf6\xd6\xfc\xdc\xdf]+/g);e.push(g(t,n))})),f(e)}}),[n]);var O=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/mycreated",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 2:t=e.sent,r(t.data),200===t.status&&u(200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e,t){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(S,{liked:"editable",className:"p-mb-2 p-shadow-2",id:e.id,editable:!0,img:e.imageurl,categories:t,style:{width:"25em"},name:e.name,time:e.averagetimeinminutes+" Minuten"},e.id)},e.id)};return 200===o?Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{className:"cards p-mt-4 p-mb-4",children:m})}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Rezepte werden geladen."})})},A=function(e){var t=Object(u.f)(),n=Object(a.useRef)(null),r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],p=s[1],j=Object(a.useState)(""),m=Object(i.a)(j,2),f=m[0],O=m[1],g=Object(a.useState)(""),x=Object(i.a)(g,2),v=x[0],k=x[1];Object(a.useEffect)((function(){N()}));var y=Object(a.useCallback)((function(){return t.push("/login")}),[t]);null==window.$email&&y();var N=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/"+window.$id}).catch((function(e){return{error:e}}));case 2:200===(t=e.sent).status&&(p(t.data.email),k(t.data.pictureurl));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===f){e.next=7;break}return e.next=3,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/accountmgr/newpw",data:{accountId:window.$id,password:f}}).catch((function(e){return{error:e}}));case 3:200===e.sent.status&&(n.current.clear(),n.current.show({severity:"success",summary:"Passwort erfolgreich ge\xe4ndert",life:2e3,closable:!1})),e.next=8;break;case 7:n.current.clear(),n.current.show({severity:"error",summary:"Passwort darf nicht leer sein",detail:"Bitte Eingaben \xfcberpr\xfcfen",life:3e3,closable:!1});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(T.Toast,{ref:n,onClick:function(){n.current.clear()}}),Object(d.jsx)("div",{className:"p-grid p-fluid p-mt-4",children:Object(d.jsx)("div",{className:"p-mx-auto",children:Object(d.jsxs)("div",{className:"p-col-12 profileInputGroup",children:[Object(d.jsx)("img",{className:"profilePic p-shadow-3 p-mb-3",src:v,alt:"Profile"}),Object(d.jsxs)("div",{className:"p-inputgroup",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-user"})}),Object(d.jsx)(B.InputText,{disabled:!0,placeholder:"Email Adresse",value:o,onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)("div",{className:"p-inputgroup p-mt-1",children:[Object(d.jsx)("span",{className:"p-inputgroup-addon",children:Object(d.jsx)("i",{className:"pi pi-key"})}),Object(d.jsx)(B.InputText,{placeholder:"neues Passwort",value:f,onChange:function(e){return O(e.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)(l.Button,{onClick:S,label:"Speichern",className:"p-button-primary p-mt-1 pwSaveBtn p-shadow-1"})})]})})}),Object(d.jsx)("div",{className:"p-mt-4 p-mx-auto MyRecipes",children:Object(d.jsx)(M,{})})]})},K=function(e){var t=Object(u.f)(),n=Object(a.useRef)(null),r=Object(a.useCallback)((function(){return t.push("/login")}),[t]);null==window.$email&&r();var s=function(e){return new Promise((function(t){return setTimeout(t,e)}))},o=Object(a.useCallback)((function(){return t.push("/")}),[t]),p=Object(a.useState)(""),j=Object(i.a)(p,2),m=j[0],f=j[1],O=Object(a.useState)(""),g=Object(i.a)(O,2),x=g[0],v=g[1],k=Object(a.useState)("30"),y=Object(i.a)(k,2),N=y[0],S=y[1],C=Object(a.useState)(),L=Object(i.a)(C,2),$=L[0],P=L[1],M=Object(a.useState)(""),A=Object(i.a)(M,2),K=A[0],Z=A[1],V=Object(a.useState)(""),D=Object(i.a)(V,2),G=D[0],U=D[1],H=Object(a.useState)([]),J=Object(i.a)(H,2),W=J[0],_=J[1],Y=function(){f(""),v(""),S("30"),P(),Z(""),U(""),_([])},q=function(e){n.current.clear(),n.current.show({severity:"success",summary:"Rezept wurde gespeichert!",detail:e,life:1500,closable:!1})},Q=function(e){n.current.clear(),n.current.show({severity:"error",summary:"Es fehlt "+e+"!",detail:"Bitte alle Felder f\xfcllen.",life:3e3,closable:!1})},X=function(){n.current.clear(),n.current.show({severity:"error",summary:"Bild Url ist ung\xfcltig!",detail:'Die Url sollte mit "https://" beginnen und mit ".jpg, .png, .jpeg, .gif" enden.',life:5e3,closable:!1})},ee=function(){var e=Object(h.a)(b.a.mark((function e(t,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Sending recipe to backend"),c=[],console.log(window.$id),W.forEach((function(e){c.push(e.name)})),e.next=6,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/create",data:{name:m,imageurl:a,averagetimeinminutes:N,difficulty:$.name,ingredients:K,preparation:G,categories:JSON.stringify(c),creatorId:window.$id}}).catch((function(e){return{error:e}}));case 6:200===e.sent.status?(Y(),q(t),s(1500).then((function(e){o()}))):(n.current.clear(),n.current.show({severity:"error",summary:"Speichern fehlgeschlagen!",detail:"Bitte versuchen Sie es erneut.",life:3e3,closable:!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(T.Toast,{ref:n,onClick:function(){n.current.clear()},className:"ToastMsg"}),Object(d.jsxs)("div",{className:"createrecipe p-mb-4 p-mx-auto",children:[Object(d.jsx)("h1",{children:"Rezept erstellen"}),Object(d.jsxs)("span",{className:"",children:[Object(d.jsx)("h5",{htmlFor:"recipename",children:"Rezeptname: "}),Object(d.jsx)(B.InputText,{className:"createRecipeInputText",id:"recipename",value:m,onChange:function(e){return f(e.target.value)},placeholder:"Bauernsalat"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{className:"",children:[Object(d.jsx)("h5",{htmlFor:"recipeimageurl",children:"Bild Url: "}),Object(d.jsx)(B.InputText,{className:"createRecipeInputText",id:"recipeimageurl",value:x,onChange:function(e){return v(e.target.value)},placeholder:"http://link-zum-bild"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("h5",{children:["Arbeitszeit: ",N," Min."]}),Object(d.jsx)(R.InputNumber,{className:"recipeavgtimecontent",value:N,mode:"decimal",onValueChange:function(e){return S(e.target.value)}}),Object(d.jsx)(z.Slider,{className:"recipeavgtimecontent p-mx-auto",value:N,onChange:function(e){return S(e.value)},min:0,max:555})]}),Object(d.jsxs)("div",{className:"recipedifficulty",children:[Object(d.jsx)("h5",{children:"Schwierigkeit"}),Object(d.jsx)(E.SelectButton,{value:$,options:[{name:"einfach"},{name:"normal"},{name:"schwer"}],onChange:function(e){return P(e.value)},optionLabel:"name"})]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("h5",{children:"Zutaten: "}),Object(d.jsx)(F.InputTextarea,{className:"createRecipeInputText",value:K,onChange:function(e){return Z(e.target.value)},placeholder:"Eier 3Stk, Milch 300ml, ...",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("h5",{children:"Arbeitsanweisung: "}),Object(d.jsx)(F.InputTextarea,{className:"createRecipeInputText",value:G,onChange:function(e){return U(e.target.value)},placeholder:"erst Mixen, dann Backen, ...",rows:5,cols:30,autoResize:!0})]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("h5",{children:"Kategorien"}),Object(d.jsx)(I.MultiSelect,{value:W,options:[{name:"Hauptspeise"},{name:"Gem\xfcse"},{name:"Vegetarisch"},{name:"Auflauf"},{name:"Nudeln"},{name:"Suppe"},{name:"Salat"},{name:"Backen"},{name:"Torte"},{name:"Vegan"},{name:"Dessert"},{name:"Beilage"},{name:"Fisch"},{name:"Obst"},{name:"Eis"},{name:"Kuchen"},{name:"Pizza"},{name:"Fr\xfchst\xfcck"},{name:"Brot"},{name:"Fleisch"},{name:"K\xe4se"},{name:"Warm"},{name:"Kalt"},{name:"Vorspeise"},{name:"S\xfc\xdfspeise"},{name:"Vollkorn"},{name:"Pl\xe4tzchen"},{name:"Schmoren"},{name:"Snack"}],onChange:function(e){return _(e.value)},optionLabel:"name",filter:!0,filterPlaceholder:"z.B: Backen",selectionLimit:"4",placeholder:"W\xe4hle eine Kategorie",display:"chip",showSelectAll:!1}),Object(d.jsx)("br",{})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[Object(d.jsx)(l.Button,{label:"Rezept einreichen",icon:"pi pi-check",className:"p-shadow-2 p-button-success p-buttonset p-mr-2 p-mb-2",onClick:function(){console.log(m,x,$,K,G,W),$?""!==G?""!==K?""!==x?null!=x.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|))/)?""!==m?0===W.length?(console.log("arrrrraaaay:"+W),Q("Kategorien")):(ee("",x),console.log("Kategorien: "+W)):(Q("Rezeptname"),console.log("Rezeptname: "+m)):X():""!==m?0===W.length?(console.log("arrrrraaaay:"+W),Q("Kategorien")):(ee("mit Platzhalter als Bild","http://myminidoxie.com/wp-content/uploads/2012/11/which-came-first-the-wiener-or-the-dachshund.jpg"),console.log("Kategorien: "+W)):(Q("Rezeptname"),console.log("Rezeptname: "+m)):(Q("Zutaten"),console.log("Zutaten: "+K)):(Q("Arbeitsanweisung"),console.log("Arbeitsanweisung: "+G)):(Q("Schwierigkeit"),console.log("Schwierigkeit: "+$))}}),Object(d.jsx)(l.Button,{label:"Zur\xfccksetzen",icon:"pi pi-replay",className:"p-shadow-2 p-button-danger p-mb-2",onClick:Y})]})]})]})},Z=function(){var e=Object(u.f)(),t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],s=(n[1],Object(a.useState)(null)),l=Object(i.a)(s,2),o=l[0],p=l[1],j=Object(a.useState)(404),m=Object(i.a)(j,2),f=m[0],O=m[1],g=Object(a.useState)([]),x=Object(i.a)(g,2),v=x[0],k=x[1],y=Object(a.useCallback)((function(){return e.push("/login")}),[e]);null==window.$email&&y(),Object(a.useLayoutEffect)((function(){console.clear(),N()}),[]),Object(a.useLayoutEffect)((function(){if(o){var e=[];o.forEach((function(t){var n=t.categories.match(/[A-Za-z0-9_\xe4\xc4\xf6\xd6\xfc\xdc\xdf]+/g),a=!1;null!=o&&o.length>0&&o.forEach((function(e){t.id===e.id&&(a=!0)})),console.log(a),e.push(C(t,a,n))})),k(e)}else console.log("No products")}),[r,o]);var N=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching favorite recipes with accountId: "+window.$id),e.next=3,w()({method:"post",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/myfavorites",data:{accountId:window.$id}}).catch((function(e){return{error:e}}));case 3:200===(t=e.sent).status?(p(t.data),O(200)):(console.log("faild to load"),p([]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e,t,n){return Object(d.jsx)(S,{className:"p-mb-2 p-shadow-2",id:e.id,liked:t,img:e.imageurl,categories:n,style:{width:"25em"},name:e.name,time:e.averagetimeinminutes+" Minuten"},e.id)};return 200===f?Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{className:"cards p-mt-4 p-mb-4",children:v})}):Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"Rezepte werden geladen."})})},V=function(e){Object(a.useEffect)((function(){m()}));var t=e.recipeId.match.params.recipeId,n=Object(a.useState)(""),r=Object(i.a)(n,2),s=r[0],l=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),p=u[0],j=u[1],m=function(){var e=Object(h.a)(b.a.mark((function e(){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://ratatouilleexpress.retch.duckdns.org/api/recipes/recipe/"+t}).catch((function(e){return{error:e}}));case 2:200===(n=e.sent).status&&(l(n.data),a=new Date(f(n.data.createdAt)),c=a.getDate()+"."+(a.getMonth()+1)+"."+a.getFullYear(),j(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return new Date(e).getTime()};return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("div",{className:"recipeMeta",children:[Object(d.jsx)("h1",{children:s.name}),Object(d.jsxs)("div",{className:"recipeMetaInfo",children:[Object(d.jsx)("img",{alt:"Product",className:"recipeIMG p-mb-3 p-shadow-3",src:s.imageurl}),Object(d.jsxs)("div",{children:[Object(d.jsx)(y.Chip,{label:s.averagetimeinminutes+" Min.",icon:"pi pi-clock",className:"p-mr-2 p-mb-2 custom-chip p-shadow-1"}),Object(d.jsx)(y.Chip,{label:s.difficulty,icon:" pi pi-compass",className:"p-mr-2 p-mb-2 custom-chip p-shadow-1"}),Object(d.jsx)(y.Chip,{label:p,icon:" pi pi-calendar",className:"p-mr-2 p-mb-2 custom-chip p-shadow-1"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Zutaten"}),Object(d.jsx)("span",{children:s.ingredients})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Zubereitung"}),Object(d.jsx)("span",{children:s.preparation})]})]})})},D=function(e){return Object(d.jsx)("div",{className:"p-mt-6 appFooter",children:Object(d.jsx)("p",{children:"Licensed under GPL v3"})})},G=n(62);n.n(G).a.ripple=!0;var U=function(){var e=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(k,{})]})},t=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(C,{})]})},n=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(P,{})]})},a=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(A,{})]})},r=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(K,{})]})},s=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(Z,{})]})};return Object(d.jsx)(o.a,{hashType:"noslash",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/menu",children:Object(d.jsx)(t,{})}),Object(d.jsx)(u.a,{path:"/recipe/edit/:recipeId",render:function(e){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(L,{recipeId:e})]})}}),Object(d.jsx)(u.a,{path:"/recipe/:recipeId",render:function(e){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(V,{recipeId:e})]})}}),Object(d.jsx)(u.a,{path:"/login",children:Object(d.jsx)(n,{})}),Object(d.jsx)(u.a,{path:"/profile",children:Object(d.jsx)(a,{})}),Object(d.jsx)(u.a,{path:"/create",children:Object(d.jsx)(r,{})}),Object(d.jsx)(u.a,{path:"/favorites",children:Object(d.jsx)(s,{})}),Object(d.jsx)(u.a,{path:"/",children:Object(d.jsx)(e,{})})]}),Object(d.jsx)(D,{})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),H()},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.fe843a58.chunk.js.map