import{u as Re,a as ne,b as Me,r,c as ae,d as Ge,e as je,j as o,L as we,O as Ve}from"./index-05e94697.js";import{u as $,B as fe}from"./useQuery-8955a22a.js";import{g as ke,a as Fe}from"./getArmy-3bee7851.js";import{q as C,u as Le,i as Xe,a as Ke,b as Pe,t as De}from"./queryClient-fbbb463f.js";const Ue="_headers_1kva0_1",We="_main_1kva0_6",Je="_divs_1kva0_12",Ze="_footers_1kva0_16",ee={headers:Ue,main:We,divs:Je,footers:Ze},_e="_coinBlock_ryftz_1",$e="_descrLvl_ryftz_9",et="_coinBar_ryftz_16",tt="_coinBlockMoney_ryftz_22",st="_imgCoin_ryftz_29",nt="_bgValue_ryftz_36",at="_descr_ryftz_9",ot="_btnDonatMoney_ryftz_51",m={coinBlock:_e,descrLvl:$e,coinBar:et,coinBlockMoney:tt,imgCoin:st,bgValue:nt,descr:at,btnDonatMoney:ot},it="/assets/coinMoney-bd93148e.png",ct="/assets/diamondMoney-344191ca.png",he="data:image/png;base64,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";function rt(){const t=Re(),e=ne(ke),{tg_id:s,userName:n}=Me(),a=$({queryFn:()=>Le(s,n),queryKey:["info",s],enabled:!!s,retry:1},C);r.useEffect(()=>{t(ae.addCoinStore(a.data))},[a.data]);const c=$({queryFn:()=>Xe(s),queryKey:["army",s],enabled:!!s,retry:0},C);r.useEffect(()=>{t(Ge.addArmyStore(c.data))},[c.data]);const d=new URLSearchParams(je().search).get("id"),[f,y]=r.useState("");return $({queryKey:["friend"],queryFn:()=>Ke(s,f),enabled:!!s&&!!f},C),r.useEffect(()=>{d&&y(d)},[d]),o.jsxs("div",{className:m.coinBlock,children:[o.jsxs("p",{className:m.descrLvl,children:["LVL ",e==null?void 0:e.lvl]}),o.jsxs("div",{className:m.coinBar,children:[o.jsxs("div",{className:m.coinBlockMoney,children:[o.jsx("img",{className:m.imgCoin,src:it,alt:""}),o.jsx("div",{className:m.bgValue,children:o.jsx("p",{className:m.descr,children:e==null?void 0:e.money.toLocaleString("ru-RU")})}),o.jsx(fe,{className:m.btnDonatMoney,children:o.jsx("img",{src:he,alt:""})})]}),o.jsxs("div",{className:m.coinBlockMoney,children:[o.jsx("img",{className:m.imgCoin,src:ct,alt:""}),o.jsx("div",{className:m.bgValue,children:o.jsx("p",{className:m.descr,children:"0"})}),o.jsx(fe,{className:m.btnDonatMoney,children:o.jsx("img",{src:he,alt:""})})]})]})]})}const lt="_list_138vi_1",At="_item_138vi_11",dt="_link_138vi_21",gt="_img_138vi_26",ut="_descr_138vi_31",mt="_active_138vi_39",M={list:lt,item:At,link:dt,img:gt,descr:ut,active:mt},ft="/assets/guilds-a9a43f6c.png",ht="/assets/friends-205bb587.png",pt="/assets/attack-1b400151.png",yt="/assets/leaders-4fe79ef5.png",Bt="/assets/airdrop-f8a7acac.png",xt=[{text:"Guilds",path:"/guilds",img:ft},{text:"Friends",path:"/friends",img:ht},{text:"Attack!",path:"/",img:pt},{text:"Leaders",path:"/leaders",img:yt},{text:"Airdrop",path:"/airdrop",img:Bt}];function bt(){const t=je();return o.jsx("ul",{className:M.list,children:xt.map(e=>o.jsx("li",{className:t.pathname===e.path?`${M.item} ${M.active}`:M.item,children:o.jsx(we,{to:e.path,children:o.jsxs("div",{className:M.link,children:[o.jsx("img",{className:M.img,src:e.img,alt:e.text}),o.jsx("p",{className:M.descr,children:e.text})]})})},e.path))})}const Rt="_canvas_brbgf_1",Mt={canvas:Rt},jt=r.forwardRef((t,e)=>o.jsx("canvas",{className:Mt.canvas,ref:e})),te=t=>{const[e,s]=r.useState(null);return r.useEffect(()=>{const n=new Image;n.src=t,n.onload=()=>{s(n)}},[t]),e},wt="/assets/casle-lvl-1-16f970d5.png",kt="/assets/btn-tap-22212b8a.png",vt="/assets/level_tape-33fe2b3d.png";function Et(t){const{width:e,height:s}=t.getBoundingClientRect();if(t.width!==e||t.height!==s){const a=t.getContext("2d");return t.width=e*2,t.height=s*2,a==null||a.scale(2,2),{x:t.width,y:t.height}}return!1}function It(t,e){r.useEffect(()=>{const s=e,n=s==null?void 0:s.getContext("2d");let a=0,c;if(n){const l=()=>{a++,s&&Et(s),t(n,a),c=window.requestAnimationFrame(l)};return l(),()=>{window.cancelAnimationFrame(c)}}},[t])}function pe(t){const e=t.canvas.width/2,s=t.canvas.height/2,n=e*.5,a=e/2-n/2,c=s/2.4-n,l=e*.5,d=e/2-l/2,f=s/1.2-l,y=e*.04,g=d+l/2,v=f+l/3.5,u=e*.99,B=s*.08,T=e/1.98-u/2,Q=s/12.6-B,E=e,D=s*.09,U=e/2.02-u/2,z=s/12.5-B,I=e*.05,W=T+E/2,h=Q+I-2,H=e*.036,q=h+H,O=e*.06;return{centerX:e,centerY:s,sizeCastle:n,squareX:a,squareY:c,sizeBtn:l,buttonX:d,buttonY:f,sizeText:y,textX:g,textY:v,sizeTapeX:u,sizeTapeY:B,tapeX:T,tapeY:Q,sizeBgTypeX:E,sizeBgTypeY:D,BgTypeX:U,BgTypeY:z,sizeTextLvl:I,textLvlX:W,textLvlY:h,sizeTexеHp:H,textLvlHpY:q,sizeCoinJump:O}}function Ht(t,e,s,n,a){t.beginPath(),t.arc(e,s,n,0,2*Math.PI,!1),t.fillStyle=a,t.fill()}function qt(t,e,s,n){const a=t.x>=e+40&&t.x<=e+n-40,c=t.y>=s&&t.y<=s+n-30;return a&&c}function St(t,e,s,n,a){const c=1.5*Math.PI,l=c-2*Math.PI*a;t.beginPath(),t.arc(e,s,n,c,l,!0),t.lineWidth=10,t.strokeStyle="#1fbcff",t.stroke()}function Nt(t,e,s,n,a,c){t.textAlign="center",t.font=`${e}px PassionOne`,t.fillStyle=c,t.fillText(a,s,n)}function ye(t,e,s,n,a,c){t.textAlign="center",t.font=`${e}px PassionOne`,t.strokeStyle="black",t.lineWidth=2,t.fillStyle=c,t.strokeText(a,s,n),t.fillText(a,s,n)}function Yt(t,e,s,n,a,c,l){t.save(),t.translate(e+n/2,s+n/2),t.scale(c,c),t.drawImage(a,-n/2,-n/2,n,n),t.restore(),t.save(),t.translate(e+n/2,s+n/2),t.scale(c,c),St(t,0,0,n/2.33,l),t.restore()}function Ct(t,e,s,n,a,c,l,d,f,y){let g=t.createLinearGradient(s,n,s,n+c);g.addColorStop(0,"#000"),g.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=g,t.fillRect(s,n,a,a),t.drawImage(e,l,d,f,y)}function Be(t){return Math.random()*t}function xe(t,e,s,n){const a=Be(e-t)+t,c=Be(n-s)+s;return{x:a,y:c}}function be(t,e,s){const n=Math.random();if(!Array.isArray(s))throw new Error("armyUser должен быть массивом");const a=s[Math.floor(Math.random()*s.length)],c=n<.5?xe(10,60,e/7,e/1.8+200):xe(t-10,t-60,e/7,e/1.8+200),l=(t/2-c.x)/(a.speed*60),d=(e/3-c.y)/(a.speed*60);return{...c,dx:l,dy:d,color:a.name,damage:a.damage,img:a.image}}function Tt(){var de;const t=Re(),e=ne(ke),s=ne(Fe),{tg_id:n}=Me(),[a,c]=r.useState(null),[l,d]=r.useState(0),[f,y]=r.useState(0),[g,v]=r.useState(0),[u,B]=r.useState(0),[T,Q]=r.useState(!1),[E,D]=r.useState(0),[U,z]=r.useState([]),[I,W]=r.useState(s),[h,H]=r.useState((e==null?void 0:e.energy_start)||0),[q,O]=r.useState((e==null?void 0:e.hp_castle_start)||0),[ve,oe]=r.useState([]),[Ee,ie]=r.useState(1),ce=te(wt),re=te(kt),le=te(vt),J=r.useRef(null);let j=(de=J.current)==null?void 0:de.getContext("2d");It(He,J.current);const Ae=Pe({mutationFn:i=>De(i.tg_id,i.money,i.energy,i.hp),onSuccess:i=>{e&&g>=(e==null?void 0:e.hp_castle_start)&&C.invalidateQueries({queryKey:["info",n]}),t(ae.updateCoinStore(i))}},C);r.useEffect(()=>{s&&W(s)},[s]);const Ie=i=>{e&&v(x=>{const R=x+i;return R>(e==null?void 0:e.hp_castle_start)?e==null?void 0:e.hp_castle_start:R})};r.useEffect(()=>{e&&(d(e.money),B(e.energy_now),v(e.hp_castle_now),H(e.energy_start),O(e.hp_castle_start))},[T]),r.useEffect(()=>{e&&(Q(!0),H(e.energy_start),O(e.hp_castle_start))},[e]),r.useEffect(()=>{e&&(v(e.hp_castle_now),B(e.energy_now))},[e==null?void 0:e.lvl]),r.useEffect(()=>{if(e){const i=setTimeout(()=>{Ae.mutate({tg_id:n,money:f,energy:u,hp:g}),y(0)},2e3);return()=>clearTimeout(i)}},[g,f]),r.useEffect(()=>{a&&(Ae.mutate({tg_id:n,money:f,energy:u,hp:g}),y(0))},[a]),r.useEffect(()=>{e&&g>=e.hp_castle_start&&c(g)},[g]),r.useEffect(()=>{if(e&&h){const i=setTimeout(()=>{u<h&&B(x=>x+e.recharge_energy)},1e3);return u>h&&B(h),()=>clearTimeout(i)}},[u]),r.useEffect(()=>{E&&clearInterval(E);const i=setInterval(()=>{t(ae.updateCoinSumm(l)),d(0),clearInterval(i),D(i)},300);return()=>clearInterval(i)},[f]);function He(i){i.clearRect(0,0,i.canvas.width,i.canvas.height);const{sizeCastle:x,sizeBtn:R,sizeText:G,squareX:w,squareY:b,buttonX:V,buttonY:S,textX:F,textY:k,sizeTapeX:L,sizeTapeY:X,tapeX:Z,tapeY:_,sizeBgTypeX:N,sizeBgTypeY:qe,BgTypeX:Se,BgTypeY:Ne,sizeTextLvl:Ye,textLvlX:ge,textLvlY:Ce,sizeTexеHp:Te,textLvlHpY:Qe,sizeCoinJump:ze}=pe(i);if(ve.map((A,Y)=>{A.x+=A.dx,A.y+=A.dy;const K={x:w*2,y:b*2,value:A.damage,time:Date.now()};qt(A,w,b,x)?(Ie(A.damage),y(p=>p+A.damage),d(p=>p+A.damage),z(p=>[...p,K]),oe(p=>p.filter((ue,me)=>me!==Y))):Ht(i,A.x,A.y,7,A.color)}),le&&(Ct(i,le,Se,Ne,N,qe,Z,_,L,X),ye(i,Ye,ge,Ce,`Level ${e==null?void 0:e.lvl}`,"white"),ye(i,Te,ge,Qe,`${g.toLocaleString("ru-RU")} / ${q==null?void 0:q.toLocaleString("ru-RU")}`,"white")),ce&&i.drawImage(ce,w,b,x,x),U.forEach((A,Y)=>{const K=Date.now()-A.time,p=50*K/500;i.font=`${ze}px PassionOne`,i.strokeStyle="black",i.lineWidth=2,i.fillStyle="Yellow",i.strokeText(`+ ${A.value}`,A.x,A.y-p),i.fillText(`+ ${A.value}`,A.x,A.y-p),K>500&&z(ue=>ue.filter((me,Oe)=>Oe!==Y))}),re){const Y=u/(h||0);Yt(i,V,S,R,re,Ee,Y)}Nt(i,G,F,k,`${u.toLocaleString("ru-RU")} / ${h==null?void 0:h.toLocaleString("ru-RU")}`,"black")}return r.useEffect(()=>{if(j){const{centerX:i,centerY:x,sizeBtn:R,buttonX:G,buttonY:w}=pe(j),b=j==null?void 0:j.canvas;if(b){const V=S=>{const F=b.getBoundingClientRect();for(let k=0;k<S.touches.length;k++){const L=S.touches[k].clientX-F.left,X=S.touches[k].clientY-F.top;if(L>=G&&L<=G+R&&X>=w&&X<=w+R&&u>0){const Z=be(i,x,I);oe(N=>[...N,Z]),B(N=>N-1),ie(.9);const _=setTimeout(()=>ie(1),50);return()=>clearTimeout(_)}}};return b.addEventListener("touchstart",V,{passive:!0}),()=>{b.removeEventListener("touchstart",V)}}}},[be,j,u,I]),o.jsx(o.Fragment,{children:o.jsx(jt,{ref:J})})}const Qt="_BtnField_197vz_1",zt="_link_197vz_11",Ot="_img_197vz_18",Gt="_text_197vz_24",P={BtnField:Qt,link:zt,img:Ot,text:Gt};function se({img:t,text:e,path:s,bottonP:n,left:a,right:c}){let l={bottom:`${n}%`};return a&&(l={...l,left:`${a}%`}),c&&(l={...l,right:`${c}%`}),o.jsx("div",{className:P.BtnField,style:l,children:o.jsxs(we,{className:P.link,to:s,children:[o.jsx("img",{className:P.img,src:t,alt:e}),o.jsx("p",{className:P.text,children:e})]})})}const Vt="data:image/png;base64,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",Ft="data:image/png;base64,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",Lt="data:image/png;base64,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";function Ut(){return o.jsxs(o.Fragment,{children:[o.jsx("header",{className:ee.headers,children:o.jsx(rt,{})}),o.jsxs("main",{className:ee.main,children:[o.jsx(Tt,{}),o.jsx(se,{text:"Tasks",img:Vt,path:"/tasks",bottonP:"35",left:"3"}),o.jsx(se,{text:"Upgrades",img:Ft,path:"/upgrades",bottonP:"24",left:"3"}),o.jsx(se,{text:"Boosters",img:Lt,path:"/boosters",bottonP:"24",right:"3"}),o.jsx(Ve,{})]}),o.jsx("footer",{className:ee.footers,children:o.jsx(bt,{})})]})}export{Ut as default};