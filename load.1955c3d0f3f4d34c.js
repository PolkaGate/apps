(()=>{"use strict";var e,r,t,o,n,a={},i={};function d(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=a,e=[],d.O=(r,t,o,n)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,o,n]=e[s],i=!0,f=0;f<t.length;f++)(!1&n||a>=n)&&Object.keys(d.O).every((e=>d.O[e](t[f])))?t.splice(f--,1):(i=!1,n<a&&(a=n));if(i){e.splice(s--,1);var l=o();void 0!==l&&(r=l)}}return r}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[t,o,n]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,d.d(n,a),n},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"dyna."+{1130:"5d41d39811fe3192",2222:"98f978e026e9f00d",2905:"7eeeb13834e9cf6f",3249:"71bd733eff23d7a5",3805:"259a5e397f73be95",3909:"51a85f1e8a072e3a",5409:"911c4e6a682f373a",5903:"4b922752548735f2",6074:"3f20f78bc5948480",6620:"3e32b0fa4441ae78",8570:"60182fce63b5857e",8705:"2574d2ab82e04ec1",9185:"32fefe04a6968388",9199:"b8b46cf27bc4ccf3",9315:"3bcd825bd94497a4"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},n="@polkadot/apps:",d.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var i,f;if(void 0!==t)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+t){i=c;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+t),i.src=e,0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),i.integrity=d.sriHashes[a],i.crossOrigin="anonymous"),o[e]=[r];var u=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),f&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="",d.sriHashes={1130:"sha384-cUFDOJOUU91vTJ/uDPW8HOVprv0XL63ywT9nm65lmdde0QVR70I6mhipEW8duN2p",2222:"sha384-fp2tSrr9CVzZ98gS1BJ/4rB3K/kGEJdUvcYm5ztd54bo/U645dLGvF2pmpsxShtU",2905:"sha384-NbqPlNVhfREXXKNBtCw14jEUfWPzDMvvXMWCAWHt/cprDArjAZ/B8rev9czbGQGL",3249:"sha384-/HIhV5mFP0sX8BBMOpioLyW+t+L9rnThHVsLyuur0exfuBh488SA8N5JiQ+3XO3s",3805:"sha384-szOJBBQColt4CBTj2LR2+WkBwvoe089LpMYsPxEkKWdoumT3n3AjKA8uZu5qRdTf",5409:"sha384-FZOl1cfaRNTVSahXP+wPbg3BVfGvwTnMQImeWgy2q8aVYId+XHcaKVfwr3QeI9Ny",5903:"sha384-PCuGGPxMfv9QLqkJYmKhAUEAphJ8VKdClN63OMpz2DLXOcxkYCSFCpVl2ncPsVFX",6074:"sha384-jIxD0vluhpxKHdPPDL0MD6tkmXvCjfjoGHvm2jf0dm7LpOQzYSFtCrJTP0qIyprF",6620:"sha384-ujzfeVfXXZZKAOXF61ki181NxcvgfxbzOJzrKp7WXFS6zR2VGXi7oNiUqDJ1dIo5",8570:"sha384-n4RHfB/8kETzCWeadik5HQ536uyyPFpvFXPzjwjBuzo9/4ko36DAoa77GWWn4kLh",8705:"sha384-wgEGURJfE+JGxVb6z3kO8opJOVJuAHfpeTcTglh6iy4FVoW89cwRt3lAXDj3teVj",9185:"sha384-LyNiRvAU6O+b0+Sc+LbjiJ3Io4GIzl5HqvOJLq+37+41wIvYocxCNiys/OO4lPVZ",9199:"sha384-C9jRJ57+kqYPIhJTEWoWnk/tWoNHF7opnsuAGuD1POQt9CoDXug3dAb4LN/PNHvj",9315:"sha384-78vxWXgjxMVNIKhMcPVZXAgPpbbFnU9hLFTkFbvT4/72ay6JFC13XqrwrufxtqcS"},(()=>{d.b=document.baseURI||self.location.href;var e={3666:0};d.f.j=(r,t)=>{var o=d.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(3666!=r){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=d.p+d.u(r),i=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}else e[r]=0},d.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,i,f]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(f)var s=f(d)}for(r&&r(t);l<a.length;l++)n=a[l],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(s)},t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),d.nc=void 0})();