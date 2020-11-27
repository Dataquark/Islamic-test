(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fR(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.d1(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cO:function cO(){},
eF:function(a,b,c,d){P.cS(b,"start")
P.cS(c,"end")
if(b>c)H.a7(P.cR(b,0,c,"start",null))
return new H.aG(a,b,c,d.h("aG<0>"))},
ey:function(a,b,c,d){if(u.R.b(a))return new H.ar(a,b,c.h("@<0>").n(d).h("ar<1,2>"))
return new H.a3(a,b,c.h("@<0>").n(d).h("a3<1,2>"))},
ew:function(){return new P.bj("No element")},
q:function q(){},
S:function S(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a2:function a2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
e4:function(a){var t,s=H.e3(a)
if(s!=null)return s
t="minified:"+a
return t},
fG:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
h:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a8(a)
if(typeof t!="string")throw H.f(H.dO(a))
return t},
aD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bV:function(a){return H.ez(a)},
ez:function(a){var t,s,r
if(a instanceof P.l)return H.z(H.X(a),null)
if(J.aY(a)===C.v||u.D.b(a)){t=C.f(a)
if(H.dl(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.dl(r))return r}}return H.z(H.X(a),null)},
dl:function(a){var t=a!=="Object"&&a!==""
return t},
fB:function(a){throw H.f(H.dO(a))},
t:function(a,b){if(a==null)J.am(a)
throw H.f(H.cr(a,b))},
cr:function(a,b){var t,s,r="index"
if(!H.dJ(b))return new P.G(!0,b,r,null)
t=H.bG(J.am(a))
if(!(b<0)){if(typeof t!=="number")return H.fB(t)
s=b>=t}else s=!0
if(s)return P.b9(b,a,r,null,t)
return P.eB(b,r)},
dO:function(a){return new P.G(!0,a,null,null)},
f:function(a){var t,s
if(a==null)a=new P.bf()
t=new Error()
t.dartException=a
s=H.fS
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fS:function(){return J.a8(this.dartException)},
a7:function(a){throw H.f(a)},
fQ:function(a){throw H.f(P.aa(a))},
O:function(a){var t,s,r,q,p,o
a=H.fN(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.a([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dq:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dk:function(a,b){return new H.be(a,b==null?null:b.method)},
cP:function(a,b){var t=b==null,s=t?null:b.method
return new H.bd(a,s,t?null:b.receiver)},
b0:function(a){if(a==null)return new H.bU(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.a6(a,a.dartException)
return H.fo(a)},
a6:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.w.ab(s,16)&8191)===10)switch(r){case 438:return H.a6(a,H.cP(H.h(t)+" (Error "+r+")",f))
case 445:case 5007:return H.a6(a,H.dk(H.h(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.e6()
p=$.e7()
o=$.e8()
n=$.e9()
m=$.ec()
l=$.ed()
k=$.eb()
$.ea()
j=$.ef()
i=$.ee()
h=q.w(t)
if(h!=null)return H.a6(a,H.cP(H.ai(t),h))
else{h=p.w(t)
if(h!=null){h.method="call"
return H.a6(a,H.cP(H.ai(t),h))}else{h=o.w(t)
if(h==null){h=n.w(t)
if(h==null){h=m.w(t)
if(h==null){h=l.w(t)
if(h==null){h=k.w(t)
if(h==null){h=n.w(t)
if(h==null){h=j.w(t)
if(h==null){h=i.w(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.a6(a,H.dk(H.ai(t),h))}}return H.a6(a,new H.bq(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.aE()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.a6(a,new P.G(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.aE()
return a},
al:function(a){var t
if(a==null)return new H.aO(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.aO(a)},
fy:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.length
for(t=H.P(b),s=t.c,t=t.Q[1],r=0;r<h;){q=r+1
p=a[r]
r=q+1
o=a[q]
s.a(p)
t.a(o)
if(typeof p=="string"){n=b.b
if(n==null)n=b.b=b.L()
m=b.E(n,p)
if(m==null)b.H(n,p,b.F(p,o))
else m.b=o}else if(typeof p=="number"&&(p&0x3ffffff)===p){l=b.c
if(l==null)l=b.c=b.L()
m=b.E(l,p)
if(m==null)b.H(l,p,b.F(p,o))
else m.b=o}else{k=b.d
if(k==null)k=b.d=b.L()
j=J.cL(p)&0x3ffffff
i=b.X(k,j)
if(i==null)b.H(k,j,[b.F(p,o)])
else{q=b.a0(i,p)
if(q>=0)i[q].b=o
else i.push(b.F(p,o))}}}return b},
fF:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.bG(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.c5("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fF)
a.$identity=t
return t},
et:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bk().constructor.prototype):Object.create(new H.a9(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.K
if(typeof s!=="number")return s.p()
$.K=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.df(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.ep(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.df(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
ep:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dT,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
t=c?H.en:H.em
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.f("Error in functionType of tearoff")},
eq:function(a,b,c,d){var t=H.de
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
df:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.es(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.eq(s,!q,t,b)
if(s===0){q=$.K
if(typeof q!=="number")return q.p()
$.K=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.h(H.cM())+";return "+o+"."+H.h(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.K
if(typeof q!=="number")return q.p()
$.K=q+1
n+=q
return new Function("return function("+n+"){return this."+H.h(H.cM())+"."+H.h(t)+"("+n+");}")()},
er:function(a,b,c,d){var t=H.de,s=H.eo
switch(b?-1:a){case 0:throw H.f(new H.bh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
es:function(a,b){var t,s,r,q,p,o,n=H.cM(),m=$.dc
if(m==null)m=$.dc=H.db("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.er(s,!q,t,b)
if(s===1){q="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+m+");"
p=$.K
if(typeof p!=="number")return p.p()
$.K=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+m+", "+o+");"
p=$.K
if(typeof p!=="number")return p.p()
$.K=p+1
return new Function(q+p+"}")()},
d1:function(a,b,c,d,e,f,g){return H.et(a,b,c,d,!!e,!!f,g)},
em:function(a,b){return H.bF(v.typeUniverse,H.X(a.a),b)},
en:function(a,b){return H.bF(v.typeUniverse,H.X(a.c),b)},
de:function(a){return a.a},
eo:function(a){return a.c},
cM:function(){var t=$.dd
return t==null?$.dd=H.db("self"):t},
db:function(a){var t,s,r,q=new H.a9("self","target","receiver","name"),p=J.ex(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.f(P.ek("Field name "+a+" not found."))},
fu:function(a){if(a==null)H.fq("boolean expression must not be null")
return a},
fq:function(a){throw H.f(new H.bs(a))},
fR:function(a){throw H.f(new P.b5(a))},
fA:function(a){return v.getIsolateTag(a)},
hv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fI:function(a){var t,s,r,q,p,o=H.ai($.dS.$1(a)),n=$.cs[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cy[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.cY($.dN.$2(a,o))
if(r!=null){n=$.cs[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cy[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.cB(t)
$.cs[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cy[o]=t
return t}if(q==="-"){p=H.cB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dY(a,t)
if(q==="*")throw H.f(P.dr(o))
if(v.leafTags[o]===true){p=H.cB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dY(a,t)},
dY:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.d5(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.d5(a,!1,null,!!a.$ibc)},
fJ:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cB(t)
else return J.d5(t,c,null,null)},
fD:function(){if(!0===$.d4)return
$.d4=!0
H.fE()},
fE:function(){var t,s,r,q,p,o,n,m
$.cs=Object.create(null)
$.cy=Object.create(null)
H.fC()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dZ.$1(p)
if(o!=null){n=H.fJ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fC:function(){var t,s,r,q,p,o,n=C.m()
n=H.ak(C.n,H.ak(C.o,H.ak(C.h,H.ak(C.h,H.ak(C.p,H.ak(C.q,H.ak(C.r(C.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dS=new H.cv(q)
$.dN=new H.cw(p)
$.dZ=new H.cx(o)},
ak:function(a,b){return a(b)||b},
fN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bY:function bY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
be:function be(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a){this.a=a},
bU:function bU(a){this.a=a},
aO:function aO(a){this.a=a
this.b=null},
Z:function Z(){},
bn:function bn(){},
bk:function bk(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bh:function bh(a){this.a=a},
bs:function bs(a){this.a=a},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bQ:function bQ(a,b){this.a=a
this.b=b
this.c=null},
ax:function ax(a,b){this.a=a
this.$ti=b},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cv:function cv(a){this.a=a},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
eE:function(a,b){var t=b.c
return t==null?b.c=H.cW(a,b.z,!0):t},
dm:function(a,b){var t=b.c
return t==null?b.c=H.aQ(a,"at",[b.z]):t},
dn:function(a){var t=a.y
if(t===6||t===7||t===8)return H.dn(a.z)
return t===11||t===12},
eD:function(a){return a.cy},
cu:function(a){return H.cX(v.typeUniverse,a,!1)},
V:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.V(a,t,c,a0)
if(s===t)return b
return H.dC(a,s,!0)
case 7:t=b.z
s=H.V(a,t,c,a0)
if(s===t)return b
return H.cW(a,s,!0)
case 8:t=b.z
s=H.V(a,t,c,a0)
if(s===t)return b
return H.dB(a,s,!0)
case 9:r=b.Q
q=H.aX(a,r,c,a0)
if(q===r)return b
return H.aQ(a,b.z,q)
case 10:p=b.z
o=H.V(a,p,c,a0)
n=b.Q
m=H.aX(a,n,c,a0)
if(o===p&&m===n)return b
return H.cU(a,o,m)
case 11:l=b.z
k=H.V(a,l,c,a0)
j=b.Q
i=H.fl(a,j,c,a0)
if(k===l&&i===j)return b
return H.dA(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.aX(a,h,c,a0)
p=b.z
o=H.V(a,p,c,a0)
if(g===h&&o===p)return b
return H.cV(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.f(P.bL("Attempted to substitute unexpected RTI kind "+d))}},
aX:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.V(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
fm:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.V(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
fl:function(a,b,c,d){var t,s=b.a,r=H.aX(a,s,c,d),q=b.b,p=H.aX(a,q,c,d),o=b.c,n=H.fm(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bx()
t.a=r
t.b=p
t.c=n
return t},
a:function(a,b){a[v.arrayRti]=b
return a},
fw:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.dT(t)
return a.$S()}return null},
dV:function(a,b){var t
if(H.dn(b))if(a instanceof H.Z){t=H.fw(a)
if(t!=null)return t}return H.X(a)},
X:function(a){var t
if(a instanceof P.l){t=a.$ti
return t!=null?t:H.cZ(a)}if(Array.isArray(a))return H.aT(a)
return H.cZ(J.aY(a))},
aT:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
P:function(a){var t=a.$ti
return t!=null?t:H.cZ(a)},
cZ:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.f6(a,t)},
f6:function(a,b){var t=a instanceof H.Z?a.__proto__.__proto__.constructor:b,s=H.eZ(v.typeUniverse,t.name)
b.$ccache=s
return s},
dT:function(a){var t,s,r
H.bG(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.cX(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
f5:function(a){var t,s,r=this,q=u.K
if(r===q)return H.aU(r,a,H.f9)
if(!H.Q(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.aU(r,a,H.fc)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.dJ
else if(t===u.W||t===u.x)s=H.f8
else if(t===u.U)s=H.fa
else s=t===u.y?H.dH:null
if(s!=null)return H.aU(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.fH)){r.r="$i"+q
return H.aU(r,a,H.fb)}}else if(q===7)return H.aU(r,a,H.f3)
return H.aU(r,a,H.f1)},
aU:function(a,b,c){a.b=c
return a.b(b)},
f4:function(a){var t,s,r=this
if(!H.Q(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.f0
else if(r===u.K)s=H.f_
else s=H.f2
r.a=s
return r.a(a)},
ff:function(a){var t,s=a.y
if(!H.Q(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
f1:function(a){var t=this
if(a==null)return H.ff(t)
return H.u(v.typeUniverse,H.dV(a,t),null,t,null)},
f3:function(a){if(a==null)return!0
return this.z.b(a)},
fb:function(a){var t=this,s=t.r
if(a instanceof P.l)return!!a[s]
return!!J.aY(a)[s]},
hu:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.dF(a,t)},
f2:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.dF(a,t)},
dF:function(a,b){throw H.f(H.dz(H.dt(a,H.dV(a,b),H.z(b,null))))},
fv:function(a,b,c,d){var t=null
if(H.u(v.typeUniverse,a,t,b,t))return a
throw H.f(H.dz("The type argument '"+H.h(H.z(a,t))+"' is not a subtype of the type variable bound '"+H.h(H.z(b,t))+"' of type variable '"+H.h(c)+"' in '"+H.h(d)+"'."))},
dt:function(a,b,c){var t=P.b6(a),s=H.z(b==null?H.X(a):b,null)
return t+": type '"+H.h(s)+"' is not a subtype of type '"+H.h(c)+"'"},
dz:function(a){return new H.aP("TypeError: "+a)},
y:function(a,b){return new H.aP("TypeError: "+H.dt(a,null,b))},
f9:function(a){return a!=null},
f_:function(a){return a},
fc:function(a){return!0},
f0:function(a){return a},
dH:function(a){return!0===a||!1===a},
hi:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.y(a,"bool"))},
hk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.y(a,"bool"))},
hj:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.y(a,"bool?"))},
hl:function(a){if(typeof a=="number")return a
throw H.f(H.y(a,"double"))},
hn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.y(a,"double"))},
hm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.y(a,"double?"))},
dJ:function(a){return typeof a=="number"&&Math.floor(a)===a},
ho:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.y(a,"int"))},
bG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.y(a,"int"))},
hp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.y(a,"int?"))},
f8:function(a){return typeof a=="number"},
hq:function(a){if(typeof a=="number")return a
throw H.f(H.y(a,"num"))},
hs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.y(a,"num"))},
hr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.y(a,"num?"))},
fa:function(a){return typeof a=="string"},
ht:function(a){if(typeof a=="string")return a
throw H.f(H.y(a,"String"))},
ai:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.y(a,"String"))},
cY:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.y(a,"String?"))},
fi:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.p(s,H.z(a[r],b))
return t},
dG:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.a([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.l(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.t(a5,j)
m=C.c.p(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.p(" extends ",H.z(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.z(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.p(a2,H.z(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.p(a2,H.z(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.d8(H.z(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.h(a0)},
z:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.z(a.z,b)
return t}if(m===7){s=a.z
t=H.z(s,b)
r=s.y
return J.d8(r===11||r===12?C.c.p("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.h(H.z(a.z,b))+">"
if(m===9){q=H.fn(a.z)
p=a.Q
return p.length!==0?q+("<"+H.fi(p,b)+">"):q}if(m===11)return H.dG(a,b,null)
if(m===12)return H.dG(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.t(b,o)
return b[o]}return"?"},
fn:function(a){var t,s=H.e3(a)
if(s!=null)return s
t="minified:"+a
return t},
dD:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eZ:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cX(a,b,!1)
else if(typeof n=="number"){t=n
s=H.aR(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.aQ(a,b,r)
o[b]=p
return p}else return n},
eX:function(a,b){return H.dE(a.tR,b)},
eW:function(a,b){return H.dE(a.eT,b)},
cX:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.dy(H.dw(a,null,b,c))
s.set(b,t)
return t},
bF:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.dy(H.dw(a,b,c,!0))
r.set(c,s)
return s},
eY:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cU(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
U:function(a,b){b.a=H.f4
b.b=H.f5
return b},
aR:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.D(null,null)
t.y=b
t.cy=c
s=H.U(a,t)
a.eC.set(c,s)
return s},
dC:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.eU(a,b,s,c)
a.eC.set(s,t)
return t},
eU:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.Q(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.D(null,null)
r.y=6
r.z=b
r.cy=c
return H.U(a,r)},
cW:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eT(a,b,s,c)
a.eC.set(s,t)
return t},
eT:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.Q(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.cz(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.cz(r.z))return r
else return H.eE(a,b)}}q=new H.D(null,null)
q.y=7
q.z=b
q.cy=c
return H.U(a,q)},
dB:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.eR(a,b,s,c)
a.eC.set(s,t)
return t},
eR:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.Q(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.aQ(a,"at",[b])
else if(b===u.P||b===u.T)return u.w}r=new H.D(null,null)
r.y=8
r.z=b
r.cy=c
return H.U(a,r)},
eV:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.D(null,null)
t.y=13
t.z=b
t.cy=r
s=H.U(a,t)
a.eC.set(r,s)
return s},
bE:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
eQ:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
aQ:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bE(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.D(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.U(a,s)
a.eC.set(q,r)
return r},
cU:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.bE(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.D(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.U(a,p)
a.eC.set(r,o)
return o},
dA:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.bE(n)
if(k>0){t=m>0?",":""
s=H.bE(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.eQ(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.D(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.U(a,p)
a.eC.set(r,s)
return s},
cV:function(a,b,c,d){var t,s=b.cy+("<"+H.bE(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.eS(a,b,c,s,d)
a.eC.set(s,t)
return t},
eS:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.V(a,b,s,0)
n=H.aX(a,c,s,0)
return H.cV(a,o,n,c!==n)}}m=new H.D(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.U(a,m)},
dw:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dy:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.eL(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.dx(a,s,h,g,!1)
else if(r===46)s=H.dx(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.T(a.u,a.e,g.pop()))
break
case 94:g.push(H.eV(a.u,g.pop()))
break
case 35:g.push(H.aR(a.u,5,"#"))
break
case 64:g.push(H.aR(a.u,2,"@"))
break
case 126:g.push(H.aR(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cT(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.aQ(q,o,p))
else{n=H.T(q,a.e,o)
switch(n.y){case 11:g.push(H.cV(q,n,p,a.n))
break
default:g.push(H.cU(q,n,p))
break}}break
case 38:H.eM(a,g)
break
case 42:m=a.u
g.push(H.dC(m,H.T(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cW(m,H.T(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.dB(m,H.T(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.bx()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cT(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.dA(q,H.T(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cT(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.eO(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.T(a.u,a.e,i)},
eL:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dx:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.dD(t,p.z)[q]
if(o==null)H.a7('No "'+q+'" in "'+H.eD(p)+'"')
d.push(H.bF(t,p,o))}else d.push(q)
return n},
eM:function(a,b){var t=b.pop()
if(0===t){b.push(H.aR(a.u,1,"0&"))
return}if(1===t){b.push(H.aR(a.u,4,"1&"))
return}throw H.f(P.bL("Unexpected extended operation "+H.h(t)))},
T:function(a,b,c){if(typeof c=="string")return H.aQ(a,c,a.sEA)
else if(typeof c=="number")return H.eN(a,b,c)
else return c},
cT:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.T(a,b,c[t])},
eO:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.T(a,b,c[t])},
eN:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.f(P.bL("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.f(P.bL("Bad index "+c+" for "+b.i(0)))},
u:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.Q(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.Q(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.u(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.u(a,b.z,c,d,e)
if(q===6){t=d.z
return H.u(a,b,c,t,e)}if(s===8){if(!H.u(a,b.z,c,d,e))return!1
return H.u(a,H.dm(a,b),c,d,e)}if(s===7){t=H.u(a,b.z,c,d,e)
return t}if(q===8){if(H.u(a,b,c,d.z,e))return!0
return H.u(a,b,c,H.dm(a,d),e)}if(q===7){t=H.u(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.L)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.u(a,l,c,k,e)||!H.u(a,k,e,l,c))return!1}return H.dI(a,b.z,c,d.z,e)}if(q===11){if(b===u.L)return!0
if(t)return!1
return H.dI(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.f7(a,b,c,d,e)}return!1},
dI:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.u(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.u(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.u(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.u(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.u(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
f7:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.u(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.dD(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.u(a,H.bF(a,b,m[q]),c,s[q],e))return!1
return!0},
cz:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.Q(a))if(s!==7)if(!(s===6&&H.cz(a.z)))t=s===8&&H.cz(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fH:function(a){var t
if(!H.Q(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
Q:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
dE:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bx:function bx(){this.c=this.b=this.a=null},
bv:function bv(){},
aP:function aP(a){this.a=a},
e3:function(a){return v.mangledGlobalNames[a]},
fM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
d5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bJ:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.d4==null){H.fD()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.f(P.dr("Return interceptor for "+H.h(t(a,p))))}r=a.constructor
q=r==null?null:r[J.dh()]
if(q!=null)return q
q=H.fI(a)
if(q!=null)return q
if(typeof a=="function")return C.y
t=Object.getPrototypeOf(a)
if(t==null)return C.j
if(t===Object.prototype)return C.j
if(typeof r=="function"){Object.defineProperty(r,J.dh(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
dh:function(){var t=$.dv
return t==null?$.dv=v.getIsolateTag("_$dart_js"):t},
ex:function(a,b){a.fixed$length=Array
return a},
aY:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bb.prototype}if(typeof a=="string")return J.a0.prototype
if(a==null)return J.ad.prototype
if(typeof a=="boolean")return J.ba.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bJ(a)},
fz:function(a){if(typeof a=="number")return J.av.prototype
if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bJ(a)},
d2:function(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bJ(a)},
dQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bJ(a)},
dR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.l)return a
return J.bJ(a)},
d8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fz(a).p(a,b)},
d9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aY(a).D(a,b)},
b1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d2(a).q(a,b)},
eg:function(a,b,c,d){return J.dR(a).a7(a,b,c,d)},
eh:function(a,b){return J.dQ(a).A(a,b)},
cL:function(a){return J.aY(a).gt(a)},
ei:function(a){return J.dQ(a).gu(a)},
am:function(a){return J.d2(a).gj(a)},
ej:function(a){return J.dR(a).ga1(a)},
a8:function(a){return J.aY(a).i(a)},
A:function A(){},
ba:function ba(){},
ad:function ad(){},
R:function R(){},
bg:function bg(){},
aH:function aH(){},
I:function I(){},
v:function v(a){this.$ti=a},
bP:function bP(a){this.$ti=a},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
av:function av(){},
au:function au(){},
bb:function bb(){},
a0:function a0(){}},P={
eG:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.fr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bI(new P.c0(r),1)).observe(t,{childList:true})
return new P.c_(r,t,s)}else if(self.setImmediate!=null)return P.fs()
return P.ft()},
eH:function(a){self.scheduleImmediate(H.bI(new P.c1(u.M.a(a)),0))},
eI:function(a){self.setImmediate(H.bI(new P.c2(u.M.a(a)),0))},
eJ:function(a){u.M.a(a)
P.eP(0,a)},
eP:function(a,b){var t=new P.cj()
t.a6(a,b)
return t},
eK:function(a,b){var t,s,r
b.a=1
try{a.a3(new P.c7(b),new P.c8(b),u.P)}catch(r){t=H.b0(r)
s=H.al(r)
P.fO(new P.c9(b,t,s))}},
du:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.M()
b.a=a.a
b.c=a.c
P.aM(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.Z(r)}},
aM:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.cl(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aM(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.cl(d,d,l.b,k.a,k.b)
return}g=$.r
if(g!==h)$.r=h
else g=d
b=b.c
if((b&15)===8)new P.cd(q,c,p).$0()
else if(j){if((b&1)!==0)new P.cc(q,k).$0()}else if((b&2)!==0)new P.cb(c,q).$0()
if(g!=null)$.r=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.G(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.du(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.G(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
fg:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.f(P.da(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fe:function(){var t,s
for(t=$.aj;t!=null;t=$.aj){$.aW=null
s=t.b
$.aj=s
if(s==null)$.aV=null
t.a.$0()}},
fk:function(){$.d_=!0
try{P.fe()}finally{$.aW=null
$.d_=!1
if($.aj!=null)$.d7().$1(P.dP())}},
dM:function(a){var t=new P.bt(a),s=$.aV
if(s==null){$.aj=$.aV=t
if(!$.d_)$.d7().$1(P.dP())}else $.aV=s.b=t},
fj:function(a){var t,s,r,q=$.aj
if(q==null){P.dM(a)
$.aW=$.aV
return}t=new P.bt(a)
s=$.aW
if(s==null){t.b=q
$.aj=$.aW=t}else{r=s.b
t.b=r
$.aW=s.b=t
if(r==null)$.aV=t}},
fO:function(a){var t=null,s=$.r
if(C.b===s){P.cn(t,t,C.b,a)
return}P.cn(t,t,s,u.M.a(s.a_(a)))},
bM:function(a,b){var t=b==null?P.el(a):b
if(a==null)H.a7(new P.G(!1,null,"error","Must not be null"))
return new P.ap(a,t)},
el:function(a){var t
if(u.C.b(a)){t=a.gI()
if(t!=null)return t}return C.u},
cl:function(a,b,c,d,e){P.fj(new P.cm(d,e))},
dK:function(a,b,c,d,e){var t,s=$.r
if(s===c)return d.$0()
$.r=c
t=s
try{s=d.$0()
return s}finally{$.r=t}},
dL:function(a,b,c,d,e,f,g){var t,s=$.r
if(s===c)return d.$1(e)
$.r=c
t=s
try{s=d.$1(e)
return s}finally{$.r=t}},
fh:function(a,b,c,d,e,f,g,h,i){var t,s=$.r
if(s===c)return d.$2(e,f)
$.r=c
t=s
try{s=d.$2(e,f)
return s}finally{$.r=t}},
cn:function(a,b,c,d){var t
u.M.a(d)
t=C.b!==c
if(t)d=!(!t||!1)?c.a_(d):c.ad(d,u.H)
P.dM(d)},
c0:function c0(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
cj:function cj(){},
ck:function ck(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
c6:function c6(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a){this.a=a},
cc:function cc(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a
this.b=null},
aF:function aF(){},
bW:function bW(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
bl:function bl(){},
ap:function ap(a,b){this.a=a
this.b=b},
aS:function aS(){},
cm:function cm(a,b){this.a=a
this.b=b},
bC:function bC(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
b:function(a,b,c){return b.h("@<0>").n(c).h("di<1,2>").a(H.fy(a,new H.aw(b.h("@<0>").n(c).h("aw<1,2>"))))},
ev:function(a,b,c){var t,s
if(P.d0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.a([],u.s)
C.a.l($.B,a)
try{P.fd(a,t)}finally{if(0>=$.B.length)return H.t($.B,-1)
$.B.pop()}s=P.dp(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dg:function(a,b,c){var t,s
if(P.d0(a))return b+"..."+c
t=new P.bm(b)
C.a.l($.B,a)
try{s=t
s.a=P.dp(s.a,a,", ")}finally{if(0>=$.B.length)return H.t($.B,-1)
$.B.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
d0:function(a){var t,s
for(t=$.B.length,s=0;s<t;++s)if(a===$.B[s])return!0
return!1},
fd:function(a,b){var t,s,r,q,p,o,n,m=a.gu(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.k())return
t=H.h(m.gm())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.k()){if(k<=5)return
if(0>=b.length)return H.t(b,-1)
s=b.pop()
if(0>=b.length)return H.t(b,-1)
r=b.pop()}else{q=m.gm();++k
if(!m.k()){if(k<=4){C.a.l(b,H.h(q))
return}s=H.h(q)
if(0>=b.length)return H.t(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gm();++k
for(;m.k();q=p,p=o){o=m.gm();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.t(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.h(q)
s=H.h(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.t(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
dj:function(a){var t,s={}
if(P.d0(a))return"{...}"
t=new P.bm("")
try{C.a.l($.B,a)
t.a+="{"
s.a=!0
a.v(0,new P.bS(s,t))
t.a+="}"}finally{if(0>=$.B.length)return H.t($.B,-1)
$.B.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
az:function az(){},
x:function x(){},
aA:function aA(){},
bS:function bS(a,b){this.a=a
this.b=b},
ae:function ae(){},
bT:function bT(a){this.a=a},
aN:function aN(){},
eu:function(a){if(a instanceof H.Z)return a.i(0)
return"Instance of '"+H.h(H.bV(a))+"'"},
dp:function(a,b,c){var t=J.ei(b)
if(!t.k())return a
if(c.length===0){do a+=H.h(t.gm())
while(t.k())}else{a+=H.h(t.gm())
for(;t.k();)a=a+c+H.h(t.gm())}return a},
b6:function(a){if(typeof a=="number"||H.dH(a)||null==a)return J.a8(a)
if(typeof a=="string")return JSON.stringify(a)
return P.eu(a)},
bL:function(a){return new P.ao(a)},
ek:function(a){return new P.G(!1,null,null,a)},
da:function(a,b,c){return new P.G(!0,a,b,c)},
eA:function(a){var t=null
return new P.af(t,t,!1,t,t,a)},
eB:function(a,b){return new P.af(null,null,!0,a,b,"Value not in range")},
cR:function(a,b,c,d,e){return new P.af(b,c,!0,a,d,"Invalid value")},
eC:function(a,b,c){if(a>c)throw H.f(P.cR(a,0,c,"start",null))
if(a>b||b>c)throw H.f(P.cR(b,a,c,"end",null))
return b},
cS:function(a,b){return a},
b9:function(a,b,c,d,e){var t=H.bG(e==null?J.am(b):e)
return new P.b8(t,!0,a,c,"Index out of range")},
aI:function(a){return new P.br(a)},
dr:function(a){return new P.bp(a)},
aa:function(a){return new P.b4(a)},
d6:function(a){H.fM(a)},
m:function m(){},
ao:function ao(a){this.a=a},
bo:function bo(){},
bf:function bf(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b8:function b8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
br:function br(a){this.a=a},
bp:function bp(a){this.a=a},
bj:function bj(a){this.a=a},
b4:function b4(a){this.a=a},
aE:function aE(){},
b5:function b5(a){this.a=a},
c5:function c5(a){this.a=a},
k:function k(){},
C:function C(){},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
j:function j(){},
l:function l(){},
bD:function bD(){},
bm:function bm(a){this.a=a},
cf:function cf(){},
d:function d(){}},W={
c3:function(a,b,c,d,e){var t=W.fp(new W.c4(c),u.B),s=t!=null
if(s&&!0){u.o.a(t)
if(s)J.eg(a,b,t,!1)}return new W.bw(a,b,t,!1,e.h("bw<0>"))},
fp:function(a,b){var t=$.r
if(t===C.b)return a
return t.ae(a,b)},
e:function e(){},
b2:function b2(){},
b3:function b3(){},
Y:function Y(){},
H:function H(){},
aq:function aq(){},
bN:function bN(){},
ab:function ab(){},
bO:function bO(){},
aK:function aK(a,b){this.a=a
this.$ti=b},
n:function n(){},
c:function c(){},
p:function p(){},
b7:function b7(){},
a_:function a_(){},
a1:function a1(){},
bR:function bR(){},
w:function w(){},
i:function i(){},
aC:function aC(){},
bi:function bi(){},
a4:function a4(){},
E:function E(){},
a5:function a5(){},
cN:function cN(a){this.$ti=a},
aJ:function aJ(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bw:function bw(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
c4:function c4(a){this.a=a},
L:function L(){},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bu:function bu(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){}},F={
dW:function(){var t,s=document,r=u.E
$.dU=r.a(s.querySelector(".inner-container"))
t=u.I
$.e2=t.a(s.querySelector(".start-button"))
$.e0=r.a(s.querySelector(".question-answers"))
r=u.k
$.cF=r.a(s.querySelector(".question"))
$.d3=r.a(s.querySelector(".info"))
$.bH=u.u.a(s.querySelector(".answers"))
$.aZ=t.a(s.querySelector(".next-button"))
s=$.e2
s.toString
t=u.G
r=t.h("~(1)?")
r.a(F.dX())
u.Z.a(null)
t=t.c
W.c3(s,"click",F.dX(),!1,t)
s=$.aZ
s.toString
W.c3(s,"click",r.a(new F.cA()),!1,t)},
fP:function(a){var t,s=$.cK()
P.d6("Starting the test. # of questions: "+s.length);(s&&C.a).P(s)
C.a.P(s)
t=$.dU.style
t.display="none"
t=$.e0.style
t.display="flex"
P.eC(0,10,s.length)
H.eF(s,0,10,H.aT(s).c).v(0,new F.cI())
if($.W<10)F.e_()
else F.e1()},
e_:function(){var t,s,r,q,p
P.d6("Question number: "+($.W+1))
t=$.bH
t.toString
C.k.U(t)
$.aZ.disabled=!0
t=$.cF
s=$.cK()
r=$.W
if(r>=s.length)return H.t(s,r);(t&&C.d).sB(t,H.cY(J.b1(s[r],"question")))
for(q=0;q<4;++q){p=document.createElement("li")
t=$.W
if(t>=s.length)return H.t(s,t)
C.i.sB(p,H.cY(J.b1(J.b1(s[t],"answers"),q)))
$.bH.appendChild(p)}t=document
H.fv(u.g,u.h,"T","querySelectorAll")
t=new W.aK(t.querySelectorAll("li"),u.V)
$.fL=t
F.fK(t)},
e1:function(){var t,s,r=$.bH
r.toString
C.k.U(r)
r=$.cF;(r&&C.d).sB(r,"Result: "+($.W-$.cJ.length)+" / 10 !")
r=$.cF.style
r.fontSize="1.5em"
r=$.cJ.length
t=$.d3
s=t&&C.d
if(r!==0)s.sB(t,"Noto'g'ri javob berilgan savollar:")
else s.sB(t,"Eee qoyil lekin! Hammasini topdiz!")
r=$.d3.style
r.color="#330033"
C.a.v($.cJ,new F.cH())
r=$.aZ;(r&&C.l).sB(r,"Restart")
C.a.sj($.cq,0)
C.a.sj($.cp,0)
C.a.sj($.ct,0)},
fK:function(a){a.v(a,new F.cE(a))},
cA:function cA(){},
cI:function cI(){},
cH:function cH(){},
cG:function cG(a,b){this.a=a
this.b=b},
cE:function cE(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
cC:function cC(){}},Z={cQ:function cQ(a){this.a=a}}
var w=[C,H,J,P,W,F,Z]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cO.prototype={}
J.A.prototype={
D:function(a,b){return a===b},
gt:function(a){return H.aD(a)},
i:function(a){return"Instance of '"+H.h(H.bV(a))+"'"}}
J.ba.prototype={
i:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$ico:1}
J.ad.prototype={
D:function(a,b){return null==b},
i:function(a){return"null"},
gt:function(a){return 0},
$ij:1}
J.R.prototype={
gt:function(a){return 0},
i:function(a){return String(a)}}
J.bg.prototype={}
J.aH.prototype={}
J.I.prototype={
i:function(a){var t=a[$.e5()]
if(t==null)return this.a5(a)
return"JavaScript function for "+H.h(J.a8(t))},
$iac:1}
J.v.prototype={
l:function(a,b){H.aT(a).c.a(b)
if(!!a.fixed$length)H.a7(P.aI("add"))
a.push(b)},
al:function(a,b){var t
if(!!a.fixed$length)H.a7(P.aI("remove"))
for(t=0;t<a.length;++t)if(J.d9(a[t],b)){a.splice(t,1)
return!0}return!1},
v:function(a,b){var t,s
H.aT(a).h("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.f(P.aa(a))}},
A:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
gai:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.f(H.ew())},
P:function(a){var t,s,r,q
if(!!a.immutable$list)H.a7(P.aI("shuffle"))
t=a.length
for(;t>1;){s=C.t.ak(t);--t
r=a.length
if(t>=r)return H.t(a,t)
q=a[t]
if(s<0||s>=r)return H.t(a,s)
this.O(a,t,a[s])
this.O(a,s,q)}},
i:function(a){return P.dg(a,"[","]")},
gu:function(a){return new J.an(a,a.length,H.aT(a).h("an<1>"))},
gt:function(a){return H.aD(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.a7(P.aI("set length"))
a.length=b},
q:function(a,b){if(b>=a.length||b<0)throw H.f(H.cr(a,b))
return a[b]},
O:function(a,b,c){H.aT(a).c.a(c)
if(!!a.immutable$list)H.a7(P.aI("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cr(a,b))
a[b]=c},
$iq:1,
$ik:1,
$iM:1}
J.bP.prototype={}
J.an.prototype={
gm:function(){return this.d},
k:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.f(H.fQ(r))
t=s.c
if(t>=q){s.sR(null)
return!1}s.sR(r[t]);++s.c
return!0},
sR:function(a){this.d=this.$ti.h("1?").a(a)},
$iC:1}
J.av.prototype={
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ab:function(a,b){var t
if(a>0)t=this.aa(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aa:function(a,b){return b>31?0:a>>>b},
$ib_:1}
J.au.prototype={$ibK:1}
J.bb.prototype={}
J.a0.prototype={
p:function(a,b){if(typeof b!="string")throw H.f(P.da(b,null,null))
return a+b},
i:function(a){return a},
gt:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gj:function(a){return a.length},
q:function(a,b){if(b>=a.length||!1)throw H.f(H.cr(a,b))
return a[b]},
$io:1}
H.q.prototype={}
H.S.prototype={
gu:function(a){var t=this
return new H.a2(t,t.gj(t),H.P(t).h("a2<S.E>"))},
v:function(a,b){var t,s,r=this
H.P(r).h("~(S.E)").a(b)
t=r.gj(r)
for(s=0;s<t;++s){b.$1(r.A(0,s))
if(t!==r.gj(r))throw H.f(P.aa(r))}}}
H.aG.prototype={
ga9:function(){var t=J.am(this.a),s=this.c
if(s>t)return t
return s},
gac:function(){var t=J.am(this.a),s=this.b
if(s>t)return t
return s},
gj:function(a){var t,s=J.am(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t>=s)return s-r
return t-r},
A:function(a,b){var t=this,s=t.gac()+b,r=t.ga9()
if(s>=r)throw H.f(P.b9(b,t,"index",null,null))
return J.eh(t.a,s)}}
H.a2.prototype={
gm:function(){var t=this.d
return t},
k:function(){var t,s=this,r=s.a,q=J.d2(r),p=q.gj(r)
if(s.b!==p)throw H.f(P.aa(r))
t=s.c
if(t>=p){s.sC(null)
return!1}s.sC(q.A(r,t));++s.c
return!0},
sC:function(a){this.d=this.$ti.h("1?").a(a)},
$iC:1}
H.a3.prototype={
gu:function(a){var t=this.a,s=H.P(this)
return new H.aB(t.gu(t),this.b,s.h("@<1>").n(s.Q[1]).h("aB<1,2>"))},
gj:function(a){var t=this.a
return t.gj(t)}}
H.ar.prototype={$iq:1}
H.aB.prototype={
k:function(){var t=this,s=t.b
if(s.k()){t.sC(t.c.$1(s.gm()))
return!0}t.sC(null)
return!1},
gm:function(){var t=this.a
return t},
sC:function(a){this.a=this.$ti.h("2?").a(a)}}
H.bY.prototype={
w:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.be.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bd.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.h(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.h(s.a)+")"
return r+q+"' on '"+t+"' ("+H.h(s.a)+")"}}
H.bq.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bU.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.aO.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iag:1}
H.Z.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.e4(s==null?"unknown":s)+"'"},
$iac:1,
gaq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bn.prototype={}
H.bk.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.e4(t)+"'"}}
H.a9.prototype={
D:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.a9))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gt:function(a){var t,s=this.c
if(s==null)t=H.aD(this.a)
else t=typeof s!=="object"?J.cL(s):H.aD(s)
return(t^H.aD(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.bV(t))+"'")}}
H.bh.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.bs.prototype={
i:function(a){return"Assertion failed: "+P.b6(this.a)}}
H.aw.prototype={
gj:function(a){return this.a},
q:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.E(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.E(q,b)
r=s==null?o:s.b
return r}else return p.ah(b)},
ah:function(a){var t,s,r=this.d
if(r==null)return null
t=this.X(r,J.cL(a)&0x3ffffff)
s=this.a0(t,a)
if(s<0)return null
return t[s].b},
v:function(a,b){var t,s,r=this
H.P(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.f(P.aa(r))
t=t.c}},
F:function(a,b){var t=this,s=H.P(t),r=new H.bQ(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
a0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.d9(a[s].a,b))return s
return-1},
i:function(a){return P.dj(this)},
E:function(a,b){return a[b]},
X:function(a,b){return a[b]},
H:function(a,b,c){a[b]=c},
a8:function(a,b){delete a[b]},
L:function(){var t="<non-identifier-key>",s=Object.create(null)
this.H(s,t,s)
this.a8(s,t)
return s},
$idi:1}
H.bQ.prototype={}
H.ax.prototype={
gj:function(a){return this.a.a},
gu:function(a){var t=this.a,s=new H.ay(t,t.r,this.$ti.h("ay<1>"))
s.c=t.e
return s}}
H.ay.prototype={
gm:function(){return this.d},
k:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.f(P.aa(r))
t=s.c
if(t==null){s.sS(null)
return!1}else{s.sS(t.a)
s.c=t.c
return!0}},
sS:function(a){this.d=this.$ti.h("1?").a(a)},
$iC:1}
H.cv.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.cw.prototype={
$2:function(a,b){return this.a(a,b)},
$S:5}
H.cx.prototype={
$1:function(a){return this.a(H.ai(a))},
$S:6}
H.D.prototype={
h:function(a){return H.bF(v.typeUniverse,this,a)},
n:function(a){return H.eY(v.typeUniverse,this,a)}}
H.bx.prototype={}
H.bv.prototype={
i:function(a){return this.a}}
H.aP.prototype={}
P.c0.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.c_.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:7}
P.c1.prototype={
$0:function(){this.a.$0()},
$S:0}
P.c2.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cj.prototype={
a6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.ck(this,b),0),a)
else throw H.f(P.aI("`setTimeout()` not found."))}}
P.ck.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aL.prototype={
aj:function(a){if((this.c&15)!==6)return!0
return this.b.b.N(u.m.a(this.d),a.a,u.y,u.K)},
ag:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.h("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.am(t,a.a,a.b,s,r,u.l))
else return q.a(p.N(u.v.a(t),a.a,s,r))}}
P.F.prototype={
a3:function(a,b,c){var t,s,r,q=this.$ti
q.n(c).h("1/(2)").a(a)
t=$.r
if(t!==C.b){c.h("@<0/>").n(q.c).h("1(2)").a(a)
if(b!=null)b=P.fg(b,t)}s=new P.F($.r,c.h("F<0>"))
r=b==null?1:3
this.T(new P.aL(s,r,a,b,q.h("@<1>").n(c).h("aL<1,2>")))
return s},
ap:function(a,b){return this.a3(a,null,b)},
T:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.T(a)
return}s.a=r
s.c=t.c}P.cn(null,null,s.b,u.M.a(new P.c6(s,a)))}},
Z:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.Z(a)
return}n.a=t
n.c=o.c}m.a=n.G(a)
P.cn(null,null,n.b,u.M.a(new P.ca(m,n)))}},
M:function(){var t=u.F.a(this.c)
this.c=null
return this.G(t)},
G:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
V:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("at<1>").b(a))if(r.b(a))P.du(a,s)
else P.eK(a,s)
else{t=s.M()
r.c.a(a)
s.a=4
s.c=a
P.aM(s,t)}},
W:function(a,b){var t,s,r=this
u.l.a(b)
t=r.M()
s=P.bM(a,b)
r.a=8
r.c=s
P.aM(r,t)},
$iat:1}
P.c6.prototype={
$0:function(){P.aM(this.a,this.b)},
$S:0}
P.ca.prototype={
$0:function(){P.aM(this.b,this.a.a)},
$S:0}
P.c7.prototype={
$1:function(a){var t=this.a
t.a=0
t.V(a)},
$S:3}
P.c8.prototype={
$2:function(a,b){this.a.W(a,u.l.a(b))},
$S:8}
P.c9.prototype={
$0:function(){this.a.W(this.b,this.c)},
$S:0}
P.cd.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.a2(u.e.a(r.d),u.z)}catch(q){t=H.b0(q)
s=H.al(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.bM(t,s)
p.b=!0
return}if(m instanceof P.F&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.ap(new P.ce(o),u.z)
r.b=!1}},
$S:1}
P.ce.prototype={
$1:function(a){return this.a},
$S:9}
P.cc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.N(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.b0(m)
s=H.al(m)
r=this.a
r.c=P.bM(t,s)
r.b=!0}},
$S:1}
P.cb.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.fu(q.a.aj(t))&&q.a.e!=null){q.c=q.a.ag(t)
q.b=!1}}catch(p){s=H.b0(p)
r=H.al(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.bM(s,r)
m.b=!0}},
$S:1}
P.bt.prototype={}
P.aF.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.F($.r,u.a)
q.a=0
t=r.$ti
s=t.h("~(1)?").a(new P.bW(q,r))
u.Z.a(new P.bX(q,p))
W.c3(r.a,r.b,s,!1,t.c)
return p}}
P.bW.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("j(1)")}}
P.bX.prototype={
$0:function(){this.b.V(this.a.a)},
$S:0}
P.bl.prototype={}
P.ap.prototype={
i:function(a){return H.h(this.a)},
$im:1,
gI:function(){return this.b}}
P.aS.prototype={$ids:1}
P.cm.prototype={
$0:function(){var t=H.f(this.a)
t.stack=J.a8(this.b)
throw t},
$S:0}
P.bC.prototype={
an:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.r){a.$0()
return}P.dK(q,q,this,a,u.H)}catch(r){t=H.b0(r)
s=H.al(r)
P.cl(q,q,this,t,u.l.a(s))}},
ao:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.b===$.r){a.$1(b)
return}P.dL(q,q,this,a,b,u.H,c)}catch(r){t=H.b0(r)
s=H.al(r)
P.cl(q,q,this,t,u.l.a(s))}},
ad:function(a,b){return new P.ch(this,b.h("0()").a(a),b)},
a_:function(a){return new P.cg(this,u.M.a(a))},
ae:function(a,b){return new P.ci(this,b.h("~(0)").a(a),b)},
q:function(a,b){return null},
a2:function(a,b){b.h("0()").a(a)
if($.r===C.b)return a.$0()
return P.dK(null,null,this,a,b)},
N:function(a,b,c,d){c.h("@<0>").n(d).h("1(2)").a(a)
d.a(b)
if($.r===C.b)return a.$1(b)
return P.dL(null,null,this,a,b,c,d)},
am:function(a,b,c,d,e,f){d.h("@<0>").n(e).n(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.r===C.b)return a.$2(b,c)
return P.fh(null,null,this,a,b,c,d,e,f)}}
P.ch.prototype={
$0:function(){return this.a.a2(this.b,this.c)},
$S:function(){return this.c.h("0()")}}
P.cg.prototype={
$0:function(){return this.a.an(this.b)},
$S:1}
P.ci.prototype={
$1:function(a){var t=this.c
return this.a.ao(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.az.prototype={$iq:1,$ik:1,$iM:1}
P.x.prototype={
gu:function(a){return new H.a2(a,this.gj(a),H.X(a).h("a2<x.E>"))},
A:function(a,b){return this.q(a,b)},
v:function(a,b){var t,s
H.X(a).h("~(x.E)").a(b)
t=this.gj(a)
for(s=0;s<t;++s){b.$1(this.q(a,s))
if(t!==this.gj(a))throw H.f(P.aa(a))}},
i:function(a){return P.dg(a,"[","]")}}
P.aA.prototype={}
P.bS.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.h(a)
s.a=t+": "
s.a+=H.h(b)},
$S:10}
P.ae.prototype={
gaf:function(a){var t=H.P(this),s=t.h("ax<1>")
t=t.h("N<1,2>")
return H.ey(new H.ax(this,s),s.n(t).h("1(k.E)").a(new P.bT(this)),s.h("k.E"),t)},
gj:function(a){return this.a},
i:function(a){return P.dj(this)},
$iJ:1}
P.bT.prototype={
$1:function(a){var t=this.a,s=H.P(t)
s.c.a(a)
return new P.N(a,t.q(0,a),s.h("@<1>").n(s.Q[1]).h("N<1,2>"))},
$S:function(){return H.P(this.a).h("N<1,2>(1)")}}
P.aN.prototype={}
P.m.prototype={
gI:function(){return H.al(this.$thrownJsError)}}
P.ao.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.b6(t)
return"Assertion failed"}}
P.bo.prototype={}
P.bf.prototype={
i:function(a){return"Throw of null."}}
P.G.prototype={
gK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gK()+p+n
if(!r.a)return m
t=r.gJ()
s=P.b6(r.b)
return m+t+": "+s}}
P.af.prototype={
gK:function(){return"RangeError"},
gJ:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.h(r):""
else if(r==null)t=": Not greater than or equal to "+H.h(s)
else if(r>s)t=": Not in inclusive range "+H.h(s)+".."+H.h(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.h(s)
return t}}
P.b8.prototype={
gK:function(){return"RangeError"},
gJ:function(){var t,s=H.bG(this.b)
if(typeof s!=="number")return s.ar()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gj:function(a){return this.f}}
P.br.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bp.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.b4.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.b6(t)+"."}}
P.aE.prototype={
i:function(a){return"Stack Overflow"},
gI:function(){return null},
$im:1}
P.b5.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.c5.prototype={
i:function(a){return"Exception: "+this.a}}
P.k.prototype={
v:function(a,b){var t
H.P(this).h("~(k.E)").a(b)
for(t=this.gu(this);t.k();)b.$1(t.gm())},
gj:function(a){var t,s=this.gu(this)
for(t=0;s.k();)++t
return t},
A:function(a,b){var t,s,r
P.cS(b,"index")
for(t=this.gu(this),s=0;t.k();){r=t.gm()
if(b===s)return r;++s}throw H.f(P.b9(b,this,"index",null,s))},
i:function(a){return P.ev(this,"(",")")}}
P.C.prototype={}
P.N.prototype={
i:function(a){return"MapEntry("+H.h(J.a8(this.a))+": "+H.h(J.a8(this.b))+")"}}
P.j.prototype={
gt:function(a){return P.l.prototype.gt.call(C.x,this)},
i:function(a){return"null"}}
P.l.prototype={constructor:P.l,$il:1,
D:function(a,b){return this===b},
gt:function(a){return H.aD(this)},
i:function(a){return"Instance of '"+H.h(H.bV(this))+"'"},
toString:function(){return this.i(this)}}
P.bD.prototype={
i:function(a){return""},
$iag:1}
P.bm.prototype={
gj:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.e.prototype={}
W.b2.prototype={
i:function(a){return String(a)}}
W.b3.prototype={
i:function(a){return String(a)}}
W.Y.prototype={$iY:1}
W.H.prototype={
gj:function(a){return a.length}}
W.aq.prototype={
gj:function(a){return a.length}}
W.bN.prototype={}
W.ab.prototype={$iab:1}
W.bO.prototype={
i:function(a){return String(a)}}
W.aK.prototype={
gj:function(a){return this.a.length},
q:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.t(t,b)
return this.$ti.c.a(t[b])}}
W.n.prototype={
i:function(a){return a.localName},
ga1:function(a){return new W.ah(a,"click",!1,u.G)},
$in:1}
W.c.prototype={$ic:1}
W.p.prototype={
a7:function(a,b,c,d){return a.addEventListener(b,H.bI(u.o.a(c),1),!1)},
$ip:1}
W.b7.prototype={
gj:function(a){return a.length}}
W.a_.prototype={
gj:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.b9(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$iq:1,
$ibc:1,
$ik:1,
$iM:1}
W.a1.prototype={$ia1:1}
W.bR.prototype={
i:function(a){return String(a)}}
W.w.prototype={$iw:1}
W.i.prototype={
U:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
i:function(a){var t=a.nodeValue
return t==null?this.a4(a):t},
sB:function(a,b){a.textContent=b},
$ii:1}
W.aC.prototype={
gj:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.b9(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$iq:1,
$ibc:1,
$ik:1,
$iM:1}
W.bi.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$ia4:1}
W.E.prototype={}
W.a5.prototype={$ia5:1}
W.cN.prototype={}
W.aJ.prototype={}
W.ah.prototype={}
W.bw.prototype={}
W.c4.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:11}
W.L.prototype={
gu:function(a){return new W.as(a,this.gj(a),H.X(a).h("as<L.E>"))}}
W.as.prototype={
k:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.sY(J.b1(t.a,s))
t.c=s
return!0}t.sY(null)
t.c=r
return!1},
gm:function(){return this.d},
sY:function(a){this.d=this.$ti.h("1?").a(a)},
$iC:1}
W.bu.prototype={}
W.by.prototype={}
W.bz.prototype={}
W.bA.prototype={}
W.bB.prototype={}
P.cf.prototype={
ak:function(a){if(a<=0||a>4294967296)throw H.f(P.eA("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.d.prototype={
ga1:function(a){return new W.ah(a,"click",!1,u.G)}}
F.cA.prototype={
$1:function(a){var t,s,r,q,p
u.O.a(a)
t=$.aZ.textContent
if(t==="Next"){C.a.l($.ct,C.a.gai($.cp))
P.d6("Chosen answers: "+H.h($.ct))
t=$.ct
s=$.W
if(s>=t.length)return H.t(t,s)
t=t[s]
r=$.cq
if(s>=r.length)return H.t(r,s)
if(t!=r[s]){t=$.cJ
r=$.cK()
if(s>=r.length)return H.t(r,s)
s=H.ai(J.b1(r[s],"question"))
r=$.cq
q=$.W
if(q>=r.length)return H.t(r,q)
p=u.q
C.a.l(t,P.b([s,r[q]],p,p))}t=$.W+1
$.W=t
if(t<10)F.e_()
else F.e1()}else if(t==="Restart")window.location.reload()
return null},
$S:12}
F.cI.prototype={
$1:function(a){u.f.a(a)
C.a.l($.cq,H.ai(a.q(0,"correctAnswer")))},
$S:13}
F.cH.prototype={
$1:function(a){var t,s,r
u.j.a(a)
t=document
s=t.createElement("li")
r=t.createElement("span")
t=r.style
t.color="#15803D"
a.gaf(a).v(0,new F.cG(s,r))
$.bH.appendChild(s)},
$S:14}
F.cG.prototype={
$1:function(a){var t,s
u.t.a(a)
t=this.a
C.i.sB(t,a.a)
s=this.b
C.d.sB(s,a.b)
t.appendChild(s)},
$S:15}
F.cE.prototype={
$1:function(a){var t,s,r
u.g.a(a)
t=J.ej(a)
s=t.$ti
r=s.h("~(1)?").a(new F.cD(this.a,a))
u.Z.a(null)
W.c3(t.a,t.b,r,!1,s.c)},
$S:16}
F.cD.prototype={
$1:function(a){var t,s
u.O.a(a)
t=this.a
t.v(t,new F.cC())
t=this.b
s=t.style
s.backgroundColor="#440044"
s=t.style
s.color="#FAF5FF"
C.a.l($.cp,t.textContent)
$.aZ.disabled=!1},
$S:17}
F.cC.prototype={
$1:function(a){var t
a=u.r.a(u.g.a(a))
C.a.al($.cp,a.textContent)
a.style.removeProperty("background-color")
t=a.style
t.color="#330033"
return null},
$S:18}
Z.cQ.prototype={};(function aliases(){var t=J.A.prototype
t.a4=t.i
t=J.R.prototype
t.a5=t.i})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"fr","eH",2)
t(P,"fs","eI",2)
t(P,"ft","eJ",2)
s(P,"dP","fk",1)
t(F,"dX","fP",19)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.l,null)
r(P.l,[H.cO,J.A,J.an,P.k,H.a2,P.C,H.bY,P.m,H.bU,H.aO,H.Z,P.ae,H.bQ,H.ay,H.D,H.bx,P.cj,P.aL,P.F,P.bt,P.aF,P.bl,P.ap,P.aS,P.aN,P.x,P.aE,P.c5,P.N,P.j,P.bD,P.bm,W.bN,W.cN,W.L,W.as,P.cf,Z.cQ])
r(J.A,[J.ba,J.ad,J.R,J.v,J.av,J.a0,W.p,W.bu,W.bO,W.c,W.by,W.bR,W.bA])
r(J.R,[J.bg,J.aH,J.I])
s(J.bP,J.v)
r(J.av,[J.au,J.bb])
r(P.k,[H.q,H.a3])
r(H.q,[H.S,H.ax])
s(H.aG,H.S)
s(H.ar,H.a3)
s(H.aB,P.C)
r(P.m,[P.bo,H.bd,H.bq,H.bh,P.ao,H.bv,P.bf,P.G,P.br,P.bp,P.bj,P.b4,P.b5])
s(H.be,P.bo)
r(H.Z,[H.bn,H.cv,H.cw,H.cx,P.c0,P.c_,P.c1,P.c2,P.ck,P.c6,P.ca,P.c7,P.c8,P.c9,P.cd,P.ce,P.cc,P.cb,P.bW,P.bX,P.cm,P.ch,P.cg,P.ci,P.bS,P.bT,W.c4,F.cA,F.cI,F.cH,F.cG,F.cE,F.cD,F.cC])
r(H.bn,[H.bk,H.a9])
s(H.bs,P.ao)
s(P.aA,P.ae)
s(H.aw,P.aA)
s(H.aP,H.bv)
s(P.bC,P.aS)
s(P.az,P.aN)
r(P.G,[P.af,P.b8])
s(W.i,W.p)
r(W.i,[W.n,W.H])
r(W.n,[W.e,P.d])
r(W.e,[W.b2,W.b3,W.Y,W.ab,W.b7,W.a1,W.bi,W.a4,W.a5])
s(W.aq,W.bu)
s(W.aK,P.az)
s(W.bz,W.by)
s(W.a_,W.bz)
s(W.E,W.c)
s(W.w,W.E)
s(W.bB,W.bA)
s(W.aC,W.bB)
s(W.aJ,P.aF)
s(W.ah,W.aJ)
s(W.bw,P.bl)
t(P.aN,P.x)
t(W.bu,W.bN)
t(W.by,P.x)
t(W.bz,W.L)
t(W.bA,P.x)
t(W.bB,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bK:"int",fx:"double",b_:"num",o:"String",co:"bool",j:"Null",M:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["j()","~()","~(~())","j(@)","@(@)","@(@,o)","@(o)","j(~())","j(l,ag)","F<@>(@)","j(l?,l?)","@(c)","~(w*)","j(J<@,@>*)","j(J<o*,o*>*)","j(N<o*,o*>*)","j(n*)","j(w*)","~(n*)","~(c*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.eX(v.typeUniverse,JSON.parse('{"bg":"R","aH":"R","I":"R","fU":"c","h_":"c","fT":"d","h0":"d","fV":"e","h3":"e","h1":"i","fZ":"i","hg":"p","h4":"w","fX":"E","fW":"H","h5":"H","h2":"a_","ba":{"co":[]},"ad":{"j":[]},"R":{"ac":[]},"v":{"M":["1"],"q":["1"],"k":["1"]},"bP":{"v":["1"],"M":["1"],"q":["1"],"k":["1"]},"an":{"C":["1"]},"av":{"b_":[]},"au":{"bK":[],"b_":[]},"bb":{"b_":[]},"a0":{"o":[]},"q":{"k":["1"]},"S":{"q":["1"],"k":["1"]},"aG":{"S":["1"],"q":["1"],"k":["1"],"S.E":"1","k.E":"1"},"a2":{"C":["1"]},"a3":{"k":["2"],"k.E":"2"},"ar":{"a3":["1","2"],"q":["2"],"k":["2"],"k.E":"2"},"aB":{"C":["2"]},"be":{"m":[]},"bd":{"m":[]},"bq":{"m":[]},"aO":{"ag":[]},"Z":{"ac":[]},"bn":{"ac":[]},"bk":{"ac":[]},"a9":{"ac":[]},"bh":{"m":[]},"bs":{"m":[]},"aw":{"ae":["1","2"],"di":["1","2"],"J":["1","2"]},"ax":{"q":["1"],"k":["1"],"k.E":"1"},"ay":{"C":["1"]},"bv":{"m":[]},"aP":{"m":[]},"F":{"at":["1"]},"ap":{"m":[]},"aS":{"ds":[]},"bC":{"aS":[],"ds":[]},"az":{"x":["1"],"M":["1"],"q":["1"],"k":["1"]},"aA":{"ae":["1","2"],"J":["1","2"]},"ae":{"J":["1","2"]},"bK":{"b_":[]},"ao":{"m":[]},"bo":{"m":[]},"bf":{"m":[]},"G":{"m":[]},"af":{"m":[]},"b8":{"m":[]},"br":{"m":[]},"bp":{"m":[]},"bj":{"m":[]},"b4":{"m":[]},"aE":{"m":[]},"b5":{"m":[]},"bD":{"ag":[]},"e":{"n":[],"i":[],"p":[]},"b2":{"n":[],"i":[],"p":[]},"b3":{"n":[],"i":[],"p":[]},"Y":{"n":[],"i":[],"p":[]},"H":{"i":[],"p":[]},"ab":{"n":[],"i":[],"p":[]},"aK":{"x":["1"],"M":["1"],"q":["1"],"k":["1"],"x.E":"1"},"n":{"i":[],"p":[]},"b7":{"n":[],"i":[],"p":[]},"a_":{"x":["i"],"L":["i"],"M":["i"],"bc":["i"],"q":["i"],"k":["i"],"x.E":"i","L.E":"i"},"a1":{"n":[],"i":[],"p":[]},"w":{"c":[]},"i":{"p":[]},"aC":{"x":["i"],"L":["i"],"M":["i"],"bc":["i"],"q":["i"],"k":["i"],"x.E":"i","L.E":"i"},"bi":{"n":[],"i":[],"p":[]},"a4":{"n":[],"i":[],"p":[]},"E":{"c":[]},"a5":{"n":[],"i":[],"p":[]},"aJ":{"aF":["1"]},"ah":{"aJ":["1"],"aF":["1"]},"as":{"C":["1"]},"d":{"n":[],"i":[],"p":[]}}'))
H.eW(v.typeUniverse,JSON.parse('{"q":1,"bl":1,"az":1,"aA":2,"aN":1}'))
0
var u=(function rtii(){var t=H.cu
return{n:t("ap"),R:t("q<@>"),h:t("n"),C:t("m"),B:t("c"),Y:t("ac"),d:t("at<@>"),N:t("k<@>"),s:t("v<o>"),b:t("v<@>"),i:t("v<o*>"),T:t("ad"),L:t("I"),p:t("bc<@>"),P:t("j"),K:t("l"),l:t("ag"),U:t("o"),D:t("aH"),G:t("ah<w*>"),V:t("aK<n*>"),c:t("F<@>"),a:t("F<bK>"),y:t("co"),m:t("co(l)"),W:t("fx"),z:t("@"),e:t("@()"),v:t("@(l)"),Q:t("@(l,ag)"),S:t("bK"),I:t("Y*"),E:t("ab*"),g:t("n*"),r:t("a1*"),t:t("N<o*,o*>*"),f:t("J<@,@>*"),j:t("J<o*,o*>*"),O:t("w*"),A:t("0&*"),_:t("l*"),k:t("a4*"),q:t("o*"),u:t("a5*"),w:t("at<j>?"),X:t("l?"),F:t("aL<@,@>?"),o:t("@(c)?"),Z:t("~()?"),x:t("b_"),H:t("~"),M:t("~()")}})();(function constants(){C.l=W.Y.prototype
C.v=J.A.prototype
C.a=J.v.prototype
C.w=J.au.prototype
C.x=J.ad.prototype
C.c=J.a0.prototype
C.y=J.I.prototype
C.i=W.a1.prototype
C.j=J.bg.prototype
C.d=W.a4.prototype
C.k=W.a5.prototype
C.e=J.aH.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.h=function(hooks) { return hooks; }

C.t=new P.cf()
C.b=new P.bC()
C.u=new P.bD()})();(function staticFields(){$.dv=null
$.K=0
$.dd=null
$.dc=null
$.dS=null
$.dN=null
$.dZ=null
$.cs=null
$.cy=null
$.d4=null
$.aj=null
$.aV=null
$.aW=null
$.d_=!1
$.r=C.b
$.B=H.a([],H.cu("v<l>"))
$.cq=H.a([],u.i)
$.cp=H.a([],u.i)
$.ct=H.a([],u.i)
$.cJ=H.a([],H.cu("v<J<o*,o*>*>"))
$.e2=null
$.aZ=null
$.dU=null
$.e0=null
$.cF=null
$.d3=null
$.bH=null
$.fL=null
$.W=0})();(function lazyInitializers(){var t=hunkHelpers.lazy,s=hunkHelpers.lazyOld
t($,"fY","e5",function(){return H.fA("_$dart_dartClosure")})
t($,"h6","e6",function(){return H.O(H.bZ({
toString:function(){return"$receiver$"}}))})
t($,"h7","e7",function(){return H.O(H.bZ({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"h8","e8",function(){return H.O(H.bZ(null))})
t($,"h9","e9",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hc","ec",function(){return H.O(H.bZ(void 0))})
t($,"hd","ed",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hb","eb",function(){return H.O(H.dq(null))})
t($,"ha","ea",function(){return H.O(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"hf","ef",function(){return H.O(H.dq(void 0))})
t($,"he","ee",function(){return H.O(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"hh","d7",function(){return P.eG()})
s($,"hw","cK",function(){var r="Shahodat kalimasi, Namoz, Ro'za, Zakot, Hajj",q="Allohga, Farishtalarga, Ilohiy kitoblarga, Payg'ambarlarga, Oxirat kuniga, Qazoi qadarga iymon",p="Farz, Vojib, Sunna, Mustahab, Makruh, Harom, Muboh",o="Har bir musulmon uchun bajarilishi shart amallar",n="Birorta javob to'g'ri emas",m="Yuzni yuvish, Qo'lni tirsak bilan qo'shib yuvmoqlik, Boshga mahs tortish, Oyoqni boldir suyagigacha yuvish",l="Umar rodhiyallohu anhu",k="Ali rodhiyallohu anhu",j="Abu Bakr rodhiyallohu anhu",i="Usmon rodhiyallohu anhu",h="Zakariyo alayhissalam",g="Bilol rodhiyallohu anhu",f="Muso alayhissalom",e="Ibn Umar rodhiyallohu anhu",d="Qilsa savob ham, qilmasa gunoh ham yo'q amal",c="To'g'ri javob yo'q",b="Jinsiy a'zoni ushlash",a="Og\u2018izni yuvmoq, Burunni achishtirib chaymoq, Butun tanani ishqalab yuvmoq",a0="Bobolari AbdulMutallib",a1="Yunus alayhissalom",a2="Hotajxonaga kirishdan avval",a3="Makruhi tahrimiy",a4="Har qanday namoz o'qish harom",a5="Qazo qilib o'qish farz",a6="3 kecha-kunduz va 1 kecha-kunduz",a7="Yuqoridagi barcha javoblar to'g'ri",a8="Tahorat singandan boshlab",a9="Tayammum buzuladi, tahorat qilishi shart",b0="Tahorat qilsa yaxshi, qilmasa gunoh yo'q",b1="Musulmonlik, balog'atga yetish, aql",b2="Namoz vaqtining kirishi",b3="Quyosh botishidan qizil shafaq yo'q bo'lgunicha",b4="Narsaning soyasi o'zidan ikki baravar uzun bo'lganidan to quyosh botguncha",b5="Narsani soyasi o'zidan bir baravar uzun bo'lganidan to quyosh botguncha",b6="Quyosh botishidan 40 daqiqa oldin boshlanib to quyosh botguncha",b7="Peshin namozini o'qib bo'lishi bilan boshlanib to quyosh botguncha",b8="Yuqoridagilarning hammasi",b9="Erkaklarga sunna, ayollarga makruh",c0="La havla vala quvvata illa billah deyishi",c1="Yuqoridagilarning barchasi",c2="Mutazila aqidasiga qarshi chiqqanlarni ta'qib qilish, jazolash davri",c3="Imom Ashari rahimahulloh, Imom Moturudi rahimahulloh, Imom Ahmad rahimahulloh",c4="Imom Ahmad ibn Hanbal rahimahulloh",c5="Aqida al-Tahawiyya",c6="Mehribon va rahmli Alloh nomi bilan (boshlayman)",c7="Hamd olamlar Robbi - Allohgadur",c8="Jazo mukofot kuni egasidur",c9="U Rohman (Mehribon) va Rohim (Rahmli)",d0="Jazo-mukofot kunining egasidur",d1="Faqat Sengagina ibodat qilamiz, Sendangina yordam so'raymiz",d2="Bizni to'g'ri yo'lga hidoyat qilgin",d3="O'zing ne'mat berganlarning yo'liga",d4="G'azabga qolganlarnikiga ham emas, adashganlarnikiga ham emas",d5="Oliy Robbim nuqsonlardan pokdir",d6="Ulug' Robbim nuqsonlardan pokdir",d7="Alloh hamd aytuvchilarni eshitadi",d8="Robbimiz Senga hamd bo'lsin",d9="Albatta inson ziyon (baxtsizlik)dadir",e0="Illo, imon keltirganlar va solih amal qilganlar",e1="Bir-birlarini haq yo'lga chaqirganlar va bir-birlarini sabrga chaqirganlar (unday emasdir)",e2="Albatta Biz sizga Kavsarni ato etdik",e3="Bas, Robbinga namoz o'qi va jonliq so'y",e4="Albatta, seni yomon ko'rib ayblovchining o'zini orqasi kesik",e5="Ayt: Alloh yagonadir",e6="Alloh - hojatlarni va rag'batlarni qondiruvchidir",e7="U tug'magan va tug'ilmagan",e8="Va Unga hech kim teng emasdir",e9="Ayt: men tong Robbisidan panoh so'rayman",f0="O'zi yaratgan narsalar yomonligidan",f1="Va kirib kelgan qorong'u kechaning yomonligidan",f2="Va tugunlarga dam soluvchilar yomonligidan",f3="Va hasad qilgan hasadchining yomonligidan",f4="Ko'ksini burish namozni buzadi, boshni burish makruh",f5="Hamma javob to'g'ri",f6="Uch marta Allohummag'firli deydi, yoki Robbana atina duosini o'qiydi",f7="Namoz buzulmaydi",f8="Namoz buzuladi, qaytadan o'qiladi",f9="Namoz buzulmaydi, faqat sajdai sahv qilinadi",g0="Yomg'ir so'rab o'qiladigan namoz",g1="Ayt, men panoh so'rayman barcha insonlarning Robbisidan",g2="Barcha insonlar Podshoxidan",g3="Barcha insonlar Ilohidan",g4="Berkinib, ko'rinib turuvchi vasvasachining yomonligidan",g5="Odamlar qalblariga vasvasa soladiganning",g6="Jinlar va odamlardan bo'lganning",g7="Odamlarni yo'ldan og'diradiganning",g8="Hamma javobni bu duo ichiga oladi",g9="Ey Robbimiz, bizdan qabul et, albatta Sening O'zing eshituvchi, biluvchi Zotsan",h0="Barcha ayblardan xoli, noloyiq sifatlardan pok",h1="Hamma narsani qamrab oluvchi",h2="Hamma narsadan o'ta habardor",h3="Hamma narsani ko'ruvchi",h4=u.i,h5=u.z
return H.a([P.b(["question","Rasululloh alayhissolatu wassalam milodiy qaysi yilda tavallud topganlar?","answers",H.a(["571","583","566","573"],h4),"correctAnswer","571"],h5,h5),P.b(["question","Islom arkonlari nimalardan iborat?","answers",H.a(["Shahodat kalimasi, Namoz, Hajj, Ota-onani hurmat qilish","Namoz, Ro'za, Hajj, Zakot, Sadaqa",r,"Islom, Iymon, Ehson, Namoz"],h4),"correctAnswer",r],h5,h5),P.b(["question","Iymonni ustunlari qaysilar?","answers",H.a(["Allohga, Farishtalarga, Ilohiy kitoblarga, Payg'ambarlarga iymon","Allohga, Payg'ambarlarga, Oxirat kuniga iymon",q,"Allohga, Oxiratga, Payg'ambarlarga, Farishtalarga iymon"],h4),"correctAnswer",q],h5,h5),P.b(["question","Quron Karimning birinchi oyatlari qaysi oyda nozil bo'lgan?","answers",H.a(["Muharram","Safar","Ramazon","Shawwal"],h4),"correctAnswer","Ramazon"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalam qaysi g'orda birinchi oyatlarni qabul qilib olganlar?","answers",H.a(["Jabal","Hiro","Kara","Nuur"],h4),"correctAnswer","Hiro"],h5,h5),P.b(["question","Quron Karimdagi qaysi suradan oldin basmala aytilmaydi?","answers",H.a(["Tavba","Mulk","Fotiha","Moida"],h4),"correctAnswer","Tavba"],h5,h5),P.b(["question","Islomda amallar qanday hukmlarga egadurlar?","answers",H.a(["Farz, Sunna, Harom","Farz, Vojib, Sunna, Harom",p,"Farz, Sunna, Makruh, Harom"],h4),"correctAnswer",p],h5,h5),P.b(["question","Farz al-Ayn qanday ma'noga ega?","answers",H.a([o,"Bir necha musulmonlar ado etsa, qolganlarning zimmasidan soqit amallar","Faqat erkak kishilar uchun farz amallar",n],h4),"correctAnswer",o],h5,h5),P.b(["question","Tahoratning farzlari qaysilar?","answers",H.a(["Niyat, Yuzni yuvish, Qo'lni tirsakkacha yuvish, Oyoqni yuvish",m,"Bismillohni aytish, Yuz yuvmoqlik, Qo'llni tirsakkacha yuvish, Oyoqqa mahs tortish","Qo'l kaftini yuvmoqlik, Yuzni yuvish, Boshga mahs tortish"],h4),"correctAnswer",m],h5,h5),P.b(["question","Imom Shofei rahimahulloh qaysi kitob haqida: 'Yer yuzida Allohning kitobidan keyingi eng sahih kitob' deganlar?","answers",H.a(["Sahih Buxoriy","Sahih Muslim","Musnad Shofei","Muwatta"],h4),"correctAnswer","Muwatta"],h5,h5),P.b(["question","Qur'oni Karim nechta suradan iborat?","answers",H.a(["113","115","112","114"],h4),"correctAnswer","114"],h5,h5),P.b(["question","Qur'oni Karimda nechta payg'ambarlar haqida habar kelgan?","answers",H.a(["18","25","42","33"],h4),"correctAnswer","25"],h5,h5),P.b(["question","Qur'oni Karimdagi eng uzun sura qaysi?","answers",H.a(["Baqara","Moida","Anbiya","Tawba"],h4),"correctAnswer","Baqara"],h5,h5),P.b(["question","Qur'oni Karimdagi eng qisa sura qaysi?","answers",H.a(["Ixlos","Kavsar","Falaq","Nas"],h4),"correctAnswer","Kavsar"],h5,h5),P.b(["question","Qur'oni Karimning qaysi sura oyatlari birinchi bo'lib nozil bo'lgan?","answers",H.a(["Ixlos","Iqro","Fotiha","Kavsar"],h4),"correctAnswer","Iqro"],h5,h5),P.b(["question","Qur'oni Karim necha yil davomida nozil bo'lgan?","answers",H.a(["30","18","23","45"],h4),"correctAnswer","23"],h5,h5),P.b(["question","Qur'oni Karimdagi qaysi sura Ari (asal ari) deb nomlangan?","answers",H.a(["Al-Naml","Al-Qoriah","Al-Nahl","Toha"],h4),"correctAnswer","Al-Nahl"],h5,h5),P.b(["question","Qur'oni Karim qaysi halifa davrida kitob shakliga keltirilgan?","answers",H.a([l,k,j,i],h4),"correctAnswer",j],h5,h5),P.b(["question","Nabiylardan qaysi biri duradgorlik kasbi egasi edilar?","answers",H.a([h,"Dowud alayhissalam","Muso alayhissalam","Idris alayhissalam"],h4),"correctAnswer",h],h5,h5),P.b(["question","Birinchi muazzin (azon aytuvchi) kim bo'lgan?","answers",H.a([g,"Zayd rodhiyallohu anhu",k,l],h4),"correctAnswer",g],h5,h5),P.b(["question","Bilol rodhiyallohu anhu hazratlarini kim qullikdan ozod qilgan?","answers",H.a(["Abu Hurayra rodhiyallohu anhu",j,k,"Ammar rodhiyallohu anhu"],h4),"correctAnswer",j],h5,h5),P.b(["question","Madina shahri avval qanday nom bilan atalgan?","answers",H.a(["Misr","Yasrib","Suriya","Sharq"],h4),"correctAnswer","Yasrib"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning tuyalarining ismi nima edi?","answers",H.a(["Baqsa","Urwa","Qaswa","Kalba"],h4),"correctAnswer","Qaswa"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning otalarining ismi nima?","answers",H.a(["Qasim","Ibrohim","Hashim","Abdulloh"],h4),"correctAnswer","Abdulloh"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning onalarining ismi nima?","answers",H.a(["Amina","Zaynab","Fatima","Ruqayyah"],h4),"correctAnswer","Amina"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning birinchi ayollarining ismi nima?","answers",H.a(["Aisha","Rayhana","Hadicha","Sawda"],h4),"correctAnswer","Hadicha"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalam necha yoshda payg'ambar bo'ldilar?","answers",H.a(["41","38","45","40"],h4),"correctAnswer","40"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalam onalari vafot etganda necha yoshda edilar?","answers",H.a(["8","6","9","12"],h4),"correctAnswer","6"],h5,h5),P.b(["question","Qaysi payg'ambar 'Kalimulloh' maqomiga ega?","answers",H.a(["Ibrohim ayhissalom","Dovud alayhissalom",f,"Iso alayhissalom"],h4),"correctAnswer",f],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamni Madinada kutib olib islomga kirgan insonlar qanday ataladi?","answers",H.a(["Ansor","Muhojir","Tobein","Sahoba"],h4),"correctAnswer","Ansor"],h5,h5),P.b(["question","Hijratning 2-yilida yuz bergan jangning nomi nima?","answers",H.a(["Uhud","Badr","Tabuk","Xandaq"],h4),"correctAnswer","Badr"],h5,h5),P.b(["question","Islomni birinchi qabul qilgan bola kim?","answers",H.a([k,j,e,i],h4),"correctAnswer",k],h5,h5),P.b(["question","Islomni birinchi qabul qilgan kishi kim?","answers",H.a([k,j,e,i],h4),"correctAnswer",j],h5,h5),P.b(["question","Musulmonlar uchun birinchi Qibla qaysi edi?","answers",H.a(["Kaaba","Masjid al-Aqso","Masjid an-Nabavi","Tog'ri javob yo'q"],h4),"correctAnswer","Masjid al-Aqso"],h5,h5),P.b(["question","Quron Karimdagi ayol ismi bilan atalgan sura qaysi?","answers",H.a(["Niso","Anbiyo","Maryam","Zuho"],h4),"correctAnswer","Maryam"],h5,h5),P.b(["question","Muboh qanday amallarni anglatadi?","answers",H.a([d,"Qilsa savob, qilmasa gunoh yo'q amal","Qilsa gunoh, qilmasa savob amal",c],h4),"correctAnswer",d],h5,h5),P.b(["question","Istinjo islom dinida nimani anglatadi?","answers",H.a(["Qo'lni tirsakkacha yuvish","Avratlarni (orqa va oldi) yuvish","Boshga mahs tortish","Oyoqni to'piqqacha yuvish"],h4),"correctAnswer","Avratlarni yuvish"],h5,h5),P.b(["question","Tahorat uchun niyat va tahorat paytida og'izni uch marta chayishning hukmi nima?","answers",H.a(["Sunna va Sunna","Vojib va Sunna","Farz va Vojib","Muboh va Sunna"],h4),"correctAnswer","Sunna, Sunna"],h5,h5),P.b(["question","Quyidagilardan qaysi biri tahoratni buzmaydi?","answers",H.a(["Tanadan qon oqishi","Mast bo'lish",b,"Hushdan ketmoq"],h4),"correctAnswer",b],h5,h5),P.b(["question","G'uslning farzlari nimalardan iborat?","answers",H.a([a,"Niyat qilish, Butun tanani yuvish","Bismillohni aytish, Niyat qilish, Yuzni yuvmoq, Butun tanani yuvish","Yaxshilab cho'milsa bo'ldi"],h4),"correctAnswer",a],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamni onalari vafotidan keyin kimning qaramog'ida qoldilar?","answers",H.a(["Otalari Abdulloh",a0,"Amakilar Abu Tolib","Bir o'zlari yashadilar"],h4),"correctAnswer",a0],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning nechta qizlari bo'lgan?","answers",H.a(["3","5","2","4"],h4),"correctAnswer","4"],h5,h5),P.b(["question","Rasululloh alayhissolatu wassalamning nechta o'g'illari bo'lgan?","answers",H.a(["3","5","2","4"],h4),"correctAnswer","3"],h5,h5),P.b(["question","Dovud alayhissalomga berilgan ilohiy kitob qandan nomlanadi?","answers",H.a(["Injil","Zobur","Taurot","Veda"],h4),"correctAnswer","Zobur"],h5,h5),P.b(["question","Muso alayhissalomga berilgan ilohiy kitob qandan nomlanadi?","answers",H.a(["Injil","Zobur","Taurot","Veda"],h4),"correctAnswer","Taurot"],h5,h5),P.b(["question","Iso alayhissalomga berilgan ilohiy kitob qandan nomlanadi?","answers",H.a(["Injil","Zobur","Taurot","Veda"],h4),"correctAnswer","Injil"],h5,h5),P.b(["question","Alloh subhanahu wa ta'alaning qaysi buyuk ismi \n          'Kofirga ham mo'minga ham mehribon, ne'mat beruvchi' ma'nosini anglatadi?","answers",H.a(["ar-Rahim","ar-Rohman","al-Quddus","al-Aziz"],h4),"correctAnswer","ar-Rohman"],h5,h5),P.b(["question","Qaysi payg'ambarni baliq yutib yuborgan?","answers",H.a(["Yusuf alayhissalom",f,"Nuh alayhhissalom",a1],h4),"correctAnswer",a1],h5,h5),P.b(["question","'Allohumma inniy a\u2019uzu bika minal xubsi val xobais' duosi qachon o'qiladi?","answers",H.a(["Tahorat olishdan oldin","Uyqudan turganda",a2,"Uxlashdan olidn"],h4),"correctAnswer",a2],h5,h5),P.b(["question","Hojat vaqtida oldi yoki orqasini Qiblaga yuzlantirishning hukmi nima?","answers",H.a(["Harom",a3,"Makruh tanzihiy","Muboh"],h4),"correctAnswer",a3],h5,h5),P.b(["question","Tahoratsiz kishiga qaysi namozni o'qishga ruxsat bor?","answers",H.a(["Nafl nomozlari","Taroweh nomozi",a4,"Qazo nomozi"],h4),"correctAnswer",a4],h5,h5),P.b(["question","O'qilmasdan qolib ketgan farz namozlarining hukmi qanday?","answers",H.a(["Qazo qilib o'qish sunnat",a5,"Qazo qilib o'qish makruh","To'gri javob yo'q"],h4),"correctAnswer",a5],h5,h5),P.b(["question","Musofir va muqim insonga mahs tortish muddati qancha?","answers",H.a([a6,"Ikki holatta ham 1 kun","Ikki holatta ham 3 kun","Inson o'zi hohlaganicha"],h4),"correctAnswer",a6],h5,h5),P.b(["question","Mahsiga mahs tortish shartlari qanday?","answers",H.a(["Mahsi oyoqni to'piqqacha yopishi, Suv o'tkazmaydigan darajada qalin bo'lishi","Uch barmoq miqdorida yirtiq bo'lmasligi, Yurganda yechilib ketmasligi","Taqriba 6-8 km (1 farsah) yurganda yirtilmas darajada qalin bo'lishi, Mahsining tahorat bilan kiyilishi",a7],h4),"correctAnswer",a7],h5,h5),P.b(["question","Mahs tortishning muddati qachondan e'tiborga olinadi?","answers",H.a(["Mahsi kiyilgandan boshlab",a8,"Yangi kun boshlanganda",c],h4),"correctAnswer",a8],h5,h5),P.b(["question","Tayammum qilishda niyatning hukmi nima?","answers",H.a(["Sunna","Farz","Mustahab","Muboh"],h4),"correctAnswer","Farz"],h5,h5),P.b(["question","Tayammum qilgan kishi suvni ko'rsa nima qiladi?","answers",H.a([a9,"Tayammum bilan namoz o'qilaveradi",b0,c],h4),"correctAnswer",a9],h5,h5),P.b(["question","Kishiga namoz o'qish farz bo'lishining shartlari qaysilar?","answers",H.a(["Tahorat olish, namoz vaqtining kirishi",b1,"Musulmonlik, balog'atga yetish, tahorat olish","Musulmonlik, tahorat olish, namoz vaqtining kirishi"],h4),"correctAnswer",b1],h5,h5),P.b(["question","Namozning farz bo'lish sharti nima?","answers",H.a([b2,"Tahorat olish","Musulmon bo'lish","Balog'at yoshiga yetish"],h4),"correctAnswer",b2],h5,h5),P.b(["question","Shom namozining vaqti qachon?","answers",H.a(["Kechqurun soat 5da",b3,"Masjidda azon etganda","Qizil shafat yo'q bo'lgandan to quyosh chiqqunicha"],h4),"correctAnswer",b3],h5,h5),P.b(["question","Asr namozining vaqti Abu Hanifa rahimahullohga ko'ra qaysi?","answers",H.a([b4,b5,b6,b7],h4),"correctAnswer",b4],h5,h5),P.b(["question","Asr namozining vaqti Abu Yusuf, Imom Muhammad rahimahullohlarga ko'ra qaysi?","answers",H.a([b4,b5,b6,b7],h4),"correctAnswer",b5],h5,h5),P.b(["question","Vitr namozining hukmi qanday?","answers",H.a(["Farz","Vojib","Sunna","Mustahab"],h4),"correctAnswer","Vojib"],h5,h5),P.b(["question","Qaysi vaqtlarda farz, janoza namozlarini o'qish, tilovat sajdasini qilish joiz emas?","answers",H.a(["Quyosh chiqayotgan vaqtdan to ko'ratilguncha, quyosh botayotganda","Quyosh chiqayotgan vaqtdan to ko'ratilguncha, quyosh tikkaga kelganda","Quyosh tikkaga kelganda va quyosh botayotganda",b8],h4),"correctAnswer",b8],h5,h5),P.b(["question","Bomdod va asr namozlarining farzidan keyin nafl namoz o'qishning hukmi nima?","answers",H.a(["Mustahab","Vojib","Harom","Makruh"],h4),"correctAnswer","Makruh"],h5,h5),P.b(["question","Azon va iqomaning hukmi nima?","answers",H.a(["Erkak va ayollarga namoz oldidan sunna",b9,"Erkaklarga sunna, ayollarga Vojib","Erkak va ayollarga namoz oldidan muboh"],h4),"correctAnswer",b9],h5,h5),P.b(["question","Azon eshituvchi uchun 'Hayya alas-Solah, Hayya alal-Falah' kalimalaridan keyin nima afzal?","answers",H.a(["Subhanalloh deyishi","O'sha kalimalarni takrorlashi","Alhamdulillah deb aytmoqlik",c0],h4),"correctAnswer",c0],h5,h5),P.b(["question","Quyidagilardan qaysilar namozda mahfiy (ovossiz) holda aytiladi?","answers",H.a(["Fotihadan oldingi Basmala, Fotihadan keyingi Amiin, Attahiyat, Salovat va duolar","Ruku va sajdadagi 'Subhana Robbiy al-Azim, Subhana Robbiy al-A'la' kalimalari","Sano duosi, taavvuz (Auzu billahi min ash-shatonir rojim)",c1],h4),"correctAnswer",c1],h5,h5),P.b(["question","Mihna davri deb qanday davr ta'rif etiladi?","answers",H.a(["Mutazila aqidasining rivojlanish va kengayish davri",c2,"Ashari aqidasiga asos solingan davr",n],h4),"correctAnswer",c2],h5,h5),P.b(["question","Ahli sunna va jamoa aqidaviy maktab asoschilar kimlar?","answers",H.a(["Imom Abu Hanifa rahimahulloh, Imom Molik rahimahulloh","Imom Ashari rahimahulloh, Imom Moturudi rahimahulloh, Imom Buxori rahimahulloh",c3,"Imom Ashari rahimahulloh, Imom Moturudi rahimahulloh"],h4),"correctAnswer",c3],h5,h5),P.b(["question","Mihna davrida qaysi mashhur ulamo qamoqqa tashlangan?","answers",H.a(["Imom Muhammad rahimahulloh","Imom Shofe'i rahimahulloh",c4,"Imom Ashari rahimahulloh"],h4),"correctAnswer",c4],h5,h5),P.b(["question","Ahli sunna va jamoa aqidasini o'z ichiga jamlab olgan eng mashhur kitoblardan biri qaysi?","answers",H.a([c5,"Aqida as-Sanusiyya","Kitab al-Risola","Aqida al-Wasitiyya"],h4),"correctAnswer",c5],h5,h5),P.b(["question","Bismillahir-Rohmanir-Rohim kalimasining ma'nosi nima?","answers",H.a([c6,c7,c8,c9],h4),"correctAnswer",c6],h5,h5),P.b(["question","Alhamdu lillahi Robbil-'alamin oyatining ma'nosi nima?","answers",H.a([c9,c6,c7,c8],h4),"correctAnswer",c7],h5,h5),P.b(["question","Ar-Rohmanir-Rohim oyatining ma'nosi nima?","answers",H.a([c9,c6,c7,c8],h4),"correctAnswer",c9],h5,h5),P.b(["question","Maliki yawmid-din oyatining ma'nosi nima?","answers",H.a([c9,c6,c7,d0],h4),"correctAnswer",d0],h5,h5),P.b(["question","Iyyaka na'budu wa iyyaka nasta'in oyatining ma'nosi nima?","answers",H.a([d1,d2,d3,d4],h4),"correctAnswer",d1],h5,h5),P.b(["question","Ihdinas-sirotol-mustaqim oyatining ma'nosi nima?","answers",H.a([d1,d2,d3,d4],h4),"correctAnswer",d2],h5,h5),P.b(["question","Sirotol-laziyna an'amta 'alayhim oyatining ma'nosi nima?","answers",H.a([d1,d2,d3,d4],h4),"correctAnswer",d3],h5,h5),P.b(["question","G'oyril-mag'dubi 'alayhim walad-dooliin oyatining ma'nosi nima?","answers",H.a([d1,d2,d3,d4],h4),"correctAnswer",d4],h5,h5),P.b(["question","Subhana Robbiyal-'Azim kalimasining ma'nosi nima?","answers",H.a([d5,d6,d7,d8],h4),"correctAnswer",d6],h5,h5),P.b(["question","Subhana Robbiyal-A'la kalimasining ma'nosi nima?","answers",H.a([d5,d6,d7,d8],h4),"correctAnswer",d5],h5,h5),P.b(["question","Sami' Allohu liman hamidah kalimasining ma'nosi nima?","answers",H.a([d5,d6,d7,d8],h4),"correctAnswer",d7],h5,h5),P.b(["question","Robbana lakal hamd kalimasining ma'nosi nima?","answers",H.a([d5,d6,d7,d8],h4),"correctAnswer",d8],h5,h5),P.b(["question","Wal-'asr oyatining ma'nosi nima?","answers",H.a(["Asrga qasamki",d9,e0,e1],h4),"correctAnswer","Asrga qasamki"],h5,h5),P.b(["question","Innal-insana lafi xusr oyatining ma'nosi nima?","answers",H.a(["Asrga qasamki",d9,e0,e1],h4),"correctAnswer",d9],h5,h5),P.b(["question","Illal-laziyna aamanu wa 'amilus-solihati oyatining ma'nosi nima?","answers",H.a(["Asrga qasamki",d9,e0,e1],h4),"correctAnswer",e0],h5,h5),P.b(["question","wa tawasow bil-haqqi wa tawasow bis-sobr oyatining ma'nosi nima?","answers",H.a(["Asrga qasamki",d9,e0,e1],h4),"correctAnswer",e1],h5,h5),P.b(["question","Inna a'toynakal-Kavsar oyatining ma'nosi nima?","answers",H.a([e2,e3,e4,c],h4),"correctAnswer",e2],h5,h5),P.b(["question","Fasolli liRobbika wanhar oyatining ma'nosi nima?","answers",H.a([e2,e3,e4,c],h4),"correctAnswer",e3],h5,h5),P.b(["question","Inna shaaniaka huwal-abtar oyatining ma'nosi nima?","answers",H.a([e2,e3,e4,c],h4),"correctAnswer",e4],h5,h5),P.b(["question","Qul huw Allohu ahad oyatining ma'nosi nima?","answers",H.a([e5,e6,e7,e8],h4),"correctAnswer",e5],h5,h5),P.b(["question","Allohu s-somad oyatining ma'nosi nima?","answers",H.a([e5,e6,e7,e8],h4),"correctAnswer",e6],h5,h5),P.b(["question","Lam yalid wa lam yuulad oyatining ma'nosi nima?","answers",H.a([e5,e6,e7,e8],h4),"correctAnswer",e7],h5,h5),P.b(["question","Wa lam yakul-lahu kufuwan ahad oyatining ma'nosi nima?","answers",H.a([e5,e6,e7,e8],h4),"correctAnswer",e8],h5,h5),P.b(["question","Qul a'uuzu bi Robbil-falaq oyatining ma'nosi nima?","answers",H.a([e9,f0,f1,f2],h4),"correctAnswer",e9],h5,h5),P.b(["question","Min sharri ma xolaq oyatining ma'nosi nima?","answers",H.a([e9,f0,f1,f2],h4),"correctAnswer",f0],h5,h5),P.b(["question","Wa min sharri g'oosiqin iza waqob oyatining ma'nosi nima?","answers",H.a([e9,f0,f1,f2],h4),"correctAnswer",f1],h5,h5),P.b(["question","Wa min sharrin-naffaa-saati fil 'uqod oyatining ma'nosi nima?","answers",H.a([e9,f0,f1,f2],h4),"correctAnswer",f2],h5,h5),P.b(["question","Wa min sharri haasidin iza hasad oyatining ma'nosi nima?","answers",H.a([f3,f0,f1,f2],h4),"correctAnswer",f3],h5,h5),P.b(["question","Namoz paytida inson ko'ksini yoki boshini qibladan burishining hukmi qanday?","answers",H.a([f4,"Ikkalasi ham namozni buzadi","Bu harakatlar namozni buzmaydi, ammo makruh","Makruh ham emas, namozni ham buzmaydi"],h4),"correctAnswer",f4],h5,h5),P.b(["question","Quydagilarning qaysi biri namozni buzadi?","answers",H.a(["Bilib, bilmay yoki adashib gapirish","Uzrsiz yo'talish, tomoq qirqish","Namoz davomida maxs muddatining tugashi",f5],h4),"correctAnswer",f5],h5,h5),P.b(["question","Quydagilardan qaysi bir namoz vaqtida makruh amal hisoblanadi?","answers",H.a(["Erkaklarning sajdada tirsaklarini yerga tegishi","Sajdaga borayotganda kiyimlarni yig'ish, to'g'irlash","Namozda ikkinchi rak'atdagi qiroatni birinchi rak'attan uzun qilish",f5],h4),"correctAnswer",f5],h5,h5),P.b(["question","Qiyin ahvolda qolgan kishining yordamga chaqirishini eshitganida, yordam berish uchun namozni buzish hukmi nima?","answers",H.a(["Harom","Vojib","Sunna","Makruh"],h4),"correctAnswer","Vojib"],h5,h5),P.b(["question","Farz namoz o\u2018qiyotgan kishining ota-onasidan biri chaqirganida namozni buzishi joizmi?","answers",H.a(["Joiz","Joiz lekin makruh","Namozni buzish Vojib","Joiz emas"],h4),"correctAnswer","Joiz emas"],h5,h5),P.b(["question","Qunut duosini bilmagan inson Vitr namozida nima qiladi?","answers",H.a([f6,"Uch marta Alhamdulillah deyishi kifoya","Bir muddat sukut saqlab ruku qiladi","Qunut duosini bilmasa Vitr namozi insondan soqit bo'ladi"],h4),"correctAnswer",f6],h5,h5),P.b(["question","Namozda Vojib amalni qasddan tark etishning hukmi nima?","answers",H.a([f7,f8,f9,c],h4),"correctAnswer",f8],h5,h5),P.b(["question","Namozda Vojib amalni bilmasdan tark etishning hukmi nima?","answers",H.a([f7,f8,f9,c],h4),"correctAnswer",f9],h5,h5),P.b(["question","Qur'oni Karimdagi sajda oyatlarini o'qigandan keyin Sajdai Tilovat qilish uchun tahorat shartmi?","answers",H.a(["Shart emas",b0,"Tahorat shart",c],h4),"correctAnswer","Tahorat shart"],h5,h5),P.b(["question","Istisqo qanday namoz?","answers",H.a(["Quyosh tutilsa o'qiladigan namoz","Oy tutilsa o'qiladigan namoz","Shukr namozi",g0],h4),"correctAnswer",g0],h5,h5),P.b(["question","Qul a'uuzu bi Robbin-naas oyatining ma'nosi nima?","answers",H.a([g1,g2,g3,g4],h4),"correctAnswer",g1],h5,h5),P.b(["question","Malikin-naas oyatining ma'nosi nima?","answers",H.a([g1,g2,g3,g4],h4),"correctAnswer",g2],h5,h5),P.b(["question","Ilahin-naas oyatining ma'nosi nima?","answers",H.a([g1,g2,g3,g4],h4),"correctAnswer",g3],h5,h5),P.b(["question","Min sharril-waswaasil-xonnaas oyatining ma'nosi nima?","answers",H.a([g1,g2,g3,g4],h4),"correctAnswer",g4],h5,h5),P.b(["question","Allazi yuwaswisu fi sudurin-naas oyatining ma'nosi nima?","answers",H.a([g5,g6,g7,c],h4),"correctAnswer",g5],h5,h5),P.b(["question","Minal-jinnati wan-naas oyatining ma'nosi nima?","answers",H.a([g5,g6,g7,c],h4),"correctAnswer",g6],h5,h5),P.b(["question","Robbana atina fid-dunya hasana, wa fil-aaxiroti hasana, wa qina a'zaaban-naar duosining ma'nosi nima?","answers",H.a(["Robbimiz, bizga bu dunyoda ham yaxshilikni","Oxiratda ham yaxshilikni bergin","Va bizni do'zax azobidan asragin",g8],h4),"correctAnswer",g8],h5,h5),P.b(["question","Rabbana taqabbal minna innaka antas Samii'ul Aliim duosining ma'nosi nima?","answers",H.a([g9,"Ey Robbimiz, qalbimizni hidoyatdan adashtirma","Ey Robbimiz, to'g'ri yo'ldan bizlarni adashtirma",c],h4),"correctAnswer",g9],h5,h5),P.b(["question","Alloh taoloning Quddus ismi nima ma'noni bildiradi?","answers",H.a([h0,h1,h2,h3],h4),"correctAnswer",h0],h5,h5),P.b(["question","Alloh taoloning Muhaymin ismi nima ma'noni bildiradi?","answers",H.a([h0,h1,h2,h3],h4),"correctAnswer",h1],h5,h5),P.b(["question","Alloh taoloning Xobiyr ismi nima ma'noni bildiradi?","answers",H.a([h0,h1,h2,h3],h4),"correctAnswer",h2],h5,h5),P.b(["question","Alloh taoloning Basiyr ismi nima ma'noni bildiradi?","answers",H.a([h0,h1,h2,h3],h4),"correctAnswer",h3],h5,h5)],H.cu("v<J<@,@>*>"))})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.A,MediaError:J.A,Navigator:J.A,NavigatorConcurrentHardware:J.A,NavigatorUserMediaError:J.A,OverconstrainedError:J.A,PositionError:J.A,SQLError:J.A,HTMLAudioElement:W.e,HTMLBRElement:W.e,HTMLBaseElement:W.e,HTMLBodyElement:W.e,HTMLCanvasElement:W.e,HTMLContentElement:W.e,HTMLDListElement:W.e,HTMLDataElement:W.e,HTMLDataListElement:W.e,HTMLDetailsElement:W.e,HTMLDialogElement:W.e,HTMLEmbedElement:W.e,HTMLFieldSetElement:W.e,HTMLHRElement:W.e,HTMLHeadElement:W.e,HTMLHeadingElement:W.e,HTMLHtmlElement:W.e,HTMLIFrameElement:W.e,HTMLImageElement:W.e,HTMLInputElement:W.e,HTMLLabelElement:W.e,HTMLLegendElement:W.e,HTMLLinkElement:W.e,HTMLMapElement:W.e,HTMLMediaElement:W.e,HTMLMenuElement:W.e,HTMLMetaElement:W.e,HTMLMeterElement:W.e,HTMLModElement:W.e,HTMLOListElement:W.e,HTMLObjectElement:W.e,HTMLOptGroupElement:W.e,HTMLOptionElement:W.e,HTMLOutputElement:W.e,HTMLParagraphElement:W.e,HTMLParamElement:W.e,HTMLPictureElement:W.e,HTMLPreElement:W.e,HTMLProgressElement:W.e,HTMLQuoteElement:W.e,HTMLScriptElement:W.e,HTMLShadowElement:W.e,HTMLSlotElement:W.e,HTMLSourceElement:W.e,HTMLStyleElement:W.e,HTMLTableCaptionElement:W.e,HTMLTableCellElement:W.e,HTMLTableDataCellElement:W.e,HTMLTableHeaderCellElement:W.e,HTMLTableColElement:W.e,HTMLTableElement:W.e,HTMLTableRowElement:W.e,HTMLTableSectionElement:W.e,HTMLTemplateElement:W.e,HTMLTextAreaElement:W.e,HTMLTimeElement:W.e,HTMLTitleElement:W.e,HTMLTrackElement:W.e,HTMLUnknownElement:W.e,HTMLVideoElement:W.e,HTMLDirectoryElement:W.e,HTMLFontElement:W.e,HTMLFrameElement:W.e,HTMLFrameSetElement:W.e,HTMLMarqueeElement:W.e,HTMLElement:W.e,HTMLAnchorElement:W.b2,HTMLAreaElement:W.b3,HTMLButtonElement:W.Y,CDATASection:W.H,CharacterData:W.H,Comment:W.H,ProcessingInstruction:W.H,Text:W.H,CSSStyleDeclaration:W.aq,MSStyleCSSProperties:W.aq,CSS2Properties:W.aq,HTMLDivElement:W.ab,DOMException:W.bO,Element:W.n,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,SubmitEvent:W.c,Window:W.p,DOMWindow:W.p,EventTarget:W.p,HTMLFormElement:W.b7,HTMLCollection:W.a_,HTMLFormControlsCollection:W.a_,HTMLOptionsCollection:W.a_,HTMLLIElement:W.a1,Location:W.bR,MouseEvent:W.w,DragEvent:W.w,PointerEvent:W.w,WheelEvent:W.w,Document:W.i,DocumentFragment:W.i,HTMLDocument:W.i,ShadowRoot:W.i,XMLDocument:W.i,Attr:W.i,DocumentType:W.i,Node:W.i,NodeList:W.aC,RadioNodeList:W.aC,HTMLSelectElement:W.bi,HTMLSpanElement:W.a4,CompositionEvent:W.E,FocusEvent:W.E,KeyboardEvent:W.E,TextEvent:W.E,TouchEvent:W.E,UIEvent:W.E,HTMLUListElement:W.a5,SVGAElement:P.d,SVGAnimateElement:P.d,SVGAnimateMotionElement:P.d,SVGAnimateTransformElement:P.d,SVGAnimationElement:P.d,SVGCircleElement:P.d,SVGClipPathElement:P.d,SVGDefsElement:P.d,SVGDescElement:P.d,SVGDiscardElement:P.d,SVGEllipseElement:P.d,SVGFEBlendElement:P.d,SVGFEColorMatrixElement:P.d,SVGFEComponentTransferElement:P.d,SVGFECompositeElement:P.d,SVGFEConvolveMatrixElement:P.d,SVGFEDiffuseLightingElement:P.d,SVGFEDisplacementMapElement:P.d,SVGFEDistantLightElement:P.d,SVGFEFloodElement:P.d,SVGFEFuncAElement:P.d,SVGFEFuncBElement:P.d,SVGFEFuncGElement:P.d,SVGFEFuncRElement:P.d,SVGFEGaussianBlurElement:P.d,SVGFEImageElement:P.d,SVGFEMergeElement:P.d,SVGFEMergeNodeElement:P.d,SVGFEMorphologyElement:P.d,SVGFEOffsetElement:P.d,SVGFEPointLightElement:P.d,SVGFESpecularLightingElement:P.d,SVGFESpotLightElement:P.d,SVGFETileElement:P.d,SVGFETurbulenceElement:P.d,SVGFilterElement:P.d,SVGForeignObjectElement:P.d,SVGGElement:P.d,SVGGeometryElement:P.d,SVGGraphicsElement:P.d,SVGImageElement:P.d,SVGLineElement:P.d,SVGLinearGradientElement:P.d,SVGMarkerElement:P.d,SVGMaskElement:P.d,SVGMetadataElement:P.d,SVGPathElement:P.d,SVGPatternElement:P.d,SVGPolygonElement:P.d,SVGPolylineElement:P.d,SVGRadialGradientElement:P.d,SVGRectElement:P.d,SVGScriptElement:P.d,SVGSetElement:P.d,SVGStopElement:P.d,SVGStyleElement:P.d,SVGElement:P.d,SVGSVGElement:P.d,SVGSwitchElement:P.d,SVGSymbolElement:P.d,SVGTSpanElement:P.d,SVGTextContentElement:P.d,SVGTextElement:P.d,SVGTextPathElement:P.d,SVGTextPositioningElement:P.d,SVGTitleElement:P.d,SVGUseElement:P.d,SVGViewElement:P.d,SVGGradientElement:P.d,SVGComponentTransferFunctionElement:P.d,SVGFEDropShadowElement:P.d,SVGMPathElement:P.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLLIElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLSpanElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLUListElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dW,[])
else F.dW([])})})()
//# sourceMappingURL=main.dart.js.map
