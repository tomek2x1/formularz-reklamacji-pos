(this["webpackJsonpformularz-reklamacji-pos"]=this["webpackJsonpformularz-reklamacji-pos"]||[]).push([[0],{11:function(e,a,r){},12:function(e,a,r){},14:function(e,a,r){"use strict";r.r(a);var t=r(1),n=r.n(t),o=r(6),s=r.n(o),i=(r(11),r(4)),c=r(2),l=r(3),u=(r(12),r(0)),m=function(e){var a=e.name,r=e.value,t=e.labelName,n=e.handleInput,o=e.type,s=e.minValue,i=e.validation,c=e.maxDate,l=e.errorMsg;return Object(u.jsxs)("label",{htmlFor:a,className:i?"return-form__label return-form__require":"return-form__label",children:[Object(u.jsxs)("div",{className:"return-form__name",children:[t,": ",Object(u.jsx)("span",{className:"return-form__star",children:"*"})]}),Object(u.jsx)("input",{type:o,id:a,value:r,name:a,onChange:function(e){n(e)},className:"require return-form__field",min:""!=s?s:null,max:c||null}),i?Object(u.jsx)("p",{className:"return-form__require-info",children:l}):null]})},d=function(e){var a=e.name,r=e.value,t=e.handleInput,n=e.labelName,o=e.optionsValue,s=e.validation,i=e.errorMsg,c=o.map((function(e,a){return Object(u.jsx)("option",{value:e,children:e},a)}));return console.log(a,r),Object(u.jsxs)("label",{htmlFor:a,className:s?"return-form__label return-form__require":"return-form__label",children:[Object(u.jsxs)("div",{className:"return-form__name",children:[n,": ",Object(u.jsx)("span",{className:"return-form__star",children:"*"})]}),Object(u.jsxs)("select",{id:a,value:r,name:a,onChange:function(e){t(e)},className:"require return-form__field",children:[Object(u.jsx)("option",{value:"",defaultValue:!0,readOnly:!0,children:"Wybierz"}),c]}),s?Object(u.jsx)("p",{className:"return-form__require-info",children:i}):null]})},b=function(e){var a=e.name,r=e.value,t=e.labelName,n=e.handleInput,o=e.type,s=e.validation;return Object(u.jsxs)("label",{htmlFor:a,className:s?"return-form__label return-form__require":"return-form__label",children:[Object(u.jsxs)("div",{className:"return-form__name",children:[t,": ",Object(u.jsx)("span",{className:"return-form__star",children:"*"})]}),Object(u.jsx)("textarea",{type:o,id:a,value:r,name:a,onChange:function(e){n(e)},className:"require return-form__field"}),s?Object(u.jsx)("p",{className:"return-form__require-info",children:"Wybierz swoje dane"}):null]})},j=function(e){var a=e.name,r=e.value,t=e.handleCheckbox,n=e.validation;return Object(u.jsxs)("div",{className:"return-form__agreement-wrapper",children:[Object(u.jsxs)("label",{htmlFor:"userAgreement",className:n?"return-form__label return-form__agreement return-form__require":"return-form__label return-form__agreement",children:[Object(u.jsx)("input",{type:"checkbox",id:"userAgreement",name:a,className:"require",value:r,onChange:function(e){t(e)}}),Object(u.jsx)("div",{className:"return-form__agreement-text",children:Object(u.jsxs)("div",{children:["Wyra\u017cam zgod\u0119 na przetwarzanie moich danych osobowych przez P.W. MULTIMAX Damian Chwiejczak, ul. Peowiak\xf3w 9, 22-400 Zamo\u015b\u0107, przetwarzanych do cel\xf3w zwi\u0105zanych z reklamacj\u0105 lub zwrotem towaru."," ",Object(u.jsx)("span",{className:"return-form__star",children:"*"})]})})]}),n?Object(u.jsx)("p",{className:"return-form__require-info",children:"Zgoda jest wymagana"}):null]})},p=function(){return Object(u.jsxs)("div",{className:"return-form__footer",children:[Object(u.jsx)("div",{children:"Klauzula informacyjna RODO:"}),Object(u.jsxs)("div",{children:["Administratorem Pa\u0144stwa danych osobowych jest P.W. MULTIMAX Damian Chwiejczak, ul. Peowiak\xf3w 9, 22-400 Zamo\u015b\u0107. Dane osobowe b\u0119d\u0105 przetwarzane do cel\xf3w zwi\u0105zanych z reklamacj\u0105 lub zwrotem towaru."," ",Object(u.jsx)("a",{className:"return-form__footer-rodo",href:"https://www.emultimax.pl/instrukcje/Polityka_cookies_emultimax_pl.pdf",target:"_blank",children:"Zobacz szczeg\xf3\u0142y"})]})]})},y=function(){var e=Object(t.useState)({typeOfReturn:"",buyDate:"",howFinish:"",getDate:"",isProtocol:"",docNumber:"",name:"",email:"",phone:"",getBack:"",street:"",zipCode:"",city:"",producer:"",typeProduct:"",quantity:1,serialNumber:"",requiresDisassembly:"",description:"",pos:"",employee:"",agreement:!1}),a=Object(l.a)(e,2),r=a[0],n=a[1],o=Object(t.useState)({typeOfReturn:!1,buyDate:!1,howFinish:!1,getDate:!1,isProtocol:!1,docNumber:!1,name:!1,email:!1,phone:!1,getBack:!1,street:!1,zipCode:!1,city:!1,producer:!1,typeProduct:!1,quantity:!1,serialNumber:!1,requiresDisassembly:!1,description:!1,pos:!1,employee:!1,agreement:!1}),s=Object(l.a)(o,2),y=s[0],z=s[1],O=Object(t.useState)(!1),h=Object(l.a)(O,2),f=h[0],g=h[1],w=Object(t.useState)(!0),k=Object(l.a)(w,2),x=k[0],N=k[1],v=Object(t.useState)(!1),_=Object(l.a)(v,2),P=_[0],D=_[1],R=Object(t.useState)(!1),C=Object(l.a)(R,2),I=C[0],q=C[1],M=Object(t.useState)(!1),S=Object(l.a)(M,2),F=S[0],B=S[1],T=Object(t.useState)(""),V=Object(l.a)(T,2),E=V[0],W=V[1];Object(t.useEffect)((function(){g((new Date).toISOString().split("T")[0],[])}),[]);var A=["Tak","Nie"],G=function(e){n(Object(c.a)(Object(c.a)({},r),{},Object(i.a)({},e.target.name,e.target.value))),z(Object(c.a)(Object(c.a)({},y),{},Object(i.a)({},e.target.name,!1)))},K=function(e){N(!1),D(!0);var a={subject:"Reklamacja stacjonarna",description:"\n      <h4>Reklamacja stacjonarna:</h4>\n      <b>Rodzaj zg\u0142oszenia:</b> ".concat(e.typeOfReturn," <br/>\n      ").concat("Gwarancja producenta"===e.typeOfReturn?"<b>Data zakupu:</b> ".concat(e.buyDate," <br/>"):"","\n      ").concat("R\u0119kojmia"===e.typeOfReturn?"<b>Data zakupu:</b> ".concat(e.buyDate," <br/>\n          <b>Oczekiwany spos\xf3b zako\u0144czenia zg\u0142oszenia:</b> ").concat(e.howFinish," <br/>"):"","\n      ").concat("Dosta\u0142em towar uszkodzony (zg\u0142. max. do 7 dni od otrzymania towaru)"===e.typeOfReturn?"<b>Data otrzymania towaru:</b> ".concat(e.getDate," <br/>\n            <b>Czy zosta\u0142 sporz\u0105dzony protok\xf3\u0142 szkody przez kuriera?:</b> ").concat(e.isProtocol," <br/>"):"","\n      <br/>\n      <b>Numer zam\xf3wienia lub numer faktury:</b> ").concat(e.docNumber," <br/>\n      <b>Imi\u0119 i nazwisko lub nazwa firmy:</b> ").concat(e.name," <br/>\n      <b>Adres e-mail:</b> ").concat(e.email," <br/>\n      <b>Telefon:</b> ").concat(e.phone," <br/>\n      <br/>\n      <b>Odbi\xf3r towaru przez Klienta:</b> ").concat(e.getBack," <br/>\n      ").concat("kurierem na adres"===e.getBack?"<b>Ulica:</b> ".concat(e.street," <br/>\n        <b>Kod pocztowy:</b> ").concat(e.zipCode," <br/>\n        <b>Miejscowo\u015b\u0107:</b> ").concat(e.city," <br/>"):null,"\n      <br/>\n      <b>Producent:</b> ").concat(e.producer," <br/>\n      <b>Nazwa i model towaru:</b> ").concat(e.typeProduct," <br/>\n      <b>Ilo\u015b\u0107 sztuk:</b> ").concat(e.quantity," <br/>\n      <b>Numer fabryczny/ seryjny:</b> ").concat(e.serialNumber," <br/>\n      <b>Czy produkt wymaga demonta\u017cu:</b> ").concat(e.requiresDisassembly," <br/>\n      <b>Opis wady:</b> ").concat(e.description," <br/>\n      <b>Salon, kt\xf3ry przyj\u0105\u0142 reklamacj\u0119:</b> ").concat(e.pos," <br/>\n      <b>Pracownik przyjmuj\u0105cy zg\u0142oszenie:</b> ").concat(e.employee," <br/>\n      "),email:e.email,phone:e.phone,priority:1,status:2};console.log("body",a),fetch("https://newaccount1632792215290.freshdesk.com/api/v2/tickets",{method:"POST",headers:{Authorization:"VHE3djNOUEFwUWFSNXhscG80Zg==","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){e.id?(D(!1),q(!0),W(e.id)):(D(!1),B(!0))})).catch((function(e){D(!1),B(!0),console.log(e)}))};return Object(u.jsxs)("div",{className:"return",children:[x?Object(u.jsxs)("div",{id:"return-form",className:"return-form",children:[Object(u.jsx)("h2",{className:"return-form__title",children:"Formularz reklamacji (salony stacjonarne)"}),Object(u.jsx)(d,{value:r.typeOfReturn,name:"typeOfReturn",labelName:"Rodzaj zg\u0142oszenia",optionsValue:["Gwarancja producenta","R\u0119kojmia","Dosta\u0142em towar uszkodzony (zg\u0142. max. do 7 dni od otrzymania towaru)"],handleInput:G,validation:y.typeOfReturn,errorMsg:"Podaj rodzaj zg\u0142oszenia"}),"Gwarancja producenta"===r.typeOfReturn||"R\u0119kojmia"===r.typeOfReturn?Object(u.jsx)(m,{value:r.buyDate,name:"buyDate",labelName:"Data zakupu",handleInput:G,type:"date",validation:y.buyDate,maxDate:f,errorMsg:"Podaj dat\u0119 zakupu"}):null,"R\u0119kojmia"===r.typeOfReturn?Object(u.jsx)(d,{value:r.howFinish,name:"howFinish",labelName:"Oczekiwany spos\xf3b zako\u0144czenia zg\u0142oszenia",optionsValue:["Naprawa towaru","Wymiana towaru na nowy","Obni\u017cenie ceny towaru","Odst\u0105pienie od umowy (istotna wada towaru)"],handleInput:G,validation:y.howFinish,errorMsg:"Podaj spos\xf3b zako\u0144czenia zg\u0142oszenia"}):null,"Dosta\u0142em towar uszkodzony (zg\u0142. max. do 7 dni od otrzymania towaru)"===r.typeOfReturn?Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{value:r.getDate,name:"getDate",labelName:"Data otrzymania towaru",handleInput:G,type:"date",validation:y.getDate,maxDate:f,errorMsg:"Podaj dat\u0119 otrzymania towaru"}),Object(u.jsx)(d,{value:r.isProtocol,name:"isProtocol",labelName:"Czy zosta\u0142 sporz\u0105dzony protok\xf3\u0142 szkody przez kuriera?",optionsValue:A,handleInput:G,validation:y.isProtocol,errorMsg:"Czy zosta\u0142 sporz\u0105dzony protok\xf3\u0142"})]}):null,Object(u.jsx)(m,{value:r.docNumber,name:"docNumber",labelName:"Numer zam\xf3wienia lub numer faktury",handleInput:G,type:"text",validation:y.docNumber,errorMsg:"Podaj numer zam\xf3wienia lub numer faktury"}),Object(u.jsx)(m,{value:r.name,name:"name",labelName:"Imi\u0119 i nazwisko lub nazwa firmy",handleInput:G,type:"text",validation:y.name,errorMsg:"Podaj imi\u0119 i nazwisko lub nazwa firmy"}),Object(u.jsx)(m,{value:r.email,name:"email",labelName:"Adres e-mail",handleInput:G,type:"text",validation:y.email,errorMsg:"Podaj adres e-mail"}),Object(u.jsx)(m,{value:r.phone,name:"phone",labelName:"Telefon",handleInput:G,type:"number",validation:y.phone,errorMsg:"Podaj telefon konkatowy"}),Object(u.jsx)(d,{value:r.getBack,name:"getBack",labelName:"Odbi\xf3r towaru przez Klienta",optionsValue:["w Salonie/ Punkcie sprzeda\u017cy (w tym, w kt\xf3rym sk\u0142adane jest zg\u0142oszenie)","kurierem na adres"],handleInput:G,validation:y.getBack,errorMsg:"Podaj spos\xf3b odbioru towaru"}),"kurierem na adres"===r.getBack?Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{value:r.street,name:"street",labelName:"Ulica i numer domu",handleInput:G,type:"text",validation:y.street,errorMsg:"Podaj ulic\u0119 i numer domu"}),Object(u.jsx)(m,{value:r.zipCode,name:"zipCode",labelName:"Kod pocztowy",handleInput:G,type:"number",validation:y.zipCode,errorMsg:"Podaj kod pocztowy"}),Object(u.jsx)(m,{value:r.city,name:"city",labelName:"Miejscowo\u015b\u0107",handleInput:G,type:"text",validation:y.city,errorMsg:"Podaj miejscowo\u015b\u0107"})]}):null,Object(u.jsx)(d,{producer:!0,value:r.producer,name:"producer",labelName:"Producent",optionsValue:["Warmtec","Dimplex","Thermoval","Blaupunkt","Sonniger","Climative","EBERLE","EBECO","EMKO","ESCO","Danfoss","Devi","DigiTime","Nexans","Rotenso","VACO","Inny"],handleInput:G,validation:y.producer,errorMsg:"Podaj nazw\u0119 producenta"}),Object(u.jsx)(m,{value:r.typeProduct,name:"typeProduct",labelName:"Nazwa i model towaru",handleInput:G,type:"text",validation:y.typeProduct,errorMsg:"Podaj nazw\u0119 i model towaru"}),Object(u.jsx)(m,{value:r.quantity,name:"quantity",labelName:"Ilo\u015b\u0107 sztuk",handleInput:G,type:"number",minValue:1,validation:y.quantity,errorMsg:"Podaj ilo\u015b\u0107"}),Object(u.jsx)(m,{value:r.serialNumber,name:"serialNumber",labelName:"Numer fabryczny/ seryjny",handleInput:G,type:"text",validation:y.serialNumber,errorMsg:"Podaj numer fabryczny / seryjny"}),Object(u.jsx)(d,{value:r.requiresDisassembly,name:"requiresDisassembly",labelName:"Czy produkt wymaga demonta\u017cu",optionsValue:A,handleInput:G,validation:y.requiresDisassembly,errorMsg:"Czy produkt wymaga demonta\u017cu"}),Object(u.jsx)(b,{value:r.description,name:"description",labelName:"Opis wady",handleInput:G,validation:y.description,errorMsg:"Podaj opis wady"}),Object(u.jsx)(d,{value:r.pos,name:"pos",labelName:"Salon, kt\xf3ry przyj\u0105\u0142 reklamacj\u0119",optionsValue:["Salon sprzeda\u017cy Warszawa","Salon sprzeda\u017cy Krak\xf3w","Salon sprzeda\u017cy Rzesz\xf3w","Salon sprzeda\u017cy Zamo\u015b\u0107","Punkt sprzeda\u017cy Gda\u0144sk","Punkt sprzeda\u017cy Pozna\u0144"],handleInput:G,validation:y.pos,errorMsg:"Podaj salon, kt\xf3ry przyj\u0105\u0142 reklamacj\u0119"}),Object(u.jsx)(m,{value:r.employee,name:"employee",labelName:"Pracownik przyjmuj\u0105cy zg\u0142oszenie",handleInput:G,validation:y.employee,errorMsg:"Podaj dane pracownika, kt\xf3ry przyj\u0105\u0142 reklamacj\u0119"}),Object(u.jsx)(j,{value:r.agreement,name:"agreement",handleCheckbox:function(e){n(Object(c.a)(Object(c.a)({},r),{},Object(i.a)({},e.target.name,e.target.checked))),z(Object(c.a)(Object(c.a)({},y),{},Object(i.a)({},e.target.name,!1)))},validation:y.agreement}),Object(u.jsx)("div",{className:"return-form__btn-wrapper",children:Object(u.jsx)("button",{className:"return-form__btn",onClick:function(e){!function(e){var a={typeOfReturn:!1,buyDate:!1,howFinish:!1,getDate:!1,isProtocol:!1,docNumber:!1,name:!1,email:!1,phone:!1,getBack:!1,street:!1,zipCode:!1,city:!1,producer:!1,typeProduct:!1,quantity:!1,serialNumber:!1,requiresDisassembly:!1,description:!1,pos:!1,employee:!1,agreement:!1};""===r.typeOfReturn&&(a.typeOfReturn=!0),"Gwarancja producenta"!==r.typeOfReturn&&"R\u0119kojmia"!==r.typeOfReturn||""===r.buyDate&&(a.buyDate=!0),"R\u0119kojmia"===r.typeOfReturn&&""===r.howFinish&&(a.howFinish=!0),"Dosta\u0142em towar uszkodzony (zg\u0142. max. do 7 dni od otrzymania towaru)"===r.typeOfReturn&&(""===r.getDate&&(a.getDate=!0),""===r.isProtocol&&(a.isProtocol=!0)),""===r.docNumber&&(a.docNumber=!0),""===r.name&&(a.name=!0),""===r.email&&(a.email=!0),/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(r.email)||(a.email=!0),""===r.phone&&(a.phone=!0),/^[0-9\+]{8,13}$/.test(r.phone)||(a.phone=!0),""===r.getBack&&(a.getBack=!0),"kurierem na adres"===r.getBack&&(""===r.street&&(a.street=!0),""===r.zipCode&&(a.zipCode=!0),""===r.city&&(a.city=!0)),""===r.producer&&(a.producer=!0),""===r.typeProduct&&(a.typeProduct=!0),""===r.quantity&&(a.quantity=!0),""===r.serialNumber&&(a.serialNumber=!0),""===r.requiresDisassembly&&(a.requiresDisassembly=!0),""===r.description&&(a.description=!0),""===r.pos&&(a.pos=!0),""===r.employee&&(a.employee=!0),!1===r.agreement&&(a.agreement=!0),z(Object(c.a)(Object(c.a)({},y),a)),a.typeOfReturn||a.docNumber||a.name||a.email||a.phone||a.getBack||a.producer||a.typeProduct||a.quantity||a.serialNumber||a.requiresDisassembly||a.description||a.pos||a.employee||a.agreement||("Gwarancja producenta"===r.typeOfReturn?a.buyDate||"kurierem na adres"===r.getBack&&(a.street||a.zipCode||a.city)||K(r):("R\u0119kojmia"===r.typeOfReturn||"Dosta\u0142em towar uszkodzony (zg\u0142. max. do 7 dni od otrzymania towaru)"===r.typeOfReturn)&&(a.buyDate||a.howFinish||(console.log("tutaj",r.getBack),"kurierem na adres"===r.getBack&&(a.street||a.zipCode||a.city)||K(r))))}()},children:"Wy\u015blij formularz"})}),Object(u.jsx)(p,{})]}):null,P?Object(u.jsx)("div",{id:"return-spinner",className:"return-spinner",children:Object(u.jsx)("div",{className:"return-spinner__container",children:Object(u.jsxs)("div",{className:"return-spinner__wrapper",children:[Object(u.jsx)("div",{className:"return-spinner-circle1 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle2 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle3 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle4 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle5 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle6 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle7 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle8 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle9 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle10 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle11 return-spinner-circle"}),Object(u.jsx)("div",{className:"return-spinner-circle12 return-spinner-circle"})]})})}):null,I?Object(u.jsx)("div",{id:"return-message",className:"return-message",children:Object(u.jsxs)("div",{className:"return-message__container",children:[Object(u.jsx)("h2",{className:"return-message__success",children:"Formularz zosta\u0142 wys\u0142any poprawnie"}),Object(u.jsxs)("h3",{className:"return-message__id",children:["Numer Twojego zg\u0142oszenia:",Object(u.jsx)("strong",{children:E})]}),Object(u.jsx)("p",{className:"return-message__remember",children:"** Pami\u0119taj, aby spakowa\u0107 wszystkie elementy zestawu oraz oznaczy\u0107 paczk\u0119 numerem zg\u0142oszenia."})]})}):null,F?Object(u.jsx)("div",{id:"return-error",className:"return-message return-error",children:Object(u.jsx)("div",{className:"return-message__container",children:Object(u.jsx)("h2",{className:"return-message__error",children:"Podczas wysy\u0142ania formularza wyst\u0105pi\u0142 b\u0142\u0105d. Spr\xf3buj p\xf3\u017aniej."})})}):null]})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(a){var r=a.getCLS,t=a.getFID,n=a.getFCP,o=a.getLCP,s=a.getTTFB;r(e),t(e),n(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),z()}},[[14,1,2]]]);
//# sourceMappingURL=main.d642ca37.chunk.js.map