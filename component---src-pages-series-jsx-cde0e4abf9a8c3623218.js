(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[441],{1612:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return P}});var n=e(4976),o=e.n(n),i=e(104),a=e.n(i),u=e(6415),s=e.n(u),c=e(1146),l=e.n(c),f=e(8846),p=e.n(f),d=e(8816),h=e.n(d),v=e(7294),g=e(2788),y=e(5609),m=e(5038),x=e(2213),b=e(3880),_=e.n(b),A=e(3493),w=e.n(A),j=e(1883),W=e(729);const I=g.default.div.withConfig({displayName:"SeriesList__SeriesListWrapper",componentId:"sc-1c0vrq-0"})(["margin-bottom:60px;@media (max-width:860px){padding:0 10px;}"]),E=g.default.div.withConfig({displayName:"SeriesList__SeriesWrapper",componentId:"sc-1c0vrq-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:860px){padding:0 5px;}"]),O=g.default.div.withConfig({displayName:"SeriesList__SeriesInform",componentId:"sc-1c0vrq-2"})(["display:flex;align-items:center;color:",";& > span{margin:0 5px;}"],(t=>t.theme.colors.tertiaryText)),R=g.default.p.withConfig({displayName:"SeriesList__Date",componentId:"sc-1c0vrq-3"})(["font-size:14.4px;"]),k=g.default.p.withConfig({displayName:"SeriesList__PostCount",componentId:"sc-1c0vrq-4"})(["font-size:14.4px;"]);var B=t=>{let{seriesList:r}=t;const{0:e,1:n}=(0,v.useState)(10),o=w()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&e<r.length&&setTimeout((()=>n(e+10)),300)}),250);return(0,v.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[e,r]),(0,v.useEffect)((()=>{n(10)}),[r]),v.createElement(I,null,r.slice(0,e).map(((t,n)=>v.createElement(v.Fragment,null,v.createElement(E,null,v.createElement(x.Z,{size:"bg"},v.createElement(j.Link,{to:"/series/"+_()(t.name,/\s/g,"-")},t.name)),v.createElement(O,null,v.createElement(k,null,t.posts.length," Posts"),v.createElement("span",null,"·"),v.createElement(R,null,"Last updated on ",t.lastUpdated))),e-1!==n&&r.length-1!==n&&v.createElement(W.Z,{mt:"48px",mb:"32px"})))))},S=e(1093);const F=g.default.div.withConfig({displayName:"NoContent__Wrapper",componentId:"sc-334ac1-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;height:150px;font-size:24px;font-weight:bold;color:",";"],(t=>t.theme.colors.tertiaryText));var L=t=>{let{name:r}=t;return v.createElement(F,null,"There is no ",r,".")},M=e(9349);const C=g.default.div.withConfig({displayName:"series__TagListWrapper",componentId:"sc-gipkj1-0"})(["margin-top:20px;@media (max-width:860px){padding:0 15px;}"]);var P=t=>{let{data:r}=t;const e=r.allMarkdownRemark.nodes,n=h()(p()((t=>({...t.frontmatter,slug:t.fields.slug}))),l()("series"),p()((t=>({name:t[0].series,posts:t,lastUpdated:t[0].date}))),s()((t=>new Date(t.lastUpdated))),a()((t=>t.name)),o())(e);return v.createElement(m.Z,null,v.createElement(y.Z,{title:M.title,description:M.description,url:M.siteUrl}),v.createElement(C,null,n.length>0&&v.createElement(x.Z,{size:"sm"},"There are ",n.length," series.")),0===n.length&&v.createElement(L,{name:"series"}),v.createElement(S.Z,{size:32}),v.createElement(B,{seriesList:n}))}},6425:function(t,r,e){var n=e(3118),o=e(9435);function i(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}i.prototype=n(o.prototype),i.prototype.constructor=i,t.exports=i},7548:function(t,r,e){var n=e(3118),o=e(9435);function i(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=void 0}i.prototype=n(o.prototype),i.prototype.constructor=i,t.exports=i},4174:function(t){t.exports=function(t,r,e,n){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];r(n,a,e(a),t)}return n}},7412:function(t){t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t}},7443:function(t,r,e){var n=e(2118);t.exports=function(t,r){return!!(null==t?0:t.length)&&n(t,r,0)>-1}},4865:function(t,r,e){var n=e(9465),o=e(7813),i=Object.prototype.hasOwnProperty;t.exports=function(t,r,e){var a=t[r];i.call(t,r)&&o(a,e)&&(void 0!==e||r in t)||n(t,r,e)}},1119:function(t,r,e){var n=e(9881);t.exports=function(t,r,e,o){return n(t,(function(t,n,i){r(o,t,e(t),i)})),o}},4037:function(t,r,e){var n=e(8363),o=e(3674);t.exports=function(t,r){return t&&n(r,o(r),t)}},3886:function(t,r,e){var n=e(8363),o=e(1704);t.exports=function(t,r){return t&&n(r,o(r),t)}},9465:function(t,r,e){var n=e(8777);t.exports=function(t,r,e){"__proto__"==r&&n?n(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}},5990:function(t,r,e){var n=e(6384),o=e(7412),i=e(4865),a=e(4037),u=e(3886),s=e(4626),c=e(278),l=e(8805),f=e(1911),p=e(8234),d=e(6904),h=e(4160),v=e(3824),g=e(9148),y=e(8517),m=e(1469),x=e(4144),b=e(6688),_=e(3218),A=e(2928),w=e(3674),j=e(1704),W="[object Arguments]",I="[object Function]",E="[object Object]",O={};O[W]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O[E]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[I]=O["[object WeakMap]"]=!1,t.exports=function t(r,e,R,k,B,S){var F,L=1&e,M=2&e,C=4&e;if(R&&(F=B?R(r,k,B,S):R(r)),void 0!==F)return F;if(!_(r))return r;var P=m(r);if(P){if(F=v(r),!L)return c(r,F)}else{var D=h(r),T=D==I||"[object GeneratorFunction]"==D;if(x(r))return s(r,L);if(D==E||D==W||T&&!B){if(F=M||T?{}:y(r),!L)return M?f(r,u(F,r)):l(r,a(F,r))}else{if(!O[D])return B?r:{};F=g(r,D,L)}}S||(S=new n);var z=S.get(r);if(z)return z;S.set(r,F),A(r)?r.forEach((function(n){F.add(t(n,e,R,n,r,S))})):b(r)&&r.forEach((function(n,o){F.set(o,t(n,e,R,o,r,S))}));var q=P?void 0:(C?M?d:p:M?j:w)(r);return o(q||r,(function(n,o){q&&(n=r[o=n]),i(F,o,t(n,e,R,o,r,S))})),F}},3118:function(t,r,e){var n=e(3218),o=Object.create,i=function(){function t(){}return function(r){if(!n(r))return{};if(o)return o(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();t.exports=i},760:function(t,r,e){var n=e(9881);t.exports=function(t,r){var e=[];return n(t,(function(t,n,o){r(t,n,o)&&e.push(t)})),e}},1848:function(t){t.exports=function(t,r,e,n){for(var o=t.length,i=e+(n?1:-1);n?i--:++i<o;)if(r(t[i],i,t))return i;return-1}},2118:function(t,r,e){var n=e(1848),o=e(2722),i=e(2351);t.exports=function(t,r,e){return r==r?i(t,r,e):n(t,o,e)}},5588:function(t,r,e){var n=e(4160),o=e(7005);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},2722:function(t){t.exports=function(t){return t!=t}},9221:function(t,r,e){var n=e(4160),o=e(7005);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},313:function(t,r,e){var n=e(3218),o=e(5726),i=e(3498),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var r=o(t),e=[];for(var u in t)("constructor"!=u||!r&&a.call(t,u))&&e.push(u);return e}},9435:function(t){t.exports=function(){}},8045:function(t,r,e){var n=e(6557),o=e(9250),i=o?function(t,r){return o.set(t,r),t}:n;t.exports=i},4318:function(t,r,e){var n=e(1149);t.exports=function(t){var r=new t.constructor(t.byteLength);return new n(r).set(new n(t)),r}},4626:function(t,r,e){t=e.nmd(t);var n=e(5639),o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.Buffer:void 0,u=a?a.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=u?u(e):new t.constructor(e);return t.copy(n),n}},7157:function(t,r,e){var n=e(4318);t.exports=function(t,r){var e=r?n(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}},3147:function(t){var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},419:function(t,r,e){var n=e(2705),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},7133:function(t,r,e){var n=e(4318);t.exports=function(t,r){var e=r?n(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}},2157:function(t){var r=Math.max;t.exports=function(t,e,n,o){for(var i=-1,a=t.length,u=n.length,s=-1,c=e.length,l=r(a-u,0),f=Array(c+l),p=!o;++s<c;)f[s]=e[s];for(;++i<u;)(p||i<a)&&(f[n[i]]=t[i]);for(;l--;)f[s++]=t[i++];return f}},4054:function(t){var r=Math.max;t.exports=function(t,e,n,o){for(var i=-1,a=t.length,u=-1,s=n.length,c=-1,l=e.length,f=r(a-s,0),p=Array(f+l),d=!o;++i<f;)p[i]=t[i];for(var h=i;++c<l;)p[h+c]=e[c];for(;++u<s;)(d||i<a)&&(p[h+n[u]]=t[i++]);return p}},278:function(t){t.exports=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r}},8363:function(t,r,e){var n=e(4865),o=e(9465);t.exports=function(t,r,e,i){var a=!e;e||(e={});for(var u=-1,s=r.length;++u<s;){var c=r[u],l=i?i(e[c],t[c],c,e,t):void 0;void 0===l&&(l=t[c]),a?o(e,c,l):n(e,c,l)}return e}},8805:function(t,r,e){var n=e(8363),o=e(9551);t.exports=function(t,r){return n(t,o(t),r)}},1911:function(t,r,e){var n=e(8363),o=e(1442);t.exports=function(t,r){return n(t,o(t),r)}},7991:function(t){t.exports=function(t,r){for(var e=t.length,n=0;e--;)t[e]===r&&++n;return n}},5189:function(t,r,e){var n=e(4174),o=e(1119),i=e(7206),a=e(1469);t.exports=function(t,r){return function(e,u){var s=a(e)?n:o,c=r?r():{};return s(e,t,i(u,2),c)}}},2402:function(t,r,e){var n=e(1774),o=e(5639);t.exports=function(t,r,e){var i=1&r,a=n(t);return function r(){return(this&&this!==o&&this instanceof r?a:t).apply(i?e:this,arguments)}}},1774:function(t,r,e){var n=e(3118),o=e(3218);t.exports=function(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var e=n(t.prototype),i=t.apply(e,r);return o(i)?i:e}}},6347:function(t,r,e){var n=e(6874),o=e(1774),i=e(6935),a=e(4487),u=e(893),s=e(6460),c=e(5639);t.exports=function(t,r,e){var l=o(t);return function o(){for(var f=arguments.length,p=Array(f),d=f,h=u(o);d--;)p[d]=arguments[d];var v=f<3&&p[0]!==h&&p[f-1]!==h?[]:s(p,h);return(f-=v.length)<e?a(t,r,i,o.placeholder,void 0,p,v,void 0,void 0,e-f):n(this&&this!==c&&this instanceof o?l:t,this,p)}}},3468:function(t,r,e){var n=e(7548),o=e(9021),i=e(6833),a=e(7658),u=e(1469),s=e(6528);t.exports=function(t){return o((function(r){var e=r.length,o=e,c=n.prototype.thru;for(t&&r.reverse();o--;){var l=r[o];if("function"!=typeof l)throw new TypeError("Expected a function");if(c&&!f&&"wrapper"==a(l))var f=new n([],!0)}for(o=f?o:e;++o<e;){l=r[o];var p=a(l),d="wrapper"==p?i(l):void 0;f=d&&s(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?f[a(d[0])].apply(f,d[3]):1==l.length&&s(l)?f[p]():f.thru(l)}return function(){var t=arguments,n=t[0];if(f&&1==t.length&&u(n))return f.plant(n).value();for(var o=0,i=e?r[o].apply(this,t):n;++o<e;)i=r[o].call(this,i);return i}}))}},6935:function(t,r,e){var n=e(2157),o=e(4054),i=e(7991),a=e(1774),u=e(4487),s=e(893),c=e(451),l=e(6460),f=e(5639);t.exports=function t(r,e,p,d,h,v,g,y,m,x){var b=128&e,_=1&e,A=2&e,w=24&e,j=512&e,W=A?void 0:a(r);return function I(){for(var E=arguments.length,O=Array(E),R=E;R--;)O[R]=arguments[R];if(w)var k=s(I),B=i(O,k);if(d&&(O=n(O,d,h,w)),v&&(O=o(O,v,g,w)),E-=B,w&&E<x){var S=l(O,k);return u(r,e,t,I.placeholder,p,O,S,y,m,x-E)}var F=_?p:this,L=A?F[r]:r;return E=O.length,y?O=c(O,y):j&&E>1&&O.reverse(),b&&m<E&&(O.length=m),this&&this!==f&&this instanceof I&&(L=W||a(L)),L.apply(F,O)}}},4375:function(t,r,e){var n=e(6874),o=e(1774),i=e(5639);t.exports=function(t,r,e,a){var u=1&r,s=o(t);return function r(){for(var o=-1,c=arguments.length,l=-1,f=a.length,p=Array(f+c),d=this&&this!==i&&this instanceof r?s:t;++l<f;)p[l]=a[l];for(;c--;)p[l++]=arguments[++o];return n(d,u?e:this,p)}}},4487:function(t,r,e){var n=e(6528),o=e(258),i=e(9255);t.exports=function(t,r,e,a,u,s,c,l,f,p){var d=8&r;r|=d?32:64,4&(r&=~(d?64:32))||(r&=-4);var h=[t,r,u,d?s:void 0,d?c:void 0,d?void 0:s,d?void 0:c,l,f,p],v=e.apply(void 0,h);return n(t)&&o(v,h),v.placeholder=a,i(v,t,r)}},7727:function(t,r,e){var n=e(8045),o=e(2402),i=e(6347),a=e(6935),u=e(4375),s=e(6833),c=e(3833),l=e(258),f=e(9255),p=e(554),d=Math.max;t.exports=function(t,r,e,h,v,g,y,m){var x=2&r;if(!x&&"function"!=typeof t)throw new TypeError("Expected a function");var b=h?h.length:0;if(b||(r&=-97,h=v=void 0),y=void 0===y?y:d(p(y),0),m=void 0===m?m:p(m),b-=v?v.length:0,64&r){var _=h,A=v;h=v=void 0}var w=x?void 0:s(t),j=[t,r,e,h,v,_,A,g,y,m];if(w&&c(j,w),t=j[0],r=j[1],e=j[2],h=j[3],v=j[4],!(m=j[9]=void 0===j[9]?x?0:t.length:d(j[9]-b,0))&&24&r&&(r&=-25),r&&1!=r)W=8==r||16==r?i(t,r,m):32!=r&&33!=r||v.length?a.apply(void 0,j):u(t,r,e,h);else var W=o(t,r,e);return f((w?n:l)(W,j),t,r)}},9021:function(t,r,e){var n=e(5564),o=e(5357),i=e(61);t.exports=function(t){return i(o(t,void 0,n),t+"")}},6904:function(t,r,e){var n=e(8866),o=e(1442),i=e(1704);t.exports=function(t){return n(t,i,o)}},6833:function(t,r,e){var n=e(9250),o=e(308),i=n?function(t){return n.get(t)}:o;t.exports=i},7658:function(t,r,e){var n=e(2060),o=Object.prototype.hasOwnProperty;t.exports=function(t){for(var r=t.name+"",e=n[r],i=o.call(n,r)?e.length:0;i--;){var a=e[i],u=a.func;if(null==u||u==t)return a.name}return r}},893:function(t){t.exports=function(t){return t.placeholder}},5924:function(t,r,e){var n=e(5569)(Object.getPrototypeOf,Object);t.exports=n},1442:function(t,r,e){var n=e(2488),o=e(5924),i=e(9551),a=e(479),u=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)n(r,i(t)),t=o(t);return r}:a;t.exports=u},8775:function(t){var r=/\{\n\/\* \[wrapped with (.+)\] \*/,e=/,? & /;t.exports=function(t){var n=t.match(r);return n?n[1].split(e):[]}},3824:function(t){var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},9148:function(t,r,e){var n=e(4318),o=e(7157),i=e(3147),a=e(419),u=e(7133);t.exports=function(t,r,e){var s=t.constructor;switch(r){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new s(+t);case"[object DataView]":return o(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(t,e);case"[object Map]":case"[object Set]":return new s;case"[object Number]":case"[object String]":return new s(t);case"[object RegExp]":return i(t);case"[object Symbol]":return a(t)}}},8517:function(t,r,e){var n=e(3118),o=e(5924),i=e(5726);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},3112:function(t){var r=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;t.exports=function(t,e){var n=e.length;if(!n)return t;var o=n-1;return e[o]=(n>1?"& ":"")+e[o],e=e.join(n>2?", ":" "),t.replace(r,"{\n/* [wrapped with "+e+"] */\n")}},6528:function(t,r,e){var n=e(6425),o=e(6833),i=e(7658),a=e(8111);t.exports=function(t){var r=i(t),e=a[r];if("function"!=typeof e||!(r in n.prototype))return!1;if(t===e)return!0;var u=o(e);return!!u&&t===u[0]}},3833:function(t,r,e){var n=e(2157),o=e(4054),i=e(6460),a="__lodash_placeholder__",u=128,s=Math.min;t.exports=function(t,r){var e=t[1],c=r[1],l=e|c,f=l<131,p=c==u&&8==e||c==u&&256==e&&t[7].length<=r[8]||384==c&&r[7].length<=r[8]&&8==e;if(!f&&!p)return t;1&c&&(t[2]=r[2],l|=1&e?0:4);var d=r[3];if(d){var h=t[3];t[3]=h?n(h,d,r[4]):d,t[4]=h?i(t[3],a):r[4]}return(d=r[5])&&(h=t[5],t[5]=h?o(h,d,r[6]):d,t[6]=h?i(t[5],a):r[6]),(d=r[7])&&(t[7]=d),c&u&&(t[8]=null==t[8]?r[8]:s(t[8],r[8])),null==t[9]&&(t[9]=r[9]),t[0]=r[0],t[1]=l,t}},9250:function(t,r,e){var n=e(577),o=n&&new n;t.exports=o},3498:function(t){t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},2060:function(t){t.exports={}},451:function(t,r,e){var n=e(278),o=e(5776),i=Math.min;t.exports=function(t,r){for(var e=t.length,a=i(r.length,e),u=n(t);a--;){var s=r[a];t[a]=o(s,e)?u[s]:void 0}return t}},6460:function(t){var r="__lodash_placeholder__";t.exports=function(t,e){for(var n=-1,o=t.length,i=0,a=[];++n<o;){var u=t[n];u!==e&&u!==r||(t[n]=r,a[i++]=n)}return a}},258:function(t,r,e){var n=e(8045),o=e(1275)(n);t.exports=o},9255:function(t,r,e){var n=e(8775),o=e(3112),i=e(61),a=e(7241);t.exports=function(t,r,e){var u=r+"";return i(t,o(u,a(n(u),e)))}},2351:function(t){t.exports=function(t,r,e){for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}},7241:function(t,r,e){var n=e(7412),o=e(7443),i=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];t.exports=function(t,r){return n(i,(function(e){var n="_."+e[0];r&e[1]&&!o(t,n)&&t.push(n)})),t.sort()}},1913:function(t,r,e){var n=e(6425),o=e(7548),i=e(278);t.exports=function(t){if(t instanceof n)return t.clone();var r=new o(t.__wrapped__,t.__chain__);return r.__actions__=i(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}},9514:function(t,r,e){var n=e(7727);t.exports=function(t,r,e){return r=e?void 0:r,r=t&&null==r?t.length:r,n(t,128,void 0,void 0,void 0,void 0,r)}},6678:function(t,r,e){var n=e(5990);t.exports=function(t){return n(t,4)}},87:function(t,r,e){var n=e(7727);function o(t,r,e){var i=n(t,8,void 0,void 0,void 0,void 0,void 0,r=e?void 0:r);return i.placeholder=o.placeholder,i}o.placeholder={},t.exports=o},3105:function(t,r,e){var n=e(4963),o=e(760),i=e(7206),a=e(1469);t.exports=function(t,r){return(a(t)?n:o)(t,i(r,3))}},5564:function(t,r,e){var n=e(1078);t.exports=function(t){return(null==t?0:t.length)?n(t,1):[]}},9242:function(t,r,e){var n=e(3468)();t.exports=n},4599:function(t,r,e){var n=e(8836),o=e(9306),i=Array.prototype.push;function a(t,r){return 2==r?function(r,e){return t(r,e)}:function(r){return t(r)}}function u(t){for(var r=t?t.length:0,e=Array(r);r--;)e[r]=t[r];return e}function s(t,r){return function(){var e=arguments.length;if(e){for(var n=Array(e);e--;)n[e]=arguments[e];var o=n[0]=r.apply(void 0,n);return t.apply(void 0,n),o}}}t.exports=function t(r,e,c,l){var f="function"==typeof e,p=e===Object(e);if(p&&(l=c,c=e,e=void 0),null==c)throw new TypeError;l||(l={});var d={cap:!("cap"in l)||l.cap,curry:!("curry"in l)||l.curry,fixed:!("fixed"in l)||l.fixed,immutable:!("immutable"in l)||l.immutable,rearg:!("rearg"in l)||l.rearg},h=f?c:o,v="curry"in l&&l.curry,g="fixed"in l&&l.fixed,y="rearg"in l&&l.rearg,m=f?c.runInContext():void 0,x=f?c:{ary:r.ary,assign:r.assign,clone:r.clone,curry:r.curry,forEach:r.forEach,isArray:r.isArray,isError:r.isError,isFunction:r.isFunction,isWeakMap:r.isWeakMap,iteratee:r.iteratee,keys:r.keys,rearg:r.rearg,toInteger:r.toInteger,toPath:r.toPath},b=x.ary,_=x.assign,A=x.clone,w=x.curry,j=x.forEach,W=x.isArray,I=x.isError,E=x.isFunction,O=x.isWeakMap,R=x.keys,k=x.rearg,B=x.toInteger,S=x.toPath,F=R(n.aryMethod),L={castArray:function(t){return function(){var r=arguments[0];return W(r)?t(u(r)):t.apply(void 0,arguments)}},iteratee:function(t){return function(){var r=arguments[1],e=t(arguments[0],r),n=e.length;return d.cap&&"number"==typeof r?(r=r>2?r-2:1,n&&n<=r?e:a(e,r)):e}},mixin:function(t){return function(r){var e=this;if(!E(e))return t(e,Object(r));var n=[];return j(R(r),(function(t){E(r[t])&&n.push([t,e.prototype[t]])})),t(e,Object(r)),j(n,(function(t){var r=t[1];E(r)?e.prototype[t[0]]=r:delete e.prototype[t[0]]})),e}},nthArg:function(t){return function(r){var e=r<0?1:B(r)+1;return w(t(r),e)}},rearg:function(t){return function(r,e){var n=e?e.length:0;return w(t(r,e),n)}},runInContext:function(e){return function(n){return t(r,e(n),l)}}};function M(t,r){if(d.cap){var e=n.iterateeRearg[t];if(e)return function(t,r){return z(t,(function(t){var e=r.length;return function(t,r){return 2==r?function(r,e){return t.apply(void 0,arguments)}:function(r){return t.apply(void 0,arguments)}}(k(a(t,e),r),e)}))}(r,e);var o=!f&&n.iterateeAry[t];if(o)return function(t,r){return z(t,(function(t){return"function"==typeof t?a(t,r):t}))}(r,o)}return r}function C(t,r,e){if(d.fixed&&(g||!n.skipFixed[t])){var o=n.methodSpread[t],a=o&&o.start;return void 0===a?b(r,e):function(t,r){return function(){for(var e=arguments.length,n=e-1,o=Array(e);e--;)o[e]=arguments[e];var a=o[r],u=o.slice(0,r);return a&&i.apply(u,a),r!=n&&i.apply(u,o.slice(r+1)),t.apply(this,u)}}(r,a)}return r}function P(t,r,e){return d.rearg&&e>1&&(y||!n.skipRearg[t])?k(r,n.methodRearg[t]||n.aryRearg[e]):r}function D(t,r){for(var e=-1,n=(r=S(r)).length,o=n-1,i=A(Object(t)),a=i;null!=a&&++e<n;){var u=r[e],s=a[u];null==s||E(s)||I(s)||O(s)||(a[u]=A(e==o?s:Object(s))),a=a[u]}return i}function T(r,e){var o=n.aliasToReal[r]||r,i=n.remap[o]||o,a=l;return function(r){var n=f?m:x,u=f?m[i]:e,s=_(_({},a),r);return t(n,o,u,s)}}function z(t,r){return function(){var e=arguments.length;if(!e)return t();for(var n=Array(e);e--;)n[e]=arguments[e];var o=d.rearg?0:e-1;return n[o]=r(n[o]),t.apply(void 0,n)}}function q(t,r,e){var o,i=n.aliasToReal[t]||t,a=r,c=L[i];return c?a=c(r):d.immutable&&(n.mutate.array[i]?a=s(r,u):n.mutate.object[i]?a=s(r,function(t){return function(r){return t({},r)}}(r)):n.mutate.set[i]&&(a=s(r,D))),j(F,(function(t){return j(n.aryMethod[t],(function(r){if(i==r){var e=n.methodSpread[i],u=e&&e.afterRearg;return o=u?C(i,P(i,a,t),t):P(i,C(i,a,t),t),o=function(t,r,e){return v||d.curry&&e>1?w(r,e):r}(0,o=M(i,o),t),!1}})),!o})),o||(o=a),o==r&&(o=v?w(o,1):function(){return r.apply(this,arguments)}),o.convert=T(i,r),o.placeholder=r.placeholder=e,o}if(!p)return q(e,c,h);var N=c,U=[];return j(F,(function(t){j(n.aryMethod[t],(function(t){var r=N[n.remap[t]||t];r&&U.push([t,q(t,r,N)])}))})),j(R(N),(function(t){var r=N[t];if("function"==typeof r){for(var e=U.length;e--;)if(U[e][0]==t)return;r.convert=T(t,r),U.push([t,r])}})),j(U,(function(t){N[t[0]]=t[1]})),N.convert=function(t){return N.runInContext.convert(t)(void 0)},N.placeholder=N,j(R(N),(function(t){j(n.realToAlias[t]||[],(function(r){N[r]=N[t]}))})),N}},8836:function(t,r){r.aliasToReal={each:"forEach",eachRight:"forEachRight",entries:"toPairs",entriesIn:"toPairsIn",extend:"assignIn",extendAll:"assignInAll",extendAllWith:"assignInAllWith",extendWith:"assignInWith",first:"head",conforms:"conformsTo",matches:"isMatch",property:"get",__:"placeholder",F:"stubFalse",T:"stubTrue",all:"every",allPass:"overEvery",always:"constant",any:"some",anyPass:"overSome",apply:"spread",assoc:"set",assocPath:"set",complement:"negate",compose:"flowRight",contains:"includes",dissoc:"unset",dissocPath:"unset",dropLast:"dropRight",dropLastWhile:"dropRightWhile",equals:"isEqual",identical:"eq",indexBy:"keyBy",init:"initial",invertObj:"invert",juxt:"over",omitAll:"omit",nAry:"ary",path:"get",pathEq:"matchesProperty",pathOr:"getOr",paths:"at",pickAll:"pick",pipe:"flow",pluck:"map",prop:"get",propEq:"matchesProperty",propOr:"getOr",props:"at",symmetricDifference:"xor",symmetricDifferenceBy:"xorBy",symmetricDifferenceWith:"xorWith",takeLast:"takeRight",takeLastWhile:"takeRightWhile",unapply:"rest",unnest:"flatten",useWith:"overArgs",where:"conformsTo",whereEq:"isMatch",zipObj:"zipObject"},r.aryMethod={1:["assignAll","assignInAll","attempt","castArray","ceil","create","curry","curryRight","defaultsAll","defaultsDeepAll","floor","flow","flowRight","fromPairs","invert","iteratee","memoize","method","mergeAll","methodOf","mixin","nthArg","over","overEvery","overSome","rest","reverse","round","runInContext","spread","template","trim","trimEnd","trimStart","uniqueId","words","zipAll"],2:["add","after","ary","assign","assignAllWith","assignIn","assignInAllWith","at","before","bind","bindAll","bindKey","chunk","cloneDeepWith","cloneWith","concat","conformsTo","countBy","curryN","curryRightN","debounce","defaults","defaultsDeep","defaultTo","delay","difference","divide","drop","dropRight","dropRightWhile","dropWhile","endsWith","eq","every","filter","find","findIndex","findKey","findLast","findLastIndex","findLastKey","flatMap","flatMapDeep","flattenDepth","forEach","forEachRight","forIn","forInRight","forOwn","forOwnRight","get","groupBy","gt","gte","has","hasIn","includes","indexOf","intersection","invertBy","invoke","invokeMap","isEqual","isMatch","join","keyBy","lastIndexOf","lt","lte","map","mapKeys","mapValues","matchesProperty","maxBy","meanBy","merge","mergeAllWith","minBy","multiply","nth","omit","omitBy","overArgs","pad","padEnd","padStart","parseInt","partial","partialRight","partition","pick","pickBy","propertyOf","pull","pullAll","pullAt","random","range","rangeRight","rearg","reject","remove","repeat","restFrom","result","sampleSize","some","sortBy","sortedIndex","sortedIndexOf","sortedLastIndex","sortedLastIndexOf","sortedUniqBy","split","spreadFrom","startsWith","subtract","sumBy","take","takeRight","takeRightWhile","takeWhile","tap","throttle","thru","times","trimChars","trimCharsEnd","trimCharsStart","truncate","union","uniqBy","uniqWith","unset","unzipWith","without","wrap","xor","zip","zipObject","zipObjectDeep"],3:["assignInWith","assignWith","clamp","differenceBy","differenceWith","findFrom","findIndexFrom","findLastFrom","findLastIndexFrom","getOr","includesFrom","indexOfFrom","inRange","intersectionBy","intersectionWith","invokeArgs","invokeArgsMap","isEqualWith","isMatchWith","flatMapDepth","lastIndexOfFrom","mergeWith","orderBy","padChars","padCharsEnd","padCharsStart","pullAllBy","pullAllWith","rangeStep","rangeStepRight","reduce","reduceRight","replace","set","slice","sortedIndexBy","sortedLastIndexBy","transform","unionBy","unionWith","update","xorBy","xorWith","zipWith"],4:["fill","setWith","updateWith"]},r.aryRearg={2:[1,0],3:[2,0,1],4:[3,2,0,1]},r.iterateeAry={dropRightWhile:1,dropWhile:1,every:1,filter:1,find:1,findFrom:1,findIndex:1,findIndexFrom:1,findKey:1,findLast:1,findLastFrom:1,findLastIndex:1,findLastIndexFrom:1,findLastKey:1,flatMap:1,flatMapDeep:1,flatMapDepth:1,forEach:1,forEachRight:1,forIn:1,forInRight:1,forOwn:1,forOwnRight:1,map:1,mapKeys:1,mapValues:1,partition:1,reduce:2,reduceRight:2,reject:1,remove:1,some:1,takeRightWhile:1,takeWhile:1,times:1,transform:2},r.iterateeRearg={mapKeys:[1],reduceRight:[1,0]},r.methodRearg={assignInAllWith:[1,0],assignInWith:[1,2,0],assignAllWith:[1,0],assignWith:[1,2,0],differenceBy:[1,2,0],differenceWith:[1,2,0],getOr:[2,1,0],intersectionBy:[1,2,0],intersectionWith:[1,2,0],isEqualWith:[1,2,0],isMatchWith:[2,1,0],mergeAllWith:[1,0],mergeWith:[1,2,0],padChars:[2,1,0],padCharsEnd:[2,1,0],padCharsStart:[2,1,0],pullAllBy:[2,1,0],pullAllWith:[2,1,0],rangeStep:[1,2,0],rangeStepRight:[1,2,0],setWith:[3,1,2,0],sortedIndexBy:[2,1,0],sortedLastIndexBy:[2,1,0],unionBy:[1,2,0],unionWith:[1,2,0],updateWith:[3,1,2,0],xorBy:[1,2,0],xorWith:[1,2,0],zipWith:[1,2,0]},r.methodSpread={assignAll:{start:0},assignAllWith:{start:0},assignInAll:{start:0},assignInAllWith:{start:0},defaultsAll:{start:0},defaultsDeepAll:{start:0},invokeArgs:{start:2},invokeArgsMap:{start:2},mergeAll:{start:0},mergeAllWith:{start:0},partial:{start:1},partialRight:{start:1},without:{start:1},zipAll:{start:0}},r.mutate={array:{fill:!0,pull:!0,pullAll:!0,pullAllBy:!0,pullAllWith:!0,pullAt:!0,remove:!0,reverse:!0},object:{assign:!0,assignAll:!0,assignAllWith:!0,assignIn:!0,assignInAll:!0,assignInAllWith:!0,assignInWith:!0,assignWith:!0,defaults:!0,defaultsAll:!0,defaultsDeep:!0,defaultsDeepAll:!0,merge:!0,mergeAll:!0,mergeAllWith:!0,mergeWith:!0},set:{set:!0,setWith:!0,unset:!0,update:!0,updateWith:!0}},r.realToAlias=function(){var t=Object.prototype.hasOwnProperty,e=r.aliasToReal,n={};for(var o in e){var i=e[o];t.call(n,i)?n[i].push(o):n[i]=[o]}return n}(),r.remap={assignAll:"assign",assignAllWith:"assignWith",assignInAll:"assignIn",assignInAllWith:"assignInWith",curryN:"curry",curryRightN:"curryRight",defaultsAll:"defaults",defaultsDeepAll:"defaultsDeep",findFrom:"find",findIndexFrom:"findIndex",findLastFrom:"findLast",findLastIndexFrom:"findLastIndex",getOr:"get",includesFrom:"includes",indexOfFrom:"indexOf",invokeArgs:"invoke",invokeArgsMap:"invokeMap",lastIndexOfFrom:"lastIndexOf",mergeAll:"merge",mergeAllWith:"mergeWith",padChars:"pad",padCharsEnd:"padEnd",padCharsStart:"padStart",propertyOf:"get",rangeStep:"range",rangeStepRight:"rangeRight",restFrom:"rest",spreadFrom:"spread",trimChars:"trim",trimCharsEnd:"trimEnd",trimCharsStart:"trimStart",zipAll:"zip"},r.skipFixed={castArray:!0,flow:!0,flowRight:!0,iteratee:!0,mixin:!0,rearg:!0,runInContext:!0},r.skipRearg={add:!0,assign:!0,assignIn:!0,bind:!0,bindKey:!0,concat:!0,difference:!0,divide:!0,eq:!0,gt:!0,gte:!0,isEqual:!0,lt:!0,lte:!0,matchesProperty:!0,merge:!0,multiply:!0,overArgs:!0,partial:!0,partialRight:!0,propertyOf:!0,random:!0,range:!0,rangeRight:!0,subtract:!0,zip:!0,zipObject:!0,zipObjectDeep:!0}},4269:function(t,r,e){t.exports={ary:e(9514),assign:e(4037),clone:e(6678),curry:e(87),forEach:e(7412),isArray:e(1469),isError:e(4647),isFunction:e(3560),isWeakMap:e(1018),iteratee:e(2594),keys:e(280),rearg:e(3678),toInteger:e(554),toPath:e(84)}},2822:function(t,r,e){var n=e(4599),o=e(4269);t.exports=function(t,r,e){return n(o,t,r,e)}},104:function(t,r,e){var n=e(2822)("filter",e(3105));n.placeholder=e(9306),t.exports=n},8816:function(t,r,e){var n=e(2822)("flow",e(9242));n.placeholder=e(9306),t.exports=n},1146:function(t,r,e){var n=e(2822)("groupBy",e(7739));n.placeholder=e(9306),t.exports=n},8846:function(t,r,e){var n=e(2822)("map",e(5161));n.placeholder=e(9306),t.exports=n},9306:function(t){t.exports={}},4976:function(t,r,e){var n=e(2822)("reverse",e(1351));n.placeholder=e(9306),t.exports=n},6415:function(t,r,e){var n=e(2822)("sortBy",e(9734));n.placeholder=e(9306),t.exports=n},7739:function(t,r,e){var n=e(9465),o=e(5189),i=Object.prototype.hasOwnProperty,a=o((function(t,r,e){i.call(t,e)?t[e].push(r):n(t,e,[r])}));t.exports=a},4647:function(t,r,e){var n=e(4239),o=e(7005),i=e(8630);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Error]"==r||"[object DOMException]"==r||"string"==typeof t.message&&"string"==typeof t.name&&!i(t)}},6688:function(t,r,e){var n=e(5588),o=e(1717),i=e(1167),a=i&&i.isMap,u=a?o(a):n;t.exports=u},8630:function(t,r,e){var n=e(4239),o=e(5924),i=e(7005),a=Function.prototype,u=Object.prototype,s=a.toString,c=u.hasOwnProperty,l=s.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=n(t))return!1;var r=o(t);if(null===r)return!0;var e=c.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&s.call(e)==l}},2928:function(t,r,e){var n=e(9221),o=e(1717),i=e(1167),a=i&&i.isSet,u=a?o(a):n;t.exports=u},1018:function(t,r,e){var n=e(4160),o=e(7005);t.exports=function(t){return o(t)&&"[object WeakMap]"==n(t)}},2594:function(t,r,e){var n=e(5990),o=e(7206);t.exports=function(t){return o("function"==typeof t?t:n(t,1))}},1704:function(t,r,e){var n=e(4636),o=e(313),i=e(8612);t.exports=function(t){return i(t)?n(t,!0):o(t)}},5161:function(t,r,e){var n=e(9932),o=e(7206),i=e(9199),a=e(1469);t.exports=function(t,r){return(a(t)?n:i)(t,o(r,3))}},308:function(t){t.exports=function(){}},3678:function(t,r,e){var n=e(7727),o=e(9021),i=o((function(t,r){return n(t,256,void 0,void 0,void 0,r)}));t.exports=i},3880:function(t,r,e){var n=e(9833);t.exports=function(){var t=arguments,r=n(t[0]);return t.length<3?r:r.replace(t[1],t[2])}},1351:function(t){var r=Array.prototype.reverse;t.exports=function(t){return null==t?t:r.call(t)}},8601:function(t,r,e){var n=e(4841),o=1/0;t.exports=function(t){return t?(t=n(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,r,e){var n=e(8601);t.exports=function(t){var r=n(t),e=r%1;return r==r?e?r-e:r:0}},84:function(t,r,e){var n=e(9932),o=e(278),i=e(1469),a=e(3448),u=e(5514),s=e(327),c=e(9833);t.exports=function(t){return i(t)?n(t,s):a(t)?[t]:o(u(c(t)))}},8111:function(t,r,e){var n=e(6425),o=e(7548),i=e(9435),a=e(1469),u=e(7005),s=e(1913),c=Object.prototype.hasOwnProperty;function l(t){if(u(t)&&!a(t)&&!(t instanceof n)){if(t instanceof o)return t;if(c.call(t,"__wrapped__"))return s(t)}return new o(t)}l.prototype=i.prototype,l.prototype.constructor=l,t.exports=l}}]);
//# sourceMappingURL=component---src-pages-series-jsx-cde0e4abf9a8c3623218.js.map