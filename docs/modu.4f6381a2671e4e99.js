"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[8969],{99736:(e,a,d)=>{d.d(a,{P:()=>u});var t=d(67046),c=d(28646);function r(...e){return e.map((([e,a])=>({create:()=>a.create(),type:e})))}const n=r(["webusb",d(28016).Z],["hid",c.Z]);var s=d(84195),f=d(50145),b=d(52256);const i=36864,o={acala:"Acala",ajuna:"Ajuna","aleph-node":"AlephZero",astar:"Astar",bifrost:"Bifrost","bifrost-kusama":"BifrostKusama",centrifuge:"Centrifuge",composable:"Composable",darwinia:"Darwinia","dock-mainnet":"Dock",edgeware:"Edgeware",enjin:"Enjin",equilibrium:"Equilibrium",genshiro:"Genshiro",hydradx:"HydraDX","interlay-parachain":"Interlay",karura:"Karura",khala:"Khala",kusama:"Kusama",matrixchain:"Matrixchain",nodle:"Nodle",origintrail:"OriginTrail",parallel:"Parallel",pendulum:"Pendulum",phala:"Phala",picasso:"Picasso",polkadex:"Polkadex",polkadot:"Polkadot",polymesh:"Polymesh",quartz:"Quartz",sora:"Sora",stafi:"Stafi",statemine:"Statemine",statemint:"Statemint",ternoa:"Ternoa",unique:"Unique",vtb:"VTB",xxnetwork:"XXNetwork",zeitgeist:"Zeitgeist"};async function l(e){const a=await e;if(a.return_code!==i)throw new Error(a.error_message);return a}function p(e,a,d=0,t=0,{account:c=2147483648,addressIndex:r=2147483648,change:n=2147483648}={}){return async b=>{const{signature:i}=await l(b[e](c+d,n,r+t,(0,s.Y)(a)));return{signature:(0,f.t)(i.toString("hex"))}}}class u{__internal__ledgerName;__internal__transportDef;__internal__app=null;constructor(e,a){const d=o[a],t=n.find((({type:a})=>a===e));if(!d)throw new Error(`Unsupported Ledger chain ${a}`);if(!t)throw new Error(`Unsupported Ledger transport ${e}`);this.__internal__ledgerName=d,this.__internal__transportDef=t}async getAddress(e=!1,a=0,d=0,{account:t=2147483648,addressIndex:c=2147483648,change:r=2147483648}={}){return this.withApp((async n=>{const{address:s,pubKey:b}=await l(n.getAddress(t+a,r,c+d,e));return{address:s,publicKey:(0,f.t)(b)}}))}async getVersion(){return this.withApp((async e=>{const{device_locked:a,major:d,minor:t,patch:c,test_mode:r}=await l(e.getVersion());return{isLocked:a,isTestMode:r,version:[d,t,c]}}))}async sign(e,a,d,t){return this.withApp(p("sign",e,a,d,t))}async signRaw(e,a,d,t){return this.withApp(p("signRaw",(0,b.Rl)(e),a,d,t))}async withApp(e){try{if(!this.__internal__app){const e=await this.__internal__transportDef.create();this.__internal__app=(0,t.newSubstrateApp)(e,this.__internal__ledgerName)}return await e(this.__internal__app)}catch(e){throw this.__internal__app=null,e}}}},31667:(e,a,d)=>{d.d(a,{g:()=>t});const t="bottom drive obey lake curtain smoke basket hold race lonely fit walk"},92580:(e,a,d)=>{d.d(a,{s:()=>N});var t=d(38628),c=d(51330),r=d(33403),n=d(46610),s=d(55858),f=d(65417),b=d(36916),i=d(50528),o=d(46359),l=d(92892),p=d(62417),u=d(89581),h=d(34323),y=d(64071),m=d(23604),_=d(73493),x=d(55736),w=d(68257),g=d(20402),k=d(53501),A=d(38303),v=d(91851),K=d(42861);const S=new Uint8Array([161,35,3,33,0]),P=new Uint8Array([48,83,2,1,1,48,5,6,3,43,101,112,4,34,4,32]),U=32,E=64,F=32,j=P.length;var q=d(27054),T=d(21256),C=d(35495),D=d(98805);const I=new Uint8Array,z={ecdsa:b.y,ed25519:i.U,ethereum:b.y,sr25519:o.F},$={ecdsa:new Uint8Array([2]),ed25519:new Uint8Array([0]),ethereum:new Uint8Array([2]),sr25519:new Uint8Array([1])},L={ecdsa:(e,a)=>(0,l.y)(e,a,"blake2"),ed25519:p.P,ethereum:(e,a)=>(0,l.y)(e,a,"keccak"),sr25519:u.x},V={ecdsa:e=>e.length>32?(0,h.b)(e):e,ed25519:e=>e,ethereum:e=>20===e.length?e:(0,y.ij)((0,m.o)(e)),sr25519:e=>e};function Y(e){return!e||(0,t.S)(e)}function G(e,a,d){return(0,h.b)((0,c.e)(a||"",d||"",e))}function N({toSS58:e,type:a},{publicKey:d,secretKey:t},b={},i=null,o){const l=(e,c)=>{const r=function(e,a,d){const t=Array.isArray(d)||void 0===d?d:[d],c=(0,K.g)(a,e,t),r=c.subarray(0,P.length);if(!(0,f.S)(r,P))throw new Error("Invalid Pkcs8 header found in body");let n=c.subarray(j,j+E),s=j+E,b=c.subarray(s,s+S.length);if(!(0,f.S)(b,S)&&(s=j+F,n=c.subarray(j,s),b=c.subarray(s,s+S.length),!(0,f.S)(b,S)))throw new Error("Invalid Pkcs8 divider found in body");const i=s+S.length;return{publicKey:c.subarray(i,i+U),secretKey:n}}(e,c||i,o);if(64===r.secretKey.length)d=r.publicKey,t=r.secretKey;else{const e=z[a](r.secretKey);d=e.publicKey,t=e.secretKey}},p=e=>(Y(t)&&i&&l(e,i),i=function({publicKey:e,secretKey:a},d){if(!a)throw new Error("Expected a valid secretKey to be passed to encode");const t=(0,c.e)(P,a,S,e);if(!d)return t;const{params:r,password:n,salt:s}=(0,q.z)(d),{encrypted:f,nonce:b}=(0,T.V)(t,n.subarray(0,32));return(0,c.e)((0,C.e)(s,r),b,f)}({publicKey:d,secretKey:t},e),o=void 0,i),u=()=>{const t=V[a](d);return"ethereum"===a?(0,_.K)(t):e(t)};return{get address(){return u()},get addressRaw(){const e=V[a](d);return"ethereum"===a?e.slice(-20):e},get isLocked(){return Y(t)},get meta(){return b},get publicKey(){return d},get type(){return a},decodePkcs8:l,derive:(c,r)=>{if("ethereum"===a)throw new Error("Unable to derive on this keypair");if(Y(t))throw new Error("Cannot derive on a locked keypair");const{path:n}=(0,x.c)(c),s=(0,w.p)({publicKey:d,secretKey:t},n,a);return N({toSS58:e,type:a},s,r,null)},encodePkcs8:e=>p(e),lock:()=>{t=new Uint8Array},setMeta:e=>{b=(0,r.Z)({},b,e)},sign:(e,r={})=>{if(Y(t))throw new Error("Cannot sign with a locked key pair");return(0,c.e)(r.withType?$[a]:I,L[a]((0,n.Y)(e),{publicKey:d,secretKey:t}))},toJson:e=>{const t=["ecdsa","ethereum"].includes(a)?20===d.length?(0,s.c)(d):(0,s.c)((0,g.R)(d)):u();return function(e,{address:a,meta:d},t,c){return(0,r.Z)((0,D.T)(t,["pkcs8",e],c),{address:a,meta:d})}(a,{address:t,meta:b},p(e),!!e)},unlock:e=>l(e),verify:(e,d,t)=>(0,k.D)(e,d,V[a]((0,n.Y)(t))).isValid,vrfSign:(e,r,s)=>{if(Y(t))throw new Error("Cannot sign with a locked key pair");if("sr25519"===a)return(0,A.g)(e,{secretKey:t},r,s);const f=L[a]((0,n.Y)(e),{publicKey:d,secretKey:t});return(0,c.e)(G(f,r,s),f)},vrfVerify:(e,t,r,s,b)=>"sr25519"===a?(0,v.e)(e,t,d,s,b):(0,k.D)(e,(0,c.e)($[a],t.subarray(32)),V[a]((0,n.Y)(r))).isValid&&(0,f.S)(t.subarray(0,32),G(t.subarray(32),s,b))}}},73917:(e,a,d)=>{d.d(a,{oK:()=>F});var t=d(48533),c=d(92580),r=d(74076),n=d(64021),s=d(36916),f=d(50528),b=d(46359),i=d(94175),o=d(41444),l=d(6851),p=d(2731),u=d(73547),h=d(8666),y=d(68257),m=d(73493),_=d(90107),x=d(31667),w=d(48358),g=d(55858),k=d(46610);class A{__internal__map={};add(e){return this.__internal__map[(0,i.m)(e.address).toString()]=e,e}all(){return Object.values(this.__internal__map)}get(e){const a=this.__internal__map[(0,i.m)(e).toString()];if(!a)throw new Error(`Unable to retrieve keypair '${(0,w.U)(e)||(0,r.vq)(e)?(0,g.c)((0,k.Y)(e)):e}'`);return a}remove(e){delete this.__internal__map[(0,i.m)(e).toString()]}}const v={ecdsa:e=>(0,s.y)(e),ed25519:e=>(0,f.U)(e),ethereum:e=>(0,s.y)(e),sr25519:e=>(0,b.F)(e)};function K({publicKey:e}){return e}class S{__internal__pairs;__internal__type;__internal__ss58;decodeAddress=i.m;constructor(e={}){if(e.type=e.type||"ed25519",!["ecdsa","ethereum","ed25519","sr25519"].includes(e.type||"undefined"))throw new Error(`Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '${e.type||"unknown"}`);this.__internal__pairs=new A,this.__internal__ss58=e.ss58Format,this.__internal__type=e.type}get pairs(){return this.getPairs()}get publicKeys(){return this.getPublicKeys()}get type(){return this.__internal__type}addPair(e){return this.__internal__pairs.add(e)}addFromAddress(e,a={},d=null,t=this.type,r,n){const s=this.decodeAddress(e,r);return this.addPair((0,c.s)({toSS58:this.encodeAddress,type:t},{publicKey:s,secretKey:new Uint8Array},a,d,n))}addFromJson(e,a){return this.addPair(this.createFromJson(e,a))}addFromMnemonic(e,a={},d=this.type){return this.addFromUri(e,a,d)}addFromPair(e,a={},d=this.type){return this.addPair(this.createFromPair(e,a,d))}addFromSeed(e,a={},d=this.type){return this.addPair((0,c.s)({toSS58:this.encodeAddress,type:d},v[d](e),a,null))}addFromUri(e,a={},d=this.type){return this.addPair(this.createFromUri(e,a,d))}createFromJson({address:e,encoded:a,encoding:{content:d,type:n,version:s},meta:f},b){if("3"===s&&"pkcs8"!==d[0])throw new Error(`Unable to decode non-pkcs8 type, [${d.join(",")}] found}`);const i="0"!==s&&Array.isArray(d)?d[1]:this.type,l=Array.isArray(n)?n:[n];if(!["ed25519","sr25519","ecdsa","ethereum"].includes(i))throw new Error(`Unknown crypto type ${i}`);const p=(0,r.vq)(e)?(0,t.G)(e):this.decodeAddress(e,b),u=(0,r.vq)(a)?(0,t.G)(a):(0,o.tV)(a);return(0,c.s)({toSS58:this.encodeAddress,type:i},{publicKey:p,secretKey:new Uint8Array},f,u,l)}createFromPair(e,a={},d=this.type){return(0,c.s)({toSS58:this.encodeAddress,type:d},e,a,null)}createFromUri(e,a={},d=this.type){const s=e.startsWith("//")?`${x.g}${e}`:e,{derivePath:f,password:b,path:i,phrase:o}=(0,l.Q)(s);let m;const _=(0,r.vq)(o,256);if(_)m=(0,t.G)(o);else{const e=o.split(" ");if([12,15,18,21,24].includes(e.length))m="ethereum"===d?(0,p.r)(o,"",!1,64):(0,u.S)(o,b);else{if(o.length>32)throw new Error("specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes");m=(0,n.d)(o.padEnd(32))}}const w="ethereum"===d?_?v[d](m):(0,h.d)(m,f.substring(1)):(0,y.p)(v[d](m),i,d);return(0,c.s)({toSS58:this.encodeAddress,type:d},w,a,null)}encodeAddress=(e,a)=>"ethereum"===this.type?(0,m.K)(e):(0,_.m)(e,a??this.__internal__ss58);getPair(e){return this.__internal__pairs.get(e)}getPairs(){return this.__internal__pairs.all()}getPublicKeys(){return this.__internal__pairs.all().map(K)}removePair(e){this.__internal__pairs.remove(e)}setSS58Format(e){this.__internal__ss58=e}toJson(e,a){return this.__internal__pairs.get(e).toJson(a)}}const P=[{p:"0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",s:"0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011",seed:"Alice",type:"sr25519"},{p:"0xbe5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f",s:"0xe8da6c9d810e020f5e3c7f5af2dea314cbeaa0d72bc6421e92c0808a0c584a6046ab28e97c3ffc77fe12b5a4d37e8cd4afbfebbf2391ffc7cb07c0f38c023efd",seed:"Alice//stash",type:"sr25519"},{p:"0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48",s:"0x081ff694633e255136bdb456c20a5fc8fed21f8b964c11bb17ff534ce80ebd5941ae88f85d0c1bfc37be41c904e1dfc01de8c8067b0d6d5df25dd1ac0894a325",seed:"Bob",type:"sr25519"},{p:"0xfe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e",s:"0xc006507cdfc267a21532394c49ca9b754ca71de21e15a1cdf807c7ceab6d0b6c3ed408d9d35311540dcd54931933e67cf1ea10d46f75408f82b789d9bd212fde",seed:"Bob//stash",type:"sr25519"},{p:"0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22",s:"0xa8f2d83016052e5d6d77b2f6fd5d59418922a09024cda701b3c34369ec43a7668faf12ff39cd4e5d92bb773972f41a7a5279ebc2ed92264bed8f47d344f8f18c",seed:"Charlie",type:"sr25519"},{p:"0x306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc20",s:"0x20e05482ca4677e0edbc58ae9a3a59f6ed3b1a9484ba17e64d6fe8688b2b7b5d108c4487b9323b98b11fe36cb301b084e920f7b7895536809a6d62a451b25568",seed:"Dave",type:"sr25519"},{p:"0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e",s:"0x683576abfd5dc35273e4264c23095a1bf21c14517bece57c7f0cc5c0ed4ce06a3dbf386b7828f348abe15d76973a72009e6ef86a5c91db2990cb36bb657c6587",seed:"Eve",type:"sr25519"},{p:"0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c",s:"0xb835c20f450079cf4f513900ae9faf8df06ad86c681884122c752a4b2bf74d4303e4f21bc6cc62bb4eeed5a9cce642c25e2d2ac1464093b50f6196d78e3a7426",seed:"Ferdie",type:"sr25519"}],U=[{name:"Alith",p:"0x02509540919faacf9ab52146c9aa40db68172d83777250b28e4679176e49ccdd9f",s:"0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133",type:"ethereum"},{name:"Baltathar",p:"0x033bc19e36ff1673910575b6727a974a9abd80c9a875d41ab3e2648dbfb9e4b518",s:"0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b",type:"ethereum"},{name:"Charleth",p:"0x0234637bdc0e89b5d46543bcbf8edff329d2702bc995e27e9af4b1ba009a3c2a5e",s:"0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b",type:"ethereum"},{name:"Dorothy",p:"0x02a00d60b2b408c2a14c5d70cdd2c205db8985ef737a7e55ad20ea32cc9e7c417c",s:"0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68",type:"ethereum"},{name:"Ethan",p:"0x025cdc005b752651cd3f728fb9192182acb3a9c89e19072cbd5b03f3ee1f1b3ffa",s:"0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4",type:"ethereum"},{name:"Faith",p:"0x037964b6c9d546da4646ada28a99e34acaa1d14e7aba861a9055f9bd200c8abf74",s:"0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df",type:"ethereum"}];function E(e,a){if(!e&&!a)throw new Error("Testing pair should have either a name or a seed");return{isTesting:!0,name:e||a?.replace("//","_").toLowerCase()}}function F(e={},a=!0){const d=new S(e),r="ethereum"===e.type?U:P;for(const{name:n,p:s,s:f,seed:b,type:i}of r){const r=E(n,b);(a||n||!b?d.addPair((0,c.s)({toSS58:d.encodeAddress,type:i},{publicKey:(0,t.G)(s),secretKey:(0,t.G)(f)},r)):d.addFromUri(b,r,e.type)).lock=()=>{}}return d}},70392:(e,a,d)=>{d.d(a,{A:()=>t});const t={acala:["0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c"],ajuna:["0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee"],"aleph-node":["0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e"],astar:["0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6"],basilisk:["0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755"],bifrost:["0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b"],"bifrost-kusama":["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],bittensor:["0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03"],centrifuge:["0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82","0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],cere:["0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c"],composable:["0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d"],darwinia:["0xe71578b37a7c799b0ab4ee87ffa6f059a6b98f71f06fb8c84a8d88013a548ad6"],"dock-mainnet":["0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae","0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],edgeware:["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],enjin:["0xd8761d3c88f26dc12875c00d3165f7d67243d56fc85b4cf19937601a7916e5a9"],equilibrium:["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],genshiro:["0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243"],hydradx:["0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d","0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc","0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9","0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047","0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"],"interlay-parachain":["0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72"],karura:["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],khala:["0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d"],kulupu:["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],kusama:["0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe","0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636","0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"],matrixchain:["0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615"],nodle:["0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21"],origintrail:["0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174"],p3d:["0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66"],parallel:["0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97"],pendulum:["0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86"],phala:["0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736"],picasso:["0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc","0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c"],polkadex:["0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c"],polkadot:["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],polymesh:["0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063"],quartz:["0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554"],rococo:["0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e","0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897","0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770","0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff","0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a","0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9","0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779","0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215","0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9","0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147","0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd","0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299"],sora:["0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5"],stafi:["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],statemine:["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],statemint:["0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f"],subsocial:["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"],ternoa:["0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e"],unique:["0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31"],vtb:["0x286bc8414c7000ce1d6ee6a834e29a54c1784814b76243eb77ed0b2c5573c60f","0x7483b89572fb2bd687c7b9a93b242d0b237f9aba463aba07ec24503931038aaa"],westend:["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"],xxnetwork:["0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa"],zeitgeist:["0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060"]}},7404:(e,a,d)=>{d.d(a,{Y:()=>t});const t={acala:787,ajuna:354,"aleph-node":643,astar:810,bifrost:788,"bifrost-kusama":788,centrifuge:747,composable:354,darwinia:354,"dock-mainnet":594,edgeware:523,enjin:1155,equilibrium:99999997,genshiro:99999996,hydradx:354,"interlay-parachain":354,karura:686,khala:434,kusama:434,matrixchain:1155,nodle:1003,origintrail:354,parallel:354,pendulum:354,phala:354,picasso:434,polkadex:799,polkadot:354,polymesh:595,quartz:631,sora:617,stafi:907,statemine:434,statemint:354,ternoa:995,unique:661,vtb:694,xxnetwork:1955,zeitgeist:354}},72570:(e,a,d)=>{d.d(a,{FA:()=>i,oc:()=>o,uG:()=>l});var t=d(18281),c=d(7404),r=d(70392);const n={centrifuge:"polkadot",kusama:"polkadot",polkadot:"polkadot",sora:"polkadot",statemine:"polkadot",statemint:"polkadot",westmint:"polkadot"},s={"":!0,"cess-testnet":!0,"dock-testnet":!0,jupiter:!0,"mathchain-testnet":!0,p3dt:!0,subspace_testnet:!0,"zero-alphaville":!0},f=[0,2,42],b=["testnet"],i=t.Z.map((function(e){const a=e.network||"",d=a.replace(/_/g,"-").split("-"),t=e;return t.slip44=c.Y[a],t.hasLedgerSupport=!!t.slip44,t.genesisHash=r.A[a]||[],t.icon=n[a]||"substrate",t.isTestnet=!!s[a]||b.includes(d[d.length-1]),t.isIgnored=t.isTestnet||!(e.standardAccount&&e.decimals?.length&&e.symbols?.length)&&42!==e.prefix,t})),o=i.filter((function(e){return!e.isIgnored&&!!e.network})).sort((function(e,a){const d=f.includes(e.prefix);return d===f.includes(a.prefix)?d?0:e.displayName.localeCompare(a.displayName):d?-1:1})),l=o.filter((function({genesisHash:e,prefix:a}){return!!e.length||42===a}))},91087:(e,a,d)=>{d.d(a,{b:()=>t});const t={name:"@polkadot/networks",path:new URL("file:///workspaces/apps/node_modules/@polkadot/networks/packageInfo.js").pathname.substring(0,new URL("file:///workspaces/apps/node_modules/@polkadot/networks/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"12.6.2"}},2727:(e,a,d)=>{d.d(a,{fF:()=>i});var t=d(65417),c=d(94175),r=d(95551);const n="https://polkadot.js.org/phishing/address.json",s=27e5,f={end:0,list:{},u8a:[]};async function b(e=!0){const a=Date.now();if(e&&a<f.end)return f;const d=await(t=n,async function(e,a=2e3){const d=new AbortController;let t=!1;const c=setTimeout((()=>{console.log(`Timeout on ${e}`),t=!0,d.abort()}),a);try{const a=await(0,r.h)(e,{signal:d.signal});return clearTimeout(c),a}catch(e){throw t||clearTimeout(c),e}}(t,undefined).then((e=>e.json())));var t;return f.end=a+s,f.list=d,f.u8a=Object.entries(d).map((([e,a])=>[e,a.map((e=>(0,c.m)(e)))])),f}async function i(e,a=!0){try{const d=(0,c.m)(e),r=(await b(a)).u8a.find((([,e])=>e.some((e=>(0,t.S)(e,d)))));return r?.[0]||null}catch{return null}}}}]);