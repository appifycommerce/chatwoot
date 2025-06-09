import{c as A,r as qe,S as hi,P as di,n as ui,o as pi}from"./_plugin-vue_export-helper-C3nsX_5G.js";import{b as vi,a as fi}from"./index-alL-i1bK.js";import{c as k,b as St}from"./index-CSjVFRcr.js";import{u as ee,e as j}from"./globalConfig-DdOzrjok.js";import{L as _i,u as Et,a as Ai}from"./Validators-CMWtcjck.js";import{L as gi,w as L,f as Oi,a4 as mi,aB as Ni}from"./DashboardIcon-s54FzPb6.js";import{F as Ci,G as wt,H as Mi,I as Si,J as b,K as Ei,M as wi,N as Ti,P as yi,Q as Ii,R as bi,S as Ri,T as $i,U as xi,V as Li,W as ji,X as ki,Y as Di,Z as Qe}from"./dashboard-BEl7D18C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DN3rM4CW.js";import"./exports-V5h9smXw.js";import"./js.cookie-Cz0CWeBA.js";import"./utils.esm-GJG4ttM9.js";import"./Icon-BGkp1H7F.js";import"./index-BtuGy7By.js";import"./typing-CrFuWkIk.js";import"./vue-dompurify-html-CEAHYyWB.js";import"./useKeyboardNavigableList-JF8ah1-F.js";import"./helper-q29O9VCT.js";import"./Thumbnail-Bohw8Ogk.js";import"./module-BVVTrm1G.js";import"./BarChart-BUTp9Twj.js";import"./constants-lVAyZKq6.js";import"./IframeLoader-B1_sd-Bu.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=window,ze=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),et=new WeakMap;let Tt=class{constructor(e,i,n){if(this._$cssResult$=!0,n!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(ze&&e===void 0){const n=i!==void 0&&i.length===1;n&&(e=et.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&et.set(i,e))}return e}toString(){return this.cssText}};const Bi=t=>new Tt(typeof t=="string"?t:t+"",void 0,Ke),ge=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new Tt(i,t,Ke)},Hi=(t,e)=>{ze?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{const n=document.createElement("style"),o=ve.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)})},tt=ze?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const n of e.cssRules)i+=n.cssText;return Bi(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;const fe=window,it=fe.trustedTypes,Pi=it?it.emptyScript:"",nt=fe.reactiveElementPolyfillSupport,He={toAttribute(t,e){switch(e){case Boolean:t=t?Pi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},yt=(t,e)=>e!==t&&(e==e||t==t),Ee={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:yt},Pe="finalized";let W=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((i,n)=>{const o=this._$Ep(n,i);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,i=Ee){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,i);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,i,n){return{get(){return this[i]},set(o){const s=this[e];this[i]=o,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ee}static finalize(){if(this.hasOwnProperty(Pe))return!1;this[Pe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,n=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of n)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)i.unshift(tt(o))}else e!==void 0&&i.push(tt(e));return i}static _$Ep(e,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(i=>i(this))}addController(e){var i,n;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var e;const i=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Hi(i,this.constructor.elementStyles),i}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostConnected)===null||n===void 0?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostDisconnected)===null||n===void 0?void 0:n.call(i)})}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$EO(e,i,n=Ee){var o;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:He).toAttribute(i,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,i){var n;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:He;this._$El=s,this[s]=l.fromAttribute(i,a.type),this._$El=null}}requestUpdate(e,i,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||yt)(this[e],i)?(this._$AL.has(e)||this._$AL.set(e,i),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(n)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)===null||i===void 0||i.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((i,n)=>this._$EO(n,this[n],i)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};W[Pe]=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:W}),((Se=fe.reactiveElementVersions)!==null&&Se!==void 0?Se:fe.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const _e=window,J=_e.trustedTypes,ot=J?J.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ze="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,It="?"+D,Zi=`<${It}>`,G=document,ae=()=>G.createComment(""),le=t=>t===null||typeof t!="object"&&typeof t!="function",bt=Array.isArray,Vi=t=>bt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Te=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,at=/>/g,Z=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,rt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,Ui=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),T=Ui(1),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ct=new WeakMap,U=G.createTreeWalker(G,129,null,!1);function $t(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(e):e}const Gi=(t,e)=>{const i=t.length-1,n=[];let o,s=e===2?"<svg>":"",a=ie;for(let l=0;l<i;l++){const r=t[l];let c,h,u=-1,d=0;for(;d<r.length&&(a.lastIndex=d,h=a.exec(r),h!==null);)d=a.lastIndex,a===ie?h[1]==="!--"?a=st:h[1]!==void 0?a=at:h[2]!==void 0?(Rt.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=Z):h[3]!==void 0&&(a=Z):a===Z?h[0]===">"?(a=o??ie,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Z:h[3]==='"'?rt:lt):a===rt||a===lt?a=Z:a===st||a===at?a=ie:(a=Z,o=void 0);const p=a===Z&&t[l+1].startsWith("/>")?" ":"";s+=a===ie?r+Zi:u>=0?(n.push(c),r.slice(0,u)+Ze+r.slice(u)+D+p):r+D+(u===-2?(n.push(void 0),l):p)}return[$t(t,s+(t[i]||"<?>")+(e===2?"</svg>":"")),n]};class re{constructor({strings:e,_$litType$:i},n){let o;this.parts=[];let s=0,a=0;const l=e.length-1,r=this.parts,[c,h]=Gi(e,i);if(this.el=re.createElement(c,n),U.currentNode=this.el.content,i===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=U.nextNode())!==null&&r.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const d of o.getAttributeNames())if(d.endsWith(Ze)||d.startsWith(D)){const p=h[a++];if(u.push(d),p!==void 0){const v=o.getAttribute(p.toLowerCase()+Ze).split(D),g=/([.?@])?(.*)/.exec(p);r.push({type:1,index:s,name:g[2],strings:v,ctor:g[1]==="."?Ki:g[1]==="?"?Yi:g[1]==="@"?Wi:Oe})}else r.push({type:6,index:s})}for(const d of u)o.removeAttribute(d)}if(Rt.test(o.tagName)){const u=o.textContent.split(D),d=u.length-1;if(d>0){o.textContent=J?J.emptyScript:"";for(let p=0;p<d;p++)o.append(u[p],ae()),U.nextNode(),r.push({type:2,index:++s});o.append(u[d],ae())}}}else if(o.nodeType===8)if(o.data===It)r.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(D,u+1))!==-1;)r.push({type:7,index:s}),u+=D.length-1}s++}}static createElement(e,i){const n=G.createElement("template");return n.innerHTML=e,n}}function q(t,e,i=t,n){var o,s,a,l;if(e===R)return e;let r=n!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[n]:i._$Cl;const c=le(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==c&&((s=r==null?void 0:r._$AO)===null||s===void 0||s.call(r,!1),c===void 0?r=void 0:(r=new c(t),r._$AT(t,i,n)),n!==void 0?((a=(l=i)._$Co)!==null&&a!==void 0?a:l._$Co=[])[n]=r:i._$Cl=r),r!==void 0&&(e=q(t,r._$AS(t,e.values),r,n)),e}class zi{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;const{el:{content:n},parts:o}=this._$AD,s=((i=e==null?void 0:e.creationScope)!==null&&i!==void 0?i:G).importNode(n,!0);U.currentNode=s;let a=U.nextNode(),l=0,r=0,c=o[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new te(a,a.nextSibling,this,e):c.type===1?h=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(h=new Xi(a,this,e)),this._$AV.push(h),c=o[++r]}l!==(c==null?void 0:c.index)&&(a=U.nextNode(),l++)}return U.currentNode=G,s}v(e){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}class te{constructor(e,i,n,o){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=q(this,e,i),le(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Vi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&le(this._$AH)?this._$AA.nextSibling.data=e:this.$(G.createTextNode(e)),this._$AH=e}g(e){var i;const{values:n,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=re.createElement($t(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.v(n);else{const a=new zi(s,this),l=a.u(this.options);a.v(n),this.$(l),this._$AH=a}}_$AC(e){let i=ct.get(e.strings);return i===void 0&&ct.set(e.strings,i=new re(e)),i}T(e){bt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of e)o===i.length?i.push(n=new te(this.k(ae()),this.k(ae()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cp=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}}let Oe=class{constructor(e,i,n,o,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,i=this,n,o){const s=this.strings;let a=!1;if(s===void 0)e=q(this,e,i,0),a=!le(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{const l=e;let r,c;for(e=s[0],r=0;r<s.length-1;r++)c=q(this,l[n+r],i,r),c===R&&(c=this._$AH[r]),a||(a=!le(c)||c!==this._$AH[r]),c===m?e=m:e!==m&&(e+=(c??"")+s[r+1]),this._$AH[r]=c}a&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Ki extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Fi=J?J.emptyScript:"";class Yi extends Oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Fi):this.element.removeAttribute(this.name)}}class Wi extends Oe{constructor(e,i,n,o,s){super(e,i,n,o,s),this.type=5}_$AI(e,i=this){var n;if((e=(n=q(this,e,i,0))!==null&&n!==void 0?n:m)===R)return;const o=this._$AH,s=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==m&&(o===m||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,n;typeof this._$AH=="function"?this._$AH.call((n=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Xi{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Ji={I:te},ht=_e.litHtmlPolyfillSupport;ht==null||ht(re,te),((we=_e.litHtmlVersions)!==null&&we!==void 0?we:_e.litHtmlVersions=[]).push("2.8.0");const qi=(t,e,i)=>{var n,o;const s=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const l=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new te(e.insertBefore(ae(),l),l,void 0,i??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye,Ie;let B=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const n=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=n.firstChild),n}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qi(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return R}};B.finalized=!0,B._$litElement$=!0,(ye=globalThis.litElementHydrateSupport)===null||ye===void 0||ye.call(globalThis,{LitElement:B});const dt=globalThis.litElementPolyfillSupport;dt==null||dt({LitElement:B});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=t=>e=>typeof e=="function"?((i,n)=>(customElements.define(i,n),n))(t,e):((i,n)=>{const{kind:o,elements:s}=n;return{kind:o,elements:s,finisher(a){customElements.define(i,a)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},en=(t,e,i)=>{e.constructor.createProperty(i,t)};function S(t){return(e,i)=>i!==void 0?en(t,e,i):Qi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t){return S({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;((be=window.HTMLSlotElement)===null||be===void 0?void 0:be.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},he=t=>(...e)=>({_$litDirective$:t,values:e});class de{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:tn}=Ji,xt=t=>t.strings===void 0,ut=()=>document.createComment(""),ne=(t,e,i)=>{var n;const o=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(i===void 0){const a=o.insertBefore(ut(),s),l=o.insertBefore(ut(),s);i=new tn(a,l,t,t.options)}else{const a=i._$AB.nextSibling,l=i._$AM,r=l!==t;if(r){let c;(n=i._$AQ)===null||n===void 0||n.call(i,t),i._$AM=t,i._$AP!==void 0&&(c=t._$AU)!==l._$AU&&i._$AP(c)}if(a!==s||r){let c=i._$AA;for(;c!==a;){const h=c.nextSibling;o.insertBefore(c,s),c=h}}}return i},V=(t,e,i=t)=>(t._$AI(e,i),t),nn={},Lt=(t,e=nn)=>t._$AH=e,on=t=>t._$AH,Re=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},sn=he(class extends de{constructor(t){if(super(t),t.type!==x.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let n;i===void 0?i=e:e!==void 0&&(n=e);const o=[],s=[];let a=0;for(const l of t)o[a]=n?n(l,a):a,s[a]=i(l,a),a++;return{values:s,keys:o}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,n]){var o;const s=on(t),{values:a,keys:l}=this.ct(e,i,n);if(!Array.isArray(s))return this.ut=l,a;const r=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let h,u,d=0,p=s.length-1,v=0,g=a.length-1;for(;d<=p&&v<=g;)if(s[d]===null)d++;else if(s[p]===null)p--;else if(r[d]===l[v])c[v]=V(s[d],a[v]),d++,v++;else if(r[p]===l[g])c[g]=V(s[p],a[g]),p--,g--;else if(r[d]===l[g])c[g]=V(s[d],a[g]),ne(t,c[g+1],s[d]),d++,g--;else if(r[p]===l[v])c[v]=V(s[p],a[v]),ne(t,s[d],s[p]),p--,v++;else if(h===void 0&&(h=pt(l,v,g),u=pt(r,d,p)),h.has(r[d]))if(h.has(r[p])){const y=u.get(l[v]),P=y!==void 0?s[y]:null;if(P===null){const F=ne(t,s[d]);V(F,a[v]),c[v]=F}else c[v]=V(P,a[v]),ne(t,s[d],P),s[y]=null;v++}else Re(s[p]),p--;else Re(s[d]),d++;for(;v<=g;){const y=ne(t,c[g+1]);V(y,a[v]),c[v++]=y}for(;d<=p;){const y=s[d++];y!==null&&Re(y)}return this.ut=l,Lt(t,c),R}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=he(class extends de{constructor(t){if(super(t),t.type!==x.PROPERTY&&t.type!==x.ATTRIBUTE&&t.type!==x.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===m)return e;const i=t.element,n=t.name;if(t.type===x.PROPERTY){if(e===i[n])return R}else if(t.type===x.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return R}else if(t.type===x.ATTRIBUTE&&i.getAttribute(n)===e+"")return R;return Lt(t),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=(t,e)=>{var i,n;const o=t._$AN;if(o===void 0)return!1;for(const s of o)(n=(i=s)._$AO)===null||n===void 0||n.call(i,e,!1),se(s,e);return!0},Ae=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},jt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),cn(e)}};function ln(t){this._$AN!==void 0?(Ae(this),this._$AM=t,jt(this)):this._$AM=t}function rn(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let s=i;s<n.length;s++)se(n[s],!1),Ae(n[s]);else n!=null&&(se(n,!1),Ae(n));else se(this,t)}const cn=t=>{var e,i,n,o;t.type==x.CHILD&&((e=(n=t)._$AP)!==null&&e!==void 0||(n._$AP=rn),(i=(o=t)._$AQ)!==null&&i!==void 0||(o._$AQ=ln))};class hn extends de{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),jt(this),this.isConnected=e._$AU}_$AO(e,i=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),i&&(se(this,e),Ae(this))}setValue(e){if(xt(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=()=>new dn;let dn=class{};const $e=new WeakMap,Dt=he(class extends hn{render(t){return m}update(t,[e]){var i;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(i=t.options)===null||i===void 0?void 0:i.host,this.ot(this.lt=t.element)),m}ot(t){var e;if(typeof this.G=="function"){const i=(e=this.dt)!==null&&e!==void 0?e:globalThis;let n=$e.get(i);n===void 0&&(n=new WeakMap,$e.set(i,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,i;return typeof this.G=="function"?(e=$e.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(i=this.G)===null||i===void 0?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=he(class extends de{constructor(t){var e;if(super(t),t.type!==x.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((i=this.nt)===null||i===void 0)&&i.has(s))&&this.it.add(s);return this.render(e)}const o=t.element.classList;this.it.forEach(s=>{s in e||(o.remove(s),this.it.delete(s))});for(const s in e){const a=!!e[s];a===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(a?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return R}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var xe=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Le(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on".concat(e),function(){i(window.event)})}function Bt(t,e){for(var i=e.slice(0,e.length-1),n=0;n<i.length;n++)i[n]=t[i[n].toLowerCase()];return i}function Ht(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),i=e.lastIndexOf("");i>=0;)e[i-1]+=",",e.splice(i,1),i=e.lastIndexOf("");return e}function un(t,e){for(var i=t.length>=e.length?t:e,n=t.length>=e.length?e:t,o=!0,s=0;s<i.length;s++)n.indexOf(i[s])===-1&&(o=!1);return o}var Pt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":xe?173:189,"=":xe?61:187,";":xe?59:186,"'":222,"[":219,"]":221,"\\":220},z={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},vt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},w={16:!1,18:!1,17:!1,91:!1},E={};for(var pe=1;pe<20;pe++)Pt["f".concat(pe)]=111+pe;var O=[],Zt="all",Vt=[],Ne=function(e){return Pt[e.toLowerCase()]||z[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Ut(t){Zt=t||"all"}function ce(){return Zt||"all"}function pn(){return O.slice(0)}function vn(t){var e=t.target||t.srcElement,i=e.tagName,n=!0;return(e.isContentEditable||(i==="INPUT"||i==="TEXTAREA"||i==="SELECT")&&!e.readOnly)&&(n=!1),n}function fn(t){return typeof t=="string"&&(t=Ne(t)),O.indexOf(t)!==-1}function _n(t,e){var i,n;t||(t=ce());for(var o in E)if(Object.prototype.hasOwnProperty.call(E,o))for(i=E[o],n=0;n<i.length;)i[n].scope===t?i.splice(n,1):n++;ce()===t&&Ut(e||"all")}function An(t){var e=t.keyCode||t.which||t.charCode,i=O.indexOf(e);if(i>=0&&O.splice(i,1),t.key&&t.key.toLowerCase()==="meta"&&O.splice(0,O.length),(e===93||e===224)&&(e=91),e in w){w[e]=!1;for(var n in z)z[n]===e&&(C[n]=!1)}}function gn(t){if(!t)Object.keys(E).forEach(function(a){return delete E[a]});else if(Array.isArray(t))t.forEach(function(a){a.key&&je(a)});else if(typeof t=="object")t.key&&je(t);else if(typeof t=="string"){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o=i[0],s=i[1];typeof o=="function"&&(s=o,o=""),je({key:t,scope:o,method:s,splitKey:"+"})}}var je=function(e){var i=e.key,n=e.scope,o=e.method,s=e.splitKey,a=s===void 0?"+":s,l=Ht(i);l.forEach(function(r){var c=r.split(a),h=c.length,u=c[h-1],d=u==="*"?"*":Ne(u);if(E[d]){n||(n=ce());var p=h>1?Bt(z,c):[];E[d]=E[d].map(function(v){var g=o?v.method===o:!0;return g&&v.scope===n&&un(v.mods,p)?{}:v})}})};function ft(t,e,i){var n;if(e.scope===i||e.scope==="all"){n=e.mods.length>0;for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(!w[o]&&e.mods.indexOf(+o)>-1||w[o]&&e.mods.indexOf(+o)===-1)&&(n=!1);(e.mods.length===0&&!w[16]&&!w[18]&&!w[17]&&!w[91]||n||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function _t(t){var e=E["*"],i=t.keyCode||t.which||t.charCode;if(C.filter.call(this,t)){if((i===93||i===224)&&(i=91),O.indexOf(i)===-1&&i!==229&&O.push(i),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var v=vt[p];t[p]&&O.indexOf(v)===-1?O.push(v):!t[p]&&O.indexOf(v)>-1?O.splice(O.indexOf(v),1):p==="metaKey"&&t[p]&&O.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(O=O.slice(O.indexOf(v))))}),i in w){w[i]=!0;for(var n in z)z[n]===i&&(C[n]=!0);if(!e)return}for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(w[o]=t[vt[o]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(O.indexOf(17)===-1&&O.push(17),O.indexOf(18)===-1&&O.push(18),w[17]=!0,w[18]=!0);var s=ce();if(e)for(var a=0;a<e.length;a++)e[a].scope===s&&(t.type==="keydown"&&e[a].keydown||t.type==="keyup"&&e[a].keyup)&&ft(t,e[a],s);if(i in E){for(var l=0;l<E[i].length;l++)if((t.type==="keydown"&&E[i][l].keydown||t.type==="keyup"&&E[i][l].keyup)&&E[i][l].key){for(var r=E[i][l],c=r.splitKey,h=r.key.split(c),u=[],d=0;d<h.length;d++)u.push(Ne(h[d]));u.sort().join("")===O.sort().join("")&&ft(t,r,s)}}}}function On(t){return Vt.indexOf(t)>-1}function C(t,e,i){O=[];var n=Ht(t),o=[],s="all",a=document,l=0,r=!1,c=!0,h="+";for(i===void 0&&typeof e=="function"&&(i=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(a=e.element),e.keyup&&(r=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(h=e.splitKey)),typeof e=="string"&&(s=e);l<n.length;l++)t=n[l].split(h),o=[],t.length>1&&(o=Bt(z,t)),t=t[t.length-1],t=t==="*"?"*":Ne(t),t in E||(E[t]=[]),E[t].push({keyup:r,keydown:c,scope:s,mods:o,shortcut:n[l],method:i,key:n[l],splitKey:h});typeof a<"u"&&!On(a)&&window&&(Vt.push(a),Le(a,"keydown",function(u){_t(u)}),Le(window,"focus",function(){O=[]}),Le(a,"keyup",function(u){_t(u),An(u)}))}var ke={setScope:Ut,getScope:ce,deleteScope:_n,getPressedKeyCodes:pn,isPressed:fn,filter:vn,unbind:gn};for(var De in ke)Object.prototype.hasOwnProperty.call(ke,De)&&(C[De]=ke[De]);if(typeof window<"u"){var mn=window.hotkeys;C.noConflict=function(t){return t&&window.hotkeys===C&&(window.hotkeys=mn),C},window.hotkeys=C}var ue=function(t,e,i,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let K=class extends B{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=kt()}render(){let e="";if(!this.hideBreadcrumbs){const i=[];for(const n of this.breadcrumbs)i.push(T`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=T`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${i}
      </div>`}return T`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Dt(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const i=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:i.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};K.styles=ge`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;ue([S()],K.prototype,"placeholder",void 0);ue([S({type:Boolean})],K.prototype,"hideBreadcrumbs",void 0);ue([S()],K.prototype,"breadcrumbHome",void 0);ue([S({type:Array})],K.prototype,"breadcrumbs",void 0);K=ue([me("ninja-header")],K);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ue extends de{constructor(e){if(super(e),this.et=m,e.type!==x.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.ft=void 0,this.et=e;if(e===R)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const i=[e];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Ue.directiveName="unsafeHTML",Ue.resultType=1;const Nn=he(Ue);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Cn(t,e){if(t!==void 0){let i=-1;for(const n of t)i>-1&&(yield e),i++,yield n}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Mn=ge`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ge=class extends B{render(){return T`<span><slot></slot></span>`}};Ge.styles=[Mn];Ge=vi([me("mwc-icon")],Ge);var Ce=function(t,e,i,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let Q=class extends B{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=T`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Nn(this.action.icon||""));let i;this.action.hotkey&&(this.hotKeysJoinedView?i=this.action.hotkey.split(",").map(o=>{const s=o.split("+"),a=T`${Cn(s.map(l=>T`<kbd>${l}</kbd>`),"+")}`;return T`<div class="ninja-hotkey ninja-hotkeys">
            ${a}
          </div>`}):i=this.action.hotkey.split(",").map(o=>{const a=o.split("+").map(l=>T`<kbd class="ninja-hotkey">${l}</kbd>`);return T`<kbd class="ninja-hotkeys">${a}</kbd>`}));const n={selected:this.selected,"ninja-action":!0};return T`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${Ve(n)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${i}
      </div>
    `}};Q.styles=ge`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;Ce([S({type:Object})],Q.prototype,"action",void 0);Ce([S({type:Boolean})],Q.prototype,"selected",void 0);Ce([S({type:Boolean})],Q.prototype,"hotKeysJoinedView",void 0);Q=Ce([me("ninja-action")],Q);const Sn=T` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,En=ge`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var M=function(t,e,i,n){var o=arguments.length,s=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let N=class extends B{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=kt()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1,this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const i=[];let n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(i.push(n);n;){const o=this._flatData.find(s=>s.id===n);o!=null&&o.parent&&i.push(o.parent),n=o?o.parent:void 0}return i.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,i){let n=[];return e||(e=[]),e.map(o=>{const s=o.children&&o.children.some(l=>typeof l=="string"),a={...o,parent:o.parent||i};return s||(a.children&&a.children.length&&(i=o.id,n=[...n,...a.children]),a.children=a.children?a.children.map(l=>l.id):[]),a}).concat(n.length?this._flattern(n,i):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(i=>!!i.hotkey).forEach(i=>{C(i.hotkey,n=>{n.preventDefault(),i.handler&&i.handler(i)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&C(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&C(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&C(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&C(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&C(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&C(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&C.unbind(this.openHotkey),this.selectHotkey&&C.unbind(this.selectHotkey),this.goBackHotkey&&C.unbind(this.goBackHotkey),this.navigationDownHotkey&&C.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&C.unbind(this.navigationUpHotkey),this.closeHotkey&&C.unbind(this.closeHotkey)}_actionFocused(e,i){this._selected=e,i.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},i={visible:this.visible,modal:!0},o=this._flatData.filter(l=>{var r;const c=new RegExp(this._search,"gi"),h=l.title.match(c)||((r=l.keywords)===null||r===void 0?void 0:r.match(c));return(!this._currentRoot&&this._search||l.parent===this._currentRoot)&&h}).reduce((l,r)=>l.set(r.section,[...l.get(r.section)||[],r]),new Map);this._actionMatches=[...o.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const s=l=>T` ${sn(l,r=>r.id,r=>{var c;return T`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${an(r.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${h=>this._actionFocused(r,h)}
            @actionsSelected=${h=>this._actionSelected(h.detail)}
            .action=${r}
          ></ninja-action>`})}`,a=[];return o.forEach((l,r)=>{const c=r?T`<div class="group-header">${r}</div>`:void 0;a.push(T`${c}${s(l)}`)}),T`
      <div @click=${this._overlayClick} class=${Ve(i)}>
        <div class=${Ve(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Dt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${l=>this.setParent(l.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${a}</div>
          </div>
          <slot name="footer"> ${Sn} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var i;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((i=e.children)===null||i===void 0?void 0:i.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);n!=null&&n.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var i;!((i=e.target)===null||i===void 0)&&i.classList.contains("modal")&&this.close()}};N.styles=[En];M([S({type:String})],N.prototype,"placeholder",void 0);M([S({type:Boolean})],N.prototype,"disableHotkeys",void 0);M([S({type:Boolean})],N.prototype,"hideBreadcrumbs",void 0);M([S()],N.prototype,"openHotkey",void 0);M([S()],N.prototype,"navigationUpHotkey",void 0);M([S()],N.prototype,"navigationDownHotkey",void 0);M([S()],N.prototype,"closeHotkey",void 0);M([S()],N.prototype,"goBackHotkey",void 0);M([S()],N.prototype,"selectHotkey",void 0);M([S({type:Boolean})],N.prototype,"hotKeysJoinedView",void 0);M([S({type:Boolean})],N.prototype,"noAutoLoadMdIcons",void 0);M([S({type:Array,hasChanged(){return!0}})],N.prototype,"data",void 0);M([H()],N.prototype,"visible",void 0);M([H()],N.prototype,"_bump",void 0);M([H()],N.prototype,"_actionMatches",void 0);M([H()],N.prototype,"_search",void 0);M([H()],N.prototype,"_currentRoot",void 0);M([H()],N.prototype,"_flatData",void 0);M([H()],N.prototype,"breadcrumbs",null);M([H()],N.prototype,"_selected",void 0);N=M([me("ninja-keys")],N);const At='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.003-4.596l8.5-8.51A3.25 3.25 0 0 1 14.284 2h5.465Zm0 1.5h-5.465c-.465 0-.91.185-1.239.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75ZM17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor"/></svg>',gt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.478 2a6.474 6.474 0 0 0-.708 1.5h-7.06a.75.75 0 0 0-.75.75v.907c0 .656.286 1.279.783 1.706C5.545 19.945 7.44 20.501 10 20.501c.599 0 1.162-.03 1.688-.091.25.5.563.964.93 1.38-.803.141-1.676.21-2.618.21-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.305-2.843v-.907A2.25 2.25 0 0 1 4.254 14h7.768Zm4.697.588-.069.058-2.515 2.517-.041.05-.035.058-.032.078-.012.043-.01.086.003.088.019.085.032.078.025.042.05.066 2.516 2.516a.5.5 0 0 0 .765-.638l-.058-.069L15.711 18h4.79a.5.5 0 0 0 .491-.41L21 17.5a.5.5 0 0 0-.41-.492L20.5 17h-4.789l1.646-1.647a.5.5 0 0 0 .058-.637l-.058-.07a.5.5 0 0 0-.638-.058ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="currentColor"/></svg>',wn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.92 3.316c.806-.717 2.08-.145 2.08.934v15.496c0 1.078-1.274 1.65-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.247V9.75a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19l4.491-3.993Zm.58 1.49L9.425 8.43A2.25 2.25 0 0 1 7.93 9H4.25a.75.75 0 0 0-.75.75v4.497c0 .415.336.75.75.75h3.68a2.25 2.25 0 0 1 1.495.57l4.075 3.623V4.807ZM16.22 9.22a.75.75 0 0 1 1.06 0L19 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L20.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" fill="currentColor"/></svg>',Tn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.25c0-1.079-1.274-1.65-2.08-.934L8.427 7.309a.75.75 0 0 1-.498.19H4.25A2.25 2.25 0 0 0 2 9.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V4.25ZM9.425 8.43 13.5 4.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H4.25a.75.75 0 0 1-.75-.75V9.75a.75.75 0 0 1 .75-.75h3.68a2.25 2.25 0 0 0 1.495-.569ZM18.992 5.897a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 22 12a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 20.5 12a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049Z" fill="#212121"/><path d="M17.143 8.37a.75.75 0 0 1 1.017.302c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z" fill="currentColor"/></svg>',Ot='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-.026.026a6.473 6.473 0 0 0-1.43-.692l.395-.395a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75h-5.466c-.464 0-.91.185-1.238.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.33.13c.165.487.386.947.654 1.374a3.256 3.256 0 0 1-4.043-.442L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953h5.465ZM17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-2.354-7.854a.5.5 0 0 1 .708 0l1.646 1.647 1.646-1.647a.5.5 0 0 1 .708.708L18.207 17.5l1.647 1.646a.5.5 0 0 1-.708.708L17.5 18.207l-1.646 1.647a.5.5 0 0 1-.708-.708l1.647-1.646-1.647-1.646a.5.5 0 0 1 0-.708Z" fill="currentColor"/></svg>',Gt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 2a.75.75 0 0 0-.743.648l-.007.102v5.69l-4.574-4.56a6.41 6.41 0 0 0-8.878-.179l-.186.18a6.41 6.41 0 0 0 0 9.063l8.845 8.84a.75.75 0 0 0 1.06-1.062l-8.845-8.838a4.91 4.91 0 0 1 6.766-7.112l.178.17L17.438 9.5H11.75a.75.75 0 0 0-.743.648L11 10.25c0 .38.282.694.648.743l.102.007h7.5a.75.75 0 0 0 .743-.648L20 10.25v-7.5a.75.75 0 0 0-.75-.75Z" fill="currentColor"/></svg>',zt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.97 1.97 4.47-4.47-4.47 4.47Z" fill="currentColor"/></svg>',yn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 11.5a.75.75 0 0 1 .743.648l.007.102v5a4.75 4.75 0 0 1-4.533 4.745L15.75 22h-7.5c-.98 0-1.813-.626-2.122-1.5h9.622l.184-.005a3.25 3.25 0 0 0 3.06-3.06L19 17.25v-5a.75.75 0 0 1 .75-.75Zm-2.5-2a.75.75 0 0 1 .743.648l.007.102v7a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-10a2.25 2.25 0 0 1-2.245-2.096L3.5 17.25v-7a.75.75 0 0 1 1.493-.102L5 10.25v7c0 .38.282.694.648.743L5.75 18h10a.75.75 0 0 0 .743-.648l.007-.102v-7a.75.75 0 0 1 .75-.75ZM6.218 6.216l3.998-3.996a.75.75 0 0 1 .976-.073l.084.072 4.004 3.997a.75.75 0 0 1-.976 1.134l-.084-.073-2.72-2.714v9.692a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L10 14.255V4.556L7.279 7.277a.75.75 0 0 1-.977.072l-.084-.072a.75.75 0 0 1-.072-.977l.072-.084 3.998-3.996-3.998 3.996Z" fill="currentColor"/></svg>',Fe='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12S6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333c0 4.595 3.738 8.333 8.333 8.333c4.595 0 8.333-3.738 8.333-8.333c0-4.595-3.738-8.333-8.333-8.333ZM11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75Z" fill="currentColor"/></svg>',In='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692z" fill="currentColor"></path></g></svg>',bn='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438c-1.57 1.834-3.957 2.739-7.102 2.739c-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.249 2.249 0 0 1 2.249-2.25h11.501zm0 1.5H6.253a.749.749 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461c1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.749.749 0 0 0-.749-.75zM12 2.004a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z" fill="currentColor"></path></g></svg>',Rn='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M16.749 2h4.554l.1.014l.099.028l.06.026c.08.034.153.085.219.15l.04.044l.044.057l.054.09l.039.09l.019.064l.014.064l.009.095v4.532a.75.75 0 0 1-1.493.102l-.007-.102V4.559l-6.44 6.44a.75.75 0 0 1-.976.073L13 11L9.97 8.09l-5.69 5.689a.75.75 0 0 1-1.133-.977l.073-.084l6.22-6.22a.75.75 0 0 1 .976-.072l.084.072l3.03 2.91L19.438 3.5h-2.69a.75.75 0 0 1-.742-.648l-.007-.102a.75.75 0 0 1 .648-.743L16.75 2zM3.75 17a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zm5.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5zM13.75 15a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75zm5.75-4.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0v-10.5z" fill="currentColor"></path></g></svg>',$n='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27-1.112 3.984 3.987-1.112.27.15A8.5 8.5 0 1 0 12 3.5ZM8.75 13h4.498a.75.75 0 0 1 .102 1.493l-.102.007H8.75a.75.75 0 0 1-.102-1.493L8.75 13h4.498H8.75Zm0-3.5h6.505a.75.75 0 0 1 .101 1.493l-.101.007H8.75a.75.75 0 0 1-.102-1.493L8.75 9.5h6.505H8.75Z" fill="currentColor"/></svg>',mt='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 13.999L13 14a2 2 0 0 1 1.995 1.85L15 16v1.5C14.999 21 11.284 22 8.5 22c-2.722 0-6.335-.956-6.495-4.27L2 17.5v-1.501c0-1.054.816-1.918 1.85-1.995L4 14zM15.22 14H20c1.054 0 1.918.816 1.994 1.85L22 16v1c-.001 3.062-2.858 4-5 4a7.16 7.16 0 0 1-2.14-.322c.336-.386.607-.827.802-1.327A6.19 6.19 0 0 0 17 19.5l.267-.006c.985-.043 3.086-.363 3.226-2.289L20.5 17v-1a.501.501 0 0 0-.41-.492L20 15.5h-4.051a2.957 2.957 0 0 0-.595-1.34L15.22 14H20h-4.78zM4 15.499l-.1.01a.51.51 0 0 0-.254.136a.506.506 0 0 0-.136.253l-.01.101V17.5c0 1.009.45 1.722 1.417 2.242c.826.445 2.003.714 3.266.753l.317.005l.317-.005c1.263-.039 2.439-.308 3.266-.753c.906-.488 1.359-1.145 1.412-2.057l.005-.186V16a.501.501 0 0 0-.41-.492L13 15.5l-9-.001zM8.5 3a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm9 2a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm-9-.5c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3zm9 2c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2z" fill="currentColor"></path></g></svg>',xn='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.003-4.596l8.5-8.51A3.25 3.25 0 0 1 14.284 2h5.465zm0 1.5h-5.465c-.465 0-.91.185-1.239.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75zM17 5.502a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3z" fill="currentColor"></path></g></svg>',Ln='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6.25 3h11.5a3.25 3.25 0 0 1 3.245 3.066L21 6.25v11.5a3.25 3.25 0 0 1-3.066 3.245L17.75 21H6.25a3.25 3.25 0 0 1-3.245-3.066L3 17.75V6.25a3.25 3.25 0 0 1 3.066-3.245L6.25 3h11.5h-11.5zM4.5 14.5v3.25a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V14.5h-3.825a3.752 3.752 0 0 1-3.475 2.995l-.2.005a3.752 3.752 0 0 1-3.632-2.812l-.043-.188H4.5v3.25v-3.25zm13.25-10H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 6.25V13H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.495.154l.005-.154a.75.75 0 0 1 .648-.743L15 13h4.5V6.25a1.75 1.75 0 0 0-1.607-1.744L17.75 4.5z" fill="currentColor"></path></g></svg>',Nt='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M14.75 15c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297c-2.91 0-4.567-1.09-4.567-3.259v-1c0-.966.784-1.75 1.75-1.75h5.5zm0 1.5h-5.5a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759c2.168 0 2.995-.564 2.933-1.757V16.75a.25.25 0 0 0-.25-.25zm-11-6.5h4.376a4.007 4.007 0 0 0-.095 1.5H3.75a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759c.462 0 .863-.026 1.207-.077a2.743 2.743 0 0 0-1.173 1.576l-.034.001C3.657 16.009 2 14.919 2 12.75v-1c0-.966.784-1.75 1.75-1.75zm16.5 0c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297l-.169-.002a2.755 2.755 0 0 0-1.218-1.606c.387.072.847.108 1.387.108c2.168 0 2.995-.564 2.933-1.757V11.75a.25.25 0 0 0-.25-.25h-4.28a4.05 4.05 0 0 0-.096-1.5h4.376zM12 8a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zM6.5 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm11 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm-11 1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm11 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" fill="currentColor"></path></g></svg>',Ct='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2-.09.007a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14Zm-3.246-4c.835 0 1.563.454 1.951 1.13a6.44 6.44 0 0 0-1.518.509.736.736 0 0 0-.433-.139H9.752a.75.75 0 0 0-.75.75v4.249c0 1.41.974 2.594 2.286 2.915a6.42 6.42 0 0 0 .735 1.587l-.02-.001a4.501 4.501 0 0 1-4.501-4.501V12.25A2.25 2.25 0 0 1 9.752 10h4.502Zm-6.848 0a3.243 3.243 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v2.749a2.501 2.501 0 0 0 3.082 2.433c.085.504.24.985.453 1.432A4.001 4.001 0 0 1 2 14.999V12.25a2.25 2.25 0 0 1 2.096-2.245L4.25 10h3.156Zm12.344 0A2.25 2.25 0 0 1 22 12.25v.56A6.478 6.478 0 0 0 17.5 11l-.245.005A3.21 3.21 0 0 0 16.6 10h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm13 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor"/></svg>',jn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.996a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.75L15 18.502a3 3 0 0 1-5.995.177L9 18.499H4.275a1.251 1.251 0 0 1-1.147-1.747L4.5 13.594V9.496c0-4.155 3.352-7.5 7.5-7.5ZM13.5 18.5l-3 .002a1.5 1.5 0 0 0 2.993.145l.006-.147ZM12 3.496c-3.32 0-6 2.674-6 6v4.41L4.656 17h14.697L18 13.907V9.509l-.004-.225A5.988 5.988 0 0 0 12 3.496Z" fill="currentColor"/></svg>',kn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 13.995a2.737 2.737 0 0 0-.617 1.5h-5.26a.749.749 0 0 0-.748.75v.577c0 .536.191 1.054.539 1.461 1.177 1.379 2.984 2.12 5.469 2.205.049.57.273 1.09.617 1.508h-.129c-3.145 0-5.531-.905-7.098-2.739A3.75 3.75 0 0 1 2 16.822v-.578c0-1.19.925-2.164 2.095-2.243l.154-.006h5.876Zm4.621-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3Zm5.5 4h-8a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm-2.75-2.5h-2.5v1h2.5v-1ZM9.997 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="currentColor"/></svg>',Dn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.511a3.247 3.247 0 0 1 1.5 2.739v6c0 2.9-2.35 5.25-5.25 5.25h-9A3.247 3.247 0 0 1 5.511 20H17.25A3.75 3.75 0 0 0 21 16.25V7.511ZM5.25 4h11.5a3.25 3.25 0 0 1 3.245 3.066L20 7.25v8.5a3.25 3.25 0 0 1-3.066 3.245L16.75 19H5.25a3.25 3.25 0 0 1-3.245-3.066L2 15.75v-8.5a3.25 3.25 0 0 1 3.066-3.245L5.25 4ZM18.5 8.899l-7.15 3.765a.75.75 0 0 1-.603.042l-.096-.042L3.5 8.9v6.85a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V8.899ZM16.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606l-.004.1L11 11.152l7.5-3.947A1.75 1.75 0 0 0 16.75 5.5Z" fill="currentColor"/></svg>',Bn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.003-4.596l8.5-8.51A3.25 3.25 0 0 1 14.284 2h5.465Zm0 1.5h-5.465c-.465 0-.91.185-1.239.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75ZM17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor"/></svg>',Hn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 3h6.5a.75.75 0 0 1 .743.648L16 3.75V7h1.75A3.25 3.25 0 0 1 21 10.25v6.5A3.25 3.25 0 0 1 17.75 20H6.25A3.25 3.25 0 0 1 3 16.75v-6.5A3.25 3.25 0 0 1 6.25 7H8V3.75a.75.75 0 0 1 .648-.743L8.75 3h6.5-6.5Zm9 5.5H6.25a1.75 1.75 0 0 0-1.75 1.75v6.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-6.5a1.75 1.75 0 0 0-1.75-1.75Zm-3.25-4h-5V7h5V4.5Z" fill="currentColor"/></svg>',Pn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 3h11.5a3.25 3.25 0 0 1 3.245 3.066L21 6.25v11.5a3.25 3.25 0 0 1-3.066 3.245L17.75 21H6.25a3.25 3.25 0 0 1-3.245-3.066L3 17.75V6.25a3.25 3.25 0 0 1 3.066-3.245L6.25 3h11.5-11.5ZM4.5 14.5v3.25a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V14.5h-3.825a3.752 3.752 0 0 1-3.475 2.995l-.2.005a3.752 3.752 0 0 1-3.632-2.812l-.043-.188H4.5v3.25-3.25Zm13.25-10H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 6.25V13H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.495.154l.005-.154a.75.75 0 0 1 .648-.743L15 13h4.5V6.25a1.75 1.75 0 0 0-1.607-1.744L17.75 4.5Z" fill="currentColor"/></svg>',Zn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.492 2.33 3.179 3.179a2.25 2.25 0 0 1 0 3.182l-2.584 2.584A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25a2.25 2.25 0 0 1 2.225 1.915L15.31 2.33a2.25 2.25 0 0 1 3.182 0ZM4.5 18.75c0 .414.336.75.75.75l5.999-.001.001-6.75H4.5v6Zm8.249.749h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-6.001v6.75Zm-2.249-15H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.918-3.178 3.178a.75.75 0 0 0 0 1.061l3.179 3.179a.75.75 0 0 0 1.06 0l3.18-3.179a.75.75 0 0 0 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z" fill="currentColor"/></svg>',Vn='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M9.562 3.262a.5.5 0 0 1 .879 0l6.5 12a.5.5 0 0 1-.44.739H3.5a.5.5 0 0 1-.44-.739l6.503-12Zm1.758-.477c-.567-1.047-2.07-1.047-2.638 0L2.18 14.786a1.5 1.5 0 0 0 1.32 2.215h13.002a1.5 1.5 0 0 0 1.319-2.215l-6.5-12ZM10.5 7.5a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4Zm.25 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"/></svg>',Un=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#FFEBEE"/>
<path d="M8 8.5C8 7.94772 8.44772 7.5 9 7.5C9.55228 7.5 10 7.94772 10 8.5V13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13V8.5Z" fill="#FF382D"/>
<path d="M8 15.5C8 14.9477 8.44772 14.5 9 14.5C9.55228 14.5 10 14.9477 10 15.5C10 16.0523 9.55228 16.5 9 16.5C8.44772 16.5 8 16.0523 8 15.5Z" fill="#FF382D"/>
<path d="M11 8.5C11 7.94772 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8.5Z" fill="#FF382D"/>
<path d="M11 15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5Z" fill="#FF382D"/>
<path d="M14 8.5C14 7.94772 14.4477 7.5 15 7.5C15.5523 7.5 16 7.94772 16 8.5V13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13V8.5Z" fill="#FF382D"/>
<path d="M14 15.5C14 14.9477 14.4477 14.5 15 14.5C15.5523 14.5 16 14.9477 16 15.5C16 16.0523 15.5523 16.5 15 16.5C14.4477 16.5 14 16.0523 14 15.5Z" fill="#FF382D"/>
</svg>
`,Gn=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M9.7642 8L9.62358 14.1619H8.25142L8.11506 8H9.7642ZM8.9375 16.821C8.67898 16.821 8.45739 16.7301 8.27273 16.5483C8.09091 16.3665 8 16.1449 8 15.8835C8 15.6278 8.09091 15.4091 8.27273 15.2273C8.45739 15.0455 8.67898 14.9545 8.9375 14.9545C9.19034 14.9545 9.40909 15.0455 9.59375 15.2273C9.78125 15.4091 9.875 15.6278 9.875 15.8835C9.875 16.0568 9.83097 16.2145 9.7429 16.3565C9.65767 16.4986 9.54403 16.6122 9.40199 16.6974C9.26278 16.7798 9.10795 16.821 8.9375 16.821Z" fill="#446888"/>
<path d="M13.1073 8L12.9667 14.1619H11.5945L11.4582 8H13.1073ZM12.2806 16.821C12.0221 16.821 11.8005 16.7301 11.6159 16.5483C11.434 16.3665 11.3431 16.1449 11.3431 15.8835C11.3431 15.6278 11.434 15.4091 11.6159 15.2273C11.8005 15.0455 12.0221 14.9545 12.2806 14.9545C12.5335 14.9545 12.7522 15.0455 12.9369 15.2273C13.1244 15.4091 13.2181 15.6278 13.2181 15.8835C13.2181 16.0568 13.1741 16.2145 13.086 16.3565C13.0008 16.4986 12.8872 16.6122 12.7451 16.6974C12.6059 16.7798 12.4511 16.821 12.2806 16.821Z" fill="#446888"/>
<path d="M16.4505 8L16.3098 14.1619H14.9377L14.8013 8H16.4505ZM15.6237 16.821C15.3652 16.821 15.1436 16.7301 14.959 16.5483C14.7772 16.3665 14.6862 16.1449 14.6862 15.8835C14.6862 15.6278 14.7772 15.4091 14.959 15.2273C15.1436 15.0455 15.3652 14.9545 15.6237 14.9545C15.8766 14.9545 16.0953 15.0455 16.28 15.2273C16.4675 15.4091 16.5612 15.6278 16.5612 15.8835C16.5612 16.0568 16.5172 16.2145 16.4291 16.3565C16.3439 16.4986 16.2303 16.6122 16.0882 16.6974C15.949 16.7798 15.7942 16.821 15.6237 16.821Z" fill="#446888"/>
</svg>`,zn=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M10.7642 8L10.6236 14.1619H9.25142L9.11506 8H10.7642ZM9.9375 16.821C9.67898 16.821 9.45739 16.7301 9.27273 16.5483C9.09091 16.3665 9 16.1449 9 15.8835C9 15.6278 9.09091 15.4091 9.27273 15.2273C9.45739 15.0455 9.67898 14.9545 9.9375 14.9545C10.1903 14.9545 10.4091 15.0455 10.5938 15.2273C10.7812 15.4091 10.875 15.6278 10.875 15.8835C10.875 16.0568 10.831 16.2145 10.7429 16.3565C10.6577 16.4986 10.544 16.6122 10.402 16.6974C10.2628 16.7798 10.108 16.821 9.9375 16.821Z" fill="#446888"/>
<path d="M14.1073 8L13.9667 14.1619H12.5945L12.4582 8H14.1073ZM13.2806 16.821C13.0221 16.821 12.8005 16.7301 12.6159 16.5483C12.434 16.3665 12.3431 16.1449 12.3431 15.8835C12.3431 15.6278 12.434 15.4091 12.6159 15.2273C12.8005 15.0455 13.0221 14.9545 13.2806 14.9545C13.5335 14.9545 13.7522 15.0455 13.9369 15.2273C14.1244 15.4091 14.2181 15.6278 14.2181 15.8835C14.2181 16.0568 14.1741 16.2145 14.086 16.3565C14.0008 16.4986 13.8872 16.6122 13.7451 16.6974C13.6059 16.7798 13.4511 16.821 13.2806 16.821Z" fill="#446888"/>
</svg>`,Kn=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M12.7642 8L12.6236 14.1619H11.2514L11.1151 8H12.7642ZM11.9375 16.821C11.679 16.821 11.4574 16.7301 11.2727 16.5483C11.0909 16.3665 11 16.1449 11 15.8835C11 15.6278 11.0909 15.4091 11.2727 15.2273C11.4574 15.0455 11.679 14.9545 11.9375 14.9545C12.1903 14.9545 12.4091 15.0455 12.5938 15.2273C12.7812 15.4091 12.875 15.6278 12.875 15.8835C12.875 16.0568 12.831 16.2145 12.7429 16.3565C12.6577 16.4986 12.544 16.6122 12.402 16.6974C12.2628 16.7798 12.108 16.821 11.9375 16.821Z" fill="#446888"/>
</svg>`,Fn=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M13.5686 8L11.1579 16.9562H10L12.4107 8H13.5686Z" fill="#446888"/>
</svg>`,X='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.314 7.565l-.136.126l-10.48 10.488a2.27 2.27 0 0 0 3.211 3.208L16.388 10.9a2.251 2.251 0 0 0-.001-3.182l-.157-.146a2.25 2.25 0 0 0-2.916-.007Zm-.848 2.961l1.088 1.088l-8.706 8.713a.77.77 0 1 1-1.089-1.088l8.707-8.713Zm4.386 4.48L16.75 15a.75.75 0 0 0-.743.648L16 15.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.694.648.743l.102.007H16v.75c0 .38.282.694.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V18h.75a.75.75 0 0 0 .743-.648L19 17.25a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743L16.75 15l.102.007Zm-1.553-6.254l.027.027a.751.751 0 0 1 0 1.061l-.711.713l-1.089-1.089l.73-.73a.75.75 0 0 1 1.043.018ZM6.852 5.007L6.75 5a.75.75 0 0 0-.743.648L6 5.75v.75h-.75a.75.75 0 0 0-.743.648L4.5 7.25c0 .38.282.693.648.743L5.25 8H6v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648L7.5 8.75V8h.75a.75.75 0 0 0 .743-.648L9 7.25a.75.75 0 0 0-.648-.743L8.25 6.5H7.5v-.75a.75.75 0 0 0-.648-.743L6.75 5l.102.007Zm12-2L18.75 3a.75.75 0 0 0-.743.648L18 3.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743L17.25 6H18v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V6h.75a.75.75 0 0 0 .743-.648L21 5.25a.75.75 0 0 0-.648-.743L20.25 4.5h-.75v-.75a.75.75 0 0 0-.648-.743L18.75 3l.102.007Z" fill="currentColor"/></svg>',Yn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15ZM5.5 18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1V18Z" fill="currentColor"/></svg>',Wn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 19.5h14.5a.75.75 0 0 0 .102-1.493L21.25 18H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm0-15h14.5a.75.75 0 0 0 .102-1.493L21.25 3H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm7 3.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM13 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm-2-2.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7V9.5Z" fill="currentColor"/></svg>',Xn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 4.5h14.5a.75.75 0 0 0 .102-1.493L21.25 3H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm0 15h14.5a.75.75 0 0 0 .102-1.493L21.25 18H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm7-11.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM13 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm-2-2.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5Z" fill="currentColor"/></svg>',Jn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17h7.522l-2 2H3a1 1 0 0 1-.117-1.993L3 17Zm0-2h7.848a1.75 1.75 0 0 1-.775-2H3l-.117.007A1 1 0 0 0 3 15Zm0-8h18l.117-.007A1 1 0 0 0 21 5H3l-.117.007A1 1 0 0 0 3 7Zm9.72 9.216a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5ZM3 9h10a1 1 0 0 1 .117 1.993L13 11H3a1 1 0 0 1-.117-1.993L3 9Zm13.5-1a.75.75 0 0 1 .744.658l.14 1.13a3.25 3.25 0 0 0 2.828 2.829l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14a3.25 3.25 0 0 0 2.829-2.828l.139-1.13A.75.75 0 0 1 16.5 8Z" fill="currentColor"/></svg>',qn='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18"viewBox="0 0 24 24"><path fill="currentColor" d="M3.839 5.858c2.94-3.916 9.03-5.055 13.364-2.36c4.28 2.66 5.854 7.777 4.1 12.577c-1.655 4.533-6.016 6.328-9.159 4.048c-1.177-.854-1.634-1.925-1.854-3.664l-.106-.987l-.045-.398c-.123-.934-.311-1.352-.705-1.572c-.535-.298-.892-.305-1.595-.033l-.351.146l-.179.078c-1.014.44-1.688.595-2.541.416l-.2-.047l-.164-.047c-2.789-.864-3.202-4.647-.565-8.157Zm.984 6.716l.123.037l.134.03c.439.087.814.015 1.437-.242l.602-.257c1.202-.493 1.985-.54 3.046.05c.917.512 1.275 1.298 1.457 2.66l.053.459l.055.532l.047.422c.172 1.361.485 2.09 1.248 2.644c2.275 1.65 5.534.309 6.87-3.349c1.516-4.152.174-8.514-3.484-10.789c-3.675-2.284-8.899-1.306-11.373 1.987c-2.075 2.763-1.82 5.28-.215 5.816Zm11.225-1.994a1.25 1.25 0 1 1 2.414-.647a1.25 1.25 0 0 1-2.414.647Zm.494 3.488a1.25 1.25 0 1 1 2.415-.647a1.25 1.25 0 0 1-2.415.647ZM14.07 7.577a1.25 1.25 0 1 1 2.415-.647a1.25 1.25 0 0 1-2.415.647Zm-.028 8.998a1.25 1.25 0 1 1 2.414-.647a1.25 1.25 0 0 1-2.414.647Zm-3.497-9.97a1.25 1.25 0 1 1 2.415-.646a1.25 1.25 0 0 1-2.415.646Z"/></svg>',Qn='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm5 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm4.25.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"/></svg>',e1='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A9.965 9.965 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.232-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.961 9.961 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662Zm-8.248-4.903c-1.25 2.389-3.31 4.1-6.817 5.499a8.49 8.49 0 0 0 2.152 1.766a8.502 8.502 0 0 0 8.502-14.725a8.484 8.484 0 0 0-2.792-1.015c.647 3.384.23 6.043-1.045 8.475Z"/></svg>',t1='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4.25 3A2.25 2.25 0 0 0 2 5.25v10.5A2.25 2.25 0 0 0 4.25 18H9.5v1.25c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25V18h5.25A2.25 2.25 0 0 0 22 15.75V5.25A2.25 2.25 0 0 0 19.75 3H4.25ZM13 18v1.25c0 .45.108.875.3 1.25h-2.6c.192-.375.3-.8.3-1.25V18h2ZM3.5 5.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V13h-17V5.25Zm0 9.25h17v1.25a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V14.5Z"/></svg>',Y='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3.5c-3.104 0-6 2.432-6 6.25v4.153L4.682 17h14.67l-1.354-3.093V11.75a.75.75 0 0 1 1.5 0v1.843l1.381 3.156a1.25 1.25 0 0 1-1.145 1.751H15a3.002 3.002 0 0 1-6.003 0H4.305a1.25 1.25 0 0 1-1.15-1.739l1.344-3.164V9.75C4.5 5.068 8.103 2 12 2c.86 0 1.705.15 2.5.432a.75.75 0 0 1-.502 1.413A5.964 5.964 0 0 0 12 3.5ZM12 20c.828 0 1.5-.671 1.501-1.5h-3.003c0 .829.673 1.5 1.502 1.5Zm3.25-13h-2.5l-.101.007A.75.75 0 0 0 12.75 8.5h1.043l-1.653 2.314l-.055.09A.75.75 0 0 0 12.75 12h2.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.042l1.653-2.314l.055-.09A.75.75 0 0 0 15.25 7Zm6-5h-3.5l-.101.007A.75.75 0 0 0 17.75 3.5h2.134l-2.766 4.347l-.05.09A.75.75 0 0 0 17.75 9h3.5l.102-.007A.75.75 0 0 0 21.25 7.5h-2.133l2.766-4.347l.05-.09A.75.75 0 0 0 21.25 2Z"/></svg>',i1=t=>[{key:"light",label:t("COMMAND_BAR.COMMANDS.LIGHT_MODE"),icon:Qn},{key:"dark",label:t("COMMAND_BAR.COMMANDS.DARK_MODE"),icon:e1},{key:"auto",label:t("COMMAND_BAR.COMMANDS.SYSTEM_MODE"),icon:t1}],n1=t=>{_i.set(gi.COLOR_SCHEME,t);const e=window.matchMedia("(prefers-color-scheme: dark)").matches;Ci(e)};function o1(){const{t}=ee(),e=A(()=>i1(t));return{goToAppearanceHotKeys:A(()=>{const n=e.value.map(o=>({id:o.key,title:o.label,parent:"appearance_settings",section:t("COMMAND_BAR.SECTIONS.APPEARANCE"),icon:o.icon,handler:()=>{n1(o.key)}}));return[{id:"appearance_settings",title:t("COMMAND_BAR.COMMANDS.CHANGE_APPEARANCE"),section:t("COMMAND_BAR.SECTIONS.APPEARANCE"),icon:qn,children:n.map(o=>o.id)},...n]})}}const $=L.SNOOZE_OPTIONS,oe=t=>()=>j.emit(Mi,t),s1=[{id:"snooze_notification",title:"COMMAND_BAR.COMMANDS.SNOOZE_NOTIFICATION",icon:Y,children:Object.values($)},{id:$.AN_HOUR_FROM_NOW,title:"COMMAND_BAR.COMMANDS.AN_HOUR_FROM_NOW",parent:"snooze_notification",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",icon:Y,handler:oe($.AN_HOUR_FROM_NOW)},{id:$.UNTIL_TOMORROW,title:"COMMAND_BAR.COMMANDS.UNTIL_TOMORROW",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:Y,handler:oe($.UNTIL_TOMORROW)},{id:$.UNTIL_NEXT_WEEK,title:"COMMAND_BAR.COMMANDS.UNTIL_NEXT_WEEK",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:Y,handler:oe($.UNTIL_NEXT_WEEK)},{id:$.UNTIL_NEXT_MONTH,title:"COMMAND_BAR.COMMANDS.UNTIL_NEXT_MONTH",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:Y,handler:oe($.UNTIL_NEXT_MONTH)},{id:$.UNTIL_CUSTOM_TIME,title:"COMMAND_BAR.COMMANDS.UNTIL_CUSTOM_TIME",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:Y,handler:oe($.UNTIL_CUSTOM_TIME)}];function a1(){const{t}=ee(),e=Et(),i=o=>o.map(s=>({...s,title:t(s.title),section:s.section?t(s.section):void 0}));return{inboxHotKeys:A(()=>wt(e.name)?i(s1):[])}}const l1=[{id:"goto_conversation_dashboard",title:"COMMAND_BAR.COMMANDS.GO_TO_CONVERSATION_DASHBOARD",section:"COMMAND_BAR.SECTIONS.GENERAL",icon:In,path:t=>`accounts/${t}/dashboard`,role:["administrator","agent"]},{id:"goto_contacts_dashboard",title:"COMMAND_BAR.COMMANDS.GO_TO_CONTACTS_DASHBOARD",section:"COMMAND_BAR.SECTIONS.GENERAL",featureFlag:b.CRM,icon:bn,path:t=>`accounts/${t}/contacts`,role:["administrator","agent"]},{id:"open_reports_overview",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_REPORTS_OVERVIEW",featureFlag:b.REPORTS,icon:Rn,path:t=>`accounts/${t}/reports/overview`,role:["administrator"]},{id:"open_conversation_reports",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_CONVERSATION_REPORTS",featureFlag:b.REPORTS,icon:$n,path:t=>`accounts/${t}/reports/conversation`,role:["administrator"]},{id:"open_agent_reports",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_AGENT_REPORTS",featureFlag:b.REPORTS,icon:mt,path:t=>`accounts/${t}/reports/agent`,role:["administrator"]},{id:"open_label_reports",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_LABEL_REPORTS",featureFlag:b.REPORTS,icon:xn,path:t=>`accounts/${t}/reports/label`,role:["administrator"]},{id:"open_inbox_reports",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_INBOX_REPORTS",featureFlag:b.REPORTS,icon:Ln,path:t=>`accounts/${t}/reports/inboxes`,role:["administrator"]},{id:"open_team_reports",section:"COMMAND_BAR.SECTIONS.REPORTS",title:"COMMAND_BAR.COMMANDS.GO_TO_TEAM_REPORTS",featureFlag:b.REPORTS,icon:Nt,path:t=>`accounts/${t}/reports/teams`,role:["administrator"]},{id:"open_agent_settings",section:"COMMAND_BAR.SECTIONS.SETTINGS",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_AGENTS",featureFlag:b.AGENT_MANAGEMENT,icon:mt,path:t=>`accounts/${t}/settings/agents/list`,role:["administrator"]},{id:"open_team_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_TEAMS",featureFlag:b.TEAM_MANAGEMENT,section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Nt,path:t=>`accounts/${t}/settings/teams/list`,role:["administrator"]},{id:"open_inbox_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_INBOXES",featureFlag:b.INBOX_MANAGEMENT,section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Pn,path:t=>`accounts/${t}/settings/inboxes/list`,role:["administrator"]},{id:"open_label_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_LABELS",featureFlag:b.LABELS,section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Bn,path:t=>`accounts/${t}/settings/labels/list`,role:["administrator"]},{id:"open_canned_response_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_CANNED_RESPONSES",featureFlag:b.CANNED_RESPONSES,section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Dn,path:t=>`accounts/${t}/settings/canned-response/list`,role:["administrator","agent"]},{id:"open_applications_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_APPLICATIONS",featureFlag:b.INTEGRATIONS,section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Zn,path:t=>`accounts/${t}/settings/applications`,role:["administrator"]},{id:"open_account_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_ACCOUNT",section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:Hn,path:t=>`accounts/${t}/settings/general`,role:["administrator"]},{id:"open_profile_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_PROFILE",section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:kn,path:t=>`accounts/${t}/profile/settings`,role:["administrator","agent"]},{id:"open_notifications",title:"COMMAND_BAR.COMMANDS.GO_TO_NOTIFICATIONS",section:"COMMAND_BAR.SECTIONS.SETTINGS",icon:jn,path:t=>`accounts/${t}/notifications`,role:["administrator","agent"]}];function r1(){const{t}=ee(),e=Ai(),{isAdmin:i}=Si(),n=k("getCurrentAccountId"),o=k("accounts/isFeatureEnabledonAccount"),s=l=>{e.push(Oi(l))};return{goToCommandHotKeys:A(()=>{let l=l1.filter(r=>r.featureFlag?o.value(n.value,r.featureFlag):!0);return i.value||(l=l.filter(r=>r.role.includes("agent"))),l.map(r=>({id:r.id,section:t(r.section),title:t(r.title),icon:r.icon,handler:()=>s(r.path(n.value))}))})}}const Kt=L.SNOOZE_OPTIONS,c1=[{id:"resolve_conversation",title:"COMMAND_BAR.COMMANDS.RESOLVE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:zt,handler:()=>j.emit(yi)}],Ft=(t,e,i)=>Object.values(Kt).map(n=>({id:n,title:`COMMAND_BAR.COMMANDS.${n.toUpperCase()}`,parent:e,section:i,icon:Fe,handler:()=>j.emit(t,n)})),Mt=[{id:"snooze_conversation",title:"COMMAND_BAR.COMMANDS.SNOOZE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:Fe,children:Object.values(Kt)},...Ft(Ii,"snooze_conversation","COMMAND_BAR.SECTIONS.SNOOZE_CONVERSATION")],h1=[{id:"reopen_conversation",title:"COMMAND_BAR.COMMANDS.REOPEN_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:Gt,handler:()=>j.emit(bi)}],d1={id:"send_transcript",title:"COMMAND_BAR.COMMANDS.SEND_TRANSCRIPT",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:yn,handler:()=>j.emit(Ti)},u1={id:"unmute_conversation",title:"COMMAND_BAR.COMMANDS.UNMUTE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:Tn,handler:()=>j.emit(Ei)},p1={id:"mute_conversation",title:"COMMAND_BAR.COMMANDS.MUTE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:wn,handler:()=>j.emit(wi)},v1=L.SNOOZE_OPTIONS,Yt=t=>()=>j.emit(t),f1=[{id:"bulk_action_snooze_conversation",title:"COMMAND_BAR.COMMANDS.SNOOZE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:Fe,children:Object.values(v1)},...Ft($i,"bulk_action_snooze_conversation","COMMAND_BAR.SECTIONS.BULK_ACTIONS")],_1=[{id:"bulk_action_reopen_conversation",title:"COMMAND_BAR.COMMANDS.REOPEN_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:Gt,handler:Yt(xi)}],A1=[{id:"bulk_action_resolve_conversation",title:"COMMAND_BAR.COMMANDS.RESOLVE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:zt,handler:Yt(Ri)}];function g1(){const{t}=ee(),e=k("bulkActions/getSelectedConversationIds"),i=o=>o.map(s=>({...s,title:t(s.title),section:t(s.section)}));return{bulkActionsHotKeys:A(()=>{let o=[];return e.value.length>0&&(o=[...f1,..._1,...A1]),i(o)})}}const Be=(t,e)=>t.map(i=>({...i,title:e(i.title),section:e(i.section)})),O1=(t,e)=>[{label:t("CONVERSATION.PRIORITY.OPTIONS.NONE"),key:null,icon:Fn},{label:t("CONVERSATION.PRIORITY.OPTIONS.URGENT"),key:"urgent",icon:Un},{label:t("CONVERSATION.PRIORITY.OPTIONS.HIGH"),key:"high",icon:Gn},{label:t("CONVERSATION.PRIORITY.OPTIONS.MEDIUM"),key:"medium",icon:zn},{label:t("CONVERSATION.PRIORITY.OPTIONS.LOW"),key:"low",icon:Kn}].filter(i=>i.key!==e),m1=(t,e)=>e===mi.REPLY?[{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.REPLY_SUGGESTION"),key:"reply_suggestion",icon:X}]:[{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.SUMMARIZE"),key:"summarize",icon:Yn}],N1=t=>[{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.REPHRASE"),key:"rephrase",icon:X},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.FIX_SPELLING_GRAMMAR"),key:"fix_spelling_grammar",icon:Jn},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.EXPAND"),key:"expand",icon:Wn},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.SHORTEN"),key:"shorten",icon:Xn},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.MAKE_FRIENDLY"),key:"make_friendly",icon:X},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.MAKE_FORMAL"),key:"make_formal",icon:X},{label:t("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.SIMPLIFY"),key:"simplify",icon:X}];function C1(){const{t}=ee(),e=St(),i=Et(),{activeLabels:n,inactiveLabels:o,addLabelToConversation:s,removeLabelFromConversation:a}=Li(),{isAIIntegrationEnabled:l}=ji(),{agentsList:r}=ki(),c=k("getSelectedChat"),h=k("draftMessages/getReplyEditorMode"),u=k("getContextMenuChatId"),d=k("teams/getTeams"),p=k("draftMessages/get"),v=A(()=>{var _;return(_=c.value)==null?void 0:_.id}),g=A(()=>`draft-${v.value}-${h.value}`),y=A(()=>p.value(g.value)),P=A(()=>{var _,f;return!!((f=(_=c.value)==null?void 0:_.meta)!=null&&f.team)}),F=A(()=>P.value?[{id:0,name:t("TEAMS_SETTINGS.LIST.NONE")},...d.value]:d.value),Wt=_=>{e.dispatch("assignAgent",{conversationId:c.value.id,agentId:_.agentInfo.id})},Xt=_=>{e.dispatch("assignPriority",{conversationId:c.value.id,priority:_.priority.key})},Jt=_=>{e.dispatch("assignTeam",{conversationId:c.value.id,teamId:_.teamInfo.id})},qt=A(()=>{var We,Xe,Je;const _=((We=c.value)==null?void 0:We.status)===L.STATUS_TYPE.OPEN,f=((Xe=c.value)==null?void 0:Xe.status)===L.STATUS_TYPE.SNOOZED,I=((Je=c.value)==null?void 0:Je.status)===L.STATUS_TYPE.RESOLVED;let Me=[];return _?Me=[...c1,...Mt]:(I||f)&&(Me=h1),Be(Me,t)}),Qt=A(()=>{var _;return O1(t,(_=c.value)==null?void 0:_.priority)}),ei=A(()=>{const _=r.value.map(f=>({id:`agent-${f.id}`,title:f.name,parent:"assign_an_agent",section:t("COMMAND_BAR.SECTIONS.CHANGE_ASSIGNEE"),agentInfo:f,icon:gt,handler:Wt}));return[{id:"assign_an_agent",title:t("COMMAND_BAR.COMMANDS.ASSIGN_AN_AGENT"),section:t("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:gt,children:_.map(f=>f.id)},..._]}),ti=A(()=>{const _=Qt.value.map(f=>({id:`priority-${f.key}`,title:f.label,parent:"assign_priority",section:t("COMMAND_BAR.SECTIONS.CHANGE_PRIORITY"),priority:f,icon:f.icon,handler:Xt}));return[{id:"assign_priority",title:t("COMMAND_BAR.COMMANDS.ASSIGN_PRIORITY"),section:t("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Vn,children:_.map(f=>f.id)},..._]}),ii=A(()=>{const _=F.value.map(f=>({id:`team-${f.id}`,title:f.name,parent:"assign_a_team",section:t("COMMAND_BAR.SECTIONS.CHANGE_TEAM"),teamInfo:f,icon:Ct,handler:Jt}));return[{id:"assign_a_team",title:t("COMMAND_BAR.COMMANDS.ASSIGN_A_TEAM"),section:t("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Ct,children:_.map(f=>f.id)},..._]}),Ye=A(()=>[...o.value.map(f=>({id:f.title,title:`#${f.title}`,parent:"add_a_label_to_the_conversation",section:t("COMMAND_BAR.SECTIONS.ADD_LABEL"),icon:At,handler:I=>s({title:I.id})})),{id:"add_a_label_to_the_conversation",title:t("COMMAND_BAR.COMMANDS.ADD_LABELS_TO_CONVERSATION"),section:t("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:At,children:o.value.map(f=>f.title)}]),ni=A(()=>[...n.value.map(f=>({id:f.title,title:`#${f.title}`,parent:"remove_a_label_to_the_conversation",section:t("COMMAND_BAR.SECTIONS.REMOVE_LABEL"),icon:Ot,handler:I=>a(I.id)})),{id:"remove_a_label_to_the_conversation",title:t("COMMAND_BAR.COMMANDS.REMOVE_LABEL_FROM_CONVERSATION"),section:t("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Ot,children:n.value.map(f=>f.title)}]),oi=A(()=>n.value.length?[...Ye.value,...ni.value]:Ye.value),si=A(()=>Be([c.value.muted?u1:p1,d1],t)),ai=A(()=>{const f=(y.value?N1(t):m1(t,h.value)).map(I=>({id:`ai-assist-${I.key}`,title:I.label,parent:"ai_assist",section:t("COMMAND_BAR.SECTIONS.AI_ASSIST"),priority:I,icon:I.icon,handler:()=>j.emit(Di,I.key)}));return[{id:"ai_assist",title:t("COMMAND_BAR.COMMANDS.AI_ASSIST"),section:t("COMMAND_BAR.SECTIONS.AI_ASSIST"),icon:X,children:f.map(I=>I.id)},...f]}),li=A(()=>Qe(i.name)||wt(i.name)),ri=A(()=>Qe(i.name,!0,!1)&&u.value),ci=A(()=>{const _=[...qt.value,...si.value,...ei.value,...ii.value,...oi.value,...ti.value];return l.value?[..._,...ai.value]:_});return{conversationHotKeys:A(()=>ri.value?Be(Mt,t):li.value?ci.value:[])}}const M1=["placeholder"],n0={__name:"commandbar",setup(t){const e=St(),{t:i}=ee(),n=qe(null),o=qe(null),{goToAppearanceHotKeys:s}=o1(),{inboxHotKeys:a}=a1(),{goToCommandHotKeys:l}=r1(),{bulkActionsHotKeys:r}=g1(),{conversationHotKeys:c}=C1(),h=A(()=>i("COMMAND_BAR.SEARCH_PLACEHOLDER")),u=A(()=>[...a.value,...l.value,...s.value,...r.value,...c.value]),d=()=>{n.value.data=u.value},p=g=>{const{detail:{action:{title:y=null,section:P=null,id:F=null}={}}={}}=g;F===L.SNOOZE_OPTIONS.UNTIL_CUSTOM_TIME?o.value=L.SNOOZE_OPTIONS.UNTIL_CUSTOM_TIME:o.value=null,fi(Ni.COMMAND_BAR,{section:P,action:y}),d()},v=()=>{o.value!==L.SNOOZE_OPTIONS.UNTIL_CUSTOM_TIME&&e.dispatch("setContextMenuChatId",null)};return hi(()=>{n.value&&(n.value.data=u.value)}),di(d),(g,y)=>(pi(),ui("ninja-keys",{ref_key:"ninjakeys",ref:n,noAutoLoadMdIcons:"",hideBreadcrumbs:"",placeholder:h.value,onSelected:p,onClosed:v},null,40,M1))}};export{n0 as default};
//# sourceMappingURL=commandbar-k9k_yqA9.js.map
