montageDefine("eb3badc","data/blueprint",{dependencies:["montage","data/mapping","data/object-id","data/query","data/object-property","core/promise","core/exception","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/mapping").MappingSet,s=e("data/object-id").TemporaryObjectId,o=e("data/query").Query,u=e("data/object-property").ObjectProperty,a=e("core/promise").Promise,f=e("core/exception").Exception,l=e("core/logger").logger("blueprint"),c=null,h=t.BlueprintBinderManager=r.create(r,{init:{serializable:!1,enumerable:!1,value:function(){return this}},blueprintBinders:{serializable:!0,writable:!1,distinct:!0,value:new Array(10)},addBlueprintBinder:{value:function(e){if(e!==null){var t=this.blueprintBinders.indexOf(e);t>=0&&this.blueprintBinders.splice(t,1),this.blueprintBinders.push(e)}}},removeBlueprintBinder:{value:function(e){if(e!==null){var t=this.blueprintBinders.indexOf(e);t>=0&&this.blueprintBinders.splice(t,1)}}},blueprintForPrototype:{value:function(e,t){var n,r,i;for(i=0;typeof (n=this.blueprintBinders[i])!="undefined";i++){r=n.blueprintForPrototype(e,t);if(r!==null)return r}return null}}}),p=t.BlueprintObject=r.create(r,{_name:{serializable:!0,enumerable:!1,value:null},name:{get:function(){return this._name}},_mappings:{serializable:!0,enumerable:!1,distinct:!0,value:new Array(5)},_mappingForName:{value:{},serializable:!1,distinct:!0,enumerable:!1,writable:!1},deserializedFromSerialization:{value:function(){var e,t;for(t=0;typeof (e=this._mappings[t])!="undefined";t++)this._mappingForName[e.name]=e}},mappings:{get:function(){return this._mappings}},addMapping:{value:function(e){if(e!==null){var t=this.mappings.indexOf(e);if(t<0){if(e.owner!==this)throw new Error("Mapping already owned: "+JSON.stringify(e));this.mappings.push(e),this._addMappingForName(e)}}return e}},removeMapping:{value:function(e){if(e!==null){var t=this.mappings.indexOf(e);t>=0&&(this.mappings.splice(t,1),this._removeMappingForName(e))}return e}},_addMappingForName:{value:function(e){return this._mappingForName[e.name]=e,e}},_removeMappingForName:{value:function(e){return delete this._mappingForName[e.name],e}},mappingForName:{value:function(e){return this._mappingForName[e]}}}),d=t.BlueprintBinder=r.create(p,{manager:{get:function(){return c===null&&(c=h.create().init()),c}},_blueprintForPrototypeTable:{value:{},serializable:!1,distinct:!0,enumerable:!1,writable:!1},restrictionsTable:{value:{},serializable:!0,distinct:!0,enumerable:!1,writable:!1},initWithName:{value:function(e){return this.name=e!==null?e:"default",this}},blueprints:{serializable:!0,distinct:!0,writable:!1,value:new Array(30)},addBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t<0){e.binder!==null&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var n=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[n]=e}}return e}},removeBlueprint:{value:function(e){if(e!==null){var t=this.blueprints.indexOf(e);if(t>=0){this.blueprints.splice(t,1),e.binder=null;var n=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[n]}}return e}},addBlueprintNamed:{value:function(e,t){return this.addBlueprint(v.create().initWithNameAndModuleId(e,t))}},addRestriction:{value:function(e,t){var n=null;return e!=null&&t!=null&&(n=this.restrictionsTable[e]=t),n}},removeRestriction:{value:function(e){if(e!==null){var t=this.restrictionsTable[e];t!=null&&delete t}return t}},defaultSelectorForRestriction:{value:function(e){var t=null;return e!=null&&(t=this.restrictionsTable[e.name],typeof t=="undefined"&&(t=null)),t}},blueprintForPrototype:{value:function(e,t){var n=t+"."+e,r=this._blueprintForPrototypeTable[n];if(typeof r=="undefined"){var i,s;for(s=0;typeof (i=this.blueprints[s])!="undefined";s++)if(i.prototypeName===e&&i.moduleId===t){r=i;break}this._blueprintForPrototypeTable[n]=r}if(!r)throw new Error("No such blueprint: "+JSON.stringify(e)+" in "+JSON.stringify(t)+". Consider: "+JSON.stringify(Object.keys(this._blueprintForPrototypeTable)));return r}},createMappingForStore:{value:function(e,t,n){var s=this.mappingForName(t);s||(s=i.create().initWithBinderAndName(this,t),this.addMapping(s),this._defaultMappingSetName.length==0&&(this._defaultMappingSetName=s.name));var o=r.getInfoForObject(e),u=s.mappingForStoreId(o.objectName,o.moduleId);u||(u=e.createBinderMapping.initWithOwnerAndParent(this,s),s.addMapping(u));if(n||typeof n=="undefined"){var a,f;for(f=0;typeof (a=this.blueprints[f])!="undefined";f++)a.createMappingForStore(e,u,t)}return u}},deleteMappingForStore:{value:function(e,t){var n=this.mappingForName(t);if(n){var i=r.getInfoForObject(e),s=n.mappingForStoreId(i.objectName,i.moduleId);n.removeMapping(s);var o,u;for(u=0;typeof (o=this.blueprints[u])!="undefined";u++)o.deleteMappingForStore(e,s,t);n.mappings.length==0&&(this.removeMapping(n),this._defaultMappingSetName.length>0&&this._defaultMappingSetName===n.name&&(this.mappings.length>0?this._defaultMappingSetName=this.mappings[0].name:this._defaultMappingSetName=""))}}},_defaultMappingSetName:{serializable:!0,enumerable:!1,value:""},defaultMappingSetName:{get:function(){return this._defaultMappingSetName.length==0&&this.mappings.length>0&&(this._defaultMappingSetName=this.mappings[0].name),this._defaultMappingSetName},set:function(e){this._defaultMappingSetName=e}}}),v=t.Blueprint=r.create(p,{create:{configurable:!0,value:function(e,t){if(typeof e=="undefined"||v.isPrototypeOf(e)){var n=Object.getPrototypeOf(v).create;return n.call(this,typeof e=="undefined"?this:e,t)}var i=r.create(e,t);return u.manager.applyWithBlueprint(i,this),this.customPrototype=!0,i}},newInstance:{value:function(){var e=this.newInstancePrototype();return e?e.create():null}},newInstancePrototype:{value:function(){var n=this;if(this.customPrototype){var i=a.defer();return e.async(this.moduleId,function(e){i.resolve(e)}),i.promise.then(function(e){var t=e[n.prototypeName];return t?t:null})}if(typeof t[n.prototypeName]=="undefined"){var s=this.parent?this.parent.newInstancePrototype():r,o=r.create(s,{init:{value:function(){return this}}});u.manager.applyWithBlueprint(o,this),t[n.prototypeName]=o}var f=t[n.prototypeName];return f?f:null}},identifier:{get:function(){return this.name.toLowerCase()}},initWithName:{value:function(e){return this.initWithNameAndModuleId(e,null)}},initWithNameAndModuleId:{value:function(e,t){return this._name=e!==null?e:"default",this.prototypeName=this.name,this.moduleId=t,this.customPrototype=!1,this}},binder:{value:null,serializable:!0},parent:{value:null,serializable:!0},moduleId:{value:null,serializable:!0},prototypeName:{value:null,serializable:!0},customPrototype:{value:!1,serializable:!0},attributes:{value:new Array(10),serializable:!0,distinct:!0,writable:!1},_attributesTable:{value:{},serializable:!1,distinct:!0,enumerable:!1,writable:!1},queries:{value:new Array(10),serializable:!0,distinct:!0,writable:!1},_queriesTable:{value:{},serializable:!1,distinct:!0,enumerable:!1,writable:!1},restrictionsTable:{value:{},serializable:!0,distinct:!0,enumerable:!1,writable:!1},addAttribute:{value:function(e){if(e!==null&&e.name!==null){var t=this.attributes.indexOf(e);t<0&&(e.blueprint!==null&&e.blueprint.removeAttribute(e),this.attributes.push(e),this._attributesTable[e.name]=e,e.blueprint=this)}return e}},removeAttribute:{value:function(e){if(e!==null&&e.name!==null){var t=this.attributes.indexOf(e);t>=0&&(this.attributes.splice(t,1),delete this._attributesTable[e.name],e.blueprint=null)}return e}},addToOneAttributeNamed:{value:function(e){return this.addAttribute(y.create().initWithName(e))}},addToManyAttributeNamed:{value:function(e){return this.addAttribute(y.create().initWithNameAndCardinality(e,Infinity))}},addToOneAssociationNamed:{value:function(e,t){var n=this.addAttribute(w.create().initWithName(e));return t!=null&&typeof t.targetBlueprint=="object"&&(n.targetBlueprint=t.blueprint,t.targetBlueprint=this),n}},addToManyAssociationNamed:{value:function(e,t){var n=this.addAttribute(w.create().initWithNameAndCardinality(e,Infinity));return t!=null&&typeof t.targetBlueprint=="object"&&(n.targetBlueprint=t.blueprint,t.targetBlueprint=this),n}},attributeForName:{value:function(e){var t=this._attributesTable[e];if(typeof t=="undefined"){t=b;var n,r;for(r=0;typeof (n=this.attributes[r])!="undefined";r++)if(n.name===e){t=n;break}this._attributesTable[e]=t}return t===b&&(t=null),t}},createMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);if(!r){r=e.createBlueprintMapping.initWithOwnerAndParent(this,t),this.addMapping(r);var i,s;for(s=0;typeof (i=this.attributes[s])!="undefined";s++)i.createMappingForStore(e,r,n)}return r}},deleteMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);if(r&&r.parent===t){this.removeMapping(r);var i,s;for(s=0;typeof (i=this.attributes[s])!="undefined";s++)i.deleteMappingForStore(e,r,n)}}},addQuery:{value:function(e){if(e!==null&&e.name!=null){if(e.blueprint!==this)throw f.create().initWithMessageTargetAndMethod("Query not associated with this blueprint",this,e.name);var t=this.queries.indexOf(e);t<0&&(this.queries.push(e),this._queriesTable[e.name]=e)}return e}},removeQuery:{value:function(e){if(e!==null&&e.name!=null){if(e.blueprint!==this)throw f.create().initWithMessageTargetAndMethod("Query not associated with this blueprint",this,e.name);var t=this.queries.indexOf(e);t>=0&&(this.queries.splice(t,1),delete this._queriesTable[e.name])}return e}},queryForName:{value:function(e){var t=this._queriesTable[e];if(typeof t=="undefined"){t=g;var n,r;for(r=0;typeof (n=this.queries[r])!="undefined";r++)if(t.name===e){t=n;break}this._queriesTable[e]=t}return t===g&&(t=null),t}},addRestriction:{value:function(e,t){var n=null;return e!=null&&t!=null&&(n=this.restrictionsTable[e]=t),n}},removeRestriction:{value:function(e){if(e!==null){var t=this.restrictionsTable[e];t!=null&&delete t}return t}},selectorForRestriction:{value:function(e){var t=null;return e!=null&&(t=this.restrictionsTable[e.name],typeof t=="undefined"&&(t=null),t==null&&this.binder!==null&&(t=this.binder.defaultSelectorForRestriction(e))),t}},blueprintGet:{value:function(e){var t=this.blueprint.attributeForName(e),n="_"+t.name;return this.willRead(t),this[n]},enumerable:!1,serializable:!1},blueprintSet:{value:function(e,t){var n=this.blueprint.attributeForName(e),r="_"+n.name;if(t==null&&n.denyDelete)throw f.create().initWithMessageTargetAndMethod("Deny Delete",this,n.name);this.willModify(n,t),this[r]=t},enumerable:!1,serializable:!1},objectId$Implementation:{get:function(){return s.create().initWithBlueprint(this)}},query:{value:function(){return o.create().initWithBlueprint(this)}}}),m=Object.freeze(v.create().initWithName("Unknown")),g=Object.freeze(o.create().initWithBlueprint(null)),y=t.Attribute=r.create(p,{initWithName:{value:function(e){return this.initWithNameAndCardinality(e,1)}},initWithNameAndCardinality:{value:function(e,t){return this._name=e!==null?e:"default",this._cardinality=t>0?t:1,this}},identifier:{get:function(){return[this.blueprint.identifier,this.name].join("_")}},blueprint:{value:null,serializable:!0},_cardinality:{serializable:!0,enumerable:!1,value:1},cardinality:{get:function(){return this._cardinality}},mandatory:{value:!1,serializable:!0},denyDelete:{value:!1,serializable:!0},readOnly:{value:!1,serializable:!0},isAssociation:{get:function(){return!1},serializable:!1},isToMany:{get:function(){return this.cardinality>1},serializable:!1},isDerived:{get:function(){return!1},serializable:!1},valueType:{value:"string",serializable:!0},valueObjectPrototypeName:{value:null,serializable:!0},valueObjectModuleId:{value:null,serializable:!0},createMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);return r||(r=e.createAttributeMapping.initWithOwnerAndParent(this,t),this.addMapping(r)),r}},deleteMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);r&&this.removeMapping(r)}}}),b=Object.freeze(y.create().initWithName("Unknown")),w=t.Association=r.create(y,{targetBlueprint:{value:null,serializable:!0},isAssociation:{get:function(){return!0},serializable:!1},createMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);return r||(r=e.createAssociationMapping.initWithOwnerAndParent(this,t),this.addMapping(r)),r}},deleteMappingForStore:{value:function(e,t,n){var r=this.mappingForName(n);r&&this.removeMapping(r)}}}),E=t.DerivedAttribute=r.create(y,{isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],serializable:!0},getterDefinition:{value:null,serializable:!0},setterDefinition:{value:null,serializable:!0}})}})