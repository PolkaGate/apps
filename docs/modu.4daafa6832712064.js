"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[2107],{51304:(e,t,s)=>{s.d(t,{ZP:()=>q});var n=s(23994),a=s(85960),r=s(47451);const i={name:"@polkadot/react-identicon",path:new URL("file:///Users/kami/Documents/GitHub/polkagate/apps/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.substring(0,new URL("file:///Users/kami/Documents/GitHub/polkagate/apps/node_modules/@polkadot/react-identicon/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.8.2"};(0,r.E)(i,null,[n.b,a.b]);var o=s(52322),l=s(2784),c=s(72282),u=s(16039),m=s(35545),d=s(48358),p=s(74076),h=s(55858),y=s(73493),f=s(90107),g=s(94175),x=s(7989);const v=l.memo((function({address:e,className:t="",size:s,style:n={}}){const a=(0,l.useCallback)((t=>{t?.appendChild((0,x.y)(e,{isAlternative:!1,size:s}))}),[e,s]);return(0,o.jsx)("div",{className:t,ref:a,style:n})})),k=l.memo((function({className:e="",size:t,style:s={}}){return(0,o.jsx)("svg",{className:e,height:t,style:s,viewBox:"0 0 64 64",width:t})}));var b=s(88617),w=s(31383);const N=w.zo.img((({size:e})=>`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`)),j=l.memo((function({address:e,className:t="",size:s,style:n={}}){const a=(0,l.useMemo)((()=>b(e)),[e]);return(0,o.jsx)(N,{className:t,size:s,src:a,style:n})}));var z=s(56926);const U=l.memo((function({className:e="",publicKey:t,size:s,style:n={}}){const a=(0,l.useMemo)((()=>({__html:z.KT(t.substring(2),s)})),[t,s]);return(0,o.jsx)("div",{className:e,dangerouslySetInnerHTML:a,style:n})}));var I=s(55824);function A({cx:e,cy:t,fill:s,r:n},a){return(0,o.jsx)("circle",{cx:e,cy:t,fill:s,r:n},a)}const D=l.memo((function({address:e,className:t="",isAlternative:s=!1,size:n,style:a={}}){const r=(0,l.useMemo)((()=>(0,I.i)(e,{isAlternative:s})),[e,s]);return(0,o.jsx)("svg",{className:t,height:n,id:e,name:e,style:a,viewBox:"0 0 64 64",width:n,children:r.map(A)})})),C=v,S=64,E={beachball:v,empty:k,ethereum:j,jdenticon:U,polkadot:D,substrate:U};class H extends l.PureComponent{state={address:"",publicKey:"0x"};static prefix=void 0;static setDefaultPrefix(e){H.prefix=e}static getDerivedStateFromProps({prefix:e=H.prefix,theme:t,value:s},n){if("ethereum"===t)return{address:(0,d.U)(s)?(0,y.K)(s):s||"",publicKey:""};try{const t=(0,d.U)(s)||(0,p.vq)(s)?(0,f.m)(s,e):s||"",a=(0,h.c)((0,g.m)(t,!1,e));return t===n.address?null:{address:t,publicKey:a}}catch{return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,t=this.getWrapped(this.state,this.props);return e?(0,o.jsx)(c,{onCopy:this.onCopy,text:e,children:t}):t}getWrapped({address:e,publicKey:t},{Custom:s}){const{className:n="",isAlternative:a,isHighlight:r,size:i=S,style:l={},theme:c=u.X.icon}=this.props,d=e?s||E["default"===c?m.Oi:c]||C:k;return(0,o.jsx)(_,{className:`ui--IdentityIcon  ${n}`,style:l,children:(0,o.jsx)(d,{address:e,className:r?"highlight":"",isAlternative:a,publicKey:t,size:i})},e)}onCopy=()=>{const{onCopy:e}=this.props,{address:t}=this.state;t&&e&&e(t)}}const _=w.zo.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,q=l.memo((function(e){return(0,o.jsx)(H,{...e})}))},72152:(e,t,s)=>{s.d(t,{r_:()=>j,K0:()=>z,CU:()=>C,lB:()=>S});var n=s(47451);const a={name:"@polkadot/react-qr",path:new URL("file:///Users/kami/Documents/GitHub/polkagate/apps/node_modules/@polkadot/react-qr/packageInfo.js").pathname.substring(0,new URL("file:///Users/kami/Documents/GitHub/polkagate/apps/node_modules/@polkadot/react-qr/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.8.2"};(0,n.E)(a,null,[]);var r=s(52322),i=s(2784),o=s(33403),l=s(69516);const c=s(4133);c.stringToBytes=e=>e;var u=s(31383),m=s(51330),d=s(46610),p=s(54371),h=s(94175);const y="secret",f=new Uint8Array([83]),g=new Uint8Array([1]),x=(new Uint8Array([0]),new Uint8Array([1]),new Uint8Array([2]),new Uint8Array([3]),new Uint8Array([0]));function v(e){return new Uint8Array([e>>8,255&e])}function k(e){if(!e)return{height:"auto",width:"100%"};const t=(0,p.H)(e)?e:`${e}px`;return{height:t,width:t}}function b(e){const t=c(0,"M");return t.addData(e,"Byte"),t.make(),t.createDataURL(16,0)}const w=u.zo.div`
  .ui--qr-Display {
    height: 100%;
    width: 100%;

    img,
    svg {
      background: white;
      height: auto !important;
      max-height: 100%;
      max-width: 100%;
      width: auto !important;
    }
  }
`,N=i.memo((function({className:e="",size:t,skipEncoding:s,style:n={},timerDelay:a=2750,value:c}){const[{image:u},d]=(0,i.useState)({frameIdx:0,frames:[],image:null,valueHash:null}),p=(0,i.useRef)({timerDelay:a,timerId:null}),h=(0,i.useMemo)((()=>k(t)),[t]);return(0,i.useEffect)((()=>{const e=()=>d((t=>{if(t.frames.length<=1)return t;let s=t.frameIdx+1;s===t.frames.length&&(s=0,p.current.timerDelay=p.current.timerDelay+500);const n=(0,o.Z)({},t,{frameIdx:s,image:b(t.frames[s])});return p.current.timerId=setTimeout(e,p.current.timerDelay),n}));return p.current.timerId=setTimeout(e,p.current.timerDelay),()=>{p.current.timerId&&clearTimeout(p.current.timerId)}}),[]),(0,i.useEffect)((()=>{d((e=>{const t=(0,l.R)(c);if(t===e.valueHash)return e;const n=s?[c]:function(e){const t=[];let s=0;for(;s<e.length;)t.push(e.subarray(s,s+1024)),s+=1024;return t.map(((e,s)=>(0,m.e)(x,v(t.length),v(s),e)))}(c);return{frameIdx:0,frames:n,image:b(n[0]),valueHash:t}}))}),[s,c]),u?(0,r.jsx)(w,{className:e,style:h,children:(0,r.jsx)("div",{className:"ui--qr-Display",style:n,children:(0,r.jsx)("img",{src:u})})}):null})),j=i.memo((function({address:e,className:t,cmd:s,genesisHash:n,payload:a,size:o,style:l,timerDelay:c}){const u=(0,i.useMemo)((()=>function(e,t,s,n){return(0,m.e)(f,g,new Uint8Array([t]),(0,h.m)(e),(0,d.Y)(s),(0,d.Y)(n))}(e,s,a,n)),[e,s,a,n]);return u?(0,r.jsx)(N,{className:t,size:o,style:l,timerDelay:c,value:u}):null})),z=i.memo((function({className:e,networkSpecs:t,size:s,style:n}){const a=(0,i.useMemo)((()=>function(e){const t=e.length,s=new Uint8Array(t);for(let n=0;n<t;n++)s[n]=e.charCodeAt(n);return s}(JSON.stringify(t))),[t]);return a?(0,r.jsx)(N,{className:e,size:s,skipEncoding:!0,style:n,value:a}):null}));var U=s(53789);const I=e=>{console.error("@polkadot/react-qr:Scan",e.message)},A=u.zo.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;

    video {
      margin: 0;
    }
  }
`,D=i.memo((function({className:e="",delay:t=150,onError:s=I,onScan:n,size:a,style:o={}}){const l=(0,i.useMemo)((()=>k(a)),[a]),c=(0,i.useCallback)((e=>s(e)),[s]),u=(0,i.useCallback)((e=>e&&n(e)),[n]);return(0,r.jsx)(A,{className:e,style:l,children:(0,r.jsx)(U,{className:"ui--qr-Scan",delay:t,onError:c,onScan:u,style:o})})})),C=i.memo((function({className:e,isEthereum:t,onError:s,onScan:n,size:a,style:o}){const l=(0,i.useCallback)((e=>{if(e)try{let s,a,r,i;t?([s,a,...i]=e.split(":"),r=null,a=a.substring(0,42)):[s,a,r,...i]=e.split(":");const o=t?"ethereum":"substrate";if(s!==o&&s!==y)throw new Error(`Invalid prefix received, expected '${o} or ${y}' , found '${s}'`);const l=s===o;l&&!t&&(0,h.m)(a),n({content:a,genesisHash:r,isAddress:l,name:i?.length?i.join(":"):void 0})}catch(t){s&&s(t),console.error("@polkadot/react-qr:QrScanAddress",t.message,e)}}),[n,s,t]);return(0,r.jsx)(D,{className:e,onError:s,onScan:l,size:a,style:o})})),S=i.memo((function({className:e,onError:t,onScan:s,size:n,style:a}){const o=(0,i.useCallback)((e=>e&&s({signature:`0x${e}`})),[s]);return(0,r.jsx)(D,{className:e,onError:t,onScan:o,size:n,style:a})}))}}]);