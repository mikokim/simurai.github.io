montageDefine("ec13df0","core/meta/binder",{dependencies:["montage","core/promise","core/deserializer","core/meta/binder-manager","core/meta/blueprint","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/promise").Promise,s=e("core/deserializer").Deserializer,o=e("core/meta/binder-manager").BinderManager,u=e("core/meta/blueprint"),a=e("core/logger").logger("blueprint"),f=null,l=t.Binder=r.create(r,{didCreate:{value:function(){return this._name=null,this.binderModuleId=null,this.isDefault=!1,r.defineProperty(this,"_blueprintForPrototypeTable",{writable:!1,value:{}}),r.defineProperty(this,"blueprints",{serializable:!1,writable:!1,value:[]}),this}},initWithName:{value:function(e){return this._name=e!=null?e:"default",l.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprints",this.blueprints),e.setProperties()}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this.blueprints.push.apply(this.blueprints,e.getProperty("blueprints"));var t=r.getSerializablePropertyNames(this);for(var n=0,i=t.length;n<i;n++){var s=t[n];this[s]=e.getProperty(s)}}},_name:{value:null},name:{get:function(){return this._name}},manager:{get:function(){return f===null&&(f=o.create()),f}},_blueprintForPrototypeTable:{value:null},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderModuleId:{value:null},isDefault:{serializable:!1,value:!1},getBinderWithModuleId:{value:function(e,t){var n=i.defer();return t||(t=this.require),t.async(e).then(function(r){try{s.create().initWithObjectAndRequire(r,t,e).deserializeObject(function(t){t?(t.binderModuleId=e,l.manager.addBinder(this),n.resolve(t)):n.reject("No Binder found "+e)},t)}catch(i){n.reject("Error deserializing Binder "+e+" "+JSON.stringfy(i))}},n.reject),n.promise}},addBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t<0){e.binder!==null&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var n=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[n]=e}}return e}},removeBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t>=0){this.blueprints.splice(t,1),e.binder=null;var n=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[n]}}return e}},addBlueprintNamed:{value:function(e,t){return this.addBlueprint(u.Blueprint.create().initWithNameAndModuleId(e,t))}},blueprintForPrototype:{value:function(e,t){var n=t+"."+e,r=this._blueprintForPrototypeTable[n];if(typeof r=="undefined"){var i,s;for(s=0;typeof (i=this.blueprints[s])!="undefined";s++)if(i.prototypeName===e&&i.moduleId===t){r=i;break}this._blueprintForPrototypeTable[n]=r}return r}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=l.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}}})}})