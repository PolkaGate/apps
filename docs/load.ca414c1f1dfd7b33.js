(()=>{"use strict";var e,t,r,o,n,a={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=a,e=[],d.O=(t,r,o,n)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,n]=e[s],i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(n,a),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"dyna."+{1130:"23d9a06269838203",2222:"98f978e026e9f00d",2464:"3c4339cf64d9ba30",3596:"890b7f1e8eb1cac1",3909:"a1aa08c9a3404091",4689:"f59e330b71e245e5",5409:"911c4e6a682f373a",5528:"d91fed93b4d586ad",5903:"4b922752548735f2",6074:"3f20f78bc5948480",7396:"30855a6eee30d31b",8570:"60182fce63b5857e",8705:"2574d2ab82e04ec1",9185:"3777b63b622de47f",9199:"b8b46cf27bc4ccf3",9315:"3bcd825bd94497a4"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="@polkadot/apps:",d.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,l;if(void 0!==r)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var c=f[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+r){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+r),i.src=e,0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),i.integrity=d.sriHashes[a],i.crossOrigin="anonymous"),o[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="",d.sriHashes={1130:"sha384-dHB+2N8hjGuk71GDMOSwgRaKKIa5+sk+Og4X2M1uudOkHMMzZr2Bszp6dKKobSeR",2222:"sha384-fp2tSrr9CVzZ98gS1BJ/4rB3K/kGEJdUvcYm5ztd54bo/U645dLGvF2pmpsxShtU",2464:"sha384-FWix5fofOSpjGLFZrFw3c9zE7CoCORCvgjf64T6cW0qE/NtvMpEon5D+P5fd3hMY",3596:"sha384-jCjMb05ECi0y8ZEM95UxDyaJh60hBf5GuIsEG1sTu9Z7C2GHzbezjDULmgDzwvZf",4689:"sha384-f5wWo3uczyLmKEpOGtA4DcMvgLyMv7nL2wJ+m89OsWA8wrHgW5fX5+1BtQe8VAm6",5409:"sha384-FZOl1cfaRNTVSahXP+wPbg3BVfGvwTnMQImeWgy2q8aVYId+XHcaKVfwr3QeI9Ny",5528:"sha384-sZgJ/o1UGt0MYGeWqPqY9Xm3iJQ457FDHgrKbN533hTev0p26As8kn8qeCwuO0kT",5903:"sha384-PCuGGPxMfv9QLqkJYmKhAUEAphJ8VKdClN63OMpz2DLXOcxkYCSFCpVl2ncPsVFX",6074:"sha384-jIxD0vluhpxKHdPPDL0MD6tkmXvCjfjoGHvm2jf0dm7LpOQzYSFtCrJTP0qIyprF",7396:"sha384-ju+HWydLYOhqXJN3/9rXQ50q0y/bvUX2gnes7jpyDs7k/XlgbqPU3ukwZ42HLYRi",8570:"sha384-n4RHfB/8kETzCWeadik5HQ536uyyPFpvFXPzjwjBuzo9/4ko36DAoa77GWWn4kLh",8705:"sha384-wgEGURJfE+JGxVb6z3kO8opJOVJuAHfpeTcTglh6iy4FVoW89cwRt3lAXDj3teVj",9185:"sha384-wY1CVmvEWDLGhIOmEz1fBlLAsodPF67WhuPeUYDbWU3QAJTgIwKZwt0QuNuC1wNr",9199:"sha384-C9jRJ57+kqYPIhJTEWoWnk/tWoNHF7opnsuAGuD1POQt9CoDXug3dAb4LN/PNHvj",9315:"sha384-78vxWXgjxMVNIKhMcPVZXAgPpbbFnU9hLFTkFbvT4/72ay6JFC13XqrwrufxtqcS"},(()=>{d.b=document.baseURI||self.location.href;var e={3666:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(3666!=t){var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}else e[t]=0},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,i,l]=r,f=0;if(a.some((t=>0!==e[t]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(l)var s=l(d)}for(t&&t(r);f<a.length;f++)n=a[f],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(s)},r=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.nc=void 0})();