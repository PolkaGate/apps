"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[5609],{2281:r=>{var e={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};e.localCName=e.generateIdentifier(),e.splitLines=function(r){return r.trim().split("\n").map((function(r){return r.trim()}))},e.splitSections=function(r){return r.split("\nm=").map((function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"}))},e.getDescription=function(r){var t=e.splitSections(r);return t&&t[0]},e.getMediaSections=function(r){var t=e.splitSections(r);return t.shift(),t},e.matchPrefix=function(r,t){return e.splitLines(r).filter((function(r){return 0===r.indexOf(t)}))},e.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},a=8;a<e.length;a+=2)switch(e[a]){case"raddr":t.relatedAddress=e[a+1];break;case"rport":t.relatedPort=parseInt(e[a+1],10);break;case"tcptype":t.tcpType=e[a+1];break;case"ufrag":t.ufrag=e[a+1],t.usernameFragment=e[a+1];break;default:t[e[a]]=e[a+1]}return t},e.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},e.parseIceOptions=function(r){return r.substr(14).split(" ")},e.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},e.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},e.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},e.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},e.parseFmtp=function(r){for(var e,t={},a=r.substr(r.indexOf(" ")+1).split(";"),n=0;n<a.length;n++)t[(e=a[n].trim().split("="))[0].trim()]=e[1];return t},e.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var a=[];Object.keys(r.parameters).forEach((function(e){r.parameters[e]?a.push(e+"="+r.parameters[e]):a.push(e)})),e+="a=fmtp:"+t+" "+a.join(";")+"\r\n"}return e},e.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},e.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach((function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"})),e},e.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},a=r.indexOf(":",e);return a>-1?(t.attribute=r.substr(e+1,a-e-1),t.value=r.substr(a+1)):t.attribute=r.substr(e+1),t},e.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map((function(r){return parseInt(r,10)}))}},e.getMid=function(r){var t=e.matchPrefix(r,"a=mid:")[0];if(t)return t.substr(6)},e.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},e.getDtlsParameters=function(r,t){return{role:"auto",fingerprints:e.matchPrefix(r+t,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach((function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"})),t},e.parseCryptoLine=function(r){var e=r.substr(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}},e.writeCryptoLine=function(r){return"a=crypto:"+r.tag+" "+r.cryptoSuite+" "+("object"==typeof r.keyParams?e.writeCryptoKeyParams(r.keyParams):r.keyParams)+(r.sessionParams?" "+r.sessionParams.join(" "):"")+"\r\n"},e.parseCryptoKeyParams=function(r){if(0!==r.indexOf("inline:"))return null;var e=r.substr(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(r){return r.keyMethod+":"+r.keySalt+(r.lifeTime?"|"+r.lifeTime:"")+(r.mkiValue&&r.mkiLength?"|"+r.mkiValue+":"+r.mkiLength:"")},e.getCryptoParameters=function(r,t){return e.matchPrefix(r+t,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(r,t){var a=e.matchPrefix(r+t,"a=ice-ufrag:")[0],n=e.matchPrefix(r+t,"a=ice-pwd:")[0];return a&&n?{usernameFragment:a.substr(12),password:n.substr(10)}:null},e.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},e.parseRtpParameters=function(r){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},a=e.splitLines(r)[0].split(" "),n=3;n<a.length;n++){var s=a[n],i=e.matchPrefix(r,"a=rtpmap:"+s+" ")[0];if(i){var p=e.parseRtpMap(i),c=e.matchPrefix(r,"a=fmtp:"+s+" ");switch(p.parameters=c.length?e.parseFmtp(c[0]):{},p.rtcpFeedback=e.matchPrefix(r,"a=rtcp-fb:"+s+" ").map(e.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return e.matchPrefix(r,"a=extmap:").forEach((function(r){t.headerExtensions.push(e.parseExtmap(r))})),t},e.writeRtpDescription=function(r,t){var a="";a+="m="+r+" ",a+=t.codecs.length>0?"9":"0",a+=" UDP/TLS/RTP/SAVPF ",a+=t.codecs.map((function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType})).join(" ")+"\r\n",a+="c=IN IP4 0.0.0.0\r\n",a+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach((function(r){a+=e.writeRtpMap(r),a+=e.writeFmtp(r),a+=e.writeRtcpFb(r)}));var n=0;return t.codecs.forEach((function(r){r.maxptime>n&&(n=r.maxptime)})),n>0&&(a+="a=maxptime:"+n+"\r\n"),a+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach((function(r){a+=e.writeExtmap(r)})),a},e.parseRtpEncodingParameters=function(r){var t,a=[],n=e.parseRtpParameters(r),s=-1!==n.fecMechanisms.indexOf("RED"),i=-1!==n.fecMechanisms.indexOf("ULPFEC"),p=e.matchPrefix(r,"a=ssrc:").map((function(r){return e.parseSsrcMedia(r)})).filter((function(r){return"cname"===r.attribute})),c=p.length>0&&p[0].ssrc,o=e.matchPrefix(r,"a=ssrc-group:FID").map((function(r){return r.substr(17).split(" ").map((function(r){return parseInt(r,10)}))}));o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),n.codecs.forEach((function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),a.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},a.push(e))}})),0===a.length&&c&&a.push({ssrc:c});var u=e.matchPrefix(r,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,a.forEach((function(r){r.maxBitrate=u}))),a},e.parseRtcpParameters=function(r){var t={},a=e.matchPrefix(r,"a=ssrc:").map((function(r){return e.parseSsrcMedia(r)})).filter((function(r){return"cname"===r.attribute}))[0];a&&(t.cname=a.value,t.ssrc=a.ssrc);var n=e.matchPrefix(r,"a=rtcp-rsize");t.reducedSize=n.length>0,t.compound=0===n.length;var s=e.matchPrefix(r,"a=rtcp-mux");return t.mux=s.length>0,t},e.parseMsid=function(r){var t,a=e.matchPrefix(r,"a=msid:");if(1===a.length)return{stream:(t=a[0].substr(7).split(" "))[0],track:t[1]};var n=e.matchPrefix(r,"a=ssrc:").map((function(r){return e.parseSsrcMedia(r)})).filter((function(r){return"msid"===r.attribute}));return n.length>0?{stream:(t=n[0].value.split(" "))[0],track:t[1]}:void 0},e.parseSctpDescription=function(r){var t,a=e.parseMLine(r),n=e.matchPrefix(r,"a=max-message-size:");n.length>0&&(t=parseInt(n[0].substr(19),10)),isNaN(t)&&(t=65536);var s=e.matchPrefix(r,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:a.fmt,maxMessageSize:t};if(e.matchPrefix(r,"a=sctpmap:").length>0){var i=e.matchPrefix(r,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},e.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,21)},e.writeSessionBoilerplate=function(r,t,a){var n=void 0!==t?t:2;return"v=0\r\no="+(a||"thisisadapterortc")+" "+(r||e.generateSessionId())+" "+n+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},e.writeMediaSection=function(r,t,a,n){var s=e.writeRtpDescription(r.kind,t);if(s+=e.writeIceParameters(r.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(r.dtlsTransport.getLocalParameters(),"offer"===a?"actpass":"active"),s+="a=mid:"+r.mid+"\r\n",r.direction?s+="a="+r.direction+"\r\n":r.rtpSender&&r.rtpReceiver?s+="a=sendrecv\r\n":r.rtpSender?s+="a=sendonly\r\n":r.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",r.rtpSender){var i="msid:"+n.id+" "+r.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+r.sendEncodingParameters[0].ssrc+" "+i,r.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+r.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+r.sendEncodingParameters[0].ssrc+" "+r.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+r.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",r.rtpSender&&r.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+r.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s},e.getDirection=function(r,t){for(var a=e.splitLines(r),n=0;n<a.length;n++)switch(a[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return a[n].substr(2)}return t?e.getDirection(t):"sendrecv"},e.getKind=function(r){return e.splitLines(r)[0].split(" ")[0].substr(2)},e.isRejected=function(r){return"0"===r.split(" ",2)[1]},e.parseMLine=function(r){var t=e.splitLines(r)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},e.parseOLine=function(r){var t=e.matchPrefix(r,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},e.isValidSDP=function(r){if("string"!=typeof r||0===r.length)return!1;for(var t=e.splitLines(r),a=0;a<t.length;a++)if(t[a].length<2||"="!==t[a].charAt(1))return!1;return!0},r.exports=e}}]);