import{a as y}from"./js.cookie-Cz0CWeBA.js";import{C as te,a as oe,p as ne,S as ie,b as re,c as se,d as ae,e as de,f as le}from"./sharedFrameEvents-0qZ2yOho.js";import{i as we}from"./colorHelper-DkkSNPxc.js";import{g as ce}from"./_commonjsHelpers-BosuxZz1.js";import"./index-DN3rM4CW.js";const ue=`
:root {
  --b-100: #F2F3F7;
  --s-700: #37546D;
}

.woot-widget-holder {
  box-shadow: 0 5px 40px rgba(0, 0, 0, .16);
  opacity: 1;
  will-change: transform, opacity;
  transform: translateY(0);
  overflow: hidden !important;
  position: fixed !important;
  transition: opacity 0.2s linear, transform 0.25s linear;
  z-index: 2147483000 !important;
}

.woot-widget-holder.woot-widget-holder--flat {
  box-shadow: none;
  border-radius: 0;
  border: 1px solid var(--b-100);
}

.woot-widget-holder iframe {
  border: 0;
  color-scheme: normal;
  height: 100% !important;
  width: 100% !important;
  max-height: 100vh !important;
}

.woot-widget-holder.has-unread-view {
  border-radius: 0 !important;
  min-height: 80px !important;
  height: auto;
  bottom: 94px;
  box-shadow: none !important;
  border: 0;
}

.woot-widget-bubble {
  background: #1f93ff;
  border-radius: 100px;
  border-width: 0px;
  bottom: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  cursor: pointer;
  height: 64px;
  padding: 0px;
  position: fixed;
  user-select: none;
  width: 64px;
  z-index: 2147483000 !important;
  overflow: hidden;
}

.woot-widget-bubble.woot-widget-bubble--flat {
  border-radius: 0;
}

.woot-widget-holder.woot-widget-holder--flat {
  bottom: 90px;
}

.woot-widget-bubble.woot-widget-bubble--flat {
  height: 56px;
  width: 56px;
}

.woot-widget-bubble.woot-widget-bubble--flat svg {
  margin: 16px;
}

.woot-widget-bubble.woot-widget-bubble--flat.woot--close::before,
.woot-widget-bubble.woot-widget-bubble--flat.woot--close::after {
  left: 28px;
  top: 16px;
}

.woot-widget-bubble.unread-notification::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ff4040;
  border-radius: 100%;
  top: 0px;
  right: 0px;
  border: 2px solid #ffffff;
  transition: background 0.2s ease;
}

.woot-widget-bubble.woot-widget--expanded {
  bottom: 24px;
  display: flex;
  height: 48px !important;
  width: auto !important;
  align-items: center;
}

.woot-widget-bubble.woot-widget--expanded div {
  align-items: center;
  color: #fff;
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  padding-right: 20px;
  width: auto !important;
}

.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble-color--lighter div{
  color: var(--s-700);
}

.woot-widget-bubble.woot-widget--expanded svg {
  height: 20px;
  margin: 14px 8px 14px 16px;
  width: 20px;
}

.woot-widget-bubble.woot-elements--left {
  left: 20px;
}

.woot-widget-bubble.woot-elements--right {
  right: 20px;
}

.woot-widget-bubble:hover {
  background: #1f93ff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
}

.woot-widget-bubble svg {
  all: revert;
  height: 24px;
  margin: 20px;
  width: 24px;
}

.woot-widget-bubble.woot-widget-bubble-color--lighter path{
  fill: var(--s-700);
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder.woot-elements--left {
    left: 20px;
 }
  .woot-widget-holder.woot-elements--right {
    right: 20px;
 }
}

.woot--close:hover {
  opacity: 1;
}

.woot--close::before, .woot--close::after {
  background-color: #fff;
  content: ' ';
  display: inline;
  height: 24px;
  left: 32px;
  position: absolute;
  top: 20px;
  width: 2px;
}

.woot-widget-bubble-color--lighter.woot--close::before, .woot-widget-bubble-color--lighter.woot--close::after {
  background-color: var(--s-700);
}

.woot--close::before {
  transform: rotate(45deg);
}

.woot--close::after {
  transform: rotate(-45deg);
}

.woot--hide {
  bottom: -100vh !important;
  top: unset !important;
  opacity: 0;
  visibility: hidden !important;
  z-index: -1 !important;
}

.woot-widget--without-bubble {
  bottom: 20px !important;
}
.woot-widget-holder.woot--hide{
  transform: translateY(40px);
}
.woot-widget-bubble.woot--close {
  transform: translateX(0px) scale(1) rotate(0deg);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot--close.woot--hide {
  transform: translateX(8px) scale(.75) rotate(45deg);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

.woot-widget-bubble {
  transform-origin: center;
  will-change: transform, opacity;
  transform: translateX(0) scale(1) rotate(0deg);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot--hide {
  transform: translateX(8px) scale(.75) rotate(-30deg);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

.woot-widget-bubble.woot-widget--expanded {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget--expanded.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}
.woot-widget-bubble.woot-widget-bubble--flat.woot--close {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 10ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget-bubble--flat.woot--close.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}
.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble--flat {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble--flat.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

@media only screen and (max-width: 667px) {
  .woot-widget-holder {
    height: 100%;
    right: 0;
    top: 0;
    width: 100%;
 }

 .woot-widget-holder iframe {
    min-height: 100% !important;
  }


 .woot-widget-holder.has-unread-view {
    height: auto;
    right: 0;
    width: auto;
    bottom: 0;
    top: auto;
    max-height: 100vh;
    padding: 0 8px;
  }

  .woot-widget-holder.has-unread-view iframe {
    min-height: unset !important;
  }

 .woot-widget-holder.has-unread-view.woot-elements--left {
    left: 0;
  }

  .woot-widget-bubble.woot--close {
    bottom: 60px;
    opacity: 0;
    visibility: hidden !important;
    z-index: -1 !important;
  }
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder {
    border-radius: 16px;
    bottom: 104px;
    height: calc(90% - 64px - 20px);
    max-height: 640px !important;
    min-height: 250px !important;
    width: 400px !important;
 }
}

.woot-hidden {
  display: none !important;
}
`,ge=()=>{const e=document.createElement("style");e.innerHTML=`${ue}`,e.id="cw-widget-styles",e.dataset.turboPermanent=!0,document.body.appendChild(e)},T=(e,o)=>{const t=document.getElementById(e),c=o.querySelector(`#${e}`);t&&!c&&o.appendChild(t)},_=e=>{T("cw-bubble-holder",e),T("cw-widget-holder",e),T("cw-widget-styles",e)},C=(e,o)=>{e.classList.add(...o.split(" "))},M=(e,o)=>{e.classList.toggle(o)},$=(e,o)=>{e.classList.remove(...o.split(" "))},O=({referrerURL:e,referrerHost:o})=>{u.events.onLocationChange({referrerURL:e,referrerHost:o})},be=()=>{let e=document.location.href;const o=document.location.host,t={childList:!0,subtree:!0};O({referrerURL:e,referrerHost:o});const c=document.querySelector("body");new MutationObserver(n=>{n.forEach(()=>{e!==document.location.href&&(e=document.location.href,O({referrerURL:e,referrerHost:o}))})}).observe(c,t)},F=["standard","expanded_bubble"],D=["standard","flat"],N=["light","auto","dark"],V=e=>F.includes(e)?e:F[0],q=e=>V(e)===F[1],he=e=>D.includes(e)?e:D[0],H=e=>e==="flat",I=e=>N.includes(e)?e:N[0],me=({eventName:e,data:o=null})=>{let t;return typeof window.CustomEvent=="function"?t=new CustomEvent(e,{detail:o}):(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!1,!1,o)),t},S=({eventName:e,data:o})=>{const t=me({eventName:e,data:o});window.dispatchEvent(t)},pe="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z",K=document.getElementsByTagName("body")[0],x=document.createElement("div"),v=document.createElement("div"),k=document.createElement("button"),B=document.createElement("button");document.createElement("span");const fe=e=>{if(q(window.$chatwoot.type)){const o=document.getElementById("woot-widget--expanded__text");o.innerText=e}},xe=({className:e,path:o,target:t})=>{let c=`${e} woot-elements--${window.$chatwoot.position}`;const w=document.createElementNS("http://www.w3.org/2000/svg","svg");w.setAttributeNS(null,"id","woot-widget-bubble-icon"),w.setAttributeNS(null,"width","24"),w.setAttributeNS(null,"height","24"),w.setAttributeNS(null,"viewBox","0 0 240 240"),w.setAttributeNS(null,"fill","none"),w.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=document.createElementNS("http://www.w3.org/2000/svg","path");if(n.setAttributeNS(null,"d",o),n.setAttributeNS(null,"fill","#FFFFFF"),w.appendChild(n),t.appendChild(w),q(window.$chatwoot.type)){const g=document.createElement("div");g.id="woot-widget--expanded__text",g.innerText="",t.appendChild(g),c+=" woot-widget--expanded"}return t.className=c,t.title="Open chat window",t},ve=e=>{e&&C(v,"woot-hidden"),C(v,"woot--bubble-holder"),v.id="cw-bubble-holder",v.dataset.turboPermanent=!0,K.appendChild(v)},ye=e=>{u.events.onBubbleToggle(e),e?S({eventName:te}):(S({eventName:oe}),k.focus())},E=(e={})=>{const{toggleValue:o}=e,{isOpen:t}=window.$chatwoot;if(t===o)return;const c=o===void 0?!t:o;window.$chatwoot.isOpen=c,M(k,"woot--hide"),M(B,"woot--hide"),M(x,"woot--hide"),ye(c)},Ce=()=>{v.addEventListener("click",E)},Se=()=>{const e=document.querySelector(".woot-widget-holder");C(e,"has-unread-view")},R=()=>{const e=document.querySelector(".woot-widget-holder");$(e,"has-unread-view")};var X={exports:{}},Y={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(t,c){return t<<c|t>>>32-c},rotr:function(t,c){return t<<32-c|t>>>c},endian:function(t){if(t.constructor==Number)return o.rotl(t,8)&16711935|o.rotl(t,24)&4278255360;for(var c=0;c<t.length;c++)t[c]=o.endian(t[c]);return t},randomBytes:function(t){for(var c=[];t>0;t--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(t){for(var c=[],w=0,n=0;w<t.length;w++,n+=8)c[n>>>5]|=t[w]<<24-n%32;return c},wordsToBytes:function(t){for(var c=[],w=0;w<t.length*32;w+=8)c.push(t[w>>>5]>>>24-w%32&255);return c},bytesToHex:function(t){for(var c=[],w=0;w<t.length;w++)c.push((t[w]>>>4).toString(16)),c.push((t[w]&15).toString(16));return c.join("")},hexToBytes:function(t){for(var c=[],w=0;w<t.length;w+=2)c.push(parseInt(t.substr(w,2),16));return c},bytesToBase64:function(t){for(var c=[],w=0;w<t.length;w+=3)for(var n=t[w]<<16|t[w+1]<<8|t[w+2],g=0;g<4;g++)w*8+g*6<=t.length*8?c.push(e.charAt(n>>>6*(3-g)&63)):c.push("=");return c.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],w=0,n=0;w<t.length;n=++w%4)n!=0&&c.push((e.indexOf(t.charAt(w-1))&Math.pow(2,-2*n+8)-1)<<n*2|e.indexOf(t.charAt(w))>>>6-n*2);return c}};Y.exports=o})();var Ee=Y.exports,A={utf8:{stringToBytes:function(e){return A.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(A.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var o=[],t=0;t<e.length;t++)o.push(e.charCodeAt(t)&255);return o},bytesToString:function(e){for(var o=[],t=0;t<e.length;t++)o.push(String.fromCharCode(e[t]));return o.join("")}}},W=A;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Be=function(e){return e!=null&&(G(e)||$e(e)||!!e._isBuffer)};function G(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function $e(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&G(e.slice(0,0))}(function(){var e=Ee,o=W.utf8,t=Be,c=W.bin,w=function(n,g){n.constructor==String?g&&g.encoding==="binary"?n=c.stringToBytes(n):n=o.stringToBytes(n):t(n)?n=Array.prototype.slice.call(n,0):!Array.isArray(n)&&n.constructor!==Uint8Array&&(n=n.toString());for(var a=e.bytesToWords(n),b=n.length*8,i=1732584193,r=-271733879,d=-1732584194,s=271733878,l=0;l<a.length;l++)a[l]=(a[l]<<8|a[l]>>>24)&16711935|(a[l]<<24|a[l]>>>8)&4278255360;a[b>>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b;for(var h=w._ff,m=w._gg,p=w._hh,f=w._ii,l=0;l<a.length;l+=16){var Z=i,Q=r,j=d,ee=s;i=h(i,r,d,s,a[l+0],7,-680876936),s=h(s,i,r,d,a[l+1],12,-389564586),d=h(d,s,i,r,a[l+2],17,606105819),r=h(r,d,s,i,a[l+3],22,-1044525330),i=h(i,r,d,s,a[l+4],7,-176418897),s=h(s,i,r,d,a[l+5],12,1200080426),d=h(d,s,i,r,a[l+6],17,-1473231341),r=h(r,d,s,i,a[l+7],22,-45705983),i=h(i,r,d,s,a[l+8],7,1770035416),s=h(s,i,r,d,a[l+9],12,-1958414417),d=h(d,s,i,r,a[l+10],17,-42063),r=h(r,d,s,i,a[l+11],22,-1990404162),i=h(i,r,d,s,a[l+12],7,1804603682),s=h(s,i,r,d,a[l+13],12,-40341101),d=h(d,s,i,r,a[l+14],17,-1502002290),r=h(r,d,s,i,a[l+15],22,1236535329),i=m(i,r,d,s,a[l+1],5,-165796510),s=m(s,i,r,d,a[l+6],9,-1069501632),d=m(d,s,i,r,a[l+11],14,643717713),r=m(r,d,s,i,a[l+0],20,-373897302),i=m(i,r,d,s,a[l+5],5,-701558691),s=m(s,i,r,d,a[l+10],9,38016083),d=m(d,s,i,r,a[l+15],14,-660478335),r=m(r,d,s,i,a[l+4],20,-405537848),i=m(i,r,d,s,a[l+9],5,568446438),s=m(s,i,r,d,a[l+14],9,-1019803690),d=m(d,s,i,r,a[l+3],14,-187363961),r=m(r,d,s,i,a[l+8],20,1163531501),i=m(i,r,d,s,a[l+13],5,-1444681467),s=m(s,i,r,d,a[l+2],9,-51403784),d=m(d,s,i,r,a[l+7],14,1735328473),r=m(r,d,s,i,a[l+12],20,-1926607734),i=p(i,r,d,s,a[l+5],4,-378558),s=p(s,i,r,d,a[l+8],11,-2022574463),d=p(d,s,i,r,a[l+11],16,1839030562),r=p(r,d,s,i,a[l+14],23,-35309556),i=p(i,r,d,s,a[l+1],4,-1530992060),s=p(s,i,r,d,a[l+4],11,1272893353),d=p(d,s,i,r,a[l+7],16,-155497632),r=p(r,d,s,i,a[l+10],23,-1094730640),i=p(i,r,d,s,a[l+13],4,681279174),s=p(s,i,r,d,a[l+0],11,-358537222),d=p(d,s,i,r,a[l+3],16,-722521979),r=p(r,d,s,i,a[l+6],23,76029189),i=p(i,r,d,s,a[l+9],4,-640364487),s=p(s,i,r,d,a[l+12],11,-421815835),d=p(d,s,i,r,a[l+15],16,530742520),r=p(r,d,s,i,a[l+2],23,-995338651),i=f(i,r,d,s,a[l+0],6,-198630844),s=f(s,i,r,d,a[l+7],10,1126891415),d=f(d,s,i,r,a[l+14],15,-1416354905),r=f(r,d,s,i,a[l+5],21,-57434055),i=f(i,r,d,s,a[l+12],6,1700485571),s=f(s,i,r,d,a[l+3],10,-1894986606),d=f(d,s,i,r,a[l+10],15,-1051523),r=f(r,d,s,i,a[l+1],21,-2054922799),i=f(i,r,d,s,a[l+8],6,1873313359),s=f(s,i,r,d,a[l+15],10,-30611744),d=f(d,s,i,r,a[l+6],15,-1560198380),r=f(r,d,s,i,a[l+13],21,1309151649),i=f(i,r,d,s,a[l+4],6,-145523070),s=f(s,i,r,d,a[l+11],10,-1120210379),d=f(d,s,i,r,a[l+2],15,718787259),r=f(r,d,s,i,a[l+9],21,-343485551),i=i+Z>>>0,r=r+Q>>>0,d=d+j>>>0,s=s+ee>>>0}return e.endian([i,r,d,s])};w._ff=function(n,g,a,b,i,r,d){var s=n+(g&a|~g&b)+(i>>>0)+d;return(s<<r|s>>>32-r)+g},w._gg=function(n,g,a,b,i,r,d){var s=n+(g&b|a&~b)+(i>>>0)+d;return(s<<r|s>>>32-r)+g},w._hh=function(n,g,a,b,i,r,d){var s=n+(g^a^b)+(i>>>0)+d;return(s<<r|s>>>32-r)+g},w._ii=function(n,g,a,b,i,r,d){var s=n+(a^(g|~b))+(i>>>0)+d;return(s<<r|s>>>32-r)+g},w._blocksize=16,w._digestsize=16,X.exports=function(n,g){if(n==null)throw new Error("Illegal argument "+n);var a=e.wordsToBytes(w(n,g));return g&&g.asBytes?a:g&&g.asString?c.bytesToString(a):e.bytesToHex(a)}})();var Te=X.exports;const _e=ce(Te),J=["avatar_url","email","name"],Me=[...J,"identifier_hash"],L=()=>{const e="cw_user_",{websiteToken:o}=window.$chatwoot;return`${e}${o}`},Fe=({identifier:e="",user:o})=>`${Me.reduce((c,w)=>`${c}${w}${o[w]||""}`,"")}identifier${e}`,Ae=(...e)=>_e(Fe(...e)),Le=e=>J.reduce((o,t)=>o||!!e[t],!1),U=(e,o,{expires:t=365,baseDomain:c=void 0}={})=>{const w={expires:t,sameSite:"Lax",domain:c};typeof o=="object"&&(o=JSON.stringify(o)),y.set(e,o,w)},P=["click","touchstart","keypress","keydown"],ke=()=>{let e;try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}return e},Ue=async(e="",o)=>{const t=ke(),c=w=>{window.playAudioAlert=()=>{if(t){const n=t.createBufferSource();n.buffer=w,n.connect(t.destination),n.loop=!1,n.start()}}};if(t){const{type:w="dashboard",alertTone:n="ding"}=o||{},g=`${e}/audio/${w}/${n}.mp3`,a=new Request(g);fetch(a).then(b=>b.arrayBuffer()).then(b=>(t.decodeAudioData(b).then(c),new Promise(i=>i()))).catch(()=>{})}},z=(e,o="")=>U("cw_conversation",e,{baseDomain:o}),Oe=e=>{const o=re(new Date,1);U("cw_snooze_campaigns_till",Number(o),{expires:o,baseDomain:e})},u={getUrl({baseUrl:e,websiteToken:o}){return`${e}/widget?website_token=${o}`},createFrame:({baseUrl:e,websiteToken:o})=>{if(u.getAppFrame())return;ge();const t=document.createElement("iframe"),c=y.get("cw_conversation");let w=u.getUrl({baseUrl:e,websiteToken:o});c&&(w=`${w}&cw_conversation=${c}`),t.src=w,t.allow="camera;microphone;fullscreen;display-capture;picture-in-picture;clipboard-write;",t.id="chatwoot_live_chat_widget",t.style.visibility="hidden";let n=`woot-widget-holder woot--hide woot-elements--${window.$chatwoot.position}`;window.$chatwoot.hideMessageBubble&&(n+=" woot-widget--without-bubble"),H(window.$chatwoot.widgetStyle)&&(n+=" woot-widget-holder--flat"),C(x,n),x.id="cw-widget-holder",x.dataset.turboPermanent=!0,x.appendChild(t),K.appendChild(x),u.initPostMessageCommunication(),u.initWindowSizeListener(),u.preventDefaultScroll()},getAppFrame:()=>document.getElementById("chatwoot_live_chat_widget"),getBubbleHolder:()=>document.getElementsByClassName("woot--bubble-holder"),sendMessage:(e,o)=>{u.getAppFrame().contentWindow.postMessage(`chatwoot-widget:${JSON.stringify({event:e,...o})}`,"*")},initPostMessageCommunication:()=>{window.onmessage=e=>{if(typeof e.data!="string"||e.data.indexOf("chatwoot-widget:")!==0)return;const o=JSON.parse(e.data.replace("chatwoot-widget:",""));typeof u.events[o.event]=="function"&&u.events[o.event](o)}},initWindowSizeListener:()=>{window.addEventListener("resize",()=>u.toggleCloseButton())},preventDefaultScroll:()=>{x.addEventListener("wheel",e=>{const o=e.deltaY,t=x.scrollHeight,c=x.offsetHeight,w=x.scrollTop;(w===0&&o<0||c+w===t&&o>0)&&e.preventDefault()})},setFrameHeightToFitContent:(e,o)=>{const t=u.getAppFrame(),c=o?`${e}px`:"100%";t&&t.setAttribute("style",`height: ${c} !important`)},setupAudioListeners:()=>{const{baseUrl:e=""}=window.$chatwoot;Ue(e,{type:"widget",alertTone:"ding"}).then(()=>P.forEach(o=>{document.removeEventListener(o,u.setupAudioListeners,!1)}))},events:{loaded:e=>{z(e.config.authToken,window.$chatwoot.baseDomain),window.$chatwoot.hasLoaded=!0;const o=y.get("cw_snooze_campaigns_till");u.sendMessage("config-set",{locale:window.$chatwoot.locale,position:window.$chatwoot.position,hideMessageBubble:window.$chatwoot.hideMessageBubble,showPopoutButton:window.$chatwoot.showPopoutButton,widgetStyle:window.$chatwoot.widgetStyle,darkMode:window.$chatwoot.darkMode,showUnreadMessagesDialog:window.$chatwoot.showUnreadMessagesDialog,campaignsSnoozedTill:o}),u.onLoad({widgetColor:e.config.channelConfig.widgetColor}),u.toggleCloseButton(),window.$chatwoot.user&&u.sendMessage("set-user",window.$chatwoot.user),window.playAudioAlert=()=>{},P.forEach(t=>{document.addEventListener(t,u.setupAudioListeners,!1)}),window.$chatwoot.resetTriggered||S({eventName:de})},error:({errorType:e,data:o})=>{S({eventName:ae,data:o}),e===ie&&y.remove(L())},onEvent({eventIdentifier:e,data:o}){S({eventName:e,data:o})},setBubbleLabel(e){fe(window.$chatwoot.launcherTitle||e.label)},setAuthCookie({data:{widgetAuthToken:e}}){z(e,window.$chatwoot.baseDomain)},setCampaignReadOn(){Oe(window.$chatwoot.baseDomain)},postback(e){S({eventName:se,data:e})},toggleBubble:e=>{let o={};e==="open"?o.toggleValue=!0:e==="close"&&(o.toggleValue=!1),E(o)},popoutChatWindow:({baseUrl:e,websiteToken:o,locale:t})=>{const c=y.get("cw_conversation");window.$chatwoot.toggle("close"),ne(e,o,t,c)},closeWindow:()=>{E({toggleValue:!1}),R()},onBubbleToggle:e=>{u.sendMessage("toggle-open",{isOpen:e}),e&&u.pushEvent("webwidget.triggered")},onLocationChange:({referrerURL:e,referrerHost:o})=>{u.sendMessage("change-url",{referrerURL:e,referrerHost:o})},updateIframeHeight:e=>{const{extraHeight:o=0,isFixedHeight:t}=e;u.setFrameHeightToFitContent(o,t)},setUnreadMode:()=>{Se(),E({toggleValue:!0})},resetUnreadMode:()=>R(),handleNotificationDot:e=>{if(window.$chatwoot.hideMessageBubble)return;const o=document.querySelector(".woot-widget-bubble");e.unreadMessageCount>0&&!o.classList.contains("unread-notification")?C(o,"unread-notification"):e.unreadMessageCount===0&&$(o,"unread-notification")},closeChat:()=>{E({toggleValue:!1})},playAudio:()=>{window.playAudioAlert()}},pushEvent:e=>{u.sendMessage("push-event",{eventName:e})},onLoad:({widgetColor:e})=>{const o=u.getAppFrame();if(o.style.visibility="",o.setAttribute("id","chatwoot_live_chat_widget"),u.getBubbleHolder().length)return;ve(window.$chatwoot.hideMessageBubble),be();let t="woot-widget-bubble",c=`woot-elements--${window.$chatwoot.position} woot-widget-bubble woot--close woot--hide`;H(window.$chatwoot.widgetStyle)&&(t+=" woot-widget-bubble--flat",c+=" woot-widget-bubble--flat"),we(e)&&(t+=" woot-widget-bubble-color--lighter",c+=" woot-widget-bubble-color--lighter");const w=xe({className:t,path:pe,target:k});C(B,c),w.style.background=e,B.style.background=e,v.appendChild(w),v.appendChild(B),Ce()},toggleCloseButton:()=>{let e=!1;window.matchMedia("(max-width: 668px)").matches&&(e=!0),u.sendMessage("toggle-close-button",{isMobile:e})}},De=({baseUrl:e,websiteToken:o})=>{if(window.$chatwoot)return;document.addEventListener("turbo:before-render",n=>{n.detail.renderMethod!=="morph"&&_(n.detail.newBody)}),window.Turbolinks&&document.addEventListener("turbolinks:before-render",n=>{_(n.data.newBody)}),document.addEventListener("astro:before-swap",n=>_(n.newDocument.body));const t=window.chatwootSettings||{};let c=t.locale,w=t.baseDomain;t.useBrowserLanguage&&(c=window.navigator.language.replace("-","_")),window.$chatwoot={baseUrl:e,baseDomain:w,hasLoaded:!1,hideMessageBubble:t.hideMessageBubble||!1,isOpen:!1,position:t.position==="left"?"left":"right",websiteToken:o,locale:c,useBrowserLanguage:t.useBrowserLanguage||!1,type:V(t.type),launcherTitle:t.launcherTitle||"",showPopoutButton:t.showPopoutButton||!1,showUnreadMessagesDialog:t.showUnreadMessagesDialog??!0,widgetStyle:he(t.widgetStyle)||"standard",resetTriggered:!1,darkMode:I(t.darkMode),toggle(n){u.events.toggleBubble(n)},toggleBubbleVisibility(n){let g=document.querySelector(".woot--bubble-holder"),a=document.querySelector(".woot-widget-holder");n==="hide"?(C(a,"woot-widget--without-bubble"),C(g,"woot-hidden"),window.$chatwoot.hideMessageBubble=!0):n==="show"&&($(g,"woot-hidden"),$(a,"woot-widget--without-bubble"),window.$chatwoot.hideMessageBubble=!1),u.sendMessage(le,{hideMessageBubble:window.$chatwoot.hideMessageBubble})},popoutChatWindow(){u.events.popoutChatWindow({baseUrl:window.$chatwoot.baseUrl,websiteToken:window.$chatwoot.websiteToken,locale:c})},setUser(n,g){if(typeof n!="string"&&typeof n!="number")throw new Error("Identifier should be a string or a number");if(!Le(g))throw new Error("User object should have one of the keys [avatar_url, email, name]");const a=L(),b=y.get(a),i=Ae({identifier:n,user:g});i!==b&&(window.$chatwoot.identifier=n,window.$chatwoot.user=g,u.sendMessage("set-user",{identifier:n,user:g}),U(a,i,{baseDomain:w}))},setCustomAttributes(n={}){if(!n||!Object.keys(n).length)throw new Error("Custom attributes should have atleast one key");u.sendMessage("set-custom-attributes",{customAttributes:n})},deleteCustomAttribute(n=""){if(n)u.sendMessage("delete-custom-attribute",{customAttribute:n});else throw new Error("Custom attribute is required")},setConversationCustomAttributes(n={}){if(!n||!Object.keys(n).length)throw new Error("Custom attributes should have atleast one key");u.sendMessage("set-conversation-custom-attributes",{customAttributes:n})},deleteConversationCustomAttribute(n=""){if(n)u.sendMessage("delete-conversation-custom-attribute",{customAttribute:n});else throw new Error("Custom attribute is required")},setLabel(n=""){u.sendMessage("set-label",{label:n})},removeLabel(n=""){u.sendMessage("remove-label",{label:n})},setLocale(n="en"){u.sendMessage("set-locale",{locale:n})},setColorScheme(n="light"){u.sendMessage("set-color-scheme",{darkMode:I(n)})},reset(){window.$chatwoot.isOpen&&u.events.toggleBubble(),y.remove("cw_conversation"),y.remove(L());const n=u.getAppFrame();n.src=u.getUrl({baseUrl:window.$chatwoot.baseUrl,websiteToken:window.$chatwoot.websiteToken}),window.$chatwoot.resetTriggered=!0}},u.createFrame({baseUrl:e,websiteToken:o})};window.chatwootSDK={run:De};
//# sourceMappingURL=sdk-B-pid2Fz.js.map
