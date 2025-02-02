var pM=Object.defineProperty,mM=Object.defineProperties;var gM=Object.getOwnPropertyDescriptors;var Cm=Object.getOwnPropertySymbols;var vM=Object.prototype.hasOwnProperty,yM=Object.prototype.propertyIsEnumerable;var Dm=(n,e,t)=>e in n?pM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,he=(n,e)=>{for(var t in e||={})vM.call(e,t)&&Dm(n,t,e[t]);if(Cm)for(var t of Cm(e))yM.call(e,t)&&Dm(n,t,e[t]);return n},yt=(n,e)=>mM(n,gM(e));var es=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function _M(n,e){return Object.is(n,e)}var Pt=null,Za=!1,Md=1,ts=Symbol("SIGNAL");function ut(n){let e=Pt;return Pt=n,e}function Im(){return Pt}var Ja={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Rm(n){if(Za)throw new Error("");if(Pt===null)return;Pt.consumerOnSignalRead(n);let e=Pt.nextProducerIndex++;if(Qa(Pt),e<Pt.producerNode.length&&Pt.producerNode[e]!==n&&xo(Pt)){let t=Pt.producerNode[e];Ka(t,Pt.producerIndexOfThis[e])}Pt.producerNode[e]!==n&&(Pt.producerNode[e]=n,Pt.producerIndexOfThis[e]=xo(Pt)?Lm(n,Pt,e):0),Pt.producerLastReadVersion[e]=n.version}function xM(){Md++}function MM(n){if(!(xo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Md)){if(!n.producerMustRecompute(n)&&!Ed(n)){Am(n);return}n.producerRecomputeValue(n),Am(n)}}function Nm(n){if(n.liveConsumerNode===void 0)return;let e=Za;Za=!0;try{for(let t of n.liveConsumerNode)t.dirty||EM(t)}finally{Za=e}}function SM(){return Pt?.consumerAllowSignalWrites!==!1}function EM(n){n.dirty=!0,Nm(n),n.consumerMarkedDirty?.(n)}function Am(n){n.dirty=!1,n.lastCleanEpoch=Md}function Sd(n){return n&&(n.nextProducerIndex=0),ut(n)}function Pm(n,e){if(ut(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(xo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ka(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ed(n){Qa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(MM(t),i!==t.version))return!0}return!1}function bd(n){if(Qa(n),xo(n))for(let e=0;e<n.producerNode.length;e++)Ka(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Lm(n,e,t){if(Om(n),n.liveConsumerNode.length===0&&Fm(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Lm(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Ka(n,e){if(Om(n),n.liveConsumerNode.length===1&&Fm(n))for(let i=0;i<n.producerNode.length;i++)Ka(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Qa(r),r.producerIndexOfThis[i]=e}}function xo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Qa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Om(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Fm(n){return n.producerNode!==void 0}function bM(){throw new Error}var km=bM;function wM(){km()}function Um(n){km=n}var TM=null;function Bm(n,e){SM()||wM(),n.equal(n.value,e)||(n.value=e,CM(n))}var Vm=yt(he({},Ja),{equal:_M,value:void 0,kind:"signal"});function CM(n){n.version++,xM(),Nm(n),TM?.()}function Le(n){return typeof n=="function"}function ns(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ec=ns(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Mo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var At=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Le(i))try{i()}catch(s){e=s instanceof ec?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Hm(s)}catch(o){e=e??[],o instanceof ec?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ec(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Hm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Mo(t,e)}remove(e){let{_finalizers:t}=this;t&&Mo(t,e),e instanceof n&&e._removeParent(this)}};At.EMPTY=(()=>{let n=new At;return n.closed=!0,n})();var wd=At.EMPTY;function tc(n){return n instanceof At||n&&"closed"in n&&Le(n.remove)&&Le(n.add)&&Le(n.unsubscribe)}function Hm(n){Le(n)?n():n.unsubscribe()}var On={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var is={setTimeout(n,e,...t){let{delegate:i}=is;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=is;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function nc(n){is.setTimeout(()=>{let{onUnhandledError:e}=On;if(e)e(n);else throw n})}function So(){}var zm=Td("C",void 0,void 0);function Gm(n){return Td("E",void 0,n)}function Wm(n){return Td("N",n,void 0)}function Td(n,e,t){return{kind:n,value:e,error:t}}var vr=null;function rs(n){if(On.useDeprecatedSynchronousErrorHandling){let e=!vr;if(e&&(vr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vr;if(vr=null,t)throw i}}else n()}function jm(n){On.useDeprecatedSynchronousErrorHandling&&vr&&(vr.errorThrown=!0,vr.error=n)}var yr=class extends At{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,tc(e)&&e.add(this)):this.destination=IM}static create(e,t,i){return new ss(e,t,i)}next(e){this.isStopped?Dd(Wm(e),this):this._next(e)}error(e){this.isStopped?Dd(Gm(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Dd(zm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},DM=Function.prototype.bind;function Cd(n,e){return DM.call(n,e)}var Ad=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ic(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ic(i)}else ic(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ic(t)}}},ss=class extends yr{constructor(e,t,i){super();let r;if(Le(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&On.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Cd(e.next,s),error:e.error&&Cd(e.error,s),complete:e.complete&&Cd(e.complete,s)}):r=e}this.destination=new Ad(r)}};function ic(n){On.useDeprecatedSynchronousErrorHandling?jm(n):nc(n)}function AM(n){throw n}function Dd(n,e){let{onStoppedNotification:t}=On;t&&is.setTimeout(()=>t(n,e))}var IM={closed:!0,next:So,error:AM,complete:So};var os=typeof Symbol=="function"&&Symbol.observable||"@@observable";function sn(n){return n}function Id(...n){return Rd(n)}function Rd(n){return n.length===0?sn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ft=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=NM(t)?t:new ss(t,i,r);return rs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=$m(i),new i((r,s)=>{let o=new ss({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[os](){return this}pipe(...t){return Rd(t)(this)}toPromise(t){return t=$m(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function $m(n){var e;return(e=n??On.Promise)!==null&&e!==void 0?e:Promise}function RM(n){return n&&Le(n.next)&&Le(n.error)&&Le(n.complete)}function NM(n){return n&&n instanceof yr||RM(n)&&tc(n)}function Nd(n){return Le(n?.lift)}function Ye(n){return e=>{if(Nd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ze(n,e,t,i,r){return new Pd(n,e,t,i,r)}var Pd=class extends yr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function as(){return Ye((n,e)=>{let t=null;n._refCount++;let i=Ze(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var cs=class extends ft{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Nd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new At;let t=this.getSubject();e.add(this.source.subscribe(Ze(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=At.EMPTY)}return e}refCount(){return as()(this)}};var qm=ns(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Gt=(()=>{class n extends ft{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new rc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new qm}next(t){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?wd:(this.currentObservers=null,s.push(t),new At(()=>{this.currentObservers=null,Mo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ft;return t.source=this,t}}return n.create=(e,t)=>new rc(e,t),n})(),rc=class extends Gt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:wd}};var Vt=class extends Gt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Qt=new ft(n=>n.complete());function Xm(n){return n&&Le(n.schedule)}function Ym(n){return n[n.length-1]}function Zm(n){return Le(Ym(n))?n.pop():void 0}function Oi(n){return Xm(Ym(n))?n.pop():void 0}function Km(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Jm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _r(n){return this instanceof _r?(this.v=n,this):new _r(n)}function Qm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,d)}}function a(p,g){i[p]&&(r[p]=function(_){return new Promise(function(m,h){s.push([p,_,m,h])>1||c(p,_)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(_){f(s[0][3],_)}}function l(p){p.value instanceof _r?Promise.resolve(p.value.v).then(u,d):f(s[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function f(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function eg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Jm=="function"?Jm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var sc=n=>n&&typeof n.length=="number"&&typeof n!="function";function oc(n){return Le(n?.then)}function ac(n){return Le(n[os])}function cc(n){return Symbol.asyncIterator&&Le(n?.[Symbol.asyncIterator])}function lc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function PM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var uc=PM();function dc(n){return Le(n?.[uc])}function fc(n){return Qm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield _r(t.read());if(r)return yield _r(void 0);yield yield _r(i)}}finally{t.releaseLock()}})}function hc(n){return Le(n?.getReader)}function Ft(n){if(n instanceof ft)return n;if(n!=null){if(ac(n))return LM(n);if(sc(n))return OM(n);if(oc(n))return FM(n);if(cc(n))return tg(n);if(dc(n))return kM(n);if(hc(n))return UM(n)}throw lc(n)}function LM(n){return new ft(e=>{let t=n[os]();if(Le(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function OM(n){return new ft(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function FM(n){return new ft(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,nc)})}function kM(n){return new ft(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function tg(n){return new ft(e=>{BM(n,e).catch(t=>e.error(t))})}function UM(n){return tg(fc(n))}function BM(n,e){var t,i,r,s;return Km(this,void 0,void 0,function*(){try{for(t=eg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function en(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function pc(n,e=0){return Ye((t,i)=>{t.subscribe(Ze(i,r=>en(i,n,()=>i.next(r),e),()=>en(i,n,()=>i.complete(),e),r=>en(i,n,()=>i.error(r),e)))})}function mc(n,e=0){return Ye((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function ng(n,e){return Ft(n).pipe(mc(e),pc(e))}function ig(n,e){return Ft(n).pipe(mc(e),pc(e))}function rg(n,e){return new ft(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function sg(n,e){return new ft(t=>{let i;return en(t,e,()=>{i=n[uc](),en(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Le(i?.return)&&i.return()})}function gc(n,e){if(!n)throw new Error("Iterable cannot be null");return new ft(t=>{en(t,e,()=>{let i=n[Symbol.asyncIterator]();en(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function og(n,e){return gc(fc(n),e)}function ag(n,e){if(n!=null){if(ac(n))return ng(n,e);if(sc(n))return rg(n,e);if(oc(n))return ig(n,e);if(cc(n))return gc(n,e);if(dc(n))return sg(n,e);if(hc(n))return og(n,e)}throw lc(n)}function Ct(n,e){return e?ag(n,e):Ft(n)}function Ae(...n){let e=Oi(n);return Ct(n,e)}function ls(n,e){let t=Le(n)?n:()=>n,i=r=>r.error(t());return new ft(e?r=>e.schedule(i,0,r):i)}function Ld(n){return!!n&&(n instanceof ft||Le(n.lift)&&Le(n.subscribe))}var li=ns(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Je(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:VM}=Array;function HM(n,e){return VM(e)?n(...e):n(e)}function cg(n){return Je(e=>HM(n,e))}var{isArray:zM}=Array,{getPrototypeOf:GM,prototype:WM,keys:jM}=Object;function lg(n){if(n.length===1){let e=n[0];if(zM(e))return{args:e,keys:null};if($M(e)){let t=jM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function $M(n){return n&&typeof n=="object"&&GM(n)===WM}function ug(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Eo(...n){let e=Oi(n),t=Zm(n),{args:i,keys:r}=lg(n);if(i.length===0)return Ct([],e);let s=new ft(qM(i,e,r?o=>ug(r,o):sn));return t?s.pipe(cg(t)):s}function qM(n,e,t=sn){return i=>{dg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)dg(e,()=>{let l=Ct(n[c],e),u=!1;l.subscribe(Ze(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function dg(n,e,t){n?en(t,n,e):e()}function fg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=_=>l<i?g(_):c.push(_),g=_=>{s&&e.next(_),l++;let m=!1;Ft(t(_,u++)).subscribe(Ze(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?en(e,o,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(Ze(e,p,()=>{d=!0,f()})),()=>{a?.()}}function It(n,e,t=1/0){return Le(e)?It((i,r)=>Je((s,o)=>e(i,s,r,o))(Ft(n(i,r))),t):(typeof e=="number"&&(t=e),Ye((i,r)=>fg(i,r,n,t)))}function us(n=1/0){return It(sn,n)}function hg(){return us(1)}function ds(...n){return hg()(Ct(n,Oi(n)))}function vc(n){return new ft(e=>{Ft(n()).subscribe(e)})}function xn(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Fi(n){return Ye((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ze(t,void 0,void 0,o=>{s=Ft(n(o,Fi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function pg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ze(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function xr(n,e){return Le(e)?It(n,e,1):It(n,1)}function ki(n){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ui(n){return n<=0?()=>Qt:Ye((e,t)=>{let i=0;e.subscribe(Ze(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function yc(n=XM){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function XM(){return new li}function bo(n){return Ye((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function di(n,e){let t=arguments.length>=2;return i=>i.pipe(n?xn((r,s)=>n(r,s,i)):sn,ui(1),t?ki(e):yc(()=>new li))}function fs(n){return n<=0?()=>Qt:Ye((e,t)=>{let i=[];e.subscribe(Ze(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Od(n,e){let t=arguments.length>=2;return i=>i.pipe(n?xn((r,s)=>n(r,s,i)):sn,fs(1),t?ki(e):yc(()=>new li))}function Fd(n,e){return Ye(pg(n,e,arguments.length>=2,!0))}function kd(...n){let e=Oi(n);return Ye((t,i)=>{(e?ds(n,t,e):ds(n,t)).subscribe(i)})}function Mn(n,e){return Ye((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ze(i,c=>{r?.unsubscribe();let l=0,u=s++;Ft(n(c,u)).subscribe(r=Ze(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Ud(n){return Ye((e,t)=>{Ft(n).subscribe(Ze(t,()=>t.complete(),So)),!t.closed&&e.subscribe(t)})}function Ht(n,e,t){let i=Le(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ye((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ze(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):sn}var Ce=class extends Error{code;constructor(e,t){super(Cf(e,t)),this.code=e}};function Cf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Kg=Symbol("InputSignalNode#UNSET"),YM=yt(he({},Vm),{transformFn:void 0,applyValueToInputSignal(n,e){Bm(n,e)}});function Qg(n,e){let t=Object.create(YM);t.value=n,t.transformFn=e?.transform;function i(){if(Rm(t),t.value===Kg)throw new Ce(-950,!1);return t.value}return i[ts]=t,i}function jc(n){return{toString:n}.toString()}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("Could not find renamed property on target object.")}function an(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(an).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function mg(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var ZM=mt({__forward_ref__:mt});function ev(n){return n.__forward_ref__=ev,n.toString=function(){return an(this())},n}function En(n){return tv(n)?n():n}function tv(n){return typeof n=="function"&&n.hasOwnProperty(ZM)&&n.__forward_ref__===ev}function we(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Ts(n){return{providers:n.providers||[],imports:n.imports||[]}}function $c(n){return gg(n,iv)||gg(n,rv)}function nv(n){return $c(n)!==null}function gg(n,e){return n.hasOwnProperty(e)?n[e]:null}function JM(n){let e=n&&(n[iv]||n[rv]);return e||null}function vg(n){return n&&(n.hasOwnProperty(yg)||n.hasOwnProperty(KM))?n[yg]:null}var iv=mt({\u0275prov:mt}),yg=mt({\u0275inj:mt}),rv=mt({ngInjectableDef:mt}),KM=mt({ngInjectorDef:mt}),Ne=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=we({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function sv(n){return n&&!!n.\u0275providers}var QM=mt({\u0275cmp:mt}),eS=mt({\u0275dir:mt}),tS=mt({\u0275pipe:mt}),nS=mt({\u0275mod:mt}),bc=mt({\u0275fac:mt}),Do=mt({__NG_ELEMENT_ID__:mt}),_g=mt({__NG_ENV_ID__:mt});function iS(n){return typeof n=="string"?n:n==null?"":String(n)}function rS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():iS(n)}function sS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ce(-200,n)}function Df(n,e){throw new Ce(-201,!1)}var ze=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(ze||{}),$d;function ov(){return $d}function Sn(n){let e=$d;return $d=n,e}function av(n,e,t){let i=$c(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&ze.Optional)return null;if(e!==void 0)return e;Df(n,"Injector")}var oS={},Ao=oS,aS="__NG_DI_FLAG__",wc="ngTempTokenPath",cS="ngTokenPath",lS=/\n/gm,uS="\u0275",xg="__source",vs;function dS(){return vs}function Ui(n){let e=vs;return vs=n,e}function fS(n,e=ze.Default){if(vs===void 0)throw new Ce(-203,!1);return vs===null?av(n,void 0,e):vs.get(n,e&ze.Optional?null:void 0,e)}function Oe(n,e=ze.Default){return(ov()||fS)(En(n),e)}function ee(n,e=ze.Default){return Oe(n,qc(e))}function qc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function qd(n){let e=[];for(let t=0;t<n.length;t++){let i=En(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ce(900,!1);let r,s=ze.Default;for(let o=0;o<i.length;o++){let a=i[o],c=hS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Oe(r,s))}else e.push(Oe(i))}return e}function hS(n){return n[aS]}function pS(n,e,t,i){let r=n[wc];throw e[xg]&&r.unshift(e[xg]),n.message=mS(`
`+n.message,r,t,i),n[cS]=r,n[wc]=null,n}function mS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==uS?n.slice(2):n;let r=an(e);if(Array.isArray(e))r=e.map(an).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):an(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(lS,`
  `)}`}function _s(n,e){let t=n.hasOwnProperty(bc);return t?n[bc]:null}function Af(n,e){n.forEach(t=>Array.isArray(t)?Af(t,e):e(t))}function cv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Tc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Io={},qn=[],xs=new Ne(""),lv=new Ne("",-1),uv=new Ne(""),Cc=class{get(e,t=Ao){if(t===Ao){let i=new Error(`NullInjectorError: No provider for ${an(e)}!`);throw i.name="NullInjectorError",i}return t}};function dv(n,e){let t=n[nS]||null;if(!t&&e===!0)throw new Error(`Type ${an(n)} does not have '\u0275mod' property.`);return t}function Vi(n){return n[QM]||null}function fv(n){return n[eS]||null}function hv(n){return n[tS]||null}function pv(n){let e=Vi(n)||fv(n)||hv(n);return e!==null&&e.standalone}function If(n){return{\u0275providers:n}}function gS(...n){return{\u0275providers:mv(!0,n),\u0275fromNgModule:!0}}function mv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Af(e,o=>{let a=o;Xd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&gv(r,s),t}function gv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Rf(r,s=>{e(s,i)})}}function Xd(n,e,t,i){if(n=En(n),!n)return!1;let r=null,s=vg(n),o=!s&&Vi(n);if(!s&&!o){let c=n.ngModule;if(s=vg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Xd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Af(s.imports,u=>{Xd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&gv(l,e)}if(!a){let l=_s(r)||(()=>new r);e({provide:r,useFactory:l,deps:qn},r),e({provide:uv,useValue:r,multi:!0},r),e({provide:xs,useValue:()=>Oe(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Rf(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Rf(n,e){for(let t of n)sv(t)&&(t=t.\u0275providers),Array.isArray(t)?Rf(t,e):e(t)}var vS=mt({provide:String,useValue:mt});function vv(n){return n!==null&&typeof n=="object"&&vS in n}function yS(n){return!!(n&&n.useExisting)}function _S(n){return!!(n&&n.useFactory)}function Yd(n){return typeof n=="function"}var Xc=new Ne(""),_c={},xS={},Bd;function Nf(){return Bd===void 0&&(Bd=new Cc),Bd}var ln=class{},Ro=class extends ln{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Jd(e,o=>this.processProvider(o)),this.records.set(lv,hs(void 0,this)),r.has("environment")&&this.records.set(ln,hs(void 0,this));let s=this.records.get(Xc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(uv,qn,ze.Self))}destroy(){To(this),this._destroyed=!0;let e=ut(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ut(e)}}onDestroy(e){return To(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){To(this);let t=Ui(this),i=Sn(void 0),r;try{return e()}finally{Ui(t),Sn(i)}}get(e,t=Ao,i=ze.Default){if(To(this),e.hasOwnProperty(_g))return e[_g](this);i=qc(i);let r,s=Ui(this),o=Sn(void 0);try{if(!(i&ze.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=TS(e)&&$c(e);l&&this.injectableDefInScope(l)?c=hs(Zd(e),_c):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&ze.Self?Nf():this.parent;return t=i&ze.Optional&&t===Ao?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[wc]=a[wc]||[]).unshift(an(e)),s)throw a;return pS(a,e,"R3InjectorError",this.source)}else throw a}finally{Sn(o),Ui(s)}}resolveInjectorInitializers(){let e=ut(null),t=Ui(this),i=Sn(void 0),r;try{let s=this.get(xs,qn,ze.Self);for(let o of s)o()}finally{Ui(t),Sn(i),ut(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(an(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=En(e);let t=Yd(e)?e:En(e&&e.provide),i=SS(e);if(!Yd(e)&&e.multi===!0){let r=this.records.get(t);r||(r=hs(void 0,_c,!0),r.factory=()=>qd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ut(null);try{return t.value===_c&&(t.value=xS,t.value=t.factory()),typeof t.value=="object"&&t.value&&wS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ut(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=En(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Zd(n){let e=$c(n),t=e!==null?e.factory:_s(n);if(t!==null)return t;if(n instanceof Ne)throw new Ce(204,!1);if(n instanceof Function)return MS(n);throw new Ce(204,!1)}function MS(n){if(n.length>0)throw new Ce(204,!1);let t=JM(n);return t!==null?()=>t.factory(n):()=>new n}function SS(n){if(vv(n))return hs(void 0,n.useValue);{let e=ES(n);return hs(e,_c)}}function ES(n,e,t){let i;if(Yd(n)){let r=En(n);return _s(r)||Zd(r)}else if(vv(n))i=()=>En(n.useValue);else if(_S(n))i=()=>n.useFactory(...qd(n.deps||[]));else if(yS(n))i=()=>Oe(En(n.useExisting));else{let r=En(n&&(n.useClass||n.provide));if(bS(n))i=()=>new r(...qd(n.deps));else return _s(r)||Zd(r)}return i}function To(n){if(n.destroyed)throw new Ce(205,!1)}function hs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function bS(n){return!!n.deps}function wS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function TS(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ne}function Jd(n,e){for(let t of n)Array.isArray(t)?Jd(t,e):t&&sv(t)?Jd(t.\u0275providers,e):e(t)}function Cn(n,e){n instanceof Ro&&To(n);let t,i=Ui(n),r=Sn(void 0);try{return e()}finally{Ui(i),Sn(r)}}function yv(){return ov()!==void 0||dS()!=null}function CS(n){if(!yv())throw new Ce(-203,!1)}function DS(n){return typeof n=="function"}var pi=0,rt=1,Ve=2,Yt=3,kn=4,Vn=5,Dc=6,Ac=7,Yn=8,No=9,Hi=10,Un=11,Po=12,Mg=13,ko=14,Zn=15,Lo=16,ps=17,Yc=18,Zc=19,_v=20,Bi=21,Vd=22,Ic=23,cn=24,zi=25,xv=1;var Er=7,Rc=8,Nc=9,wn=10;function Mr(n){return Array.isArray(n)&&typeof n[xv]=="object"}function mi(n){return Array.isArray(n)&&n[xv]===!0}function Mv(n){return(n.flags&4)!==0}function Cs(n){return n.componentOffset>-1}function Sv(n){return(n.flags&1)===1}function Ds(n){return!!n.template}function Pc(n){return(n[Ve]&512)!==0}function Uo(n){return(n[Ve]&256)===256}var Kd=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Ev(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Pf=(()=>{let n=()=>bv;return n.ngInherit=!0,n})();function bv(n){return n.type.prototype.ngOnChanges&&(n.setInput=IS),AS}function AS(){let n=Tv(this),e=n?.current;if(e){let t=n.previous;if(t===Io)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function IS(n,e,t,i,r){let s=this.declaredInputs[i],o=Tv(n)||RS(n,{previous:Io,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Kd(l&&l.currentValue,t,c===Io),Ev(n,e,r,t)}var wv="__ngSimpleChanges__";function Tv(n){return n[wv]||null}function RS(n,e){return n[wv]=e}var Sg=null;var bn=function(n,e,t){Sg?.(n,e,t)},NS="svg",PS="math";function fi(n){for(;Array.isArray(n);)n=n[pi];return n}function gi(n,e){return fi(e[n.index])}function LS(n,e){return n.data[e]}function Gi(n,e){let t=e[n];return Mr(t)?t:t[pi]}function Lf(n){return(n[Ve]&128)===128}function OS(n){return mi(n[Yt])}function Eg(n,e){return e==null?null:n[e]}function Cv(n){n[ps]=0}function Of(n){n[Ve]&1024||(n[Ve]|=1024,Lf(n)&&Kc(n))}function Jc(n){return!!(n[Ve]&9216||n[cn]?.dirty)}function Qd(n){n[Hi].changeDetectionScheduler?.notify(9),n[Ve]&64&&(n[Ve]|=1024),Jc(n)&&Kc(n)}function Kc(n){n[Hi].changeDetectionScheduler?.notify(0);let e=br(n);for(;e!==null&&!(e[Ve]&8192||(e[Ve]|=8192,!Lf(e)));)e=br(e)}function Dv(n,e){if(Uo(n))throw new Ce(911,!1);n[Bi]===null&&(n[Bi]=[]),n[Bi].push(e)}function FS(n,e){if(n[Bi]===null)return;let t=n[Bi].indexOf(e);t!==-1&&n[Bi].splice(t,1)}function br(n){let e=n[Yt];return mi(e)?e[Yt]:e}function kS(n){return n[Ac]??=[]}function US(n){return n.cleanup??=[]}var ht={lFrame:Fv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ef=!1;function BS(){return ht.lFrame.elementDepthCount}function VS(){ht.lFrame.elementDepthCount++}function HS(){ht.lFrame.elementDepthCount--}function Av(){return ht.bindingsEnabled}function zS(){return ht.skipHydrationRootTNode!==null}function GS(n){return ht.skipHydrationRootTNode===n}function WS(){ht.skipHydrationRootTNode=null}function Bn(){return ht.lFrame.lView}function Qc(){return ht.lFrame.tView}function qi(){let n=Iv();for(;n!==null&&n.type===64;)n=n.parent;return n}function Iv(){return ht.lFrame.currentTNode}function jS(){let n=ht.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function el(n,e){let t=ht.lFrame;t.currentTNode=n,t.isParent=e}function Rv(){return ht.lFrame.isParent}function $S(){ht.lFrame.isParent=!1}function Nv(){return ef}function bg(n){let e=ef;return ef=n,e}function qS(n){return ht.lFrame.bindingIndex=n}function XS(){return ht.lFrame.inI18n}function YS(n,e){let t=ht.lFrame;t.bindingIndex=t.bindingRootIndex=n,tf(e)}function ZS(){return ht.lFrame.currentDirectiveIndex}function tf(n){ht.lFrame.currentDirectiveIndex=n}function Pv(n){ht.lFrame.currentQueryIndex=n}function JS(n){let e=n[rt];return e.type===2?e.declTNode:e.type===1?n[Vn]:null}function Lv(n,e,t){if(t&ze.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&ze.Host);)if(r=JS(s),r===null||(s=s[ko],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=ht.lFrame=Ov();return i.currentTNode=e,i.lView=n,!0}function Ff(n){let e=Ov(),t=n[rt];ht.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Ov(){let n=ht.lFrame,e=n===null?null:n.child;return e===null?Fv(n):e}function Fv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function kv(){let n=ht.lFrame;return ht.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Uv=kv;function kf(){let n=kv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function KS(){return ht.lFrame.selectedIndex}function wr(n){ht.lFrame.selectedIndex=n}function QS(){return ht.lFrame.currentNamespace}var Bv=!0;function Vv(){return Bv}function Hv(n){Bv=n}function eE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=bv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function zv(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function xc(n,e,t){Gv(n,e,3,t)}function Mc(n,e,t,i){(n[Ve]&3)===t&&Gv(n,e,t,i)}function Hd(n,e){let t=n[Ve];(t&3)===e&&(t&=16383,t+=1,n[Ve]=t)}function Gv(n,e,t,i){let r=i!==void 0?n[ps]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ps]+=65536),(a<s||s==-1)&&(tE(n,t,e,c),n[ps]=(n[ps]&4294901760)+c+2),c++}function wg(n,e){bn(4,n,e);let t=ut(null);try{e.call(n)}finally{ut(t),bn(5,n,e)}}function tE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ve]>>14<n[ps]>>16&&(n[Ve]&3)===e&&(n[Ve]+=16384,wg(a,s)):wg(a,s)}var ys=-1,Oo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function nE(n){return n instanceof Oo}function iE(n){return(n.flags&8)!==0}function rE(n){return(n.flags&16)!==0}function sE(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];aE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function oE(n){return n===3||n===4||n===6}function aE(n){return n.charCodeAt(0)===64}function Lc(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Tg(n,t,r,null,e[++i]):Tg(n,t,r,null,null))}}return n}function Tg(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var zd={},nf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=qc(i);let r=this.injector.get(e,zd,i);return r!==zd||t===zd?r:this.parentInjector.get(e,t,i)}};function Wv(n){return n!==ys}function Oc(n){return n&32767}function cE(n){return n>>16}function Fc(n,e){let t=cE(n),i=e;for(;t>0;)i=i[ko],t--;return i}var rf=!0;function Cg(n){let e=rf;return rf=n,e}var lE=256,jv=lE-1,$v=5,uE=0,Xn={};function dE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Do)&&(i=t[Do]),i==null&&(i=t[Do]=uE++);let r=i&jv,s=1<<r;e.data[n+(r>>$v)]|=s}function qv(n,e){let t=Xv(n,e);if(t!==-1)return t;let i=e[rt];i.firstCreatePass&&(n.injectorIndex=e.length,Gd(i.data,n),Gd(e,null),Gd(i.blueprint,null));let r=Uf(n,e),s=n.injectorIndex;if(Wv(r)){let o=Oc(r),a=Fc(r,e),c=a[rt].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Gd(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Xv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Uf(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Qv(r),i===null)return ys;if(t++,r=r[ko],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ys}function fE(n,e,t){dE(n,e,t)}function Yv(n,e,t){if(t&ze.Optional||n!==void 0)return n;Df(e,"NodeInjector")}function Zv(n,e,t,i){if(t&ze.Optional&&i===void 0&&(i=null),!(t&(ze.Self|ze.Host))){let r=n[No],s=Sn(void 0);try{return r?r.get(e,i,t&ze.Optional):av(e,i,t&ze.Optional)}finally{Sn(s)}}return Yv(i,e,t)}function Jv(n,e,t,i=ze.Default,r){if(n!==null){if(e[Ve]&2048&&!(i&ze.Self)){let o=vE(n,e,t,i,Xn);if(o!==Xn)return o}let s=Kv(n,e,t,i,Xn);if(s!==Xn)return s}return Zv(e,t,i,r)}function Kv(n,e,t,i,r){let s=mE(t);if(typeof s=="function"){if(!Lv(e,n,i))return i&ze.Host?Yv(r,t,i):Zv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&ze.Optional))Df(t);else return o}finally{Uv()}}else if(typeof s=="number"){let o=null,a=Xv(n,e),c=ys,l=i&ze.Host?e[Zn][Vn]:null;for((a===-1||i&ze.SkipSelf)&&(c=a===-1?Uf(n,e):e[a+8],c===ys||!Ag(i,!1)?a=-1:(o=e[rt],a=Oc(c),e=Fc(c,e)));a!==-1;){let u=e[rt];if(Dg(s,a,u.data)){let d=hE(a,e,t,o,i,l);if(d!==Xn)return d}c=e[a+8],c!==ys&&Ag(i,e[rt].data[a+8]===l)&&Dg(s,a,e)?(o=u,a=Oc(c),e=Fc(c,e)):a=-1}}return r}function hE(n,e,t,i,r,s){let o=e[rt],a=o.data[n+8],c=i==null?Cs(a)&&rf:i!=o&&(a.type&3)!==0,l=r&ze.Host&&s===a,u=pE(a,o,t,c,l);return u!==null?sf(e,o,u,a):Xn}function pE(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&Ds(p)&&p.type===t)return c}return null}function sf(n,e,t,i){let r=n[t],s=e.data;if(nE(r)){let o=r;o.resolving&&sS(rS(s[t]));let a=Cg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Sn(o.injectImpl):null,u=Lv(n,i,ze.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&eE(t,s[t],e)}finally{l!==null&&Sn(l),Cg(a),o.resolving=!1,Uv()}}return r}function mE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Do)?n[Do]:void 0;return typeof e=="number"?e>=0?e&jv:gE:e}function Dg(n,e,t){let i=1<<n;return!!(t[e+(n>>$v)]&i)}function Ag(n,e){return!(n&ze.Self)&&!(n&ze.Host&&e)}var Sr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Jv(this._tNode,this._lView,e,qc(i),t)}};function gE(){return new Sr(qi(),Bn())}function Bf(n){return jc(()=>{let e=n.prototype.constructor,t=e[bc]||of(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[bc]||of(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function of(n){return tv(n)?()=>{let e=of(En(n));return e&&e()}:_s(n)}function vE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ve]&2048&&!Pc(o);){let a=Kv(s,o,t,i|ze.Self,Xn);if(a!==Xn)return a;let c=s.parent;if(!c){let l=o[_v];if(l){let u=l.get(t,Xn,i);if(u!==Xn)return u}c=Qv(o),o=o[ko]}s=c}return r}function Qv(n){let e=n[rt],t=e.type;return t===2?e.declTNode:t===1?n[Vn]:null}function Ig(n,e=null,t=null,i){let r=ey(n,e,t,i);return r.resolveInjectorInitializers(),r}function ey(n,e=null,t=null,i,r=new Set){let s=[t||qn,gS(n)];return i=i||(typeof n=="object"?void 0:an(n)),new Ro(s,e||Nf(),i||null,r)}var Tn=class n{static THROW_IF_NOT_FOUND=Ao;static NULL=new Cc;static create(e,t){if(Array.isArray(e))return Ig({name:""},t,e,"");{let i=e.name??"";return Ig({name:i},e.parent,e.providers,i)}}static \u0275prov=we({token:n,providedIn:"any",factory:()=>Oe(lv)});static __NG_ELEMENT_ID__=-1};var yE=new Ne("");yE.__NG_ELEMENT_ID__=n=>{let e=qi();if(e===null)throw new Ce(204,!1);if(e.type&2)return e.value;if(n&ze.Optional)return null;throw new Ce(204,!1)};var ty=!1,Bo=(()=>{class n{static __NG_ELEMENT_ID__=_E;static __NG_ENV_ID__=t=>t}return n})(),af=class extends Bo{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Dv(this._lView,e),()=>FS(this._lView,e)}};function _E(){return new af(Bn())}var Ms=class{},Vf=new Ne("",{providedIn:"root",factory:()=>!1});var ny=new Ne(""),iy=new Ne(""),As=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Vt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})();var cf=class extends Gt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,yv()&&(this.destroyRef=ee(Bo,{optional:!0})??void 0,this.pendingTasks=ee(As,{optional:!0})??void 0)}emit(e){let t=ut(null);try{super.next(e)}finally{ut(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof At&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},on=cf;function kc(...n){}function ry(n){let e,t;function i(){n=kc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Rg(n){return queueMicrotask(()=>n()),()=>{n=kc}}var Hf="isAngularZone",Uc=Hf+"_ID",xE=0,Rt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new on(!1);onMicrotaskEmpty=new on(!1);onStable=new on(!1);onError=new on(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=ty}=e;if(typeof Zone>"u")throw new Ce(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,EE(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Hf)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ce(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ce(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,ME,kc,kc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},ME={};function zf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function SE(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ry(()=>{n.callbackScheduled=!1,lf(n),n.isCheckStableRunning=!0,zf(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),lf(n)}function EE(n){let e=()=>{SE(n)},t=xE++;n._inner=n._inner.fork({name:"angular",properties:{[Hf]:!0,[Uc]:t,[Uc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(bE(c))return i.invokeTask(s,o,a,c);try{return Ng(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Pg(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Ng(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!wE(c)&&e(),Pg(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,lf(n),zf(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function lf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Ng(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Pg(n){n._nesting--,zf(n)}var uf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new on;onMicrotaskEmpty=new on;onStable=new on;onError=new on;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function bE(n){return sy(n,"__ignore_ng_zone__")}function wE(n){return sy(n,"__scheduler_tick__")}function sy(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var hi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},TE=new Ne("",{providedIn:"root",factory:()=>{let n=ee(Rt),e=ee(hi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Lg(n,e){return Qg(n,e)}function CE(n){return Qg(Kg,n)}var oy=(Lg.required=CE,Lg);function DE(){return Gf(qi(),Bn())}function Gf(n,e){return new tl(gi(n,e))}var tl=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=DE}return n})();var Og=new Set;function Wf(n){Og.has(n)||(Og.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function ay(n){return(n.flags&128)===128}var cy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(cy||{}),ly=new Map,AE=0;function IE(){return AE++}function RE(n){ly.set(n[Zc],n)}function df(n){ly.delete(n[Zc])}var Fg="__ngContext__";function Vo(n,e){Mr(e)?(n[Fg]=e[Zc],RE(e)):n[Fg]=e}function uy(n){return fy(n[Po])}function dy(n){return fy(n[kn])}function fy(n){for(;n!==null&&!mi(n);)n=n[kn];return n}var ff;function hy(n){ff=n}function NE(){if(ff!==void 0)return ff;if(typeof document<"u")return document;throw new Ce(210,!1)}var jf=new Ne("",{providedIn:"root",factory:()=>PE}),PE="ng",$f=new Ne(""),Is=new Ne("",{providedIn:"platform",factory:()=>"unknown"});var qf=new Ne("",{providedIn:"root",factory:()=>NE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var LE="h",OE="b";var py=!1,FE=new Ne("",{providedIn:"root",factory:()=>py});var Xf=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Xf||{}),Rs=new Ne("");var ms=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(ms||{}),my=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})(),kE=[ms.EarlyRead,ms.Write,ms.MixedReadWrite,ms.Read],UE=(()=>{class n{ngZone=ee(Rt);scheduler=ee(Ms);errorHandler=ee(hi,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){ee(Rs,{optional:!0})}execute(){this.executing=!0;for(let t of kE)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[t]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>i.hooks[t](i.pipelinedValue),i.snapshot))}catch(r){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let t of this.sequences)t.afterRun(),t.once&&(this.sequences.delete(t),t.destroy());for(let t of this.deferredRegistrations)this.sequences.add(t);this.deferredRegistrations.size>0&&this.scheduler.notify(8),this.deferredRegistrations.clear()}register(t){this.executing?this.deferredRegistrations.add(t):(this.sequences.add(t),this.scheduler.notify(7))}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(Xf.AFTER_NEXT_RENDER,t):t()}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})(),hf=class{impl;hooks;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s=null){this.impl=e,this.hooks=t,this.once=i,this.snapshot=s,this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.()}};function Yf(n,e){!e?.injector&&CS(Yf);let t=e?.injector??ee(Tn);return Wf("NgAfterNextRender"),VE(n,t,e,!0)}function BE(n,e){if(n instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[e]=n,t}else return[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function VE(n,e,t,i){let r=e.get(my);r.impl??=e.get(UE);let s=e.get(Rs,null,{optional:!0}),o=t?.phase??ms.MixedReadWrite,a=t?.manualCleanup!==!0?e.get(Bo):null,c=new hf(r.impl,BE(n,o),i,a,s?.snapshot(null));return r.impl.register(c),c}var HE=()=>null;function gy(n,e,t=!1){return HE(n,e,t)}function vy(n,e){let t=n.contentQueries;if(t!==null){let i=ut(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Pv(s),a.contentQueries(2,e[o],o)}}}finally{ut(i)}}}function pf(n,e,t){Pv(0);let i=ut(null);try{e(n,t)}finally{ut(i)}}function yy(n,e,t){if(Mv(e)){let i=ut(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ut(i)}}}var Jn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Jn||{});function _y(n){return n instanceof Function?n():n}var Wi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Wi||{});function zE(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var xy="ng-template";function GE(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&zE(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Zf(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Zf(n){return n.type===4&&n.value!==xy}function WE(n,e,t){let i=n.type===4&&!t?xy:n.value;return e===i}function jE(n,e,t){let i=4,r=n.attrs,s=r!==null?XE(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Fn(i)&&!Fn(c))return!1;if(o&&Fn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!WE(n,c,t)||c===""&&e.length===1){if(Fn(i))return!1;o=!0}}else if(i&8){if(r===null||!GE(n,r,c,t)){if(Fn(i))return!1;o=!0}}else{let l=e[++a],u=$E(c,r,Zf(n),t);if(u===-1){if(Fn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Fn(i))return!1;o=!0}}}}return Fn(i)||o}function Fn(n){return(n&1)===0}function $E(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return YE(e,n)}function qE(n,e,t=!1){for(let i=0;i<e.length;i++)if(jE(n,e[i],t))return!0;return!1}function XE(n){for(let e=0;e<n.length;e++){let t=n[e];if(oE(t))return e}return n.length}function YE(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function kg(n,e){return n?":not("+e.trim()+")":e}function ZE(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Fn(o)&&(e+=kg(s,r),r=""),i=o,s=s||!Fn(i);t++}return r!==""&&(e+=kg(s,r)),e}function JE(n){return n.map(ZE).join(",")}function KE(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Fn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var My={};function QE(n,e){return n.createText(e)}function Sy(n,e,t){return n.createElement(e,t)}function Bc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Ey(n,e,t){n.appendChild(e,t)}function Ug(n,e,t,i,r){i!==null?Bc(n,e,t,i,r):Ey(n,e,t)}function eb(n,e,t){n.removeChild(null,e,t)}function tb(n,e,t){n.setAttribute(e,"style",t)}function nb(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function by(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&sE(n,e,i),r!==null&&nb(n,e,r),s!==null&&tb(n,e,s)}function ib(n,e,t,i){if(!i)if((e[Ve]&3)===3){let s=n.preOrderCheckHooks;s!==null&&xc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Mc(e,s,0,t)}wr(t)}function Jf(n,e=ze.Default){let t=Bn();if(t===null)return Oe(n,e);let i=qi();return Jv(i,t,En(n),e)}function wy(){let n="invalid";throw new Error(n)}function Ty(n,e,t,i,r,s){let o=ut(null);try{let a=null;r&Wi.SignalBased&&(a=e[i][ts]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Wi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Ev(e,a,i,s)}finally{ut(o)}}function Cy(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[pi]=r,d[Ve]=i|4|128|8|64|1024,(l!==null||n&&n[Ve]&2048)&&(d[Ve]|=2048),Cv(d),d[Yt]=d[ko]=n,d[Yn]=t,d[Hi]=o||n&&n[Hi],d[Un]=a||n&&n[Un],d[No]=c||n&&n[No]||null,d[Vn]=s,d[Zc]=IE(),d[Dc]=u,d[_v]=l,d[Zn]=e.type==2?n[Zn]:d,d}function Dy(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Ay(n,e,t,i,r){let s=KS(),o=i&2;try{wr(-1),o&&e.length>zi&&ib(n,e,zi,!1),bn(o?2:0,r),t(i,r)}finally{wr(s),bn(o?3:1,r)}}function rb(n,e,t){Av()&&(Vo(gi(t,e),e),Iy(n,e,t))}function Iy(n,e,t){mb(n,e,t),(t.flags&64)===64&&gb(n,e,t)}function sb(n,e,t=gi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function ob(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Ry(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Ry(n,e,t,i,r,s,o,a,c,l,u){let d=zi+i,f=d+r,p=ab(d,f),g=typeof l=="function"?l():l;return p[rt]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function ab(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:My);return t}function cb(n,e,t,i){let s=i.get(FE,py)||t===Jn.ShadowDom,o=n.selectRootElement(e,s);return lb(o),o}function lb(n){ub(n)}var ub=()=>null;function Bg(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Wi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Vg(i,t,l,a,c):Vg(i,t,l,a)}return i}function Vg(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function db(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=Bg(0,d.inputs,u,c,p),l=Bg(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!Zf(e)?Cb(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function fb(n,e,t,i){if(Av()){let r=i===null?null:{"":-1},s=yb(n,t);if(s!==null){let[o,a]=Py(n,t,s);Ny(n,e,t,o,r,a)}r&&xb(t,i,r)}t.mergedAttrs=Lc(t.mergedAttrs,t.attrs)}function Ny(n,e,t,i,r,s){for(let l=0;l<i.length;l++)fE(qv(t,e),n,i[l].type);Sb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Dy(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Lc(t.mergedAttrs,u.hostAttrs),Eb(n,t,e,c,u),Mb(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}db(n,t,s)}function hb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;pb(o)!=a&&o.push(a),o.push(t,i,s)}}function pb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function mb(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Cs(t)&&wb(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||qv(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=sf(e,n,o,t);if(Vo(c,e),s!==null&&Tb(e,o-i,c,a,t,s),Ds(a)){let l=Gi(t.index,e);l[Yn]=sf(e,n,o,t)}}}function gb(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=ZS();try{wr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];tf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&vb(c,l)}}finally{wr(-1),tf(o)}}function vb(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function yb(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];qE(e,s.selectors,!1)&&(i??=[],Ds(s)?i.unshift(s):i.push(s))}return i}function Py(n,e,t){let i=[],r=null;for(let s of t)s.findHostDirectiveDefs!==null&&(r??=new Map,s.findHostDirectiveDefs(s,i,r)),Ds(s)&&(i.push(s),_b(n,e,i.length-1));return Cs(e)?i.push(...t.slice(1)):i.push(...t),[i,r]}function _b(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function xb(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ce(-301,!1);i.push(e[r],s)}}}function Mb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ds(e)&&(t[""]=n)}}function Sb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Eb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=_s(r.type,!0)),o=new Oo(s,Ds(r),Jf);n.blueprint[i]=o,t[i]=o,hb(n,e,i,Dy(n,t,r.hostVars,My),r)}function bb(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function wb(n,e,t){let i=gi(e,n),r=ob(t),s=n[Hi].rendererFactory,o=Ly(n,Cy(n,r,null,bb(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Tb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Ty(i,t,c,l,u,d)}}function Cb(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Db(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ly(n,e){return n[Po]?n[Mg][kn]=e:n[Po]=e,n[Mg]=e,e}function Oy(n,e){let t=n[No],i=t?t.get(hi,null):null;i&&i.handleError(e)}function Fy(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Ty(u,l,i,a,c,r)}}function Ab(n,e){let t=Gi(e,n),i=t[rt];Ib(i,t);let r=t[pi];r!==null&&t[Dc]===null&&(t[Dc]=gy(r,t[No])),ky(i,t,t[Yn])}function Ib(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function ky(n,e,t){Ff(e);try{let i=n.viewQuery;i!==null&&pf(1,i,t);let r=n.template;r!==null&&Ay(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Yc]?.finishViewCreation(n),n.staticContentQueries&&vy(n,e),n.staticViewQueries&&pf(2,n.viewQuery,t);let s=n.components;s!==null&&Rb(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ve]&=-5,kf()}}function Rb(n,e){for(let t=0;t<e.length;t++)Ab(n,e[t])}var Tr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Tr||{}),Nb;function Kf(n,e){return Nb(n,e)}function Uy(n){return(n.flags&32)===32}function gs(n,e,t,i,r){if(i!=null){let s,o=!1;mi(i)?s=i:Mr(i)&&(o=!0,i=i[pi]);let a=fi(i);n===0&&t!==null?r==null?Ey(e,t,a):Bc(e,t,a,r||null,!0):n===1&&t!==null?Bc(e,t,a,r||null,!0):n===2?eb(e,a,o):n===3&&e.destroyNode(a),s!=null&&jb(e,n,s,t,r)}}function Pb(n,e){By(n,e),e[pi]=null,e[Vn]=null}function Lb(n,e,t,i,r,s){i[pi]=r,i[Vn]=e,nl(n,i,t,1,r,s)}function By(n,e){e[Hi].changeDetectionScheduler?.notify(10),nl(n,e,e[Un],2,null,null)}function Ob(n){let e=n[Po];if(!e)return Wd(n[rt],n);for(;e;){let t=null;if(Mr(e))t=e[Po];else{let i=e[wn];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)Mr(e)&&Wd(e[rt],e),e=e[Yt];e===null&&(e=n),Mr(e)&&Wd(e[rt],e),t=e&&e[kn]}e=t}}function Fb(n,e,t,i){let r=wn+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-wn?(e[kn]=t[r],cv(t,wn+i,e)):(t.push(e),e[kn]=null),e[Yt]=t;let o=e[Lo];o!==null&&t!==o&&Vy(o,e);let a=e[Yc];a!==null&&a.insertView(n),Qd(e),e[Ve]|=128}function Vy(n,e){let t=n[Nc],i=e[Yt];if(Mr(i))n[Ve]|=2;else{let r=i[Yt][Zn];e[Zn]!==r&&(n[Ve]|=2)}t===null?n[Nc]=[e]:t.push(e)}function Qf(n,e){let t=n[Nc],i=t.indexOf(e);t.splice(i,1)}function mf(n,e){if(n.length<=wn)return;let t=wn+e,i=n[t];if(i){let r=i[Lo];r!==null&&r!==n&&Qf(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=Tc(n,wn+e);Pb(i[rt],i);let o=s[Yc];o!==null&&o.detachView(s[rt]),i[Yt]=null,i[kn]=null,i[Ve]&=-129}return i}function Hy(n,e){if(Uo(e))return;let t=e[Un];t.destroyNode&&nl(n,e,t,3,null,null),Ob(e)}function Wd(n,e){if(Uo(e))return;let t=ut(null);try{e[Ve]&=-129,e[Ve]|=256,e[cn]&&bd(e[cn]),Ub(n,e),kb(n,e),e[rt].type===1&&e[Un].destroy();let i=e[Lo];if(i!==null&&mi(e[Yt])){i!==e[Yt]&&Qf(i,e);let r=e[Yc];r!==null&&r.detachView(n)}df(e)}finally{ut(t)}}function kb(n,e){let t=n.cleanup,i=e[Ac];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Ac]=null);let r=e[Bi];if(r!==null){e[Bi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Ic];if(s!==null){e[Ic]=null;for(let o of s)o.destroy()}}function Ub(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Oo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];bn(4,a,c);try{c.call(a)}finally{bn(5,a,c)}}else{bn(4,r,s);try{s.call(r)}finally{bn(5,r,s)}}}}}function Bb(n,e,t){return Vb(n,e.parent,t)}function Vb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[pi];if(Cs(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Jn.None||r===Jn.Emulated)return null}return gi(i,t)}function Hb(n,e,t){return Gb(n,e,t)}function zb(n,e,t){return n.type&40?gi(n,t):null}var Gb=zb,Hg;function zy(n,e,t,i){let r=Bb(n,i,e),s=e[Un],o=i.parent||e[Vn],a=Hb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Ug(s,r,t[c],a,!1);else Ug(s,r,t,a,!1);Hg!==void 0&&Hg(s,i,e,t,r)}function Co(n,e){if(e!==null){let t=e.type;if(t&3)return gi(e,n);if(t&4)return gf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Co(n,i);{let r=n[e.index];return mi(r)?gf(-1,r):fi(r)}}else{if(t&128)return Co(n,e.next);if(t&32)return Kf(e,n)()||fi(n[e.index]);{let i=Gy(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=br(n[Zn]);return Co(r,i)}else return Co(n,e.next)}}}return null}function Gy(n,e){if(e!==null){let i=n[Zn][Vn],r=e.projection;return i.projection[r]}return null}function gf(n,e){let t=wn+n+1;if(t<e.length){let i=e[t],r=i[rt].firstChild;if(r!==null)return Co(i,r)}return e[Er]}function eh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Vo(fi(a),i),t.flags|=2),!Uy(t))if(c&8)eh(n,e,t.child,i,r,s,!1),gs(e,n,r,a,s);else if(c&32){let l=Kf(t,i),u;for(;u=l();)gs(e,n,r,u,s);gs(e,n,r,a,s)}else c&16?Wb(n,e,i,t,r,s):gs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function nl(n,e,t,i,r,s){eh(t,i,n.firstChild,e,r,s,!1)}function Wb(n,e,t,i,r,s){let o=t[Zn],c=o[Vn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];gs(e,n,r,u,s)}else{let l=c,u=o[Yt];ay(i)&&(l.flags|=128),eh(n,e,l,u,r,s,!0)}}function jb(n,e,t,i,r){let s=t[Er],o=fi(t);s!==o&&gs(e,n,i,s,r);for(let a=wn;a<t.length;a++){let c=t[a];nl(c[rt],c,n,e,i,s)}}function zg(n,e){return!e||e.firstChild===null||ay(n)}function $b(n,e,t,i=!0){let r=e[rt];if(Fb(r,e,n,t),i){let o=gf(t,n),a=e[Un],c=a.parentNode(n[Er]);c!==null&&Lb(r,n[Vn],a,e,c,o)}let s=e[Dc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Vc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(fi(s)),mi(s)&&qb(s,i);let o=t.type;if(o&8)Vc(n,e,t.child,i);else if(o&32){let a=Kf(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Gy(e,t);if(Array.isArray(a))i.push(...a);else{let c=br(e[Zn]);Vc(c[rt],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function qb(n,e){for(let t=wn;t<n.length;t++){let i=n[t],r=i[rt].firstChild;r!==null&&Vc(i[rt],i,r,e)}n[Er]!==n[pi]&&e.push(n[Er])}var Wy=[];function Xb(n){return n[cn]??Yb(n)}function Yb(n){let e=Wy.pop()??Object.create(Jb);return e.lView=n,e}function Zb(n){n.lView[cn]!==n&&(n.lView=null,Wy.push(n))}var Jb=yt(he({},Ja),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Kc(n.lView)},consumerOnSignalRead(){this.lView[cn]=this}});function Kb(n){let e=n[cn]??Object.create(Qb);return e.lView=n,e}var Qb=yt(he({},Ja),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=br(n.lView);for(;e&&!jy(e[rt]);)e=br(e);e&&Of(e)},consumerOnSignalRead(){this.lView[cn]=this}});function jy(n){return n.type!==2}function $y(n){if(n[Ic]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Ic])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ve]&8192)}}var ew=100;function qy(n,e=!0,t=0){let r=n[Hi].rendererFactory,s=!1;s||r.begin?.();try{tw(n,t)}catch(o){throw e&&Oy(n,o),o}finally{s||r.end?.()}}function tw(n,e){let t=Nv();try{bg(!0),vf(n,e);let i=0;for(;Jc(n);){if(i===ew)throw new Ce(103,!1);i++,vf(n,1)}}finally{bg(t)}}function nw(n,e,t,i){if(Uo(e))return;let r=e[Ve],s=!1,o=!1;Ff(e);let a=!0,c=null,l=null;s||(jy(n)?(l=Xb(e),c=Sd(l)):Im()===null?(a=!1,l=Kb(e),c=Sd(l)):e[cn]&&(bd(e[cn]),e[cn]=null));try{Cv(e),qS(n.bindingStartIndex),t!==null&&Ay(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let p=n.preOrderCheckHooks;p!==null&&xc(e,p,null)}else{let p=n.preOrderHooks;p!==null&&Mc(e,p,0,null),Hd(e,0)}if(o||iw(e),$y(e),Xy(e,0),n.contentQueries!==null&&vy(n,e),!s)if(u){let p=n.contentCheckHooks;p!==null&&xc(e,p)}else{let p=n.contentHooks;p!==null&&Mc(e,p,1),Hd(e,1)}sw(n,e);let d=n.components;d!==null&&Zy(e,d,0);let f=n.viewQuery;if(f!==null&&pf(2,f,i),!s)if(u){let p=n.viewCheckHooks;p!==null&&xc(e,p)}else{let p=n.viewHooks;p!==null&&Mc(e,p,2),Hd(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Vd]){for(let p of e[Vd])p();e[Vd]=null}s||(e[Ve]&=-73)}catch(u){throw s||Kc(e),u}finally{l!==null&&(Pm(l,c),a&&Zb(l)),kf()}}function Xy(n,e){for(let t=uy(n);t!==null;t=dy(t))for(let i=wn;i<t.length;i++){let r=t[i];Yy(r,e)}}function iw(n){for(let e=uy(n);e!==null;e=dy(e)){if(!(e[Ve]&2))continue;let t=e[Nc];for(let i=0;i<t.length;i++){let r=t[i];Of(r)}}}function rw(n,e,t){let i=Gi(e,n);Yy(i,t)}function Yy(n,e){Lf(n)&&vf(n,e)}function vf(n,e){let i=n[rt],r=n[Ve],s=n[cn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ed(s)),o||=!1,s&&(s.dirty=!1),n[Ve]&=-9217,o)nw(i,n,i.template,n[Yn]);else if(r&8192){$y(n),Xy(n,1);let a=i.components;a!==null&&Zy(n,a,1)}}function Zy(n,e,t){for(let i=0;i<e.length;i++)rw(n,e[i],t)}function sw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)wr(~r);else{let s=r,o=t[++i],a=t[++i];YS(o,s);let c=e[s];bn(24,c),a(2,c),bn(25,c)}}}finally{wr(-1)}}function th(n,e){let t=Nv()?64:1088;for(n[Hi].changeDetectionScheduler?.notify(e);n;){n[Ve]|=t;let i=br(n);if(Pc(n)&&!i)return n;n=i}return null}var Ss=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[rt];return Vc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Yn]}get dirty(){return!!(this._lView[Ve]&9280)||!!this._lView[cn]?.dirty}set context(e){this._lView[Yn]=e}get destroyed(){return Uo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Yt];if(mi(e)){let t=e[Rc],i=t?t.indexOf(this):-1;i>-1&&(mf(e,i),Tc(t,i))}this._attachedToViewContainer=!1}Hy(this._lView[rt],this._lView)}onDestroy(e){Dv(this._lView,e)}markForCheck(){th(this._cdRefInjectingView||this._lView,4)}markForRefresh(){Of(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ve]&=-129}reattach(){Qd(this._lView),this._lView[Ve]|=128}detectChanges(){this._lView[Ve]|=1024,qy(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Pc(this._lView),t=this._lView[Lo];t!==null&&!e&&Qf(t,this._lView),By(this._lView[rt],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ce(902,!1);this._appRef=e;let t=Pc(this._lView),i=this._lView[Lo];i!==null&&!t&&Vy(i,this._lView),Qd(this._lView)}};function nh(n,e,t,i,r){let s=n.data[e];if(s===null)s=ow(n,e,t,i,r),XS()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=jS();s.injectorIndex=o===null?-1:o.injectorIndex}return el(s,!0),s}function ow(n,e,t,i,r){let s=Iv(),o=Rv(),a=o?s:s&&s.parent,c=n.data[e]=cw(n,a,t,e,i,r);return aw(n,c,s,o),c}function aw(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function cw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return zS()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var dk=new RegExp(`^(\\d+)*(${OE}|${LE})*(.*)`);var lw=()=>null;function Gg(n,e){return lw(n,e)}var yf=class{},Hc=class{},_f=class{resolveComponentFactory(e){throw Error(`No component factory found for ${an(e)}.`)}},Es=class{static NULL=new _f},bs=class{};var uw=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>null})}return n})();function xf(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=mg(r,a);else if(s==2){let c=a,l=e[++o];i=mg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var zc=class extends Es{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Vi(e);return new ws(t,this.ngModule)}};function Wg(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:Wi.None;e?t.push({propName:o,templateName:i,isSignal:(a&Wi.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function dw(n){let e=n.toLowerCase();return e==="svg"?NS:e==="math"?PS:null}var ws=class extends Hc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Wg(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Wg(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=JE(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ut(null);try{r=r||this.ngModule;let o=r instanceof ln?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new nf(e,o):e,c=a.get(bs,null);if(c===null)throw new Ce(407,!1);let l=a.get(uw,null),u=a.get(Ms,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=i?cb(f,i,this.componentDef.encapsulation,a):Sy(f,p,dw(p)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let m=null;g!==null&&(m=gy(g,a,!0));let h=Ry(0,null,null,1,0,null,null,null,null,null,null),w=Cy(null,h,null,_,null,null,d,f,a,null,m);w[zi]=g,Ff(w);let E=null;try{let M=i?["ng-version","19.1.4"]:KE(this.componentDef.selectors[0]),A=nh(h,zi,2,"#host",M),[D,T]=Py(h,A,[this.componentDef]);Ny(h,w,A,D,{},T);for(let N of D)A.mergedAttrs=Lc(A.mergedAttrs,N.hostAttrs);A.mergedAttrs=Lc(A.mergedAttrs,M),xf(A,A.mergedAttrs,!0),g&&(by(f,g,A),Vo(g,w)),t!==void 0&&fw(A,this.ngContentSelectors,t),Iy(h,w,A),yy(h,A,w),zv(h,A),E=Gi(A.index,w),w[Yn]=E[Yn],ky(h,w,null)}catch(M){throw E!==null&&df(E),df(w),M}finally{kf()}return new Mf(this.componentType,w)}finally{ut(s)}}},Mf=class extends yf{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=LS(t[rt],zi),this.location=Gf(this._tNode,t),this.instance=Gi(this._tNode.index,t)[Yn],this.hostView=this.changeDetectorRef=new Ss(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Fy(s[rt],s,r,e,t),this.previousInputValues.set(e,t);let o=Gi(this._tNode.index,s);th(o,1)}}get injector(){return new Sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function fw(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var il=(()=>{class n{static __NG_ELEMENT_ID__=hw}return n})();function hw(){let n=qi();return mw(n,Bn())}var pw=il,Jy=class extends pw{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Gf(this._hostTNode,this._hostLView)}get injector(){return new Sr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Uf(this._hostTNode,this._hostLView);if(Wv(e)){let t=Fc(e,this._hostLView),i=Oc(e),r=t[rt].data[i+8];return new Sr(r,t)}else return new Sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=jg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-wn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Gg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,zg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!DS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ws(Vi(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(ln,null);_&&(s=_)}let u=Vi(c.componentType??{}),d=Gg(this._lContainer,u?.id??null),f=d?.firstChild??null,p=c.create(l,r,f,s);return this.insertImpl(p.hostView,a,zg(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(OS(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Yt],l=new Jy(c,c[Vn],c[Yt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return $b(o,r,s,i),e.attachToViewContainerRef(),cv(jd(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=jg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=mf(this._lContainer,t);i&&(Tc(jd(this._lContainer),t),Hy(i[rt],i))}detach(e){let t=this._adjustIndex(e,-1),i=mf(this._lContainer,t);return i&&Tc(jd(this._lContainer),t)!=null?new Ss(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function jg(n){return n[Rc]}function jd(n){return n[Rc]||(n[Rc]=[])}function mw(n,e){let t,i=e[n.index];return mi(i)?t=i:(t=Db(i,e,null,n),e[n.index]=t,Ly(e,t)),vw(t,e,n,i),new Jy(t,n,e)}function gw(n,e){let t=n[Un],i=t.createComment(""),r=gi(e,n),s=t.parentNode(r);return Bc(t,s,i,t.nextSibling(r),!1),i}var vw=yw;function yw(n,e,t,i){if(n[Er])return;let r;t.type&8?r=fi(i):r=gw(e,t),n[Er]=r}var ji=class{},Fo=class{};var Sf=class extends ji{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new zc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=dv(e);this._bootstrapComponents=_y(s.bootstrap),this._r3Injector=ey(e,t,[{provide:ji,useValue:this},{provide:Es,useValue:this.componentFactoryResolver},...i],an(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Ef=class extends Fo{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Sf(this.moduleType,e,[])}};var Gc=class extends ji{injector;componentFactoryResolver=new zc(this);instance=null;constructor(e){super();let t=new Ro([...e.providers,{provide:ji,useValue:this},{provide:Es,useValue:this.componentFactoryResolver}],e.parent||Nf(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function rl(n,e,t=null){return new Gc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var _w=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=mv(!1,t.type),r=i.length>0?rl([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=we({token:n,providedIn:"environment",factory:()=>new n(Oe(ln))})}return n})();function Ns(n){return jc(()=>{let e=Ky(n),t=yt(he({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===cy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(_w).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Jn.Emulated,styles:n.styles||qn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Wf("NgStandalone"),Qy(t);let i=n.dependencies;return t.directiveDefs=qg(i,!1),t.pipeDefs=qg(i,!0),t.id=Sw(t),t})}function xw(n){return Vi(n)||fv(n)}function Mw(n){return n!==null}function Ps(n){return jc(()=>({type:n.type,bootstrap:n.bootstrap||qn,declarations:n.declarations||qn,imports:n.imports||qn,exports:n.exports||qn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function $g(n,e){if(n==null)return Io;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Wi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Wi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ih(n){return jc(()=>{let e=Ky(n);return Qy(e),e})}function Ky(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Io,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||qn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:$g(n.inputs,e),outputs:$g(n.outputs),debugInfo:null}}function Qy(n){n.features?.forEach(e=>e(n))}function qg(n,e){if(!n)return null;let t=e?hv:xw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Mw)}function Sw(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var rh=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var e_=new Ne("");function Ho(n){return!!n&&typeof n.then=="function"}function t_(n){return!!n&&typeof n.subscribe=="function"}var sl=new Ne("");var n_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ee(sl,{optional:!0})??[];injector=ee(Tn);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Cn(this.injector,r);if(Ho(s))t.push(s);else if(t_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ew=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>new bf})}return n})(),bf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},ol=new Ne("");function bw(){Um(()=>{throw new Ce(600,!1)})}function ww(n){return n.isBoundToModule}var Tw=10;function Cw(n,e,t){try{let i=t();return Ho(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var $i=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ee(TE);afterRenderManager=ee(my);zonelessEnabled=ee(Vf);rootEffectScheduler=ee(Ew);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Gt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ee(As).hasPendingTasks.pipe(Je(t=>!t));constructor(){ee(Rs,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ee(ln);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Hc;if(!this._injector.get(n_).done){let f=!r&&pv(t),p=!1;throw new Ce(405,p)}let o;r?o=t:o=this._injector.get(Es).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=ww(o)?void 0:this._injector.get(ji),c=i||o.selector,l=o.create(Tn.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(e_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Sc(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(Xf.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Ce(101,!1);let t=ut(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,ut(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(bs,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<Tw;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)Dw(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Jc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Sc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(ol,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Sc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ce(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Sc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Dw(n,e,t,i){if(!t&&!Jc(n))return;qy(n,e,t&&!i?0:1)}function Xg(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Fy(n,t,s[o],o,i)}function Aw(n,e,t,i,r,s){let o=e.consts,a=Eg(o,r),c=nh(e,n,2,i,a);return fb(e,t,c,Eg(o,s)),c.attrs!==null&&xf(c,c.attrs,!1),c.mergedAttrs!==null&&xf(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Xi(n,e,t,i){let r=Bn(),s=Qc(),o=zi+n,a=r[Un],c=s.firstCreatePass?Aw(o,s,r,e,t,i):s.data[o],l=Iw(s,r,c,a,e,n);r[o]=l;let u=Sv(c);return el(c,!0),by(a,l,c),!Uy(c)&&Vv()&&zy(s,r,l,c),BS()===0&&Vo(l,r),VS(),u&&(rb(s,r,c),yy(s,c,r)),i!==null&&sb(r,c),Xi}function Ls(){let n=qi();Rv()?$S():(n=n.parent,el(n,!1));let e=n;GS(e)&&WS(),HS();let t=Qc();return t.firstCreatePass&&(zv(t,n),Mv(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&iE(e)&&Xg(t,e,Bn(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&rE(e)&&Xg(t,e,Bn(),e.stylesWithoutHost,!1),Ls}function vi(n,e,t,i){return Xi(n,e,t,i),Ls(),vi}var Iw=(n,e,t,i,r,s)=>(Hv(!0),Sy(i,r,QS()));var Wc="en-US";var Rw=Wc;function Nw(n){typeof n=="string"&&(Rw=n.toLowerCase().replace(/_/g,"-"))}var Pw=(n,e,t)=>{};function al(n,e,t,i){let r=Bn(),s=Qc(),o=qi();return Ow(s,r,r[Un],o,n,e,i),al}function Lw(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Ac],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function Ow(n,e,t,i,r,s,o){let a=Sv(i),l=n.firstCreatePass&&US(n),u=e[Yn],d=kS(e),f=!0;if(i.type&3||o){let _=gi(i,e),m=o?o(_):_,h=d.length,w=o?M=>o(fi(M[i.index])):i.index,E=null;if(!o&&a&&(E=Lw(n,e,r,i.index)),E!==null){let M=E.__ngLastListenerFn__||E;M.__ngNextListenerFn__=s,E.__ngLastListenerFn__=s,f=!1}else{s=Zg(i,e,u,s),Pw(_,r,s);let M=t.listen(m,r,s);d.push(s,M),l&&l.push(r,w,h,h+1)}}else s=Zg(i,e,u,s);let p=i.outputs,g;if(f&&p!==null&&(g=p[r])){let _=g.length;if(_)for(let m=0;m<_;m+=2){let h=g[m],w=g[m+1],A=e[h][w].subscribe(s),D=d.length;d.push(s,A),l&&l.push(r,i.index,D,-(D+1))}}}function Yg(n,e,t,i){let r=ut(null);try{return bn(6,e,t),t(i)!==!1}catch(s){return Oy(n,s),!1}finally{bn(7,e,t),ut(r)}}function Zg(n,e,t,i){return function r(s){if(s===Function)return i;let o=Cs(n)?Gi(n.index,e):e;th(o,5);let a=Yg(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Yg(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function cl(n,e=""){let t=Bn(),i=Qc(),r=n+zi,s=i.firstCreatePass?nh(i,r,1,e,null):i.data[r],o=Fw(i,t,s,e,n);t[r]=o,Vv()&&zy(i,t,o,s),el(s,!1)}var Fw=(n,e,t,i,r)=>(Hv(!0),QE(e[Un],i));var wf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},ll=(()=>{class n{compileModuleSync(t){return new Ef(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=dv(t),s=_y(r.declarations).reduce((o,a)=>{let c=Vi(a);return c&&o.push(new ws(c)),o},[]);return new wf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kw=(()=>{class n{zone=ee(Rt);changeDetectionScheduler=ee(Ms);applicationRef=ee($i);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Uw({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Rt(yt(he({},Bw()),{scheduleInRootZone:t})),[{provide:Rt,useFactory:n},{provide:xs,multi:!0,useFactory:()=>{let i=ee(kw,{optional:!0});return()=>i.initialize()}},{provide:xs,multi:!0,useFactory:()=>{let i=ee(Vw);return()=>{i.initialize()}}},e===!0?{provide:ny,useValue:!0}:[],{provide:iy,useValue:t??ty}]}function Bw(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Vw=(()=>{class n{subscription=new At;initialized=!1;zone=ee(Rt);pendingTasks=ee(As);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hw=(()=>{class n{appRef=ee($i);taskService=ee(As);ngZone=ee(Rt);zonelessEnabled=ee(Vf);tracing=ee(Rs,{optional:!0});disableScheduling=ee(ny,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new At;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Uc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ee(iy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof uf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Rg:ry;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Uc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Rg(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zw(){return typeof $localize<"u"&&$localize.locale||Wc}var sh=new Ne("",{providedIn:"root",factory:()=>ee(sh,ze.Optional|ze.SkipSelf)||zw()});var Tf=new Ne(""),Gw=new Ne("");function wo(n){return!n.moduleRef}function Ww(n){let e=wo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Rt);return t.run(()=>{wo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(hi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),wo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Tf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Tf);o.add(s),n.moduleRef.onDestroy(()=>{Sc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return Cw(i,t,()=>{let s=e.get(n_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(sh,Wc);if(Nw(o||Wc),!e.get(Gw,!0))return wo(n)?e.get($i):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(wo(n)){let c=e.get($i);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return jw(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function jw(n,e){let t=n.injector.get($i);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ce(-403,!1);e.push(n)}var Ec=null;function $w(n=[],e){return Tn.create({name:e,providers:[{provide:Xc,useValue:"platform"},{provide:Tf,useValue:new Set([()=>Ec=null])},...n]})}function qw(n=[]){if(Ec)return Ec;let e=$w(n);return Ec=e,bw(),Xw(e),e}function Xw(n){let e=n.get($f,null);Cn(n,()=>{e?.forEach(t=>t())})}var zo=(()=>{class n{static __NG_ELEMENT_ID__=Yw}return n})();function Yw(n){return Zw(qi(),Bn(),(n&16)===16)}function Zw(n,e,t){if(Cs(n)&&!t){let i=Gi(n.index,e);return new Ss(i,i)}else if(n.type&175){let i=e[Zn];return new Ss(i,e)}return null}function i_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=qw(i),s=[Uw({}),{provide:Ms,useExisting:Hw},...t||[]],o=new Gc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return Ww({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var Jg=class{[ts];constructor(e){this[ts]=e}destroy(){this[ts].destroy()}};function r_(n){let e=Vi(n);if(!e)return null;let t=new ws(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var l_=null;function Fs(){return l_}function u_(n){l_??=n}var ul=class{};var tn=new Ne(""),ah=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(tT),providedIn:"platform"})}return n})(),d_=new Ne(""),tT=(()=>{class n extends ah{_location;_history;_doc=ee(tn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Fs().getBaseHref(this._doc)}onPopState(t){let i=Fs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Fs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ch(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function s_(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function yi(n){return n&&n[0]!=="?"?"?"+n:n}var Cr=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(lh),providedIn:"root"})}return n})(),f_=new Ne(""),lh=(()=>{class n extends Cr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ee(tn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return ch(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+yi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+yi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+yi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Oe(ah),Oe(f_,8))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),h_=(()=>{class n extends Cr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=ch(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+yi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+yi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Oe(ah),Oe(f_,8))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),ks=(()=>{class n{_subject=new Gt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=rT(s_(o_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+yi(i))}normalize(t){return n.stripTrailingSlash(iT(this._basePath,o_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+yi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+yi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=yi;static joinWithSlash=ch;static stripTrailingSlash=s_;static \u0275fac=function(i){return new(i||n)(Oe(Cr))};static \u0275prov=we({token:n,factory:()=>nT(),providedIn:"root"})}return n})();function nT(){return new ks(Oe(Cr))}function iT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function o_(n){return n.replace(/\/index.html$/,"")}function rT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function p_(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var m_="browser",sT="server";function uh(n){return n===sT}var g_=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>new oh(ee(tn),window)})}return n})(),oh=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=oT(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function oT(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var dl=class{};var fh=class extends ul{supportsDOMEvents=!0},hh=class n extends fh{static makeCurrent(){u_(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=aT();return t==null?null:cT(t)}resetBaseElement(){Go=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return p_(document.cookie,e)}},Go=null;function aT(){return Go=Go||document.querySelector("base"),Go?Go.getAttribute("href"):null}function cT(n){return new URL(n,document.baseURI).pathname}var lT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),ph=new Ne(""),S_=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ce(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Oe(ph),Oe(Rt))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),hl=class{_doc;constructor(e){this._doc=e}manager},fl="ng-app-id";function v_(n){for(let e of n)e.remove()}function y_(n,e){let t=e.createElement("style");return t.textContent=n,t}function uT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${fl}="${e}"],link[${fl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(fl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function mh(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var E_=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=uh(s),uT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,y_);i?.forEach(r=>this.addUsage(r,this.external,mh))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(v_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])v_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,y_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,mh(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(fl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Oe(tn),Oe(jf),Oe(qf,8),Oe(Is))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),dh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},vh=/%COMP%/g;var b_="%COMP%",dT=`_nghost-${b_}`,fT=`_ngcontent-${b_}`,hT=!0,pT=new Ne("",{providedIn:"root",factory:()=>hT});function mT(n){return fT.replace(vh,n)}function gT(n){return dT.replace(vh,n)}function w_(n,e){return e.map(t=>t.replace(vh,n))}var __=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=uh(a),this.defaultRenderer=new Wo(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Jn.ShadowDom&&(i=yt(he({},i),{encapsulation:Jn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof pl?r.applyToHost(t):r instanceof jo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case Jn.Emulated:s=new pl(c,l,i,this.appId,u,o,a,d,f);break;case Jn.ShadowDom:return new gh(c,l,t,i,o,a,this.nonce,d,f);default:s=new jo(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Oe(S_),Oe(E_),Oe(jf),Oe(pT),Oe(tn),Oe(Is),Oe(Rt),Oe(qf),Oe(Rs,8))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),Wo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(dh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(x_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(x_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ce(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=dh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=dh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Tr.DashCase|Tr.Important)?e.style.setProperty(t,i,r&Tr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Tr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Fs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);let s=this.decoratePreventDefault(i);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function x_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var gh=class extends Wo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=w_(r.id,u);for(let f of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let d=r.getExternalStyles?.();if(d)for(let f of d){let p=mh(f,s);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},jo=class extends Wo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?w_(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pl=class extends jo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=mT(u),this.hostAttr=gT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},vT=(()=>{class n extends hl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Oe(tn))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),M_=["alt","control","meta","shift"],yT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_T={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},xT=(()=>{class n extends hl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fs().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),M_.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=yT[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),M_.forEach(o=>{if(o!==r){let a=_T[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Oe(tn))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function T_(n,e){return i_(he({rootComponent:n},MT(e)))}function MT(n){return{appProviders:[...TT,...n?.providers??[]],platformProviders:wT}}function ST(){hh.makeCurrent()}function ET(){return new hi}function bT(){return hy(document),document}var wT=[{provide:Is,useValue:m_},{provide:$f,useValue:ST,multi:!0},{provide:tn,useFactory:bT,deps:[]}];var TT=[{provide:Xc,useValue:"root"},{provide:hi,useFactory:ET,deps:[]},{provide:ph,useClass:vT,multi:!0,deps:[tn,Rt,Is]},{provide:ph,useClass:xT,multi:!0,deps:[tn]},__,E_,S_,{provide:bs,useExisting:__},{provide:dl,useClass:lT,deps:[]},[]];var C_=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Oe(tn))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue="primary",oa=Symbol("RouteTitle"),Sh=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Gs(n){return new Sh(n)}function DT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function AT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Kn(n[t],e[t]))return!1;return!0}function Kn(n,e){let t=n?Eh(n):void 0,i=e?Eh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!k_(n[r],e[r]))return!1;return!0}function Eh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function k_(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function U_(n){return n.length>0?n[n.length-1]:null}function Zi(n){return Ld(n)?n:Ho(n)?Ct(Promise.resolve(n)):Ae(n)}var IT={exact:V_,subset:H_},B_={exact:RT,subset:NT,ignored:()=>!0};function D_(n,e,t){return IT[t.paths](n.root,e.root,t.matrixParams)&&B_[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function RT(n,e){return Kn(n,e)}function V_(n,e,t){if(!Ar(n.segments,e.segments)||!vl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!V_(n.children[i],e.children[i],t))return!1;return!0}function NT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>k_(n[t],e[t]))}function H_(n,e,t){return z_(n,e,e.segments,t)}function z_(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ar(r,t)||e.hasChildren()||!vl(r,t,i))}else if(n.segments.length===t.length){if(!Ar(n.segments,t)||!vl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!H_(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ar(n.segments,r)||!vl(n.segments,r,i)||!n.children[Ue]?!1:z_(n.children[Ue],e,s,i)}}function vl(n,e,t){return e.every((i,r)=>B_[t](n[r].parameters,i.parameters))}var xi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ct([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Gs(this.queryParams),this._queryParamMap}toString(){return OT.serialize(this)}},ct=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yl(this)}},Dr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Gs(this.parameters),this._parameterMap}toString(){return W_(this)}};function PT(n,e){return Ar(n,e)&&n.every((t,i)=>Kn(t.parameters,e[i].parameters))}function Ar(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function LT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ue&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ue&&(t=t.concat(e(r,i)))}),t}var aa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>new Ws,providedIn:"root"})}return n})(),Ws=class{parse(e){let t=new wh(e);return new xi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${$o(e.root,!0)}`,i=UT(e.queryParams),r=typeof e.fragment=="string"?`#${FT(e.fragment)}`:"";return`${t}${i}${r}`}},OT=new Ws;function yl(n){return n.segments.map(e=>W_(e)).join("/")}function $o(n,e){if(!n.hasChildren())return yl(n);if(e){let t=n.children[Ue]?$o(n.children[Ue],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ue&&i.push(`${r}:${$o(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=LT(n,(i,r)=>r===Ue?[$o(n.children[Ue],!1)]:[`${r}:${$o(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ue]!=null?`${yl(n)}/${t[0]}`:`${yl(n)}/(${t.join("//")})`}}function G_(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ml(n){return G_(n).replace(/%3B/gi,";")}function FT(n){return encodeURI(n)}function bh(n){return G_(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _l(n){return decodeURIComponent(n)}function A_(n){return _l(n.replace(/\+/g,"%20"))}function W_(n){return`${bh(n.path)}${kT(n.parameters)}`}function kT(n){return Object.entries(n).map(([e,t])=>`;${bh(e)}=${bh(t)}`).join("")}function UT(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${ml(t)}=${ml(r)}`).join("&"):`${ml(t)}=${ml(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var BT=/^[^\/()?;#]+/;function yh(n){let e=n.match(BT);return e?e[0]:""}var VT=/^[^\/()?;=#]+/;function HT(n){let e=n.match(VT);return e?e[0]:""}var zT=/^[^=?&#]+/;function GT(n){let e=n.match(zT);return e?e[0]:""}var WT=/^[^&#]+/;function jT(n){let e=n.match(WT);return e?e[0]:""}var wh=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ct([],{}):new ct([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ue]=new ct(e,t)),i}parseSegment(){let e=yh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ce(4009,!1);return this.capture(e),new Dr(_l(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=HT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=yh(this.remaining);r&&(i=r,this.capture(i))}e[_l(t)]=_l(i)}parseQueryParam(e){let t=GT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=jT(this.remaining);o&&(i=o,this.capture(i))}let r=A_(t),s=A_(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=yh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ce(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new ct([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ce(4011,!1)}};function j_(n){return n.segments.length>0?new ct([],{[Ue]:n}):n}function $_(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=$_(r);if(i===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ct(n.segments,e);return $T(t)}function $T(n){if(n.numberOfChildren===1&&n.children[Ue]){let e=n.children[Ue];return new ct(n.segments.concat(e.segments),e.children)}return n}function Jo(n){return n instanceof xi}function qT(n,e,t=null,i=null){let r=q_(n);return X_(r,e,t,i)}function q_(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ct(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=j_(i);return e??r}function X_(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return _h(r,r,r,t,i);let s=XT(e);if(s.toRoot())return _h(r,r,new ct([],{}),t,i);let o=YT(s,r,n),a=o.processChildren?Xo(o.segmentGroup,o.index,s.commands):Z_(o.segmentGroup,o.index,s.commands);return _h(r,o.segmentGroup,a,t,i)}function xl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ko(n){return typeof n=="object"&&n!=null&&n.outlets}function _h(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Y_(n,e,t);let a=j_($_(o));return new xi(a,s,r)}function Y_(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Y_(s,e,t)}),new ct(n.segments,i)}var Ml=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&xl(i[0]))throw new Ce(4003,!1);let r=i.find(Ko);if(r&&r!==U_(i))throw new Ce(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function XT(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Ml(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Ml(t,e,i)}var Vs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function YT(n,e,t){if(n.isAbsolute)return new Vs(e,!0,0);if(!t)return new Vs(e,!1,NaN);if(t.parent===null)return new Vs(t,!0,0);let i=xl(n.commands[0])?0:1,r=t.segments.length-1+i;return ZT(t,r,n.numberOfDoubleDots)}function ZT(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ce(4005,!1);r=i.segments.length}return new Vs(i,!1,r-s)}function JT(n){return Ko(n[0])?n[0].outlets:{[Ue]:n}}function Z_(n,e,t){if(n??=new ct([],{}),n.segments.length===0&&n.hasChildren())return Xo(n,e,t);let i=KT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ct(n.segments.slice(0,i.pathIndex),{});return s.children[Ue]=new ct(n.segments.slice(i.pathIndex),n.children),Xo(s,0,r)}else return i.match&&r.length===0?new ct(n.segments,{}):i.match&&!n.hasChildren()?Th(n,e,t):i.match?Xo(n,0,r):Th(n,e,t)}function Xo(n,e,t){if(t.length===0)return new ct(n.segments,{});{let i=JT(t),r={};if(Object.keys(i).some(s=>s!==Ue)&&n.children[Ue]&&n.numberOfChildren===1&&n.children[Ue].segments.length===0){let s=Xo(n.children[Ue],e,t);return new ct(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Z_(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ct(n.segments,r)}}function KT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Ko(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!R_(c,l,o))return s;i+=2}else{if(!R_(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Th(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ko(s)){let c=QT(s.outlets);return new ct(i,c)}if(r===0&&xl(t[0])){let c=n.segments[e];i.push(new Dr(c.path,I_(t[0]))),r++;continue}let o=Ko(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&xl(a)?(i.push(new Dr(o,I_(a))),r+=2):(i.push(new Dr(o,{})),r++)}return new ct(i,{})}function QT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Th(new ct([],{}),0,i))}),e}function I_(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function R_(n,e,t){return n==t.path&&Kn(e,t.parameters)}var Yo="imperative",kt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(kt||{}),Dn=class{id;url;constructor(e,t){this.id=e,this.url=t}},js=class extends Dn{type=kt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mi=class extends Dn{urlAfterRedirects;type=kt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},dn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(dn||{}),Sl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Sl||{}),_i=class extends Dn{reason;code;type=kt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Yi=class extends Dn{reason;code;type=kt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Qo=class extends Dn{error;target;type=kt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},El=class extends Dn{urlAfterRedirects;state;type=kt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ch=class extends Dn{urlAfterRedirects;state;type=kt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dh=class extends Dn{urlAfterRedirects;state;shouldActivate;type=kt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ah=class extends Dn{urlAfterRedirects;state;type=kt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ih=class extends Dn{urlAfterRedirects;state;type=kt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rh=class{route;type=kt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Nh=class{route;type=kt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ph=class{snapshot;type=kt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lh=class{snapshot;type=kt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oh=class{snapshot;type=kt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fh=class{snapshot;type=kt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bl=class{routerEvent;position;anchor;type=kt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},ea=class{},$s=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function eC(n,e){return n.providers&&!n._injector&&(n._injector=rl(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Hn(n){return n.outlet||Ue}function tC(n,e){let t=n.filter(i=>Hn(i)===e);return t.push(...n.filter(i=>Hn(i)!==e)),t}function ca(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var kh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ca(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new la(this.rootInjector)}},la=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new kh(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Oe(ln))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wl=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Uh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Uh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Bh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Bh(e,this._root).map(t=>t.value)}};function Uh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Uh(n,t);if(i)return i}return null}function Bh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Bh(n,t);if(i.length)return i.unshift(e),i}return[]}var un=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Bs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Tl=class extends wl{snapshot;constructor(e,t){super(e),this.snapshot=t,Xh(this,e)}toString(){return this.snapshot.toString()}};function J_(n){let e=nC(n),t=new Vt([new Dr("",{})]),i=new Vt({}),r=new Vt({}),s=new Vt({}),o=new Vt(""),a=new Ir(t,i,s,o,r,Ue,n,e.root);return a.snapshot=e.root,new Tl(new un(a,[]),e)}function nC(n){let e={},t={},i={},r="",s=new Hs([],e,i,r,t,Ue,n,null,{});return new Dl("",new un(s,[]))}var Ir=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Je(l=>l[oa]))??Ae(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Je(e=>Gs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Je(e=>Gs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Cl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:he(he({},e.params),n.params),data:he(he({},e.data),n.data),resolve:he(he(he(he({},n.data),e.data),r?.data),n._resolvedData)}:i={params:he({},n.params),data:he({},n.data),resolve:he(he({},n.data),n._resolvedData??{})},r&&Q_(r)&&(i.resolve[oa]=r.title),i}var Hs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[oa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Gs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Gs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Dl=class extends wl{url;constructor(e,t){super(t),this.url=e,Xh(this,t)}toString(){return K_(this._root)}};function Xh(n,e){e.value._routerState=n,e.children.forEach(t=>Xh(n,t))}function K_(n){let e=n.children.length>0?` { ${n.children.map(K_).join(", ")} } `:"";return`${n.value}${e}`}function xh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Kn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Kn(e.params,t.params)||n.paramsSubject.next(t.params),AT(e.url,t.url)||n.urlSubject.next(t.url),Kn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Vh(n,e){let t=Kn(n.params,e.params)&&PT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Vh(n.parent,e.parent))}function Q_(n){return typeof n.title=="string"||n.title===null}var iC=new Ne(""),Yh=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ue;activateEvents=new on;deactivateEvents=new on;attachEvents=new on;detachEvents=new on;routerOutletData=oy(void 0);parentContexts=ee(la);location=ee(il);changeDetector=ee(zo);inputBinder=ee(Nl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ce(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ce(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ce(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ce(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Hh(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ih({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Pf]})}return n})(),Hh=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Ir?this.route:e===la?this.childContexts:e===iC?this.outletData:this.parent.get(e,t)}},Nl=new Ne(""),N_=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Eo([i.queryParams,i.params,i.data]).pipe(Mn(([s,o,a],c)=>(a=he(he(he({},s),o),a),c===0?Ae(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=r_(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function rC(n,e,t){let i=ta(n,e._root,t?t._root:void 0);return new Tl(i,e)}function ta(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=sC(n,e,t);return new un(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ta(n,a)),o}}let i=oC(e.value),r=e.children.map(s=>ta(n,s));return new un(i,r)}}function sC(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ta(n,i,r);return ta(n,i)})}function oC(n){return new Ir(new Vt(n.url),new Vt(n.params),new Vt(n.queryParams),new Vt(n.fragment),new Vt(n.data),n.outlet,n.component,n)}var na=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},e0="ngNavigationCancelingError";function Al(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Jo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=t0(!1,dn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function t0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[e0]=!0,t.cancellationCode=e,t}function aC(n){return n0(n)&&Jo(n.url)}function n0(n){return!!n&&n[e0]}var cC=(n,e,t,i)=>Je(r=>(new zh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),zh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),xh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Bs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Bs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Bs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Bs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Fh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Lh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(xh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),xh(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Il=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},zs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function lC(n,e,t){let i=n._root,r=e?e._root:null;return qo(i,r,t,[i.value])}function uC(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Xs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!nv(n)?n:e.get(n):i}function qo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Bs(e);return n.children.forEach(o=>{dC(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Zo(a,t.getContext(o),r)),r}function dC(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=fC(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Il(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?qo(n,e,a?a.children:null,i,r):qo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new zs(a.outlet.component,o))}else o&&Zo(e,a,r),r.canActivateChecks.push(new Il(i)),s.component?qo(n,null,a?a.children:null,i,r):qo(n,null,t,i,r);return r}function fC(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ar(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ar(n.url,e.url)||!Kn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Vh(n,e)||!Kn(n.queryParams,e.queryParams);case"paramsChange":default:return!Vh(n,e)}}function Zo(n,e,t){let i=Bs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Zo(o,e.children.getContext(s),t):Zo(o,null,t):Zo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new zs(e.outlet.component,r)):t.canDeactivateChecks.push(new zs(null,r)):t.canDeactivateChecks.push(new zs(null,r))}function ua(n){return typeof n=="function"}function hC(n){return typeof n=="boolean"}function pC(n){return n&&ua(n.canLoad)}function mC(n){return n&&ua(n.canActivate)}function gC(n){return n&&ua(n.canActivateChild)}function vC(n){return n&&ua(n.canDeactivate)}function yC(n){return n&&ua(n.canMatch)}function i0(n){return n instanceof li||n?.name==="EmptyError"}var gl=Symbol("INITIAL_VALUE");function qs(){return Mn(n=>Eo(n.map(e=>e.pipe(ui(1),kd(gl)))).pipe(Je(e=>{for(let t of e)if(t!==!0){if(t===gl)return gl;if(t===!1||_C(t))return t}return!0}),xn(e=>e!==gl),ui(1)))}function _C(n){return Jo(n)||n instanceof na}function xC(n,e){return It(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ae(yt(he({},t),{guardsResult:!0})):MC(o,i,r,n).pipe(It(a=>a&&hC(a)?SC(i,s,n,e):Ae(a)),Je(a=>yt(he({},t),{guardsResult:a})))})}function MC(n,e,t,i){return Ct(n).pipe(It(r=>CC(r.component,r.route,t,e,i)),di(r=>r!==!0,!0))}function SC(n,e,t,i){return Ct(e).pipe(xr(r=>ds(bC(r.route.parent,i),EC(r.route,i),TC(n,r.path,t),wC(n,r.route,t))),di(r=>r!==!0,!0))}function EC(n,e){return n!==null&&e&&e(new Oh(n)),Ae(!0)}function bC(n,e){return n!==null&&e&&e(new Ph(n)),Ae(!0)}function wC(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ae(!0);let r=i.map(s=>vc(()=>{let o=ca(e)??t,a=Xs(s,o),c=mC(a)?a.canActivate(e,n):Cn(o,()=>a(e,n));return Zi(c).pipe(di())}));return Ae(r).pipe(qs())}function TC(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>uC(o)).filter(o=>o!==null).map(o=>vc(()=>{let a=o.guards.map(c=>{let l=ca(o.node)??t,u=Xs(c,l),d=gC(u)?u.canActivateChild(i,n):Cn(l,()=>u(i,n));return Zi(d).pipe(di())});return Ae(a).pipe(qs())}));return Ae(s).pipe(qs())}function CC(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ae(!0);let o=s.map(a=>{let c=ca(e)??r,l=Xs(a,c),u=vC(l)?l.canDeactivate(n,e,t,i):Cn(c,()=>l(n,e,t,i));return Zi(u).pipe(di())});return Ae(o).pipe(qs())}function DC(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ae(!0);let s=r.map(o=>{let a=Xs(o,n),c=pC(a)?a.canLoad(e,t):Cn(n,()=>a(e,t));return Zi(c)});return Ae(s).pipe(qs(),r0(i))}function r0(n){return Id(Ht(e=>{if(typeof e!="boolean")throw Al(n,e)}),Je(e=>e===!0))}function AC(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ae(!0);let s=r.map(o=>{let a=Xs(o,n),c=yC(a)?a.canMatch(e,t):Cn(n,()=>a(e,t));return Zi(c)});return Ae(s).pipe(qs(),r0(i))}var ia=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},ra=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Us(n){return ls(new ia(n))}function IC(n){return ls(new Ce(4e3,!1))}function RC(n){return ls(t0(!1,dn.GuardRejected))}var Gh=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ae(i);if(r.numberOfChildren>1||!r.children[Ue])return IC(`${e.redirectTo}`);r=r.children[Ue]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:p,data:g,title:_}=r,m=Cn(s,()=>a({params:p,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:_}));if(m instanceof xi)throw new ra(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new ra(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new xi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ct(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ce(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Wh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function NC(n,e,t,i,r){let s=s0(n,e,t);return s.matched?(i=eC(e,i),AC(i,e,t,r).pipe(Je(o=>o===!0?s:he({},Wh)))):Ae(s)}function s0(n,e,t){if(e.path==="**")return PC(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?he({},Wh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||DT)(t,n,e);if(!r)return he({},Wh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?he(he({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function PC(n){return{matched:!0,parameters:n.length>0?U_(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function P_(n,e,t,i){return t.length>0&&FC(n,t,i)?{segmentGroup:new ct(e,OC(i,new ct(t,n.children))),slicedSegments:[]}:t.length===0&&kC(n,t,i)?{segmentGroup:new ct(n.segments,LC(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ct(n.segments,n.children),slicedSegments:t}}function LC(n,e,t,i){let r={};for(let s of t)if(Pl(n,e,s)&&!i[Hn(s)]){let o=new ct([],{});r[Hn(s)]=o}return he(he({},i),r)}function OC(n,e){let t={};t[Ue]=e;for(let i of n)if(i.path===""&&Hn(i)!==Ue){let r=new ct([],{});t[Hn(i)]=r}return t}function FC(n,e,t){return t.some(i=>Pl(n,e,i)&&Hn(i)!==Ue)}function kC(n,e,t){return t.some(i=>Pl(n,e,i))}function Pl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function UC(n,e,t){return e.length===0&&!n.children[t]}var jh=class{};function BC(n,e,t,i,r,s,o="emptyOnly"){return new $h(n,e,t,i,r,o,s).recognize()}var VC=31,$h=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Gh(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ce(4002,`'${e.segmentGroup}'`)}recognize(){let e=P_(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Je(({children:t,rootSnapshot:i})=>{let r=new un(i,t),s=new Dl("",r),o=qT(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Hs([],Object.freeze({}),Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ue,t).pipe(Je(i=>({children:i,rootSnapshot:t})),Fi(i=>{if(i instanceof ra)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ia?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(Je(o=>o instanceof un?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ct(s).pipe(xr(o=>{let a=i.children[o],c=tC(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Fd((o,a)=>(o.push(...a),o)),ki(null),Od(),It(o=>{if(o===null)return Us(i);let a=o0(o);return HC(a),Ae(a)}))}processSegment(e,t,i,r,s,o,a){return Ct(t).pipe(xr(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Fi(l=>{if(l instanceof ia)return Ae(null);throw l}))),di(c=>!!c),Fi(c=>{if(i0(c))return UC(i,r,s)?Ae(new jh):Us(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Hn(i)!==o&&(o===Ue||!Pl(r,s,i))?Us(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Us(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=s0(t,r,s);if(!c)return Us(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>VC&&(this.allowRedirects=!1));let p=new Hs(s,l,Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,L_(r),Hn(r),r.component??r._loadedComponent??null,r,O_(r)),g=Cl(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let _=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,e);return this.applyRedirects.lineralizeSegments(r,_).pipe(It(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=NC(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Mn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Mn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:p}=c,g=new Hs(f,d,Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,L_(i),Hn(i),i.component??i._loadedComponent??null,i,O_(i)),_=Cl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(_.params),g.data=Object.freeze(_.data);let{segmentGroup:m,slicedSegments:h}=P_(t,f,p,l);if(h.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(Je(E=>new un(g,E)));if(l.length===0&&h.length===0)return Ae(new un(g,[]));let w=Hn(i)===s;return this.processSegment(u,l,m,h,w?Ue:s,!0,g).pipe(Je(E=>new un(g,E instanceof un?[E]:[])))}))):Us(t)))}getChildConfig(e,t,i){return t.children?Ae({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ae({routes:t._loadedRoutes,injector:t._loadedInjector}):DC(e,t,i,this.urlSerializer).pipe(It(r=>r?this.configLoader.loadChildren(e,t).pipe(Ht(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):RC(t))):Ae({routes:[],injector:e})}};function HC(n){n.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function zC(n){let e=n.value.routeConfig;return e&&e.path===""}function o0(n){let e=[],t=new Set;for(let i of n){if(!zC(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=o0(i.children);e.push(new un(i.value,r))}return e.filter(i=>!t.has(i))}function L_(n){return n.data||{}}function O_(n){return n.resolve||{}}function GC(n,e,t,i,r,s){return It(o=>BC(n,e,t,i,o.extractedUrl,r,s).pipe(Je(({state:a,tree:c})=>yt(he({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function WC(n,e){return It(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ae(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of a0(c))o.add(l);let a=0;return Ct(o).pipe(xr(c=>s.has(c)?jC(c,i,n,e):(c.data=Cl(c,c.parent,n).resolve,Ae(void 0))),Ht(()=>a++),fs(1),It(c=>a===o.size?Ae(t):Qt))})}function a0(n){let e=n.children.map(t=>a0(t)).flat();return[n,...e]}function jC(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Q_(r)&&(s[oa]=r.title),$C(s,n,e,i).pipe(Je(o=>(n._resolvedData=o,n.data=Cl(n,n.parent,t).resolve,null)))}function $C(n,e,t,i){let r=Eh(n);if(r.length===0)return Ae({});let s={};return Ct(r).pipe(It(o=>qC(n[o],e,t,i).pipe(di(),Ht(a=>{if(a instanceof na)throw Al(new Ws,a);s[o]=a}))),fs(1),Je(()=>s),Fi(o=>i0(o)?Qt:ls(o)))}function qC(n,e,t,i){let r=ca(e)??i,s=Xs(n,r),o=s.resolve?s.resolve(e,t):Cn(r,()=>s(e,t));return Zi(o)}function Mh(n){return Mn(e=>{let t=n(e);return t?Ct(t).pipe(Je(()=>e)):Ae(e)})}var c0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ue);return i}getResolvedTitleForRoute(t){return t.data[oa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(XC),providedIn:"root"})}return n})(),XC=(()=>{class n extends c0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Oe(C_))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),da=new Ne("",{providedIn:"root",factory:()=>({})}),YC=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Ns({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&vi(0,"router-outlet")},dependencies:[Yh],encapsulation:2})}return n})();function Zh(n){let e=n.children&&n.children.map(Zh),t=e?yt(he({},n),{children:e}):he({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=YC),t}var sa=new Ne(""),Jh=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ee(ll);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ae(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Zi(t.loadComponent()).pipe(Je(l0),Ht(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),bo(()=>{this.componentLoaders.delete(t)})),r=new cs(i,()=>new Gt).pipe(as());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Ae({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=ZC(i,this.compiler,t,this.onLoadEndListener).pipe(bo(()=>{this.childrenLoaders.delete(i)})),o=new cs(s,()=>new Gt).pipe(as());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ZC(n,e,t,i){return Zi(n.loadChildren()).pipe(Je(l0),It(r=>r instanceof Fo||Array.isArray(r)?Ae(r):Ct(e.compileModuleAsync(r))),Je(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(sa,[],{optional:!0,self:!0}).flat()),{routes:o.map(Zh),injector:s}}))}function JC(n){return n&&typeof n=="object"&&"default"in n}function l0(n){return JC(n)?n.default:n}var Kh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(KC),providedIn:"root"})}return n})(),KC=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),u0=new Ne(""),d0=new Ne("");function QC(n,e,t){let i=n.get(d0),r=n.get(tn);return n.get(Rt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),eD(n))),{onViewTransitionCreated:c}=i;return c&&Cn(n,()=>c({transition:a,from:e,to:t})),o})}function eD(n){return new Promise(e=>{Yf({read:()=>setTimeout(e)},{injector:n})})}var f0=new Ne(""),Qh=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Gt;transitionAbortSubject=new Gt;configLoader=ee(Jh);environmentInjector=ee(ln);destroyRef=ee(Bo);urlSerializer=ee(aa);rootContexts=ee(la);location=ee(ks);inputBindingEnabled=ee(Nl,{optional:!0})!==null;titleStrategy=ee(c0);options=ee(da,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ee(Kh);createViewTransition=ee(u0,{optional:!0});navigationErrorHandler=ee(f0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ae(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Rh(r)),i=r=>this.events.next(new Nh(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(yt(he(he({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Vt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Yo,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(xn(s=>s.id!==0),Je(s=>yt(he({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Mn(s=>{let o=!1,a=!1;return Ae(s).pipe(Mn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",dn.SupersededByNewNavigation),Qt;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?yt(he({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Yi(c.id,this.urlSerializer.serialize(c.rawUrl),d,Sl.IgnoredSameUrlNavigation)),c.resolve(!1),Qt}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ae(c).pipe(Mn(d=>{let f=this.transitions?.getValue();return this.events.next(new js(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?Qt:Promise.resolve(d)}),GC(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Ht(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=yt(he({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new El(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:p,restoredState:g,extras:_}=c,m=new js(d,this.urlSerializer.serialize(f),p,g);this.events.next(m);let h=J_(this.rootComponentType).snapshot;return this.currentTransition=s=yt(he({},c),{targetSnapshot:h,urlAfterRedirects:f,extras:yt(he({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Ae(s)}else{let d="";return this.events.next(new Yi(c.id,this.urlSerializer.serialize(c.extractedUrl),d,Sl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Qt}}),Ht(c=>{let l=new Ch(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),Je(c=>(this.currentTransition=s=yt(he({},c),{guards:lC(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),xC(this.environmentInjector,c=>this.events.next(c)),Ht(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Al(this.urlSerializer,c.guardsResult);let l=new Dh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),xn(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",dn.GuardRejected),!1)),Mh(c=>{if(c.guards.canActivateChecks.length)return Ae(c).pipe(Ht(l=>{let u=new Ah(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Mn(l=>{let u=!1;return Ae(l).pipe(WC(this.paramsInheritanceStrategy,this.environmentInjector),Ht({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",dn.NoDataFromResolver)}}))}),Ht(l=>{let u=new Ih(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Mh(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Ht(f=>{u.component=f}),Je(()=>{})));for(let f of u.children)d.push(...l(f));return d};return Eo(l(c.targetSnapshot.root)).pipe(ki(null),ui(1))}),Mh(()=>this.afterPreactivation()),Mn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Ct(u).pipe(Je(()=>s)):Ae(s)}),Je(c=>{let l=rC(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=yt(he({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),Ht(()=>{this.events.next(new ea)}),cC(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),ui(1),Ht({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Mi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),Ud(this.transitionAbortSubject.pipe(Ht(c=>{throw c}))),bo(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",dn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Fi(c=>{if(this.destroyed)return s.resolve(!1),Qt;if(a=!0,n0(c))this.events.next(new _i(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),aC(c)?this.events.next(new $s(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new Qo(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=Cn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof na){let{message:d,cancellationCode:f}=Al(this.urlSerializer,u);this.events.next(new _i(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new $s(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return Qt}))}))}cancelNavigationTransition(t,i,r){let s=new _i(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function tD(n){return n!==Yo}var nD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(iD),providedIn:"root"})}return n})(),qh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},iD=(()=>{class n extends qh{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bf(n)))(r||n)}})();static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),h0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(rD),providedIn:"root"})}return n})(),rD=(()=>{class n extends h0{location=ee(ks);urlSerializer=ee(aa);options=ee(da,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=ee(Kh);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new xi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=J_(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof js)this.stateMemento=this.createStateMemento();else if(t instanceof Yi)this.rawUrlTree=i.initialUrl;else if(t instanceof El){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof ea?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof _i&&(t.code===dn.GuardRejected||t.code===dn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Qo?this.restoreHistory(i,!0):t instanceof Mi&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof xi?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=he(he({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=he(he({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Bf(n)))(r||n)}})();static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function p0(n,e){n.events.pipe(xn(t=>t instanceof Mi||t instanceof _i||t instanceof Qo||t instanceof Yi),Je(t=>t instanceof Mi||t instanceof Yi?0:(t instanceof _i?t.code===dn.Redirect||t.code===dn.SupersededByNewNavigation:!1)?2:1),xn(t=>t!==2),ui(1)).subscribe(()=>{e()})}var sD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},oD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Rr=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ee(rh);stateManager=ee(h0);options=ee(da,{optional:!0})||{};pendingTasks=ee(As);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ee(Qh);urlSerializer=ee(aa);location=ee(ks);urlHandlingStrategy=ee(Kh);_events=new Gt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ee(nD);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ee(sa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ee(Nl,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new At;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof _i&&i.code!==dn.Redirect&&i.code!==dn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Mi)this.navigated=!0;else if(i instanceof $s){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=he({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||tD(r.source)},o);this.scheduleNavigation(a,Yo,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}cD(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Yo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=he({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Zh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=he(he({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=q_(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return X_(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Jo(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Yo,null,i)}navigate(t,i={skipLocationChange:!1}){return aD(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=he({},sD):i===!1?r=he({},oD):r=i,Jo(t))return D_(this.currentUrlTree,t,r);let s=this.parseUrl(t);return D_(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return p0(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function aD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ce(4008,!1)}function cD(n){return!(n instanceof ea)&&!(n instanceof $s)}var Rl=class{};var lD=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(xn(t=>t instanceof Mi),xr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=rl(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Ct(r).pipe(us())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Ae(null);let s=r.pipe(It(o=>o===null?Ae(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Ct([s,o]).pipe(us())}else return s})}static \u0275fac=function(i){return new(i||n)(Oe(Rr),Oe(ll),Oe(ln),Oe(Rl),Oe(Jh))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),m0=new Ne(""),uD=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof js?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Mi?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Yi&&t.code===Sl.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof bl&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new bl(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){wy()};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function g0(n,...e){return If([{provide:sa,multi:!0,useValue:n},[],{provide:Ir,useFactory:v0,deps:[Rr]},{provide:ol,multi:!0,useFactory:y0},e.map(t=>t.\u0275providers)])}function v0(n){return n.routerState.root}function fa(n,e){return{\u0275kind:n,\u0275providers:e}}function y0(){let n=ee(Tn);return e=>{let t=n.get($i);if(e!==t.components[0])return;let i=n.get(Rr),r=n.get(_0);n.get(ep)===1&&i.initialNavigation(),n.get(x0,null,ze.Optional)?.setUpPreloading(),n.get(m0,null,ze.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var _0=new Ne("",{factory:()=>new Gt}),ep=new Ne("",{providedIn:"root",factory:()=>1});function dD(){return fa(2,[{provide:ep,useValue:0},{provide:sl,multi:!0,deps:[Tn],useFactory:e=>{let t=e.get(d_,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Rr),s=e.get(_0);p0(r,()=>{i(!0)}),e.get(Qh).afterPreactivation=()=>(i(!0),s.closed?Ae(void 0):s),r.initialNavigation()}))}}])}function fD(){return fa(3,[{provide:sl,multi:!0,useFactory:()=>{let e=ee(Rr);return()=>{e.setUpLocationChangeListener()}}},{provide:ep,useValue:2}])}var x0=new Ne("");function hD(n){return fa(0,[{provide:x0,useExisting:lD},{provide:Rl,useExisting:n}])}function pD(){return fa(8,[N_,{provide:Nl,useExisting:N_}])}function mD(n){let e=[{provide:u0,useValue:QC},{provide:d0,useValue:he({skipNextTransition:!!n?.skipInitialTransition},n)}];return fa(9,e)}var gD=[ks,{provide:aa,useClass:Ws},Rr,la,{provide:Ir,useFactory:v0,deps:[Rr]},Jh,[]],tp=(()=>{class n{constructor(){}static forRoot(t,i){return{ngModule:n,providers:[gD,[],{provide:sa,multi:!0,useValue:t},[],i?.errorHandler?{provide:f0,useValue:i.errorHandler}:[],{provide:da,useValue:i||{}},i?.useHash?yD():_D(),vD(),i?.preloadingStrategy?hD(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?xD(i):[],i?.bindToComponentInputs?pD().\u0275providers:[],i?.enableViewTransitions?mD().\u0275providers:[],MD()]}}static forChild(t){return{ngModule:n,providers:[{provide:sa,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ps({type:n});static \u0275inj=Ts({})}return n})();function vD(){return{provide:m0,useFactory:()=>{let n=ee(g_),e=ee(Rt),t=ee(da),i=ee(Qh),r=ee(aa);return t.scrollOffset&&n.setOffset(t.scrollOffset),new uD(r,i,n,e,t)}}}function yD(){return{provide:Cr,useClass:h_}}function _D(){return{provide:Cr,useClass:lh}}function xD(n){return[n.initialNavigation==="disabled"?fD().\u0275providers:[],n.initialNavigation==="enabledBlocking"?dD().\u0275providers:[]]}var F_=new Ne("");function MD(){return[{provide:F_,useFactory:y0},{provide:ol,multi:!0,useExisting:F_}]}var Ll=class n{title="client-intelligent-agent";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ns({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&vi(0,"router-outlet")},dependencies:[Yh],encapsulation:2})};var Eu="173";var V0=0,Lp=1,H0=2;var Op=1,z0=2,ii=3,Di=0,Jt=1,ri=2,Ni=0,Br=1,Fp=2,kp=3,Up=4,G0=5,sr=100,W0=101,j0=102,$0=103,q0=104,X0=200,Y0=201,Z0=202,J0=203,eu=204,tu=205,K0=206,Q0=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ox=214,bu=0,wu=1,Tu=2,Vr=3,Cu=4,Du=5,Au=6,Iu=7,Bp=0,ax=1,cx=2,Pi=0,lx=1,ux=2,dx=3,fx=4,hx=5,px=6,mx=7;var wp=300,Wr=301,jr=302,Ru=303,Nu=304,Ba=306,nu=1e3,rr=1001,iu=1002,In=1003,gx=1004;var Va=1005;var jn=1006,Pu=1007;var fr=1008;var si=1009,Vp=1010,Hp=1011,ho=1012,Lu=1013,hr=1014,oi=1015,po=1016,Ou=1017,Fu=1018,$r=1020,zp=35902,Gp=1021,Wp=1022,Nn=1023,jp=1024,$p=1025,Ur=1026,Hr=1027,qp=1028,ku=1029,Xp=1030,Uu=1031;var Bu=1033,Ha=33776,za=33777,Ga=33778,Wa=33779,Vu=35840,Hu=35841,zu=35842,Gu=35843,Wu=36196,ju=37492,$u=37496,qu=37808,Xu=37809,Yu=37810,Zu=37811,Ju=37812,Ku=37813,Qu=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,sd=37820,od=37821,ja=36492,ad=36494,cd=36495,Yp=36283,ld=36284,ud=36285,dd=36286;var ya=2300,ru=2301,Ql=2302,Tp=2400,Cp=2401,Dp=2402;var vx=3200,yx=3201;var Zp=0,_x=1,Li="",pn="srgb",zr="srgb-linear",_a="linear",dt="srgb";var Fr=7680;var Ap=519,xx=512,Mx=513,Sx=514,Jp=515,Ex=516,bx=517,wx=518,Tx=519,Ip=35044;var Kp="300 es",ei=2e3,xa=2001;var Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var np=Math.PI/180,su=180/Math.PI;function $a(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function ED(n,e){return(n%e+e)%e}function ip(n,e,t){return(1-t)*n+t*e}function ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],w=r[1],E=r[4],M=r[7],A=r[2],D=r[5],T=r[8];return s[0]=o*_+a*w+c*A,s[3]=o*m+a*E+c*D,s[6]=o*h+a*M+c*T,s[1]=l*_+u*w+d*A,s[4]=l*m+u*E+d*D,s[7]=l*h+u*M+d*T,s[2]=f*_+p*w+g*A,s[5]=f*m+p*E+g*D,s[8]=f*h+p*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rp.makeScale(e,t)),this}rotate(e){return this.premultiply(rp.makeRotation(-e)),this}translate(e,t){return this.premultiply(rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rp=new Fe;function Qp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cx(){let n=Ma("canvas");return n.style.display="block",n}var M0={};function qr(n){n in M0||(M0[n]=!0,console.warn(n))}function Dx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ax(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ix(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var S0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bD(){let n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=ao(r.r),r.g=ao(r.g),r.b=ao(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Li?_a:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:S0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:S0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var nt=bD();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ys,ou=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=Ma("canvas")),Ys.width=e.width,Ys.height=e.height;let i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ys}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wD=0,Sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wD++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sp(r[o].image)):s.push(sp(r[o]))}else s=sp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function sp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var TD=0,pr=(()=>{class n extends Ai{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=rr,s=rr,o=jn,a=fr,c=Nn,l=si,u=n.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TD++}),this.uuid=$a(),this.name="",this.source=new Sa(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nu:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nu:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=wp,n.DEFAULT_ANISOTROPY=1,n})(),Mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(p+1)/2,A=(h+1)/2,D=(u+f)/4,T=(d+_)/4,N=(g+m)/4;return E>M&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=D/i,s=T/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=D/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new pr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends au{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ea=class extends pr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cu=class extends pr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*_,w=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let A=Math.sqrt(E),D=Math.atan2(A,h*w);m=Math.sin(m*D)/A,a=Math.sin(a*D)/A}let M=a*w;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,d=d*m+_*M,m===1-a){let A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return op.copy(this).projectOnVector(e),this.sub(op)}reflect(e){return this.sub(op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},op=new F,b0=new Ii,or=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Fl.subVectors(this.max,pa),Zs.subVectors(e.a,pa),Js.subVectors(e.b,pa),Ks.subVectors(e.c,pa),Ji.subVectors(Js,Zs),Ki.subVectors(Ks,Js),Nr.subVectors(Zs,Ks);let t=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-Nr.z,Nr.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,Nr.z,0,-Nr.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-Nr.y,Nr.x,0];return!ap(t,Zs,Js,Ks,Fl)||(t=[1,0,0,0,1,0,0,0,1],!ap(t,Zs,Js,Ks,Fl))?!1:(kl.crossVectors(Ji,Ki),t=[kl.x,kl.y,kl.z],ap(t,Zs,Js,Ks,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,Ol=new or,Zs=new F,Js=new F,Ks=new F,Ji=new F,Ki=new F,Nr=new F,pa=new F,Fl=new F,kl=new F,Pr=new F;function ap(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pr.fromArray(n,s);let a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),c=e.dot(Pr),l=t.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var CD=new or,ma=new F,cp=new F,co=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):CD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(cp)),this.expandByPoint(ma.copy(e.center).sub(cp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new F,lp=new F,Ul=new F,Qi=new F,up=new F,Bl=new F,dp=new F,lu=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lp.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(lp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=Qi.dot(this.direction),c=-Qi.dot(Ul),l=Qi.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lp).addScaledVector(Ul,f),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){up.subVectors(t,e),Bl.subVectors(i,e),dp.crossVectors(up,Bl);let o=this.direction.dot(dp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);let c=a*this.direction.dot(Bl.crossVectors(Qi,Bl));if(c<0)return null;let l=a*this.direction.dot(up.cross(Qi));if(l<0||c+l>o)return null;let u=-a*Qi.dot(dp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DD,e,AD)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),er.crossVectors(i,fn),er.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),er.crossVectors(i,fn)),er.normalize(),Vl.crossVectors(fn,er),r[0]=er.x,r[4]=Vl.x,r[8]=fn.x,r[1]=er.y,r[5]=Vl.y,r[9]=fn.y,r[2]=er.z,r[6]=Vl.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],w=i[3],E=i[7],M=i[11],A=i[15],D=r[0],T=r[4],N=r[8],S=r[12],x=r[1],I=r[5],z=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],J=r[14],H=r[3],se=r[7],de=r[11],xe=r[15];return s[0]=o*D+a*x+c*X+l*H,s[4]=o*T+a*I+c*Y+l*se,s[8]=o*N+a*z+c*j+l*de,s[12]=o*S+a*B+c*J+l*xe,s[1]=u*D+d*x+f*X+p*H,s[5]=u*T+d*I+f*Y+p*se,s[9]=u*N+d*z+f*j+p*de,s[13]=u*S+d*B+f*J+p*xe,s[2]=g*D+_*x+m*X+h*H,s[6]=g*T+_*I+m*Y+h*se,s[10]=g*N+_*z+m*j+h*de,s[14]=g*S+_*B+m*J+h*xe,s[3]=w*D+E*x+M*X+A*H,s[7]=w*T+E*I+M*Y+A*se,s[11]=w*N+E*z+M*j+A*de,s[15]=w*S+E*B+M*J+A*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],w=d*m*l-_*f*l+_*c*p-a*m*p-d*c*h+a*f*h,E=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,M=u*_*l-g*d*l+g*a*p-o*_*p-u*a*h+o*d*h,A=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,D=t*w+i*E+r*M+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/D;return e[0]=w*T,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*h+i*c*h)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*T,e[4]=E*T,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*T,e[8]=M*T,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*T,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*T,e[12]=A*T,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,w=c*l,E=c*u,M=c*d,A=i.x,D=i.y,T=i.z;return r[0]=(1-(_+h))*A,r[1]=(p+M)*A,r[2]=(g-E)*A,r[3]=0,r[4]=(p-M)*D,r[5]=(1-(f+h))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(g+E)*T,r[9]=(m-w)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Qs.set(r[0],r[1],r[2]).length(),o=Qs.set(r[4],r[5],r[6]).length(),a=Qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let l=1/s,u=1/o,d=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ei){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(a===ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xa)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ei){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,g,_;if(a===ei)g=(o+s)*d,_=-2*d;else if(a===xa)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qs=new F,Gn=new wt,DD=new F(0,0,0),AD=new F(1,1,1),er=new F,Vl=new F,fn=new F,w0=new wt,T0=new Ii,ar=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return w0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T0.setFromEuler(this),this.setFromQuaternion(T0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ID=0,C0=new F,eo=new Ii,bi=new wt,Hl=new F,ga=new F,RD=new F,ND=new Ii,D0=new F(1,0,0),A0=new F(0,1,0),I0=new F(0,0,1),R0={type:"added"},PD={type:"removed"},to={type:"childadded",child:null},fp={type:"childremoved",child:null},ni=(()=>{class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ID++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new ar,r=new Ii,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Fe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(D0,t)}rotateY(t){return this.rotateOnAxis(A0,t)}rotateZ(t){return this.rotateOnAxis(I0,t)}translateOnAxis(t,i){return C0.copy(t).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D0,t)}translateY(t){return this.translateOnAxis(A0,t)}translateZ(t){return this.translateOnAxis(I0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Hl.copy(t):Hl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ga,Hl,this.up):bi.lookAt(Hl,ga,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(bi),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R0),to.child=t,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(PD),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R0),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,RD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,ND,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Wn=new F,wi=new F,hp=new F,Ti=new F,no=new F,io=new F,N0=new F,pp=new F,mp=new F,gp=new F,vp=new Mt,yp=new Mt,_p=new Mt,ir=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),wi.subVectors(i,t),hp.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(wi),c=Wn.dot(hp),l=wi.dot(wi),u=wi.dot(hp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return vp.setScalar(0),yp.setScalar(0),_p.setScalar(0),vp.fromBufferAttribute(e,t),yp.fromBufferAttribute(e,i),_p.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vp,s.x),o.addScaledVector(yp,s.y),o.addScaledVector(_p,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),wi.subVectors(e,t),Wn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Wn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;no.subVectors(r,i),io.subVectors(s,i),pp.subVectors(e,i);let c=no.dot(pp),l=io.dot(pp);if(c<=0&&l<=0)return t.copy(i);mp.subVectors(e,r);let u=no.dot(mp),d=io.dot(mp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(no,o);gp.subVectors(e,s);let p=no.dot(gp),g=io.dot(gp);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(io,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return N0.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(N0,a);let h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function xp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ED(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xp(o,s,e+1/3),this.g=xp(o,s,e),this.b=xp(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return nt.fromWorkingColorSpace(jt.copy(this),e),Math.round(We(jt.r*255,0,255))*65536+Math.round(We(jt.g*255,0,255))*256+Math.round(We(jt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(jt.copy(this),t);let i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=pn){nt.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,r=jt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(zl);let i=ip(tr.h,zl.h,t),r=ip(tr.s,zl.s,t),s=ip(tr.l,zl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Qe;Qe.NAMES=Rx;var LD=0,cr=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LD++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Br,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eu&&(i.blendSrc=this.blendSrc),this.blendDst!==tu&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wa=class extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new F,Gl=new Ke,OD=0,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OD++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ip,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}};var Ta=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gn=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},FD=0,An=new wt,Mp=new ni,ro=new F,hn=new or,va=new or,Ut=new F,Ri=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FD++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?Ca:Ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Mp.lookAt(e),Mp.updateMatrix(),this.applyMatrix4(Mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(hn.min,va.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,va.max),hn.expandByPoint(Ut)):(hn.expandByPoint(va.min),hn.expandByPoint(va.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ut.fromBufferAttribute(a,l),c&&(ro.fromBufferAttribute(e,l),Ut.add(ro)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new F,c[N]=new F;let l=new F,u=new F,d=new F,f=new Ke,p=new Ke,g=new Ke,_=new F,m=new F;function h(N,S,x){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(_),a[S].add(_),a[x].add(_),c[N].add(m),c[S].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,S=w.length;N<S;++N){let x=w[N],I=x.start,z=x.count;for(let B=I,X=I+z;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let E=new F,M=new F,A=new F,D=new F;function T(N){A.fromBufferAttribute(r,N),D.copy(A);let S=a[N];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(D,S);let I=M.dot(c[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,I)}for(let N=0,S=w.length;N<S;++N){let x=w[N],I=x.start,z=x.count;for(let B=I,X=I+z;B<X;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new mn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},P0=new wt,Lr=new lu,Wl=new co,L0=new F,jl=new F,$l=new F,ql=new F,Sp=new F,Xl=new F,O0=new F,Yl=new F,Zt=class extends ni{constructor(e=new Ri,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Sp.fromBufferAttribute(d,e),o?Xl.addScaledVector(Sp,u):Xl.addScaledVector(Sp.sub(t),u))}t.add(Xl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Wl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Wl,L0)===null||Lr.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(P0.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(P0),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,A=E;M<A;M+=3){let D=a.getX(M),T=a.getX(M+1),N=a.getX(M+2);r=Zl(this,h,e,i,l,u,d,D,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let w=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);r=Zl(this,o,e,i,l,u,d,w,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,A=E;M<A;M+=3){let D=M,T=M+1,N=M+2;r=Zl(this,h,e,i,l,u,d,D,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let w=m,E=m+1,M=m+2;r=Zl(this,o,e,i,l,u,d,w,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function kD(n,e,t,i,r,s,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Di,a),c===null)return null;Yl.copy(a),Yl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Yl);return l<t.near||l>t.far?null:{distance:l,point:Yl.clone(),object:n}}function Zl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,jl),n.getVertexPosition(c,$l),n.getVertexPosition(l,ql);let u=kD(n,e,t,i,jl,$l,ql,O0);if(u){let d=new F;ir.getBarycoord(O0,jl,$l,ql,d),r&&(u.uv=ir.getInterpolatedAttribute(r,a,c,l,d,new Ke)),s&&(u.uv1=ir.getInterpolatedAttribute(s,a,c,l,d,new Ke)),o&&(u.normal=ir.getInterpolatedAttribute(o,a,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new F,materialIndex:0};ir.getNormal(jl,$l,ql,f.normal),u.face=f,u.barycoord=d}return u}var lr=class n extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2));function g(_,m,h,w,E,M,A,D,T,N,S){let x=M/T,I=A/N,z=M/2,B=A/2,X=D/2,Y=T+1,j=N+1,J=0,H=0,se=new F;for(let de=0;de<j;de++){let xe=de*I-B;for(let Ge=0;Ge<Y;Ge++){let pt=Ge*x-z;se[_]=pt*w,se[m]=xe*E,se[h]=X,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[h]=D>0?1:-1,u.push(se.x,se.y,se.z),d.push(Ge/T),d.push(1-de/N),J+=1}}for(let de=0;de<N;de++)for(let xe=0;xe<T;xe++){let Ge=f+xe+Y*de,pt=f+xe+Y*(de+1),W=f+(xe+1)+Y*(de+1),te=f+(xe+1)+Y*de;c.push(Ge,pt,te),c.push(pt,W,te),H+=6}a.addGroup(p,H,S),p+=H,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=Xr(n[t]);for(let r in i)e[r]=i[r]}return e}function UD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function em(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Nx={clone:Xr,merge:qt},BD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BD,this.fragmentShader=VD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=UD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Da=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nr=new F,F0=new Ke,k0=new Ke,$t=class extends Da{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=su*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(np*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return su*2*Math.atan(Math.tan(np*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,F0,k0),t.subVectors(k0,F0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(np*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},so=-90,oo=1,uu=class extends ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(so,oo,e,t);r.layers=this.layers,this.add(r);let s=new $t(so,oo,e,t);s.layers=this.layers,this.add(s);let o=new $t(so,oo,e,t);o.layers=this.layers,this.add(o);let a=new $t(so,oo,e,t);a.layers=this.layers,this.add(a);let c=new $t(so,oo,e,t);c.layers=this.layers,this.add(c);let l=new $t(so,oo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Aa=class extends pr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},du=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Aa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lr(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ni});s.uniforms.tEquirect.value=t;let o=new Zt(r,s),a=t.minFilter;return t.minFilter===fr&&(t.minFilter=jn),new uu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},kr=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},HD={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HD)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ia=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ep=new F,zD=new F,GD=new Fe,Qn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ep.subVectors(i,t).cross(zD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ep),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||GD.getNormalMatrix(e),r=this.coplanarPoint(Ep).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new co,Jl=new F,uo=class{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],w=r[13],E=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-p,M-h).normalize(),i[1].setComponents(c+s,f+l,m+p,M+h).normalize(),i[2].setComponents(c+o,f+u,m+g,M+w).normalize(),i[3].setComponents(c-o,f-u,m-g,M-w).normalize(),i[4].setComponents(c-a,f-d,m-_,M-E).normalize(),t===ei)i[5].setComponents(c+a,f+d,m+_,M+E).normalize();else if(t===xa)i[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Jl.x=r.normal.x>0?e.max.x:e.min.x,Jl.y=r.normal.y>0?e.max.y:e.min.y,Jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ra=class extends pr{constructor(e,t,i,r,s,o,a,c,l,u=Ur){if(u!==Ur&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ur&&(i=hr),i===void 0&&u===Hr&&(i=$r),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var fu=class n extends Ri{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new gn(s,3)),this.setAttribute("normal",new gn(s.slice(),3)),this.setAttribute("uv",new gn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let E=new F,M=new F,A=new F;for(let D=0;D<t.length;D+=3)p(t[D+0],E),p(t[D+1],M),p(t[D+2],A),c(E,M,A,w)}function c(w,E,M,A){let D=A+1,T=[];for(let N=0;N<=D;N++){T[N]=[];let S=w.clone().lerp(M,N/D),x=E.clone().lerp(M,N/D),I=D-N;for(let z=0;z<=I;z++)z===0&&N===D?T[N][z]=S:T[N][z]=S.clone().lerp(x,z/I)}for(let N=0;N<D;N++)for(let S=0;S<2*(D-N)-1;S++){let x=Math.floor(S/2);S%2===0?(f(T[N][x+1]),f(T[N+1][x]),f(T[N][x])):(f(T[N][x+1]),f(T[N+1][x+1]),f(T[N+1][x]))}}function l(w){let E=new F;for(let M=0;M<s.length;M+=3)E.x=s[M+0],E.y=s[M+1],E.z=s[M+2],E.normalize().multiplyScalar(w),s[M+0]=E.x,s[M+1]=E.y,s[M+2]=E.z}function u(){let w=new F;for(let E=0;E<s.length;E+=3){w.x=s[E+0],w.y=s[E+1],w.z=s[E+2];let M=m(w)/2/Math.PI+.5,A=h(w)/Math.PI+.5;o.push(M,1-A)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){let E=o[w+0],M=o[w+2],A=o[w+4],D=Math.max(E,M,A),T=Math.min(E,M,A);D>.9&&T<.1&&(E<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),A<.2&&(o[w+4]+=1))}}function f(w){s.push(w.x,w.y,w.z)}function p(w,E){let M=w*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function g(){let w=new F,E=new F,M=new F,A=new F,D=new Ke,T=new Ke,N=new Ke;for(let S=0,x=0;S<s.length;S+=9,x+=6){w.set(s[S+0],s[S+1],s[S+2]),E.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),D.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),N.set(o[x+4],o[x+5]),A.copy(w).add(E).add(M).divideScalar(3);let I=m(A);_(D,x+0,w,I),_(T,x+2,E,I),_(N,x+4,M,I)}}function _(w,E,M,A){A<0&&w.x===1&&(o[E]=w.x-1),M.x===0&&M.z===0&&(o[E]=A/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function h(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Na=class n extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){let w=h*f-o;for(let E=0;E<l;E++){let M=E*d-s;g.push(M,-w,0),_.push(0,0,1),m.push(E/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){let E=w+l*h,M=w+l*(h+1),A=w+1+l*(h+1),D=w+1+l*h;p.push(E,M,D),p.push(M,A,D)}this.setIndex(p),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Pa=class n extends fu{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var fo=class extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zp,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var hu=class extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pu=class extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function WD(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tp,endingEnd:Tp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cp:s=e,a=2*t-i;break;case Dp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cp:o=e,c=2*i-t;break;case Dp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let A=0;A!==a;++A)s[A]=h*o[u+A]+w*o[l+A]+E*o[c+A]+M*o[d+A];return s}},gu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},vu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ru:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ru;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&WD(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ql,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ru;var ur=class extends Rn{constructor(e,t,i){super(e,t,i)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ya;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Rn{};yu.prototype.ValueTypeName="color";var _u=class extends Rn{};_u.prototype.ValueTypeName="number";var xu=class extends Gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ii.slerpFlat(s,0,o,l-a,o,l,c);return s}},La=class extends Rn{InterpolantFactoryMethodLinear(e){return new xu(this.times,this.values,this.getValueSize(),e)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Rn{constructor(e,t,i){super(e,t,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=ya;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Rn{};Mu.prototype.ValueTypeName="vector";var Oa=class extends ni{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var bp=new wt,U0=new F,B0=new F,Rp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;U0.setFromMatrixPosition(e.matrixWorld),t.position.copy(U0),B0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B0),t.updateMatrixWorld(),bp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fa=class extends Da{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Np=class extends Rp{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.target=new ni,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ua=class extends Oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Su=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var tm="\\[\\]\\.:\\/",jD=new RegExp("["+tm+"]","g"),nm="[^"+tm+"]",$D="[^"+tm.replace("\\.","")+"]",qD=/((?:WC+[\/:])*)/.source.replace("WC",nm),XD=/(WCOD+)?/.source.replace("WCOD",$D),YD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nm),ZD=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nm),JD=new RegExp("^"+qD+XD+YD+ZD+"$"),KD=["material","materials","bones","map"],Pp=class{constructor(e,t,i){let r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jD,"")}static parseTrackName(t){let i=JD.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);KD.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Pp,n})();bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YU=new Float32Array(1);function im(n,e,t,i){let r=QD(i);switch(t){case Gp:return n*e;case jp:return n*e;case $p:return n*e*2;case qp:return n*e/r.components*r.byteLength;case ku:return n*e/r.components*r.byteLength;case Xp:return n*e*2/r.components*r.byteLength;case Uu:return n*e*2/r.components*r.byteLength;case Wp:return n*e*3/r.components*r.byteLength;case Nn:return n*e*4/r.components*r.byteLength;case Bu:return n*e*4/r.components*r.byteLength;case Ha:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hu:case Gu:return Math.max(n,16)*Math.max(e,8)/4;case Vu:case zu:return Math.max(n,8)*Math.max(e,8)/2;case Wu:case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ja:case ad:case cd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yp:case ld:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ud:case dd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QD(n){switch(n){case si:case Vp:return{byteLength:1,components:1};case ho:case Hp:case po:return{byteLength:2,components:1};case Ou:case Fu:return{byteLength:2,components:4};case hr:case Lu:case oi:return{byteLength:4,components:1};case zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function nM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eA(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var tA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RA="gl_FragColor = linearToOutputTexel( gl_FragColor );",NA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_I=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,II=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$I=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_R=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:tA,alphahash_pars_fragment:nA,alphamap_fragment:iA,alphamap_pars_fragment:rA,alphatest_fragment:sA,alphatest_pars_fragment:oA,aomap_fragment:aA,aomap_pars_fragment:cA,batching_pars_vertex:lA,batching_vertex:uA,begin_vertex:dA,beginnormal_vertex:fA,bsdfs:hA,iridescence_fragment:pA,bumpmap_pars_fragment:mA,clipping_planes_fragment:gA,clipping_planes_pars_fragment:vA,clipping_planes_pars_vertex:yA,clipping_planes_vertex:_A,color_fragment:xA,color_pars_fragment:MA,color_pars_vertex:SA,color_vertex:EA,common:bA,cube_uv_reflection_fragment:wA,defaultnormal_vertex:TA,displacementmap_pars_vertex:CA,displacementmap_vertex:DA,emissivemap_fragment:AA,emissivemap_pars_fragment:IA,colorspace_fragment:RA,colorspace_pars_fragment:NA,envmap_fragment:PA,envmap_common_pars_fragment:LA,envmap_pars_fragment:OA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:qA,envmap_vertex:kA,fog_vertex:UA,fog_pars_vertex:BA,fog_fragment:VA,fog_pars_fragment:HA,gradientmap_pars_fragment:zA,lightmap_pars_fragment:GA,lights_lambert_fragment:WA,lights_lambert_pars_fragment:jA,lights_pars_begin:$A,lights_toon_fragment:XA,lights_toon_pars_fragment:YA,lights_phong_fragment:ZA,lights_phong_pars_fragment:JA,lights_physical_fragment:KA,lights_physical_pars_fragment:QA,lights_fragment_begin:eI,lights_fragment_maps:tI,lights_fragment_end:nI,logdepthbuf_fragment:iI,logdepthbuf_pars_fragment:rI,logdepthbuf_pars_vertex:sI,logdepthbuf_vertex:oI,map_fragment:aI,map_pars_fragment:cI,map_particle_fragment:lI,map_particle_pars_fragment:uI,metalnessmap_fragment:dI,metalnessmap_pars_fragment:fI,morphinstance_vertex:hI,morphcolor_vertex:pI,morphnormal_vertex:mI,morphtarget_pars_vertex:gI,morphtarget_vertex:vI,normal_fragment_begin:yI,normal_fragment_maps:_I,normal_pars_fragment:xI,normal_pars_vertex:MI,normal_vertex:SI,normalmap_pars_fragment:EI,clearcoat_normal_fragment_begin:bI,clearcoat_normal_fragment_maps:wI,clearcoat_pars_fragment:TI,iridescence_pars_fragment:CI,opaque_fragment:DI,packing:AI,premultiplied_alpha_fragment:II,project_vertex:RI,dithering_fragment:NI,dithering_pars_fragment:PI,roughnessmap_fragment:LI,roughnessmap_pars_fragment:OI,shadowmap_pars_fragment:FI,shadowmap_pars_vertex:kI,shadowmap_vertex:UI,shadowmask_pars_fragment:BI,skinbase_vertex:VI,skinning_pars_vertex:HI,skinning_vertex:zI,skinnormal_vertex:GI,specularmap_fragment:WI,specularmap_pars_fragment:jI,tonemapping_fragment:$I,tonemapping_pars_fragment:qI,transmission_fragment:XI,transmission_pars_fragment:YI,uv_pars_fragment:ZI,uv_pars_vertex:JI,uv_vertex:KI,worldpos_vertex:QI,background_vert:eR,background_frag:tR,backgroundCube_vert:nR,backgroundCube_frag:iR,cube_vert:rR,cube_frag:sR,depth_vert:oR,depth_frag:aR,distanceRGBA_vert:cR,distanceRGBA_frag:lR,equirect_vert:uR,equirect_frag:dR,linedashed_vert:fR,linedashed_frag:hR,meshbasic_vert:pR,meshbasic_frag:mR,meshlambert_vert:gR,meshlambert_frag:vR,meshmatcap_vert:yR,meshmatcap_frag:_R,meshnormal_vert:xR,meshnormal_frag:MR,meshphong_vert:SR,meshphong_frag:ER,meshphysical_vert:bR,meshphysical_frag:wR,meshtoon_vert:TR,meshtoon_frag:CR,points_vert:DR,points_frag:AR,shadow_vert:IR,shadow_frag:RR,sprite_vert:NR,sprite_frag:PR},ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ai={basic:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([ne.points,ne.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([ne.common,ne.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([ne.sprite,ne.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([ne.lights,ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ai.physical={uniforms:qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var fd={r:0,b:0,g:0},Yr=new ar,LR=new wt;function OR(n,e,t,i,r,s,o){let a=new Qe(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1,A=g(E);A===null?h(a,c):A&&A.isColor&&(h(A,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){let A=g(M);A&&(A.isCubeTexture||A.mapping===Ba)?(u===void 0&&(u=new Zt(new lr(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Xr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yr.copy(M.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LR.makeRotationFromEuler(Yr)),u.material.toneMapped=nt.getTransfer(A.colorSpace)!==dt,(d!==A||f!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Zt(new Na(2,2),new $n({name:"BackgroundMaterial",uniforms:Xr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,M){E.getRGB(fd,em(n)),i.buffers.color.setClear(fd.r,fd.g,fd.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(a,c)},render:_,addToRenderList:m,dispose:w}}function FR(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,I,z,B,X){let Y=!1,j=d(B,z,I);s!==j&&(s=j,l(s.object)),Y=p(x,B,z,X),Y&&g(x,B,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(x,I,z,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,I,z){let B=z.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let j=Y[B];return j===void 0&&(j=f(c()),Y[B]=j),j}function f(x){let I=[],z=[],B=[];for(let X=0;X<t;X++)I[X]=0,z[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,I,z,B){let X=s.attributes,Y=I.attributes,j=0,J=z.getAttributes();for(let H in J)if(J[H].location>=0){let de=X[H],xe=Y[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,I,z,B){let X={},Y=I.attributes,j=0,J=z.getAttributes();for(let H in J)if(J[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),X[H]=xe,j++}s.attributes=X,s.attributesNum=j,s.index=B}function _(){let x=s.newAttributes;for(let I=0,z=x.length;I<z;I++)x[I]=0}function m(x){h(x,0)}function h(x,I){let z=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;z[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==I&&(n.vertexAttribDivisor(x,I),X[x]=I)}function w(){let x=s.newAttributes,I=s.enabledAttributes;for(let z=0,B=I.length;z<B;z++)I[z]!==x[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function E(x,I,z,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,I,z,X,Y):n.vertexAttribPointer(x,I,z,B,X,Y)}function M(x,I,z,B){_();let X=B.attributes,Y=z.getAttributes(),j=I.defaultAttributeValues;for(let J in Y){let H=Y[J];if(H.location>=0){let se=X[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let de=se.normalized,xe=se.itemSize,Ge=e.get(se);if(Ge===void 0)continue;let pt=Ge.buffer,W=Ge.type,te=Ge.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||se.gpuType===Lu;if(se.isInterleavedBufferAttribute){let oe=se.data,Te=oe.stride,st=se.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<H.locationSize;De++)h(H.location+De,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<H.locationSize;De++)m(H.location+De);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let De=0;De<H.locationSize;De++)E(H.location+De,xe/H.locationSize,W,de,Te*te,(st+xe/H.locationSize*De)*te,ve)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)h(H.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let oe=0;oe<H.locationSize;oe++)E(H.location+oe,xe/H.locationSize,W,de,xe*te,xe/H.locationSize*oe*te,ve)}}else if(j!==void 0){let de=j[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}w()}function A(){N();for(let x in i){let I=i[x];for(let z in I){let B=I[z];for(let X in B)u(B[X].object),delete B[X];delete I[z]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let I=i[x.id];for(let z in I){let B=I[z];for(let X in B)u(B[X].object),delete B[X];delete I[z]}delete i[x.id]}function T(x){for(let I in i){let z=i[I];if(z[x.id]===void 0)continue;let B=z[x.id];for(let X in B)u(B[X].object),delete B[X];delete z[x.id]}}function N(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function kR(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function UR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Nn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let N=T===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==oi&&!N)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:A,maxSamples:D}}function BR(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Qn,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,E=w*4,M=h.clippingState||null;c.value=M,M=u(g,f,E,p);for(let A=0;A!==E;++A)M[A]=t[A];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let h=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,M=p;E!==_;++E,M+=4)o.copy(d[E]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function VR(n){let e=new WeakMap;function t(o,a){return a===Ru?o.mapping=Wr:a===Nu&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ru||a===Nu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new du(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var go=4,Px=[.125,.215,.35,.446,.526,.582],Kr=20,rm=new Fa,Lx=new Qe,sm=null,om=0,am=0,cm=!1,Jr=(1+Math.sqrt(5))/2,mo=1/Jr,Ox=[new F(-Jr,mo,0),new F(Jr,mo,0),new F(-mo,0,Jr),new F(mo,0,Jr),new F(0,Jr,-mo),new F(0,Jr,mo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],md=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sm=this._renderer.getRenderTarget(),om=this._renderer.getActiveCubeFace(),am=this._renderer.getActiveMipmapLevel(),cm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ux(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sm,om,am),this._renderer.xr.enabled=cm,e.scissorTest=!1,hd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sm=this._renderer.getRenderTarget(),om=this._renderer.getActiveCubeFace(),am=this._renderer.getActiveMipmapLevel(),cm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:po,format:Nn,colorSpace:zr,depthBuffer:!1},r=Fx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HR(s)),this._blurMaterial=zR(s,e,t)}return r}_compileMaterial(e){let t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,rm)}_sceneToCubeUV(e,t,i,r){let a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lx),u.toneMapping=Pi,u.autoClear=!1;let p=new wa({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Zt(new lr,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Lx),_=!0);for(let h=0;h<6;h++){let w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let E=this._cubeSize;hd(r,w*E,h>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ux()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;hd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,rm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ox[(r-s-1)%Ox.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Zt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Kr;m>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);let h=[],w=0;for(let T=0;T<Kr;++T){let N=T/_,S=Math.exp(-N*N/2);h.push(S),T===0?w+=S:T<m&&(w+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let M=this._sizeLods[r],A=3*M*(r>E-go?r-E+go:0),D=4*(this._cubeSize-M);hd(t,A,D,3*M,2*M),c.setRenderTarget(t),c.render(d,rm)}};function HR(n){let e=[],t=[],i=[],r=n,s=n-go+1+Px.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-go?c=Px[o-n+go-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),E=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let D=0;D<p;D++){let T=D%3*2/3-1,N=D>2?0:-1,S=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];w.set(S,_*g*D),E.set(f,m*g*D);let x=[D,D,D,D,D,D];M.set(x,h*g*D)}let A=new Ri;A.setAttribute("position",new mn(w,_)),A.setAttribute("uv",new mn(E,m)),A.setAttribute("faceIndex",new mn(M,h)),e.push(A),r>go&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fx(n,e,t){let i=new ti(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zR(n,e,t){let i=new Float32Array(Kr),r=new F(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function kx(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ux(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ym(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ru||c===Nu,u=c===Wr||c===jr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new md(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new md(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jR(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let E=0,M=w.length;E<M;E+=3){let A=w[E+0],D=w[E+1],T=w[E+2];f.push(A,D,D,T,T,A)}}else if(g!==void 0){let w=g.array;_=g.version;for(let E=0,M=w.length/3-1;E<M;E+=3){let A=E+0,D=E+1,T=E+2;f.push(A,D,D,T,T,A)}}else return;let m=new(Qp(f)?Ca:Ta)(f,1);m.version=_;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function $R(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*_[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function XR(n,e,t){let i=new WeakMap,r=new Mt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*D*4*d),N=new Ea(T,A,D,d);N.type=oi,N.needsUpdate=!0;let S=M*4;for(let I=0;I<d;I++){let z=h[I],B=w[I],X=E[I],Y=A*D*4*I;for(let j=0;j<z.count;j++){let J=j*S;g===!0&&(r.fromBufferAttribute(z,j),T[Y+J+0]=r.x,T[Y+J+1]=r.y,T[Y+J+2]=r.z,T[Y+J+3]=0),_===!0&&(r.fromBufferAttribute(B,j),T[Y+J+4]=r.x,T[Y+J+5]=r.y,T[Y+J+6]=r.z,T[Y+J+7]=0),m===!0&&(r.fromBufferAttribute(X,j),T[Y+J+8]=r.x,T[Y+J+9]=r.y,T[Y+J+10]=r.z,T[Y+J+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:N,size:new Ke(A,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function YR(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var iM=new pr,Bx=new Ra(1,1),rM=new Ea,sM=new cu,oM=new Aa,Vx=[],Hx=[],zx=new Float32Array(16),Gx=new Float32Array(9),Wx=new Float32Array(4);function yo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Vx[r];if(s===void 0&&(s=new Float32Array(r),Vx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vd(n,e){let t=Hx[e];t===void 0&&(t=new Int32Array(e),Hx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function KR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function QR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function e1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;Wx.set(i),n.uniformMatrix2fv(this.addr,!1,Wx),Ot(t,i)}}function t1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;Gx.set(i),n.uniformMatrix3fv(this.addr,!1,Gx),Ot(t,i)}}function n1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;zx.set(i),n.uniformMatrix4fv(this.addr,!1,zx),Ot(t,i)}}function i1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function d1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bx.compareFunction=Jp,s=Bx):s=iM,t.setTexture2D(e||s,r)}function f1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sM,r)}function h1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||oM,r)}function p1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rM,r)}function m1(n){switch(n){case 5126:return ZR;case 35664:return JR;case 35665:return KR;case 35666:return QR;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return c1;case 36295:return l1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(n,e){n.uniform1fv(this.addr,e)}function v1(n,e){let t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function y1(n,e){let t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function _1(n,e){let t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function x1(n,e){let t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M1(n,e){let t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S1(n,e){let t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E1(n,e){n.uniform1iv(this.addr,e)}function b1(n,e){n.uniform2iv(this.addr,e)}function w1(n,e){n.uniform3iv(this.addr,e)}function T1(n,e){n.uniform4iv(this.addr,e)}function C1(n,e){n.uniform1uiv(this.addr,e)}function D1(n,e){n.uniform2uiv(this.addr,e)}function A1(n,e){n.uniform3uiv(this.addr,e)}function I1(n,e){n.uniform4uiv(this.addr,e)}function R1(n,e,t){let i=this.cache,r=e.length,s=vd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||iM,s[o])}function N1(n,e,t){let i=this.cache,r=e.length,s=vd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sM,s[o])}function P1(n,e,t){let i=this.cache,r=e.length,s=vd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||oM,s[o])}function L1(n,e,t){let i=this.cache,r=e.length,s=vd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rM,s[o])}function O1(n){switch(n){case 5126:return g1;case 35664:return v1;case 35665:return y1;case 35666:return _1;case 35674:return x1;case 35675:return M1;case 35676:return S1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return w1;case 35669:case 35673:return T1;case 5125:return C1;case 36294:return D1;case 36295:return A1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}var um=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}},dm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O1(t.type)}},fm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},lm=/(\w+)(\])?(\[|\.)?/g;function jx(n,e){n.seq.push(e),n.map[e.id]=e}function F1(n,e,t){let i=n.name,r=i.length;for(lm.lastIndex=0;;){let s=lm.exec(i),o=lm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jx(t,l===void 0?new um(a,n,e):new dm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new fm(a),jx(t,d)),t=d}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);F1(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function $x(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var k1=37297,U1=0;function B1(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var qx=new Fe;function V1(n){nt._getMatrix(qx,nt.workingColorSpace,n);let e=`mat3( ${qx.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+B1(n.getShaderSource(e),o)}else return r}function H1(n,e){let t=V1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z1(n,e){let t;switch(e){case lx:t="Linear";break;case ux:t="Reinhard";break;case dx:t="Cineon";break;case fx:t="ACESFilmic";break;case px:t="AgX";break;case mx:t="Neutral";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pd=new F;function G1(){nt.getLuminanceCoefficients(pd);let n=pd.x.toFixed(4),e=pd.y.toFixed(4),t=pd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function j1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qa(n){return n!==""}function Yx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(n){return n.replace(q1,Y1)}var X1=new Map;function Y1(n,e){let t=He[e];if(t===void 0){let i=X1.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hm(t)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jx(n){return n.replace(Z1,J1)}function J1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function tN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case cx:e="ENVMAP_BLENDING_ADD";break}return e}function nN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=K1(t),l=Q1(t),u=eN(t),d=tN(t),f=nN(t),p=W1(t),g=j1(s),_=r.createProgram(),m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),h.length>0&&(h+=`
`)):(m=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),h=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?He.tonemapping_pars_fragment:"",t.toneMapping!==Pi?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,H1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),o=hm(o),o=Yx(o,t),o=Zx(o,t),a=hm(a),a=Yx(a,t),a=Zx(a,t),o=Jx(o),a=Jx(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=w+m+o,M=w+h+a,A=$x(r,r.VERTEX_SHADER,E),D=$x(r,r.FRAGMENT_SHADER,M);r.attachShader(_,A),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(I){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(D).trim(),Y=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,D);else{let J=Xx(r,A,"vertex"),H=Xx(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+J+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||X==="")&&(j=!1);j&&(I.diagnostics={runnable:Y,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(A),r.deleteShader(D),N=new vo(r,_),S=$1(r,_)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,k1)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=D,this}var rN=0,pm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mm(e),t.set(e,i)),i}},mm=class{constructor(e){this.id=rN++,this.code=e,this.usedTimes=0}};function sN(n,e,t,i,r,s,o){let a=new ba,c=new pm,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,I,z,B){let X=z.fog,Y=B.geometry,j=S.isMeshStandardMaterial?z.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),H=J&&J.mapping===Ba?J.image.height:null,se=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=de!==void 0?de.length:0,Ge=0;Y.morphAttributes.position!==void 0&&(Ge=1),Y.morphAttributes.normal!==void 0&&(Ge=2),Y.morphAttributes.color!==void 0&&(Ge=3);let pt,W,te,ve;if(se){let lt=ai[se];pt=lt.vertexShader,W=lt.fragmentShader}else pt=S.vertexShader,W=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),ve=c.getFragmentShaderID(S);let oe=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),st=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,Tt=!!S.map,xt=!!S.matcap,je=!!J,C=!!S.aoMap,vn=!!S.lightMap,$e=!!S.bumpMap,qe=!!S.normalMap,Me=!!S.displacementMap,vt=!!S.emissiveMap,_e=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,G=S.sheen>0,ye=S.transmission>0,ae=v&&!!S.anisotropyMap,fe=O&&!!S.clearcoatMap,et=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,pe=Z&&!!S.iridescenceMap,be=Z&&!!S.iridescenceThicknessMap,Ie=G&&!!S.sheenColorMap,me=G&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,Be=!!S.specularColorMap,gt=!!S.specularIntensityMap,R=ye&&!!S.transmissionMap,ie=ye&&!!S.thicknessMap,V=!!S.gradientMap,q=!!S.alphaMap,le=S.alphaTest>0,ce=!!S.alphaHash,ke=!!S.extensions,St=Pi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(St=n.toneMapping);let zt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:st,instancingColor:st&&B.instanceColor!==null,instancingMorph:st&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zr,alphaToCoverage:!!S.alphaToCoverage,map:Tt,matcap:xt,envMap:je,envMapMode:je&&J.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:vn,bumpMap:$e,normalMap:qe,displacementMap:f&&Me,emissiveMap:vt,normalMapObjectSpace:qe&&S.normalMapType===_x,normalMapTangentSpace:qe&&S.normalMapType===Zp,metalnessMap:_e,roughnessMap:b,anisotropy:v,anisotropyMap:ae,clearcoat:O,clearcoatMap:fe,clearcoatNormalMap:et,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:pe,iridescenceThicknessMap:be,sheen:G,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Xe,specularColorMap:Be,specularIntensityMap:gt,transmission:ye,transmissionMap:R,thicknessMap:ie,gradientMap:V,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:S.combine,mapUv:Tt&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:vn&&_(S.lightMap.channel),bumpMapUv:$e&&_(S.bumpMap.channel),normalMapUv:qe&&_(S.normalMap.channel),displacementMapUv:Me&&_(S.displacementMap.channel),emissiveMapUv:vt&&_(S.emissiveMap.channel),metalnessMapUv:_e&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:ae&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(S.sheenRoughnessMap.channel),specularMapUv:Xe&&_(S.specularMap.channel),specularColorMapUv:Be&&_(S.specularColorMap.channel),specularIntensityMapUv:gt&&_(S.specularIntensityMap.channel),transmissionMapUv:R&&_(S.transmissionMap.channel),thicknessMapUv:ie&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qe||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Tt||q),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:Tt&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function h(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)x.push(I),x.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(w(x,S),E(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let x=g[S.type],I;if(x){let z=ai[x];I=Nx.clone(z.uniforms)}else I=S.uniforms;return I}function A(S,x){let I;for(let z=0,B=u.length;z<B;z++){let X=u[z];if(X.cacheKey===x){I=X,++I.usedTimes;break}}return I===void 0&&(I=new iN(n,x,S,s),u.push(I)),I}function D(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:A,releaseProgram:D,releaseShaderCache:T,programs:u,dispose:N}}function oN(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function aN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||aN),i.length>1&&i.sort(f||Qx),r.length>1&&r.sort(f||Qx)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function cN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new eM,n.set(i,[o])):r>=s.length?(o=new eM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Qe};break;case"SpotLight":t={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function uN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dN=0;function fN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hN(n){let e=new lN,t=uN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let r=new F,s=new wt,o=new wt;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,E=0,M=0,A=0,D=0,T=0;l.sort(fN);for(let S=0,x=l.length;S<x;S++){let I=l[S],z=I.color,B=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*B,d+=z.g*B,f+=z.b*B;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],B);T++}else if(I.isDirectionalLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,w++}i.directional[p]=j,p++}else if(I.isSpotLight){let j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(z).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[_]=j;let J=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,J.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=J.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Y,M++}_++}else if(I.isRectAreaLight){let j=e.get(I);j.color.copy(z).multiplyScalar(B),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=j,m++}else if(I.isPointLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let J=I.shadow,H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=j,g++}else if(I.isHemisphereLight){let j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(B),j.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==M||N.numSpotMaps!==A||N.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=T,N.directionalLength=p,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=M,N.numSpotMaps=A,N.numLightProbes=T,i.version=dN++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){let E=l[h];if(E.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function tM(n){let e=new hN(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function pN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new tM(n),e.set(r,[a])):s>=o.length?(a=new tM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var mN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vN(n,e,t){let i=new uo,r=new Ke,s=new Ke,o=new Mt,a=new hu({depthPacking:yx}),c=new pu,l={},u=t.maxTextureSize,d={[Di]:Jt,[Jt]:Di,[ri]:ri},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:mN,fragmentShader:gN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ri;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let h=this.type;this.render=function(D,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let S=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=h!==ii&&this.type===ii,X=h===ii&&this.type!==ii;for(let Y=0,j=D.length;Y<j;Y++){let J=D[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let xe=this.type!==ii?{minFilter:In,magFilter:In}:{};H.map!==null&&H.map.dispose(),H.map=new ti(r.x,r.y,xe),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let xe=0;xe<de;xe++){let Ge=H.getViewport(xe);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),z.viewport(o),H.updateMatrices(J,xe),i=H.getFrustum(),M(T,N,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===ii&&w(H,N),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,I)};function w(D,T){let N=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(T,null,N,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(T,null,N,p,_,null)}function E(D,T,N,S){let x=null,I=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)x=I;else if(x=N.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=x.uuid,B=T.uuid,X=l[z];X===void 0&&(X={},l[z]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,T.addEventListener("dispose",A)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,S===ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=n.properties.get(x);z.light=N}return x}function M(D,T,N,S,x){if(D.visible===!1)return;if(D.layers.test(T.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===ii)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);let B=e.update(D),X=D.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,J=Y.length;j<J;j++){let H=Y[j],se=X[H.materialIndex];if(se&&se.visible){let de=E(D,se,S,x);D.onBeforeShadow(n,D,T,N,B,de,H),n.renderBufferDirect(N,null,B,de,D,H),D.onAfterShadow(n,D,T,N,B,de,H)}}}else if(X.visible){let Y=E(D,X,S,x);D.onBeforeShadow(n,D,T,N,B,Y,null),n.renderBufferDirect(N,null,B,Y,D,null),D.onAfterShadow(n,D,T,N,B,Y,null)}}let z=D.children;for(let B=0,X=z.length;B<X;B++)M(z[B],T,N,S,x)}function A(D){D.target.removeEventListener("dispose",A);for(let N in l){let S=l[N],x=D.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var yN={[bu]:wu,[Tu]:Au,[Cu]:Iu,[Vr]:Du,[wu]:bu,[Au]:Tu,[Iu]:Cu,[Du]:Vr};function _N(n,e){function t(){let R=!1,ie=new Mt,V=null,q=new Mt(0,0,0,0);return{setMask:function(le){V!==le&&!R&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){R=le},setClear:function(le,ce,ke,St,zt){zt===!0&&(le*=St,ce*=St,ke*=St),ie.set(le,ce,ke,St),q.equals(ie)===!1&&(n.clearColor(le,ce,ke,St),q.copy(ie))},reset:function(){R=!1,V=null,q.set(-1,0,0,0)}}}function i(){let R=!1,ie=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ie!==ce){let ke=e.get("EXT_clip_control");ie?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);let St=le;le=null,this.setClear(St)}ie=ce},getReversed:function(){return ie},setTest:function(ce){ce?oe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!R&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ie&&(ce=yN[ce]),q!==ce){switch(ce){case bu:n.depthFunc(n.NEVER);break;case wu:n.depthFunc(n.ALWAYS);break;case Tu:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case Cu:n.depthFunc(n.EQUAL);break;case Du:n.depthFunc(n.GEQUAL);break;case Au:n.depthFunc(n.GREATER);break;case Iu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){R=ce},setClear:function(ce){le!==ce&&(ie&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){R=!1,V=null,q=null,le=null,ie=!1}}}function r(){let R=!1,ie=null,V=null,q=null,le=null,ce=null,ke=null,St=null,zt=null;return{setTest:function(lt){R||(lt?oe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(lt){ie!==lt&&!R&&(n.stencilMask(lt),ie=lt)},setFunc:function(lt,Pn,ci){(V!==lt||q!==Pn||le!==ci)&&(n.stencilFunc(lt,Pn,ci),V=lt,q=Pn,le=ci)},setOp:function(lt,Pn,ci){(ce!==lt||ke!==Pn||St!==ci)&&(n.stencilOp(lt,Pn,ci),ce=lt,ke=Pn,St=ci)},setLocked:function(lt){R=lt},setClear:function(lt){zt!==lt&&(n.clearStencil(lt),zt=lt)},reset:function(){R=!1,ie=null,V=null,q=null,le=null,ce=null,ke=null,St=null,zt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,M=null,A=null,D=null,T=new Qe(0,0,0),N=0,S=!1,x=null,I=null,z=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=J>=2);let se=null,de={},xe=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),pt=new Mt().fromArray(xe),W=new Mt().fromArray(Ge);function te(R,ie,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<V;ke++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ie+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Vr),$e(!1),qe(Lp),oe(n.CULL_FACE),C(Ni);function oe(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Te(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function st(R,ie){return d[R]!==ie?(n.bindFramebuffer(R,ie),d[R]=ie,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(R,ie){let V=p,q=!1;if(R){V=f.get(ie),V===void 0&&(V=[],f.set(ie,V));let le=R.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=le.length;ce<ke;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function Tt(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let xt={[sr]:n.FUNC_ADD,[W0]:n.FUNC_SUBTRACT,[j0]:n.FUNC_REVERSE_SUBTRACT};xt[$0]=n.MIN,xt[q0]=n.MAX;let je={[X0]:n.ZERO,[Y0]:n.ONE,[Z0]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[nx]:n.SRC_ALPHA_SATURATE,[ex]:n.DST_COLOR,[K0]:n.DST_ALPHA,[J0]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[tx]:n.ONE_MINUS_DST_COLOR,[Q0]:n.ONE_MINUS_DST_ALPHA,[ix]:n.CONSTANT_COLOR,[rx]:n.ONE_MINUS_CONSTANT_COLOR,[sx]:n.CONSTANT_ALPHA,[ox]:n.ONE_MINUS_CONSTANT_ALPHA};function C(R,ie,V,q,le,ce,ke,St,zt,lt){if(R===Ni){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),R!==G0){if(R!==m||lt!==S){if((h!==sr||M!==sr)&&(n.blendEquation(n.FUNC_ADD),h=sr,M=sr),lt)switch(R){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fp:n.blendFunc(n.ONE,n.ONE);break;case kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Up:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Up:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,E=null,A=null,D=null,T.set(0,0,0),N=0,m=R,S=lt}return}le=le||ie,ce=ce||V,ke=ke||q,(ie!==h||le!==M)&&(n.blendEquationSeparate(xt[ie],xt[le]),h=ie,M=le),(V!==w||q!==E||ce!==A||ke!==D)&&(n.blendFuncSeparate(je[V],je[q],je[ce],je[ke]),w=V,E=q,A=ce,D=ke),(St.equals(T)===!1||zt!==N)&&(n.blendColor(St.r,St.g,St.b,zt),T.copy(St),N=zt),m=R,S=!1}function vn(R,ie){R.side===ri?Te(n.CULL_FACE):oe(n.CULL_FACE);let V=R.side===Jt;ie&&(V=!V),$e(V),R.blending===Br&&R.transparent===!1?C(Ni):C(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let q=R.stencilWrite;a.setTest(q),q&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),vt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(R){x!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),x=R)}function qe(R){R!==V0?(oe(n.CULL_FACE),R!==I&&(R===Lp?n.cullFace(n.BACK):R===H0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),I=R}function Me(R){R!==z&&(j&&n.lineWidth(R),z=R)}function vt(R,ie,V){R?(oe(n.POLYGON_OFFSET_FILL),(B!==ie||X!==V)&&(n.polygonOffset(ie,V),B=ie,X=V)):Te(n.POLYGON_OFFSET_FILL)}function _e(R){R?oe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function b(R){R===void 0&&(R=n.TEXTURE0+Y-1),se!==R&&(n.activeTexture(R),se=R)}function v(R,ie,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==R||q.texture!==ie)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(R,ie||ve[R]),q.type=R,q.texture=ie)}function O(){let R=de[se];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(R){pt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),pt.copy(R))}function me(R){W.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function Xe(R,ie){let V=l.get(ie);V===void 0&&(V=new WeakMap,l.set(ie,V));let q=V.get(R);q===void 0&&(q=n.getUniformBlockIndex(ie,R.name),V.set(R,q))}function Be(R,ie){let q=l.get(ie).get(R);c.get(ie)!==q&&(n.uniformBlockBinding(ie,q,R.__bindingPointIndex),c.set(ie,q))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,de={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,M=null,A=null,D=null,T=new Qe(0,0,0),N=0,S=!1,x=null,I=null,z=null,B=null,X=null,pt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:st,drawBuffers:De,useProgram:Tt,setBlending:C,setMaterial:vn,setFlipSided:$e,setCullFace:qe,setLineWidth:Me,setPolygonOffset:vt,setScissorTest:_e,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pe,texImage3D:be,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:et,texStorage3D:Q,texSubImage2D:G,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:gt}}function xN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):Ma("canvas")}function _(b,v,O){let $=1,Z=_e(b);if((Z.width>O||Z.height>O)&&($=O/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let G=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(G,ye));let ae=v?g(G,ye):d;return ae.width=G,ae.height=ye,ae.getContext("2d").drawImage(b,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+ye+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,v,O,$,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=v;if(v===n.RED&&(O===n.FLOAT&&(G=n.R32F),O===n.HALF_FLOAT&&(G=n.R16F),O===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.R8UI),O===n.UNSIGNED_SHORT&&(G=n.R16UI),O===n.UNSIGNED_INT&&(G=n.R32UI),O===n.BYTE&&(G=n.R8I),O===n.SHORT&&(G=n.R16I),O===n.INT&&(G=n.R32I)),v===n.RG&&(O===n.FLOAT&&(G=n.RG32F),O===n.HALF_FLOAT&&(G=n.RG16F),O===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RG8UI),O===n.UNSIGNED_SHORT&&(G=n.RG16UI),O===n.UNSIGNED_INT&&(G=n.RG32UI),O===n.BYTE&&(G=n.RG8I),O===n.SHORT&&(G=n.RG16I),O===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGB8UI),O===n.UNSIGNED_SHORT&&(G=n.RGB16UI),O===n.UNSIGNED_INT&&(G=n.RGB32UI),O===n.BYTE&&(G=n.RGB8I),O===n.SHORT&&(G=n.RGB16I),O===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),O===n.UNSIGNED_INT&&(G=n.RGBA32UI),O===n.BYTE&&(G=n.RGBA8I),O===n.SHORT&&(G=n.RGBA16I),O===n.INT&&(G=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){let ye=Z?_a:nt.getTransfer($);O===n.FLOAT&&(G=n.RGBA32F),O===n.HALF_FLOAT&&(G=n.RGBA16F),O===n.UNSIGNED_BYTE&&(G=ye===dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(b,v){let O;return b?v===null||v===hr||v===$r?O=n.DEPTH24_STENCIL8:v===oi?O=n.DEPTH32F_STENCIL8:v===ho&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hr||v===$r?O=n.DEPTH_COMPONENT24:v===oi?O=n.DEPTH_COMPONENT32F:v===ho&&(O=n.DEPTH_COMPONENT16),O}function A(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==In&&b.minFilter!==jn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function D(b){let v=b.target;v.removeEventListener("dispose",D),N(v),v.isVideoTexture&&u.delete(v)}function T(b){let v=b.target;v.removeEventListener("dispose",T),x(v)}function N(b){let v=i.get(b);if(v.__webglInit===void 0)return;let O=b.source,$=f.get(O);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys($).length===0&&f.delete(O)}i.remove(b)}function S(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let O=b.source,$=f.get(O);delete $[v.__cacheKey],o.memory.textures--}function x(b){let v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=b.textures;for(let $=0,Z=O.length;$<Z;$++){let G=i.get(O[$]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(b)}let I=0;function z(){I=0}function B(){let b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function X(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Y(b,v){let O=i.get(b);if(b.isVideoTexture&&Me(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,b,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function j(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){W(O,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function J(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){W(O,b,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function H(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let se={[nu]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[iu]:n.MIRRORED_REPEAT},de={[In]:n.NEAREST,[gx]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[Pu]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},xe={[xx]:n.NEVER,[Tx]:n.ALWAYS,[Mx]:n.LESS,[Jp]:n.LEQUAL,[Sx]:n.EQUAL,[wx]:n.GEQUAL,[Ex]:n.GREATER,[bx]:n.NOTEQUAL};function Ge(b,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jn||v.magFilter===Pu||v.magFilter===Va||v.magFilter===fr||v.minFilter===jn||v.minFilter===Pu||v.minFilter===Va||v.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,se[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===In||v.minFilter!==Va&&v.minFilter!==fr||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function pt(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",D));let $=v.source,Z=f.get($);Z===void 0&&(Z={},f.set($,Z));let G=X(v);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[G].usedTimes++;let ye=Z[b.__cacheKey];ye!==void 0&&(Z[b.__cacheKey].usedTimes--,ye.usedTimes===0&&S(v)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return O}function W(b,v,O){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=pt(b,v),G=v.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+O);let ye=i.get(G);if(G.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let ae=nt.getPrimaries(nt.workingColorSpace),fe=v.colorSpace===Li?null:nt.getPrimaries(v.colorSpace),et=v.colorSpace===Li||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Q=_(v.image,!1,r.maxTextureSize);Q=vt(v,Q);let pe=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Ie=E(v.internalFormat,pe,be,v.colorSpace,v.isVideoTexture);Ge($,v);let me,Xe=v.mipmaps,Be=v.isVideoTexture!==!0,gt=ye.__version===void 0||Z===!0,R=G.dataReady,ie=A(v,Q);if(v.isDepthTexture)Ie=M(v.format===Hr,v.type),gt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,be,null));else if(v.isDataTexture)if(Xe.length>0){Be&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Xe[0].width,Xe[0].height);for(let V=0,q=Xe.length;V<q;V++)me=Xe[V],Be?R&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,pe,be,me.data);v.generateMipmaps=!1}else Be?(gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Q.width,Q.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pe,be,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,be,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Xe[0].width,Xe[0].height,Q.depth);for(let V=0,q=Xe.length;V<q;V++)if(me=Xe[V],v.format!==Nn)if(pe!==null)if(Be){if(R)if(v.layerUpdates.size>0){let le=im(me.width,me.height,v.format,v.type);for(let ce of v.layerUpdates){let ke=me.data.subarray(ce*le/me.data.BYTES_PER_ELEMENT,(ce+1)*le/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,me.width,me.height,1,pe,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,be,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,me.width,me.height,Q.depth,0,pe,be,me.data)}else{Be&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Xe[0].width,Xe[0].height);for(let V=0,q=Xe.length;V<q;V++)me=Xe[V],v.format!==Nn?pe!==null?Be?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?R&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,pe,be,me.data)}else if(v.isDataArrayTexture)if(Be){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Q.width,Q.height,Q.depth),R)if(v.layerUpdates.size>0){let V=im(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,pe,be,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,be,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,pe,be,Q.data);else if(v.isData3DTexture)Be?(gt&&t.texStorage3D(n.TEXTURE_3D,ie,Ie,Q.width,Q.height,Q.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,pe,be,Q.data);else if(v.isFramebufferTexture){if(gt)if(Be)t.texStorage2D(n.TEXTURE_2D,ie,Ie,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ie;le++)t.texImage2D(n.TEXTURE_2D,le,Ie,V,q,0,pe,be,null),V>>=1,q>>=1}}else if(Xe.length>0){if(Be&&gt){let V=_e(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ie,Ie,V.width,V.height)}for(let V=0,q=Xe.length;V<q;V++)me=Xe[V],Be?R&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe,be,me):t.texImage2D(n.TEXTURE_2D,V,Ie,pe,be,me);v.generateMipmaps=!1}else if(Be){if(gt){let V=_e(Q);t.texStorage2D(n.TEXTURE_2D,ie,Ie,V.width,V.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,be,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ie,pe,be,Q);m(v)&&h($),ye.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function te(b,v,O){if(v.image.length!==6)return;let $=pt(b,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);let G=i.get(Z);if(Z.version!==G.__version||$===!0){t.activeTexture(n.TEXTURE0+O);let ye=nt.getPrimaries(nt.workingColorSpace),ae=v.colorSpace===Li?null:nt.getPrimaries(v.colorSpace),fe=v.colorSpace===Li||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let et=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!et&&!Q?pe[q]=_(v.image[q],!0,r.maxCubemapSize):pe[q]=Q?v.image[q].image:v.image[q],pe[q]=vt(v,pe[q]);let be=pe[0],Ie=s.convert(v.format,v.colorSpace),me=s.convert(v.type),Xe=E(v.internalFormat,Ie,me,v.colorSpace),Be=v.isVideoTexture!==!0,gt=G.__version===void 0||$===!0,R=Z.dataReady,ie=A(v,be);Ge(n.TEXTURE_CUBE_MAP,v);let V;if(et){Be&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Xe,be.width,be.height);for(let q=0;q<6;q++){V=pe[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==Nn?Ie!==null?Be?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Xe,ce.width,ce.height,0,Ie,me,ce.data)}}}else{if(V=v.mipmaps,Be&&gt){V.length>0&&ie++;let q=_e(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Xe,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Be?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Ie,me,pe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,pe[q].width,pe[q].height,0,Ie,me,pe[q].data);for(let le=0;le<V.length;le++){let ke=V[le].image[q].image;Be?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,ke.width,ke.height,Ie,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Xe,ke.width,ke.height,0,Ie,me,ke.data)}}else{Be?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,me,pe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Xe,Ie,me,pe[q]);for(let le=0;le<V.length;le++){let ce=V[le];Be?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ie,me,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Xe,Ie,me,ce.image[q])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),G.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,O,$,Z,G){let ye=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),fe=E(O.internalFormat,ye,ae,O.colorSpace),et=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!et.__hasExternalTextures){let pe=Math.max(1,v.width>>G),be=Math.max(1,v.height>>G);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,fe,pe,be,v.depth,0,ye,ae,null):t.texImage2D(Z,G,fe,pe,be,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),qe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,$e(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,G=M(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=$e(v);qe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,G,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,b)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let G=$[Z],ye=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),fe=E(G.internalFormat,ye,ae,G.colorSpace),et=$e(v);O&&qe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,fe,v.width,v.height):qe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,G=$e(v);if(v.depthTexture.format===Ur)qe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Hr)qe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function st(b){let v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[$],b,!1);else{let Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,v,O){let $=i.get(b);v!==void 0&&ve($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&st(b)}function Tt(b){let v=b.texture,O=i.get(b),$=i.get(v);b.addEventListener("dispose",T);let Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else O.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)O.__webglFramebuffer[ae]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ae=0,fe=Z.length;ae<fe;ae++){let et=i.get(Z[ae]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&qe(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let fe=Z[ae];O.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let et=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),pe=E(fe.internalFormat,et,Q,fe.colorSpace,b.isXRRenderTarget===!0),be=$e(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[ae][fe],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ve(O.__webglFramebuffer[ae],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,fe=Z.length;ae<fe;ae++){let et=Z[ae],Q=i.get(et);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ge(n.TEXTURE_2D,et),ve(O.__webglFramebuffer,b,et,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(et)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Ge(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[fe],b,v,n.COLOR_ATTACHMENT0,ae,fe);else ve(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&h(ae),t.unbindTexture()}b.depthBuffer&&st(b)}function xt(b){let v=b.textures;for(let O=0,$=v.length;O<$;O++){let Z=v[O];if(m(Z)){let G=w(b),ye=i.get(Z).__webglTexture;t.bindTexture(G,ye),h(G),t.unbindTexture()}}}let je=[],C=[];function vn(b){if(b.samples>0){if(qe(b)===!1){let v=b.textures,O=b.width,$=b.height,Z=n.COLOR_BUFFER_BIT,G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(b),ae=v.length>1;if(ae)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let et=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,Z,n.NEAREST),c===!0&&(je.length=0,C.length=0,je.push(n.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(je.push(G),C.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let et=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $e(b){return Math.min(r.maxSamples,b.samples)}function qe(b){let v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(b){let v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function vt(b,v){let O=b.colorSpace,$=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==zr&&O!==Li&&(nt.getTransfer(O)===dt?($!==Nn||Z!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function _e(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=De,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function MN(n,e){function t(i,r=Li){let s,o=nt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vp)return n.BYTE;if(i===Hp)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===po)return n.HALF_FLOAT;if(i===Gp)return n.ALPHA;if(i===Wp)return n.RGB;if(i===Nn)return n.RGBA;if(i===jp)return n.LUMINANCE;if(i===$p)return n.LUMINANCE_ALPHA;if(i===Ur)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===qp)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===Xp)return n.RG;if(i===Uu)return n.RG_INTEGER;if(i===Bu)return n.RGBA_INTEGER;if(i===Ha||i===za||i===Ga||i===Wa)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Hu||i===zu||i===Gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wu||i===ju||i===$u)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wu||i===ju)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$u)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qu||i===Xu||i===Yu||i===Zu||i===Ju||i===Ku||i===Qu||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ed)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===td)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===id)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===od)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===ad||i===cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yp||i===ld||i===ud||i===dd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var SN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new pr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new $n({vertexShader:SN,fragmentShader:EN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vm=class extends Ai{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,_=new gm,m=t.getContextAttributes(),h=null,w=null,E=[],M=[],A=new Ke,D=null,T=new $t;T.viewport=new Mt;let N=new $t;N.viewport=new Mt;let S=[T,N],x=new Su,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=E[W];return te===void 0&&(te=new lo,E[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=E[W];return te===void 0&&(te=new lo,E[W]=te),te.getGripSpace()},this.getHand=function(W){let te=E[W];return te===void 0&&(te=new lo,E[W]=te),te.getHandSpace()};function B(W){let te=M.indexOf(W.inputSource);if(te===-1)return;let ve=E[te];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){let te=M[W];te!==null&&(M[W]=null,E[W].disconnect(te))}I=null,z=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,w=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return es(this,null,function*(){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,oe=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Hr:Ur,oe=m.stencil?$r:hr);let st={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(st),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ti(f.textureWidth,f.textureHeight,{format:Nn,type:si,depthTexture:new Ra(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ti(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let te=0;te<W.removed.length;te++){let ve=W.removed[te],oe=M.indexOf(ve);oe>=0&&(M[oe]=null,E[oe].disconnect(ve))}for(let te=0;te<W.added.length;te++){let ve=W.added[te],oe=M.indexOf(ve);if(oe===-1){for(let st=0;st<E.length;st++)if(st>=M.length){M.push(ve),oe=st;break}else if(M[st]===null){M[st]=ve,oe=st;break}if(oe===-1)break}let Te=E[oe];Te&&Te.connect(ve)}}let j=new F,J=new F;function H(W,te,ve){j.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let oe=j.distanceTo(J),Te=te.projectionMatrix.elements,st=ve.projectionMatrix.elements,De=Te[14]/(Te[10]-1),Tt=Te[14]/(Te[10]+1),xt=(Te[9]+1)/Te[5],je=(Te[9]-1)/Te[5],C=(Te[8]-1)/Te[0],vn=(st[8]+1)/st[0],$e=De*C,qe=De*vn,Me=oe/(-C+vn),vt=Me*-C;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let _e=De+Me,b=Tt+Me,v=$e-vt,O=qe+(oe-vt),$=xt*Tt/b*_e,Z=je*Tt/b*_e;W.projectionMatrix.makePerspective(v,O,$,Z,_e,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ve=W.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),x.near=N.near=T.near=te,x.far=N.far=T.far=ve,(I!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,z=x.far),T.layers.mask=W.layers.mask|2,N.layers.mask=W.layers.mask|4,x.layers.mask=T.layers.mask|N.layers.mask;let oe=W.parent,Te=x.cameras;se(x,oe);for(let st=0;st<Te.length;st++)se(Te[st],oe);Te.length===2?H(x,T,N):x.projectionMatrix.copy(T.projectionMatrix),de(W,x,oe)};function de(W,te,ve){ve===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=su*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xe=null;function Ge(W,te){if(u=te.getViewerPose(l||o),g=te,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let De=0;De<ve.length;De++){let Tt=ve[De],xt=null;if(p!==null)xt=p.getViewport(Tt);else{let C=d.getViewSubImage(f,Tt);xt=C.viewport,De===0&&(e.setRenderTargetTextures(w,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let je=S[De];je===void 0&&(je=new $t,je.layers.enable(De),je.viewport=new Mt,S[De]=je),je.matrix.fromArray(Tt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Tt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(xt.x,xt.y,xt.width,xt.height),De===0&&(x.matrix.copy(je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(je)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let De=d.getDepthInformation(ve[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let ve=0;ve<E.length;ve++){let oe=M[ve],Te=E[ve];oe!==null&&Te!==void 0&&Te.update(oe,te,l||o)}xe&&xe(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let pt=new nM;pt.setAnimationLoop(Ge),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}},Zr=new ar,bN=new wt;function wN(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,em(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,E,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Jt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Jt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w=e.get(h),E=w.envMap,M=w.envMapRotation;E&&(m.envMap.value=E,Zr.copy(M),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(bN.makeRotationFromEuler(Zr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Jt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TN(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){let M=E.program;i.uniformBlockBinding(w,M)}function l(w,E){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",m));let A=E.program;i.updateUBOMapping(w,A);let D=e.render.frame;s[w.id]!==D&&(f(w),s[w.id]=D)}function u(w){let E=d();w.__bindingPointIndex=E;let M=n.createBuffer(),A=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=r[w.id],M=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,T=M.length;D<T;D++){let N=Array.isArray(M[D])?M[D]:[M[D]];for(let S=0,x=N.length;S<x;S++){let I=N[S];if(p(I,D,S,A)===!0){let z=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],J=_(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,z+X,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,M,A){let D=w.value,T=E+"_"+M;if(A[T]===void 0)return typeof D=="number"||typeof D=="boolean"?A[T]=D:A[T]=D.clone(),!0;{let N=A[T];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return A[T]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function g(w){let E=w.uniforms,M=0,A=16;for(let T=0,N=E.length;T<N;T++){let S=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,I=S.length;x<I;x++){let z=S[x],B=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],J=_(j),H=M%A,se=H%J.boundary,de=H+se;M+=se,de!==0&&A-de<J.storage&&(M+=A-de),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}let D=M%A;return D>0&&(M+=A-D),w.__size=M,w.__cache={},this}function _(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var gd=class{constructor(e={}){let{canvas:t=Cx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Pi,this.toneMappingExposure=1;let M=this,A=!1,D=0,T=0,N=null,S=-1,x=null,I=new Mt,z=new Mt,B=null,X=new Qe(0),Y=0,j=t.width,J=t.height,H=1,se=null,de=null,xe=new Mt(0,0,j,J),Ge=new Mt(0,0,j,J),pt=!1,W=new uo,te=!1,ve=!1;this.transmissionResolutionScale=1;let oe=new wt,Te=new wt,st=new F,De=new Mt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function je(){return N===null?H:1}let C=i;function vn(y,P){return t.getContext(y,P)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){let P="webgl2";if(C=vn(P,y),C===null)throw vn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $e,qe,Me,vt,_e,b,v,O,$,Z,G,ye,ae,fe,et,Q,pe,be,Ie,me,Xe,Be,gt,R;function ie(){$e=new WR(C),$e.init(),Be=new MN(C,$e),qe=new UR(C,$e,e,Be),Me=new _N(C,$e),qe.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),vt=new qR(C),_e=new oN,b=new xN(C,$e,Me,_e,qe,Be,vt),v=new VR(M),O=new GR(M),$=new eA(C),gt=new FR(C,$),Z=new jR(C,$,vt,gt),G=new YR(C,Z,$,vt),Ie=new XR(C,qe,b),Q=new BR(_e),ye=new sN(M,v,O,$e,qe,gt,Q),ae=new wN(M,_e),fe=new cN,et=new pN($e),be=new OR(M,v,O,Me,G,p,c),pe=new vN(M,G,qe),R=new TN(C,vt,qe,Me),me=new kR(C,$e,vt),Xe=new $R(C,$e,vt),vt.programs=ye.programs,M.capabilities=qe,M.extensions=$e,M.properties=_e,M.renderLists=fe,M.shadowMap=pe,M.state=Me,M.info=vt}ie();let V=new vm(M,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(j,J,!1))},this.getSize=function(y){return y.set(j,J)},this.setSize=function(y,P,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,J=P,t.width=Math.floor(y*H),t.height=Math.floor(P*H),k===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(j*H,J*H).floor()},this.setDrawingBufferSize=function(y,P,k){j=y,J=P,H=k,t.width=Math.floor(y*k),t.height=Math.floor(P*k),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,P,k,U){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,P,k,U),Me.viewport(I.copy(xe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ge)},this.setScissor=function(y,P,k,U){y.isVector4?Ge.set(y.x,y.y,y.z,y.w):Ge.set(y,P,k,U),Me.scissor(z.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){Me.setScissorTest(pt=y)},this.setOpaqueSort=function(y){se=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(y=!0,P=!0,k=!0){let U=0;if(y){let L=!1;if(N!==null){let K=N.texture.format;L=K===Bu||K===Uu||K===ku}if(L){let K=N.texture.type,re=K===si||K===hr||K===ho||K===$r||K===Ou||K===Fu,ue=be.getClearColor(),ge=be.getClearAlpha(),Re=ue.r,Pe=ue.g,Se=ue.b;re?(g[0]=Re,g[1]=Pe,g[2]=Se,g[3]=ge,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Re,_[1]=Pe,_[2]=Se,_[3]=ge,C.clearBufferiv(C.COLOR,0,_))}else U|=C.COLOR_BUFFER_BIT}P&&(U|=C.DEPTH_BUFFER_BIT),k&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),be.dispose(),fe.dispose(),et.dispose(),_e.dispose(),v.dispose(),O.dispose(),G.dispose(),gt.dispose(),R.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",xm),V.removeEventListener("sessionend",Mm),mr.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=vt.autoReset,P=pe.enabled,k=pe.autoUpdate,U=pe.needsUpdate,L=pe.type;ie(),vt.autoReset=y,pe.enabled=P,pe.autoUpdate=k,pe.needsUpdate=U,pe.type=L}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){let P=y.target;P.removeEventListener("dispose",ke),St(P)}function St(y){zt(y),_e.remove(y)}function zt(y){let P=_e.get(y).programs;P!==void 0&&(P.forEach(function(k){ye.releaseProgram(k)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,k,U,L,K){P===null&&(P=Tt);let re=L.isMesh&&L.matrixWorld.determinant()<0,ue=cM(y,P,k,U,L);Me.setMaterial(U,re);let ge=k.index,Re=1;if(U.wireframe===!0){if(ge=Z.getWireframeAttribute(k),ge===void 0)return;Re=2}let Pe=k.drawRange,Se=k.attributes.position,tt=Pe.start*Re,ot=(Pe.start+Pe.count)*Re;K!==null&&(tt=Math.max(tt,K.start*Re),ot=Math.min(ot,(K.start+K.count)*Re)),ge!==null?(tt=Math.max(tt,0),ot=Math.min(ot,ge.count)):Se!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,Se.count));let Dt=ot-tt;if(Dt<0||Dt===1/0)return;gt.setup(L,U,ue,k,ge);let Et,it=me;if(ge!==null&&(Et=$.get(ge),it=Xe,it.setIndex(Et)),L.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*je()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(L.isLine){let Ee=U.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*je()),L.isLineSegments?it.setMode(C.LINES):L.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else L.isPoints?it.setMode(C.POINTS):L.isSprite&&it.setMode(C.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)it.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ee=L._multiDrawStarts,Bt=L._multiDrawCounts,at=L._multiDrawCount,Ln=ge?$.get(ge).bytesPerElement:1,Qr=_e.get(U).currentProgram.getUniforms();for(let rn=0;rn<at;rn++)Qr.setValue(C,"_gl_DrawID",rn),it.render(Ee[rn]/Ln,Bt[rn])}else if(L.isInstancedMesh)it.renderInstances(tt,Dt,L.count);else if(k.isInstancedBufferGeometry){let Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Bt=Math.min(k.instanceCount,Ee);it.renderInstances(tt,Dt,Bt)}else it.render(tt,Dt)};function lt(y,P,k){y.transparent===!0&&y.side===ri&&y.forceSinglePass===!1?(y.side=Jt,y.needsUpdate=!0,Ya(y,P,k),y.side=Di,y.needsUpdate=!0,Ya(y,P,k),y.side=ri):Ya(y,P,k)}this.compile=function(y,P,k=null){k===null&&(k=y),h=et.get(k),h.init(P),E.push(h),k.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),y!==k&&y.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();let U=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let K=L.material;if(K)if(Array.isArray(K))for(let re=0;re<K.length;re++){let ue=K[re];lt(ue,k,L),U.add(ue)}else lt(K,k,L),U.add(K)}),E.pop(),h=null,U},this.compileAsync=function(y,P,k=null){let U=this.compile(y,P,k);return new Promise(L=>{function K(){if(U.forEach(function(re){_e.get(re).currentProgram.isReady()&&U.delete(re)}),U.size===0){L(y);return}setTimeout(K,10)}$e.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let Pn=null;function ci(y){Pn&&Pn(y)}function xm(){mr.stop()}function Mm(){mr.start()}let mr=new nM;mr.setAnimationLoop(ci),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(y){Pn=y,V.setAnimationLoop(y),y===null?mr.stop():mr.start()},V.addEventListener("sessionstart",xm),V.addEventListener("sessionend",Mm),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,P,N),h=et.get(y,E.length),h.init(P),E.push(h),Te.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ve),m=fe.get(y,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let K=M.xr.getDepthSensingMesh();K!==null&&_d(K,P,-1/0,M.sortObjects)}_d(y,P,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(se,de),xt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,xt&&be.addToRenderList(m,y),this.info.render.frame++,te===!0&&Q.beginShadows();let k=h.state.shadowsArray;pe.render(k,y,P),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,L=m.transmissive;if(h.setupLights(),P.isArrayCamera){let K=P.cameras;if(L.length>0)for(let re=0,ue=K.length;re<ue;re++){let ge=K[re];Em(U,L,y,ge)}xt&&be.render(y);for(let re=0,ue=K.length;re<ue;re++){let ge=K[re];Sm(m,y,ge,ge.viewport)}}else L.length>0&&Em(U,L,y,P),xt&&be.render(y),Sm(m,y,P);N!==null&&T===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(M,y,P),gt.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(h=E[E.length-1],te===!0&&Q.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function _d(y,P,k,U){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){U&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);let re=G.update(y),ue=y.material;ue.visible&&m.push(y,re,ue,k,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){let re=G.update(y),ue=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),De.copy(re.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){let ge=re.groups;for(let Re=0,Pe=ge.length;Re<Pe;Re++){let Se=ge[Re],tt=ue[Se.materialIndex];tt&&tt.visible&&m.push(y,re,tt,k,De.z,Se)}}else ue.visible&&m.push(y,re,ue,k,De.z,null)}}let K=y.children;for(let re=0,ue=K.length;re<ue;re++)_d(K[re],P,k,U)}function Sm(y,P,k,U){let L=y.opaque,K=y.transmissive,re=y.transparent;h.setupLightsView(k),te===!0&&Q.setGlobalState(M.clippingPlanes,k),U&&Me.viewport(I.copy(U)),L.length>0&&Xa(L,P,k),K.length>0&&Xa(K,P,k),re.length>0&&Xa(re,P,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Em(y,P,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[U.id]===void 0&&(h.state.transmissionRenderTarget[U.id]=new ti(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?po:si,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let K=h.state.transmissionRenderTarget[U.id],re=U.viewport||I;K.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);let ue=M.getRenderTarget();M.setRenderTarget(K),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),xt&&be.render(k);let ge=M.toneMapping;M.toneMapping=Pi;let Re=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),h.setupLightsView(U),te===!0&&Q.setGlobalState(M.clippingPlanes,U),Xa(y,k,U),b.updateMultisampleRenderTarget(K),b.updateRenderTargetMipmap(K),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,tt=P.length;Se<tt;Se++){let ot=P[Se],Dt=ot.object,Et=ot.geometry,it=ot.material,Ee=ot.group;if(it.side===ri&&Dt.layers.test(U.layers)){let Bt=it.side;it.side=Jt,it.needsUpdate=!0,bm(Dt,k,U,Et,it,Ee),it.side=Bt,it.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(K),b.updateRenderTargetMipmap(K))}M.setRenderTarget(ue),M.setClearColor(X,Y),Re!==void 0&&(U.viewport=Re),M.toneMapping=ge}function Xa(y,P,k){let U=P.isScene===!0?P.overrideMaterial:null;for(let L=0,K=y.length;L<K;L++){let re=y[L],ue=re.object,ge=re.geometry,Re=U===null?re.material:U,Pe=re.group;ue.layers.test(k.layers)&&bm(ue,P,k,ge,Re,Pe)}}function bm(y,P,k,U,L,K){y.onBeforeRender(M,P,k,U,L,K),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(M,P,k,U,y,K),L.transparent===!0&&L.side===ri&&L.forceSinglePass===!1?(L.side=Jt,L.needsUpdate=!0,M.renderBufferDirect(k,P,U,L,y,K),L.side=Di,L.needsUpdate=!0,M.renderBufferDirect(k,P,U,L,y,K),L.side=ri):M.renderBufferDirect(k,P,U,L,y,K),y.onAfterRender(M,P,k,U,L,K)}function Ya(y,P,k){P.isScene!==!0&&(P=Tt);let U=_e.get(y),L=h.state.lights,K=h.state.shadowsArray,re=L.state.version,ue=ye.getParameters(y,L.state,K,P,k),ge=ye.getProgramCacheKey(ue),Re=U.programs;U.environment=y.isMeshStandardMaterial?P.environment:null,U.fog=P.fog,U.envMap=(y.isMeshStandardMaterial?O:v).get(y.envMap||U.environment),U.envMapRotation=U.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",ke),Re=new Map,U.programs=Re);let Pe=Re.get(ge);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===re)return Tm(y,ue),Pe}else ue.uniforms=ye.getUniforms(y),y.onBeforeCompile(ue,M),Pe=ye.acquireProgram(ue,ge),Re.set(ge,Pe),U.uniforms=ue.uniforms;let Se=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=Q.uniform),Tm(y,ue),U.needsLights=uM(y),U.lightsStateVersion=re,U.needsLights&&(Se.ambientLightColor.value=L.state.ambient,Se.lightProbe.value=L.state.probe,Se.directionalLights.value=L.state.directional,Se.directionalLightShadows.value=L.state.directionalShadow,Se.spotLights.value=L.state.spot,Se.spotLightShadows.value=L.state.spotShadow,Se.rectAreaLights.value=L.state.rectArea,Se.ltc_1.value=L.state.rectAreaLTC1,Se.ltc_2.value=L.state.rectAreaLTC2,Se.pointLights.value=L.state.point,Se.pointLightShadows.value=L.state.pointShadow,Se.hemisphereLights.value=L.state.hemi,Se.directionalShadowMap.value=L.state.directionalShadowMap,Se.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Se.spotShadowMap.value=L.state.spotShadowMap,Se.spotLightMatrix.value=L.state.spotLightMatrix,Se.spotLightMap.value=L.state.spotLightMap,Se.pointShadowMap.value=L.state.pointShadowMap,Se.pointShadowMatrix.value=L.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function wm(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=vo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Tm(y,P){let k=_e.get(y);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function cM(y,P,k,U,L){P.isScene!==!0&&(P=Tt),b.resetTextureUnits();let K=P.fog,re=U.isMeshStandardMaterial?P.environment:null,ue=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:zr,ge=(U.isMeshStandardMaterial?O:v).get(U.envMap||re),Re=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Se=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color,Dt=Pi;U.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=M.toneMapping);let Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=Et!==void 0?Et.length:0,Ee=_e.get(U),Bt=h.state.lights;if(te===!0&&(ve===!0||y!==x)){let Xt=y===x&&U.id===S;Q.setState(U,y,Xt)}let at=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Bt.state.version||Ee.outputColorSpace!==ue||L.isBatchedMesh&&Ee.batching===!1||!L.isBatchedMesh&&Ee.batching===!0||L.isBatchedMesh&&Ee.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ee.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ee.instancing===!1||!L.isInstancedMesh&&Ee.instancing===!0||L.isSkinnedMesh&&Ee.skinning===!1||!L.isSkinnedMesh&&Ee.skinning===!0||L.isInstancedMesh&&Ee.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ee.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ee.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ee.instancingMorph===!1&&L.morphTexture!==null||Ee.envMap!==ge||U.fog===!0&&Ee.fog!==K||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Re||Ee.vertexTangents!==Pe||Ee.morphTargets!==Se||Ee.morphNormals!==tt||Ee.morphColors!==ot||Ee.toneMapping!==Dt||Ee.morphTargetsCount!==it)&&(at=!0):(at=!0,Ee.__version=U.version);let Ln=Ee.currentProgram;at===!0&&(Ln=Ya(U,P,L));let Qr=!1,rn=!1,_o=!1,_t=Ln.getUniforms(),yn=Ee.uniforms;if(Me.useProgram(Ln.program)&&(Qr=!0,rn=!0,_o=!0),U.id!==S&&(S=U.id,rn=!0),Qr||x!==y){Me.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),Ax(oe),Ix(oe),_t.setValue(C,"projectionMatrix",oe)):_t.setValue(C,"projectionMatrix",y.projectionMatrix),_t.setValue(C,"viewMatrix",y.matrixWorldInverse);let Kt=_t.map.cameraPosition;Kt!==void 0&&Kt.setValue(C,st.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&_t.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,rn=!0,_o=!0)}if(L.isSkinnedMesh){_t.setOptional(C,L,"bindMatrix"),_t.setOptional(C,L,"bindMatrixInverse");let Xt=L.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),_t.setValue(C,"boneTexture",Xt.boneTexture,b))}L.isBatchedMesh&&(_t.setOptional(C,L,"batchingTexture"),_t.setValue(C,"batchingTexture",L._matricesTexture,b),_t.setOptional(C,L,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",L._indirectTexture,b),_t.setOptional(C,L,"batchingColorTexture"),L._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",L._colorsTexture,b));let _n=k.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ie.update(L,k,Ln),(rn||Ee.receiveShadow!==L.receiveShadow)&&(Ee.receiveShadow=L.receiveShadow,_t.setValue(C,"receiveShadow",L.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(yn.envMap.value=ge,yn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&P.environment!==null&&(yn.envMapIntensity.value=P.environmentIntensity),rn&&(_t.setValue(C,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&lM(yn,_o),K&&U.fog===!0&&ae.refreshFogUniforms(yn,K),ae.refreshMaterialUniforms(yn,U,H,J,h.state.transmissionRenderTarget[y.id]),vo.upload(C,wm(Ee),yn,b)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(vo.upload(C,wm(Ee),yn,b),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&_t.setValue(C,"center",L.center),_t.setValue(C,"modelViewMatrix",L.modelViewMatrix),_t.setValue(C,"normalMatrix",L.normalMatrix),_t.setValue(C,"modelMatrix",L.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Xt=U.uniformsGroups;for(let Kt=0,xd=Xt.length;Kt<xd;Kt++){let gr=Xt[Kt];R.update(gr,Ln),R.bind(gr,Ln)}}return Ln}function lM(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function uM(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,P,k){_e.get(y.texture).__webglTexture=P,_e.get(y.depthTexture).__webglTexture=k;let U=_e.get(y);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=k===void 0,U.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){let k=_e.get(y);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0};let dM=C.createFramebuffer();this.setRenderTarget=function(y,P=0,k=0){N=y,D=P,T=k;let U=!0,L=null,K=!1,re=!1;if(y){let ge=_e.get(y);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),U=!1;else if(ge.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(ge.__hasExternalTextures)b.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Se=y.depthTexture;if(ge.__boundDepthTexture!==Se){if(Se!==null&&_e.has(Se)&&(y.width!==Se.image.width||y.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}let Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(re=!0);let Pe=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?L=Pe[P][k]:L=Pe[P],K=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?L=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[k]:L=Pe,I.copy(y.viewport),z.copy(y.scissor),B=y.scissorTest}else I.copy(xe).multiplyScalar(H).floor(),z.copy(Ge).multiplyScalar(H).floor(),B=pt;if(k!==0&&(L=dM),Me.bindFramebuffer(C.FRAMEBUFFER,L)&&U&&Me.drawBuffers(y,L),Me.viewport(I),Me.scissor(z),Me.setScissorTest(B),K){let ge=_e.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,k)}else if(re){let ge=_e.get(y.texture),Re=P;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,k,Re)}else if(y!==null&&k!==0){let ge=_e.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ge.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(y,P,k,U,L,K,re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){Me.bindFramebuffer(C.FRAMEBUFFER,ue);try{let ge=y.texture,Re=ge.format,Pe=ge.type;if(!qe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-U&&k>=0&&k<=y.height-L&&C.readPixels(P,k,U,L,Be.convert(Re),Be.convert(Pe),K)}finally{let ge=N!==null?_e.get(N).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(y,P,k,U,L,K,re){return es(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){let ge=y.texture,Re=ge.format,Pe=ge.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-U&&k>=0&&k<=y.height-L){Me.bindFramebuffer(C.FRAMEBUFFER,ue);let Se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.bufferData(C.PIXEL_PACK_BUFFER,K.byteLength,C.STREAM_READ),C.readPixels(P,k,U,L,Be.convert(Re),Be.convert(Pe),0);let tt=N!==null?_e.get(N).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,tt);let ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield Dx(C,ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,K),C.deleteBuffer(Se),C.deleteSync(ot),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(y,P=null,k=0){y.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);let U=Math.pow(2,-k),L=Math.floor(y.image.width*U),K=Math.floor(y.image.height*U),re=P!==null?P.x:0,ue=P!==null?P.y:0;b.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,re,ue,L,K),Me.unbindTexture()};let fM=C.createFramebuffer(),hM=C.createFramebuffer();this.copyTextureToTexture=function(y,P,k=null,U=null,L=0,K=null){y.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1],P=arguments[2],K=arguments[3]||0,k=null),K===null&&(L!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=L,L=0):K=0);let re,ue,ge,Re,Pe,Se,tt,ot,Dt,Et=y.isCompressedTexture?y.mipmaps[K]:y.image;if(k!==null)re=k.max.x-k.min.x,ue=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,Pe=k.min.y,Se=k.isBox3?k.min.z:0;else{let _n=Math.pow(2,-L);re=Math.floor(Et.width*_n),ue=Math.floor(Et.height*_n),y.isDataArrayTexture?ge=Et.depth:y.isData3DTexture?ge=Math.floor(Et.depth*_n):ge=1,Re=0,Pe=0,Se=0}U!==null?(tt=U.x,ot=U.y,Dt=U.z):(tt=0,ot=0,Dt=0);let it=Be.convert(P.format),Ee=Be.convert(P.type),Bt;P.isData3DTexture?(b.setTexture3D(P,0),Bt=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),Bt=C.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let at=C.getParameter(C.UNPACK_ROW_LENGTH),Ln=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qr=C.getParameter(C.UNPACK_SKIP_PIXELS),rn=C.getParameter(C.UNPACK_SKIP_ROWS),_o=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);let _t=y.isDataArrayTexture||y.isData3DTexture,yn=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let _n=_e.get(y),Xt=_e.get(P),Kt=_e.get(_n.__renderTarget),xd=_e.get(Xt.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,xd.__webglFramebuffer);for(let gr=0;gr<ge;gr++)_t&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,L,Se+gr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(P).__webglTexture,K,Dt+gr)),C.blitFramebuffer(Re,Pe,re,ue,tt,ot,re,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(L!==0||y.isRenderTargetTexture||_e.has(y)){let _n=_e.get(y),Xt=_e.get(P);Me.bindFramebuffer(C.READ_FRAMEBUFFER,fM),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,hM);for(let Kt=0;Kt<ge;Kt++)_t?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_n.__webglTexture,L,Se+Kt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_n.__webglTexture,L),yn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,K,Dt+Kt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,K),L!==0?C.blitFramebuffer(Re,Pe,re,ue,tt,ot,re,ue,C.COLOR_BUFFER_BIT,C.NEAREST):yn?C.copyTexSubImage3D(Bt,K,tt,ot,Dt+Kt,Re,Pe,re,ue):C.copyTexSubImage2D(Bt,K,tt,ot,Re,Pe,re,ue);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yn?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Bt,K,tt,ot,Dt,re,ue,ge,it,Ee,Et.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,K,tt,ot,Dt,re,ue,ge,it,Et.data):C.texSubImage3D(Bt,K,tt,ot,Dt,re,ue,ge,it,Ee,Et):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,K,tt,ot,re,ue,it,Ee,Et.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,K,tt,ot,Et.width,Et.height,it,Et.data):C.texSubImage2D(C.TEXTURE_2D,K,tt,ot,re,ue,it,Ee,Et);C.pixelStorei(C.UNPACK_ROW_LENGTH,at),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ln),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qr),C.pixelStorei(C.UNPACK_SKIP_ROWS,rn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_o),K===0&&P.generateMipmaps&&C.generateMipmap(Bt),Me.unbindTexture()},this.copyTextureToTexture3D=function(y,P,k=null,U=null,L=0){return y.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,U=arguments[1]||null,y=arguments[2],P=arguments[3],L=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,k,U,L)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){D=0,T=0,N=null,Me.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var yd=class n{clientId="YOUR_AZURE_CLIENT_ID";tenantId="common";redirectUri="http://localhost:8000/auth/callback";loginWithMicrosoft(){let e=`https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/authorize?
      client_id=${this.clientId}
      &response_type=code
      &redirect_uri=${encodeURIComponent(this.redirectUri)}
      &scope=Mail.Read Calendars.Read OnlineMeetings.Read User.Read
      &response_mode=query`;window.location.href=e}ngAfterViewInit(){this.initBackgroundAnimation()}initBackgroundAnimation(){let e=document.getElementById("animationCanvas"),t=new Ia,i=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),r=new gd({canvas:e,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement);let s=new Ua(16777215,.4);t.add(s);let o=new ka(16777215,.8);o.position.set(5,10,5),t.add(o);let a=[],c=new lr(.6,.6,.6),l=new fo({color:30932,transparent:!0,opacity:.4,roughness:.1,metalness:.6}),u=new Pa(.5),d=new fo({color:42223,transparent:!0,opacity:.4,roughness:.2,metalness:.6});for(let p=0;p<15;p++){let g=Math.random()>.5?new Zt(c,l):new Zt(u,d);g.position.set((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),t.add(g),a.push(g)}i.position.z=5;function f(){requestAnimationFrame(f),a.forEach((p,g)=>{p.rotation.x+=.005,p.rotation.y+=.005,p.position.y+=Math.sin(Date.now()*5e-4+g)*.002}),r.render(t,i)}f()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ns({type:n,selectors:[["app-login"]],decls:12,vars:0,consts:[[1,"login-container"],["id","animationCanvas"],[1,"login-card","shadow"],[1,"login-header"],["src","/assets/microsoft-logo.svg","alt","Microsoft Logo",1,"logo"],[1,"text-muted"],[1,"btn-login",3,"click"],[1,"bi","bi-microsoft"]],template:function(t,i){t&1&&(Xi(0,"div",0),vi(1,"canvas",1),Xi(2,"div",2)(3,"div",3),vi(4,"img",4),Xi(5,"h3"),cl(6,"Hi there!"),Ls(),Xi(7,"p",5),cl(8,"Sign in to continue"),Ls()(),Xi(9,"button",6),al("click",function(){return i.loginWithMicrosoft()}),vi(10,"i",7),cl(11," \xA0Continue with Microsoft "),Ls()()())},styles:[".login-container[_ngcontent-%COMP%]{position:relative;height:100vh;width:100%;display:flex;justify-content:center;align-items:center;background:linear-gradient(to right,#f4f7f9,#d9e2ec);overflow:hidden}canvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.login-card[_ngcontent-%COMP%]{position:relative;z-index:1;background:#5e5e5e34;border-radius:15px;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);padding:40px;width:400px;text-align:center;box-shadow:0 6px 20px #00000026;color:#2c3e50}.logo[_ngcontent-%COMP%]{width:100px;margin-bottom:10px}.btn-login[_ngcontent-%COMP%]{width:100%;padding:12px;font-size:16px;font-weight:600;border-radius:8px;background:#0078d4;color:#fff;border:none;cursor:pointer;transition:all .3s ease-in-out}.btn-login[_ngcontent-%COMP%]:hover{background:#005a9e}"]})};var _m=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:yd,title:"Sign In"}],aM=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ps({type:n});static \u0275inj=Ts({imports:[tp.forRoot(_m),tp]})};T_(Ll,{providers:[g0(_m)]}).catch(n=>console.error(n));
