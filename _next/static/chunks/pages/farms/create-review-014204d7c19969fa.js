(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3439],{40782:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farms/create-review",function(){return n(97926)}])},82187:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var i=n(50705);let r=e=>{let t=null,n=[],r=[],a=[];function l(){let a=t||(null!=e?e:new i.YW);return(n.length||r.length)&&a.add(...n,...r.reverse()),a}return{setRawTransaction:function(e){t=e},addInstruction:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];n.push(...t)},addEndInstruction:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.push(...t)},addInnerTransactions:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];a.push(...t)},spawnTransaction:l,spawnTransactionQueue:function(){return n.length||r.length?[...a,l()]:a}}}},14033:function(e,t,n){"use strict";n.d(t,{S:function(){return a}});var i=n(99881),r=n(84207);function a(e,t){var n;let a=e=>(0,i.Z)(e.toFixed(null!==(n=null==t?void 0:t.decimalPlace)&&void 0!==n?n:2,null==t?void 0:t.format,null==t?void 0:t.rounding),{fractionLength:"auto",...t}),l=(0,r.Z)(e);try{let e=l.toFixed(0),n=e.length;if(!(null==t?void 0:t.disabled)&&n>9)return"".concat(a(l.div(1e9)),"B");if(!(null==t?void 0:t.disabled)&&n>6)return"".concat(a(l.div(1e6)),"M");if(!(null==t?void 0:t.disabled)&&n>3)return"".concat(a(l.div(1e3)),"K");return"".concat(a(l))}catch(e){return"0"}}},99881:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(72573);function r(e){let{groupSeparator:t=",",fractionLength:n=2,groupSize:r=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,i.B)(e),e=>"auto"===n?e:function(e,t){var n;let[,i="",r="",a=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[];return a?a.length<t?String(e):Number(e).toFixed(t):String(e)}(e,n),e=>{var n;let[,i="",a="",l=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[],s=[...a].reduceRight((e,n,i,a)=>{let l=a.length-1-i;return n+(0!==l&&l%r==0?t:"")+e},"");return l?"".concat(i).concat(s,".").concat(l):"".concat(i).concat(s)}].reduce((e,t)=>t(e),e)}},18074:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(81451),r=n(51523),a=n(84207),l=n(72573),s=n(99881);function o(e,t){try{var n,o;let d=(0,a.Z)(null!=e?e:0),c=d.mul((null==t?void 0:t.alreadyPercented)?1:100).toFixed(null!==(n=null==t?void 0:t.fixed)&&void 0!==n?n:2);if((0,i.eq)(d,0))return"0%";if(!(null==t?void 0:t.exact)&&c===0..toFixed(null!==(o=null==t?void 0:t.fixed)&&void 0!==o?o:2))return(null==t?void 0:t.alwaysSigned)?"<+0.01%":"<0.01%";return(null==t?void 0:t.alwaysSigned)?"".concat((0,i.gt)(c,0)?"+":"-").concat((0,s.Z)((0,i.gt)(c,0)?(0,l.B)(c):(0,l.B)((0,r.dC)(c,-1))),"%"):"".concat((0,s.Z)(c,{fractionLength:null==t?void 0:t.fixed}),"%")}catch(e){return"0%"}}},95865:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(14033);function r(e,t){return e?"$".concat((0,i.S)(e,{...t,disabled:!(null==t?void 0:t.autoSuffix)})):"$0"}},56053:function(e,t,n){"use strict";n.d(t,{j:function(){return w}});var i=n(85893),r=n(91371),a=n(13521),l=n(57435),s=n(2148),o=n(31166),d=n(99522),c=n(54531),u=n(54592),m=n(48162),f=n(34495),v=n(51800),x=n(92618),h=n(3363),p=n(18074),Z=n(95865);function w(){let e=(0,a.Z)(e=>e.poolId),t=(0,s.O)(e=>e.hydratedInfos),n=(0,l.Z)(e=>e.jsonInfos),w=(0,o.ZP)(e=>e.tokens),g=(0,r.ZP)(e=>e.isMobile),b=n.find(t=>(0,h.ZP)(t.id)===e),j=t.find(t=>t.ammId===e),y={...b,...j,baseToken:b?w[b.baseMint]:void 0,quoteToken:b?w[b.quoteMint]:void 0};return(0,i.jsx)(f.Z,{type:g?"item-card":"list-table",itemClassName:g?"grid-cols-[1fr,2fr]":void 0,list:[{id:e,pool:y}],getItemKey:e=>e.id,labelMapper:[{label:"Pool",cssGridItemWidth:"2fr"},{label:"TVL"},{label:"APR",renderLabel:()=>(0,i.jsxs)(v.Z,{children:[(0,i.jsx)("div",{children:"APR"}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(m.Z,{className:"ml-1 cursor-help",size:"sm",heroIconName:"question-mark-circle"}),(0,i.jsx)(x.Z.Panel,{children:(0,i.jsx)("div",{className:"max-w-[300px]",children:"APR based on trading fees earned by the pool in the past 30D. Farming reward APR will be calculated once the farm is live and users have staked."})})]})]})}],renderRowItem:e=>{var t,n,r,a,l,s,o,m,f,x;let{item:w,label:g}=e;return"Pool"===g?w.id?(0,i.jsxs)(v.Z,{className:"gap-1 items-center",children:[(0,i.jsx)(c.Z,{token1:null===(t=w.pool)||void 0===t?void 0:t.baseToken,token2:null===(n=w.pool)||void 0===n?void 0:n.quoteToken,size:"sm"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[null!==(m=null===(r=w.pool)||void 0===r?void 0:null===(a=r.baseToken)||void 0===a?void 0:a.symbol)&&void 0!==m?m:"UNKNOWN","-",null!==(f=null===(l=w.pool)||void 0===l?void 0:null===(s=l.quoteToken)||void 0===s?void 0:s.symbol)&&void 0!==f?f:"UNKNOWN"]}),(0,i.jsx)(d.U,{showDigitCount:8,textClassName:"text-[#abc4ff80] text-xs",canCopy:!1,children:(0,h.ZP)(null===(o=w.pool)||void 0===o?void 0:o.ammId)})]})]}):"--":"TVL"===g?(0,i.jsx)(u.Z,{className:"justify-center h-full",children:(null===(x=w.pool)||void 0===x?void 0:x.liquidity)?(0,Z.Z)(w.pool.liquidity,{decimalPlace:0}):"--"}):"APR"===g?(0,i.jsx)(u.Z,{className:"justify-center h-full",children:w.pool.apr30d?(0,p.Z)(w.pool.apr30d,{alreadyPercented:!0}):"--"}):void 0}})}},97926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var i=n(85893),r=n(91371),a=n(95657),l=n(26416),s=n(82187),o=n(8667),d=n(91148),c=n(34003),u=n(98360),m=n(56419),f=n(90547),v=n(9191),x=n(3363),h=n(4465),p=n(14209),Z=n(51523),w=n(71375),g=n(53607),b=n(57435),j=n(2148),y=n(42186),N=n(80582),P=n(53002),I=n(59277),T=n(13521),k=n(43724);async function S(e){let{onReceiveFarmId:t,...n}=e;return(0,o.ZP)(async e=>{let{transactionCollector:i,baseUtils:{owner:r,connection:a}}=e,{rewards:o}=T.Z.getState(),{valid:S,reason:E}=(0,k.zh)();(0,c.Z)(S,E);let{valid:A,reason:F}=(0,k.f6)(o);(0,c.Z)(A,F);let{tokenAccounts:C,tokenAccountRawInfos:M}=P.Z.getState();(0,s.p)();let{poolId:B}=T.Z.getState(),{jsonInfos:D}=b.Z.getState(),{programIds:R}=I.ZP.getState(),q=D.find(e=>e.id===B),K=C.map(e=>(0,x.ZP)(e.mint));(0,c.Z)(q,"pool json info not founded");let O=o.map(e=>{var t,n;let i=e.token;if((0,c.Z)(e.startTime,"reward start time is required"),(0,c.Z)(e.endTime,"reward end time is required"),(0,c.Z)(e.amount,"reward amount is required"),!(0,h.aT)(null===(t=e.token)||void 0===t?void 0:t.mint,y.DA)){let t=K.includes((0,x.ZP)(null===(n=e.token)||void 0===n?void 0:n.mint));(0,c.Z)(t,"token not existed in user's wallet")}(0,c.Z)(i,"can't find selected reward token");let r=(0,m.V1)(e.startTime).getTime(),a=(0,m.V1)(e.endTime).getTime(),l=(0,Z.hi)(e.amount,(0,f.nB)(a-r).seconds),s=(0,w.Z)((0,Z.dC)(l,(0,p.Bd)(1,i.decimals)));return{rewardOpenTime:(0,w.Z)((0,Z.hi)(r,1e3)),rewardEndTime:(0,w.Z)((0,Z.hi)(a,1e3)),rewardMint:"sol"===i.id?N.YG:i.mint,rewardPerSecond:s,rewardType:e.isOptionToken?"Option tokens":"Standard SPL"}}),_="",V="";l.yB5==l.IBi.MAINNET?(_="CWzVGw8MjSaJ3mKE4aYNUHDQ8xh3ZCkW5PkdGirZbZAy",V="22CepRwoEBwRUEF8QUkeVFBFs6irHNjC8Vd8fh3k3NNS"):(_="7qdPr5uE71pBkdNsSo49mc5iFYJQLQVJjd6TKRikBrk6",V="834auQxpQihH9KcWCtZhU76ggDpTN8popnEikBswwBnq");let U=q.lpMint,L=C.find(e=>(0,h.aT)(e.mint,_));(0,c.Z)(null==L?void 0:L.publicKey,"lockMintTokenAccount not found");let{innerTransaction:z,address:Q}=await l.l6j.makeCreateFarmInstruction({poolInfo:{lpMint:(0,x.uI)(U),lockInfo:{lockMint:(0,x.uI)(_),lockVault:(0,x.uI)(V)},version:6,rewardInfos:O,programId:R.FarmV6},connection:a,userKeys:{owner:r,tokenAccounts:M}}),W=(0,x.ZP)(Q.farmId);async function X(){let{poolId:e,farmId:t}=T.Z.getState(),{jsonInfos:n}=j.O.getState();if(!e||!t)return;let i=n.find(t=>t.ammId===e);if(!i)return;let a=i.lpMint,s=R.FarmV6,o=(0,x.ZP)((await l.l6j.getAssociatedAuthority({programId:s,poolId:(0,x.uI)(e)})).publicKey),c=(0,x.ZP)(l.l6j.getAssociatedLedgerPoolAccount({programId:s,poolId:(0,x.uI)(t),mint:(0,x.uI)(a),type:"lpVault"})),m={id:t,lpMint:a,version:6,programId:(0,x.ZP)(s),authority:o,lpVault:c,rewardPeriodMax:g.DX,rewardPeriodMin:g.x4,rewardPeriodExtend:g.Md,upcoming:!0,creator:(0,x.ZP)(r),rewardInfos:await (0,u.ZP)(O,async t=>{let n=(0,x.ZP)(await l.l6j.getAssociatedLedgerPoolAccount({programId:s,poolId:(0,x.uI)(e),mint:(0,x.uI)(t.rewardMint),type:"rewardVault"}));return{rewardMint:(0,x.ZP)(t.rewardMint),rewardOpenTime:(0,w.Z)(t.rewardOpenTime).toNumber(),rewardEndTime:(0,w.Z)(t.rewardEndTime).toNumber(),rewardPerSecond:(0,w.Z)(t.rewardPerSecond).toNumber(),rewardVault:n,rewardType:t.rewardType}})};(0,v.mM)("USER_CREATED_FARMS",e=>(0,d.jX)(null!=e?e:[],m))}null==t||t(W),(0,c.Z)(z,"createFarm valid failed"),i.add(z,{...n,cacheTransaction:!0,txHistoryInfo:{title:"Create New Farm",description:"Farm ID: ".concat(W.slice(0,4),"...").concat(W.slice(-4))},onTxSuccess(){for(var e,t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];X(),null===(e=n.onTxSuccess)||void 0===e||e.call(n,...i)}})})}var E=n(49641),A=n(31555),F=n(99522),C=n(43067),M=n(54592),B=n(29120),D=n(51800),R=n(81451),q=n(72573),K=n(92224),O=n(3113),_=n(56053),V=n(11163),U=n(67294);function L(){var e;let[t,{on:n,off:l}]=(0,K.ZP)(!1),s=(0,P.Z)(e=>e.balances),o=(0,T.Z)(e=>e.rewards),{pathname:d}=(0,V.useRouter)(),c=(0,r.ZP)(e=>e.isMobile),u=(0,E.Z)(e=>e.refreshFarmInfos),[m,f]=(0,U.useState)(String(Date.now())),v=(0,r.ZP)(e=>e.isApprovePanelShown);(0,U.useEffect)(()=>{f(String(Date.now()))},[d]);let p=null===(e=o.find(e=>{var t;return(0,h.aT)(null===(t=e.token)||void 0===t?void 0:t.mint,N.PD)}))||void 0===e?void 0:e.amount,w=s[(0,x.ZP)(N.PD)],g=(0,R.eg)(null!=w?w:0,(0,Z.IH)(0,null!=p?p:300));(0,U.useEffect)(()=>{T.Z.getState().isRoutedByCreateOrEdit||(0,A.Eh)("/farms",{queryProps:{currentTab:"Ecosystem"}})},[]);let b=(0,i.jsx)(C.Z,{className:"frosted-glass-teal px-16 self-stretch mobile:w-full",isLoading:v,size:c?"sm":"lg",validators:[{should:g,fallbackProps:{children:"Insufficient MAKI balance"}}],onClick:async()=>{S({onReceiveFarmId(e){T.Z.setState({farmId:e})},onTxSentFinally:()=>{n(),function(e,t){var n;let i=0;if(0<(null!==(n=t.loopCount)&&void 0!==n?n:1/0)){let n=globalThis.setInterval(()=>{var r;e(),(i+=1)>=(null!==(r=t.loopCount)&&void 0!==r?r:1/0)&&globalThis.clearInterval(n)},t.intervalTime)}}(()=>{E.Z.getState().refreshFarmInfos()},{loopCount:3,intervalTime:6e4})}})},children:"Create Farm"}),j=(0,i.jsxs)(M.Z,{className:"mt-4 text-sm font-medium items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"text-[#abc4ff80]",children:"Fee:"})," ",(0,i.jsx)("span",{className:"text-[#abc4ff]",children:"300 MAKI"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"text-[#abc4ff80]",children:"Est. transaction fee:"})," ",(0,i.jsx)("span",{className:"text-[#abc4ff]",children:"0.002 SOL"})]})]}),y=(0,i.jsx)(C.Z,{className:"frosted-glass-skygray mobile:w-full",size:c?"sm":"lg",onClick:A.Bv,children:"Edit"});return(0,i.jsx)(B.Z,{metaTitle:"Farms - MakiDEX",mobileBarTitle:"Create Farm",children:(0,i.jsxs)("div",{className:"self-center w-[min(720px,90vw)] py-4",children:[!c&&(0,i.jsx)("div",{className:"pb-8 text-2xl mobile:text-lg font-semibold justify-self-start text-white",children:"Create Farm"}),(0,i.jsx)("div",{className:"mb-8 text-xl mobile:text-lg font-semibold justify-self-start text-white",children:"Review farm details"}),(0,i.jsxs)("div",{className:"mb-8",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Pool"}),(0,i.jsx)(_.j,{})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Farm rewards"}),(0,i.jsx)(O.D,{canUserEdit:!1})]}),(0,i.jsxs)("div",{className:"font-medium text-sm mobile:text-xs text-justify leading-snug text-[#abc4ff80] mb-8",children:[(0,i.jsx)("span",{className:"text-[#DA2EEF]",children:"Please note:"})," Rewards allocated to farms cannot be withdrawn after farming starts. Newly created farms generally appear on MakiDEX 30 seconds after creation, depending on Solana network status. A one-time fee of 300 MAKI is required to create a farm, which will be deposited into the MakiDEX treasury."]}),t?(0,i.jsx)("div",{className:"text-[#39d0d8] font-medium text-center text-sm my-4 mobile:mx-4",children:"Your farm has been created successfully and will be live on the UI shortly"}):(0,i.jsxs)("div",{className:"text-[#DA2EEF] font-medium text-center text-sm my-4 mobile:mx-4",children:["Creating a farm requires a one-time 300 MAKI fee. Your MAKI balance: ",(0,q.B)(w)||0," MAKI"]}),t?(0,i.jsxs)(M.Z,{children:[(0,i.jsxs)(D.Z,{className:"w-full gap-2 justify-center my-8",children:[(0,i.jsx)(D.Z,{className:"items-center text-sm mobile:text-xs font-medium text-[#ABC4FF] mobile:text-2xs",children:(0,i.jsx)("div",{className:"mr-1",children:"Your Farm ID: "})}),(0,i.jsx)(F.U,{canCopy:!0,showDigitCount:"all",className:"text-white mobile:text-sm font-medium",children:T.Z.getState().farmId})]}),(0,i.jsx)(C.Z,{className:"frosted-glass-skygray mobile:w-full",size:c?"sm":"lg",onClick:()=>{(0,A.Eh)("/farms",{queryProps:{currentTab:"Ecosystem"}}),u(),setTimeout(()=>{T.Z.setState({rewards:[(0,a.k8)()]}),T.Z.setState({isRoutedByCreateOrEdit:!1}),l()},1e3)},children:"Back to Farms"})]}):c?(0,i.jsxs)(M.Z,{className:"gap-5 items-center",children:[j,(0,i.jsxs)(M.Z,{className:"items-center gap-3 w-full",children:[b,y]})]}):(0,i.jsxs)(D.Z,{className:"gap-5 justify-center items-start",children:[(0,i.jsxs)(M.Z,{className:"items-center",children:[b,j]}),y]})]})})}}},function(e){e.O(0,[7239,9120,1671,3129,9774,2888,179],function(){return e(e.s=40782)}),_N_E=e.O()}]);