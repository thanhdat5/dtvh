"use strict";(self.webpackChunktng_dtvh=self.webpackChunktng_dtvh||[]).push([[724,723],{5438:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(4427),s=(n.p,n(184)),i=function(e){var t=e.size,n=void 0===t?"sm":t;return(0,s.jsx)("div",{className:"tng-logo ".concat(n),children:(0,s.jsx)("img",{src:a,alt:"TNG"})})}},6706:function(e,t,n){n.d(t,{Sl:function(){return s},Wx:function(){return i},h0:function(){return c},w4:function(){return r},yI:function(){return a},yU:function(){return o}});var a="user-profile",s="quiz-info",i="access-token",r="refresh-token",c="quiz-summary-info",o="https://vgmsite.com/soundtracks/who-wants-to-be-a-millionaire/vyejuzvp/Chi%20Vuol%20Essere%20Milionario%20%2827%29.mp3"},8785:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(4165),s=n(1413),i=n(5861),r=n(885),c=n(7945),o=n.n(c),l=n(2791),u=n(9085),d=n(6941),h=n(7443),f=n(5438),p=n(6706),v=n(1313),m=n(184),g=function(e){var t=e.answer,n=e.index,a=e.selected,s=(e.lg,e.onSelected),i=e.statusQuestion,r=e.helpQuestions,c=e.answerSuccessId,o=a?i:"",l=!r.includes(t.id),u=c===t.id?"correct":"";return l?(0,m.jsx)("div",{className:"tng-answer ".concat(n%2===1?"right":""," ").concat(o," ").concat(u),onClick:s,children:(0,m.jsx)("div",{className:"tng-answer-body",children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("b",{children:[["A","B","C","D"][n],":"]}),(0,m.jsx)("span",{children:t.content})]})})}):(0,m.jsx)(m.Fragment,{})},x=n(9975),j=n(1925),C=function(e){var t=e.onDismiss,n=e.onBetConfirm,a=(e.yourBet,e.disableBet,e.point,(0,v.iP)()),s=(0,r.Z)(a,2),i=s[0],c=s[1],u=(0,l.useState)(1),d=(0,r.Z)(u,2),h=d[0],f=d[1],p=(0,l.useState)(0),g=(0,r.Z)(p,2),C=g[0],y=g[1];return(0,l.useEffect)((function(){setTimeout((function(){o().init()}),100)}),[]),(0,l.useEffect)((function(){if(f(1),i<1440||c<1024){var e=i/1440,t=c/1024;f(e<t?e:t)}i<1199&&f(.8),i<767&&f(.6)}),[i]),(0,m.jsxs)("div",{className:"tng-bet","data-aos":"fade-up","data-aos-delay":"200",children:[(0,m.jsx)("button",{className:"tng-bet-close",onClick:t,children:(0,m.jsx)("img",{src:j.Z,alt:""})}),(0,m.jsxs)("div",{className:"tng-bet-inner",style:{transform:"scale(".concat(h,")")},children:[(0,m.jsx)("h3",{children:"B\u1ea1n c\xf3 mu\u1ed1n c\u01b0\u1ee3c \u0111i\u1ec3m?"}),(0,m.jsxs)("div",{className:"tng-bet-options",children:[(0,m.jsx)(x.Z,{text:"20%",className:"".concat(20===C?"active":"outline"," tng-btn-bet"),onClick:function(){return y(20)}}),(0,m.jsx)(x.Z,{text:"50%",className:"".concat(50===C?"active":"outline"," tng-btn-bet"),onClick:function(){return y(50)}}),(0,m.jsx)(x.Z,{text:"100%",className:"".concat(100===C?"active":"outline"," tng-btn-bet"),onClick:function(){return y(100)}})]}),(0,m.jsx)(x.Z,{disabled:!C,text:"Ch\u1ecdn",className:"rectangle",onClick:function(){return n(C)}})]})]})},y=n(3413),S=function(e){var t,n,s=(0,l.useState)(!1),c=(0,r.Z)(s,2),h=c[0],f=c[1],g=(0,v.iP)(),x=(0,r.Z)(g,2),j=x[0],C=(x[1],(0,l.useState)(1)),S=(0,r.Z)(C,2),Z=(S[0],S[1]);(0,l.useEffect)((function(){Z(1),j<767&&Z(.6)}),[j]),(0,l.useEffect)((function(){setTimeout((function(){o().init()}),100)}),[]);var b=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=null!==(n=localStorage.getItem(p.Wx))&&void 0!==n?n:"",(0,d.Np)(s),t.prev=2,t.next=5,d.kv.retryCheck();case 5:200===(i=t.sent).status&&(console.log(""),i.data.data<2?e.handleRetryGame():(f(!1),u.Am.error("B\u1ea1n \u0111\xe3 h\u1ebft l\u01b0\u1ee3t thi"))),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),w=localStorage.getItem("user-profile"),N=JSON.parse(w),k=function(){var e=localStorage.getItem(p.h0);return JSON.parse(e)},A=function(){var e=k();return 1===(null===e||void 0===e?void 0:e.trialCount)?{total:(null===e||void 0===e?void 0:e.correctCount1)+"/15",isFinish:(null===e||void 0===e?void 0:e.correctCount1)>=12}:2===(null===e||void 0===e?void 0:e.trialCount)?{total:(null===e||void 0===e?void 0:e.correctCount2)+"/15",isFinish:(null===e||void 0===e?void 0:e.correctCount2)>=12}:{total:"0/15",isFinish:!1}},I=A().isFinish,q=I?"success":"failed",B=!h&&1===(null===(t=k())||void 0===t?void 0:t.trialCount),H=!h&&2===(null===(n=k())||void 0===n?void 0:n.trialCount),T=!I&&B;return(0,m.jsxs)("div",{className:"tng-complete ".concat(q," ").concat(T?"canretry":""),"data-aos":"fade-up","data-aos-delay":"200",children:[I&&(0,m.jsxs)("div",{className:"pyro",children:[(0,m.jsx)("div",{className:"before"}),(0,m.jsx)("div",{className:"after"})]}),(0,m.jsx)("div",{className:"tng-complete-wrap",children:(0,m.jsxs)("div",{className:"tng-complete-inner ".concat(q),children:[(0,m.jsxs)("div",{className:"tng-complete-body",children:[!I&&(0,m.jsxs)("h2",{children:["B\u1ea0N C\u1ea6N N\u1ea0P TH\xcaM ",(0,m.jsx)("br",{}),"N\u0102NG L\u01af\u1ee2NG"]}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("label",{children:"Li\xean qu\xe2n:"})," ",(0,m.jsx)("span",{children:(0,y.renderTitleTeamTNG)(null===N||void 0===N?void 0:N.union)})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("label",{children:"Chi\u1ebfn binh:"})," ",(0,m.jsx)("span",{children:null===N||void 0===N?void 0:N.userName})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("label",{children:"S\u1ed1 c\xe2u:"})," ",(0,m.jsx)("span",{children:A().total})]}),(0,m.jsxs)("li",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,m.jsx)("label",{children:"T\u1ed5ng \u0111i\u1ec3m:"}),"\xa0",(0,m.jsx)("b",{style:{color:"red",fontSize:"24px",fontFamily:"sans-serif"},children:e.point})]})]})]}),B&&(0,m.jsx)("div",{className:I?"action-1":"action",onClick:b,children:(0,m.jsx)("span",{children:"Ti\u1ebfp t\u1ee5c chi\u1ebfn \u0111\u1ea5u!"})}),H&&(0,m.jsx)("div",{className:I?"action-1":"action",children:(0,m.jsx)("span",{children:"B\u1ea1n \u0111\xe3 h\u1ebft l\u01b0\u1ee3t thi \u0111\u1ea5u!"})})]})})]})},Z=function(e){var t=e.onSkip,n=e.on5050,a=(e.onBet,e.yourBet,e.disableBet,e.disableNextQuestion),s=e.disable5050,i=(0,v.iP)(),c=(0,r.Z)(i,2),o=c[0],u=(c[1],(0,l.useState)(!1)),d=(0,r.Z)(u,2),h=d[0],f=d[1];return(0,l.useEffect)((function(){f(!(o<767))}),[o]),(0,m.jsxs)("div",{className:"tng-help-box",children:[(0,m.jsxs)("button",{type:"button",disabled:a,onClick:t,children:[(0,m.jsxs)("svg",{width:"71",height:"72",viewBox:"0 0 71 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("circle",{cx:"35.4345",cy:"36.0322",r:"35.0488",fill:"white"}),(0,m.jsx)("path",{d:"M18.2184 50.4278L32.3474 38.681V31.863L18.2184 20.1161C16.4933 18.7197 13.9468 19.8697 13.9468 22.1698V48.3742C13.9468 50.6743 16.4933 51.8243 18.2184 50.4278ZM39.2476 50.4278L55.0196 37.3667C56.2518 36.2988 56.2518 34.4095 55.0196 33.3416L39.2476 20.2804C37.5226 18.884 34.8939 20.034 34.8939 22.2519V48.5385C34.9761 50.6743 37.5226 51.8243 39.2476 50.4278Z",fill:"currentColor"})]}),(0,m.jsxs)("span",{children:["B\u1ecf qua",h?(0,m.jsx)("br",{}):" ","c\xe2u h\u1ecfi"]})]}),(0,m.jsxs)("button",{type:"button",disabled:s,onClick:n,style:{marginBottom:0},children:[(0,m.jsxs)("svg",{width:"71",height:"71",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("circle",{cx:"35.4905",cy:"35.1857",r:"35.1048",fill:"white"}),(0,m.jsx)("path",{d:"M19.6672 30.2764C19.6672 33.2325 17.2629 35.5974 14.3069 35.5974H11.1537C9.30122 35.5974 7.68523 34.4544 7.09401 32.6807C6.89694 32.0107 7.25167 31.3012 7.8823 31.1041C8.55234 30.8677 9.26181 31.2224 9.49829 31.8924C9.73478 32.6019 10.4048 33.0749 11.1537 33.0749H14.3069C15.8834 33.0749 17.1447 31.8136 17.1447 30.2764C17.1447 28.7393 15.8834 27.478 14.3069 27.478H8.31586C7.92171 27.478 7.56698 27.3204 7.3305 27.005C7.09401 26.7291 6.97576 26.335 7.05459 25.9803L8.31586 19.0039C8.4341 18.4127 8.94649 17.9791 9.57712 17.9791H17.1447C17.8147 17.9791 18.406 18.5309 18.406 19.2404C18.406 19.9104 17.8147 20.5017 17.1447 20.5017H10.6019L9.81361 24.9555H14.3069C17.2629 24.9555 19.6672 27.3204 19.6672 30.2764Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M25.9735 17.9791C22.4657 17.9791 19.6672 20.7776 19.6672 24.2854V29.2911C19.6672 32.7596 22.4657 35.5974 25.9735 35.5974C29.442 35.5974 32.2799 32.7596 32.2799 29.2911V24.246C32.2799 20.7776 29.442 17.9791 25.9735 17.9791ZM29.7573 29.2911C29.7573 31.38 28.0231 33.0749 25.9735 33.0749C23.8846 33.0749 22.1898 31.38 22.1898 29.2911V24.246C22.1898 22.1965 23.8846 20.4622 25.9735 20.4622C28.0231 20.4622 29.7573 22.1965 29.7573 24.246V29.2911Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M28.9939 45.9634C28.7969 45.9634 28.5998 45.924 28.4027 45.8057C27.7721 45.4904 27.575 44.7021 27.9297 44.1109L38.0198 26.4532C38.3352 25.8226 39.1235 25.6255 39.7147 25.9803C40.3453 26.2956 40.5424 27.0839 40.1876 27.6751L30.0975 45.3328C29.861 45.7663 29.4669 45.9634 28.9939 45.9634Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M51.3377 47.0714C51.3377 50.0274 48.9335 52.3923 45.9774 52.3923H42.8242C40.9717 52.3923 39.3557 51.2493 38.7645 49.4756C38.5675 48.8056 38.9222 48.0961 39.5528 47.8991C40.2229 47.6626 40.9323 48.0173 41.1688 48.6873C41.4053 49.3968 42.0753 49.8698 42.8242 49.8698H45.9774C47.554 49.8698 48.8152 48.6085 48.8152 47.0714C48.8152 45.5342 47.554 44.2729 45.9774 44.2729H39.9864C39.5922 44.2729 39.2375 44.1153 39.001 43.7999C38.7645 43.524 38.6463 43.1299 38.7251 42.7752L39.9864 35.7988C40.1046 35.2076 40.617 34.774 41.2476 34.774H48.8152C49.4853 34.774 50.0765 35.3258 50.0765 36.0353C50.0765 36.7053 49.4853 37.2966 48.8152 37.2966H42.2724L41.4841 41.7504H45.9774C48.9335 41.7504 51.3377 44.1153 51.3377 47.0714Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M57.6441 34.774C54.1362 34.774 51.3377 37.5725 51.3377 41.0803V46.086C51.3377 49.5545 54.1362 52.3923 57.6441 52.3923C61.1125 52.3923 63.9504 49.5545 63.9504 46.086V41.0409C63.9504 37.5725 61.1125 34.774 57.6441 34.774ZM61.4278 46.086C61.4278 48.175 59.6936 49.8698 57.6441 49.8698C55.5551 49.8698 53.8603 48.175 53.8603 46.086V41.0409C53.8603 38.9914 55.5551 37.2571 57.6441 37.2571C59.6936 37.2571 61.4278 38.9914 61.4278 41.0409V46.086Z",fill:"currentColor"})]}),(0,m.jsxs)("span",{children:["B\u1ecf 2 \u0111\xe1p",h?(0,m.jsx)("br",{}):" ","\xe1n sai"]})]})]})},b=function(e){var t=e.question,n=(0,l.useState)(""),a=(0,r.Z)(n,2),s=a[0],i=a[1];return(0,l.useEffect)((function(){i(t.content.length>80?"lg":"")}),[t]),(0,m.jsx)("div",{className:"tng-question ".concat(s),children:(0,m.jsx)("div",{className:"tng-question-body",children:t.content})})},w=n(2426),N=n.n(w),k=n(2702),A=function(e){var t=e.onCompleted,n=e.setCurrentTime,a=e.styled,s=(e.isCompleted,localStorage.getItem(p.Sl)),i=(0,l.useState)(null),c=(0,r.Z)(i,2),o=c[0],u=c[1];return(0,l.useEffect)((function(){if(s){var e=JSON.parse(s);if(null!==e&&void 0!==e&&e.end){var t=N().utc(null===e||void 0===e?void 0:e.end).toDate(),n=N()(t).local().format();u(new Date(n))}}}),[s]),(0,l.useEffect)((function(){return function(){u(null)}}),[]),(0,m.jsx)("div",{className:"tng-timer ".concat(a),children:o?(0,m.jsx)(k.ZP,{onComplete:t,date:o,renderer:function(e){var t="00:".concat(e.minutes<10?"0".concat(e.minutes):e.minutes,":").concat(e.seconds<10?"0".concat(e.seconds):e.seconds);return n(t),(0,m.jsxs)("span",{children:[e.minutes<10?"0".concat(e.minutes):e.minutes,":",e.seconds<10?"0".concat(e.seconds):e.seconds,"\u2019"]})}}):(0,m.jsx)(m.Fragment,{})})};var I=n.p+"static/media/audio.c2d695852f933363bb3e64f2eadaae19.svg";var q=n.p+"static/media/mute-audio.8c55379765d3f8aea3dc2c4a7ee46d69.svg",B=n(8931),H=function(e,t){var n=(0,l.useMemo)((function(){return new Audio(e)}),[]),a=(0,l.useState)(!1),s=(0,r.Z)(a,2),i=s[0],c=s[1];return(0,l.useEffect)((function(){n.currentTime=0,i&&t&&(n.loop=!0),i||(n.loop=!1),i?n.play():n.pause()}),[i]),(0,l.useEffect)((function(){return n.addEventListener("ended",(function(){return c(!1)})),function(){n.removeEventListener("ended",(function(){return c(!1)}))}}),[]),{isPlaying:i,playAudio:function(){return c(!0)},pauseAudio:function(){return c(!1)}}},T=function(e){return(0,l.useEffect)((function(){setTimeout((function(){o().init()}),100)}),[]),(0,m.jsx)("div",{className:"tng-complete-g","data-aos":"fade-up","data-aos-delay":"200",children:(0,m.jsxs)("div",{className:"tng-complete-g-wrap",children:[(0,m.jsx)("div",{className:"tng-complete-inner",children:(0,m.jsxs)("div",{className:"tng-complete-body",children:[(0,m.jsx)("h2",{children:"LU\u1eacT THI \u0110\u1ea4U"}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["T\u1ed5ng th\u1eddi gian thi \u0111\u1ea5u: ",(0,m.jsx)("span",{children:"10 ph\xfat"})]}),(0,m.jsxs)("li",{children:["M\u1ed7i chi\u1ebfn binh c\u1ea7n v\u01b0\u1ee3t qua t\u1ed1i thi\u1ec3u"," ",(0,m.jsx)("span",{children:"12/15 th\u1eed th\xe1ch"})]}),(0,m.jsx)("li",{children:"V\u01b0\u1ee3t qua m\u1ed7i th\u1eed th\xe1ch \u0111\u01b0\u1ee3c c\u1ed9ng 10 \u0111i\u1ec3m, kh\xf4ng v\u01b0\u1ee3t qua tr\u1eeb 10 \u0111i\u1ec3m"}),(0,m.jsxs)("li",{children:["M\u1ed7i chi\u1ebfn binh c\xf3 ",(0,m.jsx)("span",{children:"01 quy\u1ec1n tr\u1ee3 gi\xfap:"})," L\u01b0\u1ee3c b\u1ecf 2 \u0111\xe1p \xe1n sai ho\u1eb7c b\u1ecf qua th\u1eed th\xe1ch"]}),(0,m.jsxs)("li",{children:["\u0110\u1eebng b\u1ecf l\u1ee1 t\xednh n\u0103ng c\u01b0\u1ee3c \u0111i\u1ec3m v\u1edbi 01 trong c\xe1c m\u1ee9c l\u1ef1a ch\u1ecdn c\u01b0\u1ee3c ",(0,m.jsx)("span",{children:"20% - 50% - 100%"})," s\u1ed1 \u0111i\u1ec3m \u0111ang c\xf3"]}),(0,m.jsx)("li",{children:"M\u1ed7i chi\u1ebfn binh \u0111\u01b0\u1ee3c thi \u0111\u1ea5u 02 l\u1ea7n. H\u1ec7 th\u1ed1ng ghi nh\u1eadn k\u1ebft qu\u1ea3 cao h\u01a1n"}),(0,m.jsxs)("li",{children:["L\u01b0u \xfd: Th\u1eddi gian thi \u0111\u1ea5u ",(0,m.jsx)("span",{children:"8:00 - 19:00 h\xe0ng ng\xe0y"})]})]})]})}),(0,m.jsx)(x.Z,{text:"B\u1eaeT \u0110\u1ea6U",className:"tng-help-box-btn",onClick:e.handleStartGame})]})})},P=function(){(0,l.useEffect)((function(){setTimeout((function(){o().init()}),100)}),[]);var e=(new Date).getHours()>10?(new Date).getHours():"0"+(new Date).getHours(),t=(new Date).getMinutes()>10?(new Date).getMinutes():"0"+(new Date).getMinutes();return(0,m.jsx)("div",{className:"tng-complete-b","data-aos":"fade-up","data-aos-delay":"200",children:(0,m.jsx)("div",{className:"tng-complete-wrap",children:(0,m.jsx)("div",{className:"tng-complete-inner",children:(0,m.jsx)("div",{className:"tng-complete-body",children:(0,m.jsxs)("div",{className:"box-content",children:[(0,m.jsxs)("h2",{children:["B\xe2y gi\u1edd l\xe0 ",e,":",t]}),(0,m.jsxs)("p",{children:["Th\u1eddi gian b\u1eaft \u0111\u1ea7u cu\u1ed9c thi t\u1eeb ",(0,m.jsx)("span",{children:"08:00 - 17:00"})]}),(0,m.jsx)("p",{children:"Vui l\xf2ng quay l\u1ea1i sau"})]})})})})})},E=n.p+"static/media/tng-audio.577d9cf8b397ca303dae.mp3",L=n.p+"static/media/success-question-audio.d6a32c06b05108228f9b.mp3",J=n.p+"static/media/success-answer.aa1d53f73c672cf7ede7.mp3",M=n.p+"static/media/failed-reply.0edc72a9d1bf1939a51b.mp3",O=n.p+"static/media/waiting-audio.d644f4353cccfbe28049.mp3",D=function(){var e=(0,l.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],x=(0,l.useState)(!1),j=(0,r.Z)(x,2),y=j[0],w=j[1],k=(0,v.iP)(),D=(0,r.Z)(k,2),Q=D[0],V=D[1],z=(0,l.useState)(1),F=(0,r.Z)(z,2),G=F[0],U=F[1],W=(0,l.useState)(!1),R=(0,r.Z)(W,2),_=R[0],K=R[1],X=(0,l.useState)(0),Y=(0,r.Z)(X,2),$=Y[0],ee=Y[1],te=(0,l.useState)(!1),ne=(0,r.Z)(te,2),ae=ne[0],se=ne[1],ie=(0,l.useState)({id:"",content:"",answers:[]}),re=(0,r.Z)(ie,2),ce=re[0],oe=re[1],le=(0,l.useState)(null),ue=(0,r.Z)(le,2),de=ue[0],he=ue[1],fe=H(E,!1),pe=H(L,!1),ve=H(J,!1),me=H(M,!1),ge=H(p.yU,!1),xe=H(O,!1),je=(0,l.useState)(!1),Ce=(0,r.Z)(je,2),ye=Ce[0],Se=Ce[1],Ze=H(O,!0),be=(0,l.useState)(!1),we=(0,r.Z)(be,2),Ne=we[0],ke=we[1],Ae=(0,l.useState)(0),Ie=(0,r.Z)(Ae,2),qe=Ie[0],Be=Ie[1],He=(0,l.useState)("start"),Te=(0,r.Z)(He,2),Pe=Te[0],Ee=Te[1],Le=(0,l.useState)(!1),Je=(0,r.Z)(Le,2),Me=Je[0],Oe=Je[1],De=(0,l.useState)(!1),Qe=(0,r.Z)(De,2),Ve=Qe[0],ze=(Qe[1],(0,l.useState)([])),Fe=(0,r.Z)(ze,2),Ge=Fe[0],Ue=Fe[1],We=localStorage.getItem("user-profile"),Re=(0,l.useState)(""),_e=(0,r.Z)(Re,2),Ke=_e[0],Xe=_e[1],Ye=(0,l.useState)("00:15:00"),$e=(0,r.Z)(Ye,2),et=$e[0],tt=$e[1],nt=(0,l.useState)(""),at=(0,r.Z)(nt,2),st=at[0],it=at[1],rt=(0,l.useState)(!0),ct=(0,r.Z)(rt,2),ot=ct[0],lt=ct[1],ut=(0,l.useState)(!1),dt=(0,r.Z)(ut,2),ht=dt[0],ft=dt[1],pt=function(){var e=localStorage.getItem(p.Sl);return JSON.parse(e)},vt=function(){var e=localStorage.getItem(p.h0);return JSON.parse(e)};(0,l.useEffect)((function(){if(We){var e=JSON.parse(We);e&&null!==e&&void 0!==e&&e.union&&Xe("style-"+e.union)}}),[We]);var mt=function(){var e;w(!0);var t=null!==(e=localStorage.getItem(p.Wx))&&void 0!==e?e:"";(0,d.Np)(t)},gt=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mt(),e.prev=1,e.next=4,d.kv.startQuiz();case 4:200===(t=e.sent).status&&(localStorage.setItem(p.Sl,JSON.stringify(t.data.data)),n=vt(),localStorage.setItem(p.h0,JSON.stringify((0,s.Z)((0,s.Z)({},n),{},{trialCount:1}))),c(t.data.data.questions),oe(t.data.data.questions[0]),w(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),xt=function(e){var t=e.filter((function(e){return null===e.userChooseAnswerId}));return t.length?t[0]:e[0]},jt=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe.pauseAudio(),ye&&pe.playAudio(),mt(),e.prev=3,e.next=6,d.kv.startQuiz();case 6:200===(t=e.sent).status&&(localStorage.setItem(p.Sl,JSON.stringify(t.data.data)),n=vt(),localStorage.setItem(p.h0,JSON.stringify((0,s.Z)((0,s.Z)({},n),{},{trialCount:2}))),c(t.data.data.questions),oe(t.data.data.questions[0]),se(!1),Ee("start"),ee(0),it(""),Be(0),ke(!1),Oe(!1),Ue([]),w(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),w(!1);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),Ct=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae){e.next=26;break}return mt(),alert("H\u1ebft gi\u1edd"),e.prev=3,e.next=6,d.kv.finish("00:00:00");case 6:if(200!==e.sent.status){e.next=20;break}return e.prev=8,e.next=11,d.kv.getUserInfo();case 11:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&(localStorage.setItem(p.Sl,JSON.stringify(t.data.data.quizInfo)),localStorage.setItem(p.h0,JSON.stringify(t.data.data.quizSummaryInfo))),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0);case 18:w(!1),se(!0);case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(3),se(!0),w(!1);case 26:case"end":return e.stop()}}),e,null,[[3,22],[8,15]])})));return function(){return e.apply(this,arguments)}}(),yt=function(){var e,t=null===(e=pt())||void 0===e?void 0:e.end,n=N().utc(t).toDate(),a=N()(n).local().format(),s=new Date;new Date(a).getTime()>s.getTime()?function(){var e=pt(),t=e.questions;if(t.filter((function(e){return null!==e.userChooseAnswerId})).length!==t.length){ke(!e.pointBetAvailable),Be(e.point),Oe(!(null===e||void 0===e||!e.nextQuestion)),null!==e&&void 0!==e&&e.helperAvailable?Ue(null!==e&&void 0!==e&&e.arrayHelpQuestion?null===e||void 0===e?void 0:e.arrayHelpQuestion:[]):Ue([]),c(t);var n=xt(t);oe(n)}else se(!0)}():Ct()};(0,l.useEffect)((function(){setTimeout((function(){o().init()}),1e3);var e=localStorage.getItem(p.Sl),t=localStorage.getItem(p.h0),n=new Date;n.getHours()>=8&&n.getHours();if(lt(!1),"null"!==t){var a=vt(),s="null"===e;switch(null===a||void 0===a?void 0:a.trialCount){case 0:ft(!0);break;case 1:s?(se(!0),Be(a.point1)):yt();break;case 2:s?(se(!0),Be(a.point2)):yt();break;default:se(!0)}}}),[]),(0,l.useEffect)((function(){var e=1;if(Q<1440||V<1024){var t=Q/1440,n=V/1024;e=t<n?t:n}U(e)}),[Q]);var St=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,i,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mt(),e.prev=1,e.next=4,d.kv.quizNextQuestion(ce.id);case 4:200===(t=e.sent).status&&(localStorage.setItem(p.Sl,JSON.stringify(t.data.data)),c(t.data.data.questions),n=xt(t.data.data.questions),oe(n),Oe(!0),i=pt(),r=(0,s.Z)((0,s.Z)({},i),{},{nextQuestion:!0}),localStorage.setItem(p.Sl,JSON.stringify(r)),w(!1)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Zt=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mt(),e.prev=1,e.next=4,d.kv.getHelp(ce.id);case 4:200===(t=e.sent).status&&(ye&&ge.playAudio(),Ue(t.data.data),n=pt(),i=(0,s.Z)((0,s.Z)({},n),{},{helperAvailable:!0,arrayHelpQuestion:t.data.data}),localStorage.setItem(p.Sl,JSON.stringify(i)),w(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),w(!1),u.Am.error("B\u1ea1n \u0111\xe3 s\u1eed d\u1ee5ng quy\u1ec1n n\xe0y tr\u01b0\u1edbc \u0111\xf3");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),bt=(0,l.useState)(!1),wt=(0,r.Z)(bt,2),Nt=wt[0],kt=wt[1];(0,l.useEffect)((function(){kt(-1!==ce.answers.findIndex((function(e){return e.content.length>60})))}),[ce]);var At=n.filter((function(e){return null!==e.userChooseAnswerId})).length,It=At>=15?At:At+1,qt=!y&&"correct"===Pe||!y&&"incorrect"===Pe,Bt=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,o,l,h,f,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ze.pauseAudio(),fe.pauseAudio(),ye&&pe.playAudio(),he(t),Ee("selected"),r={questionId:ce.id,answerId:t.id,pointBet:$},mt(),e.prev=7,e.next=10,d.kv.checkAnswer(r);case 10:200===(o=e.sent).status&&(l=n.map((function(e){return e.id===ce.id?(0,s.Z)((0,s.Z)({},e),{},{userChooseAnswerId:t.id}):e})),h=pt(),f=(0,s.Z)((0,s.Z)({},h),{},{questions:l}),o.data.data.currentPoint&&(f=(0,s.Z)((0,s.Z)({},f),{},{point:o.data.data.currentPoint.result}),Be(o.data.data.currentPoint.result)),$>0&&(ee(0),ke(!0),f=(0,s.Z)((0,s.Z)({},f),{},{pointBetAvailable:!1})),v=l.filter((function(e){return null!==e.userChooseAnswerId})).length,localStorage.setItem(p.Sl,JSON.stringify(f)),Ee(o.data.data.isCorrectAnswer?"correct":"incorrect"),it(o.data.data.correctAnswerId),pe.pauseAudio(),o.data.data.isCorrectAnswer?ye&&ve.playAudio():ye&&me.playAudio(),v===n.length&&ye&&(ve.pauseAudio(),me.pauseAudio(),!fe.isPlaying&&fe.playAudio()),setTimeout((0,i.Z)((0,a.Z)().mark((function e(){var t,s,i,r,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(l),t=xt(l),v!==n.length&&(Ne||$>0||0===o.data.data.currentPoint.result?(oe(t),Ee("start"),it(""),ye&&Ze.playAudio()):K(!0)),ve.pauseAudio(),me.pauseAudio(),v!==n.length){e.next=10;break}return e.next=8,d.kv.finish(et);case 8:200===(s=e.sent).status&&(localStorage.setItem(p.Sl,JSON.stringify(s.data.data.quizInfo)),u=null===s||void 0===s||null===(i=s.data)||void 0===i||null===(r=i.data)||void 0===r?void 0:r.quizSummaryInfo,localStorage.setItem(p.h0,JSON.stringify(u)),Ee("start"),w(!1),se(!0));case 10:case"end":return e.stop()}}),e)}))),3500),w(!1)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),w(!1),u.Am.error("L\u1ed7i h\u1ec7 th\u1ed1ng");case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B.NL,{when:Ve,message:function(){return"B\u1ea1n c\xf3 mu\u1ed1n tho\xe1t kh\u1ecfi tr\xf2 ch\u01a1i"}}),(0,m.jsx)(h.Z,{loading:y}),(0,m.jsx)("div",{className:"".concat(qt&&!_?"wrapper-loading-h":"")}),(0,m.jsxs)("div",{className:"tng-game ".concat(Ke),children:[(0,m.jsx)("button",{type:"button",className:"tng-audio",onClick:function(){ye&&(fe.isPlaying&&fe.pauseAudio(),pe.isPlaying&&pe.pauseAudio(),ve.isPlaying&&ve.pauseAudio(),me.isPlaying&&me.pauseAudio(),ge.isPlaying&&ge.pauseAudio(),xe.isPlaying&&xe.pauseAudio(),Ze.isPlaying&&Ze.pauseAudio()),ye||!Ze.isPlaying&&Ze.playAudio(),Se(!ye)},children:(0,m.jsx)("img",{src:ye?I:q,alt:""})}),(0,m.jsx)("div",{className:"tng-timer-wrap",children:(0,m.jsx)(A,{styled:Ke,onCompleted:Ct,setCurrentTime:tt,isCompleted:ae})}),(0,m.jsx)("div",{className:"tng-game-logo",children:(0,m.jsx)(f.Z,{})}),(0,m.jsxs)("div",{className:"tng-game-score",children:[(0,m.jsx)("b",{children:qe}),(0,m.jsx)("span",{children:"\u0111i\u1ec3m"})]}),(0,m.jsx)("div",{className:"tng-help-box-wrap",style:{transform:"scale(".concat(G,")")},children:(0,m.jsx)(Z,{onSkip:St,on5050:Zt,onBet:function(){return K(!0)},yourBet:$,disableBet:Ne||qe<10,disableNextQuestion:Me||Ge.length>0,disable5050:Ge.length>0||Me})}),(0,m.jsxs)("div",{className:"tng-game-body ".concat(Nt?"lg":""),children:[(0,m.jsxs)("h4",{"data-aos":"fade-up",children:["C\xe2u h\u1ecfi ",(0,m.jsx)("b",{children:It}),"/",n.length]}),(0,m.jsx)(b,{question:ce}),(0,m.jsx)("div",{className:"tng-game-answers",children:ce.answers.map((function(e,t){return(0,m.jsx)(g,{selected:e.id===(null===de||void 0===de?void 0:de.id),statusQuestion:Pe,answer:e,index:t,lg:Nt,onSelected:function(){return Bt(e)},helpQuestions:Ge,answerSuccessId:st},t)}))})]}),_?(0,m.jsx)(C,{point:qe,yourBet:$,onBetConfirm:function(e){ee(e),K(!1);var t=xt(n);oe(t),Ee("start"),it(""),ye&&Ze.playAudio()},onDismiss:function(){K(!1);var e=xt(n);oe(e),Ee("start"),it(""),ye&&Ze.playAudio()},disableBet:!0}):(0,m.jsx)(m.Fragment,{}),ae?(0,m.jsx)(S,{point:qe,handleRetryGame:jt}):(0,m.jsx)(m.Fragment,{}),ot&&!ae?(0,m.jsx)(P,{}):(0,m.jsx)(m.Fragment,{}),ht&&(0,m.jsx)(T,{handleStartGame:function(){ft(!1),gt()}})]})]})}}}]);
//# sourceMappingURL=724.cfb02dcc.chunk.js.map