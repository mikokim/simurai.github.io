montageDefine("a7dc6de","generic-set",{dependencies:[],factory:function(e,t,n){function r(){throw new Error("Can't construct. GenericSet is a mixin.")}n.exports=r,r.prototype.union=function(e){var t=this.constructClone(this);return t.addEach(e),t},r.prototype.intersection=function(e){return this.constructClone(this.filter(function(t){return e.has(t)}))},r.prototype.difference=function(e){var t=this.constructClone(this);return t.deleteEach(e),t},r.prototype.symmetricDifference=function(e){var t=this.union(e),n=this.intersection(e);return t.difference(n)},r.prototype.equals=function(e,t){var n=this;return Object.can(e,"reduce")&&this.length===e.length&&e.reduce(function(e,r){return e&&n.has(r,t)},!0)},r.prototype.contains=function(e){return this.has(e)},r.prototype.remove=function(e){return this["delete"](e)},r.prototype.toggle=function(e){this.has(e)?this["delete"](e):this.add(e)}}})