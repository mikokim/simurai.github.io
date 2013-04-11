montageDefine("ec13df0","core/core",{dependencies:["collections/shim","core/shim/object","core/shim/array","core/shim/string","core/extras/object","core/extras/array","core/extras/date","core/extras/element","core/extras/function","core/extras/regexp","core/extras/string","core/uuid","core/promise"],factory:function(e,t,n){function y(e,t){var n=i+t+r;return e.hasOwnProperty(n)?e[n]:Object.defineProperty(e,n,{enumerable:!1,configurable:!1,writable:!1,value:Object.create(y(Object.getPrototypeOf(e),t))})[n]}e("collections/shim"),e("core/shim/object"),e("core/shim/array"),e("core/shim/string"),e("core/extras/object"),e("core/extras/array"),e("core/extras/date"),e("core/extras/element"),e("core/extras/function"),e("core/extras/regexp"),e("core/extras/string");var r="AttributeProperties",i="_",s="__proto__",o="value",u="enumerable",a="distinct",f="serializable",l="modify",c=Array.prototype,h=Object.prototype,p=t.Montage={};Object.defineProperty(p,"create",{configurable:!0,value:function(e,t){if(e!==undefined&&typeof e!="object")throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(!t){var n=Object.create(typeof e=="undefined"?this:e);return typeof n.didCreate=="function"&&n.didCreate(),n}var r=Object.create(e);return p.defineProperties(r,t),r}});var d=[f];d.forEach(function(e){Object.defineProperty(Object.prototype,i+e+r,{enumerable:!1,configurable:!1,writable:!1,value:{}})}),Object.defineProperty(p,"defineProperty",{value:function(e,t,n){if(typeof e!="object"||e===null)throw new TypeError("Object must be an object, not '"+e+"'");var r=n.dependencies,l=o in n;if(a in n&&!l)throw"Cannot use distinct attribute on non-value property '"+t+"'";if(s in n)n.__proto__=l?typeof n.value=="function"?g:m:v;else{var d;l?typeof n.value=="function"?d=g:d=m:d=v;for(var b in d)b in n||(n[b]=d[b])}!n.hasOwnProperty(u)&&t.charAt(0)===i&&(n.enumerable=!1),n.hasOwnProperty(f)||(n.enumerable?n.get&&!n.set?n.serializable=!1:n.writable===!1&&(n.serializable=!1):n.serializable=!1);if(r){var w=0,E;for(;E=r[w];w++)p.addDependencyToProperty(e,E,t)}f in n&&(y(e,f)[t]=n.serializable);if(n.distinct!==!0||typeof n.value!="object")return Object.defineProperty(e,t,n);(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===h?Object.keys(n).length!==0?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===c?n.length!==0?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,s;e=[];for(r=0;typeof (s=n[r])!="undefined";r++)e[r]=s;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})})(t,i+t,n.value,e)}}),Object.defineProperty(p,"defineProperties",{value:function(e,t){if(typeof t!="object"||t===null)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var v={enumerable:!0,configurable:!0,serializable:"reference"},m={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},g={writable:!0,enumerable:!1,configurable:!0,serializable:!1};p.defineProperty(p,"addDependencyToProperty",{value:function(e,t,n){e._dependenciesForProperty||p.defineProperty(e,"_dependenciesForProperty",{value:{}}),e._dependenciesForProperty[n]||(e._dependenciesForProperty[n]=[]),e._dependenciesForProperty[n].push(t)}}),p.defineProperty(p,"removeDependencyFromProperty",{value:function(e,t,n){if(!e._dependenciesForProperty)return;var r=e._dependenciesForProperty[n];r&&(r=r.filter(function(e){return e!==t}))}}),p.defineProperty(p,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),p.defineProperty(p,"getPropertyAttribute",{value:function(e,t,n){var s=i+n+r,o=e[s];if(o)return o[t]}}),p.defineProperty(p,"getPropertyAttributes",{value:function(e,t){var n={},s=i+t+r,o=e[s];if(!o)return;for(var u in o)n[u]=o[u];return n}});var b={isInstance:{value:!0}},w={objectName:{value:"Function"},isInstance:{value:!0}};p.defineProperty(p,"getInfoForObject",{value:function(e){var t,n;if(S.call(e,"_montage_metadata"))return e._montage_metadata;t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,e.constructor===Function?n=w:n=b;try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}}),Object.defineProperty(p,"doNothing",{value:function(){}}),Object.defineProperty(p,"self",{value:function(){return this}}),Object.defineProperty(p,"__OBJECT_COUNT",{value:0,writable:!0});var E=e("core/uuid"),S=Object.prototype.hasOwnProperty,x=function(){var e=E.generate(),t=p.getInfoForObject(this);try{if(t!==null&&t.isInstance===!1)this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:x.call(this)}});else{t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e});if(this instanceof Element||!t.isInstance||!(o in Object.getOwnPropertyDescriptor(this,"uuid"))||!(s in this))this._uuid=e}}catch(n){this._uuid=e}return e},T=function(){return S.call(this,"_uuid")?this._uuid:x.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:T,set:function(){}}),p.defineProperty(p,"identifier",{value:null,serializable:!0}),Object.defineProperty(p,"equals",{value:function(e){return this===e||this.uuid===e.uuid}}),Object.defineProperty(p,"callDelegateMethod",{value:function(e){var t=this.delegate,n,r;if(typeof this.identifier=="string"){n=this.identifier+e.toCapitalized();if(t&&typeof (r=t[n])=="function")return c.shift.call(arguments),r.apply(t,arguments)}if(t&&typeof (r=t[e])=="function")return c.shift.call(arguments),r.apply(t,arguments)}}),t._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=p.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=p.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=r===-1?0:r+1,i=i===-1?n.length:i,i=i<r?n.length:i,p.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+"-blueprint.json"})}return t._blueprintModuleId}},t._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var n=p.getInfoForObject(this),r=n&&!n.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(r,"_blueprint")||!r._blueprint){var i=r.blueprintModuleId;if(i==="")throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(r)+"'");t._blueprintDescriptor.BlueprintModulePromise||(t._blueprintDescriptor.BlueprintModulePromise=e.async("core/meta/blueprint").get("Blueprint")),p.defineProperty(r,"_blueprint",{enumerable:!1,value:t._blueprintDescriptor.BlueprintModulePromise.then(function(e){var t=p.getInfoForObject(r);return e.getBlueprintWithModuleId(i,t.require).then(null,function(){var t=e.createDefaultBlueprintForObject(r);return t.blueprintModuleId=i,t})})})}return r._blueprint},set:function(t){var n=p.getInfoForObject(this),r,i=n&&!n.isInstance?this:Object.getPrototypeOf(this);if(t===null)r=null;else{if(typeof t.then=="function")throw new TypeError("Object blueprint should not be a promise '"+JSON.stringify(t)+"'");t.blueprintModuleId=i.blueprintModuleId,r=e("core/promise").Promise.resolve(t)}p.defineProperty(i,"_blueprint",{enumerable:!1,value:r})}}}})