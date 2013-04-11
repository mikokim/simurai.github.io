montageDefine("15fd299","fast-set",{dependencies:["./shim","./dict","./list","./generic-collection","./generic-set","./tree-log","./listen/property-changes"],factory:function(e,t,n){"use strict";function c(e,t,n,r){if(!(this instanceof c))return new c(e,t,n,r);t=t||Object.equals,n=n||Object.hash,r=r||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=r,this.buckets=new this.Buckets(null,this.Bucket),this.length=0,this.addEach(e)}var r=e("./shim"),i=e("./dict"),s=e("./list"),o=e("./generic-collection"),u=e("./generic-set"),a=e("./tree-log"),f=e("./listen/property-changes"),l=Object.prototype.hasOwnProperty;n.exports=c,Object.addEach(c.prototype,o.prototype),Object.addEach(c.prototype,u.prototype),Object.addEach(c.prototype,f.prototype),c.prototype.Buckets=i,c.prototype.Bucket=s,c.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},c.prototype.has=function(e){var t=this.contentHash(e);return this.buckets.get(t).has(e)},c.prototype.get=function(e){var t=this.contentHash(e),n=this.buckets;return n.has(t)?n.get(t).get(e):this.getDefault(e)},c.prototype["delete"]=function(e){var t=this.contentHash(e),n=this.buckets;if(n.has(t)){var r=n.get(t);if(r["delete"](e))return this.length--,r.length===0&&n["delete"](t),!0}return!1},c.prototype.clear=function(){this.buckets.clear(),this.length=0},c.prototype.add=function(e){var t=this.contentHash(e),n=this.buckets;return n.has(t)||n.set(t,new this.Bucket(null,this.contentEquals)),n.get(t).has(e)?!1:(n.get(t).add(e),this.length++,!0)},c.prototype.reduce=function(e,t){var n=arguments[2],r=this.buckets,i=0;return r.reduce(function(t,r){return r.reduce(function(t,r){return e.call(n,t,r,i++,this)},t,this)},t,this)},c.prototype.one=function(){if(this.length>0)return this.buckets.one().one()},c.prototype.iterate=function(){return this.buckets.values().flatten().iterate()},c.prototype.log=function(e,t,n,r){e=e||a.unicodeSharp,t=t||this.logNode,n||(n=console.log,r=console),n=n.bind(r);var i=this.buckets,s=i.keys();s.forEach(function(o,u){var a,f;u===s.length-1?(a=e.fromAbove,f=" "):u===0?(a=e.branchDown,f=e.strafe):(a=e.fromBoth,f=e.strafe);var l=i.get(o);n.call(r,a+e.through+e.branchDown+" "+o),l.forEach(function(i,s){var o,u;s===l.head.prev?(o=e.fromAbove,u=" "):(o=e.fromBoth,u=e.strafe);var a;t(s,function(t){a?n.call(r,f+" "+u+"  "+t):(n.call(r,f+" "+o+e.through+e.through+t),a=!0)},function(t){n.call(r,f+" "+e.strafe+"  "+t)})})})},c.prototype.logNode=function(e,t){var n=e.value;Object(n)===n?JSON.stringify(n,null,4).split("\n").forEach(function(e){t(" "+e)}):t(" "+n)}}})