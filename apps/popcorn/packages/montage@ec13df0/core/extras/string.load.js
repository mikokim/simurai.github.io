montageDefine("ec13df0","core/extras/string",{dependencies:[],factory:function(e,t,n){Object.defineProperty(String,"isString",{value:function(e){return Object.prototype.toString.call(e)==="[object String]"},writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"equals",{value:function(e){return this.valueOf()===Object.getValueOf(e)},writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"contains",{value:function(e){return this.indexOf(e)!==-1},writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"toCapitalized",{value:function(){return this.charAt(0).toUpperCase()+this.slice(1)},writable:!0,configurable:!0}),Object.defineProperty(String.prototype,"addEventListener",{value:Function.noop,writable:!0,configurable:!0})}})