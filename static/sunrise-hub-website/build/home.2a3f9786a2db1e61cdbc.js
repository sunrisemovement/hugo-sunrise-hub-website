!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/sunrise-hub-website/build/",s(s.s=2)}([function(e,t,s){var n,i,r,o,a;e.exports=(i=[],r=document,o=r.documentElement.doScroll,(a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener("DOMContentLoaded",n=function(){for(r.removeEventListener("DOMContentLoaded",n),a=1;n=i.shift();)n()}),function(e){a?setTimeout(e,0):i.push(e)})},,function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n);class r{constructor(e,t,s){this.year=e,this.month=t,this.day=s,this.cachedNearestPreviousSunday=null,this.cachedNearestNextSaturday=null}equals(e){return this.year===e.year&&this.month===e.month&&this.day===e.day}compare(e){return this.year<e.year?-1:this.year>e.year?1:this.month<e.month?-1:this.month>e.month?1:this.day<e.day?-1:this.day>e.day?1:0}nearestPreviousSunday(){if(!this.cachedNearestPreviousSunday){const e=this.toDate();e.setDate(e.getDate()-e.getDay()),this.cachedNearestPreviousSunday=this.fromDate(e)}return this.cachedNearestPreviousSunday}nearestNextSaturday(){if(!this.cachedNearestNextSaturday){const e=this.toDate();e.setDate(e.getDate()+(6-e.getDay())),this.cachedNearestNextSaturday=this.fromDate(e)}return this.cachedNearestNextSaturday}tomorrow(){const e=this.toDate();return e.setDate(e.getDate()+1),this.fromDate(e)}toString(e){switch(e){case"full":const t=this.toDate();return new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(t);case"iso8601":return`${this.year}-${(this.month+1).toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`;default:return`<DayOfYear year=${this.year} month=${this.month}, day=${this.day}>`}}toDate(){return new Date(this.year,this.month,this.day)}fromDate(e){return new r(e.getFullYear(),e.getMonth(),e.getDate())}}class o{constructor(e){this.millis=e}toString(e){switch(e){case"full":{const e=new Date(this.millis);return new Intl.DateTimeFormat("en-US",{hour12:!0,hour:"numeric",minute:"2-digit"}).format(e)}case"iso8601":throw new Error("not implemented");default:return`<TimeOfDay millis=${this.millis}>`}}}const a=864e5;class l{constructor({description:e,title:t,url:s,address:n,place:i,start:l,coordinates:c}){this.title=t,this.place=i,this.address=n,this.coordinate=c,this.url=s,this.description=e;const d=new Date(l);this.time=new o(d.valueOf()%a),this.date=new r(d.getFullYear(),d.getMonth(),d.getDate())}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c=new WeakMap,d=e=>(...t)=>{const s=e(...t);return c.set(s,!0),s},h=e=>"function"==typeof e&&c.has(e),u=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,p=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},m={},f={},v=`{{lit-${String(Math.random()).slice(2)}}}`,g=`\x3c!--${v}--\x3e`,y=new RegExp(`${v}|${g}`),b="$lit$";class w{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)_(t[e].name,b)&&n++;for(;n-- >0;){const t=l[a],s=P.exec(t)[2],n=s.toLowerCase()+b,i=e.getAttribute(n);e.removeAttribute(n);const r=i.split(y);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(v)>=0){const n=e.parentNode,i=t.split(y),r=i.length-1;for(let t=0;t<r;t++){let s,r=i[t];if(""===r)s=x();else{const e=P.exec(r);null!==e&&_(e[2],b)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-b.length)+e[3]),s=document.createTextNode(r)}n.insertBefore(s,e),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(x(),e),s.push(e)):e.data=i[r],a+=r}}else if(8===e.nodeType)if(e.data===v){const t=e.parentNode;null!==e.previousSibling&&o!==r||(o++,t.insertBefore(x(),e)),r=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(s.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(v,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const _=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},S=e=>-1!==e.index,x=()=>document.createComment(""),P=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class N{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=u?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,r=0,o=0,a=n.nextNode();for(;r<s.length;)if(i=s[r],S(i)){for(;o<i.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return u&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class C{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const r=P.exec(e);t+=null===r?e+(s?v:g):e.substr(0,r.index)+r[1]+r[2]+b+r[3]+v}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const k=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class M{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(k(e)||!E(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||k(e)&&e===this.value||(this.value=e,h(e)||(this.committer.dirty=!0))}commit(){for(;h(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(x()),this.endNode=e.appendChild(x())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=x()),e.__insert(this.endNode=x())}insertAfterPart(e){e.__insert(this.startNode=x()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;h(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof C?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===f?(this.value=f,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof N&&this.value.template===t)this.value.update(e.values);else{const s=new N(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new T(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){p(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;h(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class R extends M{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends ${}let D=!1;try{const e={get capture(){return D=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class j{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;h(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=V(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const V=e=>e&&(D?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new R(e,t.slice(1),s).parts:"@"===i?[new j(e,t.slice(1),n.eventContext)]:"?"===i?[new O(e,t.slice(1),s)]:new M(e,t,s).parts}handleTextExpression(e){return new T(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function F(e){let t=U.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(v);return void 0===(s=t.keyString.get(n))&&(s=new w(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const U=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const L=(e,...t)=>new C(e,t,"html",z),q=133;function H(e,t){const{element:{content:s},parts:n}=e,i=document.createTreeWalker(s,q,null,!1);let r=B(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=n[r=B(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const W=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,q,null,!1);for(;s.nextNode();)t++;return t},B=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(S(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=(e,t)=>`${e}--${t}`;let J=!0;void 0===window.ShadyCSS?J=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),J=!1);const X=e=>t=>{const s=Y(t.type,e);let n=U.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},U.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(v);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();J&&window.ShadyCSS.prepareTemplateDom(s,e),i=new w(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i},G=["html","svg"],K=new Set,Q=(e,t,s)=>{K.add(s);const n=e.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const r=document.createElement("style");for(let e=0;e<i;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{G.forEach(t=>{const s=U.get(Y(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),H(e,s)})})})(s);const o=t.element.content;!function(e,t,s=null){const{element:{content:n},parts:i}=e;if(null==s)return void n.appendChild(t);const r=document.createTreeWalker(n,q,null,!1);let o=B(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=W(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=B(i,o);return}o=B(i,o)}}(t,r,o.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s);const a=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{o.insertBefore(r,o.firstChild);const e=new Set;e.add(r),H(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const Z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ee=(e,t)=>t!==e&&(t==t||e==e),te={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ee},se=Promise.resolve(!0),ne=1,ie=4,re=8,oe=16,ae=32;class le extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=se,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=te){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=ee){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||Z,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||Z.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ae,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=te){const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|re,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~re}}_attributeToProperty(e,t){if(this._updateState&re)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||te;this._updateState=this._updateState|oe,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~oe}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const n=this.constructor,i=n._classProperties.get(e)||te;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&oe||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|ie;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{e=s,t=n});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ae}get _hasRequestedUpdate(){return this._updateState&ie}get hasUpdated(){return this._updateState&ne}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&ne||(this._updateState=this._updateState|ne,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ie}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}le.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ce=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:n}=t;return{kind:s,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),de=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}}:Object.assign({},t,{finisher(s){s.createProperty(t.key,e)}}),he=(e,t,s)=>{t.constructor.createProperty(s,e)};function ue(e){return(t,s)=>void 0!==s?he(e,t,s):de(e,t)}const pe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol();class fe{constructor(e,t){if(t!==me)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(pe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ve=(e,...t)=>{const s=t.reduce((t,s,n)=>t+(e=>{if(e instanceof fe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[n+1],e[0]);return new fe(s,me)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ge=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ye extends le{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ge(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?pe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof C&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ye.finalized=!0,ye.render=(e,t,s)=>{const n=s.scopeName,i=I.has(t),r=J&&11===t.nodeType&&!!t.host&&e instanceof C,o=r&&!K.has(n),a=o?document.createDocumentFragment():t;if(((e,t,s)=>{let n=I.get(t);void 0===n&&(p(t,t.firstChild),I.set(t,n=new T(Object.assign({templateFactory:F},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:X(n)},s)),o){const e=I.get(a);I.delete(a),e.value instanceof N&&Q(a,e.value.template,n),p(t,t.firstChild),t.appendChild(a),I.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const be=new WeakMap,we=d(e=>t=>{if(!(t instanceof $)||t instanceof A||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=t,{element:n}=s;be.has(t)||(n.className=s.strings.join(" "));const{classList:i}=n,r=be.get(t);for(const t in r)t in e||i.remove(t);for(const t in e){const s=e[t];if(!r||s!==r[t]){i[s?"add":"remove"](t)}}be.set(t,e)});class _e{constructor(e,t){this.year=e,this.month=t,this.cachedFirst=null,this.cachedLast=null}firstDay(){if(!this.cachedFirst){const e=new Date(this.year,this.month,1);this.cachedFirst=new r(e.getFullYear(),e.getMonth(),e.getDate())}return this.cachedFirst}lastDay(){if(!this.cachedLast){const e=new Date(this.year,this.month,1);e.setMonth(e.getMonth()+1),e.setDate(0),this.cachedLast=new r(e.getFullYear(),e.getMonth(),e.getDate())}return this.cachedLast}contains(e){return this.year===e.year&&this.month===e.month}add(e){const t=new Date(this.year,this.month,1);return t.setMonth(t.getMonth()+e),new _e(t.getFullYear(),t.getMonth())}formatForSwitcher(){const e=new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}),t=new Date(this.year,this.month);return e.format(t)}static now(){const e=new Date;return new _e(e.getFullYear(),e.getMonth())}}class Se{constructor(e,t){this.final=t.tomorrow(),this.current=e}*[Symbol.iterator](){for(;!this.current.equals(this.final);)yield this.current,this.current=this.current.tomorrow()}}var xe,Pe=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},Ne=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const Ce=["Su","Mo","Tu","We","Th","Fr","Sa"];let ke=xe=class extends ye{constructor(){super(...arguments),this.events=[],this.selected=null,this.month=_e.now()}static register(){return window.customElements.get("sunrise-events-calendar")||window.customElements.define("sunrise-events-calendar",xe),window.customElements.whenDefined("sunrise-events-calendar")}onDayClick(e){const t=e.toString("iso8601"),s=this.renderRoot.querySelector(`[data-day="${t}"]`);s&&s.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}onNextMonthClick(){this.month=this.month.add(1)}onPreviousMonthClick(){this.month=this.month.add(-1)}eventsByDay(e){const t=e.reduce((e,t)=>{const s=t.date.toString("iso8601"),n=e.has(s)?e.get(s):[];return n.push(t),e.set(s,n),e},new Map);return Array.from(t.entries()).map(([e,t])=>t).sort((e,t)=>e[0].date.compare(t[0].date))}onEventClick(e){this.selected=e,this.dispatchEvent(new CustomEvent("select"))}render(){const e=new Set(this.events.map(e=>e.date.toString("iso8601"))),t=Array.from(new Se(this.month.firstDay().nearestPreviousSunday(),this.month.lastDay().nearestNextSaturday()));return L`
      <div class="outer-card">
        <div class="inner-card">
          <div class="calendar">
            <div class="calendar-switcher">
              <button
                class="calendar-switcher-button"
                @click=${()=>this.onPreviousMonthClick()}>
                <span class="icon">chevron_left</span>
              </button>
              <div>${this.month.formatForSwitcher()}</div>
              <button
                class="calendar-switcher-button"
                @click=${()=>this.onNextMonthClick()}>
                <span class="icon">chevron_right</span>
              </button>
            </div>
            <div class="calendar-grid">
              ${Ce.map(e=>L`<div class="calendar-grid-weekday">${e}</div>`)}
              ${t.map(t=>{const s=e.has(t.toString("iso8601")),n=!this.month.contains(t);return s?L`
                    <button
                      class="calendar-grid-day has-event ${n?"out-of-month":""}"
                      @click=${()=>this.onDayClick(t)}>
                      <span class="calendar-grid-number has-event">${t.day}</span>
                      <span class="calendar-grid-event-marker"></span>
                    </button>
                  `:L`
                  <div class="calendar-grid-day ${n?"out-of-month":""}">
                    <span class="calendar-grid-number">${t.day}</span>
                  </div>
                `})}
            </div>
          </div>
          ${this.events.length?L`
              <div class="events" data-events-scroll>
                ${this.eventsByDay(this.events).map(e=>L`
                    <div class="events-day-group" data-day="${e[0].date.toString("iso8601")}">
                      <div class="events-day-heading">${e[0].date.toString("full")}</div>
                      <div class="events-inner-list">
                        ${e.map(e=>L`
                            <div
                              class=${we({"events-event":!0,selected:this.selected===e})}
                              @click=${()=>this.onEventClick(e)}>
                              <div class="events-event-title">${e.title}</div>
                              <div class="events-event-time">${e.time.toString("full")}</div>
                              <div class="events-event-place">${e.place}</div>
                              <div class="events-event-address">${e.address}</div>
                            </div>
                          `)}
                      </div>
                    </div>
                  `)}
              </div>
            `:L``}
        </div>
      </div>
    `}};ke.styles=ve`
    :host {
      display: block;
      min-height: 0;
      position: relative;
    }
    * {
      box-shadow: border-box;
    }
    .outer-card {
      background-color: var(--color-charcoal);
      border-radius: var(--shape-border-radius);
      box-shadow: var(--elevation-box-shadow-01dp);
      position: relative;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .outer-card::after {
      position: absolute;
      z-index: 0;
      content: '';
      left: 0; right: 0; top: 0; bottom: 0;
      background-color: #fff;
      opacity: var(--elevation-overlay-opacity-01dp);
      border-radius: var(--shape-border-radius);
    }

    .inner-card {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      grid-auto-flow: row;
      height: 100%;
    }

    .calendar {
      background-color: var(--elevation-overlay-color-04dp);
      box-shadow: var(--elevation-box-shadow-03dp);
      z-index: 1;
      position: relative;
    }

    .calendar-switcher {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-auto-flow: column;
      place-items: center;
      padding: 8px;
    }

    .calendar-switcher-button {
      background: 0;
      border: 0;
      outline: 0;
      padding: 4px;
      color: var(--color-willow);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 32px;
    }
      .calendar-switcher-button::before {
        position: absolute;
        content: '';
        background-color: var(--color-willow);
        opacity: 0;
        border-radius: 50%;
        left: 0; right: 0; top: 0; bottom: 0;
        pointer-events: none;
      }
      .calendar-switcher-button:hover::before {
        opacity: 0.04;
      }
      .calendar-switcher-button:active::before {
        opacity: 0.08;
      }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, auto);
      grid-auto-flow: dense;
      place-items: center;
      padding: 8px;
    }

    .calendar-grid-weekday {
      padding: 8px 0;
    }

    .calendar-grid-day {
      line-height: 1;
      font-size: 20px;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 0;
      background: 0;
      outline: 0;
      color: inherit;
      font-family: inherit;
      border-radius: 50%;
    }
      .calendar-grid-day.out-of-month {
        opacity: 0.6;
      }
      .calendar-grid-day.has-event {
        cursor: pointer;
      }
      .calendar-grid-day.has-event:hover {
        opacity: 1;
        background-color: var(--state-overlay-color-hover);
      }

    .calendar-grid-number {
      margin-bottom: 10px;
    }

    .calendar-grid-number.has-event {
      margin-bottom: 4px;
    }

    .calendar-grid-event-marker {
      width: 6px;
      height: 6px;
      display: block;
      border-radius: 50%;
      background-color: var(--color-yellow);
    }

    .icon {
      font-family: Material Icons;
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .events {
      overflow-y: auto;
      overflow-x: hidden;
      border-bottom-left-radius: var(--shape-border-radius);
      border-bottom-right-radius: var(--shape-border-radius);
      min-height: 0;
      position: relative;
      padding-bottom: 24px;
    }

    .events-day-group {
      position: relative;
    }
    .events-day-heading {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background-color: var(--color-charcoal);
      padding: 16px;
      text-transform: uppercase;
      font-weight: 900;
    }
      .events-day-heading::before {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        content: '';
        background-color: var(--elevation-overlay-color-01dp);
      }
    .events-inner-list {
      padding: 0 16px;
    }
    .events-event {
      padding: 16px;
      box-shadow: var(--elevation-box-shadow-01dp);
      border-radius: var(--shape-border-radius);
      background-color: var(--elevation-overlay-color-02dp);
      margin-bottom: 16px;
      cursor: pointer;
    }
      .events-event:last-child {
        margin-bottom: 0;
      }
      .events-event.selected {
        background-color: var(--state-overlay-color-selected);
        border: 2px solid var(--state-border-color-selected);
        padding: 14px;
      }
    .events-event-title {
      font-size: 20px;
      font-weight: 700;
    }
    .events-event-time {
      margin-bottom: 8px;
    }
    .events-event-place {
      padding-left: 4px;
      font-size: 18px;
    }
    .events-event-address {
      padding-left: 4px;
    }
  `,Pe([ue({attribute:!1}),Ne("design:type",Array)],ke.prototype,"events",void 0),Pe([ue({attribute:!1}),Ne("design:type",Object)],ke.prototype,"selected",void 0),Pe([ue({attribute:!1}),Ne("design:type",Object)],ke.prototype,"month",void 0);var Ee=ke=xe=Pe([ce("sunrise-events-calendar")],ke);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Me=new WeakMap,$e=d(e=>t=>{if(!(t instanceof T))throw new Error("unsafeHTML can only be used in text bindings");const s=Me.get(t);if(void 0!==s&&k(e)&&e===s.value&&t.value===s.fragment)return;const n=document.createElement("template");n.innerHTML=e;const i=document.importNode(n.content,!0);t.setValue(i),Me.set(t,{value:e,fragment:i})});var Te=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},Oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Re=class extends ye{constructor(){super(...arguments),this.icon="place"}render(){return L`${this.icon}`}};Re.styles=ve`
    :host {
      display: inline-block;
      font-family: Material Icons;
    }
  `,Te([ue({attribute:!1}),Oe("design:type",String)],Re.prototype,"icon",void 0);var Ae=Re=Te([ce("sunrise-events-icon")],Re),De=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Ve{constructor(e,t){this.min=e,this.max=t}*[Symbol.iterator](){for(var e=this.min;e<=this.max;e++)yield e}}const ze=e=>e*(Math.PI/180),Fe=(e,t)=>{return{x:(t+180)/360,y:(1-Math.log(Math.tan(ze(e))+(e=>1/Math.cos(e))(ze(e)))/Math.PI)/2}},Ue=(e,t,s)=>{const n=(e=>2**e)(s),{x:i,y:r}=Fe(e,t);return{x:n*i,y:n*r}},Ie=(e,t,s)=>`https://maps.wikimedia.org/osm-intl/${s}/${e}/${t}.png`,Le=async(e,t,s)=>{const n=[...new Ve(-Math.floor(2),Math.ceil(2))],i=[...new Ve(-Math.floor(2),Math.ceil(2))],{x:r,y:o}=((e,t,s)=>{const{x:n,y:i}=Ue(e,t,s);return{x:Math.trunc(n),y:Math.trunc(i)}})(e,t,s),{x:a,y:l}=Ue(e,t,s),c=Math.trunc(256*(a-r)),d=Math.trunc(256*(l-o)),h=[];for(var u of i){const e=[];for(var p of n)e.push({x:r+p,y:o+u});h.push(e)}const m=document.createElement("canvas");m.width=1024,m.height=1024;const f=m.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,1024,1024);const v=[];let g=0;for(let e of h){let t=0;for(let n of e)v.push((async(e,t,n)=>{const i=new Image;i.src=Ie(e.x,e.y,s),await i.decode(),f.drawImage(i,256*t-c,256*n-d)})(n,t,g)),t++;g++}return await Promise.all(v),m};let qe=class extends ye{constructor(){super(...arguments),this.latitude=0,this.longitude=0,this.container=document.createElement("div")}async connectedCallback(){this.container.className="container",super.connectedCallback();const e=await Le(this.latitude,this.longitude,17),t=document.createElement("span");t.textContent="place",t.className="icon",this.container.appendChild(e),this.container.appendChild(t)}update(e){super.update(e)}render(){return L`${this.container}`}};qe.dependencies=[Ae],qe.styles=ve`
    :host {
      display: block;
      height: 100%;
      width: 100%;
      min-width: 0;
      min-height: 0;
      position: relative;
    }

    .container {
      width: 100%;
      height: 100%;
      pointer-events: none !important;
      position: relative;
      overflow: hidden;
    }

    canvas {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    .icon {
      width: 32px;
      height: 32px;
      font-family: Material Icons;
      color: var(--color-yellow);
      font-size: 32px;
      line-height: 1;
      text-shadow: 0 1px 6px rgba(0,0,0,0.4);
      pointer-events: none !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) translateY(-16px);
    }
  `,De([ue({attribute:!1}),je("design:type",Number)],qe.prototype,"latitude",void 0),De([ue({attribute:!1}),je("design:type",Number)],qe.prototype,"longitude",void 0);var He=qe=De([ce("sunrise-events-map")],qe),We=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},Be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ye=class extends ye{constructor(){super(...arguments),this.selected=null,this.hubName=""}render(){return null!==this.selected?L`
        <div class="selected-container">
          <a
            class="map-link"
            target="_blank"
            href="https://www.google.com/maps/place/${encodeURIComponent(this.selected.address)}">
            <sunrise-events-map
              .latitude=${this.selected.coordinate.latitude}
              .longitude=${this.selected.coordinate.longitude}>
            </sunrise-events-map>
          </a>
          <h3 class="title">${this.selected.title}</h3>
          <div class="info">
            <div class="icon">
              <sunrise-events-icon .icon=${"event"}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="date">
                ${this.selected.date.toString("full")}
              </p>
              <p class="time">
                ${this.selected.time.toString("full")}
              </p>
            </div>
            <div class="icon">
              <sunrise-events-icon .icon=${"place"}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="place">
                ${this.selected.place}
              </p>
              <p class="address">
                ${this.selected.address}
              </p>
            </div>
            <div class="icon">
              <sunrise-events-icon .icon=${"info"}></sunrise-events-icon>
            </div>
            <div class="detail-section info-details">
              ${$e(this.selected.description)}
            </div>
          </div>
          <div class="actions">
            <a class="button" href="${this.selected.url}" target="_blank">
              <sunrise-events-icon .icon=${"launch"}></sunrise-events-icon>
              <span>RSVP</span>
            </a>
          </div>
        </div>
      `:L`
        <div class="empty-container">
          Sunrise ${this.hubName} hasn't published any events yet. Check back later!
        </div>
      `}};Ye.dependencies=[He,Ae],Ye.styles=ve`
    :host {
      box-shadow: var(--elevation-box-shadow-01dp);
      background-color: var(--elevation-overlay-color-01dp);
      border-radius: var(--shape-border-radius);
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
    }
    * {
      box-sizing: border-box;
    }
    .selected-container {
      display: grid;
      grid-template-rows: 280px auto;
      min-height: 0;
      height: 100%;
    }
    .empty-container {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      width: 100%;
      height: 100%;
      padding: 64px;
      text-align: center;
    }

    .info {
      padding: 16px;
      padding-top: 0;
      display: grid;
      grid-template-columns: auto auto;
      grid-auto-flow: dense;
      min-height: 0;
      height: 100%;
      grid-column-gap: 16px;
      grid-row-gap: 12px;
    }

    .title {
      margin: 0;
      padding: 16px;
      font-size: 20px;
      line-height: 1;
    }

    .icon {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-feature-settings: 'liga';
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .date {
      font-size: 20px;
      margin: 0;
      line-height: 1;
    }

    .time {
      margin: 0;
    }

    .place {
      font-size: 20px;
      margin: 0;
      line-height: 1;
    }

    .address {
      margin: 0;
    }
    .info-details {
      overflow: auto;
      min-height: 0;
    }
    .info-details p {
      margin-top: 0;
      margin-bottom: 12px;
    }
    .info-details div:last-child p {
      margin-bottom: 0;
    }
    .actions {
      padding: 16px;
      padding-top: 0;
    }
    .button {
      display: inline-grid;
      grid-template-columns: auto auto;
      grid-column-gap: 4px;
      padding: 8px 12px;
      border-radius: var(--shape-border-radius);
      box-shadow: var(--elevation-box-shadow-01dp);
      background-color: var(--color-yellow);
      color: var(--color-charcoal);
      text-decoration: none;
      font-weight: 700;
      min-width: 84px;
      place-items: center;
    }
  `,We([ue({attribute:!1}),Be("design:type",Object)],Ye.prototype,"selected",void 0),We([ue({attribute:!1}),Be("design:type",Object)],Ye.prototype,"hubName",void 0);var Je=Ye=We([ce("sunrise-events-details")],Ye),Xe=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},Ge=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ke=class extends ye{constructor(){super(...arguments),this.events=[],this.selected=null,this.hubName="",this.onSelect=e=>{this.selected=e.target.selected}}async update(e){super.update(e),e.has("events")&&this.events.length&&null===this.selected&&(await this.updateComplete,this.selected=this.sortedEvents()[0])}sortedEvents(){return this.events.sort((e,t)=>e.date.compare(t.date))}render(){return L`
      <sunrise-events-calendar
        .events=${this.events}
        .selected=${this.selected}
        @select=${this.onSelect}>
      </sunrise-events-calendar>
      <sunrise-events-details
        .selected=${this.selected}
        .hubName=${this.hubName}>
      </sunrise-events-details>
    `}};Ke.dependencies=[Ee,Je],Ke.styles=ve`
    :host {
      display: grid;
      position: relative;
      grid-template-columns: 4.5fr 5.5fr;
      grid-column-gap: 16px;
      grid-auto-flow: column;
      min-height: 0;
    }
  `,Xe([ue({attribute:!1}),Ge("design:type",Array)],Ke.prototype,"events",void 0),Xe([ue({attribute:!1}),Ge("design:type",Object)],Ke.prototype,"selected",void 0),Xe([ue({attribute:!1}),Ge("design:type",String)],Ke.prototype,"hubName",void 0);var Qe=Ke=Xe([ce("sunrise-events")],Ke);i()(()=>{const e=document.querySelector("sunrise-events");e instanceof Qe&&(e.events=window._data.events.map(e=>new l(e)),e.hubName=window._data.hubName)})}]);
//# sourceMappingURL=home.2a3f9786a2db1e61cdbc.js.map